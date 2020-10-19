/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';
import { dialogService } from '../../services/dialog/dialog.service';

@Component({
    selector: 'bh-requests',
    templateUrl: './requests.template.html'
})

export class requestsComponent extends NBaseComponent implements OnInit {
    spinner = false;
    currentUser: any = {};
    newRequests: any = [];
    allRequests: any = [];
    requestTypes: any = ['new', 'approved', 'completed', 'declined'];

    requestsDataSource: any = [];
    requestsColumns: any = ['requestedBy', 'requestDate', 'typeOfRequest', 'travelDate', 'department', 'status', 'viewTicket'];
    requestsCells: any = ['Requested By', 'Request Date', 'Type Of Request', 'Travel Date', 'Department', 'Status', 'View Ticket'];

    constructor(private ssd: ssd_integrationService, private dialog: dialogService) {
        super();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));

        this.getTravelRequests(0);
    }

    // Difference between two dates in Days using angular
    calculateDiff(receivedDate) {
        let oneDay = 1000 * 3600 * 24;
        let currentDate = new Date().getTime();
        receivedDate = new Date(receivedDate).getTime();
        let result = receivedDate - currentDate;
        return Math.floor(result / oneDay);
    }

    // Get travel requests
    getTravelRequests(indx) {
        let query = (indx == 0) ? 'approved' : (indx == 1) ? 'new' : (indx == 2) ? 'complete' : 'declined';

        let body = {
            lineManagerEmail: this.currentUser['emailId'],
            status: query,
            collection: "travel"
        }

        this.spinner = true;
        this.newRequests = [];
        this.ssd.POST('getData', body).subscribe(res => {
            console.log(res, "All Requests");
            let requestsData = [];
            this.requestsDataSource = [];
            this.allRequests = (res === {}) ? [] : res;
            for (let i = 0; i < this.allRequests.length; i++) {
                // Table Data
                requestsData.push({
                    'requestId': this.allRequests[i]['requestId'],
                    'requestedBy': this.allRequests[i]['employeeName'],
                    'requestDate': this.allRequests[i]['requestDate'],
                    'typeOfRequest': (this.allRequests[i]['modeOfTransport'].toLowerCase() == 'visa') ? this.allRequests[i]['modeOfTransport'] : `${this.allRequests[i]['modeOfTransport']} Travel`,
                    'travelDate': new Date(this.allRequests[i]['tripList'][0]['departureDate']),
                    'department': this.allRequests[i]['department'],
                    'status': this.allRequests[i]['status'],
                    'viewTicket': 'View More'
                });
            }

            requestsData = requestsData.sort((a, b) => a.travelDate - b.travelDate);
            this.requestsDataSource = [...requestsData];
            this.spinner = false;
        }, err => {
            // this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
            console.log(err);
            this.spinner = false;
        });
    }

    viewMore(rId) {
        console.log(rId);
        let data = {};
        for (let k = 0; k < this.allRequests.length; k++) {
            if (this.allRequests[k]['requestId'] == rId) {
                data['travel'] = this.allRequests[k];
                break;
            }
        }
        let operation = 'updateRequest';

        this.dialog.viewNotification(data).subscribe(results => {
            if (results['travel']) {
                delete results['travel']['_id'];

                let body = {
                    collection: 'travel',
                    data: results['travel']
                }

                this.spinner = true;
                this.ssd.POST(operation, body).subscribe(res => {
                    this.spinner = false;
                }, err => {
                    this.spinner = false;
                    // this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
                    console.log(err);
                });
            }
        });
    }
}
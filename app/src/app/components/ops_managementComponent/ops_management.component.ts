/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';
import { dialogService } from '../../services/dialog/dialog.service';

@Component({
    selector: 'bh-ops_management',
    templateUrl: './ops_management.template.html'
})

export class ops_managementComponent extends NBaseComponent implements OnInit {

    spinner = false;
    currentUser: any = {};
    newRequests: any = [];
    allRequests: any = [];
    requestTypes: any = ['new', 'approved', 'completed', 'declined'];

    requestsDataSource: any = [];
    requestsColumns: any = ['requestedBy', 'requestDate', 'typeOfRequest', 'travelDate', 'department', 'manager', 'status', 'viewTicket'];
    requestsCells: any = ['Requested By', 'Request Date', 'Type Of Request', 'Travel Date', 'Department', 'Manager', 'Status', 'View Ticket'];

    facilitiesRequestsDataSource: any = [];
    facilitiesRequestsColumns: any = ['requestedBy', 'requestDate', 'typeOfRequest', 'country', 'department', 'manager', 'status', 'viewTicket'];
    facilitiesRequestsCells: any = ['Requested By', 'Request Date', 'Type Of Request', 'Country', 'Department', 'Manager', 'Status', 'View Ticket'];

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
        let query = (indx == 0) ? 'approved' : (indx == 1) ? 'new' : (indx == 2) ? 'complete' : (indx == 3) ? 'declined' : 'facilities';

        let body = {
            status: query,
            collection: (indx == 4) ? "facilities" : "travel"
        }

        if(indx == 4){
            delete body.status;
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
                if (indx === 4) {
                    requestsData.push({
                        'requestId': this.allRequests[i]['requestId'],
                        'requestedBy': this.allRequests[i]['employeeName'],
                        'requestDate': this.allRequests[i]['requestDate'],
                        'typeOfRequest': this.allRequests[i]['request']['requestType'],
                        'country': this.allRequests[i]['request']['country'],
                        'department': this.allRequests[i]['department'],
                        'manager': this.allRequests[i]['lineManager'],
                        'status': this.allRequests[i]['status'],
                        'viewTicket': 'View More'
                    });
                } else {
                    requestsData.push({
                        'requestId': this.allRequests[i]['requestId'],
                        'requestedBy': this.allRequests[i]['employeeName'],
                        'requestDate': this.allRequests[i]['requestDate'],
                        'typeOfRequest': (this.allRequests[i]['modeOfTransport'].toLowerCase() == 'visa') ? this.allRequests[i]['modeOfTransport'] : `${this.allRequests[i]['modeOfTransport']} Travel`,
                        'travelDate': new Date(this.allRequests[i]['tripList'][0]['departureDate']),
                        'department': this.allRequests[i]['department'],
                        'manager': this.allRequests[i]['lineManager'],
                        'status': this.allRequests[i]['status'],
                        'viewTicket': 'View More'
                    });
                }
            }

            if (indx === 4) {
                requestsData = requestsData.sort((a, b) => a.travelDate - b.travelDate);
                this.facilitiesRequestsDataSource = [...requestsData];
            } else {
                requestsData = requestsData.sort((a, b) => a.travelDate - b.travelDate);
                this.requestsDataSource = [...requestsData];
            }

            this.spinner = false;
        }, err => {
            // this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
            console.log(err);
            this.spinner = false;
        });
    }

    viewMore(rId, isFacility) {
        console.log(rId);
        let data = {};
        for (let k = 0; k < this.allRequests.length; k++) {
            if (this.allRequests[k]['requestId'] == rId) {
                if(isFacility){
                    data['facility'] = this.allRequests[k];
                } else {
                    data['travel'] = this.allRequests[k];
                }
                
                break;
            }
        }
        let operation = 'updateRequest';

        this.dialog.viewNotification(data).subscribe(results => {
            let key = isFacility ? 'facility' : 'travel';

            if (results[key]) {
                delete results[key]['_id'];

                let body = {
                    collection: key,
                    data: results[key]
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

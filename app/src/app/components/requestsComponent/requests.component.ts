/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';

@Component({
    selector: 'bh-requests',
    templateUrl: './requests.template.html'
})

export class requestsComponent extends NBaseComponent implements OnInit {

    spinner = false;
    currentUser: any = {};
    newRequests: any = [];
    allRequests: any = [];
    requestsColumns: any = ['requestedBy', 'requestDate', 'typeOfRequest', 'travelDate', 'department', 'manager', 'status', 'viewTicket'];
    requestsCells: any = ['Requested By', 'Request Date', 'Type Of Request', 'Travel Date', 'Department', 'Manager', 'Status', 'View Ticket'];
    requestsDataSource: any = [];

    constructor(private ssd: ssd_integrationService) {
        super();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));

        this.getTravelRequests();
    }

    // Difference between two dates in Days using angular
    calculateDiff(receivedDate, a, b) {
        console.log(a);
        console.log(b);
        let oneDay = 1000 * 3600 * 24;
        let currentDate = new Date().getTime();
        receivedDate = new Date(receivedDate).getTime();
        let result = receivedDate - currentDate;

        console.log(Math.floor(result / oneDay));
        return Math.floor(result / oneDay);
    }

    // Get travel requests
    getTravelRequests() {
        let body = {
            // lineManagerEmail: this.currentUser['emailId'],
            emailId: this.currentUser['emailId'],
            collection: "travel"
        }

        this.spinner = true;
        this.newRequests = [];
        this.ssd.POST('getData', body).subscribe(res => {
            console.log(res, "All Requests");
            let requestsData = [];
            this.allRequests = (res === {}) ? [] : res;
            for (let i = 0; i < this.allRequests.length; i++) {
                // New Requests
                if (this.allRequests[i]['status'] == "new") {
                    this.newRequests.push(this.allRequests[i]);
                    // Table Data
                    requestsData.push({
                        'requestedBy': this.allRequests[i]['employeeName'],
                        'requestDate': this.allRequests[i]['requestDate'],
                        'typeOfRequest': (this.allRequests[i]['modeOfTransport'].toLowerCase() == 'visa') ? this.allRequests[i]['modeOfTransport'] : `${this.allRequests[i]['modeOfTransport']} Travel`,
                        'travelDate': this.allRequests[i]['tripList'][0]['departureDate'],
                        'department': this.allRequests[i]['department'],
                        'manager': this.allRequests[i]['lineManager'],
                        'status': this.allRequests[i]['status'],
                        'viewTicket': 'View More'
                    });
                }
            }
            this.requestsDataSource = [...requestsData];
            this.spinner = false;
        }, err => {
            // this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
            console.log(err);
            this.spinner = false;
        });
    }
}

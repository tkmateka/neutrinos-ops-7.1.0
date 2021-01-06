/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSelect, MatSelectChange } from '@angular/material/select';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';
import { commonService } from '../../services/common/common.service';

@Component({
    selector: 'bh-facilities_management',
    templateUrl: './facilities_management.template.html'
})

export class facilities_managementComponent extends NBaseComponent implements OnInit {
    spinner = false;
    submitted: boolean = false;
    currentUser: any = {};
    requestTypes = ["Office Hygine", "Guest House Accommodation", "Event Booking Request", "Office Electrical Issues", "Other Request"];
    countries = ["South Africa", "India"];
    facilities = {
            'emailId': '',
            'employeeId': '',
            'employeeName': '',
            'isRead': false,
            'department': '',
            'lineManager': '',
            'lineManagerEmail': '',
            'requestId': null,
            'requestDate': null,
            'status': '',
            'request': {
                'requestType': '',
                'country': '',
                'request': ''
            },
            'comments': []
        };

    constructor(private bdms: NDataModelService, private router: Router, private activatedRoute: ActivatedRoute,
        private ssd: ssd_integrationService, private common: commonService, private snackbar: NSnackbarService ) {
        super();

        this.facilities = this.common.getFacilitiesModel();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }

    // Navigate
    goTo(link) {
        this.router.navigate([link]);
    }

    // Request Operations Assistance
    requestToOps(form) {
        this.submitted = true;
        if (form.invalid) { return false };

        this.facilities.emailId = this.currentUser['emailId'];
        this.facilities.employeeId = this.currentUser['employeeId'];
        this.facilities.employeeName = this.currentUser['givenName'] + " " + this.currentUser['surname'];
        this.facilities.isRead = false;
        this.facilities.department = this.currentUser['department'];
        this.facilities.lineManager = this.currentUser['lineManager'];
        this.facilities.lineManagerEmail = this.currentUser['lineManagerEmail'];
        this.facilities.requestId = new Date().getTime();
         this.facilities.requestDate = new Date();
        this.facilities.status = "new";

        console.log(this.facilities);

        let body = {
            data: this.facilities,
            collection: "facilities",
            // email: {
            //     toEmail: 'tkmateka@gmail.com',
            //     fromEmail: this.currentUser['givenName'] + " " + this.currentUser['surname'],
            //     // cc: ['raghudas.panicker@neutrinos.co'],
            //     topic: "Travel Application",
            //     emailBody: this.currentUser['givenName'] + " " + this.currentUser['surname'] +
            //         ` has requested a new ${this.transportType} ${this.tripType} trip ticket.`
            // }
        }

        if (this.currentUser['employeeId']) {
            this.spinner = true;
            this.ssd.POST('sendRequest', body).subscribe(res => {
                this.spinner = false;
                console.log(res);
                this.snackbar.openSnackBar("Request was successfully added");
                form.reset();
                this.facilities = this.common.getFacilitiesModel();
                // this.getTravelRequests();
            }, err => {
                this.spinner = false;
                console.log(err);
                this.snackbar.openSnackBar(err['error']['error']);
            });
        }
    }


    // Hide Select Placeholder
    select1(sel: MatSelect) {
        sel.placeholder = '';
    }
    select2(sel: MatSelect, txt = '') {
        if (sel.value === undefined) {
            sel.placeholder = txt;
        }
    }
}

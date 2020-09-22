/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material';
import { Observable } from 'rxjs';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';

// Data Models
import { oneway } from '../../models/oneway.model';
import { roundtrip } from '../../models/roundtrip.model';
import { multicity } from '../../models/multicity.model';

@Component({
    selector: 'bh-travel',
    templateUrl: './travel.template.html'
})

export class travelComponent extends NBaseComponent implements OnInit, AfterViewInit {

    airports = [];
    filteredAirports = [];

    block: boolean = false;
    spinner: boolean = false;
    isFlexi: boolean = false;
    submitted: boolean = false;

    currentUser: any = {};
    actionType: string = "new-ticket";
    tripType: string = "one-way";
    modeOfTransport: string = "flight";

    travelRequests: any = [];

    minDate = new Date();
    preferredTimes: string[] = [
        "00:00am - 02:00am", "02:00am - 04:00am", "04:00am - 06:00am", "06:00am - 08:00am",
        "08:00am - 10:00am", "10:00am - 12:00pm", "12:00pm - 14:00pm", "14:00pm - 16:00pm",
        "16:00pm - 18:00pm", "18:00pm - 20:00pm", "20:00pm - 22:00pm", "22:00pm - 00:00am"
    ];

    onewayMdl = new oneway();
    roundtripMdl = new roundtrip();
    multicityMdl = new multicity();

    // @ViewChild('newTicketForm', { static: false }) newTicketForm: NgForm;

    constructor(private bdms: NDataModelService, private router: Router,
        private activatedRoute: ActivatedRoute, private ssd: ssd_integrationService,
        private snackbar: NSnackbarService) {
        super();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.getTravelRequests();

        // Function Calls
        this.addAnotherTrip();
        this.getAirports();
    }

    ngAfterViewInit() {

    }

    // Navigate
    goTo(link) {
        this.router.navigate([link]);
    }

    onValChange(field, val: string) {
        this[field] = val;
        if (field == 'modeOfTransport') {
            this.getTravelRequests();
        }
    }

    // Get Airports
    getAirports() {
        // this.spinner = true;
        // this.modelrService.getAirports('getAirports').subscribe(res => {
        //     console.log(res[0]['airports'], "Airports");
        //     this.airports = (res[0]['airports']) ? res[0]['airports'] : [];
        //     this.spinner = false;
        // }, err => {
        //     console.log(err);
        //     this.spinner = false;
        // });
    }

    // Filter airports From 
    filterAir(searchString) {
        const filterValue = searchString.toLowerCase();
        if (filterValue.length < 2) {
            this.filteredAirports = [];
        }
        this.filteredAirports = this.airports.filter(airport => airport.airportName.toLowerCase().includes(filterValue));
    }

    // Get travel requests
    getTravelRequests() {
        // let data = {
        //     employeeId: this.currentUser['employeeId'],
        //     collection: "travel",
        //     transportType: this.transportType
        // }

        // this.spinner = true;
        // this.modelrService.POST('getRequests', data).subscribe(res => {
        //     console.log(res, "Travel Requests");
        //     this.travelRequests = (res === {}) ? [] : res;
        //     this.spinner = false;
        // }, err => {
        //     this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
        //     console.log(err);
        //     this.spinner = false;
        // });
    }

    // Apend a default trip in multi-city form
    addAnotherTrip(form: any = {}, pickUp = "") {
        if (form.invalid) { return false };

        // this.newTicket.info.push({
        //     "from": pickUp,
        //     "to": "",
        //     "departureDate": null,
        //     "returnDate": null,
        //     "preferredTime": "",
        //     "countryOfAccommodation": "",
        //     "clientAddress": "",
        //     "checkInDate": null,
        //     "checkOutDate": null
        // });
    }

    // Open form pop ups
    openDialog(action, travel, indx, operation) {
        let data = {
            action: action,
            travel: travel,
            indx: indx
        }

        // this.dialogService.reScheduleTrip(data).subscribe(results => {
        //     if (results) {
        //         console.log(results);
        //         if (results['name'] == action) {
        //             let body = {
        //                 collection: 'travel',
        //                 data: results['update'],
        //                 // email: results['email']
        //             }
        //             this.spinner = true;
        //             this.modelrService.POST(operation, body).subscribe(res => {
        //                 console.log(res)
        //                 this.getTravelRequests();

        //                 this.spinner = false;
        //                 if (action == 'reschedule') {
        //                     this.generalService.openSnackBar("Request was successfully updated", 'general-snackbar');
        //                 } else {
        //                     this.generalService.openSnackBar("Request was successfully deleted", 'general-snackbar');
        //                 }

        //             }, err => {
        //                 this.spinner = false;
        //                 this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
        //                 console.log(err);
        //             });
        //         }
        //     }
        // })
    }

    // Submit form
    onSubmit(model, form) {
        this.submitted = true;
        console.log(form);

        if (form.invalid) { return false };

        this[model].isFlexi = this.isFlexi;
        this[model].tripType = this.tripType;
        this[model].actionType = this.actionType;
        this[model].modeOfTransport = this.modeOfTransport;
        this[model].employeeId = this.currentUser['employeeId'];
        this[model].lineManager = this.currentUser['lineManager'];
        this[model].lineManagerEmail = this.currentUser['lineManagerEmail'];
        this[model].employeeName = this.currentUser['givenName'] + " " + this.currentUser['surname'];
        this[model].emailId = this.currentUser['emailId'];
        this[model].status = "new";
        this[model].isRead = false;
        this[model].requestId = new Date().getTime();

        console.log(this[model]);

        let body = {
            data: this[model],
            collection: "travel",
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
                // this.generalService.openSnackBar("Request was successfully added", 'general-snackbar');
                form.reset();
                this[model] = (model == 'onewayMdl') ? new oneway() : (model == 'roundtripMdl') ? new roundtrip() : new multicity();
                this.getTravelRequests();
                this.addAnotherTrip();
            }, err => {
                this.spinner = false;
                console.log(err);
                // this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
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

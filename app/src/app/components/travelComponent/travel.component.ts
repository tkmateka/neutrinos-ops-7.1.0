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
import { commonService } from '../../services/common/common.service';
import { dialogService } from '../../services/dialog/dialog.service';

// Data Models
import { oneway } from '../../models/oneway.model';
import { roundtrip } from '../../models/roundtrip.model';

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

    allTravelRequests: any = [];
    travelRequests: any = [];

    minDate = new Date();
    preferredTimes: string[] = [
        "00:00am - 02:00am", "02:00am - 04:00am", "04:00am - 06:00am", "06:00am - 08:00am",
        "08:00am - 10:00am", "10:00am - 12:00pm", "12:00pm - 14:00pm", "14:00pm - 16:00pm",
        "16:00pm - 18:00pm", "18:00pm - 20:00pm", "20:00pm - 22:00pm", "22:00pm - 00:00am"
    ];


    onewayMdl = {};
    roundtripMdl = {};
    multicityMdl = {};

    constructor(private bdms: NDataModelService, private router: Router, private dialog: dialogService,
        private activatedRoute: ActivatedRoute, private ssd: ssd_integrationService,
        private snackbar: NSnackbarService, private common: commonService) {
        super();

        this.onewayMdl = this.common.getTravelModel();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        //  Function Calls
        this.getAirports();
    }

    ngAfterViewInit() {

    }

    // Navigate
    goTo(link) {
        this.router.navigate([link]);
    }

    // Value Change
    onValChange(field, val: string) {
        this[field] = val;
        if (field == 'modeOfTransport') {
            this.getTravelRequests();
        }
        if (field == 'tripType') {
            this.clearModels();
        }
    }

    clearModels() {
        this.onewayMdl = this.common.getTravelModel();
        this.roundtripMdl = this.common.getTravelModel();
        this.multicityMdl = this.common.getTravelModel();
    }

    // Add 1 more trip (Multicity)
    addTrip(city) {
        this.multicityMdl['tripList'].push({
            'checkInDate': null,
            'checkOutDate': null,
            'clientAddress': '',
            'countryOfAccommodation': '',
            'departureDate': null,
            'from': city,
            'preferredTime': '',
            'to': '',
        });
    }

    // Remove 1 trip from multicity
    removeTrip(i) {
        this.multicityMdl['tripList'].splice(i, 1);
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
        let body = {
            employeeId: this.currentUser['employeeId'],
            collection: "travel",
            modeOfTransport: this.modeOfTransport
        }

        this.spinner = true;
        this.travelRequests = [];
        this.ssd.POST('getData', body).subscribe(res => {
            console.log(res, "Travel Requests");
            this.allTravelRequests = (res === {}) ? [] : res;
            for (let i = 0; i < this.allTravelRequests.length; i++) {
                if (this.allTravelRequests[i]['status'] == "new") {
                    this.travelRequests.push(this.allTravelRequests[i]);
                }
            }
            this.spinner = false;
        }, err => {
            // this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
            console.log(err);
            this.spinner = false;
        });
    }

    // Open form pop ups
    openDialog(action, travel, indx, operation) {
        let data = {
            action: action,
            travel: travel,
            indx: indx
        }

        this.dialog.reScheduleTrip(data).subscribe(results => {
            if (results) {
                console.log(results);
                if (results['action'] == action) {
                    delete results['travel']['_id'];
                    let body = {
                        collection: 'travel',
                        data: results['travel']
                    }
                    this.spinner = true;
                    this.ssd.POST('updateRequest', body).subscribe(res => {
                        console.log(res)
                        this.getTravelRequests();

                        this.spinner = false;
                        if (action == 'reschedule') {
                            // this.generalService.openSnackBar("Request was successfully updated", 'general-snackbar');
                        } else {
                            // this.generalService.openSnackBar("Request was successfully deleted", 'general-snackbar');
                        }

                    }, err => {
                        this.spinner = false;
                        // this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
                        console.log(err);
                    });
                }
            }
        });
    }

    // Submit form
    onSubmit(model, form) {
        this.submitted = true;
        console.log(form);

        if (form.invalid) { return false };

        this[model].requestDate = new Date();
        this[model].isFlexi = this.isFlexi;
        this[model].tripType = this.tripType;
        this[model].actionType = this.actionType;
        this[model].modeOfTransport = this.modeOfTransport;
        this[model].employeeId = this.currentUser['employeeId'];
        this[model].department = this.currentUser['department'];
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
                this.clearModels();
                this[model].tripList = [{
                    'checkInDate': null,
                    'checkOutDate': null,
                    'clientAddress': '',
                    'countryOfAccommodation': '',
                    'departureDate': null,
                    'from': '',
                    'preferredTime': '',
                    'to': '',
                }];
                // this.getTravelRequests();
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

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSelect, MatSelectChange } from '@angular/material';

import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'bh-ops_popup',
    templateUrl: './ops_popup.template.html'
})

export class ops_popupComponent extends NBaseComponent implements OnInit {
    falseSubmitted: boolean = false;
    showAccommodation: boolean = false;

    currentUser: any = {};
    editableFields = [];
    minDate = new Date();
    preferredTimes: string[] = [
        "00:00am - 02:00am", "02:00am - 04:00am", "04:00am - 06:00am", "06:00am - 08:00am",
        "08:00am - 10:00am", "10:00am - 12:00pm", "12:00pm - 14:00pm", "14:00pm - 16:00pm",
        "16:00pm - 18:00pm", "18:00pm - 20:00pm", "20:00pm - 22:00pm", "22:00pm - 00:00am"
    ]

    constructor(private bdms: NDataModelService, private router: Router,
        public dialog: MatDialog, private dialogRef: MatDialogRef<ops_popupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        super();
    }

    ngOnInit() {
        console.log(this.data);
        // console.log(this.data.travel.info[this.data.indx]['countryOfAccommodation']);

        this.currentUser = JSON.parse(localStorage.getItem('user'));

        // this.reschedule.from = this.data.travel.info[this.data.indx]['from'];
        // this.reschedule.to = this.data.travel.info[this.data.indx]['to'];
        // this.reschedule.departureDate = this.data.travel.info[this.data.indx]['departureDate'];
        // this.reschedule.returnDate = this.data.travel.info[this.data.indx]['returnDate'];
        // this.reschedule.preferredTime = this.data.travel.info[this.data.indx]['preferredTime'];
        // this.reschedule.reason = this.data.travel.info[this.data.indx]['reason'];
        // this.reschedule.countryOfAccommodation = this.data.travel.info[this.data.indx]['countryOfAccommodation'] ? this.data.travel.info[this.data.indx]['countryOfAccommodation'] : "";
        // this.reschedule.clientAddress = this.data.travel.info[this.data.indx]['clientAddress'] ? this.data.travel.info[this.data.indx]['clientAddress'] : "";
        // this.reschedule.checkInDate = this.data.travel.info[this.data.indx]['checkInDate'] ? this.data.travel.info[this.data.indx]['checkInDate'] : null;
        // this.reschedule.checkOutDate = this.data.travel.info[this.data.indx]['checkOutDate'] ? this.data.travel.info[this.data.indx]['checkOutDate'] : null;

        this.editableFields = [
            { label: "Given Name", id: "givenName", type: "input", required: true, value: "" },
            { label: "Surname", id: "surname", type: "input", required: true, value: "" },
            { label: "ID Number", id: "idNumber", type: "input", required: true, value: "" },
            { label: "Gender", id: "gender", type: "select", required: true, value: "", options: ['Male', 'Female'] },
            { label: "Employee Id", id: "employeeId", type: "input", required: true, value: "" },
            { label: "Cell Number", id: "cellNumber", type: "input", required: false, value: "" },
            { label: "Email Id", id: "emailId", type: "input", required: true, value: "" },
            { label: "Date Of Birth", id: "dateOfBirth", type: "date", required: true, value: null },
            { label: "Date Of Joining", id: "dateOfJoining", type: "date", required: true, value: null },
            { label: "Blood Group", id: "bloodGroup", type: "input", required: false, value: "" },
            { label: "Department", id: "department", type: "input", required: true, value: "" },
            { label: "Designation", id: "designation", type: "input", required: true, value: "" },
            { label: "Line Manager", id: "lineManager", type: "input", required: true, value: "" },
            { label: "LineManager Email", id: "lineManagerEmail", type: "input", required: true, value: "" },
            { label: "Vertical Head Full Name", id: "verticalHead", type: "input", required: true, value: "" }
        ]
    }

    save() {
        console.log(this.editableFields);
    }

    re_schedule(form) {
        console.log(form);
        if (form.invalid || form.pristine) {
            this.falseSubmitted = true;
            return false
        };

        this.dialogRef.close(this.data);
    }

    deleteRequest(reason) {
        if (!reason) {
            this.falseSubmitted = true;
            return false;
        };

        this.data.travel['reason'] = reason;
        this.data.travel['status'] = 'cancelled';

        // this.data.travel.tripList[this.data.indx]['reason'] = reason;
        // this.data.travel.tripList[this.data.indx]['status'] = 'cancelled';

        this.dialogRef.close(this.data);
    }

    closeDialog() {
        this.dialogRef.close();
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

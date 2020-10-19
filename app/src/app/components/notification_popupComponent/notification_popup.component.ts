/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSelect, MatSelectChange } from '@angular/material';

import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'bh-notification_popup',
    templateUrl: './notification_popup.template.html'
})

export class notification_popupComponent extends NBaseComponent implements OnInit {
    comment = "";
    currentUser: any = {};
    minDate = new Date();
    countries = ["South Africa", "India"];
    requestTypes = ["Office Hygine", "Guest House Accommodation", "Event Booking Request", "Office Electrical Issues", "Other Request"];
    preferredTimes: string[] = [
        "00:00am - 02:00am", "02:00am - 04:00am", "04:00am - 06:00am", "06:00am - 08:00am",
        "08:00am - 10:00am", "10:00am - 12:00pm", "12:00pm - 14:00pm", "14:00pm - 16:00pm",
        "16:00pm - 18:00pm", "18:00pm - 20:00pm", "20:00pm - 22:00pm", "22:00pm - 00:00am"
    ];

    constructor(private bdms: NDataModelService, private router: Router,
        public dialog: MatDialog, private dialogRef: MatDialogRef<notification_popupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        super();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        console.log(this.data);
    }

    closeDialog(data: any = "") {
        this.dialogRef.close(data);
    }

    approveDeclineRequest(action, key){
        if((action != 'approved') && !this.comment) {
            // Comment is required if the trip is Declined
            return false;
        }
        if(this.comment) {
            this.data[key].comments.push({
                'from': `${this.currentUser['givenName']} ${this.currentUser['surname']}`,
                'fromEmail': this.currentUser['emailId'],
                'date': new Date(),
                'comment': this.comment
            });
        }
        this.data[key].status = action;
        this.closeDialog(this.data);
    }

    markAsRead(key){
        this.data[key].isRead = true;
        this.closeDialog(this.data);
    }

    toSentenceCase(item) {
        return item.replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2');
    }
}

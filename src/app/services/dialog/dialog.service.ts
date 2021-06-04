/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ops_popupComponent } from '../../components/ops_popupComponent/ops_popup.component';
import { notification_popupComponent } from '../../components/notification_popupComponent/notification_popup.component';

@Injectable()
export class dialogService {
    constructor(public dialog: MatDialog) {}

    reScheduleTrip(data) {
        return this.dialog.open(ops_popupComponent, {
            hasBackdrop: false,
            panelClass: 'opsPopup',
            data: data
        }).afterClosed();
    }

    viewNotification(data) {
        return this.dialog.open(notification_popupComponent, {
            hasBackdrop: false,
            panelClass: 'opsPopup',
            data: data
        }).afterClosed();
    }

    addNewUser(data) {
        return this.dialog.open(ops_popupComponent, {
            hasBackdrop: false,
            panelClass: 'opsPopup',
            data: data
        }).afterClosed();
    }
}

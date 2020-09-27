/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router, ActivatedRoute } from '@angular/router';

//Importing the OAuth Module
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';
import { dialogService } from '../../services/dialog/dialog.service';

@Component({
    selector: 'bh-emp_home_dahsboard',
    templateUrl: './emp_home_dahsboard.template.html'
})

export class emp_home_dahsboardComponent extends NBaseComponent implements OnInit {
    spinner = false;
    notificationsMessages = [];
    notifications: any = [];
    currentUser: any = {};
    selectedLink = "/employee/home";
    sidenavItems = [
        { icon: "home", name: "Home", link: "/employee/home" },
        { icon: "school", name: "Human Resource", link: "/employee/hr" },
        { icon: "flight", name: "Operations", link: "/employee/operations" },
        { icon: "person", name: "My Profile", link: "/employee/profile" }
    ];

    constructor(private bdms: NDataModelService, private router: Router,
        private activatedRoute: ActivatedRoute,
        public neutrinosOAuth: NeutrinosOAuthClientService,
        private snackbar: NSnackbarService,
        private dialog: dialogService,
        private ssd: ssd_integrationService
    ) {
        super();
    }

    ngOnInit() {
        // call default functions
        this.getUser();
        this.getNotifications();
    }

    logout() {
        // this.neutrinosOAuth.logout('/welcome');
        this.neutrinosOAuth.logout().then(logoutSuccess => {
            this.router.navigate(['/welcome']);
        }).catch(logoutError => {
            console.log(logoutError)
        });
    }

    goHome() {
        this.router.navigate(['/employee/home']);
    }

    selectItem() {
        console.log(this.router.url);
        if (this.router.url.includes('/employee/operations/')) {
            this.selectedLink = '/employee/operations';
        } else {
            this.selectedLink = this.router.url;
        }
    }

    getNotifications() {
        this.notifications = [];
        this.notificationsMessages = [];

        // if(!this.currentUser['emailId']) {
        //     // Session has expired
        //     this.router.navigate(['/welcome']);
        // }

        let body = {
            emailId: this.currentUser['emailId'],
            collection: "travel"
        }

        this.spinner = true;
        this.ssd.POST('getData', body).subscribe(res => {
            console.log("reerererererererrererererrrerere", res);
            this.notifications = res == {} ? [] : res;

            for (let i = 0; i < this.notifications.length; i++) {
                if (this.notifications[i]['emailId'] == this.currentUser['emailId']) {
                    // Approved
                    if ((this.notifications[i]['status'] == 'approved') && (this.notifications[i]['isRead'] == false)) {
                        this.notificationsMessages.push({
                            travel: this.notifications[i],
                            message: `${this.notifications[i]['lineManager']} has approved your ${this.notifications[i]['modeOfTransport']} ticket request.`
                        });
                    }
                    // Declined
                    if ((this.notifications[i]['status'] == 'declined') && (this.notifications[i]['isRead'] == false)) {
                        this.notificationsMessages.push({
                            travel: this.notifications[i],
                            message: `${this.notifications[i]['lineManager']} has declined your ${this.notifications[i]['modeOfTransport']} ticket request.`
                        });
                    }
                }

                if (this.notifications[i]['lineManagerEmail'] == this.currentUser['emailId']) {
                    // Approval Requests
                    if ((this.notifications[i]['status'] == "new") && (this.notifications[i]['isRead'] == false)) {
                        this.notificationsMessages.push({
                            travel: this.notifications[i],
                            message: `${this.notifications[i]['employeeName']} has requested your approval on his ${this.notifications[i]['modeOfTransport']} ticket application.`
                        });
                    }
                }
            }

            console.log(this.notificationsMessages, "NNNNNNNNNNNNNNNNNNNNNNNNNN");

            this.spinner = false;
        }, err => {
            // this.generalService.openSnackBar(err['error']['error']);
            console.log(err);
            this.spinner = false;
        });
    }

    openDialog(notification) {
        let data = notification;
        let operation = 'updateRequest';

        this.dialog.viewNotification(data).subscribe(results => {
            if (results) {
                console.log(results);
                delete results['travel']['_id'];

                // let email = {}

                if (results.travel.isRead) {
                    operation = 'updateRequest';
                } else {
                    // email = {
                    //     // toEmail: this.currentUser['lineManagerEmail'],
                    //     toEmail: results['travel']['emailId'],
                    //     fromEmail: this.currentUser['givenName'] + " " + this.currentUser['surname'],
                    //     cc: [],
                    //     topic: "Travel Application",
                    //     emailBody: this.currentUser['givenName'] + " " + this.currentUser['surname'] +
                    //     ` has ${results['travel']['status']} your ${results['travel']['tripType']} ${results['travel']['modeOfTransport']} ticket.`
                    // }
                }

                let body = {
                    collection: 'travel',
                    data: results['travel'],
                    // email: email
                }

                this.spinner = true;
                this.ssd.POST(operation, body).subscribe(res => {
                    console.log(res)
                    // Refresh Notifications
                    this.getNotifications();

                    this.spinner = false;
                    if (!results['travel']['isRead']) {
                        if (results['travel']['status'] == 'approved') {
                            // this.generalService.openSnackBar(`You have successfully approved ${results['travel']['employeeName']}'s request`, 'general-snackbar');
                        } else {
                            // this.generalService.openSnackBar(`You have successfully declined ${results['travel']['employeeName']}'s request`, 'general-snackbar');
                        }
                    }
                }, err => {
                    this.spinner = false;
                    // this.generalService.openSnackBar(err['error']['error'], 'general-snackbar');
                    console.log(err);
                });
            }
        });
    }

    // Get user details
    getUser() {
        let body = { 'emailId': this.neutrinosOAuth.userInfo.username, 'collection': 'employees' }
        if (this.neutrinosOAuth.userInfo) {
            this.ssd.POST('getData', body).subscribe(res => {
                if (res[0]) {
                    this.currentUser = res[0];
                }
            }, err => {
                console.log(err);
            })
        }
    }
}

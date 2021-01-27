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
    notificationLoading = false;
    notificationsMessages = [];
    notifications: any = [];
    currentUser: any = {};
    selectedLink = "/ops-app/home";
    sidenavItems = [
        { icon: "home", name: "Home", link: "/ops-app/home", show: true },
        { icon: "inbox", name: "Requests", link: "/ops-app/requests", show: false },
        { icon: "school", name: "Human Resource", link: "/ops-app/hr", show: false },
        { icon: "flight", name: "Operations", link: "/ops-app/operations", show: true },
        { icon: "merge_type", name: "Operations Management", link: "/ops-app/operations-management", show: false },
        { icon: "group", name: "Employees", link: "/ops-app/employees", show: false },
        { icon: "person", name: "My Profile", link: "/ops-app/profile", show: true }
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
        if (!this.neutrinosOAuth.isLoggedIn) {
            return this.router.navigate(['/welcome']);
        }
        // call default functions
        this.getUser();
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
        this.router.navigate(['/ops-app/home']);
    }

    selectItem() {
        console.log(this.router.url);
        if (this.router.url.includes('/ops-app/operations/')) {
            this.selectedLink = '/ops-app/operations';
        } else {
            this.selectedLink = this.router.url;
        }
    }

    getNotifications() {
        this.notifications = [];
        this.notificationsMessages = [];

        if (!this.currentUser['emailId']) {
            // Session has expired
            this.router.navigate(['/welcome']);
        }

        if (this.currentUser['designation'] != 'Operations Manager') {
            let body = {
                collection: "travel"
            }

            this.notificationLoading = true;

            this.ssd.POST('getData', body).subscribe(res => {
                this.notifications = (res == {}) ? [] : res;

                for (let i = 0; i < this.notifications.length; i++) {
                    if (this.notifications[i]['emailId'] == this.currentUser['emailId']) {
                        // Approved
                        if ((this.notifications[i]['status'] == 'approved') && (!this.notifications[i]['isRead'])) {
                            this.notificationsMessages.push({
                                travel: this.notifications[i],
                                message: `${this.notifications[i]['lineManager']} has approved your ${this.notifications[i]['modeOfTransport']} ticket request.`,
                                requestDate: this.notifications[i]['requestDate']
                            });
                        }
                        // Declined
                        if ((this.notifications[i]['status'] == 'declined') && (!this.notifications[i]['isRead'])) {
                            this.notificationsMessages.push({
                                travel: this.notifications[i],
                                message: `${this.notifications[i]['lineManager']} has declined your ${this.notifications[i]['modeOfTransport']} ticket request.`,
                                requestDate: this.notifications[i]['requestDate']
                            });
                        }
                    }

                    if (this.notifications[i]['lineManagerEmail'] == this.currentUser['emailId']) {
                        // Approval Requests
                        if ((this.notifications[i]['status'] == "new") && (!this.notifications[i]['isRead'])) {
                            this.notificationsMessages.push({
                                travel: this.notifications[i],
                                message: `${this.notifications[i]['employeeName']} has requested your approval on his ${this.notifications[i]['modeOfTransport']} ticket application.`,
                                requestDate: this.notifications[i]['requestDate']
                            });
                        }
                    }
                }

                this.notifications = this.notifications.sort((a, b) => a.requestDate - b.requestDate);
                this.notificationLoading = false;
            }, err => {
                this.notificationLoading = false;
                this.snackbar.openSnackBar(err['error']['error']);
                console.log(err);
            });

        } else {
            let facBody = [
                { collection: "travel" },
                { collection: "facilities" }
            ];

            for (let j = 0; j < facBody.length; j++) {
                this.notificationLoading = true;
                this.ssd.POST('getData', facBody[j]).subscribe((facRes: any[]) => {
                    let facility = [];
                    facility = facRes;
                    this.notifications = this.notifications.concat(facility);

                    if (facBody[j]['collection'] == "facilities") {
                        for (let i = 0; i < facility.length; i++) {
                            // Facilities Requests
                            if ((facility[i]['status'] == "new") && (!facility[i]['isRead'])) {
                                this.notificationsMessages.push({
                                    facility: facility[i],
                                    message: `${facility[i]['employeeName']} has requested your assistance on the ${facility[i]['request']['requestType']}.`,
                                    requestDate: facility[i]['requestDate']
                                });
                            }
                        }
                    } else {
                        for (let i = 0; i < facility.length; i++) {
                            // Travel Requests
                            if ((facility[i]['status'] == "approved") && (!facility[i]['isRead'])) {
                                this.notificationsMessages.push({
                                    travel: facility[i],
                                    message: `${facility[i]['employeeName']} has requested your approval on his ${facility[i]['modeOfTransport']} ticket application.`,
                                    requestDate: facility[i]['requestDate']
                                });
                            }
                        }
                    }

                    this.notifications = this.notifications.sort((a, b) => a.requestDate - b.requestDate);
                    this.notificationLoading = false;
                }, err => {
                    this.notificationLoading = false;
                    this.snackbar.openSnackBar(err['error']['error']);
                    console.log(err);
                });
            }

        }
    }

    addNewUser() {
        this.dialog.addNewUser('addNewUser').subscribe(results => {
            if (results) {
                let body = {
                    data: results,
                    collection: "employees"
                }
                body['data']['profileImage'] = "";

                this.spinner = true;

                // Add new user
                this.ssd.POST('sendRequest', body).subscribe(res => {
                    this.spinner = false;
                    console.log(res);
                    this.snackbar.openSnackBar("User was successfully added");
                }, err => {
                    this.spinner = false;
                    console.log(err);
                    this.snackbar.openSnackBar(err['error']['error']);
                });
            }
        });
    }

    openDialog(notification) {
        let operation = 'updateRequest';

        this.dialog.viewNotification(notification).subscribe(results => {
            if (results) {
                let body: any;
                let reqType: string = results['travel'] ? 'travel' : 'facility';
                let collection: string = results['travel'] ? 'travel' : 'facilities';

                delete results[reqType]['_id'];

                body = {
                    collection: collection,
                    data: results[reqType]
                }

                this.spinner = true;
                this.ssd.POST(operation, body).subscribe(res => {
                    if (results[reqType]['status'] == 'approved') {
                        this.snackbar.openSnackBar(`You have successfully approved ${results[reqType]['employeeName']}'s request`);
                    } else {
                        this.snackbar.openSnackBar(`You have successfully declined ${results[reqType]['employeeName']}'s request`);
                    }
                    this.spinner = false;
                    // Refresh Notifications
                    this.getNotifications();
                }, err => {
                    this.spinner = false;
                    this.snackbar.openSnackBar(err['error']['error']);
                    console.log(err);
                });
            }
        });
    }

    // Get user details
    getUser() {
        console.log(this.neutrinosOAuth.userInfo)
        let body = { 'emailId': this.neutrinosOAuth.userInfo.username, 'collection': 'employees' }
        if (this.neutrinosOAuth.userInfo) {
            this.ssd.POST('getData', body).subscribe(res => {
                if (res[0]) {
                    this.currentUser = res[0];
                    console.log(this.currentUser)
                    // localStorage.setItem('user', this.currentUser);
                    if (this.currentUser['designation'] == "Line Manager") {
                        this.sidenavItems[1]['show'] = true;
                    }
                    if ((this.currentUser['designation'] == "Operations Manager") || (this.currentUser['designation'] == "Operations Admin")) {
                        this.sidenavItems[4]['show'] = true;
                        this.sidenavItems[5]['show'] = true;
                    }
                    this.getNotifications();
                }
            }, err => {
                console.log(err);
            });
        } else {
            this.router.navigate(['/welcome']);
        }
    }
}

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router, ActivatedRoute } from '@angular/router';

//Importing the OAuth Module
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';

@Component({
    selector: 'bh-home_emp',
    templateUrl: './home_emp.template.html'
})

export class home_empComponent extends NBaseComponent implements OnInit {

    spinner = false;
    currentUser: any = {};
    catFlex = 32;
    proImg = "";
    categories = [
        { icon: "inbox", name: "Requests", link: "/ops-app/requests", show: false, bg: "greenBackground" },
        { icon: "school", name: "Human Resource", link: "/ops-app/hr", show: false, bg: "skyBlueBackground" },
        { icon: "flight", name: "Operations", link: "/ops-app/operations", show: true, bg: "yellowBackground" },
        { icon: "merge_type", name: "Operations Management", link: "/ops-app/operations-management", show: false, bg: "greenBackground" },
        { icon: "person", name: "My Profile", link: "/ops-app/profile", show: true, bg: "orangeBackground" },
        { icon: "info", name: "About Neutrinos", link: "https://goneutrinos.com/", show: true, bg: "pinkBackground" }
    ]

    constructor(private bdms: NDataModelService, private router: Router,
        private activatedRoute: ActivatedRoute, public neutrinosOAuth: NeutrinosOAuthClientService,
        private ssd: ssd_integrationService) {
        super();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user')) || {};
        
        // Check if user session is still valid
        if (this.currentUser && (this.currentUser['emailId'] == this.neutrinosOAuth.userInfo.username)) {
            if (!this.proImg) {
                this.proImg = (this.currentUser['profileImageprofileImage']) ? this.currentUser['profileImageprofileImage'] : ((this.currentUser.gender == "male") ? "Web/man.png" : "Web/woman.png");
            }
            if (this.currentUser['designation'] == "Line Manager") {
                this.categories[0]['show'] = true;
                this.catFlex = 23;
            }
            if ((this.currentUser['designation'] == "Operations Manager") || (this.currentUser['designation'] == "Operations Admin")) {
                this.categories[3]['show'] = true;
                this.catFlex = 23;
            }
        } else {
            this.getUser();
        }
    }

    // Get user details
    getUser() {
        this.spinner = true;
        let body = { 'emailId': this.neutrinosOAuth.userInfo.username, 'collection': 'employees' }
        if (this.neutrinosOAuth.userInfo) {
            console.log(this.neutrinosOAuth.userInfo);
            if (this.neutrinosOAuth.userInfo.additional && this.neutrinosOAuth.userInfo.additional.picture) {
                this.proImg = this.neutrinosOAuth.userInfo.additional.picture;
            }
            this.ssd.POST('getData', body).subscribe(res => {
                console.log(res);
                if (res[0]) {
                    this.spinner = false;
                    this.currentUser = res[0];
                    if (!this.proImg) {
                        this.proImg = (this.currentUser.profileImage) ? this.currentUser.profileImage : ((this.currentUser.gender == "male") ? "Web/man.png" : "Web/woman.png");
                    }
                    if (this.currentUser['designation'] == "Line Manager") {
                        this.categories[0]['show'] = true;
                        this.catFlex = 23;
                    }
                    if ((this.currentUser['designation'] == "Operations Manager") || (this.currentUser['designation'] == "Operations Admin")) {
                        this.categories[3]['show'] = true;
                        this.catFlex = 23;
                    }
                    this.currentUser['profileImageprofileImage'] = this.proImg;
                    localStorage.setItem('user', JSON.stringify(this.currentUser));
                }
            }, err => {
                console.log(err);
            })
        }
    }

    // Navigate
    goTo(link) {
        if (link.includes('https')) {
            window.open(link, '_blank');
        } else {
            this.router.navigate([link]);
        }
    }
}

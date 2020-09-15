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
    proImg = "";
    categories = [
        { icon: "school", name: "Human Resource", link: "/employee/hr", bg: "skyBlueBackground" },
        { icon: "flight", name: "Operations", link: "/employee/operations", bg: "yellowBackground" },
        { icon: "person", name: "My Profile", link: "/employee/profile", bg: "orangeBackground" },
        { icon: "info", name: "About Neutrinos", link: "https://www.neutrinos.co/", bg: "pinkBackground" }
    ]

    constructor(private bdms: NDataModelService, private router: Router,
        private activatedRoute: ActivatedRoute, public neutrinosOAuth: NeutrinosOAuthClientService,
        private ssd: ssd_integrationService) {
        super();
    }

    ngOnInit() {
        this.getUser();
    }

    // Get user details
    getUser() {
        this.spinner = true;
        if (this.neutrinosOAuth.userInfo) {
            console.log(this.neutrinosOAuth.userInfo);
            this.ssd.POST('get', { 'emailId': this.neutrinosOAuth.userInfo.username }).subscribe(res => {
                console.log(res);
                if (res[0]) {
                    this.spinner = false;
                    this.currentUser = res[0];
                    this.proImg = (this.currentUser.profileImage) ? this.currentUser.profileImage : ((this.currentUser.gender == "male") ? "Web/man.png" : "Web/woman.png");
                    localStorage.setItem('user', this.currentUser);
                    this.router.navigate(['/employee/home']);
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

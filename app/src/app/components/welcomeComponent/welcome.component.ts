/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';

//Importing the OAuth Module
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client';

@Component({
    selector: 'bh-welcome',
    templateUrl: './welcome.template.html'
})

export class welcomeComponent extends NBaseComponent implements OnInit {
    currentUser: any = {};

    constructor(private bdms: NDataModelService, private router: Router,
        public neutrinosOAuth: NeutrinosOAuthClientService) {
        super();
    }

    ngOnInit() {
        
    }

    login() {
        this.neutrinosOAuth.login('employee/home');
    }

}

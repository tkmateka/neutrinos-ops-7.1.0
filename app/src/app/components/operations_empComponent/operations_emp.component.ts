/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

/**
* 
* Serivice Designer import Example - Service Name - HeroService
* import { HeroService } from 'app/sd-services/HeroService';
*/

@Component({
    selector: 'bh-operations_emp',
    templateUrl: './operations_emp.template.html'
})

export class operations_empComponent extends NBaseComponent implements OnInit {
    currentUser: any = {};

    constructor(private bdms: NDataModelService, private router: Router,
        private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        console.log(this.currentUser, "user in operations");
    }

    goTo(link) {
        this.router.navigate([link]);
    }

}

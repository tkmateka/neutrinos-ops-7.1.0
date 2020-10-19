/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'bh-visa_details',
    templateUrl: './visa_details.template.html'
})

export class visa_detailsComponent extends NBaseComponent implements OnInit {
    visaDetails = {
        countryName: "",
        countryId: "",
        visaTypes: []
    };

    constructor(private bdms: NDataModelService, private router: Router,
        private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.visaDetails = JSON.parse(localStorage.getItem('visaDetails'));
        console.log(this.visaDetails)
    }

    goTo(link) {
        this.router.navigate([link]);
    }

}

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';

@Component({
    selector: 'bh-visa',
    templateUrl: './visa.template.html'
})

export class visaComponent extends NBaseComponent implements OnInit {

    spinner: boolean = false;
    isOther: boolean = false;
    countryName = "";
    selectedCountry = "";
    typeOfVisa = "";
    countries = [
        { name: "South Africa", image: "south-africa.png" }, { name: "India", image: "india.png" },
        { name: "Malaysia", image: "malaysia.png" }, { name: "Singapore", image: "singapore.png" },
        { name: "Australia", image: "australia.png" }, { name: "Other", image: "worldwide.png" }
    ];

    constructor(private bdms: NDataModelService, private router: Router,
        private activatedRoute: ActivatedRoute, private ssd: ssd_integrationService,
        private snackbar: NSnackbarService) {
        super();
    }

    ngOnInit() {

    }

    goTo(link) {
        this.router.navigate([link]);
    }

    selectCountry(country, visaType) {
        console.log(country, visaType)

        if (country == "Other") {
            this.isOther = true;
        } else {
            this.selectedCountry = country;

            let countryId = country.toLowerCase().replace(/ /g, "-");
            let body = { 'countryId': countryId, 'collection': 'visa' };

            this.spinner = true;

            this.ssd.POST('getData', body).subscribe(res => {
                console.log(res);
                if (res[0]) {
                    localStorage.setItem('visaDetails', JSON.stringify(res[0]));
                    this.router.navigate(['employee/operations/visa/' + res[0]['countryId']]);
                    this.spinner = false;
                }
            }, err => {
                console.log(err);
            })
        }
    }

    addOtherCountry() {
        if (this.countryName) {
            this.countries.pop();
            this.countries.push({ name: this.countryName, image: "worldwide.png" });
            this.isOther = false;
            // this.generalService.openSnackBar("Operations will get back to you with the new country checklist", 'general-snackbar');
        }
    }
}

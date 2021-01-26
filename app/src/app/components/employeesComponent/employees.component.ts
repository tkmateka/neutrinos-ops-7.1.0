/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';

@Component({
    selector: 'bh-employees',
    templateUrl: './employees.template.html'
})

export class employeesComponent extends NBaseComponent implements OnInit {
    spinner = false;

    employeesDataSource: any = [];
    employeesColumns: any = ['employeeId', 'givenName', 'surname', 'emailId', 'dateOfJoining', 'department', 'lineManager'];
    employeesCells: any = ['Emp ID', 'Given Name', 'Surname', 'Email ID', 'Date Of Joining', 'Department', 'Line Manager'];

    constructor(private ssd: ssd_integrationService) {
        super();
    }

    ngOnInit() {
        this.getEmployees();
    }

    // Get all Employees
    getEmployees() {
        this.spinner = true;
        let body = { 'collection': 'employees' };

        // Get All Employees
        this.ssd.POST('getData', body).subscribe(res => {
            this.employeesDataSource = res;
            console.log(this.employeesDataSource);
            this.spinner = false;
        }, err => {
            this.spinner = false;
            console.log(err);
        });
    }
}

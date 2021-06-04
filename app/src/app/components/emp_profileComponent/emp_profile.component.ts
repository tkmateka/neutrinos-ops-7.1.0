/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';

@Component({
    selector: 'bh-emp_profile',
    templateUrl: './emp_profile.template.html'
})

export class emp_profileComponent extends NBaseComponent implements OnInit {
    spinner = false;
    proImg = "";
    currentUser: any = {};
    editableFields = [];

    constructor(private ssd: ssd_integrationService, private router: Router,
        private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        console.log(this.currentUser);
        this.proImg = this.currentUser['profileImageprofileImage'];
        this.editableFields = [
            { label: "Blood Group", id: "bloodGroup", editable: true },
            { label: "Cell Number", id: "cellNumber", editable: true },
            { label: "Date Of Birth", id: "dateOfBirth", editable: true },
            { label: "Date Of Joining", id: "dateOfJoining", editable: false },
            { label: "Department", id: "department", editable: true },
            { label: "Designation", id: "designation", editable: true },
            { label: "Employee Id", id: "employeeId", editable: false },
            { label: "Gender", id: "gender", editable: true },
            { label: "Line Manager", id: "lineManager", editable: true },
            { label: "LineManager Email", id: "lineManagerEmail", editable: true },
            { label: "Vertical Head", id: "verticalHead", editable: true }
        ]
    }
}

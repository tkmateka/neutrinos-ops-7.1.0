/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { DomSanitizer } from '@angular/platform-browser';

// Services
import { ssd_integrationService } from '../../services/ssd_integration/ssd_integration.service';

@Component({
    selector: 'bh-uploadfile',
    templateUrl: './uploadfile.template.html'
})

export class uploadfileComponent extends NBaseComponent implements OnInit {

    spinner: boolean = false;
    localUrl: string | ArrayBuffer;
    mongoUrl: any[] = [];
    currentUser: any = {};

    constructor(private ssd: ssd_integrationService, private sanitizer: DomSanitizer) {
        super();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.getImages();
    }

    getImages() {
        this.spinner = true;
        // this.currentUser.emailId.split('@').shift()
        
        let body = { 'collection': 'images' };

        // Get All Employees
        this.ssd.POST('getData', body).subscribe(res => {
            console.log(res);
            if (res) {
                let images:any = [];
                images = res;

                for (let i = 0; i < images.length; i++) {
                    this.mongoUrl.push(this.sanitizer.bypassSecurityTrustResourceUrl(res[i]['path']));
                }
                    
                this.spinner = false;
            }
        }, err => {
            this.spinner = false;
            console.log(err);
        });
    }

    showPreviewImage(event: any) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            let name = event.target.files[0]['name'];

            reader.onloadend = (event) => {
                console.log(event);
                console.log(reader.result);
                this.localUrl = reader.result;
                this.onSubmit(name, this.localUrl);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    onSubmit(name, url) {
        let body = {
            collection: "images",
            data: {
                path: url,
                name: name
            }
        }
        console.log(body);

        // this.ssd.POST('uploadFiles', body).subscribe(res => {
        this.ssd.POST('sendRequest', body).subscribe(res => {
            console.log(res);
            if (typeof (res) === 'object') {
                this.spinner = false;
            }
        }, err => {
            this.spinner = false;
            console.log(err);
        });
    }
}

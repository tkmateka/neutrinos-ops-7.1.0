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
    imageUrl: string = "";
    localUrl: string | ArrayBuffer;
    selectedImages: any[] = [];
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

        let body = { 'collection': this.currentUser.emailId.split('@').shift() + "-images" };

        // Get All Employees
        this.ssd.POST('getData', body).subscribe(res => {
            if (res) {
                this.mongoUrl = [];
                let images: any = [];
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
            let url = window.URL.createObjectURL(event.target.files[0]);

            reader.onloadend = () => {
                this.localUrl = reader.result;

                this.selectedImages.push({
                    name: name,
                    image: this.localUrl,
                    url: this.sanitizer.bypassSecurityTrustResourceUrl(url)
                });
                console.log(this.selectedImages);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    onSubmit(image) {
        let body = {
            collection: this.currentUser.emailId.split('@').shift() + "-images",
            data: {
                path: image.image,
                name: image.name
            }
        }

        this.ssd.POST('sendRequest', body).subscribe(res => {
            if (res) {
                this.spinner = false;
                this.getImages();
            }
        }, err => {
            this.spinner = false;
            console.log(err);
        });
    }
}

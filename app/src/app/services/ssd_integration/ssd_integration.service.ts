/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ssd_integrationService {

    modelerUrl = "http://localhost:8081/api/";
    // modelerUrl = "https://neutri-ops-backend.herokuapp.com:8081/api/";

    constructor(private http: HttpClient) { };

    // Post
    POST(key, payload) {
        let url = `${this.modelerUrl}${key}`;
        return this.http.post(url, payload);
    }

}

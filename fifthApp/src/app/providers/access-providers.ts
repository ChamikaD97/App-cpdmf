/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Injectable({providedIn:'root'})
export class AccessProviders{
    server: 'http://localhost/ionic-api/';
    constructor(
        public http: HttpClient
    ){}

    postData(body,file){
        const headers=new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8'
        });
        const options = {
            // eslint-disable-next-line object-shorthand
            headers: headers,
        // eslint-disable-next-line @typescript-eslint/semi
        }
        return this.http.post(this.server + file,JSON.stringify(body),options).timeout(590000).map(res=>res);
    }
}

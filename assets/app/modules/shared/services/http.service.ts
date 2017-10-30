import { Injectable } from "@angular/core";
import {Http, Headers} from "@angular/http";
import { Observable } from "rxjs/Observable";

import { CONTENT_TYPE } from "../constants/request-headers";

@Injectable()

export class HttpService {
    public headers: Headers = new Headers({'Content-Type': CONTENT_TYPE});

    constructor(private httpService: Http) {}

    public post(url: string, params: any = {}): Observable<any> {
        const token: string = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        const body = JSON.stringify(params);

        return this.httpService.post(url + token, body, {headers: this.headers});
    }

    public get(url: string, params: any = {}): Observable<any> {
        return this.httpService.get(url);
    }

    public patch(url: string, params: any = {}): Observable<any> {
        const body = JSON.stringify(params);
        const token: string = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

        return this.httpService.patch(url + token, body, {headers: this.headers});
    }

    public delete(url: string, params: any = {}): Observable<any> {
        const token: string = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

        return this.httpService.delete(url + token);
    }
}
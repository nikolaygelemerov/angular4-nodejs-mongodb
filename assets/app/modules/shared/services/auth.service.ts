import { Injectable } from "@angular/core";
import {Response} from "@angular/http";
import 'rxjs/Rx';

import { User } from "../../auth/configs/user.model";
import { HttpService } from "../";
import { Observable } from "rxjs/Observable";

@Injectable()

export class AuthService {
    public singupUrl: string = `http://localhost:3000/user`;
    public signInUrl: string = `http://localhost:3000/user/signin`;

    constructor(private httpService: HttpService) {}

    public signup(user: User): Observable<any> {
        return this.httpService.post(this.singupUrl, user)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public signin(user: User): Observable<any> {
        return this.httpService.post(this.signInUrl, user)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
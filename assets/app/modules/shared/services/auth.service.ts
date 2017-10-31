import { Injectable } from "@angular/core";
import {Response} from "@angular/http";
import 'rxjs/Rx';

import { User } from "../../auth/configs/user.model";
import { HttpService } from "../";
import { Observable } from "rxjs/Observable";
import { ErrorService } from "../../../error-component/services/error.service";

@Injectable()

export class AuthService {
    public singupUrl: string = `http://localhost:3000/user`;
    public signInUrl: string = `http://localhost:3000/user/signin`;

    constructor(
        private httpService: HttpService,
        private errorService: ErrorService
    ) {}

    public signup(user: User): Observable<any> {
        return this.httpService.post(this.singupUrl, user)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    public signin(user: User): Observable<any> {
        return this.httpService.post(this.signInUrl, user)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    public logout(): void {
        localStorage.clear();
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem('token') !== null;
    }
}
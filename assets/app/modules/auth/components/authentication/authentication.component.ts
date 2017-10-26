import {Component} from "@angular/core";

import { AuthService } from "../../../shared";

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html'
})

export class AuthenticationComponent {
    constructor(private authService: AuthService) {}

    public isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }
}
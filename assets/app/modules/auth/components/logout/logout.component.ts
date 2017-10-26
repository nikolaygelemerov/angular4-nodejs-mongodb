import {Component} from "@angular/core";

import { AuthService } from "../../../shared";
import { Router } from "@angular/router";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})

export class LogoutComponent {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    public onLogout(): void {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
}
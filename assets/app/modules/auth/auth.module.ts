import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sing-up/sign-up.component";
import { AuthService } from "../shared/services/auth.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        AuthenticationComponent,
        LogoutComponent,
        SignInComponent,
        SignUpComponent
    ],
    providers: [AuthService]
})
export class AuthModule {

}
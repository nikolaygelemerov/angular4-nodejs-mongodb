import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sing-up/sign-up.component";

@NgModule({
    declarations: [
        AuthenticationComponent,
        LogoutComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
    bootstrap: [AuthenticationComponent],
    providers: []
})
export class AuthModule {

}
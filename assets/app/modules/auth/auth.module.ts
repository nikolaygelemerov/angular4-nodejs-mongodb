import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { LogoutComponent } from "./components/logout/logout.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sing-up/sign-up.component";
import { AuthService } from "../shared/services/auth.service";
import { AUTHROUTING } from "./auth.routing";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AUTHROUTING
    ],
    declarations: [
        LogoutComponent,
        SignInComponent,
        SignUpComponent
    ],
    providers: [AuthService]
})
export class AuthModule {

}
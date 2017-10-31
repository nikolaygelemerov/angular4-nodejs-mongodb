import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HttpService } from "./services/http.service";
import { AuthService } from "./services/auth.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [],
    providers: [
        HttpService,
        AuthService
    ]
})
export class SharedModule {

}
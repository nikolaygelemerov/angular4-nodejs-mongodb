import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { HttpService } from "./services/http.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [HttpService]
})
export class SharedModule {

}
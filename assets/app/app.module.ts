import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from "./app.component";
import {ROUTING} from "./app.routing";
import {MessagesModule} from "./messages/messages.module";
import {AuthModule} from "./auth.module";
import {HeaderComponent} from "./header.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [BrowserModule, HttpModule, RouterModule, ROUTING, MessagesModule, AuthModule],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {

}
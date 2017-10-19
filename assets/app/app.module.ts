import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from "./app.component";
import {ROUTING} from "./app.routing";
import {MessagesModule} from "./modules/messages/messages.module";
import {AuthModule} from "./modules/auth/auth.module";
import {HeaderComponent} from "./header.component";
import {SharedModule} from "./modules/shared/shared.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [BrowserModule, RouterModule, ROUTING, MessagesModule, AuthModule, SharedModule],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {

}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import {MessageComponent} from "./messages/components/message/message.component";
import {MessageListComponent} from "./messages/components/message-list/message-list.component";
import {MessageInputComponent} from "./messages/components/message-input/message-input.component";
import {MessageService} from "./messages/services/message.service";
import {MessagesComponent} from "./messages/components/messages/messages.component";
import {AuthenticationComponent} from "./auth/components/authentication/authentication.component";
import {HeaderComponent} from "./header.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageListComponent,
        MessageComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule],
    bootstrap: [AppComponent],
    providers: [MessageService]
})
export class AppModule {

}
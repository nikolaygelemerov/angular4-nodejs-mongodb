import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MessageListComponent} from "./components/message-list/message-list.component";
import {MessageComponent} from "./components/message/message.component";
import {MessageInputComponent} from "./components/message-input/message-input.component";
import {MessagesComponent} from "./components/messages/messages.component";
import {MessageService} from "./services/message.service";

@NgModule({
    declarations: [
        MessageListComponent,
        MessageComponent,
        MessageInputComponent,
        MessagesComponent
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    bootstrap: [MessagesComponent],
    providers: [MessageService]
})
export class MessagesModule {

}
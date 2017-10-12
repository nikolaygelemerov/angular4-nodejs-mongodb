import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import {MessageComponent} from "./messages/message.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
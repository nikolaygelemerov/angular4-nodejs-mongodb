import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { ROUTING } from "./app.routing";
import { MessagesModule } from "./modules/messages/messages.module";
import { AuthModule } from "./modules/auth/auth.module";
import { HeaderComponent } from "./header.component";
import { SharedModule } from "./modules/shared/shared.module";
import { ErrorComponent } from "./error-component/error.component";
import { ErrorService } from "./error-component/services/error.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        ROUTING,
        MessagesModule,
        AuthModule,
        SharedModule
    ],
    bootstrap: [AppComponent],
    providers: [ErrorService]
})
export class AppModule {

}
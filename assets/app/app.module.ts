import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { ROUTING } from "./app.routing";
import { MessagesModule } from "./modules/messages/messages.module";
import { HeaderComponent } from "./header.component";
import { SharedModule } from "./modules/shared/shared.module";
import { ErrorComponent } from "./error-component/error.component";
import { ErrorService } from "./error-component/services/error.service";
import { AuthenticationComponent } from "./modules/auth/components/authentication/authentication.component";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        ROUTING,
        MessagesModule,
        SharedModule
    ],
    bootstrap: [AppComponent],
    providers: [ErrorService]
})
export class AppModule {

}
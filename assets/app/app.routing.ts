import {RouterModule, Routes} from "@angular/router";

import {MessagesComponent} from "./modules/messages/components/messages/messages.component";
import {AuthenticationComponent} from "./modules/auth/components/authentication/authentication.component";
import {AUTH_ROUTES} from "./modules/auth/auth.routes";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/messages',
        //absolute path, always redirects to localhost:3000/messages, not to any existing route whith appending 'messages',
        pathMatch: 'full'
        //this will prevent angular redirect to any path that contains localhost:3000/
    },
    {
        path: 'messages',
        component: MessagesComponent
    },
    {
        path: 'auth',
        component: AuthenticationComponent,
        children: AUTH_ROUTES
    }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
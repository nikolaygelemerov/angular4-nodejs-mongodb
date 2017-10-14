import {RouterModule, Routes} from "@angular/router";

import {MessagesComponent} from "./messages/components/messages/messages.component";
import {AuthenticationComponent} from "./auth/components/authentication/authentication.component";

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
        component: AuthenticationComponent
    }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
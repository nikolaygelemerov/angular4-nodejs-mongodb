import {Routes} from "@angular/router";
import {SignUpComponent} from "./components/sing-up/sign-up.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {LogoutComponent} from "./components/logout/logout.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'signin',
        component: SignInComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];
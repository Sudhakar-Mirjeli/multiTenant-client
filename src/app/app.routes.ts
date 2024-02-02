import { Routes } from '@angular/router';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';

export const routes: Routes = [
    {
        path:'',
        component:SignUpComponent
    },
    {
        path:'sign-in',
        component:SignInComponent
    }
];

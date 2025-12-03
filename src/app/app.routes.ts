import { Routes } from '@angular/router';
import { InsureHealthDetails } from './modules/insure-health-details/insure-health-details';
import { LandingPage } from './modules/landing-page/landing-page';

export const routes: Routes = [
    {
        
        path: "insure-health-details", component: InsureHealthDetails
    },
    {
        path: "landing-page", component: LandingPage

    }
];

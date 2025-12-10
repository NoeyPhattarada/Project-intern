import { Routes } from '@angular/router';
import { InsureHealthDetails } from './modules/insure-health-details/insure-health-details';

export const routes: Routes = [
  {
    path: 'insure-health-details',
    component: InsureHealthDetails,
  },
  {
    path: 'landing-page',
    loadComponent: () => import('./modules/landing-page/landing-page').then((m) => m.LandingPage),
  },
];

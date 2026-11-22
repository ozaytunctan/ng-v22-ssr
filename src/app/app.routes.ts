import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    title:'Hakkımda',
    loadComponent: () =>
      import('./pages/about/about') //
        .then((c) => c.About),
  },
  {
    path: 'pricing',
    title:'Fiyatlandırma',
    loadComponent: () =>
      import('./pages/pricing/pricing-page') //
        .then((c) => c.PricingPage),
  },
  {
    path: 'contact',
    title:'İletişim',
    loadComponent: () =>
      import('./pages/contact/contact-page') //
        .then((c) => c.ContactPage),
  },
  {
    path: '**',
    redirectTo: () => {
      //const autService=inject(AuthService);
      return 'about';
    },
  },
];

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./pages/public/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/public/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/public/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/public/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/secure/charts/charts.module').then( m => m.ChartsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/secure/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/secure/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/secure/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/secure/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'styleguide',
    loadChildren: () => import('./pages/secure/styleguide/styleguide.module').then( m => m.StyleguidePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

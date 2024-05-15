import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/secure/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'charts',
        loadChildren: () => import('../pages/secure/charts/charts.module').then(m => m.ChartsPageModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('../pages/secure/payments/payments.module').then(m => m.PaymentsPageModule)
      },
      {
        path: 'styleguide',
        loadChildren: () => import('../pages/secure/styleguide/styleguide.module').then(m => m.StyleguidePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

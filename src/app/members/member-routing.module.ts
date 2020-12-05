import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  {
    path: 'cust-info',
    loadChildren: () => import('./inc/cust-info/cust-info.module').then( m => m.CustInfoPageModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./inc/trips/trips.module').then( m => m.TripsPageModule)
  },
  {
    path: 'print',
    loadChildren: () => import('./inc/print/print.module').then( m => m.PrintPageModule)
  },
  {
    path: 'add-order',
    loadChildren: () => import('./inc/add-order/add-order.module').then( m => m.AddOrderPageModule)
  },
  {
    path: 'trips-more',
    loadChildren: () => import('./inc/trips-more/trips-more.module').then( m => m.TripsMorePageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./inc/order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
  {
    path: 'order-info',
    loadChildren: () => import('./inc/order-info/order-info.module').then( m => m.OrderInfoPageModule)
  },
  {
    path: 'return',
    loadChildren: () => import('./inc/return/return.module').then( m => m.ReturnPageModule)
  },
  {
    path: 'outst-settle',
    loadChildren: () => import('./inc/outst-settle/outst-settle.module').then( m => m.OutstSettlePageModule)
  },
  {
    path: 'outst-more',
    loadChildren: () => import('./inc/outst-more/outst-more.module').then( m => m.OutstMorePageModule)
  },
  {
    path: 'cust-add',
    loadChildren: () => import('./inc/cust-add/cust-add.module').then( m => m.CustAddPageModule)
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
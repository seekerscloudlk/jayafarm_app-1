import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustInfoPage } from './cust-info.page';

const routes: Routes = [
  {
    path: '',
    component: CustInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustInfoPageRoutingModule {}

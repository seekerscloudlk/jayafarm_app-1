import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustAddPage } from './cust-add.page';

const routes: Routes = [
  {
    path: '',
    component: CustAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustAddPageRoutingModule {}

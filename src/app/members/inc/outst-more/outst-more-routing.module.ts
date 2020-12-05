import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutstMorePage } from './outst-more.page';

const routes: Routes = [
  {
    path: '',
    component: OutstMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutstMorePageRoutingModule {}

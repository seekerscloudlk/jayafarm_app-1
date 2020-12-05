import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsMorePage } from './trips-more.page';

const routes: Routes = [
  {
    path: '',
    component: TripsMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsMorePageRoutingModule {}

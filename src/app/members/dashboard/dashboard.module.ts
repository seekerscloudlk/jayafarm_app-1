import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { CustInfoPageModule } from '../inc/cust-info/cust-info.module';
import { AddOrderPageModule } from '../inc/add-order/add-order.module';
import { CustAddPageModule } from '../inc/cust-add/cust-add.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    CustInfoPageModule,
    AddOrderPageModule,
    CustAddPageModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderHistoryPageRoutingModule } from './order-history-routing.module';

import { OrderHistoryPage } from './order-history.page';
import { OrderInfoPageModule } from '../order-info/order-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHistoryPageRoutingModule,
    OrderInfoPageModule
  ],
  declarations: [OrderHistoryPage]
})
export class OrderHistoryPageModule {}

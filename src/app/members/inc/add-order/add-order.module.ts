import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrderPageRoutingModule } from './add-order-routing.module';

import { AddOrderPage } from './add-order.page';
import { ReturnPageModule } from '../return/return.module'
import { OrderHistoryPageModule } from '../order-history/order-history.module'
import { OutstSettlePageModule } from '../outst-settle/outst-settle.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOrderPageRoutingModule,
    ReturnPageModule,
    OrderHistoryPageModule,
    OutstSettlePageModule
  ],
  declarations: [AddOrderPage]
})
export class AddOrderPageModule {}

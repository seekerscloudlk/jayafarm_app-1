import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutstSettlePageRoutingModule } from './outst-settle-routing.module';

import { OutstSettlePage } from './outst-settle.page';
import { OutstMorePageModule } from '../outst-more/outst-more.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutstSettlePageRoutingModule,
    OutstMorePageModule
  ],
  declarations: [OutstSettlePage]
})
export class OutstSettlePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutstMorePageRoutingModule } from './outst-more-routing.module';

import { OutstMorePage } from './outst-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutstMorePageRoutingModule
  ],
  declarations: [OutstMorePage]
})
export class OutstMorePageModule {}

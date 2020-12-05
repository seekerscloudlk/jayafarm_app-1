import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustInfoPageRoutingModule } from './cust-info-routing.module';

import { CustInfoPage } from './cust-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustInfoPageRoutingModule
  ],
  declarations: [CustInfoPage]
})
export class CustInfoPageModule {}

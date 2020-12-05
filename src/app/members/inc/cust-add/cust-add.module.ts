import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CustAddPageRoutingModule } from './cust-add-routing.module';

import { CustAddPage } from './cust-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustAddPage]
})
export class CustAddPageModule {}

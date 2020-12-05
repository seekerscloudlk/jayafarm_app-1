import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripsMorePageRoutingModule } from './trips-more-routing.module';

import { TripsMorePage } from './trips-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripsMorePageRoutingModule
  ],
  declarations: [TripsMorePage]
})
export class TripsMorePageModule {}

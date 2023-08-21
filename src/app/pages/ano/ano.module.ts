import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnoPageRoutingModule } from './ano-routing.module';

import { AnoPage } from './ano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnoPageRoutingModule
  ],
  declarations: [AnoPage]
})
export class AnoPageModule {}

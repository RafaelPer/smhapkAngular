import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComodoInfoPageRoutingModule } from './comodo-info-routing.module';

import { ComodoInfoPage } from './comodo-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComodoInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ComodoInfoPage]
})
export class ComodoInfoPageModule {}

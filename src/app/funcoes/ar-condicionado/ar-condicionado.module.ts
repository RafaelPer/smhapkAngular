import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArCondicionadoPageRoutingModule } from './ar-condicionado-routing.module';

import { ArCondicionadoPage } from './ar-condicionado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArCondicionadoPageRoutingModule
  ],
  declarations: [ArCondicionadoPage]
})
export class ArCondicionadoPageModule {}

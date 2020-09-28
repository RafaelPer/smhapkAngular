import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomadasPageRoutingModule } from './tomadas-routing.module';

import { TomadasPage } from './tomadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomadasPageRoutingModule
  ],
  declarations: [TomadasPage]
})
export class TomadasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuzesPageRoutingModule } from './luzes-routing.module';

import { LuzesPage } from './luzes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuzesPageRoutingModule
  ],
  declarations: [LuzesPage]
})
export class LuzesPageModule {}

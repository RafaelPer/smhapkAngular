import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterInfoContaPageRoutingModule } from './alter-info-conta-routing.module';

import { AlterInfoContaPage } from './alter-info-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterInfoContaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlterInfoContaPage]
})
export class AlterInfoContaPageModule {}

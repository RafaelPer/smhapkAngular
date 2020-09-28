import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialPageRoutingModule } from './initial-routing.module';

import { InitialPage } from './initial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InitialPage]
})
export class InitialPageModule {}

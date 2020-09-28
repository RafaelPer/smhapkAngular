import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewComodoPageRoutingModule } from './new-comodo-routing.module';

import { NewComodoPage } from './new-comodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewComodoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewComodoPage]
})
export class NewComodoPageModule {}

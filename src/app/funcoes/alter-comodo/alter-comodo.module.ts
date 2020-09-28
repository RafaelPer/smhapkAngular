import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterComodoPageRoutingModule } from './alter-comodo-routing.module';

import { AlterComodoPage } from './alter-comodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterComodoPageRoutingModule
  ],
  declarations: [AlterComodoPage]
})
export class AlterComodoPageModule {}

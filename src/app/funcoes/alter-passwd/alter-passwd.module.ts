import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterPasswdPageRoutingModule } from './alter-passwd-routing.module';

import { AlterPasswdPage } from './alter-passwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterPasswdPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlterPasswdPage]
})
export class AlterPasswdPageModule {}

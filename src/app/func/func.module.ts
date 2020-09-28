import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncPage } from './func.page';
//import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FuncPageRoutingModule } from './func-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //ExploreContainerComponentModule,
    FuncPageRoutingModule
  ],
  declarations: [FuncPage]
})
export class FuncPageModule {}

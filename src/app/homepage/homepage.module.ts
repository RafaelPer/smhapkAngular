import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomepagePage } from './homepage.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomepagePageRoutingModule } from './homepage-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ExploreContainerComponentModule,
    HomepagePageRoutingModule
  ],
  declarations: [HomepagePage]
})
export class HomepagePageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuzesPage } from './luzes.page';

const routes: Routes = [
  {
    path: '',
    component: LuzesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuzesPageRoutingModule {}

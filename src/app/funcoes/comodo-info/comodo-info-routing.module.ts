import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComodoInfoPage } from './comodo-info.page';

const routes: Routes = [
  {
    path: '',
    component: ComodoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComodoInfoPageRoutingModule {}

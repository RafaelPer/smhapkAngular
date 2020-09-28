import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomadasPage } from './tomadas.page';

const routes: Routes = [
  {
    path: '',
    component: TomadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomadasPageRoutingModule {}

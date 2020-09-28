import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArCondicionadoPage } from './ar-condicionado.page';

const routes: Routes = [
  {
    path: '',
    component: ArCondicionadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArCondicionadoPageRoutingModule {}

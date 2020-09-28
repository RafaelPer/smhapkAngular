import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterInfoContaPage } from './alter-info-conta.page';

const routes: Routes = [
  {
    path: '',
    component: AlterInfoContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterInfoContaPageRoutingModule {}

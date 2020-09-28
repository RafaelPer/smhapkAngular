import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterComodoPage } from './alter-comodo.page';

const routes: Routes = [
  {
    path: '',
    component: AlterComodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterComodoPageRoutingModule {}

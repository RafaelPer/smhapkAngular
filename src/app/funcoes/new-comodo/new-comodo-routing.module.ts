import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComodoPage } from './new-comodo.page';

const routes: Routes = [
  {
    path: '',
    component: NewComodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewComodoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterPasswdPage } from './alter-passwd.page';

const routes: Routes = [
  {
    path: '',
    component: AlterPasswdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterPasswdPageRoutingModule {}

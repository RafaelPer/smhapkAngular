import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncPage } from './func.page';

const routes: Routes = [
  {
    path: '',
    component: FuncPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncPageRoutingModule {}

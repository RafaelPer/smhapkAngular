import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'smh/homepage',
    pathMatch: 'full'
  },
  {
    path: 'smh',
    component: TabsPage,
    children: [
      {
        path: 'homepage',
        loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepagePageModule)
      },
      {
        path: 'func',
        loadChildren: () => import('../func/func.module').then(m => m.FuncPageModule)
      },
      {
        path: 'config',
        loadChildren: () => import('../config/config.module').then(m => m.ConfigPageModule)
      },
      {
        path: 'temp',
        loadChildren: () => import('../funcoes/temp/temp.module').then( m => m.TempPageModule)
      },
      // {
      //   path: 'tomadas',
      //   loadChildren: () => import('../funcoes/tomadas/tomadas.module').then( m => m.TomadasPageModule)
      // },
      // {
      //   path: 'luzes',
      //   loadChildren: () => import('../funcoes/luzes/luzes.module').then( m => m.LuzesPageModule)
      // },
      {
        path: 'alarmes',
        loadChildren: () => import('../funcoes/alarmes/alarmes.module').then( m => m.AlarmesPageModule)
      },
      // {
      //   path: 'ar-condicionado',
      //   loadChildren: () => import('../funcoes/ar-condicionado/ar-condicionado.module').then( m => m.ArCondicionadoPageModule)
      // },
      {
        path: 'new-comodo',
        loadChildren: () => import('../funcoes/new-comodo/new-comodo.module').then( m => m.NewComodoPageModule)
      },
      {
        path: 'alter-passwd/:id',
        loadChildren: () => import('../funcoes/alter-passwd/alter-passwd.module').then( m => m.AlterPasswdPageModule)
      },
      {
        path: 'alter-info-conta/:id',
        loadChildren: () => import('../funcoes/alter-info-conta/alter-info-conta.module').then( m => m.AlterInfoContaPageModule)
      },
      {
        path: 'comodo-info/:id',
        loadChildren: () => import('../funcoes/comodo-info/comodo-info.module').then( m => m.ComodoInfoPageModule)
      },
      {
        path: 'alter-comodo',
        loadChildren: () => import('../funcoes/alter-comodo/alter-comodo.module').then( m => m.AlterComodoPageModule)
      },
      {
        path: '',
        redirectTo: 'smh/homepage',
        pathMatch: 'full'
      }
    ]
  }
  // {
  //   path: '',
  //   redirectTo: 'members/tabs/homepage',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

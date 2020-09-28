import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'members',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./outros/initial/initial.module').then( m => m.InitialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./outros/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./outros/register/register.module').then( m => m.RegisterPageModule)
  },
  // {
  //   path: 'temp',
  //   loadChildren: () => import('./funcoes/temp/temp.module').then( m => m.TempPageModule)
  // },
  // {
  //   path: 'tomadas',
  //   loadChildren: () => import('./funcoes/tomadas/tomadas.module').then( m => m.TomadasPageModule)
  // },
  // {
  //   path: 'luzes',
  //   loadChildren: () => import('./funcoes/luzes/luzes.module').then( m => m.LuzesPageModule)
  // },
  // {
  //   path: 'alarmes',
  //   loadChildren: () => import('./funcoes/alarmes/alarmes.module').then( m => m.AlarmesPageModule)
  // },
  // {
  //   path: 'ar-condicionado',
  //   loadChildren: () => import('./funcoes/ar-condicionado/ar-condicionado.module').then( m => m.ArCondicionadoPageModule)
  // },
  // {
  //   path: 'new-comodo',
  //   loadChildren: () => import('./funcoes/new-comodo/new-comodo.module').then( m => m.NewComodoPageModule)
  // },
  // {
  //   path: 'alter-passwd',
  //   loadChildren: () => import('./funcoes/alter-passwd/alter-passwd.module').then( m => m.AlterPasswdPageModule)
  // },
  // {
  //   path: 'alter-info-conta',
  //   loadChildren: () => import('./funcoes/alter-info-conta/alter-info-conta.module').then( m => m.AlterInfoContaPageModule)
  // },
  // {
  //   path: 'comodo-info',
  //   loadChildren: () => import('./funcoes/comodo-info/comodo-info.module').then( m => m.ComodoInfoPageModule)
  // },
  // {
  //   path: 'alter-comodo',
  //   loadChildren: () => import('./funcoes/alter-comodo/alter-comodo.module').then( m => m.AlterComodoPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

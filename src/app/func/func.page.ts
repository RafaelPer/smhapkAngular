import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-func',
  templateUrl: 'func.page.html',
  styleUrls: ['func.page.scss']
})
export class FuncPage {

  constructor(private router: Router) {}

  routerTemp(idCom){
    this.router.navigateByUrl('/members/smh/temp');
  }

  // routerLuzes(){
  //   this.router.navigateByUrl('/members/smh/luzes');
  // }

  // routerTomadas(){
  //   this.router.navigateByUrl('/members/smh/tomadas');
  // }

  routerAlarmes(){
    this.router.navigateByUrl('/members/smh/alarmes');
  }

  // routerArCond(){
  //   this.router.navigateByUrl('/members/smh/ar-condicionado');
  // }

  routerNewCom(){
    this.router.navigateByUrl('/members/smh/new-comodo');
  }

}

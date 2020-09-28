(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-homepage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      INICIO\n    </ion-title>\n    <ion-item slot=\"end\" lines=\"none\"><ion-button color=\"danger\" (click)='logout()'><ion-icon name=\"log-out-outline\"></ion-icon>&nbsp; Sair</ion-button></ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n  <ion-card>\n\n    <ion-card-header>\n      <ion-card-title class=\"titleFavRoom\">Quartos Favoritos</ion-card-title>\n      <!-- <ion-card-subtitle class=\"subtitleFavRoom\">Quarto Favorito</ion-card-subtitle> -->\n    </ion-card-header>\n    \n    <ion-card-content *ngFor=\"let comFav of comodoFav\">\n      <!-- <ion-card class=\"cardContentFavRoom\" color=\"tertiary\">\n\n        <ion-card-header>\n          <ion-card-title class=\"titleFavRoom\">Informações</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content style=\"text-align: center;\"> -->\n          \n          <ion-grid class=\"teste\">\n            <ion-row>\n              <ion-col>\n                <ion-item color=\"transp\" lines=\"none\">\n                  <ion-button [color]=\"comFav.isActive ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"comFav.isActive ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{comFav.isActive ? 'Atvio' : 'Desativado'}}</ion-button>\n                </ion-item>\n                <h3 style=\"text-align: center; font-size: large;\">Quarto: {{comFav.nomeComodo}}</h3>\n                <h3 style=\"text-align: center; font-size: large;\">Informações</h3>\n\n                <ion-segment scrollable [(ngModel)]=\"segment\" color=\"danger\" (ionChange)=\"segmentChanged()\" class=\"segmentMain\">\n\n                  <ion-segment-button [value]=\"comFav._id + 0\" checked>\n                    <ion-icon name=\"thermometer-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\" #noteSeg>Temperatura</ion-note>\n                  </ion-segment-button>\n\n                  <ion-segment-button [value]=\"comFav._id + 1\">\n                    <ion-icon name=\"snow-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\">Ar Condicionado</ion-note>\n                  </ion-segment-button>\n\n                  <ion-segment-button [value]=\"comFav._id + 2\">\n                    <ion-icon name=\"bulb-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\">Luzes</ion-note>\n                  </ion-segment-button>\n\n                  <ion-segment-button [value]=\"comFav._id + 3\">\n                    <ion-icon name=\"flash-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\">Tomadas</ion-note>\n                  </ion-segment-button>\n                  \n                  <ion-segment-button [value]=\"comFav._id + 4\">\n                    <ion-icon name=\"notifications-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\">Alarmes</ion-note>\n                  </ion-segment-button>\n\n                </ion-segment>\n\n                <!-- <ion-slides #slides (ionSlideDidChange)=\"slideChanged()\" class=\"slidesFavRoomConf\">\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <br/>\n                  <ion-card *ngIf=\"segment === comFav._id + 0\" style=\"margin: 0px auto 0px auto !important;\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Temperatura do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listTemp\">\n                          \n                          <ion-item class=\"itemFavRoom\">\n                            <ion-label><ion-icon name=\"thermometer\" color=\"danger\"></ion-icon> Temperatura: {{comFav.tempComodo}}</ion-label>\n                          </ion-item>\n\n                          <ion-item class=\"itemFavRoom\">\n                            <ion-label><ion-icon name=\"water\" color=\"primary\"></ion-icon> Umidade do Ar: {{comFav.umiComodoF}}</ion-label>\n                          </ion-item>\n\n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <ion-card *ngIf=\"segment === comFav._id + 1\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Ar Condicionado do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listArCond\">\n                          \n                          <ion-radio-group [value]=\"comFav.statusArCondiconado ? 'on' : 'off'\" (ionChange)=\"changeArCondButton(comFav.issync, comFav._id, $event, comFav.nomeComodo)\">\n\n                            <ion-item>\n                              <ion-label>LIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n                          \n                            <ion-item>\n                              <ion-label>DESLIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n\n                          </ion-radio-group>\n            \n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <ion-card *ngIf=\"segment === comFav._id + 2\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Luzes do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listArCond\">\n                          \n                          <ion-radio-group [value]=\"comFav.statusLuzComodo ? 'on' : 'off'\" (ionChange)=\"changeLuzesButton(comFav.issync, comFav._id, $event, comFav.nomeComodo)\">\n\n                            <ion-item>\n                              <ion-label>LIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n                          \n                            <ion-item>\n                              <ion-label>DESLIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n\n                          </ion-radio-group>\n            \n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <ion-card *ngIf=\"segment === comFav._id + 3\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Tomadas do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listArCond\">\n                          \n                          <ion-radio-group [value]=\"comFav.statusTomadaComodo ? 'on' : 'off'\" (ionChange)=\"changeTomadasButton(comFav.issync, comFav._id, $event, comFav.nomeComodo)\">\n\n                            <ion-item>\n                              <ion-label>LIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n                          \n                            <ion-item>\n                              <ion-label>DESLIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n\n                          </ion-radio-group>\n            \n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <ion-card *ngIf=\"segment === comFav._id + 4\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Alarmes do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listArCond\">\n                          <ion-item>\n                            <ion-label>JANELAS E PORTAS</ion-label>\n                          </ion-item>\n\n                          <ion-item>\n                            <ion-label>JANELA</ion-label>\n                          </ion-item>\n\n                          <!--<ion-segment color=\"danger\" disabled scrollable>\n                            <ion-segment-button value=\"open\">\n                              <ion-label>ABERTO</ion-label>\n                              <ion-icon name=\"lock-open-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                            <ion-segment-button value=\"close\">\n                              <ion-label>FECHADO</ion-label>\n                              <ion-icon name=\"lock-closed-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                          </ion-segment>-->\n                          <ion-button color=\"danger\" [fill]=\"comFav.statusJanelaComodo === false ? 'solid' : 'outline'\" disabled #buttonJanelaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n                          <ion-button color=\"success\" [fill]=\"comFav.statusJanelaComodo === true ? 'solid' : 'outline'\" disabled #buttonJanelaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n                          <br>\n\n                          <ion-item>\n                            <ion-label>PORTA</ion-label>\n                          </ion-item>\n\n                          <!--<ion-segment color=\"danger\" disabled scrollable>\n                            <ion-segment-button value=\"open\">\n                              <ion-label>ABERTO</ion-label>\n                              <ion-icon name=\"lock-open-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                            <ion-segment-button value=\"close\">\n                              <ion-label>FECHADO</ion-label>\n                              <ion-icon name=\"lock-closed-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                          </ion-segment>-->\n                          <ion-button color=\"danger\" [fill]=\"comFav.statusPortaComodo === false ? 'solid' : 'outline'\" disabled #buttonPortaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n                          <ion-button color=\"success\" [fill]=\"comFav.statusPortaComodo === true ? 'solid' : 'outline'\" disabled #buttonPortaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n                          <br>\n\n                          <ion-item>\n                            <ion-label>SENSOR DE PRESENÇA</ion-label>\n                          </ion-item>\n\n                          <!--<ion-segment color=\"danger\" disabled scrollable>\n                            <ion-segment-button value=\"open\">\n                              <ion-label>DETECTADO</ion-label>\n                              <ion-icon name=\"lock-open-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                            <ion-segment-button value=\"close\">\n                              <ion-label>NÃO DETECTADO</ion-label>\n                              <ion-icon name=\"lock-closed-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                          </ion-segment>-->\n                          <ion-button color=\"danger\" [fill]=\"comFav.statusPresencaComodo === true ? 'solid' : 'outline'\" disabled #buttonSenPrenDetec><ion-icon name=\"eye-outline\"></ion-icon>&nbsp; DETECTADO</ion-button>\n                          <ion-button color=\"success\" [fill]=\"comFav.statusPresencaComodo === false ? 'solid' : 'outline'\" disabled #buttonSenPrenNoDetec><ion-icon name=\"eye-off-outline\"></ion-icon>&nbsp; NÃO DETECTADO</ion-button>\n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n                  \n                </ion-slides> -->\n                \n                <!-- <ion-label color=\"light\" class=\"tempAjustText\">Ajustar Temperatura</ion-label>\n                <ion-range min=\"16\" max=\"30\" step=\"1\" snaps=\"true\" pin=\"true\" (ionChange)=\"rangeChanged(comFav.issync, comFav._id, $event, comFav.nomeComodo)\" color=\"danger\" class=\"radioTemp\" [value]=\"comFav.tempComodo\">\n                  <ion-icon size=\"small\" slot=\"start\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n                  <ion-label slot=\"start\" color=\"dark\">16</ion-label>\n                  \n                  <ion-label slot=\"end\" color=\"dark\">30</ion-label>\n                  <ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n                </ion-range> -->\n                <ion-item>\n                  <ion-label><ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>&nbsp; Ajustar Temperatura</ion-label>\n                  <ion-select placeholder=\"Temperatura\" okText=\"Ok\" cancelText=\"Cancelar\" (ionChange)=\"rangeChanged(comFav.issync, comFav._id, $event, comFav.nomeComodo)\" value=\"{{comFav.ajustTempComodo}}\">\n                    <ion-select-option color=\"danger\" *ngFor=\"let number of [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]\">{{number}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n                <br/>\n                <ion-item>\n                  <ion-button color=\"danger\" slot=\"end\" (click)=\"routerMore(comFav._id)\"><ion-icon name=\"enter\"></ion-icon>&nbsp; VER MAIS</ion-button>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n<!-- \n        </ion-card-content>\n        \n      </ion-card>         -->\n    </ion-card-content>\n    \n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"titleFavRoom\">Outros Comodos Cadastrados</ion-card-title>\n    </ion-card-header>\n\n    <ion-card *ngFor=\"let com of comodoData\">\n      <ion-card-header color=\"danger\">\n        <ion-card-title>\n          Comodo: {{com.nomeComodo}}\n        </ion-card-title>\n      </ion-card-header>\n        \n      <ion-card-content>\n        <ion-list>\n\n          <!--<ion-item>\n            <ion-label>Favorito </ion-label><ion-toggle color=\"danger\"></ion-toggle>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Ativo </ion-label><ion-toggle color=\"danger\"></ion-toggle>\n          </ion-item>-->\n          <!-- <ion-item color=\"transp\" lines=\"none\">\n            <ion-button [color]=\"com.isActive ? 'success' : 'dark'\" slot=\"start\" disabled><ion-icon [name]=\"com.isActive ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isActive ? 'Atvio' : 'Desativado'}}</ion-button>\n          </ion-item> -->\n          <ion-item>\n            <ion-button [color]=\"com.isActive ? 'success' : 'dark'\" slot=\"start\" disabled><ion-icon [name]=\"com.isActive ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isActive ? 'Atvio' : 'Desativado'}}</ion-button>\n            <ion-button color=\"danger\" slot=\"end\" (click)=\"routerMore(com._id)\"><ion-icon name=\"enter\"></ion-icon>&nbsp; VER MAIS</ion-button>\n          </ion-item>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/homepage/homepage-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/homepage-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomepagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepagePageRoutingModule", function() { return HomepagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage.page */ "./src/app/homepage/homepage.page.ts");




const routes = [
    {
        path: '',
        component: _homepage_page__WEBPACK_IMPORTED_MODULE_3__["HomepagePage"],
    }
];
let HomepagePageRoutingModule = class HomepagePageRoutingModule {
};
HomepagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomepagePageRoutingModule);



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepagePageModule", function() { return HomepagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _homepage_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage.page */ "./src/app/homepage/homepage.page.ts");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage-routing.module */ "./src/app/homepage/homepage-routing.module.ts");






// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

let HomepagePageModule = class HomepagePageModule {
};
HomepagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            // ExploreContainerComponentModule,
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomepagePageRoutingModule"]
        ],
        declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_5__["HomepagePage"]]
    })
], HomepagePageModule);



/***/ }),

/***/ "./src/app/homepage/homepage.page.scss":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titleFavRoom {\n  text-align: center;\n}\n\n.subtitleFavRoom {\n  text-align: center;\n}\n\n.cardContentFavRoom {\n  padding: 0px;\n  margin: 0px;\n}\n\n.segmentFavRoom {\n  margin: 10px;\n}\n\n.slidesFavRoomConf {\n  margin: 3px;\n}\n\n.tempAjustText {\n  text-align: center;\n}\n\n.listTemp {\n  width: 100%;\n  text-align: center;\n}\n\n.radioTemp {\n  background-color: #f4f5f8;\n  padding: 3px;\n}\n\n.tempAjustText {\n  font-size: large;\n}\n\n.listArCond {\n  width: 100%;\n}\n\n.itemFavRoom {\n  text-align: center;\n}\n\n.segmentMain {\n  --background: #f4f5f8;\n}\n\n.teste {\n  background: var(--ion-color-tertiary);\n  color: var(--ion-color-tertiary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvQzpcXFVzZXJzXFxSaHlpeFxcRGVza3RvcFxcRkVNQVxcVENDXFxkZXNlbnZvdmltZW50b1Byb2dcXHNtaGFwa0FuZ3VsYXIvc3JjXFxhcHBcXGhvbWVwYWdlXFxob21lcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtBQ0RKOztBRElBO0VBQ0kscUNBQUE7RUFDQSx5Q0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlRmF2Um9vbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1YnRpdGxlRmF2Um9vbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRDb250ZW50RmF2Um9vbXtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uc2VnbWVudEZhdlJvb217XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5zbGlkZXNGYXZSb29tQ29uZntcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZW1wQWp1c3RUZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdFRlbXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJhZGlvVGVtcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZjRmNWY4LCAkYWxwaGE6IDEuMCk7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi50ZW1wQWp1c3RUZXh0e1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmxpc3RBckNvbmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLml0ZW1GYXZSb29te1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VnbWVudE1haW57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XHJcbn1cclxuXHJcbi50ZXN0ZXtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0KTtcclxufVxyXG5cclxuLy8gLnNsaWRlZmF2Um9vbXtcclxuLy8gICAgIC8vYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbi8vICAgICBwYWRkaW5nOiAwcHg7XHJcbi8vIH0iLCIudGl0bGVGYXZSb29tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VidGl0bGVGYXZSb29tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZENvbnRlbnRGYXZSb29tIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnNlZ21lbnRGYXZSb29tIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uc2xpZGVzRmF2Um9vbUNvbmYge1xuICBtYXJnaW46IDNweDtcbn1cblxuLnRlbXBBanVzdFRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saXN0VGVtcCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yYWRpb1RlbXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi50ZW1wQWp1c3RUZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmxpc3RBckNvbmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW1GYXZSb29tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VnbWVudE1haW4ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi50ZXN0ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/homepage/homepage.page.ts":
/*!*******************************************!*\
  !*** ./src/app/homepage/homepage.page.ts ***!
  \*******************************************/
/*! exports provided: HomepagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepagePage", function() { return HomepagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_comodo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/comodo.service */ "./src/app/services/comodo.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storageL_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storageL.service */ "./src/app/services/storageL.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let HomepagePage = class HomepagePage {
    // comFav: any = {
    //   statusArCondiconado: true
    // }
    constructor(router, apiService, toastController, auth, alertCtrl, storage) {
        this.router = router;
        this.apiService = apiService;
        this.toastController = toastController;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.segment = 0;
        this.token = null;
        this.user = null;
        this.idUser = null;
        this.comodoData = [];
        this.comodoFav = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.getAllComodosMongoDB();
            //this.slider.lockSwipes(true);
            this.user = this.auth.getUser();
            console.log(this.user);
            this.idUser = yield this.storage.getIdUser();
            console.log(this.idUser);
            this.token = yield this.storage.getToken();
            // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
            console.log(this.token);
            this.userID = this.user ? this.user.id : this.idUser[0].idUser;
            // this.userID = '5f0a2a4fa1d84f17a891d5a9';
            // console.log(this.token);
            // this.segment = userID + '0'
            this.getAllComodosByUserIDMDB(false, this.userID, this.token[0].token);
            this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.auth.getUser();
            console.log(this.user);
            this.idUser = yield this.storage.getIdUser();
            console.log(this.idUser);
            this.token = yield this.storage.getToken();
            // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
            console.log(this.token);
            this.userID = this.user ? this.user.id : this.idUser[0].idUser;
            // this.userID = '5f0a2a4fa1d84f17a891d5a9';
            console.log(this.comodoFav);
            console.log(this.comodoData);
            // if(this.slider){
            //   this.slider.slideTo(this.segment);
            //   console.log("slider");
            // }
            // else{
            //   this.presentToast('Não existe comodo favorito cadastrado');
            // }
            // console.log(this.slider);
            // this.slider.slideTo(this.segment);
            this.getAllComodosByUserIDMDB(false, this.userID, this.token[0].token);
            this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
        });
    }
    getAllComodosByUserIDMDB(isfav, userID, token) {
        console.log(userID + '  ' + token);
        this.apiService.getByIsFavUserIDMongoDB(isfav, userID, token).subscribe((response) => {
            console.log(response);
            this.comodoData = response;
        }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            // this.presentToast(err.error.message);
            let error = err.error ? err.error.message : err.message;
            const alert = yield this.alertCtrl.create({
                header: 'Falha em buscar os comodos',
                message: 'Erro: ' + error,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    getComodoByFavUserIDMBD(isFav, userID, token) {
        this.apiService.getByIsFavUserIDMongoDB(isFav, userID, token).subscribe(response => {
            console.log(response);
            this.comodoFav = response;
        }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            let error = err.error ? err.error.message : err.message;
            const alert = yield this.alertCtrl.create({
                header: 'Falha em buscar os comodos favoritos',
                message: 'Erro: ' + error,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    insertOrUpdateComSQLite(idCom, comodo, token, nomCom) {
        this.apiService.postComodoSQLite(comodo, token).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            let existTble = false;
            for (let r of response.message) {
                console.log(r);
                if (r.message.indexOf('Coluna ja Existe na base do servidor, Sincronizado com sucesso')) {
                    existTble = true;
                    break;
                }
            }
            console.log(existTble);
            if (existTble) {
                this.alterComSQLite(idCom, comodo, token, nomCom);
            }
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            let erro = err.message;
            let errors = err.error.errors;
            let messages = err.error.message;
            let teste = [];
            console.log(errors);
            console.log(messages);
            if (errors) {
                for (let e of errors) {
                    console.log(e.message);
                    teste.push(e.message);
                }
            }
            if (messages) {
                for (let m of messages) {
                    console.log(m);
                    teste.push(m.message);
                }
            }
            teste.push(erro);
            console.log(teste);
            const alert = yield this.alertCtrl.create({
                header: 'Falha em sincronizar o comodo ' + nomCom + ' com o id: ' + idCom + ' na base local',
                message: 'Erro: ' + teste,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    alterComSQLite(idMongo, comodo, token, nomCom) {
        this.apiService.putComodoByIDComodoMongoSQLite(idMongo, comodo, token).subscribe((response) => {
            console.log(response);
        }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            let error = err.error ? err.error.message : err.message;
            const alert = yield this.alertCtrl.create({
                header: 'Falha em atualizar o comodo ' + nomCom + ' com o id: ' + idMongo + ' na base local',
                message: 'Erro: ' + error,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    segmentChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // this.slider.lockSwipes(false);
            // await this.slider.slideTo(this.segment);
            console.log(this.segment);
        });
    }
    // async slideChanged() {
    //   // this.slider.lockSwipes(false);
    //   this.segment = await this.slider.getActiveIndex();
    // }
    rangeChanged(isSync, idCom, event, nomeCom) {
        console.log('teste');
        console.log(isSync);
        console.log(idCom);
        console.log(event);
        console.log(event.detail.value);
        if (event.detail.value) {
            let t = {
                ajustTempComodo: event.detail.value
            };
            console.log(t);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
                console.log(response);
                this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
                if (isSync) {
                    let te = {
                        IDMongodbComodo: idCom,
                        ajustTempComodo: event.detail.value
                    };
                    this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
                }
                else {
                    this.presentToast('Sincronização do Comodo desativada, não sincronizado');
                }
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
                    message: 'Erro: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
        else {
            this.presentToast('Selecione uma Temperatura');
        }
    }
    // ionFocus(event){
    //   this.slider.lockSwipes(true);
    //   //console.log(event);
    //   console.log("hhhhhhhhhhhh");
    //   document.getElementById('t').blur();
    // }
    // ionBlur(event){
    //   this.slider.lockSwipes(false);
    //   console.log("tttttttttttt");
    // }
    logout() {
        //console.log('ttttttt');
        this.auth.logout();
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                color: 'danger'
            });
            return yield toast.present();
        });
    }
    changeArCondButton(isSync, idCom, event, nomeCom) {
        console.log('changeArCondButton');
        console.log(isSync);
        console.log(idCom);
        console.log(event);
        console.log(event.detail.value);
        if (event.detail) {
            let value = event.detail.value;
            let statusAr = null;
            if (value === 'on') {
                statusAr = true;
            }
            else if (value === 'off') {
                statusAr = false;
            }
            let t = {
                statusArCondiconado: statusAr
            };
            console.log(t);
            console.log(this.token);
            console.log(this.userID);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
                console.log(response);
                this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
                if (isSync) {
                    let te = {
                        IDMongodbComodo: idCom,
                        statusArCondiconado: statusAr
                    };
                    this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
                }
                else {
                    this.presentToast('Sincronização do Comodo desativada, não sincronizado');
                }
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
                    message: 'Erro: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
    }
    changeLuzesButton(isSync, idCom, event, nomeCom) {
        console.log('changeLuzesButton');
        console.log(isSync);
        console.log(idCom);
        console.log(event);
        console.log(event.detail.value);
        console.log(nomeCom);
        if (event.detail) {
            let value = event.detail.value;
            let statusLuzes = null;
            if (value === 'on') {
                statusLuzes = true;
            }
            else if (value === 'off') {
                statusLuzes = false;
            }
            let t = {
                statusLuzComodo: statusLuzes
            };
            console.log(t);
            console.log(this.token);
            console.log(this.userID);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
                console.log(response);
                this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
                if (isSync) {
                    let te = {
                        IDMongodbComodo: idCom,
                        statusLuzComodo: statusLuzes
                    };
                    this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
                }
                else {
                    this.presentToast('Sincronização do Comodo desativada, não sincronizado');
                }
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
                    message: 'Erro: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
    }
    changeTomadasButton(isSync, idCom, event, nomeCom) {
        console.log('changeTomadasButton');
        console.log(isSync);
        console.log(idCom);
        console.log(event);
        console.log(event.detail.value);
        console.log(nomeCom);
        if (event.detail) {
            let value = event.detail.value;
            let statusTomadas = null;
            if (value === 'on') {
                statusTomadas = true;
            }
            else if (value === 'off') {
                statusTomadas = false;
            }
            let t = {
                statusTomadaComodo: statusTomadas
            };
            console.log(t);
            console.log(this.token);
            console.log(this.userID);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
                console.log(response);
                this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
                if (isSync) {
                    let te = {
                        IDMongodbComodo: idCom,
                        statusTomadaComodo: statusTomadas
                    };
                    this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
                }
                else {
                    this.presentToast('Sincronização do Comodo desativada, não sincronizado');
                }
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
                    message: 'Erro: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
    }
    routerMore(idCom) {
        this.router.navigateByUrl('/members/smh/comodo-info/' + idCom);
    }
};
HomepagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_comodo_service__WEBPACK_IMPORTED_MODULE_3__["ComodoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_5__["SecureStoreService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides')
], HomepagePage.prototype, "slider", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonJanelaOpen')
], HomepagePage.prototype, "btnJO", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonJanelaClose')
], HomepagePage.prototype, "btnJC", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonPortaOpen')
], HomepagePage.prototype, "btnPO", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonPortaClose')
], HomepagePage.prototype, "btnPC", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonSenPrenDetec')
], HomepagePage.prototype, "btnSPDetec", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonSenPrenNoDetec')
], HomepagePage.prototype, "btnSPNoDetec", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ionRadioGroupArCond')
], HomepagePage.prototype, "IonRadioGroupArCond", void 0);
HomepagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./homepage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./homepage.page.scss */ "./src/app/homepage/homepage.page.scss")).default]
    })
], HomepagePage);



/***/ })

}]);
//# sourceMappingURL=homepage-homepage-module-es2015.js.map
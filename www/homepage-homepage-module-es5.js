function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-homepage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomepageHomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      INICIO\n    </ion-title>\n    <ion-item slot=\"end\" lines=\"none\"><ion-button color=\"danger\" (click)='logout()'><ion-icon name=\"log-out-outline\"></ion-icon>&nbsp; Sair</ion-button></ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n  <ion-card>\n\n    <ion-card-header>\n      <ion-card-title class=\"titleFavRoom\">Quartos Favoritos</ion-card-title>\n      <!-- <ion-card-subtitle class=\"subtitleFavRoom\">Quarto Favorito</ion-card-subtitle> -->\n    </ion-card-header>\n    \n    <ion-card-content *ngFor=\"let comFav of comodoFav\">\n      <!-- <ion-card class=\"cardContentFavRoom\" color=\"tertiary\">\n\n        <ion-card-header>\n          <ion-card-title class=\"titleFavRoom\">Informações</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content style=\"text-align: center;\"> -->\n          \n          <ion-grid class=\"teste\">\n            <ion-row>\n              <ion-col>\n                <ion-item color=\"transp\" lines=\"none\">\n                  <ion-button [color]=\"comFav.isActive ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"comFav.isActive ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{comFav.isActive ? 'Atvio' : 'Desativado'}}</ion-button>\n                </ion-item>\n                <h3 style=\"text-align: center; font-size: large;\">Quarto: {{comFav.nomeComodo}}</h3>\n                <h3 style=\"text-align: center; font-size: large;\">Informações</h3>\n\n                <ion-segment scrollable [(ngModel)]=\"segment\" color=\"danger\" (ionChange)=\"segmentChanged()\" class=\"segmentMain\">\n\n                  <ion-segment-button [value]=\"comFav._id + 0\" checked>\n                    <ion-icon name=\"thermometer-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\" #noteSeg>Temperatura</ion-note>\n                  </ion-segment-button>\n\n                  <ion-segment-button [value]=\"comFav._id + 1\">\n                    <ion-icon name=\"snow-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\">Ar Condicionado</ion-note>\n                  </ion-segment-button>\n\n                  <ion-segment-button [value]=\"comFav._id + 2\">\n                    <ion-icon name=\"bulb-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\">Luzes</ion-note>\n                  </ion-segment-button>\n\n                  <ion-segment-button [value]=\"comFav._id + 3\">\n                    <ion-icon name=\"flash-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\">Tomadas</ion-note>\n                  </ion-segment-button>\n                  \n                  <ion-segment-button [value]=\"comFav._id + 4\">\n                    <ion-icon name=\"notifications-outline\"></ion-icon>\n                    <ion-note class=\"segmentFavRoom\">Alarmes</ion-note>\n                  </ion-segment-button>\n\n                </ion-segment>\n\n                <!-- <ion-slides #slides (ionSlideDidChange)=\"slideChanged()\" class=\"slidesFavRoomConf\">\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <br/>\n                  <ion-card *ngIf=\"segment === comFav._id + 0\" style=\"margin: 0px auto 0px auto !important;\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Temperatura do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listTemp\">\n                          \n                          <ion-item class=\"itemFavRoom\">\n                            <ion-label><ion-icon name=\"thermometer\" color=\"danger\"></ion-icon> Temperatura: {{comFav.tempComodo}}</ion-label>\n                          </ion-item>\n\n                          <ion-item class=\"itemFavRoom\">\n                            <ion-label><ion-icon name=\"water\" color=\"primary\"></ion-icon> Umidade do Ar: {{comFav.umiComodoF}}</ion-label>\n                          </ion-item>\n\n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <ion-card *ngIf=\"segment === comFav._id + 1\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Ar Condicionado do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listArCond\">\n                          \n                          <ion-radio-group [value]=\"comFav.statusArCondiconado ? 'on' : 'off'\" (ionChange)=\"changeArCondButton(comFav.issync, comFav._id, $event, comFav.nomeComodo)\">\n\n                            <ion-item>\n                              <ion-label>LIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n                          \n                            <ion-item>\n                              <ion-label>DESLIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n\n                          </ion-radio-group>\n            \n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <ion-card *ngIf=\"segment === comFav._id + 2\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Luzes do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listArCond\">\n                          \n                          <ion-radio-group [value]=\"comFav.statusLuzComodo ? 'on' : 'off'\" (ionChange)=\"changeLuzesButton(comFav.issync, comFav._id, $event, comFav.nomeComodo)\">\n\n                            <ion-item>\n                              <ion-label>LIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n                          \n                            <ion-item>\n                              <ion-label>DESLIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n\n                          </ion-radio-group>\n            \n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <ion-card *ngIf=\"segment === comFav._id + 3\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Tomadas do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listArCond\">\n                          \n                          <ion-radio-group [value]=\"comFav.statusTomadaComodo ? 'on' : 'off'\" (ionChange)=\"changeTomadasButton(comFav.issync, comFav._id, $event, comFav.nomeComodo)\">\n\n                            <ion-item>\n                              <ion-label>LIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n                          \n                            <ion-item>\n                              <ion-label>DESLIGADO</ion-label>\n                              <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n                              <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n                            </ion-item>\n\n                          </ion-radio-group>\n            \n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n\n                  <ion-slide class=\"slidefavRoom\"> -->\n                  <ion-card *ngIf=\"segment === comFav._id + 4\">\n                    <!-- <ion-row>\n                      <ion-col> -->\n                      <ion-card-header>\n                        <ion-card-title style=\"text-align: center;\">Alarmes do Comodo</ion-card-title>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ion-list inset=\"true\" class=\"listArCond\">\n                          <ion-item>\n                            <ion-label>JANELAS E PORTAS</ion-label>\n                          </ion-item>\n\n                          <ion-item>\n                            <ion-label>JANELA</ion-label>\n                          </ion-item>\n\n                          <!--<ion-segment color=\"danger\" disabled scrollable>\n                            <ion-segment-button value=\"open\">\n                              <ion-label>ABERTO</ion-label>\n                              <ion-icon name=\"lock-open-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                            <ion-segment-button value=\"close\">\n                              <ion-label>FECHADO</ion-label>\n                              <ion-icon name=\"lock-closed-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                          </ion-segment>-->\n                          <ion-button color=\"danger\" [fill]=\"comFav.statusJanelaComodo === false ? 'solid' : 'outline'\" disabled #buttonJanelaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n                          <ion-button color=\"success\" [fill]=\"comFav.statusJanelaComodo === true ? 'solid' : 'outline'\" disabled #buttonJanelaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n                          <br>\n\n                          <ion-item>\n                            <ion-label>PORTA</ion-label>\n                          </ion-item>\n\n                          <!--<ion-segment color=\"danger\" disabled scrollable>\n                            <ion-segment-button value=\"open\">\n                              <ion-label>ABERTO</ion-label>\n                              <ion-icon name=\"lock-open-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                            <ion-segment-button value=\"close\">\n                              <ion-label>FECHADO</ion-label>\n                              <ion-icon name=\"lock-closed-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                          </ion-segment>-->\n                          <ion-button color=\"danger\" [fill]=\"comFav.statusPortaComodo === false ? 'solid' : 'outline'\" disabled #buttonPortaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n                          <ion-button color=\"success\" [fill]=\"comFav.statusPortaComodo === true ? 'solid' : 'outline'\" disabled #buttonPortaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n                          <br>\n\n                          <ion-item>\n                            <ion-label>SENSOR DE PRESENÇA</ion-label>\n                          </ion-item>\n\n                          <!--<ion-segment color=\"danger\" disabled scrollable>\n                            <ion-segment-button value=\"open\">\n                              <ion-label>DETECTADO</ion-label>\n                              <ion-icon name=\"lock-open-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                            <ion-segment-button value=\"close\">\n                              <ion-label>NÃO DETECTADO</ion-label>\n                              <ion-icon name=\"lock-closed-outline\" color=\"danger\"></ion-icon>\n                            </ion-segment-button>\n                          </ion-segment>-->\n                          <ion-button color=\"danger\" [fill]=\"comFav.statusPresencaComodo === true ? 'solid' : 'outline'\" disabled #buttonSenPrenDetec><ion-icon name=\"eye-outline\"></ion-icon>&nbsp; DETECTADO</ion-button>\n                          <ion-button color=\"success\" [fill]=\"comFav.statusPresencaComodo === false ? 'solid' : 'outline'\" disabled #buttonSenPrenNoDetec><ion-icon name=\"eye-off-outline\"></ion-icon>&nbsp; NÃO DETECTADO</ion-button>\n                        </ion-list>\n                      </ion-card-content>\n                      <!-- </ion-col>\n                    </ion-row> -->\n                  </ion-card>\n                  <!-- </ion-slide>\n                  \n                </ion-slides> -->\n                \n                <!-- <ion-label color=\"light\" class=\"tempAjustText\">Ajustar Temperatura</ion-label>\n                <ion-range min=\"16\" max=\"30\" step=\"1\" snaps=\"true\" pin=\"true\" (ionChange)=\"rangeChanged(comFav.issync, comFav._id, $event, comFav.nomeComodo)\" color=\"danger\" class=\"radioTemp\" [value]=\"comFav.tempComodo\">\n                  <ion-icon size=\"small\" slot=\"start\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n                  <ion-label slot=\"start\" color=\"dark\">16</ion-label>\n                  \n                  <ion-label slot=\"end\" color=\"dark\">30</ion-label>\n                  <ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n                </ion-range> -->\n                <ion-item>\n                  <ion-label><ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>&nbsp; Ajustar Temperatura</ion-label>\n                  <ion-select placeholder=\"Temperatura\" okText=\"Ok\" cancelText=\"Cancelar\" (ionChange)=\"rangeChanged(comFav.issync, comFav._id, $event, comFav.nomeComodo)\" value=\"{{comFav.ajustTempComodo}}\">\n                    <ion-select-option color=\"danger\" *ngFor=\"let number of [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]\">{{number}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n                <br/>\n                <ion-item>\n                  <ion-button color=\"danger\" slot=\"end\" (click)=\"routerMore(comFav._id)\"><ion-icon name=\"enter\"></ion-icon>&nbsp; VER MAIS</ion-button>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n<!-- \n        </ion-card-content>\n        \n      </ion-card>         -->\n    </ion-card-content>\n    \n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"titleFavRoom\">Outros Comodos Cadastrados</ion-card-title>\n    </ion-card-header>\n\n    <ion-card *ngFor=\"let com of comodoData\">\n      <ion-card-header color=\"danger\">\n        <ion-card-title>\n          Comodo: {{com.nomeComodo}}\n        </ion-card-title>\n      </ion-card-header>\n        \n      <ion-card-content>\n        <ion-list>\n\n          <!--<ion-item>\n            <ion-label>Favorito </ion-label><ion-toggle color=\"danger\"></ion-toggle>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Ativo </ion-label><ion-toggle color=\"danger\"></ion-toggle>\n          </ion-item>-->\n          <!-- <ion-item color=\"transp\" lines=\"none\">\n            <ion-button [color]=\"com.isActive ? 'success' : 'dark'\" slot=\"start\" disabled><ion-icon [name]=\"com.isActive ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isActive ? 'Atvio' : 'Desativado'}}</ion-button>\n          </ion-item> -->\n          <ion-item>\n            <ion-button [color]=\"com.isActive ? 'success' : 'dark'\" slot=\"start\" disabled><ion-icon [name]=\"com.isActive ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isActive ? 'Atvio' : 'Desativado'}}</ion-button>\n            <ion-button color=\"danger\" slot=\"end\" (click)=\"routerMore(com._id)\"><ion-icon name=\"enter\"></ion-icon>&nbsp; VER MAIS</ion-button>\n          </ion-item>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/homepage/homepage-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/homepage/homepage-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: HomepagePageRoutingModule */

  /***/
  function srcAppHomepageHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePageRoutingModule", function () {
      return HomepagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homepage.page */
    "./src/app/homepage/homepage.page.ts");

    var routes = [{
      path: '',
      component: _homepage_page__WEBPACK_IMPORTED_MODULE_3__["HomepagePage"]
    }];

    var HomepagePageRoutingModule = function HomepagePageRoutingModule() {
      _classCallCheck(this, HomepagePageRoutingModule);
    };

    HomepagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomepagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/homepage/homepage.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/homepage/homepage.module.ts ***!
    \*********************************************/

  /*! exports provided: HomepagePageModule */

  /***/
  function srcAppHomepageHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePageModule", function () {
      return HomepagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _homepage_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./homepage.page */
    "./src/app/homepage/homepage.page.ts");
    /* harmony import */


    var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homepage-routing.module */
    "./src/app/homepage/homepage-routing.module.ts"); // import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


    var HomepagePageModule = function HomepagePageModule() {
      _classCallCheck(this, HomepagePageModule);
    };

    HomepagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], // ExploreContainerComponentModule,
      _homepage_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomepagePageRoutingModule"]],
      declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_5__["HomepagePage"]]
    })], HomepagePageModule);
    /***/
  },

  /***/
  "./src/app/homepage/homepage.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/homepage/homepage.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomepageHomepagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titleFavRoom {\n  text-align: center;\n}\n\n.subtitleFavRoom {\n  text-align: center;\n}\n\n.cardContentFavRoom {\n  padding: 0px;\n  margin: 0px;\n}\n\n.segmentFavRoom {\n  margin: 10px;\n}\n\n.slidesFavRoomConf {\n  margin: 3px;\n}\n\n.tempAjustText {\n  text-align: center;\n}\n\n.listTemp {\n  width: 100%;\n  text-align: center;\n}\n\n.radioTemp {\n  background-color: #f4f5f8;\n  padding: 3px;\n}\n\n.tempAjustText {\n  font-size: large;\n}\n\n.listArCond {\n  width: 100%;\n}\n\n.itemFavRoom {\n  text-align: center;\n}\n\n.segmentMain {\n  --background: #f4f5f8;\n}\n\n.teste {\n  background: var(--ion-color-tertiary);\n  color: var(--ion-color-tertiary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvQzpcXFVzZXJzXFxSaHlpeFxcRGVza3RvcFxcRkVNQVxcVENDXFxkZXNlbnZvdmltZW50b1Byb2dcXHNtaGFwa0FuZ3VsYXIvc3JjXFxhcHBcXGhvbWVwYWdlXFxob21lcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtBQ0RKOztBRElBO0VBQ0kscUNBQUE7RUFDQSx5Q0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlRmF2Um9vbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1YnRpdGxlRmF2Um9vbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRDb250ZW50RmF2Um9vbXtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uc2VnbWVudEZhdlJvb217XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5zbGlkZXNGYXZSb29tQ29uZntcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZW1wQWp1c3RUZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdFRlbXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJhZGlvVGVtcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZjRmNWY4LCAkYWxwaGE6IDEuMCk7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi50ZW1wQWp1c3RUZXh0e1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmxpc3RBckNvbmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLml0ZW1GYXZSb29te1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VnbWVudE1haW57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XHJcbn1cclxuXHJcbi50ZXN0ZXtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0KTtcclxufVxyXG5cclxuLy8gLnNsaWRlZmF2Um9vbXtcclxuLy8gICAgIC8vYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbi8vICAgICBwYWRkaW5nOiAwcHg7XHJcbi8vIH0iLCIudGl0bGVGYXZSb29tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VidGl0bGVGYXZSb29tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZENvbnRlbnRGYXZSb29tIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnNlZ21lbnRGYXZSb29tIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uc2xpZGVzRmF2Um9vbUNvbmYge1xuICBtYXJnaW46IDNweDtcbn1cblxuLnRlbXBBanVzdFRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saXN0VGVtcCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yYWRpb1RlbXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi50ZW1wQWp1c3RUZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmxpc3RBckNvbmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW1GYXZSb29tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VnbWVudE1haW4ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi50ZXN0ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/homepage/homepage.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/homepage/homepage.page.ts ***!
    \*******************************************/

  /*! exports provided: HomepagePage */

  /***/
  function srcAppHomepageHomepagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePage", function () {
      return HomepagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_comodo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/comodo.service */
    "./src/app/services/comodo.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_storageL_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/storageL.service */
    "./src/app/services/storageL.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomepagePage = /*#__PURE__*/function () {
      // comFav: any = {
      //   statusArCondiconado: true
      // }
      function HomepagePage(router, apiService, toastController, auth, alertCtrl, storage) {
        _classCallCheck(this, HomepagePage);

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

      _createClass(HomepagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // this.getAllComodosMongoDB();
                    //this.slider.lockSwipes(true);
                    this.user = this.auth.getUser();
                    console.log(this.user);
                    _context.next = 4;
                    return this.storage.getIdUser();

                  case 4:
                    this.idUser = _context.sent;
                    console.log(this.idUser);
                    _context.next = 8;
                    return this.storage.getToken();

                  case 8:
                    this.token = _context.sent;
                    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
                    console.log(this.token);
                    this.userID = this.user ? this.user.id : this.idUser[0].idUser; // this.userID = '5f0a2a4fa1d84f17a891d5a9';
                    // console.log(this.token);
                    // this.segment = userID + '0'

                    this.getAllComodosByUserIDMDB(false, this.userID, this.token[0].token);
                    this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.user = this.auth.getUser();
                    console.log(this.user);
                    _context2.next = 4;
                    return this.storage.getIdUser();

                  case 4:
                    this.idUser = _context2.sent;
                    console.log(this.idUser);
                    _context2.next = 8;
                    return this.storage.getToken();

                  case 8:
                    this.token = _context2.sent;
                    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
                    console.log(this.token);
                    this.userID = this.user ? this.user.id : this.idUser[0].idUser; // this.userID = '5f0a2a4fa1d84f17a891d5a9';

                    console.log(this.comodoFav);
                    console.log(this.comodoData); // if(this.slider){
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

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getAllComodosByUserIDMDB",
        value: function getAllComodosByUserIDMDB(isfav, userID, token) {
          var _this = this;

          console.log(userID + '  ' + token);
          this.apiService.getByIsFavUserIDMongoDB(isfav, userID, token).subscribe(function (response) {
            console.log(response);
            _this.comodoData = response;
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var error, alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(err); // this.presentToast(err.error.message);

                      error = err.error ? err.error.message : err.message;
                      _context3.next = 4;
                      return this.alertCtrl.create({
                        header: 'Falha em buscar os comodos',
                        message: 'Erro: ' + error,
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context3.sent;
                      _context3.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }, {
        key: "getComodoByFavUserIDMBD",
        value: function getComodoByFavUserIDMBD(isFav, userID, token) {
          var _this2 = this;

          this.apiService.getByIsFavUserIDMongoDB(isFav, userID, token).subscribe(function (response) {
            console.log(response);
            _this2.comodoFav = response;
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var error, alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log(err);
                      error = err.error ? err.error.message : err.message;
                      _context4.next = 4;
                      return this.alertCtrl.create({
                        header: 'Falha em buscar os comodos favoritos',
                        message: 'Erro: ' + error,
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context4.sent;
                      _context4.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          });
        }
      }, {
        key: "insertOrUpdateComSQLite",
        value: function insertOrUpdateComSQLite(idCom, comodo, token, nomCom) {
          var _this3 = this;

          this.apiService.postComodoSQLite(comodo, token).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var existTble, _iterator, _step, r;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log(response);
                      existTble = false;
                      _iterator = _createForOfIteratorHelper(response.message);
                      _context5.prev = 3;

                      _iterator.s();

                    case 5:
                      if ((_step = _iterator.n()).done) {
                        _context5.next = 13;
                        break;
                      }

                      r = _step.value;
                      console.log(r);

                      if (!r.message.indexOf('Coluna ja Existe na base do servidor, Sincronizado com sucesso')) {
                        _context5.next = 11;
                        break;
                      }

                      existTble = true;
                      return _context5.abrupt("break", 13);

                    case 11:
                      _context5.next = 5;
                      break;

                    case 13:
                      _context5.next = 18;
                      break;

                    case 15:
                      _context5.prev = 15;
                      _context5.t0 = _context5["catch"](3);

                      _iterator.e(_context5.t0);

                    case 18:
                      _context5.prev = 18;

                      _iterator.f();

                      return _context5.finish(18);

                    case 21:
                      console.log(existTble);

                      if (existTble) {
                        this.alterComSQLite(idCom, comodo, token, nomCom);
                      }

                    case 23:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[3, 15, 18, 21]]);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var erro, errors, messages, teste, _iterator2, _step2, e, _iterator3, _step3, m, alert;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log(err);
                      erro = err.message;
                      errors = err.error.errors;
                      messages = err.error.message;
                      teste = [];
                      console.log(errors);
                      console.log(messages);

                      if (errors) {
                        _iterator2 = _createForOfIteratorHelper(errors);

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            e = _step2.value;
                            console.log(e.message);
                            teste.push(e.message);
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      }

                      if (messages) {
                        _iterator3 = _createForOfIteratorHelper(messages);

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            m = _step3.value;
                            console.log(m);
                            teste.push(m.message);
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                      }

                      teste.push(erro);
                      console.log(teste);
                      _context6.next = 13;
                      return this.alertCtrl.create({
                        header: 'Falha em sincronizar o comodo ' + nomCom + ' com o id: ' + idCom + ' na base local',
                        message: 'Erro: ' + teste,
                        buttons: ['OK']
                      });

                    case 13:
                      alert = _context6.sent;
                      _context6.next = 16;
                      return alert.present();

                    case 16:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }, {
        key: "alterComSQLite",
        value: function alterComSQLite(idMongo, comodo, token, nomCom) {
          var _this4 = this;

          this.apiService.putComodoByIDComodoMongoSQLite(idMongo, comodo, token).subscribe(function (response) {
            console.log(response);
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var error, alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log(err);
                      error = err.error ? err.error.message : err.message;
                      _context7.next = 4;
                      return this.alertCtrl.create({
                        header: 'Falha em atualizar o comodo ' + nomCom + ' com o id: ' + idMongo + ' na base local',
                        message: 'Erro: ' + error,
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context7.sent;
                      _context7.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    // // this.slider.lockSwipes(false);
                    // await this.slider.slideTo(this.segment);
                    console.log(this.segment);

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        } // async slideChanged() {
        //   // this.slider.lockSwipes(false);
        //   this.segment = await this.slider.getActiveIndex();
        // }

      }, {
        key: "rangeChanged",
        value: function rangeChanged(isSync, idCom, event, nomeCom) {
          var _this5 = this;

          console.log('teste');
          console.log(isSync);
          console.log(idCom);
          console.log(event);
          console.log(event.detail.value);

          if (event.detail.value) {
            var t = {
              ajustTempComodo: event.detail.value
            };
            console.log(t);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe(function (response) {
              console.log(response);

              _this5.getComodoByFavUserIDMBD(true, _this5.userID, _this5.token[0].token);

              if (isSync) {
                var te = {
                  IDMongodbComodo: idCom,
                  ajustTempComodo: event.detail.value
                };

                _this5.insertOrUpdateComSQLite(idCom, te, _this5.token[0].token, nomeCom);
              } else {
                _this5.presentToast('Sincronização do Comodo desativada, não sincronizado');
              }
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        error = err.error ? err.error.message : err.message;
                        _context9.next = 3;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 3:
                        alert = _context9.sent;
                        _context9.next = 6;
                        return alert.present();

                      case 6:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));
            });
          } else {
            this.presentToast('Selecione uma Temperatura');
          }
        } // ionFocus(event){
        //   this.slider.lockSwipes(true);
        //   //console.log(event);
        //   console.log("hhhhhhhhhhhh");
        //   document.getElementById('t').blur();
        // }
        // ionBlur(event){
        //   this.slider.lockSwipes(false);
        //   console.log("tttttttttttt");
        // }

      }, {
        key: "logout",
        value: function logout() {
          //console.log('ttttttt');
          this.auth.logout();
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var toast;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 2000,
                      color: 'danger'
                    });

                  case 2:
                    toast = _context10.sent;
                    _context10.next = 5;
                    return toast.present();

                  case 5:
                    return _context10.abrupt("return", _context10.sent);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "changeArCondButton",
        value: function changeArCondButton(isSync, idCom, event, nomeCom) {
          var _this6 = this;

          console.log('changeArCondButton');
          console.log(isSync);
          console.log(idCom);
          console.log(event);
          console.log(event.detail.value);

          if (event.detail) {
            var value = event.detail.value;
            var statusAr = null;

            if (value === 'on') {
              statusAr = true;
            } else if (value === 'off') {
              statusAr = false;
            }

            var t = {
              statusArCondiconado: statusAr
            };
            console.log(t);
            console.log(this.token);
            console.log(this.userID);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe(function (response) {
              console.log(response);

              _this6.getComodoByFavUserIDMBD(true, _this6.userID, _this6.token[0].token);

              if (isSync) {
                var te = {
                  IDMongodbComodo: idCom,
                  statusArCondiconado: statusAr
                };

                _this6.insertOrUpdateComSQLite(idCom, te, _this6.token[0].token, nomeCom);
              } else {
                _this6.presentToast('Sincronização do Comodo desativada, não sincronizado');
              }
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        console.log(err);
                        error = err.error ? err.error.message : err.message;
                        _context11.next = 4;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 4:
                        alert = _context11.sent;
                        _context11.next = 7;
                        return alert.present();

                      case 7:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            });
          }
        }
      }, {
        key: "changeLuzesButton",
        value: function changeLuzesButton(isSync, idCom, event, nomeCom) {
          var _this7 = this;

          console.log('changeLuzesButton');
          console.log(isSync);
          console.log(idCom);
          console.log(event);
          console.log(event.detail.value);
          console.log(nomeCom);

          if (event.detail) {
            var value = event.detail.value;
            var statusLuzes = null;

            if (value === 'on') {
              statusLuzes = true;
            } else if (value === 'off') {
              statusLuzes = false;
            }

            var t = {
              statusLuzComodo: statusLuzes
            };
            console.log(t);
            console.log(this.token);
            console.log(this.userID);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe(function (response) {
              console.log(response);

              _this7.getComodoByFavUserIDMBD(true, _this7.userID, _this7.token[0].token);

              if (isSync) {
                var te = {
                  IDMongodbComodo: idCom,
                  statusLuzComodo: statusLuzes
                };

                _this7.insertOrUpdateComSQLite(idCom, te, _this7.token[0].token, nomeCom);
              } else {
                _this7.presentToast('Sincronização do Comodo desativada, não sincronizado');
              }
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        console.log(err);
                        error = err.error ? err.error.message : err.message;
                        _context12.next = 4;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 4:
                        alert = _context12.sent;
                        _context12.next = 7;
                        return alert.present();

                      case 7:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            });
          }
        }
      }, {
        key: "changeTomadasButton",
        value: function changeTomadasButton(isSync, idCom, event, nomeCom) {
          var _this8 = this;

          console.log('changeTomadasButton');
          console.log(isSync);
          console.log(idCom);
          console.log(event);
          console.log(event.detail.value);
          console.log(nomeCom);

          if (event.detail) {
            var value = event.detail.value;
            var statusTomadas = null;

            if (value === 'on') {
              statusTomadas = true;
            } else if (value === 'off') {
              statusTomadas = false;
            }

            var t = {
              statusTomadaComodo: statusTomadas
            };
            console.log(t);
            console.log(this.token);
            console.log(this.userID);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe(function (response) {
              console.log(response);

              _this8.getComodoByFavUserIDMBD(true, _this8.userID, _this8.token[0].token);

              if (isSync) {
                var te = {
                  IDMongodbComodo: idCom,
                  statusTomadaComodo: statusTomadas
                };

                _this8.insertOrUpdateComSQLite(idCom, te, _this8.token[0].token, nomeCom);
              } else {
                _this8.presentToast('Sincronização do Comodo desativada, não sincronizado');
              }
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        console.log(err);
                        error = err.error ? err.error.message : err.message;
                        _context13.next = 4;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 4:
                        alert = _context13.sent;
                        _context13.next = 7;
                        return alert.present();

                      case 7:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            });
          }
        }
      }, {
        key: "routerMore",
        value: function routerMore(idCom) {
          this.router.navigateByUrl('/members/smh/comodo-info/' + idCom);
        }
      }]);

      return HomepagePage;
    }();

    HomepagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_comodo_service__WEBPACK_IMPORTED_MODULE_3__["ComodoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_5__["SecureStoreService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides')], HomepagePage.prototype, "slider", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonJanelaOpen')], HomepagePage.prototype, "btnJO", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonJanelaClose')], HomepagePage.prototype, "btnJC", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonPortaOpen')], HomepagePage.prototype, "btnPO", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonPortaClose')], HomepagePage.prototype, "btnPC", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonSenPrenDetec')], HomepagePage.prototype, "btnSPDetec", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonSenPrenNoDetec')], HomepagePage.prototype, "btnSPNoDetec", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ionRadioGroupArCond')], HomepagePage.prototype, "IonRadioGroupArCond", void 0);
    HomepagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homepage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homepage.page.scss */
      "./src/app/homepage/homepage.page.scss"))["default"]]
    })], HomepagePage);
    /***/
  }
}]);
//# sourceMappingURL=homepage-homepage-module-es5.js.map
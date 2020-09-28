function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["func-func-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/func/func.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/func/func.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFuncFuncPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      FUNÇÕES\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Funções do Aplicativo</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      \n      <ion-button color=\"tertiary\" expand=\"full\" (click)=\"routerTemp()\"><ion-icon name=\"thermometer-outline\"></ion-icon>&nbsp; TEMPERATURA</ion-button>\n      <ion-button color=\"tertiary\" expand=\"full\" (click)=\"routerLuzes()\"><ion-icon name=\"sunny-outline\"></ion-icon>&nbsp; LUZES</ion-button>\n      <ion-button color=\"tertiary\" expand=\"full\" (click)=\"routerTomadas()\"><ion-icon name=\"flash-outline\"></ion-icon>&nbsp; TOMADAS</ion-button>\n      <ion-button color=\"tertiary\" expand=\"full\"(click)=\"routerAlarmes()\"><ion-icon name=\"notifications-outline\"></ion-icon>&nbsp; ALARMES</ion-button>\n      <ion-button color=\"tertiary\" expand=\"full\"(click)=\"routerArCond()\"><ion-icon name=\"snow-outline\"></ion-icon>&nbsp; AR CONDICIONADO</ion-button>\n      <ion-button color=\"tertiary\" expand=\"full\" (click)=\"routerNewCom()\"><ion-icon name=\"add-circle-outline\"></ion-icon>&nbsp; NOVO COMODO</ion-button>\n      \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/func/func-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/func/func-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: FuncPageRoutingModule */

  /***/
  function srcAppFuncFuncRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuncPageRoutingModule", function () {
      return FuncPageRoutingModule;
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


    var _func_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./func.page */
    "./src/app/func/func.page.ts");

    var routes = [{
      path: '',
      component: _func_page__WEBPACK_IMPORTED_MODULE_3__["FuncPage"]
    }];

    var FuncPageRoutingModule = function FuncPageRoutingModule() {
      _classCallCheck(this, FuncPageRoutingModule);
    };

    FuncPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FuncPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/func/func.module.ts":
  /*!*************************************!*\
    !*** ./src/app/func/func.module.ts ***!
    \*************************************/

  /*! exports provided: FuncPageModule */

  /***/
  function srcAppFuncFuncModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuncPageModule", function () {
      return FuncPageModule;
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


    var _func_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./func.page */
    "./src/app/func/func.page.ts");
    /* harmony import */


    var _func_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./func-routing.module */
    "./src/app/func/func-routing.module.ts"); //import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


    var FuncPageModule = function FuncPageModule() {
      _classCallCheck(this, FuncPageModule);
    };

    FuncPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], //ExploreContainerComponentModule,
      _func_routing_module__WEBPACK_IMPORTED_MODULE_6__["FuncPageRoutingModule"]],
      declarations: [_func_page__WEBPACK_IMPORTED_MODULE_5__["FuncPage"]]
    })], FuncPageModule);
    /***/
  },

  /***/
  "./src/app/func/func.page.scss":
  /*!*************************************!*\
    !*** ./src/app/func/func.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppFuncFuncPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmMvZnVuYy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/func/func.page.ts":
  /*!***********************************!*\
    !*** ./src/app/func/func.page.ts ***!
    \***********************************/

  /*! exports provided: FuncPage */

  /***/
  function srcAppFuncFuncPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuncPage", function () {
      return FuncPage;
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

    var FuncPage = /*#__PURE__*/function () {
      function FuncPage(router) {
        _classCallCheck(this, FuncPage);

        this.router = router;
      }

      _createClass(FuncPage, [{
        key: "routerTemp",
        value: function routerTemp(idCom) {
          this.router.navigateByUrl('/members/smh/temp');
        }
      }, {
        key: "routerLuzes",
        value: function routerLuzes() {
          this.router.navigateByUrl('/members/smh/luzes');
        }
      }, {
        key: "routerTomadas",
        value: function routerTomadas() {
          this.router.navigateByUrl('/members/smh/tomadas');
        }
      }, {
        key: "routerAlarmes",
        value: function routerAlarmes() {
          this.router.navigateByUrl('/members/smh/alarmes');
        }
      }, {
        key: "routerArCond",
        value: function routerArCond() {
          this.router.navigateByUrl('/members/smh/ar-condicionado');
        }
      }, {
        key: "routerNewCom",
        value: function routerNewCom() {
          this.router.navigateByUrl('/members/smh/new-comodo');
        }
      }]);

      return FuncPage;
    }();

    FuncPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FuncPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-func',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./func.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/func/func.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./func.page.scss */
      "./src/app/func/func.page.scss"))["default"]]
    })], FuncPage);
    /***/
  }
}]);
//# sourceMappingURL=func-func-module-es5.js.map
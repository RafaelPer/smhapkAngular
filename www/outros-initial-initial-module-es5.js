function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outros-initial-initial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/outros/initial/initial.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outros/initial/initial.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOutrosInitialInitialPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Bem Vindo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Selecione uma das opções</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-button expand=\"full\" color=\"tertiary\" routerLink='/login'>Login</ion-button>\n      <ion-button expand=\"full\" color=\"danger\" routerLink='/register'>Registrar</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/outros/initial/initial-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/outros/initial/initial-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: InitialPageRoutingModule */

  /***/
  function srcAppOutrosInitialInitialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitialPageRoutingModule", function () {
      return InitialPageRoutingModule;
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


    var _initial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./initial.page */
    "./src/app/outros/initial/initial.page.ts");

    var routes = [{
      path: '',
      component: _initial_page__WEBPACK_IMPORTED_MODULE_3__["InitialPage"]
    }];

    var InitialPageRoutingModule = function InitialPageRoutingModule() {
      _classCallCheck(this, InitialPageRoutingModule);
    };

    InitialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InitialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/outros/initial/initial.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/outros/initial/initial.module.ts ***!
    \**************************************************/

  /*! exports provided: InitialPageModule */

  /***/
  function srcAppOutrosInitialInitialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitialPageModule", function () {
      return InitialPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _initial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./initial-routing.module */
    "./src/app/outros/initial/initial-routing.module.ts");
    /* harmony import */


    var _initial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./initial.page */
    "./src/app/outros/initial/initial.page.ts");

    var InitialPageModule = function InitialPageModule() {
      _classCallCheck(this, InitialPageModule);
    };

    InitialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _initial_routing_module__WEBPACK_IMPORTED_MODULE_5__["InitialPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_initial_page__WEBPACK_IMPORTED_MODULE_6__["InitialPage"]]
    })], InitialPageModule);
    /***/
  },

  /***/
  "./src/app/outros/initial/initial.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/outros/initial/initial.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOutrosInitialInitialPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dHJvcy9pbml0aWFsL2luaXRpYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/outros/initial/initial.page.ts":
  /*!************************************************!*\
    !*** ./src/app/outros/initial/initial.page.ts ***!
    \************************************************/

  /*! exports provided: InitialPage */

  /***/
  function srcAppOutrosInitialInitialPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitialPage", function () {
      return InitialPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InitialPage = /*#__PURE__*/function () {
      function InitialPage() {
        _classCallCheck(this, InitialPage);
      }

      _createClass(InitialPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InitialPage;
    }();

    InitialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-initial',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./initial.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/outros/initial/initial.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./initial.page.scss */
      "./src/app/outros/initial/initial.page.scss"))["default"]]
    })], InitialPage);
    /***/
  }
}]);
//# sourceMappingURL=outros-initial-initial-module-es5.js.map
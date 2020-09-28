(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"homepage\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>INICIO</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"func\">\n      <ion-icon name=\"keypad-outline\"></ion-icon>\n      <ion-label>FUNÇÕES</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"config\">\n      <ion-icon name=\"settings-outline\"></ion-icon>\n      <ion-label>CONFIGURAÇÕES</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: '',
        redirectTo: 'smh/homepage',
        pathMatch: 'full'
    },
    {
        path: 'smh',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'homepage',
                loadChildren: () => Promise.all(/*! import() | homepage-homepage-module */[__webpack_require__.e("common"), __webpack_require__.e("homepage-homepage-module")]).then(__webpack_require__.bind(null, /*! ../homepage/homepage.module */ "./src/app/homepage/homepage.module.ts")).then(m => m.HomepagePageModule)
            },
            {
                path: 'func',
                loadChildren: () => __webpack_require__.e(/*! import() | func-func-module */ "func-func-module").then(__webpack_require__.bind(null, /*! ../func/func.module */ "./src/app/func/func.module.ts")).then(m => m.FuncPageModule)
            },
            {
                path: 'config',
                loadChildren: () => __webpack_require__.e(/*! import() | config-config-module */ "config-config-module").then(__webpack_require__.bind(null, /*! ../config/config.module */ "./src/app/config/config.module.ts")).then(m => m.ConfigPageModule)
            },
            {
                path: 'temp',
                loadChildren: () => Promise.all(/*! import() | funcoes-temp-temp-module */[__webpack_require__.e("common"), __webpack_require__.e("funcoes-temp-temp-module")]).then(__webpack_require__.bind(null, /*! ../funcoes/temp/temp.module */ "./src/app/funcoes/temp/temp.module.ts")).then(m => m.TempPageModule)
            },
            {
                path: 'tomadas',
                loadChildren: () => Promise.all(/*! import() | funcoes-tomadas-tomadas-module */[__webpack_require__.e("common"), __webpack_require__.e("funcoes-tomadas-tomadas-module")]).then(__webpack_require__.bind(null, /*! ../funcoes/tomadas/tomadas.module */ "./src/app/funcoes/tomadas/tomadas.module.ts")).then(m => m.TomadasPageModule)
            },
            {
                path: 'luzes',
                loadChildren: () => Promise.all(/*! import() | funcoes-luzes-luzes-module */[__webpack_require__.e("common"), __webpack_require__.e("funcoes-luzes-luzes-module")]).then(__webpack_require__.bind(null, /*! ../funcoes/luzes/luzes.module */ "./src/app/funcoes/luzes/luzes.module.ts")).then(m => m.LuzesPageModule)
            },
            {
                path: 'alarmes',
                loadChildren: () => Promise.all(/*! import() | funcoes-alarmes-alarmes-module */[__webpack_require__.e("common"), __webpack_require__.e("funcoes-alarmes-alarmes-module")]).then(__webpack_require__.bind(null, /*! ../funcoes/alarmes/alarmes.module */ "./src/app/funcoes/alarmes/alarmes.module.ts")).then(m => m.AlarmesPageModule)
            },
            {
                path: 'ar-condicionado',
                loadChildren: () => Promise.all(/*! import() | funcoes-ar-condicionado-ar-condicionado-module */[__webpack_require__.e("common"), __webpack_require__.e("funcoes-ar-condicionado-ar-condicionado-module")]).then(__webpack_require__.bind(null, /*! ../funcoes/ar-condicionado/ar-condicionado.module */ "./src/app/funcoes/ar-condicionado/ar-condicionado.module.ts")).then(m => m.ArCondicionadoPageModule)
            },
            {
                path: 'new-comodo',
                loadChildren: () => Promise.all(/*! import() | funcoes-new-comodo-new-comodo-module */[__webpack_require__.e("common"), __webpack_require__.e("funcoes-new-comodo-new-comodo-module")]).then(__webpack_require__.bind(null, /*! ../funcoes/new-comodo/new-comodo.module */ "./src/app/funcoes/new-comodo/new-comodo.module.ts")).then(m => m.NewComodoPageModule)
            },
            {
                path: 'alter-passwd/:id',
                loadChildren: () => Promise.all(/*! import() | funcoes-alter-passwd-alter-passwd-module */[__webpack_require__.e("default~funcoes-alter-passwd-alter-passwd-module~outros-login-login-module~outros-register-register-module"), __webpack_require__.e("funcoes-alter-passwd-alter-passwd-module")]).then(__webpack_require__.bind(null, /*! ../funcoes/alter-passwd/alter-passwd.module */ "./src/app/funcoes/alter-passwd/alter-passwd.module.ts")).then(m => m.AlterPasswdPageModule)
            },
            {
                path: 'alter-info-conta/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | funcoes-alter-info-conta-alter-info-conta-module */ "funcoes-alter-info-conta-alter-info-conta-module").then(__webpack_require__.bind(null, /*! ../funcoes/alter-info-conta/alter-info-conta.module */ "./src/app/funcoes/alter-info-conta/alter-info-conta.module.ts")).then(m => m.AlterInfoContaPageModule)
            },
            {
                path: 'comodo-info/:id',
                loadChildren: () => Promise.all(/*! import() | funcoes-comodo-info-comodo-info-module */[__webpack_require__.e("common"), __webpack_require__.e("funcoes-comodo-info-comodo-info-module")]).then(__webpack_require__.bind(null, /*! ../funcoes/comodo-info/comodo-info.module */ "./src/app/funcoes/comodo-info/comodo-info.module.ts")).then(m => m.ComodoInfoPageModule)
            },
            {
                path: 'alter-comodo',
                loadChildren: () => __webpack_require__.e(/*! import() | funcoes-alter-comodo-alter-comodo-module */ "funcoes-alter-comodo-alter-comodo-module").then(__webpack_require__.bind(null, /*! ../funcoes/alter-comodo/alter-comodo.module */ "./src/app/funcoes/alter-comodo/alter-comodo.module.ts")).then(m => m.AlterComodoPageModule)
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
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outros-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/outros/login/login.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outros/login/login.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"tertiary\">\n  <form  [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" novalidate>\n    <ion-grid>\n      <ion-row color=\"tertiary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\" style=\"margin: 0px auto 0px auto !important;\">\n          <div padding>\n    \n            <ion-item>\n              <ion-label position=\"floating\">Username</ion-label>\n              <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o username do usuario\" required=\"true\" type=\"text\" formControlName=\"usernameLogin\"></ion-input>\n            </ion-item>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.usernameLogin.errors?.required\">\n              *É nescessario o username\n            </ion-text>\n\n            <ion-item>\n              <ion-label position=\"floating\">Senha</ion-label>\n              <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite a senha\" required=\"true\" type=\"password\" formControlName=\"passwdLogin\"></ion-input>\n            </ion-item>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.passwdLogin.errors?.required\">\n              *É nescessario a senha\n            </ion-text>\n    \n          </div>\n          <div padding>\n            <ion-button  size=\"large\" type=\"submit\" expand=\"block\">Entrar</ion-button>\n            <ion-button  size=\"large\" expand=\"block\" routerLink='/'>Voltar</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/outros/login/login-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/outros/login/login-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/outros/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/outros/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/outros/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/outros/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/outros/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/outros/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/outros/login/login.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dHJvcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/outros/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/outros/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-sha512 */ "./node_modules/js-sha512/src/sha512.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_storageL_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storageL.service */ "./src/app/services/storageL.service.ts");








let LoginPage = class LoginPage {
    constructor(formBuilder, auth, router, alertCtrl, storage) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            usernameLogin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            passwdLogin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    login() {
        this.isSubmitted = true;
        if (!this.loginForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.loginForm.value);
            let hash = js_sha512__WEBPACK_IMPORTED_MODULE_3__["sha512"].create().update(this.loginForm.value.passwdLogin).hex();
            this.logIn = {
                username: this.loginForm.value.usernameLogin,
                senha: hash
            };
            console.log(this.logIn);
            this.auth.login(this.logIn.username, this.logIn.senha).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res);
                if (res) {
                    console.log(res[0].token.idUser);
                    let idu = {
                        idUser: res[0].idUser
                    };
                    this.storage.addOneIdUser(idu);
                    this.router.navigateByUrl('/members');
                }
                else {
                    const alert = yield this.alertCtrl.create({
                        header: 'Falha no Login',
                        message: 'Falha no Login',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Login Failed',
                    message: 'Falha no Login: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
            // console.log('teste');
        }
    }
    get errorControl() {
        return this.loginForm.controls;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_7__["SecureStoreService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/outros/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/outros/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=outros-login-login-module-es2015.js.map
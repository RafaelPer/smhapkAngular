(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-alter-passwd-alter-passwd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-passwd/alter-passwd.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-passwd/alter-passwd.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Alteração de Senha</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Alteração de Senha</ion-card-title>\n    </ion-card-header>\n      <form [formGroup]=\"alterSenha\" (ngSubmit)=\"alterPsswd()\" novalidate>\n        <ion-item>\n          <ion-label position=\"floating\">Senha Atual</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite a senha atual\" required=\"true\" type=\"password\" formControlName=\"passwdAtual\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.passwdAtual.errors?.required\">\n          *Digite a senha atual\n        </ion-text>\n\n        <ion-item>\n          <ion-label position=\"floating\">Nova Senha</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite a nova senha\" required=\"true\" type=\"password\" formControlName=\"passwdNew\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.passwdNew.errors?.required\">\n          *É nescessario a nova senha\n        </ion-text>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && (errorControl.passwdNew.errors?.pattern || errorControl.passwdNew.errors?.minLength || errorControl.passwdNew.errors?.maxLength)\">\n          *É nescessario que a senha tenha entre 6 a 30 caracteres, pelo menos uma letra maiuscula, uma letra minuscula, um numero e um caractere especial\n        </ion-text>\n\n        <ion-item>\n          <ion-label position=\"floating\">Confirme a Nova Senha</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Confirme a nova senha\" required=\"true\" type=\"password\" formControlName=\"passwdNewConf\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && !alterSenha.get('passwdNewConf').errors && alterSenha.hasError('passwordNotMatch') && (alterSenha.get('passwdNewConf').dirty || alterSenha.get('passwdNewConf').touched)\">\n          *A confirmação tem que ser igual a senha\n        </ion-text>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.passwdNewConf.errors?.required\">\n          *Confirme a senha\n        </ion-text>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && (errorControl.passwdNewConf.errors?.pattern || errorControl.passwdNewConf.errors?.minLength || errorControl.passwdNewConf.errors?.maxLength)\">\n          *É nescessario que a senha tenha entre 6 a 30 caracteres, pelo menos uma letra maiuscula, uma letra minuscula, um numero e um caractere especial\n        </ion-text>\n\n        <ion-button expand=\"full\" type=\"submit\">Alterar Senha</ion-button>\n        <ion-button expand=\"full\" (click)=\"backToConfig()\">VOLTAR</ion-button>\n      </form>\n    <ion-card-content>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/funcoes/alter-passwd/alter-passwd-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/funcoes/alter-passwd/alter-passwd-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AlterPasswdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterPasswdPageRoutingModule", function() { return AlterPasswdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _alter_passwd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alter-passwd.page */ "./src/app/funcoes/alter-passwd/alter-passwd.page.ts");




const routes = [
    {
        path: '',
        component: _alter_passwd_page__WEBPACK_IMPORTED_MODULE_3__["AlterPasswdPage"]
    }
];
let AlterPasswdPageRoutingModule = class AlterPasswdPageRoutingModule {
};
AlterPasswdPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AlterPasswdPageRoutingModule);



/***/ }),

/***/ "./src/app/funcoes/alter-passwd/alter-passwd.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/funcoes/alter-passwd/alter-passwd.module.ts ***!
  \*************************************************************/
/*! exports provided: AlterPasswdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterPasswdPageModule", function() { return AlterPasswdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _alter_passwd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alter-passwd-routing.module */ "./src/app/funcoes/alter-passwd/alter-passwd-routing.module.ts");
/* harmony import */ var _alter_passwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alter-passwd.page */ "./src/app/funcoes/alter-passwd/alter-passwd.page.ts");







let AlterPasswdPageModule = class AlterPasswdPageModule {
};
AlterPasswdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alter_passwd_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlterPasswdPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_alter_passwd_page__WEBPACK_IMPORTED_MODULE_6__["AlterPasswdPage"]]
    })
], AlterPasswdPageModule);



/***/ }),

/***/ "./src/app/funcoes/alter-passwd/alter-passwd.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/funcoes/alter-passwd/alter-passwd.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvYWx0ZXItcGFzc3dkL2FsdGVyLXBhc3N3ZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/funcoes/alter-passwd/alter-passwd.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/funcoes/alter-passwd/alter-passwd.page.ts ***!
  \***********************************************************/
/*! exports provided: AlterPasswdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterPasswdPage", function() { return AlterPasswdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-sha512 */ "./node_modules/js-sha512/src/sha512.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storageL_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storageL.service */ "./src/app/services/storageL.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let AlterPasswdPage = class AlterPasswdPage {
    constructor(toastController, auth, alertCtrl, storage, apiService, formBuilder, activatedRoute, router) {
        this.toastController = toastController;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isSubmitted = false;
        this.token = null;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alterSenha = this.formBuilder.group({
                passwdAtual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                passwdNew: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]],
                passwdNewConf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]],
            }, { validator: this.matchingPasswords.bind(this) });
            this.id = this.activatedRoute.snapshot.params.id;
            console.log(this.id);
            // this.user = this.auth.getUser();
            // console.log(this.user);
            // this.idUser = await this.storage.getIdUser();
            // console.log(this.idUser);
            this.token = yield this.storage.getToken();
            // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
            console.log(this.token);
        });
    }
    alterPsswd() {
        this.isSubmitted = true;
        if (!this.alterSenha.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.alterSenha.value);
            let passwdNew = js_sha512__WEBPACK_IMPORTED_MODULE_3__["sha512"].create().update(this.alterSenha.value.passwdNew).hex();
            let passwdAtual = js_sha512__WEBPACK_IMPORTED_MODULE_3__["sha512"].create().update(this.alterSenha.value.passwdAtual).hex();
            console.log(passwdNew);
            console.log(passwdAtual);
            this.apiService.alterPasswd(this.id, passwdNew, passwdAtual, this.token[0].token).subscribe((response) => {
                console.log(response);
                this.router.navigateByUrl('/members/smh/config');
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                let erro = err.message;
                let errors = err.error.errors;
                let messages = err.error.messages;
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
                    header: 'Falha em atualizar a senha do usuario o usuario',
                    message: 'Erro: ' + teste,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
    }
    matchingPasswords(formGroup) {
        const { value: password } = formGroup.get('passwdNew');
        const { value: confirmPassword } = formGroup.get('passwdNewConf');
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    backToConfig() {
        this.router.navigateByUrl('/members/smh/config');
    }
    get errorControl() {
        return this.alterSenha.controls;
    }
};
AlterPasswdPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_5__["SecureStoreService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
AlterPasswdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alter-passwd',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alter-passwd.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-passwd/alter-passwd.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alter-passwd.page.scss */ "./src/app/funcoes/alter-passwd/alter-passwd.page.scss")).default]
    })
], AlterPasswdPage);



/***/ })

}]);
//# sourceMappingURL=funcoes-alter-passwd-alter-passwd-module-es2015.js.map
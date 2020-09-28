(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outros-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/outros/register/register.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outros/register/register.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Criar Conta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"tertiary\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" novalidate>\n    <ion-grid>\n      <ion-row color=\"tertiary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\" style=\"margin: 0px auto 0px auto !important;\">\n          <div padding>\n            <ion-item>\n              <ion-label position=\"floating\">Nome do Usuario</ion-label>\n              <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o novo nome do usuario\" required=\"true\" type=\"text\" formControlName=\"nomeUsr\"></ion-input>\n            </ion-item>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.nomeUsr.errors?.required\">\n              *É nescessario o nome do usuario\n            </ion-text>\n    \n            <ion-item>\n              <ion-label position=\"floating\">Sobrenome do Usuario</ion-label>\n              <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o sobrenome do Usuario\" required=\"true\" type=\"text\" formControlName=\"snUsr\"></ion-input>\n            </ion-item>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.snUsr.errors?.required\">\n              *É nescessario o sobrenome do usuario\n            </ion-text>\n    \n            <ion-item>\n              <ion-label position=\"floating\">Username</ion-label>\n              <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o username do usuario\" required=\"true\" type=\"text\" formControlName=\"usernameUsr\"></ion-input>\n            </ion-item>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.usernameUsr.errors?.required\">\n              *É nescessario o username\n            </ion-text>\n    \n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o email\" required=\"true\" type=\"text\" formControlName=\"emailUsr\"></ion-input>\n            </ion-item>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.emailUsr.errors?.required\">\n              *É nescessario o email\n            </ion-text>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.emailUsr.errors?.pattern\">\n              *Email invalido\n            </ion-text>\n    \n            <ion-item>\n              <ion-label position=\"floating\">Celular</ion-label>\n              <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o celular\" required=\"true\" type=\"text\" formControlName=\"celularUsr\"></ion-input>\n            </ion-item>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.celularUsr.errors?.required\">\n              *É nescessario o celular\n            </ion-text>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.celularUsr.errors?.pattern\">\n              *Celular invalido\n            </ion-text>\n\n            <ion-item>\n              <ion-label position=\"floating\">Senha</ion-label>\n              <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite a senha\" required=\"true\" type=\"password\" formControlName=\"passwd\"></ion-input>\n            </ion-item>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.passwd.errors?.required\">\n              *É nescessario a senha\n            </ion-text>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && (errorControl.passwd.errors?.pattern || errorControl.passwd.errors?.minLength || errorControl.passwd.errors?.maxLength)\">\n              *É nescessario que a senha tenha entre 6 a 30 caracteres, pelo menos uma letra maiuscula, uma letra minuscula, um numero e um caractere especial\n            </ion-text>\n    \n            <ion-item>\n              <ion-label position=\"floating\">Confirme a Senha</ion-label>\n              <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Confirme a senha\" required=\"true\" type=\"password\" formControlName=\"confirmPasswd\"></ion-input>\n            </ion-item>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && !registerForm.get('confirmPasswd').errors && registerForm.hasError('passwordNotMatch') && (registerForm.get('confirmPasswd').dirty || registerForm.get('confirmPasswd').touched)\">\n              *A confirmação tem que ser igual a senha\n            </ion-text>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && errorControl.confirmPasswd.errors?.required\">\n              *Confirme a senha\n            </ion-text>\n            <ion-text color=\"light\" *ngIf=\"isSubmitted && (errorControl.confirmPasswd.errors?.pattern || errorControl.confirmPasswd.errors?.minLength || errorControl.confirmPasswd.errors?.maxLength)\">\n              *É nescessario que a senha tenha entre 6 a 30 caracteres, pelo menos uma letra maiuscula, uma letra minuscula, um numero e um caractere especial\n            </ion-text>\n    \n            <ion-item>\n              <ion-label>Esta Ativo?</ion-label>\n              <ion-toggle color=\"danger\" formControlName=\"isActive\" checked></ion-toggle>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label>Sera Sincronizado?</ion-label>\n              <ion-toggle color=\"danger\" formControlName=\"issync\" checked></ion-toggle>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button  size=\"large\" type=\"submit\" expand=\"block\">Registrar</ion-button>\n            <ion-button  size=\"large\" expand=\"block\" routerLink='/'>Voltar</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/outros/register/register-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/outros/register/register-routing.module.ts ***!
  \************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/outros/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/outros/register/register.module.ts":
/*!****************************************************!*\
  !*** ./src/app/outros/register/register.module.ts ***!
  \****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/outros/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/outros/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/outros/register/register.page.scss":
/*!****************************************************!*\
  !*** ./src/app/outros/register/register.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dHJvcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/outros/register/register.page.ts":
/*!**************************************************!*\
  !*** ./src/app/outros/register/register.page.ts ***!
  \**************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-sha512 */ "./node_modules/js-sha512/src/sha512.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





let RegisterPage = class RegisterPage {
    // mismatchedPasswords: boolean;
    constructor(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            nomeUsr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            snUsr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            usernameUsr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emailUsr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[\w\.-]*[a-zA-Z0-9_]@[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]/)]],
            celularUsr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})/)]],
            passwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]],
            confirmPasswd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]],
            isActive: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            issync: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, { validator: this.matchingPasswords.bind(this) });
    }
    register() {
        this.isSubmitted = true;
        if (!this.registerForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            //console.log(this.registerForm.value);
            let hash = js_sha512__WEBPACK_IMPORTED_MODULE_3__["sha512"].create().update(this.registerForm.value.passwd).hex();
            //console.log(hash);
            this.userCreate = {
                username: this.registerForm.value.usernameUsr,
                nome: this.registerForm.value.nomeUsr,
                sobrenome: this.registerForm.value.snUsr,
                email: this.registerForm.value.emailUsr,
                celular: this.registerForm.value.celularUsr,
                isActive: this.registerForm.value.isActive,
                issync: this.registerForm.value.issync,
                senha: hash
            };
            //console.log(this.userCreate);
            this.userService.createUserMongoDB(this.userCreate).subscribe((response) => {
                console.log(response);
            }, (err) => {
                console.log(err);
            });
            // let hash2 = sha512.create().update(this.registerForm.value.passwd).hex();
            // console.log(hash2);
        }
    }
    // matchingPasswords(passwd: string, confirmPasswd: string) {
    //   return (group: FormGroup): {[key: string]: any} => {
    //     let password = group.controls[passwd];
    //     let confirmPassword = group.controls[confirmPasswd];
    //     if (password.value !== confirmPassword.value) {
    //       return {
    //         mismatchedPasswords: true
    //       };
    //     }
    //   }
    // }
    matchingPasswords(formGroup) {
        const { value: password } = formGroup.get('passwd');
        const { value: confirmPassword } = formGroup.get('confirmPasswd');
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    get errorControl() {
        return this.registerForm.controls;
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/outros/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/outros/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=outros-register-register-module-es2015.js.map
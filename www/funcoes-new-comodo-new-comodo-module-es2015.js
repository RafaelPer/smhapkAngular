(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-new-comodo-new-comodo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/new-comodo/new-comodo.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/new-comodo/new-comodo.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Cadastro do Comodo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Novo Comodo</ion-card-title>\n      <ion-card-subtitle>Digite as informações do comodo</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form [formGroup]=\"comodoCreate\" (ngSubmit)=\"createCom()\" novalidate>\n        <ion-item>\n          <ion-label position=\"floating\">Nome do Comodo</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o nome do Comodo\" required=\"true\" type=\"text\" formControlName=\"nomeCom\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.nomeCom.errors?.required\">\n          *É nescessario o nome do comodo\n        </ion-text>\n        <ion-item>\n          <ion-label>Esta Ativo?</ion-label>\n          <ion-toggle color=\"danger\" checked disabled></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>É Favorito?</ion-label>\n          <ion-toggle color=\"danger\" disabled></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Sera Sincronizado?</ion-label>\n          <ion-toggle color=\"danger\" checked disabled></ion-toggle>\n        </ion-item>\n\n        <ion-button expand=\"full\" type=\"submit\">Criar Comodo</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/funcoes/new-comodo/new-comodo-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/funcoes/new-comodo/new-comodo-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NewComodoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComodoPageRoutingModule", function() { return NewComodoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_comodo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-comodo.page */ "./src/app/funcoes/new-comodo/new-comodo.page.ts");




const routes = [
    {
        path: '',
        component: _new_comodo_page__WEBPACK_IMPORTED_MODULE_3__["NewComodoPage"]
    }
];
let NewComodoPageRoutingModule = class NewComodoPageRoutingModule {
};
NewComodoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewComodoPageRoutingModule);



/***/ }),

/***/ "./src/app/funcoes/new-comodo/new-comodo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/funcoes/new-comodo/new-comodo.module.ts ***!
  \*********************************************************/
/*! exports provided: NewComodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComodoPageModule", function() { return NewComodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_comodo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-comodo-routing.module */ "./src/app/funcoes/new-comodo/new-comodo-routing.module.ts");
/* harmony import */ var _new_comodo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-comodo.page */ "./src/app/funcoes/new-comodo/new-comodo.page.ts");







let NewComodoPageModule = class NewComodoPageModule {
};
NewComodoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_comodo_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewComodoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_new_comodo_page__WEBPACK_IMPORTED_MODULE_6__["NewComodoPage"]]
    })
], NewComodoPageModule);



/***/ }),

/***/ "./src/app/funcoes/new-comodo/new-comodo.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/funcoes/new-comodo/new-comodo.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvbmV3LWNvbW9kby9uZXctY29tb2RvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/funcoes/new-comodo/new-comodo.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/funcoes/new-comodo/new-comodo.page.ts ***!
  \*******************************************************/
/*! exports provided: NewComodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComodoPage", function() { return NewComodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storageL.service */ "./src/app/services/storageL.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_comodo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/comodo.service */ "./src/app/services/comodo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let NewComodoPage = class NewComodoPage {
    constructor(toastController, auth, alertCtrl, storage, formBuilder, apiService, router) {
        this.toastController = toastController;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.router = router;
        this.isSubmitted = false;
        this.token = null;
        this.user = null;
        this.idUser = null;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.comodoCreate = this.formBuilder.group({
                nomeCom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            });
            this.token = yield this.storage.getToken();
            // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
            console.log(this.token);
            this.user = this.auth.getUser();
            console.log(this.user);
            this.idUser = yield this.storage.getIdUser();
            console.log(this.idUser);
            this.userID = this.user ? this.user.id : this.idUser[0].idUser;
            // this.userID = '5f0a2a4fa1d84f17a891d5a9';
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.token = yield this.storage.getToken();
            // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
            console.log(this.token);
            this.user = this.auth.getUser();
            console.log(this.user);
            this.idUser = yield this.storage.getIdUser();
            console.log(this.idUser);
            this.userID = this.user ? this.user.id : this.idUser[0].idUser;
            // this.userID = '5f0a2a4fa1d84f17a891d5a9';
        });
    }
    createCom() {
        this.isSubmitted = true;
        if (!this.comodoCreate.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.comodoCreate.value);
            let comodo = {
                userID: this.userID,
                nomeComodo: this.comodoCreate.value.nomeCom,
                tempComodo: '',
                umiComodoF: '',
                ajustTempComodo: '',
                statusLuzComodo: false,
                statusTomadaComodo: false,
                statusJanelaComodo: false,
                statusPortaComodo: false,
                statusPresencaComodo: false,
                statusArCondiconado: false,
                isActive: true,
                isFavorite: false,
                issync: true,
            };
            this.apiService.postComodoMongoDB(comodo, this.token[0].token).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(response);
                this.router.navigateByUrl('/members');
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
                //let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em criar o comodo',
                    message: 'Erro: ' + teste,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
    }
    get errorControl() {
        return this.comodoCreate.controls;
    }
};
NewComodoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__["SecureStoreService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_comodo_service__WEBPACK_IMPORTED_MODULE_6__["ComodoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
NewComodoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-comodo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-comodo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/new-comodo/new-comodo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-comodo.page.scss */ "./src/app/funcoes/new-comodo/new-comodo.page.scss")).default]
    })
], NewComodoPage);



/***/ })

}]);
//# sourceMappingURL=funcoes-new-comodo-new-comodo-module-es2015.js.map
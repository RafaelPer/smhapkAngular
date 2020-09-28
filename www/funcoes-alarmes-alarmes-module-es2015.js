(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-alarmes-alarmes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alarmes/alarmes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alarmes/alarmes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>alarmes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let com of comodo\">\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Comodo: {{com.nomeComodo}}</ion-card-title>\n      <ion-card-subtitle>Alarmes do comodo</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item color=\"transp\" lines=\"none\">\n        <ion-button [color]=\"com.isActive ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"com.isActive ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isActive ? 'Atvio' : 'Desativado'}}</ion-button>\n      </ion-item>\n      <ion-item color=\"transp\" lines=\"none\">\n        <ion-button [color]=\"com.issync ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"com.issync ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.issync ? 'Sincronizado' : 'Não Sincronizado'}}</ion-button>\n      </ion-item>\n      <ion-item color=\"transp\" lines=\"none\">\n        <ion-button [color]=\"com.isFavorite ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"com.isFavorite ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isFavorite ? 'Favorito' : 'Não Favorito'}}</ion-button>\n      </ion-item>\n\n      <ion-list inset=\"true\" class=\"listArCond\">\n        <ion-item>\n          <ion-label>JANELAS E PORTAS</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>JANELA</ion-label>\n        </ion-item>\n\n        <ion-button color=\"danger\" [fill]=\"com.statusJanelaComodo === false ? 'solid' : 'outline'\" disabled #buttonJanelaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n        <ion-button color=\"success\" [fill]=\"com.statusJanelaComodo === true ? 'solid' : 'outline'\" disabled #buttonJanelaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n        <br>\n\n        <ion-item>\n          <ion-label>PORTA</ion-label>\n        </ion-item>\n\n\n        <ion-button color=\"danger\" [fill]=\"com.statusPortaComodo === false ? 'solid' : 'outline'\" disabled #buttonPortaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n        <ion-button color=\"success\" [fill]=\"com.statusPortaComodo === true ? 'solid' : 'outline'\" disabled #buttonPortaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n        <br>\n\n        <ion-item>\n          <ion-label>SENSOR DE PRESENÇA</ion-label>\n        </ion-item>\n\n        <ion-button color=\"danger\" [fill]=\"com.statusPresencaComodo === true ? 'solid' : 'outline'\" disabled #buttonSenPrenDetec><ion-icon name=\"eye-outline\"></ion-icon>&nbsp; DETECTADO</ion-button>\n        <ion-button color=\"success\" [fill]=\"com.statusPresencaComodo === false ? 'solid' : 'outline'\" disabled #buttonSenPrenNoDetec><ion-icon name=\"eye-off-outline\"></ion-icon>&nbsp; NÃO DETECTADO</ion-button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/funcoes/alarmes/alarmes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/funcoes/alarmes/alarmes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AlarmesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmesPageRoutingModule", function() { return AlarmesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _alarmes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alarmes.page */ "./src/app/funcoes/alarmes/alarmes.page.ts");




const routes = [
    {
        path: '',
        component: _alarmes_page__WEBPACK_IMPORTED_MODULE_3__["AlarmesPage"]
    }
];
let AlarmesPageRoutingModule = class AlarmesPageRoutingModule {
};
AlarmesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AlarmesPageRoutingModule);



/***/ }),

/***/ "./src/app/funcoes/alarmes/alarmes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/funcoes/alarmes/alarmes.module.ts ***!
  \***************************************************/
/*! exports provided: AlarmesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmesPageModule", function() { return AlarmesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _alarmes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alarmes-routing.module */ "./src/app/funcoes/alarmes/alarmes-routing.module.ts");
/* harmony import */ var _alarmes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alarmes.page */ "./src/app/funcoes/alarmes/alarmes.page.ts");







let AlarmesPageModule = class AlarmesPageModule {
};
AlarmesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alarmes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlarmesPageRoutingModule"]
        ],
        declarations: [_alarmes_page__WEBPACK_IMPORTED_MODULE_6__["AlarmesPage"]]
    })
], AlarmesPageModule);



/***/ }),

/***/ "./src/app/funcoes/alarmes/alarmes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/funcoes/alarmes/alarmes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvYWxhcm1lcy9hbGFybWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/funcoes/alarmes/alarmes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/funcoes/alarmes/alarmes.page.ts ***!
  \*************************************************/
/*! exports provided: AlarmesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmesPage", function() { return AlarmesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_comodo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/comodo.service */ "./src/app/services/comodo.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storageL.service */ "./src/app/services/storageL.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let AlarmesPage = class AlarmesPage {
    // tempAjust: any = null;
    // arCondStatus: any = null;
    // luzesStatus: any = null;
    // tomadasStatus: any = null;
    constructor(toastController, auth, alertCtrl, storage, apiService) {
        this.toastController = toastController;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.apiService = apiService;
        // alterCm: FormGroup;
        this.isSubmitted = false;
        this.token = null;
        this.user = null;
        this.idUser = null;
        this.comodo = [];
    }
    ngOnInit() {
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
            // console.log(this.token);
            this.getCom(this.userID, this.token[0].token);
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
            //console.log(this.token);
            this.getCom(this.userID, this.token[0].token);
        });
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
    getCom(userID, token) {
        this.apiService.getByUserIDMongoDB(userID, token).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            this.comodo = response;
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            // this.presentToast(err.error.message);
            let error = err.error ? err.error.message : err.message;
            const alert = yield this.alertCtrl.create({
                header: 'Falha em buscar o comodo',
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
                // if(r.message.indexOf('Coluna ja Existe na base do servidor, Sincronizado com sucesso')){
                if (r.message.indexOf('Existe')) {
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
};
AlarmesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__["SecureStoreService"] },
    { type: _services_comodo_service__WEBPACK_IMPORTED_MODULE_2__["ComodoService"] }
];
AlarmesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alarmes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alarmes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alarmes/alarmes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alarmes.page.scss */ "./src/app/funcoes/alarmes/alarmes.page.scss")).default]
    })
], AlarmesPage);



/***/ })

}]);
//# sourceMappingURL=funcoes-alarmes-alarmes-module-es2015.js.map
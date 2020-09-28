(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-temp-temp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/temp/temp.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/temp/temp.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>TEMPERATURA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let com of comodo\">\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Comodo: {{com.nomeComodo}}</ion-card-title>\n      <ion-card-subtitle>Informações de tempertura do comodo</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item color=\"transp\" lines=\"none\">\n        <ion-button [color]=\"com.isActive ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"com.isActive ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isActive ? 'Atvio' : 'Desativado'}}</ion-button>\n      </ion-item>\n      <ion-item color=\"transp\" lines=\"none\">\n        <ion-button [color]=\"com.issync ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"com.issync ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.issync ? 'Sincronizado' : 'Não Sincronizado'}}</ion-button>\n      </ion-item>\n      <ion-item color=\"transp\" lines=\"none\">\n        <ion-button [color]=\"com.isFavorite ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"com.isFavorite ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isFavorite ? 'Favorito' : 'Não Favorito'}}</ion-button>\n      </ion-item>\n      <ion-list inset=\"true\" lines=\"none\">\n          \n        <ion-item>\n          <ion-label><ion-icon name=\"thermometer\" color=\"danger\"></ion-icon> Temperatura: {{com.tempComodo}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><ion-icon name=\"water\" color=\"primary\"></ion-icon> Umidade do Ar: {{com.umiComodoF}}</ion-label>\n        </ion-item>\n\n      </ion-list>\n      <!-- <ion-label>Ajustar Temperatura</ion-label>\n      <ion-range min=\"16\" max=\"30\" step=\"1\" snaps=\"true\" pin=\"true\" color=\"danger\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n        <ion-label slot=\"start\" color=\"dark\">16</ion-label>\n        \n        <ion-label slot=\"end\" color=\"dark\">30</ion-label>\n        <ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n      </ion-range> -->\n      <ion-item>\n        <ion-label><ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>&nbsp; Ajustar Temperatura</ion-label>\n        <ion-select placeholder=\"Temperatura\" okText=\"Ok\" cancelText=\"Cancelar\" (ionChange)=\"rangeChanged(com.issync, com._id, $event, com.nomeComodo)\" value=\"{{com.ajustTempComodo}}\">\n          <ion-select-option color=\"danger\" *ngFor=\"let number of [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]\">{{number}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/funcoes/temp/temp-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/funcoes/temp/temp-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TempPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempPageRoutingModule", function() { return TempPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _temp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temp.page */ "./src/app/funcoes/temp/temp.page.ts");




const routes = [
    {
        path: '',
        component: _temp_page__WEBPACK_IMPORTED_MODULE_3__["TempPage"]
    }
];
let TempPageRoutingModule = class TempPageRoutingModule {
};
TempPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TempPageRoutingModule);



/***/ }),

/***/ "./src/app/funcoes/temp/temp.module.ts":
/*!*********************************************!*\
  !*** ./src/app/funcoes/temp/temp.module.ts ***!
  \*********************************************/
/*! exports provided: TempPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempPageModule", function() { return TempPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _temp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./temp-routing.module */ "./src/app/funcoes/temp/temp-routing.module.ts");
/* harmony import */ var _temp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temp.page */ "./src/app/funcoes/temp/temp.page.ts");







let TempPageModule = class TempPageModule {
};
TempPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _temp_routing_module__WEBPACK_IMPORTED_MODULE_5__["TempPageRoutingModule"]
        ],
        declarations: [_temp_page__WEBPACK_IMPORTED_MODULE_6__["TempPage"]]
    })
], TempPageModule);



/***/ }),

/***/ "./src/app/funcoes/temp/temp.page.scss":
/*!*********************************************!*\
  !*** ./src/app/funcoes/temp/temp.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvdGVtcC90ZW1wLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/funcoes/temp/temp.page.ts":
/*!*******************************************!*\
  !*** ./src/app/funcoes/temp/temp.page.ts ***!
  \*******************************************/
/*! exports provided: TempPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempPage", function() { return TempPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_comodo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/comodo.service */ "./src/app/services/comodo.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storageL.service */ "./src/app/services/storageL.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let TempPage = class TempPage {
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
            //console.log(this.token);
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
                this.getCom(this.userID, this.token[0].token);
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
};
TempPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__["SecureStoreService"] },
    { type: _services_comodo_service__WEBPACK_IMPORTED_MODULE_2__["ComodoService"] }
];
TempPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./temp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/temp/temp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./temp.page.scss */ "./src/app/funcoes/temp/temp.page.scss")).default]
    })
], TempPage);



/***/ })

}]);
//# sourceMappingURL=funcoes-temp-temp-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-comodo-info-comodo-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/comodo-info/comodo-info.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/comodo-info/comodo-info.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Comodo: {{com.nomeComodo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>TEMPERATURA</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-list inset=\"true\" lines=\"none\">\n          \n        <ion-item>\n          <ion-label><ion-icon name=\"thermometer\" color=\"danger\"></ion-icon> Temperatura: {{com.tempComodo}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><ion-icon name=\"water\" color=\"primary\"></ion-icon> Umidade do Ar: {{com.umiComodoF}}</ion-label>\n        </ion-item>\n\n      </ion-list>\n      <!-- <ion-label>Ajustar Temperatura</ion-label>\n      <ion-range min=\"16\" max=\"30\" step=\"1\" snaps=\"true\" pin=\"true\" color=\"danger\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n        <ion-label slot=\"start\" color=\"dark\">16</ion-label>\n        \n        <ion-label slot=\"end\" color=\"dark\">30</ion-label>\n        <ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n      </ion-range> -->\n      <ion-item>\n        <ion-label>Ajustar Temperatura Atual: {{com.ajustTempComodo}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label><ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>&nbsp; Ajustar Temperatura</ion-label>\n        <ion-select placeholder=\"Temperatura\" okText=\"Ok\" cancelText=\"Cancelar\" (ionChange)=\"rangeChanged(com.issync, com._id, $event, com.nomeComodo)\">\n          <ion-select-option color=\"danger\" *ngFor=\"let number of [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]\">{{number}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>AR CONDICIONADO</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item>\n        <ion-label>Status Atual: {{com.statusArCondiconado ? 'Ligado' : 'Desligado'}}</ion-label>\n      </ion-item>\n      <ion-radio-group (ionChange)=\"changeArCondButton(com.issync, com._id, $event, com.nomeComodo)\">\n\n        <ion-item>\n          <ion-label>LIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>DESLIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>LUZES</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item>\n        <ion-label>Status Atual: {{com.statusLuzComodo ? 'Ligado' : 'Desligado'}}</ion-label>\n      </ion-item>\n      <ion-radio-group (ionChange)=\"changeLuzesButton(com.issync, com._id, $event, com.nomeComodo)\">\n\n        <ion-item>\n          <ion-label>LIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>DESLIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>TOMADAS</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item>\n        <ion-label>Status Atual: {{com.statusTomadaComodo ? 'Ligado' : 'Desligado'}}</ion-label>\n      </ion-item>\n      <ion-radio-group (ionChange)=\"changeTomadasButton(com.issync, com._id, $event, com.nomeComodo)\">\n\n        <ion-item>\n          <ion-label>LIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>DESLIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>ALARMES</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n\n      <ion-list inset=\"true\" class=\"listArCond\">\n        <ion-item>\n          <ion-label>JANELAS E PORTAS</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>JANELA</ion-label>\n        </ion-item>\n\n        <ion-button color=\"danger\"  [fill]=\"com.statusJanelaComodo === false ? 'solid' : 'outline'\"  disabled #buttonJanelaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n        <ion-button color=\"success\"  [fill]=\"com.statusJanelaComodo === true ? 'solid' : 'outline'\"  disabled #buttonJanelaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n        <br>\n\n        <ion-item>\n          <ion-label>PORTA</ion-label>\n        </ion-item>\n\n\n        <ion-button color=\"danger\" [fill]=\"com.statusPortaComodo === false ? 'solid' : 'outline'\" disabled #buttonPortaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n        <ion-button color=\"success\" [fill]=\"com.statusPortaComodo === true ? 'solid' : 'outline'\" disabled #buttonPortaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n        <br>\n\n        <ion-item>\n          <ion-label>SENSOR DE PRESENÇA</ion-label>\n        </ion-item>\n\n        <ion-button color=\"danger\" [fill]=\"com.statusPresencaComodo === true ? 'solid' : 'outline'\" disabled #buttonSenPrenDetec><ion-icon name=\"eye-outline\"></ion-icon>&nbsp; DETECTADO</ion-button>\n        <ion-button color=\"success\" [fill]=\"com.statusPresencaComodo === false ? 'solid' : 'outline'\" disabled #buttonSenPrenNoDetec><ion-icon name=\"eye-off-outline\"></ion-icon>&nbsp; NÃO DETECTADO</ion-button>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>OUTRAS INFORMAÇÕES</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form [formGroup]=\"alterCm\" (ngSubmit)=\"alterCom(com._id, com.issync, com.nomeComodo)\" novalidate>\n\n        <ion-item>\n          <ion-label position=\"floating\">Novo Nome do Comodo</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o novo nome do comodo\" required=\"true\" type=\"text\" formControlName=\"nomeCom\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Esta Ativo?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"isActive\" [checked]=\"com.isActive\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Sera Sincronizado?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"issync\" [checked]=\"com.issync\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>É favorito?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"isFavorite\" [checked]=\"com.isFavorite\"></ion-toggle>\n        </ion-item>\n\n        <ion-button expand=\"full\" type=\"submit\">Alterar Comodo</ion-button>\n      </form>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"delCom(com._id, com.nomeComodo)\">Deletar Comodo</ion-button>\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"sincroCom(com._id, com.nomeComodo, com.issync)\">Sincronizar Comodo</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/funcoes/comodo-info/comodo-info-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/funcoes/comodo-info/comodo-info-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ComodoInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComodoInfoPageRoutingModule", function() { return ComodoInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comodo_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comodo-info.page */ "./src/app/funcoes/comodo-info/comodo-info.page.ts");




const routes = [
    {
        path: '',
        component: _comodo_info_page__WEBPACK_IMPORTED_MODULE_3__["ComodoInfoPage"]
    }
];
let ComodoInfoPageRoutingModule = class ComodoInfoPageRoutingModule {
};
ComodoInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComodoInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/funcoes/comodo-info/comodo-info.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/funcoes/comodo-info/comodo-info.module.ts ***!
  \***********************************************************/
/*! exports provided: ComodoInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComodoInfoPageModule", function() { return ComodoInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comodo_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comodo-info-routing.module */ "./src/app/funcoes/comodo-info/comodo-info-routing.module.ts");
/* harmony import */ var _comodo_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comodo-info.page */ "./src/app/funcoes/comodo-info/comodo-info.page.ts");







let ComodoInfoPageModule = class ComodoInfoPageModule {
};
ComodoInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _comodo_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComodoInfoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_comodo_info_page__WEBPACK_IMPORTED_MODULE_6__["ComodoInfoPage"]]
    })
], ComodoInfoPageModule);



/***/ }),

/***/ "./src/app/funcoes/comodo-info/comodo-info.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/funcoes/comodo-info/comodo-info.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvY29tb2RvLWluZm8vY29tb2RvLWluZm8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/funcoes/comodo-info/comodo-info.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/funcoes/comodo-info/comodo-info.page.ts ***!
  \*********************************************************/
/*! exports provided: ComodoInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComodoInfoPage", function() { return ComodoInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_comodo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/comodo.service */ "./src/app/services/comodo.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storageL_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storageL.service */ "./src/app/services/storageL.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let ComodoInfoPage = class ComodoInfoPage {
    //responseInsertSQLite: any = null;
    // userID: any;
    // user = null;
    // idUser = null;
    // tempAjust: any = null;
    // arCondStatus: any = null;
    // luzesStatus: any = null;
    // tomadasStatus: any = null;
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
        this.isActiveValue = null;
        this.isSyncValue = null;
        this.isFavoriteValue = null;
        this.com = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alterCm = this.formBuilder.group({
                nomeCom: [''],
                isActive: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                issync: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                isFavorite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            this.id = this.activatedRoute.snapshot.params.id;
            console.log(this.id);
            // this.user = this.auth.getUser();
            // console.log(this.user);
            // this.idUser = await this.storage.getIdUser();
            // console.log(this.idUser);
            this.token = yield this.storage.getToken();
            // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
            console.log(this.token);
            // this.userID = this.user ? this.user.id : this.idUser[0].idUser;
            // this.userID = '5f0a2a4fa1d84f17a891d5a9';
            // console.log(this.token);
            this.getByIDCom(this.id, this.token[0].token);
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.com);
            console.log(this.isActiveValue, this.isSyncValue, this.isFavoriteValue);
            this.alterCm.controls.isActive.setValue(this.isActiveValue);
            this.alterCm.controls.issync.setValue(this.isSyncValue);
            this.alterCm.controls.isFavorite.setValue(this.isFavoriteValue);
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
    getByIDCom(idCom, token) {
        this.apiService.getByIDMongoDB(idCom, token).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            // this.tempAjust = await response.ajustTempComodo;
            // this.arCondStatus = await response.statusArCondiconado ? 'on' : 'off';
            // this.luzesStatus = await response.statusLuzComodo ? 'on' : 'off';
            // this.tomadasStatus = await response.statusTomadaComodo ? 'on' : 'off';
            this.com = yield response;
            this.isActiveValue = yield response.isActive;
            this.isSyncValue = yield response.issync;
            this.isFavoriteValue = yield response.isFavorite;
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
    alterCom(id, isSync, nomeCom) {
        this.isSubmitted = true;
        console.log(this.alterCm.value);
        let comodo = {};
        let co = {};
        if (this.alterCm.value.nomeCom === '') {
            comodo = {
                isActive: this.alterCm.value.isActive,
                issync: this.alterCm.value.issync,
                isFavorite: this.alterCm.value.isFavorite
            };
            co = {
                IDMongodbComodo: id,
                isActive: this.alterCm.value.isActive,
                issync: this.alterCm.value.issync,
                isFavorite: this.alterCm.value.isFavorite
            };
        }
        else {
            comodo = {
                nomeComodo: this.alterCm.value.nomeCom,
                isActive: this.alterCm.value.isActive,
                issync: this.alterCm.value.issync,
                isFavorite: this.alterCm.value.isFavorite
            };
            co = {
                IDMongodbComodo: id,
                nomeComodo: this.alterCm.value.nomeCom,
                isActive: this.alterCm.value.isActive,
                issync: this.alterCm.value.issync,
                isFavorite: this.alterCm.value.isFavorite
            };
        }
        console.log(comodo);
        this.apiService.putComodoByIDMongDB(id, comodo, this.token[0].token).subscribe((response) => {
            console.log(response);
            this.getByIDCom(id, this.token[0].token);
            if (isSync) {
                this.insertOrUpdateComSQLite(id, co, this.token[0].token, nomeCom);
            }
            else {
                this.presentToast('Sincronização do Comodo desativada, não sincronizado');
            }
        }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let error = err.error ? err.error.message : err.message;
            const alert = yield this.alertCtrl.create({
                header: 'Falha em atualizar o comodo ' + nomeCom + ' com o id: ' + id,
                message: 'Erro: ' + error,
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
                this.getByIDCom(idCom, this.token[0].token);
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
    changeArCondButton(isSync, idCom, event, nomeCom) {
        console.log('changeArCondButton');
        console.log(isSync);
        console.log(idCom);
        console.log(event);
        console.log(event.detail.value);
        if (event.detail) {
            let value = event.detail.value;
            let statusAr = null;
            if (value === 'on') {
                statusAr = true;
            }
            else if (value === 'off') {
                statusAr = false;
            }
            let t = {
                statusArCondiconado: statusAr
            };
            console.log(t);
            console.log(this.token);
            // console.log(this.userID);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
                console.log(response);
                this.getByIDCom(idCom, this.token[0].token);
                if (isSync) {
                    let te = {
                        IDMongodbComodo: idCom,
                        statusArCondiconado: statusAr
                    };
                    this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
                }
                else {
                    this.presentToast('Sincronização do Comodo desativada, não sincronizado');
                }
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
                    message: 'Erro: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
    }
    changeLuzesButton(isSync, idCom, event, nomeCom) {
        console.log('changeLuzesButton');
        console.log(isSync);
        console.log(idCom);
        console.log(event);
        console.log(event.detail.value);
        console.log(nomeCom);
        if (event.detail) {
            let value = event.detail.value;
            let statusLuzes = null;
            if (value === 'on') {
                statusLuzes = true;
            }
            else if (value === 'off') {
                statusLuzes = false;
            }
            let t = {
                statusLuzComodo: statusLuzes
            };
            console.log(t);
            console.log(this.token);
            // console.log(this.userID);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
                console.log(response);
                this.getByIDCom(idCom, this.token[0].token);
                if (isSync) {
                    let te = {
                        IDMongodbComodo: idCom,
                        statusLuzComodo: statusLuzes
                    };
                    this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
                }
                else {
                    this.presentToast('Sincronização do Comodo desativada, não sincronizado');
                }
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
                    message: 'Erro: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
    }
    changeTomadasButton(isSync, idCom, event, nomeCom) {
        console.log('changeTomadasButton');
        console.log(isSync);
        console.log(idCom);
        console.log(event);
        console.log(event.detail.value);
        console.log(nomeCom);
        if (event.detail) {
            let value = event.detail.value;
            let statusTomadas = null;
            if (value === 'on') {
                statusTomadas = true;
            }
            else if (value === 'off') {
                statusTomadas = false;
            }
            let t = {
                statusTomadaComodo: statusTomadas
            };
            console.log(t);
            console.log(this.token);
            // console.log(this.userID);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
                console.log(response);
                this.getByIDCom(idCom, this.token[0].token);
                if (isSync) {
                    let te = {
                        IDMongodbComodo: idCom,
                        statusTomadaComodo: statusTomadas
                    };
                    this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
                }
                else {
                    this.presentToast('Sincronização do Comodo desativada, não sincronizado');
                }
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
                    message: 'Erro: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
    }
    delCom(idCom, nomeCom) {
        this.apiService.deleteComodoByIDMongo(idCom, this.token[0].token).subscribe((response) => {
            console.log(response);
            this.apiService.deleteComodoByIDComodoMongoSQLite(idCom, this.token[0].token).subscribe((resp) => {
                console.log(resp);
                this.router.navigateByUrl('/members');
            }, (erro) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(erro);
                let error = erro.error ? erro.error.message : erro.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em deletar o comodo ' + nomeCom + ' com o id: ' + idCom + ' na base local',
                    message: 'Erro: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
                this.router.navigateByUrl('/members');
            }));
        }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            let error = err.error ? err.error.message : err.message;
            const alert = yield this.alertCtrl.create({
                header: 'Falha em deletar o comodo ' + nomeCom + ' com o id: ' + idCom,
                message: 'Erro: ' + error,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    sincroCom(idCom, nomeCom, isSync) {
        if (isSync) {
            let comodo = {
                IDMongodbComodo: idCom,
                IDMongodbUser: this.com.userID,
                nomeComodo: this.com.nomeComodo,
                tempComodo: this.com.tempComodo,
                umiComodoF: this.com.umiComodoF,
                ajustTempComodo: this.com.ajustTempComodo,
                statusLuzComodo: this.com.statusLuzComodo,
                statusTomadaComodo: this.com.statusTomadaComodo,
                statusJanelaComodo: this.com.statusJanelaComodo,
                statusPortaComodo: this.com.statusPortaComodo,
                statusPresencaComodo: this.com.statusPresencaComodo,
                statusArCondiconado: this.com.statusArCondiconado,
                isActive: this.com.isActive,
                isFavorite: this.com.isFavorite,
                issync: this.com.issync,
                date: this.com.date
            };
            this.insertOrUpdateComSQLite(idCom, comodo, this.token[0].token, nomeCom);
        }
        else {
            this.presentToast('Sincronização desativada! Não Sincronizado');
        }
    }
    // te(event){
    //   console.log(event);
    // }
    get errorControl() {
        return this.alterCm.controls;
    }
};
ComodoInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_6__["SecureStoreService"] },
    { type: _services_comodo_service__WEBPACK_IMPORTED_MODULE_4__["ComodoService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ComodoInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comodo-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comodo-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/comodo-info/comodo-info.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comodo-info.page.scss */ "./src/app/funcoes/comodo-info/comodo-info.page.scss")).default]
    })
], ComodoInfoPage);



/***/ })

}]);
//# sourceMappingURL=funcoes-comodo-info-comodo-info-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-alter-info-conta-alter-info-conta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-info-conta/alter-info-conta.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-info-conta/alter-info-conta.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Alteração de Dados da Conta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Informações do Usuario</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form [formGroup]=\"alterUser\" (ngSubmit)=\"alterUsr(us.username)\" novalidate>\n\n        <ion-item>\n          <ion-label position=\"floating\">Nome do Usuario</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.nome}}\" type=\"text\" formControlName=\"nomeUsr\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Sobrenome do Usuario</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.sobrenome}}\" type=\"text\" formControlName=\"snUsr\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.username}}\" type=\"text\" formControlName=\"usernameUsr\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.email}}\" type=\"text\" formControlName=\"emailUsr\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.emailUsr.errors?.pattern\">\n          *Email invalido\n        </ion-text>\n\n        <ion-item>\n          <ion-label position=\"floating\">Celular</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.celular}}\" type=\"text\" formControlName=\"celularUsr\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.celularUsr.errors?.pattern\">\n          *Celular invalido\n        </ion-text>\n\n        <ion-item>\n          <ion-label>Esta Ativo?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"isActive\" [checked]=\"us.isActive\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Sera Sincronizado?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"issync\" [checked]=\"us.issync\"></ion-toggle>\n        </ion-item>\n\n        <ion-button expand=\"full\" type=\"submit\">Alterar Usuario</ion-button>\n        <ion-button expand=\"full\" (click)=\"backToConfig()\">VOLTAR</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/funcoes/alter-info-conta/alter-info-conta-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/funcoes/alter-info-conta/alter-info-conta-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AlterInfoContaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterInfoContaPageRoutingModule", function() { return AlterInfoContaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _alter_info_conta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alter-info-conta.page */ "./src/app/funcoes/alter-info-conta/alter-info-conta.page.ts");




const routes = [
    {
        path: '',
        component: _alter_info_conta_page__WEBPACK_IMPORTED_MODULE_3__["AlterInfoContaPage"]
    }
];
let AlterInfoContaPageRoutingModule = class AlterInfoContaPageRoutingModule {
};
AlterInfoContaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AlterInfoContaPageRoutingModule);



/***/ }),

/***/ "./src/app/funcoes/alter-info-conta/alter-info-conta.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/funcoes/alter-info-conta/alter-info-conta.module.ts ***!
  \*********************************************************************/
/*! exports provided: AlterInfoContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterInfoContaPageModule", function() { return AlterInfoContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _alter_info_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alter-info-conta-routing.module */ "./src/app/funcoes/alter-info-conta/alter-info-conta-routing.module.ts");
/* harmony import */ var _alter_info_conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alter-info-conta.page */ "./src/app/funcoes/alter-info-conta/alter-info-conta.page.ts");







let AlterInfoContaPageModule = class AlterInfoContaPageModule {
};
AlterInfoContaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alter_info_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlterInfoContaPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_alter_info_conta_page__WEBPACK_IMPORTED_MODULE_6__["AlterInfoContaPage"]]
    })
], AlterInfoContaPageModule);



/***/ }),

/***/ "./src/app/funcoes/alter-info-conta/alter-info-conta.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/funcoes/alter-info-conta/alter-info-conta.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvYWx0ZXItaW5mby1jb250YS9hbHRlci1pbmZvLWNvbnRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/funcoes/alter-info-conta/alter-info-conta.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/funcoes/alter-info-conta/alter-info-conta.page.ts ***!
  \*******************************************************************/
/*! exports provided: AlterInfoContaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterInfoContaPage", function() { return AlterInfoContaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storageL.service */ "./src/app/services/storageL.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let AlterInfoContaPage = class AlterInfoContaPage {
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
        this.user = null;
        this.idUser = null;
        this.us = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alterUser = this.formBuilder.group({
                nomeUsr: [''],
                snUsr: [''],
                usernameUsr: [''],
                emailUsr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[\w\.-]*[a-zA-Z0-9_]@[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]/)]],
                celularUsr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})/)]],
                isActive: [''],
                issync: ['']
            });
            this.id = this.activatedRoute.snapshot.params.id;
            console.log(this.id);
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
            this.getByIDUs(this.id, this.token[0].token);
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.us);
            this.alterUser.controls.isActive.setValue(this.isActiveValue);
            this.alterUser.controls.issync.setValue(this.isSyncValue);
        });
    }
    alterUsSQLite(idMongo, us, token, username) {
        this.apiService.updateByIDMUSQLite(idMongo, us, token).subscribe((response) => {
            console.log(response);
        }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            let error = err.error ? err.error.message : err.message;
            const alert = yield this.alertCtrl.create({
                header: 'Falha em atualizar o usuario ' + username + ' com o id: ' + idMongo + ' na base local',
                message: 'Erro: ' + error,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    getByIDUs(idUs, token) {
        this.apiService.getByIDMongoDB(idUs, token).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            // this.tempAjust = await response.ajustTempComodo;
            // this.arCondStatus = await response.statusArCondiconado ? 'on' : 'off';
            // this.luzesStatus = await response.statusLuzComodo ? 'on' : 'off';
            // this.tomadasStatus = await response.statusTomadaComodo ? 'on' : 'off';
            this.us = yield response;
            this.isActiveValue = yield response.isActive;
            this.isSyncValue = yield response.issync;
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            // this.presentToast(err.error.message);
            let error = err.error ? err.error.message : err.message;
            const alert = yield this.alertCtrl.create({
                header: 'Falha em buscar o usuario',
                message: 'Erro: ' + error,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    insertOrUpdateComSQLite(idUs, us, token, username) {
        this.apiService.createUserSQLite(us).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            let existTble = false;
            for (let r of response.messages) {
                console.log(r);
                // if(r.message.indexOf('Coluna ja Existe na base do servidor, Sincronizado com sucesso')){
                if (r.message.indexOf('Existe')) {
                    existTble = true;
                    break;
                }
            }
            console.log(existTble);
            if (existTble) {
                this.alterUsSQLite(idUs, us, token, username);
            }
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                header: 'Falha em sincronizar o usuario ' + username + ' com o id: ' + idUs + ' na base local',
                message: 'Erro: ' + teste,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    alterUsr(username) {
        this.isSubmitted = true;
        console.log(this.alterUser);
        if (!this.alterUser.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.alterUser.value);
            // let u = {
            //   nome: this.alterUser.value.nomeUsr === '' ? this.us.nome : this.alterUser.value.nomeUsr,
            //   sobrenome: this.alterUser.value.snUsr === '' ? this.us.sobrenome : this.alterUser.value.snUsr,
            //   username: this.alterUser.value.usernameUsr === '' ? this.us.username : this.alterUser.value.usernameUsr,
            //   email: this.alterUser.value.emailUsr === '' ? this.us.email : this.alterUser.value.emailUsr,
            //   celular: this.alterUser.value.celularUsr === '' ? this.us.celular : this.alterUser.value.celularUsr,
            //   isActive: this.alterUser.value.isActive === '' ? this.us.isActive : this.alterUser.value.isActive,
            //   issync: this.alterUser.value.issync === '' ? this.us.issync : this.alterUser.value.issync
            // };
            let u = {};
            if (this.alterUser.value.nomeUsr != '') {
                let n = {
                    nome: this.alterUser.value.nomeUsr
                };
                this.addElement(u, n);
            }
            if (this.alterUser.value.snUsr != '') {
                let sn = {
                    sobrenome: this.alterUser.value.snUsr
                };
                this.addElement(u, sn);
            }
            if (this.alterUser.value.usernameUsr != '') {
                let un = {
                    username: this.alterUser.value.usernameUsr
                };
                this.addElement(u, un);
            }
            if (this.alterUser.value.emailUsr != '') {
                let e = {
                    email: this.alterUser.value.emailUsr
                };
                this.addElement(u, e);
            }
            if (this.alterUser.value.celularUsr != '') {
                let c = {
                    celular: this.alterUser.value.celularUsr
                };
                this.addElement(u, c);
            }
            let as = {
                isActive: this.alterUser.value.isActive,
                issync: this.alterUser.value.issync
            };
            this.addElement(u, as);
            let u2 = {
                IDMongodbUser: this.userID,
                senha: this.us.senha
            };
            this.addElement(u2, u);
            console.log(u2);
            console.log(u);
            this.apiService.updateByIDUser(u, this.userID, this.token[0].token).subscribe((response) => {
                console.log(response);
                // let u2 = {
                //   IDMongodbUser: this.userID,
                //   nome: this.alterUser.value.nomeUsr === '' ? this.us.nome : this.alterUser.value.nomeUsr,
                //   sobrenome: this.alterUser.value.snUsr === '' ? this.us.sobrenome : this.alterUser.value.snUsr,
                //   username: this.alterUser.value.usernameUsr === '' ? this.us.username : this.alterUser.value.usernameUsr,
                //   email: this.alterUser.value.emailUsr === '' ? this.us.email : this.alterUser.value.emailUsr,
                //   celular: this.alterUser.value.celularUsr === '' ? this.us.celular : this.alterUser.value.celularUsr,
                //   isActive: this.alterUser.value.isActive === '' ? this.us.isActive : this.alterUser.value.isActive,
                //   issync: this.alterUser.value.issync === '' ? this.us.issync : this.alterUser.value.issync,
                //   senha: this.us.senha
                // };
                console.log(u2);
                this.insertOrUpdateComSQLite(this.userID, u2, this.token[0].token, username);
                this.router.navigateByUrl('/members/smh/config');
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                let error = err.error ? err.error.message : err.message;
                const alert = yield this.alertCtrl.create({
                    header: 'Falha em atualizar o usuario ' + username + ' com o id: ' + this.userID,
                    message: 'Erro: ' + error,
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        }
    }
    addElement(ElementList, element) {
        let newList = Object.assign(ElementList, element);
        return newList;
    }
    backToConfig() {
        this.router.navigateByUrl('/members/smh/config');
    }
    get errorControl() {
        return this.alterUser.controls;
    }
};
AlterInfoContaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__["SecureStoreService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AlterInfoContaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alter-info-conta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alter-info-conta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-info-conta/alter-info-conta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alter-info-conta.page.scss */ "./src/app/funcoes/alter-info-conta/alter-info-conta.page.scss")).default]
    })
], AlterInfoContaPage);



/***/ })

}]);
//# sourceMappingURL=funcoes-alter-info-conta-alter-info-conta-module-es2015.js.map
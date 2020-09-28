(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      CONFIGURAÇÕES\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Configurações da Conta</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form action=\"\">\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Username</ion-label>\n          <ion-input disabled value=\"{{us.username}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Nome</ion-label>\n          <ion-input disabled  value=\"{{us.nome}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Sobrenome</ion-label>\n          <ion-input disabled  value=\"{{us.sobrenome}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Email</ion-label>\n          <ion-input disabled  value=\"{{us.email}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Celular</ion-label>\n          <ion-input disabled  value=\"{{us.celular}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Ativo?</ion-label>\n          <ion-toggle color=\"danger\" disabled [checked]=\"us.isActive\"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Sincronizar?</ion-label>\n          <ion-toggle color=\"danger\" disabled [checked]=\"us.issync\"></ion-toggle>\n        </ion-item>\n      </form>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"routerForAlterPasswd()\">ALTERAR SENHA</ion-button>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"routerForAlterInfoAccount()\">ALTERAR INFORMAÇÕES</ion-button>\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"sincUser(us.username)\">Sincronizar Usuario</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/config/config-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/config/config-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ConfigPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageRoutingModule", function() { return ConfigPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.page */ "./src/app/config/config.page.ts");




const routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_3__["ConfigPage"],
    }
];
let ConfigPageRoutingModule = class ConfigPageRoutingModule {
};
ConfigPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ConfigPageRoutingModule);



/***/ }),

/***/ "./src/app/config/config.module.ts":
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/*! exports provided: ConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.page */ "./src/app/config/config.page.ts");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-routing.module */ "./src/app/config/config-routing.module.ts");







//import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

let ConfigPageModule = class ConfigPageModule {
};
ConfigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            //ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"] }]),
            _config_routing_module__WEBPACK_IMPORTED_MODULE_7__["ConfigPageRoutingModule"],
        ],
        declarations: [_config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]]
    })
], ConfigPageModule);



/***/ }),

/***/ "./src/app/config/config.page.scss":
/*!*****************************************!*\
  !*** ./src/app/config/config.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy9jb25maWcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/config/config.page.ts":
/*!***************************************!*\
  !*** ./src/app/config/config.page.ts ***!
  \***************************************/
/*! exports provided: ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storageL_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storageL.service */ "./src/app/services/storageL.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let ConfigPage = class ConfigPage {
    constructor(toastController, auth, alertCtrl, storage, apiService, router) {
        this.toastController = toastController;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.apiService = apiService;
        this.router = router;
        this.token = null;
        this.user = null;
        this.idUser = null;
        this.us = {};
    }
    ngOnInit() {
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
            this.getUser(this.userID, this.token[0].token);
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
            this.getUser(this.userID, this.token[0].token);
        });
    }
    alterUsSQLite(idMongo, user, token, username) {
        this.apiService.updateByIDMUSQLite(idMongo, user, token).subscribe((response) => {
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
    insertOrUpdateUsSQLite(idUser, user, token, username) {
        this.apiService.createUserSQLite(user).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                this.alterUsSQLite(idUser, user, token, username);
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
                header: 'Falha em sincronizar o usuario ' + username + ' com o id: ' + idUser + ' na base local',
                message: 'Erro: ' + teste,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    getUser(usrID, token) {
        this.apiService.getByIDMongoDB(usrID, token).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            this.us = response;
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            let error = err.error ? err.error.message : err.message;
            const alert = yield this.alertCtrl.create({
                header: 'Falha em buscar as informações do usuario',
                message: 'Erro: ' + error,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    routerForAlterPasswd() {
        this.router.navigateByUrl('/members/smh/alter-passwd/' + this.us.username);
    }
    routerForAlterInfoAccount() {
        this.router.navigateByUrl('/members/smh/alter-info-conta/' + this.userID);
    }
    sincUser(usrname) {
        let u = {
            IDMongodbUser: this.userID,
            username: usrname,
            nome: this.us.nome,
            sobrenome: this.us.sobrenome,
            email: this.us.email,
            senha: this.us.senha,
            celular: this.us.celular,
            isActive: this.us.isActive,
            dispositivo: this.us.dispositivo,
            issync: this.us.issync,
            date: this.us.date
        };
        this.insertOrUpdateUsSQLite(this.userID, u, this.token[0].token, usrname);
    }
};
ConfigPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_3__["SecureStoreService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ConfigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-config',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./config.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./config.page.scss */ "./src/app/config/config.page.scss")).default]
    })
], ConfigPage);



/***/ })

}]);
//# sourceMappingURL=config-config-module-es2015.js.map
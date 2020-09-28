function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-comodo-info-comodo-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/comodo-info/comodo-info.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/comodo-info/comodo-info.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFuncoesComodoInfoComodoInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Comodo: {{com.nomeComodo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>TEMPERATURA</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-list inset=\"true\" lines=\"none\">\n          \n        <ion-item>\n          <ion-label><ion-icon name=\"thermometer\" color=\"danger\"></ion-icon> Temperatura: {{com.tempComodo}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><ion-icon name=\"water\" color=\"primary\"></ion-icon> Umidade do Ar: {{com.umiComodoF}}</ion-label>\n        </ion-item>\n\n      </ion-list>\n      <!-- <ion-label>Ajustar Temperatura</ion-label>\n      <ion-range min=\"16\" max=\"30\" step=\"1\" snaps=\"true\" pin=\"true\" color=\"danger\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n        <ion-label slot=\"start\" color=\"dark\">16</ion-label>\n        \n        <ion-label slot=\"end\" color=\"dark\">30</ion-label>\n        <ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n      </ion-range> -->\n      <ion-item>\n        <ion-label>Ajustar Temperatura Atual: {{com.ajustTempComodo}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label><ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>&nbsp; Ajustar Temperatura</ion-label>\n        <ion-select placeholder=\"Temperatura\" okText=\"Ok\" cancelText=\"Cancelar\" (ionChange)=\"rangeChanged(com.issync, com._id, $event, com.nomeComodo)\">\n          <ion-select-option color=\"danger\" *ngFor=\"let number of [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]\">{{number}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>AR CONDICIONADO</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item>\n        <ion-label>Status Atual: {{com.statusArCondiconado ? 'Ligado' : 'Desligado'}}</ion-label>\n      </ion-item>\n      <ion-radio-group (ionChange)=\"changeArCondButton(com.issync, com._id, $event, com.nomeComodo)\">\n\n        <ion-item>\n          <ion-label>LIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>DESLIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>LUZES</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item>\n        <ion-label>Status Atual: {{com.statusLuzComodo ? 'Ligado' : 'Desligado'}}</ion-label>\n      </ion-item>\n      <ion-radio-group (ionChange)=\"changeLuzesButton(com.issync, com._id, $event, com.nomeComodo)\">\n\n        <ion-item>\n          <ion-label>LIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>DESLIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>TOMADAS</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item>\n        <ion-label>Status Atual: {{com.statusTomadaComodo ? 'Ligado' : 'Desligado'}}</ion-label>\n      </ion-item>\n      <ion-radio-group (ionChange)=\"changeTomadasButton(com.issync, com._id, $event, com.nomeComodo)\">\n\n        <ion-item>\n          <ion-label>LIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"on\" color=\"success\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>DESLIGADO</ion-label>\n          <ion-radio slot=\"start\" value=\"off\" color=\"danger\"></ion-radio>\n          <ion-icon slot=\"start\" name=\"flash-off-outline\" color=\"danger\"></ion-icon>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>ALARMES</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n\n      <ion-list inset=\"true\" class=\"listArCond\">\n        <ion-item>\n          <ion-label>JANELAS E PORTAS</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>JANELA</ion-label>\n        </ion-item>\n\n        <ion-button color=\"danger\"  [fill]=\"com.statusJanelaComodo === false ? 'solid' : 'outline'\"  disabled #buttonJanelaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n        <ion-button color=\"success\"  [fill]=\"com.statusJanelaComodo === true ? 'solid' : 'outline'\"  disabled #buttonJanelaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n        <br>\n\n        <ion-item>\n          <ion-label>PORTA</ion-label>\n        </ion-item>\n\n\n        <ion-button color=\"danger\" [fill]=\"com.statusPortaComodo === false ? 'solid' : 'outline'\" disabled #buttonPortaOpen><ion-icon name=\"lock-open-outline\"></ion-icon>&nbsp; ABERTO</ion-button>\n        <ion-button color=\"success\" [fill]=\"com.statusPortaComodo === true ? 'solid' : 'outline'\" disabled #buttonPortaClose><ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp; FECHADO</ion-button>\n        <br>\n\n        <ion-item>\n          <ion-label>SENSOR DE PRESENÇA</ion-label>\n        </ion-item>\n\n        <ion-button color=\"danger\" [fill]=\"com.statusPresencaComodo === true ? 'solid' : 'outline'\" disabled #buttonSenPrenDetec><ion-icon name=\"eye-outline\"></ion-icon>&nbsp; DETECTADO</ion-button>\n        <ion-button color=\"success\" [fill]=\"com.statusPresencaComodo === false ? 'solid' : 'outline'\" disabled #buttonSenPrenNoDetec><ion-icon name=\"eye-off-outline\"></ion-icon>&nbsp; NÃO DETECTADO</ion-button>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>OUTRAS INFORMAÇÕES</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form [formGroup]=\"alterCm\" (ngSubmit)=\"alterCom(com._id, com.issync, com.nomeComodo)\" novalidate>\n\n        <ion-item>\n          <ion-label position=\"floating\">Novo Nome do Comodo</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o novo nome do comodo\" required=\"true\" type=\"text\" formControlName=\"nomeCom\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Esta Ativo?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"isActive\" [checked]=\"com.isActive\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Sera Sincronizado?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"issync\" [checked]=\"com.issync\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>É favorito?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"isFavorite\" [checked]=\"com.isFavorite\"></ion-toggle>\n        </ion-item>\n\n        <ion-button expand=\"full\" type=\"submit\">Alterar Comodo</ion-button>\n      </form>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"delCom(com._id, com.nomeComodo)\">Deletar Comodo</ion-button>\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"sincroCom(com._id, com.nomeComodo, com.issync)\">Sincronizar Comodo</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/funcoes/comodo-info/comodo-info-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/funcoes/comodo-info/comodo-info-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ComodoInfoPageRoutingModule */

  /***/
  function srcAppFuncoesComodoInfoComodoInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComodoInfoPageRoutingModule", function () {
      return ComodoInfoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _comodo_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comodo-info.page */
    "./src/app/funcoes/comodo-info/comodo-info.page.ts");

    var routes = [{
      path: '',
      component: _comodo_info_page__WEBPACK_IMPORTED_MODULE_3__["ComodoInfoPage"]
    }];

    var ComodoInfoPageRoutingModule = function ComodoInfoPageRoutingModule() {
      _classCallCheck(this, ComodoInfoPageRoutingModule);
    };

    ComodoInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComodoInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/funcoes/comodo-info/comodo-info.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/funcoes/comodo-info/comodo-info.module.ts ***!
    \***********************************************************/

  /*! exports provided: ComodoInfoPageModule */

  /***/
  function srcAppFuncoesComodoInfoComodoInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComodoInfoPageModule", function () {
      return ComodoInfoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _comodo_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comodo-info-routing.module */
    "./src/app/funcoes/comodo-info/comodo-info-routing.module.ts");
    /* harmony import */


    var _comodo_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comodo-info.page */
    "./src/app/funcoes/comodo-info/comodo-info.page.ts");

    var ComodoInfoPageModule = function ComodoInfoPageModule() {
      _classCallCheck(this, ComodoInfoPageModule);
    };

    ComodoInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comodo_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComodoInfoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_comodo_info_page__WEBPACK_IMPORTED_MODULE_6__["ComodoInfoPage"]]
    })], ComodoInfoPageModule);
    /***/
  },

  /***/
  "./src/app/funcoes/comodo-info/comodo-info.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/funcoes/comodo-info/comodo-info.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFuncoesComodoInfoComodoInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvY29tb2RvLWluZm8vY29tb2RvLWluZm8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/funcoes/comodo-info/comodo-info.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/funcoes/comodo-info/comodo-info.page.ts ***!
    \*********************************************************/

  /*! exports provided: ComodoInfoPage */

  /***/
  function srcAppFuncoesComodoInfoComodoInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComodoInfoPage", function () {
      return ComodoInfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_comodo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/comodo.service */
    "./src/app/services/comodo.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_storageL_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/storageL.service */
    "./src/app/services/storageL.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ComodoInfoPage = /*#__PURE__*/function () {
      //responseInsertSQLite: any = null;
      // userID: any;
      // user = null;
      // idUser = null;
      // tempAjust: any = null;
      // arCondStatus: any = null;
      // luzesStatus: any = null;
      // tomadasStatus: any = null;
      function ComodoInfoPage(toastController, auth, alertCtrl, storage, apiService, formBuilder, activatedRoute, router) {
        _classCallCheck(this, ComodoInfoPage);

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

      _createClass(ComodoInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.alterCm = this.formBuilder.group({
                      nomeCom: [''],
                      isActive: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      issync: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      isFavorite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                    this.id = this.activatedRoute.snapshot.params.id;
                    console.log(this.id); // this.user = this.auth.getUser();
                    // console.log(this.user);
                    // this.idUser = await this.storage.getIdUser();
                    // console.log(this.idUser);

                    _context.next = 5;
                    return this.storage.getToken();

                  case 5:
                    this.token = _context.sent;
                    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
                    console.log(this.token); // this.userID = this.user ? this.user.id : this.idUser[0].idUser;
                    // this.userID = '5f0a2a4fa1d84f17a891d5a9';
                    // console.log(this.token);

                    this.getByIDCom(this.id, this.token[0].token);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log(this.com);
                    console.log(this.isActiveValue, this.isSyncValue, this.isFavoriteValue);
                    this.alterCm.controls.isActive.setValue(this.isActiveValue);
                    this.alterCm.controls.issync.setValue(this.isSyncValue);
                    this.alterCm.controls.isFavorite.setValue(this.isFavoriteValue);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "alterComSQLite",
        value: function alterComSQLite(idMongo, comodo, token, nomCom) {
          var _this = this;

          this.apiService.putComodoByIDComodoMongoSQLite(idMongo, comodo, token).subscribe(function (response) {
            console.log(response);
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var error, alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(err);
                      error = err.error ? err.error.message : err.message;
                      _context3.next = 4;
                      return this.alertCtrl.create({
                        header: 'Falha em atualizar o comodo ' + nomCom + ' com o id: ' + idMongo + ' na base local',
                        message: 'Erro: ' + error,
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context3.sent;
                      _context3.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }, {
        key: "getByIDCom",
        value: function getByIDCom(idCom, token) {
          var _this2 = this;

          this.apiService.getByIDMongoDB(idCom, token).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log(response); // this.tempAjust = await response.ajustTempComodo;
                      // this.arCondStatus = await response.statusArCondiconado ? 'on' : 'off';
                      // this.luzesStatus = await response.statusLuzComodo ? 'on' : 'off';
                      // this.tomadasStatus = await response.statusTomadaComodo ? 'on' : 'off';

                      _context4.next = 3;
                      return response;

                    case 3:
                      this.com = _context4.sent;
                      _context4.next = 6;
                      return response.isActive;

                    case 6:
                      this.isActiveValue = _context4.sent;
                      _context4.next = 9;
                      return response.issync;

                    case 9:
                      this.isSyncValue = _context4.sent;
                      _context4.next = 12;
                      return response.isFavorite;

                    case 12:
                      this.isFavoriteValue = _context4.sent;

                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var error, alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log(err); // this.presentToast(err.error.message);

                      error = err.error ? err.error.message : err.message;
                      _context5.next = 4;
                      return this.alertCtrl.create({
                        header: 'Falha em buscar o comodo',
                        message: 'Erro: ' + error,
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context5.sent;
                      _context5.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          });
        }
      }, {
        key: "insertOrUpdateComSQLite",
        value: function insertOrUpdateComSQLite(idCom, comodo, token, nomCom) {
          var _this3 = this;

          this.apiService.postComodoSQLite(comodo, token).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var existTble, _iterator, _step, r;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log(response);
                      existTble = false;
                      _iterator = _createForOfIteratorHelper(response.message);
                      _context6.prev = 3;

                      _iterator.s();

                    case 5:
                      if ((_step = _iterator.n()).done) {
                        _context6.next = 13;
                        break;
                      }

                      r = _step.value;
                      console.log(r); // if(r.message.indexOf('Coluna ja Existe na base do servidor, Sincronizado com sucesso')){

                      if (!r.message.indexOf('Existe')) {
                        _context6.next = 11;
                        break;
                      }

                      existTble = true;
                      return _context6.abrupt("break", 13);

                    case 11:
                      _context6.next = 5;
                      break;

                    case 13:
                      _context6.next = 18;
                      break;

                    case 15:
                      _context6.prev = 15;
                      _context6.t0 = _context6["catch"](3);

                      _iterator.e(_context6.t0);

                    case 18:
                      _context6.prev = 18;

                      _iterator.f();

                      return _context6.finish(18);

                    case 21:
                      console.log(existTble);

                      if (existTble) {
                        this.alterComSQLite(idCom, comodo, token, nomCom);
                      }

                    case 23:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[3, 15, 18, 21]]);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var erro, errors, messages, teste, _iterator2, _step2, e, _iterator3, _step3, m, alert;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log(err);
                      erro = err.message;
                      errors = err.error.errors;
                      messages = err.error.message;
                      teste = [];
                      console.log(errors);
                      console.log(messages);

                      if (errors) {
                        _iterator2 = _createForOfIteratorHelper(errors);

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            e = _step2.value;
                            console.log(e.message);
                            teste.push(e.message);
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      }

                      if (messages) {
                        _iterator3 = _createForOfIteratorHelper(messages);

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            m = _step3.value;
                            console.log(m);
                            teste.push(m.message);
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                      }

                      teste.push(erro);
                      console.log(teste);
                      _context7.next = 13;
                      return this.alertCtrl.create({
                        header: 'Falha em sincronizar o comodo ' + nomCom + ' com o id: ' + idCom + ' na base local',
                        message: 'Erro: ' + teste,
                        buttons: ['OK']
                      });

                    case 13:
                      alert = _context7.sent;
                      _context7.next = 16;
                      return alert.present();

                    case 16:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
        }
      }, {
        key: "alterCom",
        value: function alterCom(id, isSync, nomeCom) {
          var _this4 = this;

          this.isSubmitted = true;
          console.log(this.alterCm.value);
          var comodo = {};
          var co = {};

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
          } else {
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
          this.apiService.putComodoByIDMongDB(id, comodo, this.token[0].token).subscribe(function (response) {
            console.log(response);

            _this4.getByIDCom(id, _this4.token[0].token);

            if (isSync) {
              _this4.insertOrUpdateComSQLite(id, co, _this4.token[0].token, nomeCom);
            } else {
              _this4.presentToast('Sincronização do Comodo desativada, não sincronizado');
            }
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var error, alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      error = err.error ? err.error.message : err.message;
                      _context8.next = 3;
                      return this.alertCtrl.create({
                        header: 'Falha em atualizar o comodo ' + nomeCom + ' com o id: ' + id,
                        message: 'Erro: ' + error,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context8.sent;
                      _context8.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 2000,
                      color: 'danger'
                    });

                  case 2:
                    toast = _context9.sent;
                    _context9.next = 5;
                    return toast.present();

                  case 5:
                    return _context9.abrupt("return", _context9.sent);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "rangeChanged",
        value: function rangeChanged(isSync, idCom, event, nomeCom) {
          var _this5 = this;

          console.log('teste');
          console.log(isSync);
          console.log(idCom);
          console.log(event);
          console.log(event.detail.value);

          if (event.detail.value) {
            var t = {
              ajustTempComodo: event.detail.value
            };
            console.log(t);
            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe(function (response) {
              console.log(response);

              _this5.getByIDCom(idCom, _this5.token[0].token);

              if (isSync) {
                var te = {
                  IDMongodbComodo: idCom,
                  ajustTempComodo: event.detail.value
                };

                _this5.insertOrUpdateComSQLite(idCom, te, _this5.token[0].token, nomeCom);
              } else {
                _this5.presentToast('Sincronização do Comodo desativada, não sincronizado');
              }
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        error = err.error ? err.error.message : err.message;
                        _context10.next = 3;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 3:
                        alert = _context10.sent;
                        _context10.next = 6;
                        return alert.present();

                      case 6:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            });
          } else {
            this.presentToast('Selecione uma Temperatura');
          }
        }
      }, {
        key: "changeArCondButton",
        value: function changeArCondButton(isSync, idCom, event, nomeCom) {
          var _this6 = this;

          console.log('changeArCondButton');
          console.log(isSync);
          console.log(idCom);
          console.log(event);
          console.log(event.detail.value);

          if (event.detail) {
            var value = event.detail.value;
            var statusAr = null;

            if (value === 'on') {
              statusAr = true;
            } else if (value === 'off') {
              statusAr = false;
            }

            var t = {
              statusArCondiconado: statusAr
            };
            console.log(t);
            console.log(this.token); // console.log(this.userID);

            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe(function (response) {
              console.log(response);

              _this6.getByIDCom(idCom, _this6.token[0].token);

              if (isSync) {
                var te = {
                  IDMongodbComodo: idCom,
                  statusArCondiconado: statusAr
                };

                _this6.insertOrUpdateComSQLite(idCom, te, _this6.token[0].token, nomeCom);
              } else {
                _this6.presentToast('Sincronização do Comodo desativada, não sincronizado');
              }
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        console.log(err);
                        error = err.error ? err.error.message : err.message;
                        _context11.next = 4;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 4:
                        alert = _context11.sent;
                        _context11.next = 7;
                        return alert.present();

                      case 7:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            });
          }
        }
      }, {
        key: "changeLuzesButton",
        value: function changeLuzesButton(isSync, idCom, event, nomeCom) {
          var _this7 = this;

          console.log('changeLuzesButton');
          console.log(isSync);
          console.log(idCom);
          console.log(event);
          console.log(event.detail.value);
          console.log(nomeCom);

          if (event.detail) {
            var value = event.detail.value;
            var statusLuzes = null;

            if (value === 'on') {
              statusLuzes = true;
            } else if (value === 'off') {
              statusLuzes = false;
            }

            var t = {
              statusLuzComodo: statusLuzes
            };
            console.log(t);
            console.log(this.token); // console.log(this.userID);

            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe(function (response) {
              console.log(response);

              _this7.getByIDCom(idCom, _this7.token[0].token);

              if (isSync) {
                var te = {
                  IDMongodbComodo: idCom,
                  statusLuzComodo: statusLuzes
                };

                _this7.insertOrUpdateComSQLite(idCom, te, _this7.token[0].token, nomeCom);
              } else {
                _this7.presentToast('Sincronização do Comodo desativada, não sincronizado');
              }
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        console.log(err);
                        error = err.error ? err.error.message : err.message;
                        _context12.next = 4;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 4:
                        alert = _context12.sent;
                        _context12.next = 7;
                        return alert.present();

                      case 7:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            });
          }
        }
      }, {
        key: "changeTomadasButton",
        value: function changeTomadasButton(isSync, idCom, event, nomeCom) {
          var _this8 = this;

          console.log('changeTomadasButton');
          console.log(isSync);
          console.log(idCom);
          console.log(event);
          console.log(event.detail.value);
          console.log(nomeCom);

          if (event.detail) {
            var value = event.detail.value;
            var statusTomadas = null;

            if (value === 'on') {
              statusTomadas = true;
            } else if (value === 'off') {
              statusTomadas = false;
            }

            var t = {
              statusTomadaComodo: statusTomadas
            };
            console.log(t);
            console.log(this.token); // console.log(this.userID);

            this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe(function (response) {
              console.log(response);

              _this8.getByIDCom(idCom, _this8.token[0].token);

              if (isSync) {
                var te = {
                  IDMongodbComodo: idCom,
                  statusTomadaComodo: statusTomadas
                };

                _this8.insertOrUpdateComSQLite(idCom, te, _this8.token[0].token, nomeCom);
              } else {
                _this8.presentToast('Sincronização do Comodo desativada, não sincronizado');
              }
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        console.log(err);
                        error = err.error ? err.error.message : err.message;
                        _context13.next = 4;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 4:
                        alert = _context13.sent;
                        _context13.next = 7;
                        return alert.present();

                      case 7:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            });
          }
        }
      }, {
        key: "delCom",
        value: function delCom(idCom, nomeCom) {
          var _this9 = this;

          this.apiService.deleteComodoByIDMongo(idCom, this.token[0].token).subscribe(function (response) {
            console.log(response);

            _this9.apiService.deleteComodoByIDComodoMongoSQLite(idCom, _this9.token[0].token).subscribe(function (resp) {
              console.log(resp);

              _this9.router.navigateByUrl('/members');
            }, function (erro) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        console.log(erro);
                        error = erro.error ? erro.error.message : erro.message;
                        _context14.next = 4;
                        return this.alertCtrl.create({
                          header: 'Falha em deletar o comodo ' + nomeCom + ' com o id: ' + idCom + ' na base local',
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 4:
                        alert = _context14.sent;
                        _context14.next = 7;
                        return alert.present();

                      case 7:
                        this.router.navigateByUrl('/members');

                      case 8:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));
            });
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var error, alert;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      console.log(err);
                      error = err.error ? err.error.message : err.message;
                      _context15.next = 4;
                      return this.alertCtrl.create({
                        header: 'Falha em deletar o comodo ' + nomeCom + ' com o id: ' + idCom,
                        message: 'Erro: ' + error,
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context15.sent;
                      _context15.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          });
        }
      }, {
        key: "sincroCom",
        value: function sincroCom(idCom, nomeCom, isSync) {
          if (isSync) {
            var comodo = {
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
          } else {
            this.presentToast('Sincronização desativada! Não Sincronizado');
          }
        } // te(event){
        //   console.log(event);
        // }

      }, {
        key: "errorControl",
        get: function get() {
          return this.alterCm.controls;
        }
      }]);

      return ComodoInfoPage;
    }();

    ComodoInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_6__["SecureStoreService"]
      }, {
        type: _services_comodo_service__WEBPACK_IMPORTED_MODULE_4__["ComodoService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ComodoInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comodo-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./comodo-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/comodo-info/comodo-info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./comodo-info.page.scss */
      "./src/app/funcoes/comodo-info/comodo-info.page.scss"))["default"]]
    })], ComodoInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=funcoes-comodo-info-comodo-info-module-es5.js.map
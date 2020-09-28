function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-alter-info-conta-alter-info-conta-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-info-conta/alter-info-conta.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-info-conta/alter-info-conta.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFuncoesAlterInfoContaAlterInfoContaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Alteração de Dados da Conta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Informações do Usuario</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form [formGroup]=\"alterUser\" (ngSubmit)=\"alterUsr(us.username)\" novalidate>\n\n        <ion-item>\n          <ion-label position=\"floating\">Nome do Usuario</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.nome}}\" type=\"text\" formControlName=\"nomeUsr\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Sobrenome do Usuario</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.sobrenome}}\" type=\"text\" formControlName=\"snUsr\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.username}}\" type=\"text\" formControlName=\"usernameUsr\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.email}}\" type=\"text\" formControlName=\"emailUsr\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.emailUsr.errors?.pattern\">\n          *Email invalido\n        </ion-text>\n\n        <ion-item>\n          <ion-label position=\"floating\">Celular</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"{{us.celular}}\" type=\"text\" formControlName=\"celularUsr\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.celularUsr.errors?.pattern\">\n          *Celular invalido\n        </ion-text>\n\n        <ion-item>\n          <ion-label>Esta Ativo?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"isActive\" [checked]=\"us.isActive\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Sera Sincronizado?</ion-label>\n          <ion-toggle color=\"danger\" formControlName=\"issync\" [checked]=\"us.issync\"></ion-toggle>\n        </ion-item>\n\n        <ion-button expand=\"full\" type=\"submit\">Alterar Usuario</ion-button>\n        <ion-button expand=\"full\" (click)=\"backToConfig()\">VOLTAR</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/funcoes/alter-info-conta/alter-info-conta-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/funcoes/alter-info-conta/alter-info-conta-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AlterInfoContaPageRoutingModule */

  /***/
  function srcAppFuncoesAlterInfoContaAlterInfoContaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlterInfoContaPageRoutingModule", function () {
      return AlterInfoContaPageRoutingModule;
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


    var _alter_info_conta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alter-info-conta.page */
    "./src/app/funcoes/alter-info-conta/alter-info-conta.page.ts");

    var routes = [{
      path: '',
      component: _alter_info_conta_page__WEBPACK_IMPORTED_MODULE_3__["AlterInfoContaPage"]
    }];

    var AlterInfoContaPageRoutingModule = function AlterInfoContaPageRoutingModule() {
      _classCallCheck(this, AlterInfoContaPageRoutingModule);
    };

    AlterInfoContaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlterInfoContaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/funcoes/alter-info-conta/alter-info-conta.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/funcoes/alter-info-conta/alter-info-conta.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AlterInfoContaPageModule */

  /***/
  function srcAppFuncoesAlterInfoContaAlterInfoContaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlterInfoContaPageModule", function () {
      return AlterInfoContaPageModule;
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


    var _alter_info_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alter-info-conta-routing.module */
    "./src/app/funcoes/alter-info-conta/alter-info-conta-routing.module.ts");
    /* harmony import */


    var _alter_info_conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alter-info-conta.page */
    "./src/app/funcoes/alter-info-conta/alter-info-conta.page.ts");

    var AlterInfoContaPageModule = function AlterInfoContaPageModule() {
      _classCallCheck(this, AlterInfoContaPageModule);
    };

    AlterInfoContaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alter_info_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlterInfoContaPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_alter_info_conta_page__WEBPACK_IMPORTED_MODULE_6__["AlterInfoContaPage"]]
    })], AlterInfoContaPageModule);
    /***/
  },

  /***/
  "./src/app/funcoes/alter-info-conta/alter-info-conta.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/funcoes/alter-info-conta/alter-info-conta.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFuncoesAlterInfoContaAlterInfoContaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvYWx0ZXItaW5mby1jb250YS9hbHRlci1pbmZvLWNvbnRhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/funcoes/alter-info-conta/alter-info-conta.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/funcoes/alter-info-conta/alter-info-conta.page.ts ***!
    \*******************************************************************/

  /*! exports provided: AlterInfoContaPage */

  /***/
  function srcAppFuncoesAlterInfoContaAlterInfoContaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlterInfoContaPage", function () {
      return AlterInfoContaPage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/storageL.service */
    "./src/app/services/storageL.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AlterInfoContaPage = /*#__PURE__*/function () {
      function AlterInfoContaPage(toastController, auth, alertCtrl, storage, apiService, formBuilder, activatedRoute, router) {
        _classCallCheck(this, AlterInfoContaPage);

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

      _createClass(AlterInfoContaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
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
                    _context.next = 7;
                    return this.storage.getIdUser();

                  case 7:
                    this.idUser = _context.sent;
                    console.log(this.idUser);
                    _context.next = 11;
                    return this.storage.getToken();

                  case 11:
                    this.token = _context.sent;
                    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
                    console.log(this.token);
                    this.userID = this.user ? this.user.id : this.idUser[0].idUser; // this.userID = '5f0a2a4fa1d84f17a891d5a9';
                    //console.log(this.token);

                    this.getByIDUs(this.id, this.token[0].token);

                  case 15:
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
                    console.log(this.us);
                    this.alterUser.controls.isActive.setValue(this.isActiveValue);
                    this.alterUser.controls.issync.setValue(this.isSyncValue);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "alterUsSQLite",
        value: function alterUsSQLite(idMongo, us, token, username) {
          var _this = this;

          this.apiService.updateByIDMUSQLite(idMongo, us, token).subscribe(function (response) {
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
                        header: 'Falha em atualizar o usuario ' + username + ' com o id: ' + idMongo + ' na base local',
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
        key: "getByIDUs",
        value: function getByIDUs(idUs, token) {
          var _this2 = this;

          this.apiService.getByIDMongoDB(idUs, token).subscribe(function (response) {
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
                      this.us = _context4.sent;
                      _context4.next = 6;
                      return response.isActive;

                    case 6:
                      this.isActiveValue = _context4.sent;
                      _context4.next = 9;
                      return response.issync;

                    case 9:
                      this.isSyncValue = _context4.sent;

                    case 10:
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
                        header: 'Falha em buscar o usuario',
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
        value: function insertOrUpdateComSQLite(idUs, us, token, username) {
          var _this3 = this;

          this.apiService.createUserSQLite(us).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var existTble, _iterator, _step, r;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log(response);
                      existTble = false;
                      _iterator = _createForOfIteratorHelper(response.messages);
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
                        this.alterUsSQLite(idUs, us, token, username);
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
                      messages = err.error.messages;
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
                        header: 'Falha em sincronizar o usuario ' + username + ' com o id: ' + idUs + ' na base local',
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
        key: "alterUsr",
        value: function alterUsr(username) {
          var _this4 = this;

          this.isSubmitted = true;
          console.log(this.alterUser);

          if (!this.alterUser.valid) {
            console.log('Please provide all the required values!');
            return false;
          } else {
            console.log(this.alterUser.value); // let u = {
            //   nome: this.alterUser.value.nomeUsr === '' ? this.us.nome : this.alterUser.value.nomeUsr,
            //   sobrenome: this.alterUser.value.snUsr === '' ? this.us.sobrenome : this.alterUser.value.snUsr,
            //   username: this.alterUser.value.usernameUsr === '' ? this.us.username : this.alterUser.value.usernameUsr,
            //   email: this.alterUser.value.emailUsr === '' ? this.us.email : this.alterUser.value.emailUsr,
            //   celular: this.alterUser.value.celularUsr === '' ? this.us.celular : this.alterUser.value.celularUsr,
            //   isActive: this.alterUser.value.isActive === '' ? this.us.isActive : this.alterUser.value.isActive,
            //   issync: this.alterUser.value.issync === '' ? this.us.issync : this.alterUser.value.issync
            // };

            var u = {};

            if (this.alterUser.value.nomeUsr != '') {
              var n = {
                nome: this.alterUser.value.nomeUsr
              };
              this.addElement(u, n);
            }

            if (this.alterUser.value.snUsr != '') {
              var sn = {
                sobrenome: this.alterUser.value.snUsr
              };
              this.addElement(u, sn);
            }

            if (this.alterUser.value.usernameUsr != '') {
              var un = {
                username: this.alterUser.value.usernameUsr
              };
              this.addElement(u, un);
            }

            if (this.alterUser.value.emailUsr != '') {
              var e = {
                email: this.alterUser.value.emailUsr
              };
              this.addElement(u, e);
            }

            if (this.alterUser.value.celularUsr != '') {
              var c = {
                celular: this.alterUser.value.celularUsr
              };
              this.addElement(u, c);
            }

            var as = {
              isActive: this.alterUser.value.isActive,
              issync: this.alterUser.value.issync
            };
            this.addElement(u, as);
            var u2 = {
              IDMongodbUser: this.userID,
              senha: this.us.senha
            };
            this.addElement(u2, u);
            console.log(u2);
            console.log(u);
            this.apiService.updateByIDUser(u, this.userID, this.token[0].token).subscribe(function (response) {
              console.log(response); // let u2 = {
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

              _this4.insertOrUpdateComSQLite(_this4.userID, u2, _this4.token[0].token, username);

              _this4.router.navigateByUrl('/members/smh/config');
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        console.log(err);
                        error = err.error ? err.error.message : err.message;
                        _context8.next = 4;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o usuario ' + username + ' com o id: ' + this.userID,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 4:
                        alert = _context8.sent;
                        _context8.next = 7;
                        return alert.present();

                      case 7:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            });
          }
        }
      }, {
        key: "addElement",
        value: function addElement(ElementList, element) {
          var newList = Object.assign(ElementList, element);
          return newList;
        }
      }, {
        key: "backToConfig",
        value: function backToConfig() {
          this.router.navigateByUrl('/members/smh/config');
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.alterUser.controls;
        }
      }]);

      return AlterInfoContaPage;
    }();

    AlterInfoContaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__["SecureStoreService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    AlterInfoContaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alter-info-conta',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alter-info-conta.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-info-conta/alter-info-conta.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alter-info-conta.page.scss */
      "./src/app/funcoes/alter-info-conta/alter-info-conta.page.scss"))["default"]]
    })], AlterInfoContaPage);
    /***/
  }
}]);
//# sourceMappingURL=funcoes-alter-info-conta-alter-info-conta-module-es5.js.map
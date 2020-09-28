function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfigConfigPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      CONFIGURAÇÕES\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Configurações da Conta</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form action=\"\">\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Username</ion-label>\n          <ion-input disabled value=\"{{us.username}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Nome</ion-label>\n          <ion-input disabled  value=\"{{us.nome}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Sobrenome</ion-label>\n          <ion-input disabled  value=\"{{us.sobrenome}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Email</ion-label>\n          <ion-input disabled  value=\"{{us.email}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Celular</ion-label>\n          <ion-input disabled  value=\"{{us.celular}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Ativo?</ion-label>\n          <ion-toggle color=\"danger\" disabled [checked]=\"us.isActive\"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"tertiary\">Sincronizar?</ion-label>\n          <ion-toggle color=\"danger\" disabled [checked]=\"us.issync\"></ion-toggle>\n        </ion-item>\n      </form>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"routerForAlterPasswd()\">ALTERAR SENHA</ion-button>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"routerForAlterInfoAccount()\">ALTERAR INFORMAÇÕES</ion-button>\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"sincUser(us.username)\">Sincronizar Usuario</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/config/config-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/config/config-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ConfigPageRoutingModule */

  /***/
  function srcAppConfigConfigRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPageRoutingModule", function () {
      return ConfigPageRoutingModule;
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


    var _config_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config.page */
    "./src/app/config/config.page.ts");

    var routes = [{
      path: '',
      component: _config_page__WEBPACK_IMPORTED_MODULE_3__["ConfigPage"]
    }];

    var ConfigPageRoutingModule = function ConfigPageRoutingModule() {
      _classCallCheck(this, ConfigPageRoutingModule);
    };

    ConfigPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfigPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/config/config.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/config/config.module.ts ***!
    \*****************************************/

  /*! exports provided: ConfigPageModule */

  /***/
  function srcAppConfigConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function () {
      return ConfigPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./config.page */
    "./src/app/config/config.page.ts");
    /* harmony import */


    var _config_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./config-routing.module */
    "./src/app/config/config-routing.module.ts"); //import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


    var ConfigPageModule = function ConfigPageModule() {
      _classCallCheck(this, ConfigPageModule);
    };

    ConfigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], //ExploreContainerComponentModule,
      _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]
      }]), _config_routing_module__WEBPACK_IMPORTED_MODULE_7__["ConfigPageRoutingModule"]],
      declarations: [_config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]]
    })], ConfigPageModule);
    /***/
  },

  /***/
  "./src/app/config/config.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/config/config.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigConfigPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy9jb25maWcucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/config/config.page.ts":
  /*!***************************************!*\
    !*** ./src/app/config/config.page.ts ***!
    \***************************************/

  /*! exports provided: ConfigPage */

  /***/
  function srcAppConfigConfigPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPage", function () {
      return ConfigPage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_storageL_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/storageL.service */
    "./src/app/services/storageL.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ConfigPage = /*#__PURE__*/function () {
      function ConfigPage(toastController, auth, alertCtrl, storage, apiService, router) {
        _classCallCheck(this, ConfigPage);

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

      _createClass(ConfigPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storage.getToken();

                  case 2:
                    this.token = _context.sent;
                    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
                    console.log(this.token);
                    this.user = this.auth.getUser();
                    console.log(this.user);
                    _context.next = 8;
                    return this.storage.getIdUser();

                  case 8:
                    this.idUser = _context.sent;
                    console.log(this.idUser);
                    this.userID = this.user ? this.user.id : this.idUser[0].idUser; // this.userID = '5f0a2a4fa1d84f17a891d5a9';

                    this.getUser(this.userID, this.token[0].token);

                  case 12:
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
                    _context2.next = 2;
                    return this.storage.getToken();

                  case 2:
                    this.token = _context2.sent;
                    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
                    console.log(this.token);
                    this.user = this.auth.getUser();
                    console.log(this.user);
                    _context2.next = 8;
                    return this.storage.getIdUser();

                  case 8:
                    this.idUser = _context2.sent;
                    console.log(this.idUser);
                    this.userID = this.user ? this.user.id : this.idUser[0].idUser; // this.userID = '5f0a2a4fa1d84f17a891d5a9';

                    this.getUser(this.userID, this.token[0].token);

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "alterUsSQLite",
        value: function alterUsSQLite(idMongo, user, token, username) {
          var _this = this;

          this.apiService.updateByIDMUSQLite(idMongo, user, token).subscribe(function (response) {
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
        key: "insertOrUpdateUsSQLite",
        value: function insertOrUpdateUsSQLite(idUser, user, token, username) {
          var _this2 = this;

          this.apiService.createUserSQLite(user).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var existTble, _iterator, _step, r;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log(response);
                      existTble = false;
                      _iterator = _createForOfIteratorHelper(response.messages);
                      _context4.prev = 3;

                      _iterator.s();

                    case 5:
                      if ((_step = _iterator.n()).done) {
                        _context4.next = 13;
                        break;
                      }

                      r = _step.value;
                      console.log(r); // if(r.message.indexOf('Coluna ja Existe na base do servidor, Sincronizado com sucesso')){

                      if (!r.message.indexOf('Existe')) {
                        _context4.next = 11;
                        break;
                      }

                      existTble = true;
                      return _context4.abrupt("break", 13);

                    case 11:
                      _context4.next = 5;
                      break;

                    case 13:
                      _context4.next = 18;
                      break;

                    case 15:
                      _context4.prev = 15;
                      _context4.t0 = _context4["catch"](3);

                      _iterator.e(_context4.t0);

                    case 18:
                      _context4.prev = 18;

                      _iterator.f();

                      return _context4.finish(18);

                    case 21:
                      console.log(existTble);

                      if (existTble) {
                        this.alterUsSQLite(idUser, user, token, username);
                      }

                    case 23:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[3, 15, 18, 21]]);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var erro, errors, messages, teste, _iterator2, _step2, e, _iterator3, _step3, m, alert;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
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
                      _context5.next = 13;
                      return this.alertCtrl.create({
                        header: 'Falha em sincronizar o usuario ' + username + ' com o id: ' + idUser + ' na base local',
                        message: 'Erro: ' + teste,
                        buttons: ['OK']
                      });

                    case 13:
                      alert = _context5.sent;
                      _context5.next = 16;
                      return alert.present();

                    case 16:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          });
        }
      }, {
        key: "getUser",
        value: function getUser(usrID, token) {
          var _this3 = this;

          this.apiService.getByIDMongoDB(usrID, token).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log(response);
                      this.us = response;

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var error, alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log(err);
                      error = err.error ? err.error.message : err.message;
                      _context7.next = 4;
                      return this.alertCtrl.create({
                        header: 'Falha em buscar as informações do usuario',
                        message: 'Erro: ' + error,
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context7.sent;
                      _context7.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
        }
      }, {
        key: "routerForAlterPasswd",
        value: function routerForAlterPasswd() {
          this.router.navigateByUrl('/members/smh/alter-passwd/' + this.us.username);
        }
      }, {
        key: "routerForAlterInfoAccount",
        value: function routerForAlterInfoAccount() {
          this.router.navigateByUrl('/members/smh/alter-info-conta/' + this.userID);
        }
      }, {
        key: "sincUser",
        value: function sincUser(usrname) {
          var u = {
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
      }]);

      return ConfigPage;
    }();

    ConfigPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_3__["SecureStoreService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    ConfigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-config',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./config.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./config.page.scss */
      "./src/app/config/config.page.scss"))["default"]]
    })], ConfigPage);
    /***/
  }
}]);
//# sourceMappingURL=config-config-module-es5.js.map
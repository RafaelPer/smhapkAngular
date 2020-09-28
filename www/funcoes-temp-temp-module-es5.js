function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-temp-temp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/temp/temp.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/temp/temp.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFuncoesTempTempPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>TEMPERATURA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let com of comodo\">\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Comodo: {{com.nomeComodo}}</ion-card-title>\n      <ion-card-subtitle>Informações de tempertura do comodo</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item color=\"transp\" lines=\"none\">\n        <ion-button [color]=\"com.isActive ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"com.isActive ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isActive ? 'Atvio' : 'Desativado'}}</ion-button>\n      </ion-item>\n      <ion-item color=\"transp\" lines=\"none\">\n        <ion-button [color]=\"com.issync ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"com.issync ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.issync ? 'Sincronizado' : 'Não Sincronizado'}}</ion-button>\n      </ion-item>\n      <ion-item color=\"transp\" lines=\"none\">\n        <ion-button [color]=\"com.isFavorite ? 'success' : 'dark'\" slot=\"end\" disabled><ion-icon [name]=\"com.isFavorite ? 'checkmark-circle-outline' : 'close-circle-outline'\"></ion-icon>&nbsp; {{com.isFavorite ? 'Favorito' : 'Não Favorito'}}</ion-button>\n      </ion-item>\n      <ion-list inset=\"true\" lines=\"none\">\n          \n        <ion-item>\n          <ion-label><ion-icon name=\"thermometer\" color=\"danger\"></ion-icon> Temperatura: {{com.tempComodo}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><ion-icon name=\"water\" color=\"primary\"></ion-icon> Umidade do Ar: {{com.umiComodoF}}</ion-label>\n        </ion-item>\n\n      </ion-list>\n      <!-- <ion-label>Ajustar Temperatura</ion-label>\n      <ion-range min=\"16\" max=\"30\" step=\"1\" snaps=\"true\" pin=\"true\" color=\"danger\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n        <ion-label slot=\"start\" color=\"dark\">16</ion-label>\n        \n        <ion-label slot=\"end\" color=\"dark\">30</ion-label>\n        <ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>\n      </ion-range> -->\n      <ion-item>\n        <ion-label><ion-icon slot=\"end\" name=\"thermometer-outline\" color=\"danger\"></ion-icon>&nbsp; Ajustar Temperatura</ion-label>\n        <ion-select placeholder=\"Temperatura\" okText=\"Ok\" cancelText=\"Cancelar\" (ionChange)=\"rangeChanged(com.issync, com._id, $event, com.nomeComodo)\" value=\"{{com.ajustTempComodo}}\">\n          <ion-select-option color=\"danger\" *ngFor=\"let number of [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]\">{{number}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/funcoes/temp/temp-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/funcoes/temp/temp-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: TempPageRoutingModule */

  /***/
  function srcAppFuncoesTempTempRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TempPageRoutingModule", function () {
      return TempPageRoutingModule;
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


    var _temp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./temp.page */
    "./src/app/funcoes/temp/temp.page.ts");

    var routes = [{
      path: '',
      component: _temp_page__WEBPACK_IMPORTED_MODULE_3__["TempPage"]
    }];

    var TempPageRoutingModule = function TempPageRoutingModule() {
      _classCallCheck(this, TempPageRoutingModule);
    };

    TempPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TempPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/funcoes/temp/temp.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/funcoes/temp/temp.module.ts ***!
    \*********************************************/

  /*! exports provided: TempPageModule */

  /***/
  function srcAppFuncoesTempTempModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TempPageModule", function () {
      return TempPageModule;
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


    var _temp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./temp-routing.module */
    "./src/app/funcoes/temp/temp-routing.module.ts");
    /* harmony import */


    var _temp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./temp.page */
    "./src/app/funcoes/temp/temp.page.ts");

    var TempPageModule = function TempPageModule() {
      _classCallCheck(this, TempPageModule);
    };

    TempPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _temp_routing_module__WEBPACK_IMPORTED_MODULE_5__["TempPageRoutingModule"]],
      declarations: [_temp_page__WEBPACK_IMPORTED_MODULE_6__["TempPage"]]
    })], TempPageModule);
    /***/
  },

  /***/
  "./src/app/funcoes/temp/temp.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/funcoes/temp/temp.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFuncoesTempTempPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvdGVtcC90ZW1wLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/funcoes/temp/temp.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/funcoes/temp/temp.page.ts ***!
    \*******************************************/

  /*! exports provided: TempPage */

  /***/
  function srcAppFuncoesTempTempPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TempPage", function () {
      return TempPage;
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


    var _services_comodo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/comodo.service */
    "./src/app/services/comodo.service.ts");
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

    var TempPage = /*#__PURE__*/function () {
      // tempAjust: any = null;
      // arCondStatus: any = null;
      // luzesStatus: any = null;
      // tomadasStatus: any = null;
      function TempPage(toastController, auth, alertCtrl, storage, apiService) {
        _classCallCheck(this, TempPage);

        this.toastController = toastController;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.apiService = apiService; // alterCm: FormGroup;

        this.isSubmitted = false;
        this.token = null;
        this.user = null;
        this.idUser = null;
        this.comodo = [];
      }

      _createClass(TempPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.user = this.auth.getUser();
                    console.log(this.user);
                    _context.next = 4;
                    return this.storage.getIdUser();

                  case 4:
                    this.idUser = _context.sent;
                    console.log(this.idUser);
                    _context.next = 8;
                    return this.storage.getToken();

                  case 8:
                    this.token = _context.sent;
                    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
                    console.log(this.token);
                    this.userID = this.user ? this.user.id : this.idUser[0].idUser; // this.userID = '5f0a2a4fa1d84f17a891d5a9';
                    //console.log(this.token);

                    this.getCom(this.userID, this.token[0].token);

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
                    this.user = this.auth.getUser();
                    console.log(this.user);
                    _context2.next = 4;
                    return this.storage.getIdUser();

                  case 4:
                    this.idUser = _context2.sent;
                    console.log(this.idUser);
                    _context2.next = 8;
                    return this.storage.getToken();

                  case 8:
                    this.token = _context2.sent;
                    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
                    console.log(this.token);
                    this.userID = this.user ? this.user.id : this.idUser[0].idUser; // this.userID = '5f0a2a4fa1d84f17a891d5a9';
                    //console.log(this.token);

                    this.getCom(this.userID, this.token[0].token);

                  case 12:
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
        key: "getCom",
        value: function getCom(userID, token) {
          var _this2 = this;

          this.apiService.getByUserIDMongoDB(userID, token).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log(response);
                      this.comodo = response;

                    case 2:
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
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var toast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 2000,
                      color: 'danger'
                    });

                  case 2:
                    toast = _context8.sent;
                    _context8.next = 5;
                    return toast.present();

                  case 5:
                    return _context8.abrupt("return", _context8.sent);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "rangeChanged",
        value: function rangeChanged(isSync, idCom, event, nomeCom) {
          var _this4 = this;

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

              _this4.getCom(_this4.userID, _this4.token[0].token);

              if (isSync) {
                var te = {
                  IDMongodbComodo: idCom,
                  ajustTempComodo: event.detail.value
                };

                _this4.insertOrUpdateComSQLite(idCom, te, _this4.token[0].token, nomeCom);
              } else {
                _this4.presentToast('Sincronização do Comodo desativada, não sincronizado');
              }
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var error, alert;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        error = err.error ? err.error.message : err.message;
                        _context9.next = 3;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
                          message: 'Erro: ' + error,
                          buttons: ['OK']
                        });

                      case 3:
                        alert = _context9.sent;
                        _context9.next = 6;
                        return alert.present();

                      case 6:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));
            });
          } else {
            this.presentToast('Selecione uma Temperatura');
          }
        }
      }]);

      return TempPage;
    }();

    TempPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__["SecureStoreService"]
      }, {
        type: _services_comodo_service__WEBPACK_IMPORTED_MODULE_2__["ComodoService"]
      }];
    };

    TempPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-temp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./temp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/temp/temp.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./temp.page.scss */
      "./src/app/funcoes/temp/temp.page.scss"))["default"]]
    })], TempPage);
    /***/
  }
}]);
//# sourceMappingURL=funcoes-temp-temp-module-es5.js.map
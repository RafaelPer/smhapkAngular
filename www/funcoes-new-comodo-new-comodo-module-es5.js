function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-new-comodo-new-comodo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/new-comodo/new-comodo.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/new-comodo/new-comodo.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFuncoesNewComodoNewComodoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Cadastro do Comodo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Novo Comodo</ion-card-title>\n      <ion-card-subtitle>Digite as informações do comodo</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form [formGroup]=\"comodoCreate\" (ngSubmit)=\"createCom()\" novalidate>\n        <ion-item>\n          <ion-label position=\"floating\">Nome do Comodo</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite o nome do Comodo\" required=\"true\" type=\"text\" formControlName=\"nomeCom\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.nomeCom.errors?.required\">\n          *É nescessario o nome do comodo\n        </ion-text>\n        <ion-item>\n          <ion-label>Esta Ativo?</ion-label>\n          <ion-toggle color=\"danger\" checked disabled></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>É Favorito?</ion-label>\n          <ion-toggle color=\"danger\" disabled></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Sera Sincronizado?</ion-label>\n          <ion-toggle color=\"danger\" checked disabled></ion-toggle>\n        </ion-item>\n\n        <ion-button expand=\"full\" type=\"submit\">Criar Comodo</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/funcoes/new-comodo/new-comodo-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/funcoes/new-comodo/new-comodo-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: NewComodoPageRoutingModule */

  /***/
  function srcAppFuncoesNewComodoNewComodoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewComodoPageRoutingModule", function () {
      return NewComodoPageRoutingModule;
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


    var _new_comodo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-comodo.page */
    "./src/app/funcoes/new-comodo/new-comodo.page.ts");

    var routes = [{
      path: '',
      component: _new_comodo_page__WEBPACK_IMPORTED_MODULE_3__["NewComodoPage"]
    }];

    var NewComodoPageRoutingModule = function NewComodoPageRoutingModule() {
      _classCallCheck(this, NewComodoPageRoutingModule);
    };

    NewComodoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewComodoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/funcoes/new-comodo/new-comodo.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/funcoes/new-comodo/new-comodo.module.ts ***!
    \*********************************************************/

  /*! exports provided: NewComodoPageModule */

  /***/
  function srcAppFuncoesNewComodoNewComodoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewComodoPageModule", function () {
      return NewComodoPageModule;
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


    var _new_comodo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-comodo-routing.module */
    "./src/app/funcoes/new-comodo/new-comodo-routing.module.ts");
    /* harmony import */


    var _new_comodo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-comodo.page */
    "./src/app/funcoes/new-comodo/new-comodo.page.ts");

    var NewComodoPageModule = function NewComodoPageModule() {
      _classCallCheck(this, NewComodoPageModule);
    };

    NewComodoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_comodo_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewComodoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_new_comodo_page__WEBPACK_IMPORTED_MODULE_6__["NewComodoPage"]]
    })], NewComodoPageModule);
    /***/
  },

  /***/
  "./src/app/funcoes/new-comodo/new-comodo.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/funcoes/new-comodo/new-comodo.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFuncoesNewComodoNewComodoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvbmV3LWNvbW9kby9uZXctY29tb2RvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/funcoes/new-comodo/new-comodo.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/funcoes/new-comodo/new-comodo.page.ts ***!
    \*******************************************************/

  /*! exports provided: NewComodoPage */

  /***/
  function srcAppFuncoesNewComodoNewComodoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewComodoPage", function () {
      return NewComodoPage;
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


    var _services_comodo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/comodo.service */
    "./src/app/services/comodo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NewComodoPage = /*#__PURE__*/function () {
      function NewComodoPage(toastController, auth, alertCtrl, storage, formBuilder, apiService, router) {
        _classCallCheck(this, NewComodoPage);

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

      _createClass(NewComodoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.comodoCreate = this.formBuilder.group({
                      nomeCom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                    _context.next = 3;
                    return this.storage.getToken();

                  case 3:
                    this.token = _context.sent;
                    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
                    console.log(this.token);
                    this.user = this.auth.getUser();
                    console.log(this.user);
                    _context.next = 9;
                    return this.storage.getIdUser();

                  case 9:
                    this.idUser = _context.sent;
                    console.log(this.idUser);
                    this.userID = this.user ? this.user.id : this.idUser[0].idUser; // this.userID = '5f0a2a4fa1d84f17a891d5a9';

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

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "createCom",
        value: function createCom() {
          var _this = this;

          this.isSubmitted = true;

          if (!this.comodoCreate.valid) {
            console.log('Please provide all the required values!');
            return false;
          } else {
            console.log(this.comodoCreate.value);
            var comodo = {
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
              issync: true
            };
            this.apiService.postComodoMongoDB(comodo, this.token[0].token).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log(response);
                        this.router.navigateByUrl('/members');

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var erro, errors, messages, teste, _iterator, _step, e, _iterator2, _step2, m, alert;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        console.log(err);
                        erro = err.message;
                        errors = err.error.errors;
                        messages = err.error.message;
                        teste = [];
                        console.log(errors);
                        console.log(messages);

                        if (errors) {
                          _iterator = _createForOfIteratorHelper(errors);

                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                              e = _step.value;
                              console.log(e.message);
                              teste.push(e.message);
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }
                        }

                        if (messages) {
                          _iterator2 = _createForOfIteratorHelper(messages);

                          try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                              m = _step2.value;
                              console.log(m);
                              teste.push(m.message);
                            }
                          } catch (err) {
                            _iterator2.e(err);
                          } finally {
                            _iterator2.f();
                          }
                        }

                        teste.push(erro);
                        console.log(teste); //let error = err.error ? err.error.message : err.message;

                        _context4.next = 13;
                        return this.alertCtrl.create({
                          header: 'Falha em criar o comodo',
                          message: 'Erro: ' + teste,
                          buttons: ['OK']
                        });

                      case 13:
                        alert = _context4.sent;
                        _context4.next = 16;
                        return alert.present();

                      case 16:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.comodoCreate.controls;
        }
      }]);

      return NewComodoPage;
    }();

    NewComodoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_4__["SecureStoreService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_comodo_service__WEBPACK_IMPORTED_MODULE_6__["ComodoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    NewComodoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-comodo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-comodo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/new-comodo/new-comodo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-comodo.page.scss */
      "./src/app/funcoes/new-comodo/new-comodo.page.scss"))["default"]]
    })], NewComodoPage);
    /***/
  }
}]);
//# sourceMappingURL=funcoes-new-comodo-new-comodo-module-es5.js.map
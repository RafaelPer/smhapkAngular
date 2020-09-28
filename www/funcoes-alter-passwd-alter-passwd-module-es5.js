function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcoes-alter-passwd-alter-passwd-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-passwd/alter-passwd.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-passwd/alter-passwd.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFuncoesAlterPasswdAlterPasswdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Alteração de Senha</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Alteração de Senha</ion-card-title>\n    </ion-card-header>\n      <form [formGroup]=\"alterSenha\" (ngSubmit)=\"alterPsswd()\" novalidate>\n        <ion-item>\n          <ion-label position=\"floating\">Senha Atual</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite a senha atual\" required=\"true\" type=\"password\" formControlName=\"passwdAtual\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.passwdAtual.errors?.required\">\n          *Digite a senha atual\n        </ion-text>\n\n        <ion-item>\n          <ion-label position=\"floating\">Nova Senha</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Digite a nova senha\" required=\"true\" type=\"password\" formControlName=\"passwdNew\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.passwdNew.errors?.required\">\n          *É nescessario a nova senha\n        </ion-text>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && (errorControl.passwdNew.errors?.pattern || errorControl.passwdNew.errors?.minLength || errorControl.passwdNew.errors?.maxLength)\">\n          *É nescessario que a senha tenha entre 6 a 30 caracteres, pelo menos uma letra maiuscula, uma letra minuscula, um numero e um caractere especial\n        </ion-text>\n\n        <ion-item>\n          <ion-label position=\"floating\">Confirme a Nova Senha</ion-label>\n          <ion-input  clearInput=\"true\" inputmode=\"text\" placeholder=\"Confirme a nova senha\" required=\"true\" type=\"password\" formControlName=\"passwdNewConf\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && !alterSenha.get('passwdNewConf').errors && alterSenha.hasError('passwordNotMatch') && (alterSenha.get('passwdNewConf').dirty || alterSenha.get('passwdNewConf').touched)\">\n          *A confirmação tem que ser igual a senha\n        </ion-text>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && errorControl.passwdNewConf.errors?.required\">\n          *Confirme a senha\n        </ion-text>\n        <ion-text color=\"danger\" *ngIf=\"isSubmitted && (errorControl.passwdNewConf.errors?.pattern || errorControl.passwdNewConf.errors?.minLength || errorControl.passwdNewConf.errors?.maxLength)\">\n          *É nescessario que a senha tenha entre 6 a 30 caracteres, pelo menos uma letra maiuscula, uma letra minuscula, um numero e um caractere especial\n        </ion-text>\n\n        <ion-button expand=\"full\" type=\"submit\">Alterar Senha</ion-button>\n        <ion-button expand=\"full\" (click)=\"backToConfig()\">VOLTAR</ion-button>\n      </form>\n    <ion-card-content>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/funcoes/alter-passwd/alter-passwd-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/funcoes/alter-passwd/alter-passwd-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AlterPasswdPageRoutingModule */

  /***/
  function srcAppFuncoesAlterPasswdAlterPasswdRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlterPasswdPageRoutingModule", function () {
      return AlterPasswdPageRoutingModule;
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


    var _alter_passwd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alter-passwd.page */
    "./src/app/funcoes/alter-passwd/alter-passwd.page.ts");

    var routes = [{
      path: '',
      component: _alter_passwd_page__WEBPACK_IMPORTED_MODULE_3__["AlterPasswdPage"]
    }];

    var AlterPasswdPageRoutingModule = function AlterPasswdPageRoutingModule() {
      _classCallCheck(this, AlterPasswdPageRoutingModule);
    };

    AlterPasswdPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlterPasswdPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/funcoes/alter-passwd/alter-passwd.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/funcoes/alter-passwd/alter-passwd.module.ts ***!
    \*************************************************************/

  /*! exports provided: AlterPasswdPageModule */

  /***/
  function srcAppFuncoesAlterPasswdAlterPasswdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlterPasswdPageModule", function () {
      return AlterPasswdPageModule;
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


    var _alter_passwd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alter-passwd-routing.module */
    "./src/app/funcoes/alter-passwd/alter-passwd-routing.module.ts");
    /* harmony import */


    var _alter_passwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alter-passwd.page */
    "./src/app/funcoes/alter-passwd/alter-passwd.page.ts");

    var AlterPasswdPageModule = function AlterPasswdPageModule() {
      _classCallCheck(this, AlterPasswdPageModule);
    };

    AlterPasswdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alter_passwd_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlterPasswdPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_alter_passwd_page__WEBPACK_IMPORTED_MODULE_6__["AlterPasswdPage"]]
    })], AlterPasswdPageModule);
    /***/
  },

  /***/
  "./src/app/funcoes/alter-passwd/alter-passwd.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/funcoes/alter-passwd/alter-passwd.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFuncoesAlterPasswdAlterPasswdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNvZXMvYWx0ZXItcGFzc3dkL2FsdGVyLXBhc3N3ZC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/funcoes/alter-passwd/alter-passwd.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/funcoes/alter-passwd/alter-passwd.page.ts ***!
    \***********************************************************/

  /*! exports provided: AlterPasswdPage */

  /***/
  function srcAppFuncoesAlterPasswdAlterPasswdPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlterPasswdPage", function () {
      return AlterPasswdPage;
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


    var js_sha512__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! js-sha512 */
    "./node_modules/js-sha512/src/sha512.js");
    /* harmony import */


    var js_sha512__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_storageL_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/storageL.service */
    "./src/app/services/storageL.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AlterPasswdPage = /*#__PURE__*/function () {
      function AlterPasswdPage(toastController, auth, alertCtrl, storage, apiService, formBuilder, activatedRoute, router) {
        _classCallCheck(this, AlterPasswdPage);

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
      }

      _createClass(AlterPasswdPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.alterSenha = this.formBuilder.group({
                      passwdAtual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                      passwdNew: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]],
                      passwdNewConf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]]
                    }, {
                      validator: this.matchingPasswords.bind(this)
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
                    console.log(this.token);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "alterPsswd",
        value: function alterPsswd() {
          var _this = this;

          this.isSubmitted = true;

          if (!this.alterSenha.valid) {
            console.log('Please provide all the required values!');
            return false;
          } else {
            console.log(this.alterSenha.value);
            var passwdNew = js_sha512__WEBPACK_IMPORTED_MODULE_3__["sha512"].create().update(this.alterSenha.value.passwdNew).hex();
            var passwdAtual = js_sha512__WEBPACK_IMPORTED_MODULE_3__["sha512"].create().update(this.alterSenha.value.passwdAtual).hex();
            console.log(passwdNew);
            console.log(passwdAtual);
            this.apiService.alterPasswd(this.id, passwdNew, passwdAtual, this.token[0].token).subscribe(function (response) {
              console.log(response);

              _this.router.navigateByUrl('/members/smh/config');
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var erro, errors, messages, teste, _iterator, _step, e, _iterator2, _step2, m, alert;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log(err);
                        erro = err.message;
                        errors = err.error.errors;
                        messages = err.error.messages;
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
                        console.log(teste);
                        _context2.next = 13;
                        return this.alertCtrl.create({
                          header: 'Falha em atualizar a senha do usuario o usuario',
                          message: 'Erro: ' + teste,
                          buttons: ['OK']
                        });

                      case 13:
                        alert = _context2.sent;
                        _context2.next = 16;
                        return alert.present();

                      case 16:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }
      }, {
        key: "matchingPasswords",
        value: function matchingPasswords(formGroup) {
          var _formGroup$get = formGroup.get('passwdNew'),
              password = _formGroup$get.value;

          var _formGroup$get2 = formGroup.get('passwdNewConf'),
              confirmPassword = _formGroup$get2.value;

          return password === confirmPassword ? null : {
            passwordNotMatch: true
          };
        }
      }, {
        key: "backToConfig",
        value: function backToConfig() {
          this.router.navigateByUrl('/members/smh/config');
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.alterSenha.controls;
        }
      }]);

      return AlterPasswdPage;
    }();

    AlterPasswdPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _services_storageL_service__WEBPACK_IMPORTED_MODULE_5__["SecureStoreService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    AlterPasswdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alter-passwd',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alter-passwd.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/funcoes/alter-passwd/alter-passwd.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alter-passwd.page.scss */
      "./src/app/funcoes/alter-passwd/alter-passwd.page.scss"))["default"]]
    })], AlterPasswdPage);
    /***/
  }
}]);
//# sourceMappingURL=funcoes-alter-passwd-alter-passwd-module-es5.js.map
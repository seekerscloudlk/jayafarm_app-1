function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-outst-settle-outst-settle-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/outst-settle/outst-settle.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/outst-settle/outst-settle.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersIncOutstSettleOutstSettlePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header color=\"primary\">\n    <ion-toolbar class=\"toolbar-background-md\">\n        <ion-title>\n            <ion-chip outline class=\"ion-margin-vertical chip\">\n                <ion-icon class=\"chip\" name=\"clipboard\"></ion-icon>OUTSTANDING & EXCESS\n                <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n            </ion-chip>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"ion-text-capitalize\" (click)=\"dismiss()\">Close</ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>      \n    <ion-card-header>\n        <ion-card-subtitle *ngIf=\"isOutstAvail\"> {{ outsts.length }} record(s) avilable</ion-card-subtitle>\n        <ion-card-subtitle *ngIf=\"!isOutstAvail\">No Outstanding or Excess found.. </ion-card-subtitle>\n        <ion-grid *ngIf=\"isOutstAvail\">\n                <ion-row>\n                    <ion-col>\n                        <ion-card-subtitle> Total outstanding: </ion-card-subtitle>\n                    </ion-col>\n                    <ion-col>\n                        <ion-card-title> Rs.{{ttlOutst | number : '1.2-2'}}</ion-card-title>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-card-subtitle> Current Payment: </ion-card-subtitle>\n                    </ion-col>\n                    <ion-col>\n                        Rs.{{totalPaid | number : '1.2-2'}}\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-card-subtitle> Effective Balance: </ion-card-subtitle>\n                    </ion-col>\n                    <ion-col>\n                        Rs.{{effectivePaid | number : '1.2-2'}}\n                    </ion-col>\n                </ion-row>\n                \n        </ion-grid>\n    </ion-card-header>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle> Outstanding/Excess settlements</ion-card-subtitle>\n        </ion-card-header>\n        <ion-list style=\"margin-bottom: 40px;\">\n            <ion-item-sliding *ngFor=\"let pay of oustPays; let idx = index\">\n                <ion-item class=\"list-small-amrgin\">\t\t\t\n                    <ion-label text-wrap class=\"ion-no-margin\">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size=\"2\" class=\"ion-float-left\">\n                                    <ion-text color=\"light\">\n                                        <ion-badge mode=\"ios\" class=\"list-header\" color=\"primary\">\n                                            <ion-icon class=\"chip\" name=\"clipboard\"></ion-icon> {{ pay.odrId }}\n                                        </ion-badge>\n                                    </ion-text>\n                                </ion-col>\n                                <ion-col size=\"6\" class=\"ion-float-left\">\n                                    <ion-text color=\"light\">\n                                        <p class=\"list-sub-header ion-text-right\">\n                                            Rs.{{ pay.amount }}\n                                        </p>\n                                    </ion-text>\n                                </ion-col>\n                                <ion-col size=\"2\" class=\"ion-float-right\">\n                                    <ion-badge class=\"ion-float-right\" mode=\"ios\" *ngIf=\"pay.isOutstPay\" color=\"danger\">\n                                        <ion-icon name=\"add\"></ion-icon>\n                                    </ion-badge>\n                                    <ion-badge class=\"ion-float-right\" mode=\"ios\" *ngIf=\"!pay.isOutstPay\" color=\"tertiary\">\n                                        <ion-icon name=\"remove\"></ion-icon>\n                                    </ion-badge>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-label>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\" class=\"ion-text-capitalize\" (click)=\"removeItem(idx, pay.amount)\">\n                            <ion-icon name=\"close\"></ion-icon>Remove\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-button style=\"width: 100%;\" class=\"ion-float-right\" (click)=\"confirmSettles()\">\n                        <ion-icon name=\"arrow-round-back\"></ion-icon>Confirm & Go Back\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n\n    <ion-list style=\"margin-bottom: 40px;\">\n        <ion-item background=\"dark\" *ngFor=\"let outst of outsts\" class=\"list-small-amrgin\" (click)=\"openOutstMore(outst)\">\t\t\t\n            <ion-label text-wrap class=\"ion-no-margin\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"2\" class=\"ion-float-left\">\n                            <ion-text color=\"light\">\n                                <ion-badge mode=\"ios\" class=\"list-header\" color=\"primary\">\n                                    <ion-icon class=\"chip\" name=\"clipboard\"></ion-icon> {{ outst.odr_id }}\n                                </ion-badge>\n                            </ion-text>\n                        </ion-col>\n                        <ion-col size=\"6\" class=\"ion-float-left\">\n                            <ion-text color=\"light\">\n                                <p class=\"list-sub-header\">\n                                    <ion-icon name=\"calendar\"></ion-icon>\n                                    {{ outst.odr_datetime }}\n                                </p>\n                            </ion-text>\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"ion-float-right\">\n                            <ion-badge class=\"ion-float-right\" mode=\"ios\" *ngIf=\"outst.isOutst\" color=\"danger\">\n                                <ion-icon name=\"wallet\"></ion-icon>\n                            </ion-badge>\n                            <ion-badge class=\"ion-float-right\" mode=\"ios\" *ngIf=\"!outst.isOutst\" color=\"tertiary\">\n                                <ion-icon name=\"wallet\"></ion-icon>\n                            </ion-badge>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\"><b>Total</b></ion-col>\n                        <ion-col class=\"ion-float-left\"><b>Paid Amount</b></ion-col>\n                        <ion-col class=\"ion-float-left\"><b>Out/Exc</b></ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">{{ outst.odr_amount }}</ion-col>\n                        <ion-col class=\"ion-float-left\">{{ outst.odr_paid_amount }}</ion-col>\n                        <ion-col class=\"ion-float-left\">{{ outst.out }}</ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/members/inc/outst-settle/outst-settle-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/members/inc/outst-settle/outst-settle-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: OutstSettlePageRoutingModule */

  /***/
  function srcAppMembersIncOutstSettleOutstSettleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutstSettlePageRoutingModule", function () {
      return OutstSettlePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _outst_settle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./outst-settle.page */
    "./src/app/members/inc/outst-settle/outst-settle.page.ts");

    var routes = [{
      path: '',
      component: _outst_settle_page__WEBPACK_IMPORTED_MODULE_3__["OutstSettlePage"]
    }];

    var OutstSettlePageRoutingModule = function OutstSettlePageRoutingModule() {
      _classCallCheck(this, OutstSettlePageRoutingModule);
    };

    OutstSettlePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OutstSettlePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/members/inc/outst-settle/outst-settle.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/members/inc/outst-settle/outst-settle.module.ts ***!
    \*****************************************************************/

  /*! exports provided: OutstSettlePageModule */

  /***/
  function srcAppMembersIncOutstSettleOutstSettleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutstSettlePageModule", function () {
      return OutstSettlePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _outst_settle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./outst-settle-routing.module */
    "./src/app/members/inc/outst-settle/outst-settle-routing.module.ts");
    /* harmony import */


    var _outst_settle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./outst-settle.page */
    "./src/app/members/inc/outst-settle/outst-settle.page.ts");
    /* harmony import */


    var _outst_more_outst_more_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../outst-more/outst-more.module */
    "./src/app/members/inc/outst-more/outst-more.module.ts");

    var OutstSettlePageModule = function OutstSettlePageModule() {
      _classCallCheck(this, OutstSettlePageModule);
    };

    OutstSettlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _outst_settle_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutstSettlePageRoutingModule"], _outst_more_outst_more_module__WEBPACK_IMPORTED_MODULE_7__["OutstMorePageModule"]],
      declarations: [_outst_settle_page__WEBPACK_IMPORTED_MODULE_6__["OutstSettlePage"]]
    })], OutstSettlePageModule);
    /***/
  },

  /***/
  "./src/app/members/inc/outst-settle/outst-settle.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/members/inc/outst-settle/outst-settle.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersIncOutstSettleOutstSettlePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvaW5jL291dHN0LXNldHRsZS9vdXRzdC1zZXR0bGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/members/inc/outst-settle/outst-settle.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/members/inc/outst-settle/outst-settle.page.ts ***!
    \***************************************************************/

  /*! exports provided: OutstSettlePage */

  /***/
  function srcAppMembersIncOutstSettleOutstSettlePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutstSettlePage", function () {
      return OutstSettlePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _outst_more_outst_more_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../outst-more/outst-more.page */
    "./src/app/members/inc/outst-more/outst-more.page.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var OutstSettlePage = /*#__PURE__*/function () {
      function OutstSettlePage(modalController, navParams, authService) {
        _classCallCheck(this, OutstSettlePage);

        this.modalController = modalController;
        this.navParams = navParams;
        this.authService = authService;
        this.isOutstAvail = false;
        this.ttlOutst = 0;
        this.oustPays = [];
        this.effectivePaid = 0;
        this.outsts = navParams.get('outsts');
        this.totalPaid = Number(navParams.get('totalPaid'));
        this.ttlOutst = navParams.get('ttlOutst');
        console.log(this.outsts);
      }

      _createClass(OutstSettlePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isOutstAvail = this.outsts.length > 0 ? true : false;
          this.effectivePaid = this.totalPaid;
          this.getTotalOutst();
        }
      }, {
        key: "removeItem",
        value: function removeItem(idx, amount) {
          this.oustPays.splice(idx, 1);
          this.calcEffectivePaid(amount, true);
        }
      }, {
        key: "confirmSettles",
        value: function confirmSettles() {
          if (this.oustPays.length < 1) {
            this.authService.showToast("<b>Please add atleast one settlemnt record and proceed.. <ion-icon name='information-circle-outline'></ion-icon></b>");
          } else {
            this.modalController.dismiss({
              settlements: this.oustPays
            });
          }
        }
      }, {
        key: "getTotalOutst",
        value: function getTotalOutst() {
          var _this = this;

          var ttlOutst = 0;
          this.outsts.forEach(function (outst, index) {
            console.log(index);
            _this.outsts[index].isOutst = Number(_this.outsts[index].isOutst) == 1 ? true : false;
            ttlOutst += Number(outst.out);
          });
        }
      }, {
        key: "openOutstMore",
        value: function openOutstMore(out) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal, ret, pay;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _outst_more_outst_more_page__WEBPACK_IMPORTED_MODULE_3__["OutstMorePage"],
                      componentProps: {
                        outst: out,
                        currPay: this.totalPaid,
                        effectivePaid: this.effectivePaid
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.present();
                    _context.next = 6;
                    return modal.onWillDismiss();

                  case 6:
                    ret = _context.sent;
                    pay = ret.data.payment;

                    if (pay) {
                      if (this.oustPays.some(function (el) {
                        return el.odrId === pay.odrId;
                      })) {
                        this.authService.showToast("<b>The record already exists in the settlments list.. <ion-icon name='information-circle-outline'></ion-icon>");
                      } else {
                        console.log(pay);
                        this.oustPays.push(pay);
                        this.calcEffectivePaid(pay.amount, false);
                      }
                    }

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "calcEffectivePaid",
        value: function calcEffectivePaid(pay, isAdd) {
          if (isAdd) {
            this.effectivePaid = this.effectivePaid * 1 + pay * 1;
          } else {
            this.effectivePaid = this.effectivePaid * 1 - pay * 1;
          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      }]);

      return OutstSettlePage;
    }();

    OutstSettlePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    OutstSettlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-outst-settle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./outst-settle.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/outst-settle/outst-settle.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./outst-settle.page.scss */
      "./src/app/members/inc/outst-settle/outst-settle.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], OutstSettlePage);
    /***/
  }
}]);
//# sourceMappingURL=default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-outst-settle-outst-settle-module-es5.js.map
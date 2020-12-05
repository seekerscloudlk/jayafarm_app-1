function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-outst-more-outst-more-module~i~e4f143a4"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/outst-more/outst-more.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/outst-more/outst-more.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersIncOutstMoreOutstMorePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header color=\"primary\">\n    <ion-toolbar class=\"toolbar-background-md\">\n        <ion-title>\n            <ion-chip outline class=\"ion-margin-vertical chip\">\n            <ion-icon class=\"chip\" name=\"clipboard\"></ion-icon>OUT/EXC - PAYMENTS \n            <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n            </ion-chip>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"ion-text-capitalize\" (click)=\"dismiss()\">Close</ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>    \n    <ion-card>  \n    <ion-list style=\"margin-bottom: 40px;\">\n        <ion-card-header>\n            <ion-card-title> Base Invoice #: {{outst.odr_id}}</ion-card-title>\n            <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <ion-card-subtitle> Bill Amount: </ion-card-subtitle>\n                        </ion-col>\n                        <ion-col>Rs.{{outst.odr_amount | number : '1.2-2'}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-card-subtitle> Out/Exc Amount: </ion-card-subtitle>\n                        </ion-col>\n                        <ion-col>\n                            <ion-card-title> Rs.{{outst.out | number : '1.2-2'}}</ion-card-title>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-card-subtitle> Current Payment: </ion-card-subtitle>\n                        </ion-col>\n                        <ion-col>\n                            Rs.{{currPay | number : '1.2-2'}}\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-card-subtitle> Effective Payment: </ion-card-subtitle>\n                        </ion-col>\n                        <ion-col>\n                            Rs.{{effectivePaid | number : '1.2-2'}}\n                        </ion-col>\n                    </ion-row>\n            </ion-grid>\n            <ion-item-divider></ion-item-divider>\n            <ion-item>\n                <ion-grid >\n                    <ion-row >\n                        <ion-col size=\"6\" style=\"padding-top: 15px;\">\n                            <b *ngIf=\"isOutst\" class=\"ion-float-left\"> Make Payment: </b>\n                            <b *ngIf=\"!isOutst\" class=\"ion-float-left\"> Bring Forward: </b>\n                        </ion-col>\n                        <ion-col size=\"2\">\n                            <p style=\"margin-top: 10px\">Rs.</p>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <ion-input [readonly]=\"!isOutst\" type=\"number\" (keyup)=\"chkPayBalence($event)\" \n                            placeholder=\"Enter Here..\" [(ngModel)]=\"outstPayment.amount\"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                \n                    <ion-row>\n                        <ion-col size=\"12\">    \n                            <ion-button style=\"width: 100%;\" class=\"ion-float-right\" (click)=\"payForOdr()\"><ion-icon name=\"arrow-round-back\"></ion-icon>Confirm & Go Back</ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n            <ion-card-subtitle *ngIf=\"isPayAvali\"> {{ payments.length }} payment record(s) avilable</ion-card-subtitle>\n        </ion-card-header>\n            \n            <ion-card-subtitle *ngIf=\"!isPayAvali\" class=\"ion-margin-start\">No payment records available.. </ion-card-subtitle>\n            <ion-item background=\"dark\" *ngFor=\"let payment of payments\" class=\"list-small-amrgin\">\t\t\t\n                \n                <!-- <ion-item> -->\n                <ion-label text-wrap class=\"ion-no-margin\">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col class=\"ion-float-left\">\n                                <ion-text color=\"light\">\n                                    <ion-badge mode=\"ios\" class=\"list-header\" color=\"primary\">\n                                        <ion-icon class=\"chip\" name=\"calendar\"></ion-icon> {{ payment.paid_date }}\n                                    </ion-badge>\n                                </ion-text>\n                            </ion-col>\n                            <ion-col  class=\"ion-float-right\">\n                                <ion-text color=\"light\" class=\"ion-text-right\">\n                                    <p class=\"list-sub-header\">\n                                        Rs.{{ payment.paid_amount }}\n                                    </p>\n                                </ion-text>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-label>\n                <!-- </ion-item> -->\n            </ion-item>\n        </ion-list>\n    </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/members/inc/outst-more/outst-more-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/members/inc/outst-more/outst-more-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: OutstMorePageRoutingModule */

  /***/
  function srcAppMembersIncOutstMoreOutstMoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutstMorePageRoutingModule", function () {
      return OutstMorePageRoutingModule;
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


    var _outst_more_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./outst-more.page */
    "./src/app/members/inc/outst-more/outst-more.page.ts");

    var routes = [{
      path: '',
      component: _outst_more_page__WEBPACK_IMPORTED_MODULE_3__["OutstMorePage"]
    }];

    var OutstMorePageRoutingModule = function OutstMorePageRoutingModule() {
      _classCallCheck(this, OutstMorePageRoutingModule);
    };

    OutstMorePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OutstMorePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/members/inc/outst-more/outst-more.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/members/inc/outst-more/outst-more.module.ts ***!
    \*************************************************************/

  /*! exports provided: OutstMorePageModule */

  /***/
  function srcAppMembersIncOutstMoreOutstMoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutstMorePageModule", function () {
      return OutstMorePageModule;
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


    var _outst_more_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./outst-more-routing.module */
    "./src/app/members/inc/outst-more/outst-more-routing.module.ts");
    /* harmony import */


    var _outst_more_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./outst-more.page */
    "./src/app/members/inc/outst-more/outst-more.page.ts");

    var OutstMorePageModule = function OutstMorePageModule() {
      _classCallCheck(this, OutstMorePageModule);
    };

    OutstMorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _outst_more_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutstMorePageRoutingModule"]],
      declarations: [_outst_more_page__WEBPACK_IMPORTED_MODULE_6__["OutstMorePage"]]
    })], OutstMorePageModule);
    /***/
  },

  /***/
  "./src/app/members/inc/outst-more/outst-more.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/members/inc/outst-more/outst-more.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersIncOutstMoreOutstMorePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvaW5jL291dHN0LW1vcmUvb3V0c3QtbW9yZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/members/inc/outst-more/outst-more.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/members/inc/outst-more/outst-more.page.ts ***!
    \***********************************************************/

  /*! exports provided: OutstMorePage */

  /***/
  function srcAppMembersIncOutstMoreOutstMorePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutstMorePage", function () {
      return OutstMorePage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var OutstMorePage =
    /*#__PURE__*/
    function () {
      function OutstMorePage(modalController, navParams, authService, storage, http) {
        _classCallCheck(this, OutstMorePage);

        this.modalController = modalController;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.payments = [];
        this.currPay = 0;
        this.effectivePaid = 0;
        this.isPayAvali = false;
        this.outstPayment = {};
        this.submitting = false;
        this.outst = this.navParams.get('outst');
        this.currPay = this.navParams.get('currPay');
        this.effectivePaid = this.navParams.get('effectivePaid');
        this.isOutst = this.outst.isOutst;
        this.outstPayment.odrId = this.outst.odr_id;
        this.outstPayment.isOutstPay = this.outst.isOutst;
      }

      _createClass(OutstMorePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPayedHistoryByOrder();
          this.setMaxOutstPayment();
          this.currPay = this.currPay ? this.currPay : 0;
          this.effectivePaid = this.effectivePaid ? this.effectivePaid : 0;
        }
      }, {
        key: "payForOdr",
        value: function payForOdr() {
          if (!this.outstPayment.amount || this.outstPayment.amount == null || this.outstPayment.amount <= 0 && this.outstPayment.isOutstPay === true) {
            this.authService.showToast("<b>Please enter a valid payment amount.. <ion-icon name='information-circle-outline'></ion-icon></b>");
          } else {
            this.modalController.dismiss({
              payment: this.outstPayment
            });
          }
        }
      }, {
        key: "getPayedHistoryByOrder",
        value: function getPayedHistoryByOrder() {
          var _this = this;

          if (!navigator.onLine) this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
          var url = this.storage.svr_url + "OrderCtrl/getPayedHistoryByOrder/" + this.outst.odr_id;
          this.submitting = true;
          this.http.get(url).subscribe(function (payments) {
            console.log(payments);

            if (payments) {
              _this.payments = payments;
              _this.isPayAvali = _this.payments.length > 0 ? true : false;
            }
          });
          this.submitting = false;
        }
      }, {
        key: "chkPayBalence",
        value: function chkPayBalence(ev) {
          console.log(this.effectivePaid + "<" + ev.target.value);

          if (this.effectivePaid * 1 < ev.target.value * 1) {
            this.authService.showToast("<b>The effective payment amount is insufficient.. <ion-icon name='information-circle-outline'></ion-icon></b>");
            ev.target.value = null;
            this.setMaxOutstPayment();
          }

          console.log(ev.target.value + " > " + this.outst.out);

          if (ev.target.value * 1 > this.outst.out * 1) {
            this.authService.showToast("<b>The value you entered is larger than the outstanding amount.. <ion-icon name='information-circle-outline'></ion-icon></b>");
            ev.target.value = null;
            this.setMaxOutstPayment();
          }
        }
      }, {
        key: "setMaxOutstPayment",
        value: function setMaxOutstPayment() {
          if (this.isOutst) {
            if (this.outst.out <= this.effectivePaid) {
              this.outstPayment.amount = this.outst.out;
            } else {
              this.outstPayment.amount = this.effectivePaid;
            }
          } else {
            this.outstPayment.amount = this.outst.out;
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

      return OutstMorePage;
    }();

    OutstMorePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    OutstMorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-outst-more',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./outst-more.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/outst-more/outst-more.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./outst-more.page.scss */
      "./src/app/members/inc/outst-more/outst-more.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], OutstMorePage);
    /***/
  }
}]);
//# sourceMappingURL=default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-outst-more-outst-more-module~i~e4f143a4-es5.js.map
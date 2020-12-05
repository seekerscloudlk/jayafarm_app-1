function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~inc-add-order-add-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/add-order/add-order.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/add-order/add-order.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersIncAddOrderAddOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header color=\"primary\">\n    <ion-toolbar class=\"toolbar-background-md\">\n      <ion-title>\n        <ion-chip outline class=\"ion-margin-vertical chip\">\n          <ion-icon class=\"chip\" name=\"clipboard\"></ion-icon>ORDER\n          <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n        </ion-chip>\n        <ion-chip color=\"light\" class=\"chip-notice\">   \n            <ion-icon name=\"bicycle\" color=\"success\" ></ion-icon>      \n                <h5 mode=\"ios\"> {{curTrip.tripId}} </h5>\n          </ion-chip>\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button class=\"ion-text-capitalize\" (click)=\"dismiss()\">Close</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content style=\"padding-bottom: 40px;\">\n        <ion-card-header>\n            <ion-button (click)=\"addReturn()\"><ion-icon name=\"add\"></ion-icon>Return</ion-button>\n            <ion-button color=\"primary\" (click)=\"openHistory()\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon>Order History</ion-button>\n            <ion-card-title>Add Order </ion-card-title>\n            <ion-card-subtitle>{{customer.cust_name}} | {{customer.is_vat}}</ion-card-subtitle>\n            <ion-card-subtitle>{{customer.address_line1}}, {{customer.address_line2}}, {{customer.address_line3}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-list >   \n            <ion-item-divider class=\"ion-margin-remove\"></ion-item-divider>         \n            <ion-item-sliding *ngFor=\"let odrItem of currOrder.order_items; let idx = index\">\n\n                <ion-item>\t\n                    <div class=\"item-card\">\n                        <ion-select slot=\"start\"  mode=\"ios\" placeholder=\"Select Item\" \n                        [(ngModel)]=\"odrItem.item_id\" (ionChange)=\"calcPrice(odrItem.item_id)\" (ionChange)=\"toggleUpdateItemList(odrItem.item_id)\" style=\"max-width: 100%;\">\n                            \n                            <ion-select-option *ngFor=\"let tripItem of curTrip.tripItems\" value=\"{{tripItem.itemId}}\"\n                            [disabled]=\"tripItem.isSelected || tripItem.balanceQty == 0\">\n                                {{tripItem.itemName}} | {{tripItem.balanceQty}}{{tripItem.itemUnitName}}\n                            </ion-select-option>\n\n                        </ion-select>\n                        <ion-item>\n                            <ion-input type=\"number\" [(ngModel)]=\"odrItem.price_sold\" placeholder=\"Selling Price\"></ion-input>\n                            <ion-input type=\"number\" (keyup)=\"chkItemBalence($event, odrItem.item_id)\" \n                            (blur)=\"finalizeItem($event)\" (blur)=setInvoicePaidAuto($event) placeholder=\"Qty\" [(ngModel)]=\"odrItem.qty\"></ion-input>\n                            <div text-right>{{odrItem.qty*odrItem.price_sold | number : '1.2-2'}}</div>\n                        </ion-item>\n                    </div>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\" class=\"ion-text-capitalize\" (click)=\"removeItem(odrItem)\"  [class.disable-btn]=\"submitting\">\n                            <ion-icon name=\"close\"></ion-icon>Remove\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n        <ion-item style=\"color: #3171e0;\" (click)=\"addItem()\">\n            <ion-icon name=\"add\" color=\"primary\"></ion-icon>Add new\n        </ion-item>\n        <ion-item >\n            <b>Total Payed Amount </b>\n            <ion-input type=\"number\" [(ngModel)]=\"currOrder.odr_paid_amount\" (keyup)=\"setEffectiveBalance($event)\"  class=\"ion-text-right\" placeholder=\"Enter Here..\"></ion-input>\n        </ion-item>\n        <ion-item >\n            <ion-textarea auto-grow=\"true\" placeholder=\"Remarks..\" [(ngModel)]=\"currOrder.odr_remark\"></ion-textarea>\n        </ion-item>\n            \n        <ion-card>\n            <ion-card-header>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"10\">\n                            <ion-card-title>Outstanding/Excess Settlements</ion-card-title>\n                        </ion-col>\n                        <ion-col size=\"2\">\n                            <ion-button color=\"primary\" (click)=\"outstSettle()\"><ion-icon name=\"add\"></ion-icon></ion-button>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-card-subtitle> Effective Paid Amount: </ion-card-subtitle>\n                        </ion-col>\n                        <ion-col>\n                            Rs.{{effectivePaid | number : '1.2-2'}}\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-card-subtitle> Tot. Out/Exc Deduct: </ion-card-subtitle>\n                        </ion-col>\n                        <ion-col>\n                            Rs.{{outstDeduct | number : '1.2-2'}}\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-header>\n            <ion-list style=\"margin-bottom: 40px;\">\n                <ion-item-sliding *ngFor=\"let pay of outstSettles; let idx = index\">\n                    <ion-item class=\"list-small-amrgin\">\t\t\t\n                        <ion-label text-wrap class=\"ion-no-margin\">\n                            <ion-grid>\n                                <ion-row>\n                                    <ion-col size=\"2\" class=\"ion-float-left\">\n                                        <ion-text color=\"light\">\n                                            <ion-badge mode=\"ios\" class=\"list-header\" color=\"primary\">\n                                                <ion-icon class=\"chip\" name=\"clipboard\"></ion-icon> {{ pay.odrId }}\n                                            </ion-badge>\n                                        </ion-text>\n                                    </ion-col>\n                                    <ion-col size=\"6\" class=\"ion-float-left\">\n                                        <ion-text color=\"light\">\n                                            <p class=\"list-sub-header ion-text-right\">\n                                                Rs.{{ pay.amount }}\n                                            </p>\n                                        </ion-text>\n                                    </ion-col>\n                                    <ion-col size=\"2\" class=\"ion-float-right\">\n                                        <ion-badge class=\"ion-float-right\" mode=\"ios\" *ngIf=\"pay.isOutstPay\" color=\"danger\">\n                                            <ion-icon name=\"add\"></ion-icon>\n                                        </ion-badge>\n                                        <ion-badge class=\"ion-float-right\" mode=\"ios\" *ngIf=\"!pay.isOutstPay\" color=\"tertiary\">\n                                            <ion-icon name=\"remove\"></ion-icon>\n                                        </ion-badge>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option color=\"danger\" class=\"ion-text-capitalize\" (click)=\"removeSettlePay(idx, pay.amount)\">\n                                <ion-icon name=\"close\"></ion-icon>Remove\n                        </ion-item-option>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-list>\n        </ion-card>\n\n        <ion-card style=\"margin-bottom: 40px;\">\n            <ion-card-header>\n                <ion-button class=\"ion-margin\" (click)=\"processOrder()\" mode=\"ios\" slots=\"start\" expand=\"block\" type=\"submit\" [disabled]=\"!isOrdeValid\">Refresh Invoice</ion-button>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-card-title>Invoice Preview</ion-card-title>\n                            <ion-card-subtitle>{{customer.cust_name}}</ion-card-subtitle>\n                            <p>{{customer.address_line1}}, {{customer.address_line2}}, {{customer.address_line3}}</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">\n                            <div>Invoice Date</div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div> {{currOrder.odr_datetime}} </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">\n                            <div>Sales Rep</div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div> {{rep.repFname}} {{rep.repLname}}</div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-item>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col class=\"ion-float-left\">\n                                <div><h5><b>Item | Price</b></h5></div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-left\">\n                                <div><h5><b>Qty</b></h5></div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <div class=\"ion-text-right\"> <h5><b>Amount</b></h5> </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-item>\n                <ion-item *ngFor=\"let item of currOrder.order_items\">\n                    <ion-grid *ngIf=\"item.qty\">\n                        <div style=\"margin-left: 5px;\"><h3><b>{{item.item_name}}</b></h3></div>\n                        <ion-row>\n                            <ion-col class=\"ion-float-left\">\n                                <div>Rs.{{item.price_sold | number : '1.2-2'}}</div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-left\">\n                                <div>X {{item.qty}}</div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <div class=\"ion-text-right\">\n                                    Rs.{{item.price_sold*item.qty | number : '1.2-2'}}\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-item>\n                <ion-item>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col class=\"ion-float-left\">\n                                <div><h5><b>Total Amount</b></h5></div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <div class=\"ion-text-right\">\n                                    <h5><b>Rs.{{currOrder.odr_amount-currOrder.vat_amount | number : '1.2-2'}}</b></h5>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-float-left\">\n                                <div><h5><b>VAT</b></h5></div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <div class=\"ion-text-right\">\n                                    <h5><b>Rs.{{currOrder.vat_amount | number : '1.2-2'}}</b></h5>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-float-left\">\n                                <div><h5><b>Tot. Bill Amount</b></h5></div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <div class=\"ion-text-right\">\n                                    <h5><b>Rs.{{currOrder.odr_amount | number : '1.2-2'}}</b></h5>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-float-left\">\n                                <div><h5><b>Paid Amount</b></h5></div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <div class=\"ion-text-right\">\n                                    <h5><b>Rs.{{currOrder.odr_paid_amount | number : '1.2-2'}}</b></h5>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row style=\"background-color: rgb(107, 107, 107); color: #fff;\">\n                            <ion-col class=\"ion-float-left\">\n                                <div><h5><b>Tot. Out/Exc Deduction</b></h5></div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <div class=\"ion-text-right\">\n                                    <h5><b>Rs.{{outstDeduct | number : '1.2-2'}}</b></h5>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row style=\"background-color: rgb(42, 42, 42); color: #fff;\">\n                            <ion-col class=\"ion-float-left\">\n                                <div><h5><b>Effective Paid Amount</b></h5></div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <div class=\"ion-text-right\">\n                                    <h5><b>Rs.{{effectivePaid | number : '1.2-2'}}</b></h5>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row style=\"background-color: rgb(5, 5, 5); color: #fff;\">\n                            <ion-col class=\"ion-float-left\">\n                                <div><h5><b>Invoice Outst.</b></h5></div>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <div class=\"ion-text-right\">\n                                    <h5><b>Rs.{{tempOutstanding | number : '1.2-2'}}</b></h5>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        \n                    </ion-grid>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-button class=\"ion-margin\" [hidden]=\"!currOrder.isWorking\" (click)=\"submitOrder()\" mode=\"ios\" slots=\"start\" \n        expand=\"block\" [disabled]=\"!isOrdeValid\">Print Customer Copy</ion-button>\n        <ion-button class=\"ion-margin\" [hidden]=\"currOrder.isWorking\" (click)=\"printInvoice(false)\" mode=\"ios\" slots=\"start\" \n        expand=\"block\" [disabled]=\"!isOrdeValid\">Print Rep Copy</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/members/inc/add-order/add-order-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/members/inc/add-order/add-order-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddOrderPageRoutingModule */

  /***/
  function srcAppMembersIncAddOrderAddOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOrderPageRoutingModule", function () {
      return AddOrderPageRoutingModule;
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


    var _add_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-order.page */
    "./src/app/members/inc/add-order/add-order.page.ts");

    var routes = [{
      path: '',
      component: _add_order_page__WEBPACK_IMPORTED_MODULE_3__["AddOrderPage"]
    }];

    var AddOrderPageRoutingModule = function AddOrderPageRoutingModule() {
      _classCallCheck(this, AddOrderPageRoutingModule);
    };

    AddOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddOrderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/members/inc/add-order/add-order.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/members/inc/add-order/add-order.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddOrderPageModule */

  /***/
  function srcAppMembersIncAddOrderAddOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOrderPageModule", function () {
      return AddOrderPageModule;
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


    var _add_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-order-routing.module */
    "./src/app/members/inc/add-order/add-order-routing.module.ts");
    /* harmony import */


    var _add_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-order.page */
    "./src/app/members/inc/add-order/add-order.page.ts");
    /* harmony import */


    var _return_return_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../return/return.module */
    "./src/app/members/inc/return/return.module.ts");
    /* harmony import */


    var _order_history_order_history_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../order-history/order-history.module */
    "./src/app/members/inc/order-history/order-history.module.ts");
    /* harmony import */


    var _outst_settle_outst_settle_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../outst-settle/outst-settle.module */
    "./src/app/members/inc/outst-settle/outst-settle.module.ts");

    var AddOrderPageModule = function AddOrderPageModule() {
      _classCallCheck(this, AddOrderPageModule);
    };

    AddOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddOrderPageRoutingModule"], _return_return_module__WEBPACK_IMPORTED_MODULE_7__["ReturnPageModule"], _order_history_order_history_module__WEBPACK_IMPORTED_MODULE_8__["OrderHistoryPageModule"], _outst_settle_outst_settle_module__WEBPACK_IMPORTED_MODULE_9__["OutstSettlePageModule"]],
      declarations: [_add_order_page__WEBPACK_IMPORTED_MODULE_6__["AddOrderPage"]]
    })], AddOrderPageModule);
    /***/
  },

  /***/
  "./src/app/members/inc/add-order/add-order.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/members/inc/add-order/add-order.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersIncAddOrderAddOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvaW5jL2FkZC1vcmRlci9hZGQtb3JkZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/members/inc/add-order/add-order.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/members/inc/add-order/add-order.page.ts ***!
    \*********************************************************/

  /*! exports provided: AddOrderPage */

  /***/
  function srcAppMembersIncAddOrderAddOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOrderPage", function () {
      return AddOrderPage;
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


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _return_return_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../return/return.page */
    "./src/app/members/inc/return/return.page.ts");
    /* harmony import */


    var _order_history_order_history_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../order-history/order-history.page */
    "./src/app/members/inc/order-history/order-history.page.ts");
    /* harmony import */


    var _outst_settle_outst_settle_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../outst-settle/outst-settle.page */
    "./src/app/members/inc/outst-settle/outst-settle.page.ts");

    var AddOrderPage =
    /*#__PURE__*/
    function () {
      function AddOrderPage(modalController, authService, http, storage, plt, alertController, datepipe, navParams) {
        _classCallCheck(this, AddOrderPage);

        this.modalController = modalController;
        this.authService = authService;
        this.http = http;
        this.storage = storage;
        this.plt = plt;
        this.alertController = alertController;
        this.datepipe = datepipe;
        this.navParams = navParams;
        this.currOrder = {};
        this.curTrip = {};
        this.selectList = [];
        this.isOrdeValid = true;
        this.tempOutstanding = 0;
        this.outsts = [];
        this.outstSettles = [];
        this.effectivePaid = 0;
        this.outstDeduct = 0;
        this.customer = this.navParams.get('customer'); ////// this.currTripId = this.navParams.get('tripId');
        // this.repId = this.navParams.get('repId');

        this.rep = this.navParams.get('rep'); // this.rep = {
        //     "repID": 2,
        //     "repEmail": "anton@mail.com",
        //     "repFname": "Anton",
        //     "repLname": "Ranaweera",
        //     "repTp": "0777895689",
        //     "repRoutes": [
        //       {
        //         "route_id": "1",
        //         "route_name": "Negombo",
        //         "desc": null
        //       },
        //       {
        //         "route_id": "2",
        //         "route_name": "Arachchikattuwa",
        //         "desc": null
        //       },
        //       {
        //         "route_id": "5",
        //         "route_name": "Colombo",
        //         "desc": null
        //       }
        //     ],
        //     "currOpenedTripId": -1
        // }
        // this.customer = {
        //     "cust_id": "4",
        //     "cust_name": "Cust y",
        //     "address_line1": "Cust y - Adrs 1",
        //     "address_line2": "Cust y - Adrs 2",
        //     "address_line3": "Cust y - Adrs 3",
        //     "cust_email": "Cust y - email",
        //     "cust_tp": "Cust y - tp",
        //     "route_id": "2",
        //     "cat_id": "2",
        //     "cat_name": "Non-Agent"
        // };
        // this.currTripId = 6;

        this.currOrder.order_items = [];
        this.currOrder.odr_is_doubt = false;
      }

      _createClass(AddOrderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.plt.ready().then(function () {
            document.addEventListener("backbutton", function (e) {}, false);

            _this.authService.getRep().then(function (rep) {
              _this.rep = rep;
            });

            _this.fetchServerCurrTrip(); //loading current trip details


            _this.addItem();

            _this.getCustOutstanding();
          });
          console.log(this.rep);
        }
      }, {
        key: "addReturn",
        value: function addReturn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _return_return_page__WEBPACK_IMPORTED_MODULE_7__["ReturnPage"],
                      componentProps: {
                        customer: this.customer,
                        tripId: this.curTrip.tripId,
                        rep: this.rep
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "outstSettle",
        value: function outstSettle() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal, ret, settles;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _outst_settle_outst_settle_page__WEBPACK_IMPORTED_MODULE_9__["OutstSettlePage"],
                      componentProps: {
                        outsts: this.outsts,
                        totalPaid: this.currOrder.odr_paid_amount,
                        ttlOutst: this.customer.outstanding
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.present();
                    _context2.next = 6;
                    return modal.onWillDismiss();

                  case 6:
                    ret = _context2.sent;
                    settles = ret.data.settlements;

                    if (settles) {
                      console.log(settles);
                      this.outstSettles = settles;
                      this.calcOutstDeduct(); // this.calcEffectivePaid();

                      this.updateTotOutst();
                    }

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "calcOutstDeduct",
        value: function calcOutstDeduct() {
          var _this2 = this;

          this.outstDeduct = 0;
          this.outstSettles.forEach(function (settle) {
            _this2.outstDeduct = _this2.outstDeduct * 1 + settle.amount * 1;
          });
        }
      }, {
        key: "removeSettlePay",
        value: function removeSettlePay(idx, amount) {
          this.outstSettles.splice(idx, 1);
          this.calcOutstDeduct(); // this.calcEffectivePaid();

          this.updateTotOutst();
        }
      }, {
        key: "calcEffectivePaid",
        value: function calcEffectivePaid() {
          this.effectivePaid = this.currOrder.odr_paid_amount * 1 - this.outstDeduct * 1;
        }
      }, {
        key: "setEffectiveBalance",
        value: function setEffectiveBalance(evt) {
          this.effectivePaid = evt.target.value * 1 - this.outstDeduct * 1;
        }
      }, {
        key: "openHistory",
        value: function openHistory() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _order_history_order_history_page__WEBPACK_IMPORTED_MODULE_8__["OrderHistoryPage"],
                      componentProps: {
                        custId: this.customer.cust_id
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "printInvoice",
        value: function printInvoice(isCustCpy) {
          var str = "";
          var strSep = "++++++++++++++++++++++++++++++++\n";
          str += "___Sales Invoice: #" + this.invoiceNo + "___\n";
          str += this.customer.cust_name + "\n";
          str += this.customer.address_line1 + "\n";
          str += this.customer.address_line2 + "\n";
          str += this.customer.address_line3 + "\n";
          str += "--------------------------------\n";
          str += "Date: " + this.currOrder.odr_datetime + "\n";
          str += "Rep : " + this.rep.repFname + " " + this.rep.repLname + "\n\n";
          str += "                     \n";
          str += "========== Sales Items =========\n";
          str += "Item |       Qty         Amount \n";
          str += "Unit Price\n";
          str += "________________________________\n";
          this.currOrder.order_items.forEach(function (item) {
            str += item.item_name + "\n";
            str += "Rs." + item.price_sold + " X " + item.qty + " => Rs." + (item.qty * item.price_sold).toFixed(2) + "\n";
          });
          str += "\n======= Invoice Payment ========\n";
          str += "Bill Amount     Rs." + (this.currOrder.odr_amount - this.currOrder.vat_amount).toFixed(2) + "\n";
          str += "VAT(8%)         Rs." + this.currOrder.vat_amount.toFixed(2) + "\n";
          str += "Tot.Bill Amount Rs." + this.currOrder.odr_amount.toFixed(2) + "\n";
          str += "--------------------------------\n";
          str += "Paid Amount     Rs." + this.currOrder.odr_paid_amount.toFixed(2) + "\n";
          str += "Current Outst.  Rs." + this.tempOutstanding.toFixed(2) + "\n";

          if (this.outstSettles.length > 0) {
            str += "\n\n===== Out/Exc Settlements ======\n";
            this.outstSettles.forEach(function (pay) {
              str += "Invoice #" + pay.odrId + " => Rs." + pay.amount + (pay.isOutstPay ? "(+)" : "(-)") + "\n";
            });
            str += "--------------------------------\n";
            str += "Tot.Out/Exc Ded Rs." + this.outstDeduct.toFixed(2) + "\n";
          }

          str += "================================\n\n\n";
          str += "________________________________\n";

          if (isCustCpy) {
            str += "Customer Signature\n";
          } else {
            str += "Sales Rep Signature\n";
          }

          str += strSep + "\n\n";
          window.sunmiInnerPrinter.printOriginalText(strSep);
          window.sunmiInnerPrinter.printTextWithFont('\n      Jaya Farm\n', 'Calibri', 36);
          window.sunmiInnerPrinter.printTextWithFont('\n   Nattandiya, Marawila\n', 'Calibri', 30);
          window.sunmiInnerPrinter.printTextWithFont('\n         032-2254811\n', 'Calibri', 24); // window.sunmiInnerPrinter.printTextWithFont('\n\nSales Invoice: #'+this.invoiceNo+"\n",'Calibri',30);

          window.sunmiInnerPrinter.printOriginalText(str);

          if (!isCustCpy) {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }
      }, {
        key: "submitOrder",
        value: function submitOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var ParseHeaders, url, postData, alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (navigator.onLine) {
                      _context4.next = 3;
                      break;
                    }

                    this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
                    return _context4.abrupt("return");

                  case 3:
                    this.processOrder();
                    console.log(this.currOrder.odr_paid_amount);

                    if (!((!this.currOrder.odr_paid_amount || this.currOrder.odr_paid_amount == null) && this.currOrder.odr_paid_amount !== 0)) {
                      _context4.next = 8;
                      break;
                    }

                    this.authService.showToast("<b>Please enter the 'Total Payed Amount'... <ion-icon name='warning'></ion-icon></b>");
                    return _context4.abrupt("return");

                  case 8:
                    ParseHeaders = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                        'Content-Type': 'application/x-www-form-urlencoded'
                      })
                    };
                    url = this.storage.svr_url + "OrderCtrl/processOrder";
                    postData = [];
                    postData.push({
                      'order': this.currOrder,
                      'currOdrPay': this.effectivePaid,
                      'outstPays': this.outstSettles
                    });
                    this.submitting = true; //   console.log(postData);

                    _context4.next = 15;
                    return this.alertController.create({
                      mode: "ios",
                      header: 'Confirm submit invoice',
                      message: 'Do you really want to submit the invoice?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          _this3.submitting = false;
                        }
                      }, {
                        text: 'Submit',
                        handler: function handler() {
                          console.log(postData);

                          _this3.http.post(url, postData, ParseHeaders).subscribe(function (res) {
                            _this3.submitting = false;
                            console.log(res);

                            if (res !== false) {
                              console.log(res);
                              _this3.invoiceNo = res;
                              console.log(_this3.invoiceNo);

                              _this3.printInvoice(true);

                              _this3.currOrder.isWorking = false;
                            } else {
                              _this3.authService.showToast('Problem submitting invoice..');

                              return false;
                            }
                          }, function (error) {
                            console.log(error);
                            return false;
                          });
                        }
                      }]
                    });

                  case 15:
                    alert = _context4.sent;
                    this.submitting = false;
                    _context4.next = 19;
                    return alert.present();

                  case 19:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
        /**
         * Check while typing that enough quantity is available in trip item
         * @param ev - $event variable of current event
         * @param itemId - The trip item that the balance quantity should be checked
         */

      }, {
        key: "chkItemBalence",
        value: function chkItemBalence(ev, itemId) {
          if (itemId === undefined) {
            this.authService.showToast("<b>Please select the item first..<ion-icon name='warning'></ion-icon></b>"); // ev.srcElement.disabled = true;

            ev.target.value = null;
          } else {
            // ev.srcElement.disabled = false;
            var tripItemIdx = this.curTrip.tripItems.findIndex(function (item) {
              return item.itemId == itemId;
            });

            if (this.curTrip.tripItems[tripItemIdx].balanceQty < ev.target.value) {
              this.authService.showToast("<b>You don't have enough item quantity..<ion-icon name='warning'></ion-icon></b>");
              ev.target.value = null;
            }
          }
        }
      }, {
        key: "finalizeItem",
        value: function finalizeItem(evt) {
          this.calcOrderAmount();
          this.setOrderUtilInfo();
          console.log(evt);
        }
      }, {
        key: "processOrder",
        value: function processOrder() {
          var _this4 = this;

          console.log(this.currOrder.order_items);

          if (this.currOrder.order_items.length < 1) {
            this.calcOrderAmount();
            this.setOrderUtilInfo(); // this.isOrdeValid = false;
            // this.authService.showToast("<b>You are going to  <ion-icon name='warning'></ion-icon></b></br>Please add atleast one item to the invoice..");
          } else {
            this.currOrder.order_items.forEach(function (item) {
              if (!item.item_id || !item.qty || item.qty == null) {
                // this.isOrdeValid = false;
                _this4.authService.showToast("<b>Problem processing invoice. <ion-icon name='warning'></ion-icon></b></br>Please re-check invoice items carefully...");
              } else {
                _this4.calcOrderAmount();

                _this4.setOrderUtilInfo(); // this.setInvoicePaidAuto();

              }
            });
          }
        }
      }, {
        key: "calcOrderAmount",
        value: function calcOrderAmount() {
          var _this5 = this;

          if ((!this.currOrder.odr_paid_amount || this.currOrder.odr_paid_amount == null) && this.currOrder.odr_paid_amount !== 0) {
            this.authService.showToast("<b>Please enter the 'Total Payed Amount'... <ion-icon name='warning'></ion-icon></b>");
            return;
          }

          this.currOrder.odr_amount = 0; // this.tempOutstanding = this.customer.outstanding;

          console.log(this.currOrder);
          this.currOrder.order_items.forEach(function (item) {
            _this5.currOrder.odr_amount += item.price_sold * item.qty;
          });
          this.currOrder.vat_amount = this.customer.is_vat == "VAT" ? 8 / 100 * this.currOrder.odr_amount : 0;
          this.currOrder.odr_amount = this.currOrder.odr_amount + this.currOrder.vat_amount;
          this.updateTotOutst();
        }
      }, {
        key: "updateTotOutst",
        value: function updateTotOutst() {
          this.calcEffectivePaid(); // this.tempOutstanding = this.customer.outstanding*1 - this.outstDeduct*1;

          this.tempOutstanding = 0;
          this.tempOutstanding = (this.tempOutstanding * -1 + (this.effectivePaid * 1 - this.currOrder.odr_amount)) * -1;
        }
      }, {
        key: "setOrderUtilInfo",
        value: function setOrderUtilInfo() {
          this.currOrder.cust_id = this.customer.cust_id;
          this.currOrder.odr_datetime = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
          this.currOrder.trip_id = this.curTrip.tripId;
          this.currOrder.cust_cat_id = Number(this.customer.cat_id); // this.currOrder.odr_paid_amount 

          console.log(this.currOrder);
        }
      }, {
        key: "isOrderValid",
        value: function isOrderValid() {} // this.isOrdeValid = true;
        // if (this.currOrder.order_items.length > 0) {
        //     this.isOrdeValid = false;
        //     return;
        // }
        // this.currOrder.order_items.forEach(item=>{
        //     if (!item.item_id || !item.qty || item.qty == null) {
        //         this.isOrdeValid = false;
        //         return;
        //     }
        // })
        // console.log(this.currOrder.order_items)
        // this.isOrdeValid = isValid;

        /**
         * Update the selected status of a specific item in current trip
         * @param itemId - item to be updated on current trip
         */

      }, {
        key: "toggleUpdateItemList",
        value: function toggleUpdateItemList(itemId) {
          console.log("itemId " + itemId);
          console.log(this.curTrip.tripItems);
          var itemIndex = this.curTrip.tripItems.findIndex(function (itemInArra) {
            return itemInArra.itemId == itemId;
          });

          if (itemIndex > -1) {
            console.log("itemIndex " + itemIndex);
            var isSelectd = this.curTrip.tripItems[itemIndex].isSelected;
            this.curTrip.tripItems[itemIndex].isSelected = isSelectd ? false : true;
          }

          this.isOrderValid();
        }
        /**
         * Update the order item sold price of the particular customer
         * @param itemId - The item to be updated the price on order items
         */

      }, {
        key: "calcPrice",
        value: function calcPrice(itemId) {
          var index = this.currOrder.order_items.findIndex(function (odrItem) {
            return odrItem.item_id == itemId;
          });
          console.log("index: " + index);

          if (index > -1) {
            var selectedItem = this.currOrder.order_items[index];
            var tripItemIdx = this.curTrip.tripItems.findIndex(function (item) {
              return item.itemId == selectedItem.item_id;
            });
            this.currOrder.order_items[index].price_sold = this.curTrip.tripItems[tripItemIdx].item_unit_price;
            this.currOrder.order_items[index].item_name = this.curTrip.tripItems[tripItemIdx].itemName;
          }

          this.isOrderValid();
        }
        /**
         * Remove item from order items list
         * @param item - Item object that in current order to be removed
         */

      }, {
        key: "removeItem",
        value: function removeItem(item) {
          var index = this.currOrder.order_items.indexOf(item);

          if (index > -1) {
            var rmvItemId = this.currOrder.order_items[index].item_id;
            this.toggleUpdateItemList(rmvItemId);
            this.currOrder.order_items.splice(index, 1);
          }

          this.isOrderValid();
          console.log(this.currOrder.order_items);
        }
        /**
         * Add empty item to current order items list
         */

      }, {
        key: "addItem",
        value: function addItem() {
          console.log(this.curTrip.tripItems);
          this.currOrder.isWorking = true;
          this.currOrder.order_items.push({});
          this.currOrder.odr_paid_amount = 0.00;
          console.log(this.currOrder.order_items); // this.isOrderValid();
        }
        /**
         * Close the current modal page
         */

      }, {
        key: "dismiss",
        value: function dismiss() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(this.currOrder.order_items.length > 0 && this.currOrder.isWorking)) {
                      _context5.next = 6;
                      break;
                    }

                    _context5.next = 3;
                    return this.alertController.create({
                      mode: "ios",
                      header: 'Exit order process',
                      message: 'Do you really want to exit and discard the order?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary'
                      }, {
                        text: 'Discard & Exit',
                        handler: function handler() {
                          _this6.modalController.dismiss({
                            'dismissed': true
                          });
                        }
                      }]
                    });

                  case 3:
                    alert = _context5.sent;
                    _context5.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
        /**
         * Retreive current customer outstanding payment value
         */

      }, {
        key: "getCustOutstanding",
        value: function getCustOutstanding() {
          var _this7 = this;

          if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
          }

          var url = this.storage.svr_url + "OrderCtrl/getCustOutstanding/" + this.customer.cust_id;
          this.http.get(url).subscribe(function (outsts) {
            console.log(outsts);

            if (outsts) {
              _this7.outsts = outsts;
              var ttlOutst = 0;
              outsts.forEach(function (outst) {
                // console.log(outst.out)
                ttlOutst += Number(outst.out); // console.log(ttlOutst)
              });
              console.log(ttlOutst);
              _this7.customer.outstanding = ttlOutst; // this.tempOutstanding = this.customer.outstanding;

              _this7.tempOutstanding = _this7.customer.outstanding * 1 - _this7.outstDeduct * 1;
            }
          });
        }
        /**
         * Load current trip info from server side
         */

      }, {
        key: "fetchServerCurrTrip",
        value: function fetchServerCurrTrip() {
          var _this8 = this;

          if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
          }

          var url = this.storage.svr_url + "RepCtrl/getRepTripList/" + this.rep.repID + "/-1/1"; // let trip: Trip = <Trip>{};

          this.http.get(url).subscribe(function (data) {
            if (data.length != 1) {
              _this8.authService.showToast("You have no or more than one started trips..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration..");
            } else {
              var elm = data[0];
              _this8.curTrip = {
                tripId: Number(elm.trip_id),
                tripStTime: elm.trip_st_time,
                tripEndTime: elm.trip_end_time,
                tripItems: _this8.getTripItems(Number(elm.trip_id)),
                isOpened: elm.trip_end_time == null ? true : false
              };
            }
          });
        }
        /**
         * Fetch trip item info from serverside
         * @param tripId - The trip_id to get the items of that particular trip
         */

      }, {
        key: "getTripItems",
        value: function getTripItems(tripId) {
          var _this9 = this;

          console.log("trip Id to get items " + tripId);
          var items = [];

          if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
          } else {
            this.submitting = true;
            var url = this.storage.svr_url + "RepCtrl/getItemPriceByCustomer/" + tripId + "/" + this.customer.cust_id + "/" + this.customer.cat_id;
            this.http.get(url).subscribe(function (data) {
              if (data.length > 0) {
                data.forEach(function (elm) {
                  items.push({
                    itemId: Number(elm.item_id),
                    itemName: elm.item_name,
                    itemUnitName: elm.item_unit_name,
                    item_unit_price: elm.item_unit_price,
                    loadQty: elm.load_qty,
                    balanceQty: elm.unload_qty == null || elm.unload_qty == '' ? Number(elm.load_qty) : Number(elm.unload_qty),
                    isSelected: false
                  });
                });
              }

              _this9.submitting = false;
            }, function (error) {
              console.log(error);
            });
          }

          return items;
        }
      }]);

      return AddOrderPage;
    }();

    AddOrderPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectItem', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"])], AddOrderPage.prototype, "selectItem", void 0);
    AddOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/add-order/add-order.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-order.page.scss */
      "./src/app/members/inc/add-order/add-order.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], AddOrderPage);
    /***/
  }
}]);
//# sourceMappingURL=default~dashboard-dashboard-module~inc-add-order-add-order-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-order-history-order-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/order-history/order-history.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/order-history/order-history.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"primary\">\n    <ion-toolbar class=\"toolbar-background-md\">\n        <ion-title>\n            <ion-chip outline class=\"ion-margin-vertical chip\">\n            <ion-icon class=\"chip\" name=\"clipboard\"></ion-icon>SALES HISTORY\n            <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n            </ion-chip>\n            <!-- <ion-chip color=\"light\" class=\"chip-notice\">   \n                <ion-icon name=\"bicycle\" color=\"success\" ></ion-icon>      \n                    <h5 mode=\"ios\"> {{curTrip.tripId}} </h5>\n            </ion-chip> -->\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"ion-text-capitalize\" (click)=\"dismiss()\">Close</ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>      \n    <ion-list style=\"margin-bottom: 40px;\">\n        <ion-card-header>\n          <ion-card-subtitle *ngIf=\"isOrderAvail\"> {{ orders.length }} record(s) avilable</ion-card-subtitle>\n          <ion-card-subtitle *ngIf=\"!isOrderAvail\">No sales history records available </ion-card-subtitle>\n          <p *ngIf=\"isOrderAvail\">Total outstanding: Rs.{{outst}}</p>\n        </ion-card-header>\n        \n            <ion-item background=\"dark\" *ngFor=\"let order of orders\" class=\"list-small-amrgin\" (click)=\"openOrder(order)\">\t\t\t\n                <ion-label text-wrap class=\"ion-no-margin\">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col class=\"ion-float-left\">\n                                <ion-text color=\"light\">\n                                    <ion-badge mode=\"ios\" class=\"list-header\" color=\"primary\">\n                                        <ion-icon class=\"chip\" name=\"clipboard\"></ion-icon> {{ order.odr_id }}\n                                      </ion-badge>\n                                </ion-text>\n                            </ion-col>\n                            <ion-col class=\"ion-float-left\">\n                                <ion-text color=\"light\">\n                                    <p class=\"list-sub-header\">\n                                        <ion-icon name=\"calendar\"></ion-icon>\n                                        {{ order.odr_datetime }}\n                                    </p>\n                                </ion-text>\n                            </ion-col>\n                            <ion-col class=\"ion-float-right\">\n                                <ion-badge class=\"ion-float-right\" mode=\"ios\" *ngIf=\"order.isOutst\" color=\"danger\">\n                                    <ion-icon name=\"wallet\"></ion-icon>\n                                </ion-badge>\n                                <ion-badge class=\"ion-float-right\" mode=\"ios\" *ngIf=\"order.isEx\" color=\"tertiary\">\n                                    <ion-icon name=\"wallet\"></ion-icon>\n                                </ion-badge>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-label>\n            </ion-item>\n      </ion-list>\n  </ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/order-info/order-info.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/order-info/order-info.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            <ion-chip outline class=\"ion-margin-vertical chip\">\n                <ion-icon class=\"chip\" name=\"information-circle-outline\"></ion-icon>\n                <ion-label> INVOICE</ion-label>\n                <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n            </ion-chip>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"ion-text-capitalize\" (click)=\"dismiss()\">Close</ion-button>\n        </ion-buttons>\n    </ion-toolbar> \n  </ion-header>\n<ion-content>\n    <ion-card style=\"margin-bottom: 40px; margin-left: 0px;\" >\n        <ion-card-header>\n            <ion-card-title>Invoice #{{order.odr_id}}</ion-card-title>\n            <!-- <ion-card-subtitle>{{order.odr_datetime}}</ion-card-subtitle> -->\n            <ion-grid>\n                <ion-row>\n                    <ion-col class=\"ion-float-left\">\n                        <div>Invoice Date</div>\n                    </ion-col>\n                    <ion-col class=\"ion-float-right\">\n                        <div> {{order.odr_datetime}} </div>\n                    </ion-col>\n                </ion-row>\n                <!-- <ion-row>\n                    <ion-col class=\"ion-float-left\">\n                        <div>Sales Rep</div>\n                    </ion-col>\n                    <ion-col class=\"ion-float-right\">\n                        <div> {{rep.repFname}} {{rep.repLname}}</div>\n                    </ion-col>\n                </ion-row> -->\n            </ion-grid>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">\n                            <div><h5><b>Item | Price</b></h5></div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-left\">\n                            <div><h5><b>Qty</b></h5></div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div class=\"ion-text-right\"> <h5><b>Amount</b></h5> </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n            <ion-item *ngFor=\"let item of order.odr_items\">\n\n                <ion-grid>\n                    <div style=\"margin-left: 5px;\"><h3><b>{{item.item_name}}</b></h3></div>\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">\n                            <div>Rs.{{item.price_sold}}</div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-left\">\n                            <div>X {{item.qty}}</div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div class=\"ion-text-right\">\n                                Rs.{{item.price_sold*item.qty | number : '1.2-2'}}\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row style=\"background-color: rgb(107, 107, 107); color: #fff;\">\n                        <ion-col class=\"ion-float-left\">\n                            <div>Sold price diff.</div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-left\">\n                            <div class=\"ion-text-right\"> {{item.sold_price_diff}}</div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n            <ion-item>\n                <ion-grid>\n                    <ion-row style=\"background-color: rgb(42, 42, 42); color: #fff;\">\n                        <ion-col class=\"ion-float-left\">\n                            <div><h5><b>Total Bill Amount</b></h5></div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div class=\"ion-text-right\">\n                                <h5><b>Rs.{{order.odr_amount | number : '1.2-2'}}</b></h5>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row style=\"background-color: rgb(5, 5, 5); color: #fff;\">\n                        <ion-col class=\"ion-float-left\">\n                            <div><h5><b>Paid Amount</b></h5></div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div class=\"ion-text-right\">\n                                <h5><b>Rs.{{order.odr_paid_amount | number : '1.2-2'}}</b></h5>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n            <ion-item >\n                <ion-textarea placeholder=\"Remarks..\" readonly value=\"{{order.odr_remark}}\"></ion-textarea>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/members/inc/order-history/order-history-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/members/inc/order-history/order-history-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: OrderHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageRoutingModule", function() { return OrderHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-history.page */ "./src/app/members/inc/order-history/order-history.page.ts");




const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryPage"]
    }
];
let OrderHistoryPageRoutingModule = class OrderHistoryPageRoutingModule {
};
OrderHistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderHistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/members/inc/order-history/order-history.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/members/inc/order-history/order-history.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-history-routing.module */ "./src/app/members/inc/order-history/order-history-routing.module.ts");
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-history.page */ "./src/app/members/inc/order-history/order-history.page.ts");
/* harmony import */ var _order_info_order_info_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-info/order-info.module */ "./src/app/members/inc/order-info/order-info.module.ts");








let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryPageRoutingModule"],
            _order_info_order_info_module__WEBPACK_IMPORTED_MODULE_7__["OrderInfoPageModule"]
        ],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]]
    })
], OrderHistoryPageModule);



/***/ }),

/***/ "./src/app/members/inc/order-history/order-history.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/members/inc/order-history/order-history.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvaW5jL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/members/inc/order-history/order-history.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/members/inc/order-history/order-history.page.ts ***!
  \*****************************************************************/
/*! exports provided: OrderHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function() { return OrderHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _order_info_order_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-info/order-info.page */ "./src/app/members/inc/order-info/order-info.page.ts");









let OrderHistoryPage = class OrderHistoryPage {
    constructor(modalController, authService, http, storage, plt, alertController, datepipe, navParams) {
        this.modalController = modalController;
        this.authService = authService;
        this.http = http;
        this.storage = storage;
        this.plt = plt;
        this.alertController = alertController;
        this.datepipe = datepipe;
        this.navParams = navParams;
        this.orders = [];
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            document.addEventListener("backbutton", function (e) { }, false);
        });
        this.custId = this.navParams.get('custId');
        this.getCustOdrInfo();
    }
    getCustOdrInfo() {
        if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        }
        this.submitting = true;
        let url = this.storage.svr_url + "OrderCtrl/getOdrHistoryByCust/" + this.custId;
        this.http.get(url).subscribe((history) => {
            this.submitting = false;
            console.log(history);
            if (history) {
                this.orders = history.orders;
                this.orders.map(order => {
                    order.isOutst = Number(order.odr_amount) > Number(order.odr_paid_amount) ? true : false;
                    order.isEx = Number(order.odr_amount) < Number(order.odr_paid_amount) ? true : false;
                });
                this.isOrderAvail = this.orders.length > 0 ? true : false;
                this.outst = history.cust_outst;
            }
            console.log(history);
        });
    }
    /**
     * Close the current modal page
     */
    dismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss({
                'dismissed': true
            });
        });
    }
    openOrder(order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _order_info_order_info_page__WEBPACK_IMPORTED_MODULE_7__["OrderInfoPage"],
                componentProps: {
                    order: order
                }
            });
            return yield modal.present();
        });
    }
};
OrderHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
OrderHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/order-history/order-history.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-history.page.scss */ "./src/app/members/inc/order-history/order-history.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], OrderHistoryPage);



/***/ }),

/***/ "./src/app/members/inc/order-info/order-info-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/members/inc/order-info/order-info-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInfoPageRoutingModule", function() { return OrderInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-info.page */ "./src/app/members/inc/order-info/order-info.page.ts");




const routes = [
    {
        path: '',
        component: _order_info_page__WEBPACK_IMPORTED_MODULE_3__["OrderInfoPage"]
    }
];
let OrderInfoPageRoutingModule = class OrderInfoPageRoutingModule {
};
OrderInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/members/inc/order-info/order-info.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/members/inc/order-info/order-info.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInfoPageModule", function() { return OrderInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-info-routing.module */ "./src/app/members/inc/order-info/order-info-routing.module.ts");
/* harmony import */ var _order_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-info.page */ "./src/app/members/inc/order-info/order-info.page.ts");







let OrderInfoPageModule = class OrderInfoPageModule {
};
OrderInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderInfoPageRoutingModule"]
        ],
        declarations: [_order_info_page__WEBPACK_IMPORTED_MODULE_6__["OrderInfoPage"]]
    })
], OrderInfoPageModule);



/***/ }),

/***/ "./src/app/members/inc/order-info/order-info.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/members/inc/order-info/order-info.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvaW5jL29yZGVyLWluZm8vb3JkZXItaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/members/inc/order-info/order-info.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/members/inc/order-info/order-info.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInfoPage", function() { return OrderInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let OrderInfoPage = class OrderInfoPage {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.order = navParams.get('order');
    }
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
OrderInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
OrderInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/order-info/order-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-info.page.scss */ "./src/app/members/inc/order-info/order-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], OrderInfoPage);



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-order-history-order-history-module-es2015.js.map
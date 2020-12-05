(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/dashboard/dashboard.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/dashboard/dashboard.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"primary\">\n  <ion-toolbar class=\"toolbar-background-md\">\n    <ion-title>\n      <ion-chip outline class=\"ion-margin-vertical chip\">\n        <ion-icon class=\"chip ion-no-margin\" name=\"map\"></ion-icon>\n        <ion-select style=\"margin-top: 10px;\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" mode=\"ios\" placeholder=\"Route\" [(ngModel)]=\"currRootId\" (ionChange)=\"setRouteCusts()\">\n            <ion-select-option *ngFor=\"let route of routes\" value=\"{{route.route_id}}\">\n                {{route.route_name}}\n            </ion-select-option>\n        </ion-select>\n        <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" size=\"small\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n      </ion-chip>\n\n      <ion-chip color=\"light\" class=\"chip-notice\"  (click)=\"checkAndUpdateRep()\">   \n        <ion-icon name=\"bicycle\" [color]=\"istmpCurrTripIdSet() ? 'success':'danger'\" ></ion-icon>      \n            <ion-icon name=\"warning\" [hidden]=\"istmpCurrTripIdSet()\"></ion-icon>\n            <h5 style=\"margin-top: 12px;\" mode=\"ios\" [hidden]=\"!istmpCurrTripIdSet()\"> {{tmpCurrTripId}} </h5>\n      </ion-chip>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>      \n  <ion-list #custList class=\"sheet-list\">\n      <ion-card-header>\n          <ion-grid>\n                <ion-row>\n                    <ion-col size=\"8\" style=\"padding-top: 20px\">\n                        <ion-card-subtitle *ngIf=\"isRootCustAvail\">{{ currRootCusts.length }} customer(s) avilable</ion-card-subtitle>\n                        <ion-card-subtitle *ngIf=\"!isRootCustAvail && isRootSelected\">No customers registerd for this route </ion-card-subtitle>\n                        <ion-card-subtitle *ngIf=\"!isRootSelected\">Please select the route.. </ion-card-subtitle>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button class=\"ion-text-capitalize\" *ngIf=\"isRootSelected\" (click)=\"openAddCust()\">\n                            <ion-icon name=\"add\"></ion-icon>Customer\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n          </ion-grid>\n        \n        \n      </ion-card-header>\n      \n      <ion-item-sliding *ngFor=\"let cust of currRootCusts\" class=\"list-small-amrgin\">\n          <ion-item background=\"dark\" (click)=\"addOrder(cust)\">\t\t\t\n              <ion-label text-wrap class=\"ion-no-margin\">\n                  <ion-text color=\"dark\" slot=\"start\">\n                    <ion-badge mode=\"ios\" class=\"list-header\" color=\"primary\">\n                      <ion-icon name=\"business\" size=\"small\"></ion-icon> {{ cust.cust_name }} | {{ cust.is_vat }}\n                    </ion-badge>\n                  </ion-text>\n                  \n                  <ion-text color=\"light\">\n                      <p class=\"list-sub-header\">\n                          <ion-icon name=\"pin\"></ion-icon>\n                          {{ cust.address_line1 }} {{ cust.address_line2 }} {{cust.address_line3}}\n                      </p>\n                  </ion-text>\n              </ion-label>\n          </ion-item>\n          \n          <ion-item-options side=\"end\">\n              <ion-item-option color=\"primary\" class=\"ion-text-capitalize\" (click)=\"openCustInfo(cust)\"  [class.disable-btn]=\"submitting\" >\n                  <ion-icon name=\"more\"></ion-icon>More\n              </ion-item-option>\n              <ion-item-option color=\"dark\" class=\"ion-text-capitalize\" (click)=\"addOrder(cust)\"  [class.disable-btn]=\"submitting || !istmpCurrTripIdSet()\">\n                      <ion-icon name=\"add-circle-outline\"></ion-icon>Order\n              </ion-item-option>\n              <ion-item-option color=\"secondary\" class=\"ion-text-capitalize\" (click)=\"openHistory(cust.cust_id)\" >\n                <ion-icon name=\"checkmark-circle-outline\"></ion-icon>History\n        </ion-item-option>\n          </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/members/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/members/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/members/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/members/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/members/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/members/dashboard/dashboard.page.ts");
/* harmony import */ var _inc_cust_info_cust_info_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inc/cust-info/cust-info.module */ "./src/app/members/inc/cust-info/cust-info.module.ts");
/* harmony import */ var _inc_add_order_add_order_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../inc/add-order/add-order.module */ "./src/app/members/inc/add-order/add-order.module.ts");
/* harmony import */ var _inc_cust_add_cust_add_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../inc/cust-add/cust-add.module */ "./src/app/members/inc/cust-add/cust-add.module.ts");










let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"],
            _inc_cust_info_cust_info_module__WEBPACK_IMPORTED_MODULE_7__["CustInfoPageModule"],
            _inc_add_order_add_order_module__WEBPACK_IMPORTED_MODULE_8__["AddOrderPageModule"],
            _inc_cust_add_cust_add_module__WEBPACK_IMPORTED_MODULE_9__["CustAddPageModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _inc_cust_info_cust_info_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../inc/cust-info/cust-info.page */ "./src/app/members/inc/cust-info/cust-info.page.ts");
/* harmony import */ var _inc_add_order_add_order_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../inc/add-order/add-order.page */ "./src/app/members/inc/add-order/add-order.page.ts");
/* harmony import */ var _inc_order_history_order_history_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../inc/order-history/order-history.page */ "./src/app/members/inc/order-history/order-history.page.ts");
/* harmony import */ var _inc_cust_add_cust_add_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../inc/cust-add/cust-add.page */ "./src/app/members/inc/cust-add/cust-add.page.ts");













let DashboardPage = class DashboardPage {
    constructor(authService, router, formBuilder, toast, http, storage, modalController, plt) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.http = http;
        this.storage = storage;
        this.modalController = modalController;
        this.plt = plt;
        this.isRootCustAvail = false;
        this.tmpCurrTripId = -1;
        this.isRootSelected = false;
        this.customPopoverOptions = {
            subHeader: 'Route',
            message: 'Select current route'
        };
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            document.addEventListener("backbutton", function (e) { }, false);
            this.checkAndUpdateRep();
        });
    }
    openAddCust() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _inc_cust_add_cust_add_page__WEBPACK_IMPORTED_MODULE_11__["CustAddPage"],
                componentProps: {
                    currRootId: this.currRootId,
                }
            });
            modal.present();
            let ret = yield modal.onWillDismiss();
            let isAdd = ret.data.isAdded;
            if (isAdd) {
                console.log(isAdd);
                this.setRouteCusts();
            }
        });
    }
    checkAndUpdateRep() {
        this.authService.getRep().then(rep => {
            this.rep = rep;
            this.routes = rep.repRoutes;
            this.repId = rep.repID;
            // this.checkAndSyncCurrTrip(rep);
            this.getSVROpenedTripId(); //set current opened trip id from server
            console.log(rep);
            if (!rep.currOpenedTripId) {
                rep.currOpenedTripId = this.tmpCurrTripId;
            }
            else {
                if (rep.currOpenedTripId != this.tmpCurrTripId && this.tmpCurrTripId != -1) {
                    rep.currOpenedTripId = this.tmpCurrTripId;
                    this.authService.setRep(rep); //update local rep on local storage
                }
            }
            // console.log(rep)
        });
    }
    addOrder(customer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(customer)
            if (this.istmpCurrTripIdSet()) {
                const modal = yield this.modalController.create({
                    component: _inc_add_order_add_order_page__WEBPACK_IMPORTED_MODULE_9__["AddOrderPage"],
                    componentProps: {
                        customer: customer,
                        tripId: this.tmpCurrTripId,
                        // repId: this.repId,
                        rep: this.rep
                    }
                });
                return yield modal.present();
            }
            else {
                this.showToast("Please set the current opened trip first..<ion-icon name='warning'>\
            </ion-icon></b><br><b>Hint: </b> Refresh the trip (tap the Bicycle Icon) and try again..");
            }
        });
    }
    openHistory(cust_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _inc_order_history_order_history_page__WEBPACK_IMPORTED_MODULE_10__["OrderHistoryPage"],
                componentProps: {
                    custId: cust_id,
                }
            });
            return yield modal.present();
        });
    }
    isRouteSet() {
        return (this.routes == null);
    }
    logout() {
        this.authService.logout();
    }
    setRouteCusts() {
        console.log(this.currRootId);
        this.getCurrRoutCustomerInfo();
    }
    openCustInfo(cust) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _inc_cust_info_cust_info_page__WEBPACK_IMPORTED_MODULE_8__["CustInfoPage"],
                componentProps: {
                    custData: cust
                }
            });
            return yield modal.present();
        });
    }
    istmpCurrTripIdSet() {
        return (this.tmpCurrTripId != -1 ? true : false);
    }
    getSVROpenedTripId() {
        if (!navigator.onLine) {
            this.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        }
        else {
            this.submitting = true;
            let url = this.storage.svr_url + "RepCtrl/getCurrentTripId/" + this.repId;
            this.http.get(url).subscribe((data) => {
                if (data.length === 1) {
                    this.tmpCurrTripId = data[0].trip_id;
                }
                else {
                    this.tmpCurrTripId = -1;
                    this.showToast("You have no or more than one started trips..<ion-icon name='warning'></ion-icon></b><br>Please contact the administration..");
                }
                this.submitting = false;
            }, (error) => {
                console.log(error);
            });
        }
    }
    getCurrRoutCustomerInfo() {
        if (!navigator.onLine) {
            this.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        }
        else {
            this.submitting = true;
            const ParseHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            };
            let url = this.authService.svr_url + "RepCtrl/getCustomerByRouteID/" + this.currRootId;
            this.http.post(url, null, ParseHeaders).subscribe((data) => {
                this.submitting = false;
                console.log(data);
                this.isRootSelected = true;
                if (data != 0) {
                    this.currRootCusts = data;
                    this.isRootCustAvail = true;
                }
                else {
                    this.isRootCustAvail = false;
                    this.currRootCusts = null;
                }
                // this.currRootCusts = data;
                // this.loadCurrRootCusts();
            }, (error) => {
                console.log(error);
            });
        }
    }
    // loadCurrRootCusts() {
    //     if (this.currRootCusts.length > 0) {
    //         this.isRootCustAvail = true;
    //     }
    // }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                mode: 'ios',
                message: msg,
                duration: 4000
            });
            toast.present();
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('custList', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"])
], DashboardPage.prototype, "custList", void 0);
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/dashboard/dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/members/dashboard/dashboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map
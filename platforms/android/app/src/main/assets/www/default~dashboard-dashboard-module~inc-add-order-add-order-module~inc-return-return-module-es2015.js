(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-return-return-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/return/return.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/return/return.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"primary\">\n    <ion-toolbar class=\"toolbar-background-md\">\n        <ion-title>\n            <ion-chip outline class=\"ion-margin-vertical chip\">\n            <ion-icon class=\"chip\" name=\"clipboard\"></ion-icon>RETURN\n            <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n            </ion-chip>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"ion-text-capitalize\" (click)=\"dismiss()\">Close</ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content style=\"padding-bottom: 40px;\">\n    <ion-card-header>\n        <ion-card-title>Add Return </ion-card-title>\n        <ion-card-subtitle>{{customer.cust_name}}</ion-card-subtitle>\n        <p>{{customer.address_line1}}, {{customer.address_line2}}, {{customer.address_line3}}</p>\n    </ion-card-header>\n    \n        <ion-list >\n            <ion-item-divider></ion-item-divider>\n            \n            <ion-item-sliding *ngFor=\"let retItem of curReturn.retItems; let idx = index\">\n\n                <ion-item>\t\n                    <!-- <div class=\"item-card\"> -->\n                        <ion-select slot=\"start\"  mode=\"ios\" placeholder=\"Select Item\" \n                        [(ngModel)]=\"retItem.item_id\" (ionChange)=\"calcPrice(retItem.item_id)\" (ionChange)=\"toggleUpdateItemList(retItem.item_id)\" style=\"max-width: 100%;\">\n                            \n                            <ion-select-option *ngFor=\"let item of items\" value=\"{{item.item_id}}\"\n                            [disabled]=\"item.isSelected\">\n                                {{item.item_name}}\n                            </ion-select-option>\n\n                        </ion-select>\n                        <ion-input class=\"ion-text-right\" slot=\"end\" type=\"number\" placeholder=\"Qty\" [(ngModel)]=\"retItem.qty\"></ion-input>\n        \n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\" class=\"ion-text-capitalize\" (click)=\"removeItem(retItem)\"  [class.disable-btn]=\"submitting\">\n                            <ion-icon name=\"close\"></ion-icon>Remove\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n        <ion-item style=\"color: #3171e0;\" (click)=\"addItem()\">\n            <ion-icon name=\"add\" color=\"primary\"></ion-icon>Add new\n        </ion-item>\n\n        <ion-card style=\"margin-bottom: 40px;\">\n            <ion-card-header> \n            <ion-card-title>Return Docket Preview</ion-card-title>\n            <ion-card-subtitle>{{customer.cust_name}}</ion-card-subtitle>\n            <p>{{customer.address_line1}}, {{customer.address_line2}}, {{customer.address_line3}}</p>\n            <p></p>\n            <ion-grid>\n                <ion-row>\n                    <ion-col class=\"ion-float-left\">\n                        <div>Return Date</div>\n                    </ion-col>\n                    <ion-col class=\"ion-float-right\">\n                        <div> {{curReturn.date}} </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class=\"ion-float-left\">\n                        <div>Sales Rep</div>\n                    </ion-col>\n                    <ion-col class=\"ion-float-right\">\n                        <div> {{rep.repFname}} {{rep.repLname}}</div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">\n                            <div><h5><b>Item</b></h5></div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div><h5><b>Qty</b></h5></div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item> \n            <ion-item *ngFor=\"let item of curReturn.retItems\">\n\n                <ion-grid *ngIf=\"item.qty\">\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">\n                            <div class=\"ion-test-left\">{{item.item_name}}</div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div class=\"ion-test-right\">X {{item.qty}} {{item.item_unit_name}}</div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n    <ion-button class=\"ion-margin\" [hidden]=\"!curReturn.isWorking\" (click)=\"submitOrder()\" mode=\"ios\" slots=\"start\" \n    expand=\"block\">Print Customer Copy</ion-button>\n    <ion-button class=\"ion-margin\" [hidden]=\"curReturn.isWorking\" (click)=\"printDocket(false)\" mode=\"ios\" slots=\"start\" \n    expand=\"block\">Print Rep Copy</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/members/inc/return/return-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/members/inc/return/return-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ReturnPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnPageRoutingModule", function() { return ReturnPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _return_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./return.page */ "./src/app/members/inc/return/return.page.ts");




const routes = [
    {
        path: '',
        component: _return_page__WEBPACK_IMPORTED_MODULE_3__["ReturnPage"]
    }
];
let ReturnPageRoutingModule = class ReturnPageRoutingModule {
};
ReturnPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReturnPageRoutingModule);



/***/ }),

/***/ "./src/app/members/inc/return/return.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/inc/return/return.module.ts ***!
  \*****************************************************/
/*! exports provided: ReturnPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnPageModule", function() { return ReturnPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _return_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./return-routing.module */ "./src/app/members/inc/return/return-routing.module.ts");
/* harmony import */ var _return_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./return.page */ "./src/app/members/inc/return/return.page.ts");







let ReturnPageModule = class ReturnPageModule {
};
ReturnPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _return_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReturnPageRoutingModule"]
        ],
        declarations: [_return_page__WEBPACK_IMPORTED_MODULE_6__["ReturnPage"]]
    })
], ReturnPageModule);



/***/ }),

/***/ "./src/app/members/inc/return/return.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/inc/return/return.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvaW5jL3JldHVybi9yZXR1cm4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/members/inc/return/return.page.ts":
/*!***************************************************!*\
  !*** ./src/app/members/inc/return/return.page.ts ***!
  \***************************************************/
/*! exports provided: ReturnPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnPage", function() { return ReturnPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let ReturnPage = class ReturnPage {
    constructor(modalController, authService, http, storage, plt, alertController, datepipe, navParams) {
        this.modalController = modalController;
        this.authService = authService;
        this.http = http;
        this.storage = storage;
        this.plt = plt;
        this.alertController = alertController;
        this.datepipe = datepipe;
        this.navParams = navParams;
        this.curReturn = {};
        this.items = [];
        this.curReturn.retItems = [];
        this.customer = this.navParams.get('customer');
        this.currTripId = this.navParams.get('tripId');
        this.rep = this.navParams.get('rep');
        this.curReturn.isWorking = true;
        this.curReturn.cust_id = this.customer.cust_id;
        this.curReturn.trip_id = this.currTripId;
        console.log(this.customer);
        console.log(this.currTripId);
        console.log(this.rep);
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.getAllItems();
            this.addItem();
        });
    }
    submitOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!navigator.onLine) {
                this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
                return;
            }
            console.log(this.curReturn);
            if (this.curReturn.retItems[0].qty || this.curReturn.retItems[0].qty > 1) {
                this.curReturn.retItems.forEach(item => {
                    if (!item.qty || item.qty == null) {
                        this.authService.showToast("<b>Problem processing.. <ion-icon name='warning'></ion-icon></b></br>Please re-check the items and quantities carefully...");
                        return;
                    }
                });
                const ParseHeaders = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    })
                };
                let url = this.storage.svr_url + "ReturnCtrl/returnProcess";
                let postData = [];
                postData.push({
                    'return': this.curReturn
                });
                this.submitting = true;
                //   console.log(postData);
                const alert = yield this.alertController.create({
                    mode: "ios",
                    header: 'Confirm submit return request',
                    message: 'Do you really want to submit the return request?',
                    buttons: [
                        { text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => { this.submitting = false; }
                        },
                        { text: 'Submit',
                            handler: () => {
                                console.log(postData);
                                this.http.post(url, postData, ParseHeaders).subscribe((res) => {
                                    this.submitting = false;
                                    console.log(res);
                                    if (res !== false) {
                                        // console.log(res);
                                        this.docketId = res;
                                        // console.log(this.invoiceNo);
                                        this.printDocket(true);
                                        this.curReturn.isWorking = false;
                                    }
                                    else {
                                        this.authService.showToast('Problem submitting invoice..');
                                        return false;
                                    }
                                }, (error) => {
                                    console.log(error);
                                    return false;
                                });
                            }
                        }
                    ]
                });
                this.submitting = false;
                yield alert.present();
            }
            else {
                this.authService.showToast("<b>Problem processing.. <ion-icon name='warning'></ion-icon></b></br>Please add atleast one item to the list...");
                return;
            }
        });
    }
    printDocket(isCustCpy) {
        let str = "";
        let strSep = "++++++++++++++++++++++++++++++++\n";
        str += "______Return Docket: #" + this.docketId + "_______\n";
        str += this.customer.cust_name + "\n";
        str += this.customer.address_line1 + "\n";
        str += this.customer.address_line2 + "\n";
        str += this.customer.address_line3 + "\n";
        str += "________________________________\n";
        str += "Date: " + this.curReturn.date + "\n";
        str += "Rep : " + this.rep.repFname + " " + this.rep.repLname + "\n\n";
        str += "          Returned Items          \n";
        str += "________________________________\n";
        str += "Item            Qty\n";
        str += "________________________________\n";
        this.curReturn.retItems.forEach(item => {
            str += item.item_name + " X " + item.qty + item.item_unit_name + "\n";
        });
        str += "================================\n\n\n";
        str += "_________________\n";
        if (isCustCpy) {
            str += "Customer Signature\n";
        }
        else {
            str += "Sales Rep Signature\n";
        }
        str += strSep + "\n\n\n";
        window.sunmiInnerPrinter.printOriginalText(strSep);
        window.sunmiInnerPrinter.printTextWithFont('\n      Jaya Farm\n', 'Calibri', 36);
        window.sunmiInnerPrinter.printTextWithFont('\n   Nattandiya, Marawila\n', 'Calibri', 30);
        window.sunmiInnerPrinter.printTextWithFont('\n          032-2254811\n', 'Calibri', 24);
        // window.sunmiInnerPrinter.printTextWithFont('\n\nReturn Docket: #'+this.docketId+"\n",'Calibri',30);
        window.sunmiInnerPrinter.printOriginalText(str);
        if (!isCustCpy) {
            this.modalController.dismiss({
                'dismissed': true
            });
        }
    }
    /**
    * Add empty item to current order items list
    */
    addItem() {
        // console.log(this.curTrip.tripItems)
        // this.currOrder.isWorking = true;
        this.curReturn.retItems.push({});
        console.log(this.curReturn.retItems);
    }
    /**
     * Remove item from items list
     * @param item - Item object that in current order to be removed
     */
    removeItem(item) {
        let index = this.curReturn.retItems.indexOf(item);
        if (index > -1) {
            let rmvItemId = this.curReturn.retItems[index].item_id;
            this.toggleUpdateItemList(rmvItemId);
            this.curReturn.retItems.splice(index, 1);
        }
        console.log(this.curReturn.retItems);
    }
    /**
    *
    * @param itemId
    */
    calcPrice(itemId) {
        let index = this.curReturn.retItems.findIndex(retItem => retItem.item_id == itemId);
        console.log("index: " + index);
        if (index > -1) {
            let selectedItem = this.curReturn.retItems[index];
            console.log(selectedItem.item_id);
            let itemsIdx = this.items.findIndex(item => item.item_id == selectedItem.item_id);
            console.log(itemsIdx);
            this.curReturn.retItems[index].item_name = this.items[itemsIdx].item_name;
            this.curReturn.retItems[index].item_unit_name = this.items[itemsIdx].item_unit_name;
            this.curReturn.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        }
    }
    getAllItems() {
        if (!navigator.onLine) {
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        }
        let url = this.storage.svr_url + "ReturnCtrl/getAllItems";
        this.submitting = true;
        this.http.get(url).subscribe((outst) => {
            this.submitting = false;
            if (outst) {
                this.items = outst;
                this.items.map(item => {
                    item.isSelected = false;
                });
            }
            console.log(outst);
        });
    }
    /**
     *
     * @param itemId
     */
    toggleUpdateItemList(itemId) {
        console.log("itemId " + itemId);
        console.log(this.curReturn.retItems);
        let itemIndex = this.curReturn.retItems.findIndex(itemInArra => itemInArra.item_id == itemId);
        if (itemIndex > -1) {
            console.log("itemIndex " + itemIndex);
            let isSelectd = this.curReturn.retItems[itemIndex].isSelected;
            this.items[itemIndex].isSelected = isSelectd ? false : true;
        }
    }
    dismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.curReturn.retItems.length > 0) {
                const alert = yield this.alertController.create({
                    mode: "ios",
                    header: 'Exit return process',
                    message: 'Do you really want to exit and discard the return process?',
                    buttons: [
                        { text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                        },
                        { text: 'Discard & Exit',
                            handler: () => {
                                this.modalController.dismiss({
                                    'dismissed': true
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.modalController.dismiss({
                    'dismissed': true
                });
            }
        });
    }
};
ReturnPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
ReturnPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-return',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./return.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/return/return.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./return.page.scss */ "./src/app/members/inc/return/return.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], ReturnPage);



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-return-return-module-es2015.js.map
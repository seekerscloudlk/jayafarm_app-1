(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~inc-cust-add-cust-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/cust-add/cust-add.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/cust-add/cust-add.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"primary\">\n    <ion-toolbar class=\"toolbar-background-md\">\n        <ion-title>\n            <ion-chip outline class=\"ion-margin-vertical chip\">\n            <ion-icon class=\"chip\" name=\"business\"></ion-icon>CUSTOMER - ADD NEW \n            <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n            </ion-chip>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"ion-text-capitalize\" (click)=\"dismiss()\">Close</ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"addCustForm\" (ngSubmit)=\"addCust()\">\n        <ion-card mode=\"ios\">\n            <ion-list>\n                <ion-item class=\"ion-margin-bottom\">\n                    <ion-icon name=\"business\"></ion-icon>\n                    <ion-label position=\"floating\">Customer Name</ion-label>\n                    <ion-input formControlName=\"cust_name\"></ion-input>\n                </ion-item> \n                <ion-item class=\"ion-margin-bottom\">\n                    <ion-icon name=\"locate\"></ion-icon>\n                    <ion-label position=\"floating\">Address Line 1</ion-label>\n                    <ion-input formControlName=\"address_line1\"></ion-input>\n                </ion-item>\n                <ion-item class=\"ion-margin-bottom\">\n                    <ion-icon name=\"locate\"></ion-icon>\n                    <ion-label position=\"floating\">Address Line 2</ion-label>\n                    <ion-input formControlName=\"address_line2\"></ion-input>\n                </ion-item>\n                <ion-item class=\"ion-margin-bottom\">\n                    <ion-icon name=\"locate\"></ion-icon>\n                    <ion-label position=\"floating\">Address Line 3</ion-label>\n                    <ion-input formControlName=\"address_line3\"></ion-input>\n                </ion-item>\n                <ion-item class=\"ion-margin-bottom\">\n                    <ion-icon name=\"mail\"></ion-icon>\n                    <ion-label position=\"floating\">E-Mail</ion-label>\n                    <ion-input type='email' email formControlName=\"cust_email\"></ion-input>\n                </ion-item>\n                <ion-item class=\"ion-margin-bottom\">\n                    <ion-icon name=\"call\"></ion-icon>\n                    <ion-label position=\"floating\">Telephone</ion-label>\n                    <ion-input type='tel' formControlName=\"cust_tp\"></ion-input>\n                </ion-item>\n                <ion-item class=\"ion-margin-bottom\">\n                    <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n                    <ion-label position=\"floating\">Customer Category</ion-label>\n                    <ion-select slot=\"end\"  mode=\"ios\" placeholder=\"Select Category\" \n                    formControlName=\"cat_id\" style=\"max-width: 100%;\">\n                            <ion-select-option *ngFor=\"let cat of custCats\" value=\"{{cat.cat_id}}\">\n                                {{cat.cat_name}}\n                            </ion-select-option>\n                        </ion-select>\n                </ion-item>   \n            </ion-list>\n        </ion-card>\n    <ion-button class=\"ion-margin\" mode=\"ios\" slots=\"start\" expand=\"block\" type=\"submit\" [disabled]=\"!addCustForm.valid\">Add Customer</ion-button>\n    </form>\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/members/inc/cust-add/cust-add-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/members/inc/cust-add/cust-add-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CustAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustAddPageRoutingModule", function() { return CustAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cust_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cust-add.page */ "./src/app/members/inc/cust-add/cust-add.page.ts");




const routes = [
    {
        path: '',
        component: _cust_add_page__WEBPACK_IMPORTED_MODULE_3__["CustAddPage"]
    }
];
let CustAddPageRoutingModule = class CustAddPageRoutingModule {
};
CustAddPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustAddPageRoutingModule);



/***/ }),

/***/ "./src/app/members/inc/cust-add/cust-add.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/members/inc/cust-add/cust-add.module.ts ***!
  \*********************************************************/
/*! exports provided: CustAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustAddPageModule", function() { return CustAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cust_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cust-add-routing.module */ "./src/app/members/inc/cust-add/cust-add-routing.module.ts");
/* harmony import */ var _cust_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cust-add.page */ "./src/app/members/inc/cust-add/cust-add.page.ts");







let CustAddPageModule = class CustAddPageModule {
};
CustAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cust_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustAddPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_cust_add_page__WEBPACK_IMPORTED_MODULE_6__["CustAddPage"]]
    })
], CustAddPageModule);



/***/ }),

/***/ "./src/app/members/inc/cust-add/cust-add.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/members/inc/cust-add/cust-add.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvaW5jL2N1c3QtYWRkL2N1c3QtYWRkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/members/inc/cust-add/cust-add.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/inc/cust-add/cust-add.page.ts ***!
  \*******************************************************/
/*! exports provided: CustAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustAddPage", function() { return CustAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let CustAddPage = class CustAddPage {
    constructor(modalController, navParams, authService, storage, http, formBuilder, alertController) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.custCats = [];
        this.submitting = false;
        this.currRootId = this.navParams.get('currRootId');
        console.log(this.currRootId);
        this.addCustForm = formBuilder.group({
            cust_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            address_line1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            address_line2: [''],
            address_line3: [''],
            cust_email: [''],
            cust_tp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cat_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            route_id: [this.currRootId],
            cust_id: ['']
        });
    }
    ngOnInit() {
        this.getCustCats();
    }
    addCust() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.addCustForm.value);
            if (!navigator.onLine) {
                this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
                return;
            }
            const ParseHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            };
            let url = this.storage.svr_url + "CustomerCtrl/addCustomer";
            let postData = this.addCustForm.value;
            this.submitting = true;
            const alert = yield this.alertController.create({
                mode: "ios",
                header: 'Confirm adding new customer',
                message: 'Do you really want to add customer?',
                buttons: [
                    { text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { this.submitting = false; }
                    },
                    { text: 'Add Customer',
                        handler: () => {
                            console.log(postData);
                            this.http.post(url, postData, ParseHeaders).subscribe((res) => {
                                this.submitting = false;
                                console.log(res);
                                if (res !== false) {
                                    this.authService.showToast("<b>The customer added successfully..<ion-icon name='checkmark-circle-outline'></ion-icon></b>");
                                    this.modalController.dismiss({
                                        'dismissed': true,
                                        'isAdded': true
                                    });
                                }
                                else {
                                    this.authService.showToast('Problem adding customer..');
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
        });
    }
    getCustCats() {
        if (!navigator.onLine)
            this.authService.showToast("<b>No internet access..<ion-icon name='information-circle-outline'></ion-icon></b><br>Cannot connect to the server..");
        let url = this.storage.svr_url + "CustomerCtrl/getCustCats";
        this.submitting = true;
        this.http.get(url).subscribe((custCats) => {
            console.log(custCats);
            if (custCats) {
                this.custCats = custCats;
            }
        });
        this.submitting = false;
    }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true,
        });
    }
};
CustAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
CustAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cust-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cust-add.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/cust-add/cust-add.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cust-add.page.scss */ "./src/app/members/inc/cust-add/cust-add.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], CustAddPage);



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~inc-cust-add-cust-add-module-es2015.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inc-order-info-order-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/order-info/order-info.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/order-info/order-info.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersIncOrderInfoOrderInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            <ion-chip outline class=\"ion-margin-vertical chip\">\n                <ion-icon class=\"chip\" name=\"information-circle-outline\"></ion-icon>\n                <ion-label> INVOICE</ion-label>\n                <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n            </ion-chip>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"ion-text-capitalize\" (click)=\"dismiss()\">Close</ion-button>\n        </ion-buttons>\n    </ion-toolbar> \n  </ion-header>\n<ion-content>\n    <ion-card style=\"margin-bottom: 40px; margin-left: 0px;\" >\n        <ion-card-header>\n            <ion-card-title>Invoice #{{order.odr_id}}</ion-card-title>\n            <!-- <ion-card-subtitle>{{order.odr_datetime}}</ion-card-subtitle> -->\n            <ion-grid>\n                <ion-row>\n                    <ion-col class=\"ion-float-left\">\n                        <div>Invoice Date</div>\n                    </ion-col>\n                    <ion-col class=\"ion-float-right\">\n                        <div> {{order.odr_datetime}} </div>\n                    </ion-col>\n                </ion-row>\n                <!-- <ion-row>\n                    <ion-col class=\"ion-float-left\">\n                        <div>Sales Rep</div>\n                    </ion-col>\n                    <ion-col class=\"ion-float-right\">\n                        <div> {{rep.repFname}} {{rep.repLname}}</div>\n                    </ion-col>\n                </ion-row> -->\n            </ion-grid>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">\n                            <div><h5><b>Item | Price</b></h5></div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-left\">\n                            <div><h5><b>Qty</b></h5></div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div class=\"ion-text-right\"> <h5><b>Amount</b></h5> </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n            <ion-item *ngFor=\"let item of order.odr_items\">\n\n                <ion-grid>\n                    <div style=\"margin-left: 5px;\"><h3><b>{{item.item_name}}</b></h3></div>\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">\n                            <div>Rs.{{item.price_sold}}</div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-left\">\n                            <div>X {{item.qty}}</div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div class=\"ion-text-right\">\n                                Rs.{{item.price_sold*item.qty | number : '1.2-2'}}\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row style=\"background-color: rgb(107, 107, 107); color: #fff;\">\n                        <ion-col class=\"ion-float-left\">\n                            <div>Sold price diff.</div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-left\">\n                            <div class=\"ion-text-right\"> {{item.sold_price_diff}}</div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n            <ion-item>\n                <ion-grid>\n                    <ion-row style=\"background-color: rgb(42, 42, 42); color: #fff;\">\n                        <ion-col class=\"ion-float-left\">\n                            <div><h5><b>Total Bill Amount</b></h5></div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div class=\"ion-text-right\">\n                                <h5><b>Rs.{{order.odr_amount | number : '1.2-2'}}</b></h5>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row style=\"background-color: rgb(5, 5, 5); color: #fff;\">\n                        <ion-col class=\"ion-float-left\">\n                            <div><h5><b>Paid Amount</b></h5></div>\n                        </ion-col>\n                        <ion-col class=\"ion-float-right\">\n                            <div class=\"ion-text-right\">\n                                <h5><b>Rs.{{order.odr_paid_amount | number : '1.2-2'}}</b></h5>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n            <ion-item >\n                <ion-textarea placeholder=\"Remarks..\" readonly value=\"{{order.odr_remark}}\"></ion-textarea>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/members/inc/order-info/order-info-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/members/inc/order-info/order-info-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: OrderInfoPageRoutingModule */

  /***/
  function srcAppMembersIncOrderInfoOrderInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderInfoPageRoutingModule", function () {
      return OrderInfoPageRoutingModule;
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


    var _order_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-info.page */
    "./src/app/members/inc/order-info/order-info.page.ts");

    var routes = [{
      path: '',
      component: _order_info_page__WEBPACK_IMPORTED_MODULE_3__["OrderInfoPage"]
    }];

    var OrderInfoPageRoutingModule = function OrderInfoPageRoutingModule() {
      _classCallCheck(this, OrderInfoPageRoutingModule);
    };

    OrderInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/members/inc/order-info/order-info.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/members/inc/order-info/order-info.module.ts ***!
    \*************************************************************/

  /*! exports provided: OrderInfoPageModule */

  /***/
  function srcAppMembersIncOrderInfoOrderInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderInfoPageModule", function () {
      return OrderInfoPageModule;
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


    var _order_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-info-routing.module */
    "./src/app/members/inc/order-info/order-info-routing.module.ts");
    /* harmony import */


    var _order_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-info.page */
    "./src/app/members/inc/order-info/order-info.page.ts");

    var OrderInfoPageModule = function OrderInfoPageModule() {
      _classCallCheck(this, OrderInfoPageModule);
    };

    OrderInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderInfoPageRoutingModule"]],
      declarations: [_order_info_page__WEBPACK_IMPORTED_MODULE_6__["OrderInfoPage"]]
    })], OrderInfoPageModule);
    /***/
  },

  /***/
  "./src/app/members/inc/order-info/order-info.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/members/inc/order-info/order-info.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersIncOrderInfoOrderInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvaW5jL29yZGVyLWluZm8vb3JkZXItaW5mby5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/members/inc/order-info/order-info.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/members/inc/order-info/order-info.page.ts ***!
    \***********************************************************/

  /*! exports provided: OrderInfoPage */

  /***/
  function srcAppMembersIncOrderInfoOrderInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderInfoPage", function () {
      return OrderInfoPage;
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

    var OrderInfoPage = /*#__PURE__*/function () {
      function OrderInfoPage(modalController, navParams) {
        _classCallCheck(this, OrderInfoPage);

        this.modalController = modalController;
        this.navParams = navParams;
        this.order = navParams.get('order');
      }

      _createClass(OrderInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      }]);

      return OrderInfoPage;
    }();

    OrderInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    OrderInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/inc/order-info/order-info.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-info.page.scss */
      "./src/app/members/inc/order-info/order-info.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], OrderInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=inc-order-info-order-info-module-es5.js.map
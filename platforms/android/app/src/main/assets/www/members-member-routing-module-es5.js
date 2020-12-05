function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-member-routing-module"], {
  /***/
  "./src/app/members/member-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/members/member-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: MemberRoutingModule */

  /***/
  function srcAppMembersMemberRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberRoutingModule", function () {
      return MemberRoutingModule;
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

    var routes = [{
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardPageModule'
    }, {
      path: 'cust-info',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inc-cust-info-cust-info-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./inc/cust-info/cust-info.module */
        "./src/app/members/inc/cust-info/cust-info.module.ts")).then(function (m) {
          return m.CustInfoPageModule;
        });
      }
    }, {
      path: 'trips',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./inc/trips/trips.module */
        "./src/app/members/inc/trips/trips.module.ts")).then(function (m) {
          return m.TripsPageModule;
        });
      }
    }, {
      path: 'print',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./inc/print/print.module */
        "./src/app/members/inc/print/print.module.ts")).then(function (m) {
          return m.PrintPageModule;
        });
      }
    }, {
      path: 'add-order',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | inc-add-order-add-order-module */
        [__webpack_require__.e("default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-outst-more-outst-more-module~i~e4f143a4"), __webpack_require__.e("default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-return-return-module"), __webpack_require__.e("default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-order-history-order-history-module"), __webpack_require__.e("default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-outst-settle-outst-settle-module"), __webpack_require__.e("default~dashboard-dashboard-module~inc-add-order-add-order-module")]).then(__webpack_require__.bind(null,
        /*! ./inc/add-order/add-order.module */
        "./src/app/members/inc/add-order/add-order.module.ts")).then(function (m) {
          return m.AddOrderPageModule;
        });
      }
    }, {
      path: 'trips-more',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./inc/trips-more/trips-more.module */
        "./src/app/members/inc/trips-more/trips-more.module.ts")).then(function (m) {
          return m.TripsMorePageModule;
        });
      }
    }, {
      path: 'order-history',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inc-order-history-order-history-module */
        "default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-order-history-order-history-module").then(__webpack_require__.bind(null,
        /*! ./inc/order-history/order-history.module */
        "./src/app/members/inc/order-history/order-history.module.ts")).then(function (m) {
          return m.OrderHistoryPageModule;
        });
      }
    }, {
      path: 'order-info',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inc-order-info-order-info-module */
        "inc-order-info-order-info-module").then(__webpack_require__.bind(null,
        /*! ./inc/order-info/order-info.module */
        "./src/app/members/inc/order-info/order-info.module.ts")).then(function (m) {
          return m.OrderInfoPageModule;
        });
      }
    }, {
      path: 'return',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inc-return-return-module */
        "default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-return-return-module").then(__webpack_require__.bind(null,
        /*! ./inc/return/return.module */
        "./src/app/members/inc/return/return.module.ts")).then(function (m) {
          return m.ReturnPageModule;
        });
      }
    }, {
      path: 'outst-settle',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | inc-outst-settle-outst-settle-module */
        [__webpack_require__.e("default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-outst-more-outst-more-module~i~e4f143a4"), __webpack_require__.e("default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-outst-settle-outst-settle-module")]).then(__webpack_require__.bind(null,
        /*! ./inc/outst-settle/outst-settle.module */
        "./src/app/members/inc/outst-settle/outst-settle.module.ts")).then(function (m) {
          return m.OutstSettlePageModule;
        });
      }
    }, {
      path: 'outst-more',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inc-outst-more-outst-more-module */
        "default~dashboard-dashboard-module~inc-add-order-add-order-module~inc-outst-more-outst-more-module~i~e4f143a4").then(__webpack_require__.bind(null,
        /*! ./inc/outst-more/outst-more.module */
        "./src/app/members/inc/outst-more/outst-more.module.ts")).then(function (m) {
          return m.OutstMorePageModule;
        });
      }
    }, {
      path: 'cust-add',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inc-cust-add-cust-add-module */
        "default~dashboard-dashboard-module~inc-cust-add-cust-add-module").then(__webpack_require__.bind(null,
        /*! ./inc/cust-add/cust-add.module */
        "./src/app/members/inc/cust-add/cust-add.module.ts")).then(function (m) {
          return m.CustAddPageModule;
        });
      }
    }];

    var MemberRoutingModule = function MemberRoutingModule() {
      _classCallCheck(this, MemberRoutingModule);
    };

    MemberRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MemberRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=members-member-routing-module-es5.js.map
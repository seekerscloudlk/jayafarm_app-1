(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-button (click)=\"login()\" expand=\"block\">Login</ion-button>\n  <ion-button expand=\"block\" color=\"secondary\" routerLink=\"/register\" routerDirection=\"forward\">Register</ion-button>\n</ion-content> -->\n\n<ion-header color=\"primary\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-chip outline class=\"ion-margin-vertical chip\">\n        <ion-icon class=\"chip\" name=\"log-in\"></ion-icon>\n        <ion-label> SIGN-IN</ion-label>\n        <ion-spinner style=\"margin-left: 16px;\" name=\"crescent\" color=\"light\" [hidden]=\"!submitting\"></ion-spinner>\n      </ion-chip>\n      <ion-buttons slot=\"end\">\n          <ion-menu-button><ion-icon class=\"menu\" name=\"log-in\"></ion-icon></ion-menu-button>\n      </ion-buttons>\n    </ion-title>\n   </ion-toolbar> \n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n    <ion-card mode=\"ios\">\n      <ion-list>\n        <ion-item class=\"ion-margin-bottom\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label position=\"floating\">Rep ID</ion-label>\n          <ion-input type='number' formControlName=\"repID\"></ion-input>\n        </ion-item> \n        <ion-item class=\"ion-margin-bottom\">\n          <ion-icon name=\"unlock\"></ion-icon>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type='password' formControlName=\"password\"></ion-input>\n        </ion-item>   \n      </ion-list>\n    </ion-card>\n    <ion-button class=\"ion-margin\" mode=\"ios\" slots=\"start\" expand=\"block\" type=\"submit\" [disabled]=\"!loginForm.valid\">Sign-in</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/public/login/login-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/public/login/login-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/public/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/public/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/public/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/public/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/public/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/public/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/public/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let LoginPage = class LoginPage {
    constructor(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.submitting = false;
        this.loginForm = formBuilder.group({
            repID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    login() {
        this.submitting = true;
        this.authService.login(this.loginForm.value['repID'], this.loginForm.value['password']);
        this.submitting = false;
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/public/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=public-login-login-module-es2015.js.map
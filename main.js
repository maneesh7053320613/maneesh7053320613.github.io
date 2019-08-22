(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/Guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(route) {
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var auth = localStorage.getItem('email') ? true : false;
        if (!auth) {
            this.route.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Guards/guest.guard.ts":
/*!***************************************!*\
  !*** ./src/app/Guards/guest.guard.ts ***!
  \***************************************/
/*! exports provided: GuestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestGuard", function() { return GuestGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GuestGuard = /** @class */ (function () {
    function GuestGuard(route) {
        this.route = route;
    }
    GuestGuard.prototype.canActivate = function (next, state) {
        var guest = localStorage.getItem('email') ? false : true;
        var id = JSON.parse(localStorage.getItem('_id'));
        if (!guest) {
            this.route.navigate(['/home', id]);
        }
        return true;
    };
    GuestGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GuestGuard);
    return GuestGuard;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/home/home.component */ "./src/app/homepage/home/home.component.ts");
/* harmony import */ var _board_board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/board/board.component */ "./src/app/board/board/board.component.ts");
/* harmony import */ var _profile_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/userprofile/userprofile.component */ "./src/app/profile/userprofile/userprofile.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _homepage_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/detail/detail.component */ "./src/app/homepage/detail/detail.component.ts");
/* harmony import */ var _teamprofile_teamprofile_teamprofile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teamprofile/teamprofile/teamprofile.component */ "./src/app/teamprofile/teamprofile/teamprofile.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _Guards_guest_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Guards/guest.guard */ "./src/app/Guards/guest.guard.ts");
/* harmony import */ var _Guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Guards/auth.guard */ "./src/app/Guards/auth.guard.ts");













var routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    // {path:'home/board/:id/:title/:color',component:BoardComponent},
    { path: 'detail', component: _homepage_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"] },
    { path: 'home/:user_id', component: _homepage_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'board/:_id', component: _board_board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"] },
    { path: 'teamprofile/:_id', component: _teamprofile_teamprofile_teamprofile_component__WEBPACK_IMPORTED_MODULE_8__["TeamprofileComponent"] },
    { path: 'userprofile', component: _profile_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_5__["UserprofileComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], canActivate: [_Guards_guest_guard__WEBPACK_IMPORTED_MODULE_11__["GuestGuard"]] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], canActivate: [_Guards_guest_guard__WEBPACK_IMPORTED_MODULE_11__["GuestGuard"]] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n<div>\n\n    <app-detail [myinput]=\"title\"></app-detail>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TaskManagement';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.module */ "./src/app/homepage/homepage.module.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _board_board_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./board/board.module */ "./src/app/board/board.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _teamprofile_teamprofile_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./teamprofile/teamprofile.module */ "./src/app/teamprofile/teamprofile.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _homepage_createboard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./homepage/createboard.service */ "./src/app/homepage/createboard.service.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/service.service */ "./src/app/services/service.service.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__["PagenotfoundComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_9__["HomepageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _board_board_module__WEBPACK_IMPORTED_MODULE_11__["BoardModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_12__["ProfileModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _teamprofile_teamprofile_module__WEBPACK_IMPORTED_MODULE_20__["TeamprofileModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__["AuthModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"] }, _homepage_createboard_service__WEBPACK_IMPORTED_MODULE_22__["CreateboardService"], _services_service_service__WEBPACK_IMPORTED_MODULE_23__["ServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







// import { SocialLoginModule} from "angularx-social-login";
// import { AuthServiceConfig , GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
// const config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("841171192848-v7vv6ddhl96agrg358q8seunj30k2bjc.apps.googleusercontent.com")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("2650645081634542")
//   },
//   {
//     id: LinkedInLoginProvider.PROVIDER_ID,
//     provider: new LinkedInLoginProvider("81hhype0qj9xu4")
//   }
// ]);
// export function provideConfig() {
//   return config;
// }
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                // SocialLoginModule
            ],
            providers: [
            //   {
            //   provide: AuthServiceConfig,
            //   useFactory: provideConfig
            // }
            ],
            exports: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.checkStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.isUserLoggedIn = this.checkStatus.asObservable();
        this.loginapi = "http://localhost:3000/api/login";
        this.regapi = "http://localhost:3000/api/user";
    }
    AuthService.prototype.checkLogin = function () {
        var token = localStorage.getItem('email');
        if (token) {
            this.checkStatus.next(true);
        }
        else {
            this.checkStatus.next(false);
        }
    };
    AuthService.prototype.loginUser = function (auth) {
        var _this = this;
        return this.http.post(this.loginapi, auth).subscribe(function (checkuser) {
            if (checkuser.email) {
                localStorage.setItem('_id', JSON.stringify(checkuser._id));
                localStorage.setItem('email', JSON.stringify(checkuser.email));
                localStorage.setItem('password', JSON.stringify(checkuser.password));
                localStorage.setItem('uname', JSON.stringify(checkuser.uname));
                localStorage.setItem('date', JSON.stringify(checkuser.date));
                _this.checkLogin();
            }
        });
    };
    AuthService.prototype.getuser = function (id) {
        return this.http.get(this.regapi + '' + id);
    };
    AuthService.prototype.userReg = function (auth) {
        return this.http.post(this.regapi, auth);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth.ts":
/*!******************************!*\
  !*** ./src/app/auth/auth.ts ***!
  \******************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
var Auth = /** @class */ (function () {
    function Auth() {
    }
    return Auth;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container register-form\">\n    <div class=\"col-md-8 mx-auto\">\n  <div class=\"form\">\n      <div class=\"note\">\n          <p>Login </p>\n      </div>\n\n      <div class=\"form-content\">\n          <div class=\"row\">\n          <div class=\"col-md-12\">\n\n   \n            <form #loginForm=\"ngForm\">\n\n\n              <div class=\"form-group\">\n                <input type=\"email\" name=\"email\" ngModel #email class=\"form-control\" placeholder=\"Email *\" required/>\n            </div>\n\n            <div class=\"form-group\">\n              <input type=\"password\" name=\"password\" ngModel #password class=\"form-control\" placeholder=\"Your Password *\" required/>\n            </div>\n          \n            </form>\n\n            <button type=\"button\" (click)=\"onLoginUser(loginForm)\" class=\"btnSubmit\" [disabled] =\"loginForm.invalid\">Login</button>\n          </div>\n               \n              </div>\n\n          </div>\n         \n      </div>\n\n      <!-- <div class=\"  bg-transparent text-center\">\n        <div *ngIf=\"!user\" class=\"card text-center\">\n         \n          <div class=\"card-block\">\n          \n            <p class=\"card-text\">Sign in with</p>\n          </div>\n          <div class=\"card-block\">\n            <button class=\"btn btn-social-icon btn-google\" (click)=\"signInWithGoogle()\"><span class=\"fa fa-google\"></span></button>\n            <button class=\"btn btn-social-icon btn-facebook\" (click)=\"signInWithFB()\"><span class=\"fa fa-facebook\"></span></button>\n     <button class=\"btn btn-social-icon btn-linkedin\" (click)=\"signInWithLinkedIn()\"><span class=\"fa fa-linkedin\"></span></button> \n          </div>\n        </div>\n        <div *ngIf=\"user\" class=\"text-center\">\n          <h6 class=\"card-header\">\n            Social Login Demo\n          </h6>\n          <div class=\"card-block\"></div>\n          <img class=\"card-img-top img-responsive photo\" src=\"{{ user.photoUrl }}\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">{{ user.name }}</h4>\n            <p class=\"card-text\">{{ user.email }}</p>\n          </div>\n          <div class=\"card-block\">\n            <button class=\"btn btn-danger\" (click)=\"signOut()\">Sign out</button>\n          </div>\n        </div>\n      </div> -->\n\n  </div>\n</div>\n<!-- <button (click)=\"sendMessage()\">Send Message</button> -->\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




// import { SocialUser } from 'angularx-social-login';
// import { AuthService } from 'angularx-social-login';
// import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider  } from "angularx-social-login";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    LoginComponent.prototype.onLoginUser = function (e) {
        var _this = this;
        var user = {
            email: e.controls.email.value,
            password: e.controls.password.value
        };
        var id = JSON.parse(localStorage.getItem('_id'));
        alert(id);
        this.authService.loginUser(user);
        this.authService.isUserLoggedIn.subscribe(function (val) {
            _this.LoggedIn = val;
            _this.route.navigate(['/home', id]);
        });
    };
    // user : SocialUser;
    // message: string = "Hola Mundo!"
    // @Output() messageEvent = new EventEmitter<any>();
    // sendMessage() {
    //   this.messageEvent.emit(this.user) 
    // }
    LoginComponent.prototype.ngOnInit = function () {
        //   this.authService.authState.subscribe((user) => {
        //    this.user = user;
        //    console.log(user);
        //  });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css"), __webpack_require__(/*! ../signup/signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".note\r\n{\r\n    text-align: center;\r\n    height: 80px;\r\n    background-color: #133f6b;\r\n    color: #fff;\r\n    font-size: 25px;\r\n    line-height: 80px;\r\n    margin-top:60px;\r\n}\r\n\r\n.form-group input {\r\n    margin: 30px 0px;\r\n    height: 45px;\r\n    font-size: 13px;\r\n    border-radius: 8px!important;\r\n}\r\n\r\n.form-content\r\n{\r\n    padding: 5%;\r\n    border: 1px solid #ced4da;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.form-control{\r\n    border-radius:1.5rem;\r\n}\r\n\r\n.btnSubmit\r\n{\r\n    border:none;\r\n    border-radius:1.5rem;\r\n    padding: 1%;\r\n    width: 20%;\r\n    cursor: pointer;\r\n    background: #133f6b;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzNmNmI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDo2MHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dCB7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udGVudFxyXG57XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czoxLjVyZW07XHJcbn1cclxuLmJ0blN1Ym1pdFxyXG57XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MS41cmVtO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzEzM2Y2YjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container register-form\">\n    <div class=\"col-md-8 mx-auto\">\n  <div class=\"form\">\n      <div class=\"note\">\n    \n          <p>Signup </p>\n      </div>\n\n      <div class=\"form-content\">\n          <div class=\"row\">\n          <div class=\"col-md-12\">\n\n               <form [formGroup]=\"registeruser\" (ngSubmit)=\"ragisterUser()\">\n\n                  <div class=\"form-group\">\n                      <input type=\"text\" name=\"name\" formControlName=\"uname\" [(ngModel)]=\"reg.uname\" class=\"form-control\" placeholder=\"Your Name *\" required/>\n                  </div>\n    \n                  <div class=\"form-group\">\n                      <input type=\"email\" name=\"email\" formControlName=\"email\" [(ngModel)]=\"reg.email\" class=\"form-control\" placeholder=\"Email *\" required/>\n                      <!-- <span>{{reg.error}}</span> -->\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" name=\"password\" formControlName=\"password\" [(ngModel)]=\"reg.password\" class=\"form-control\" placeholder=\"Your Password *\" required/>\n                  </div>\n                  <button type=\"submit\" [disabled]=\"!registeruser.valid\" class=\"btnSubmit\">Submit</button>\n               </form>              \n          </div>\n              \n              </div>\n\n          </div>\n         \n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth */ "./src/app/auth/auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(authservice, fb, route) {
        this.authservice = authservice;
        this.fb = fb;
        this.route = route;
        this.reg = new _auth__WEBPACK_IMPORTED_MODULE_4__["Auth"]();
    }
    SignupComponent.prototype.ragisterUser = function () {
        var _this = this;
        this.authservice.userReg(this.reg).subscribe(function (data) {
            _this.reg = data;
            // if(data){
            //   this.route.navigate(['/login']);
            // }
        }, function (error) {
            _this.reg = error;
            // if(error){
            //   this.route.navigate(['/signup']);
            // }
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.registeruser = this.fb.group({
            id: [''],
            uname: [''],
            email: [''],
            password: [''],
            imageurl: [''],
            create_date: [''],
            __v: ['']
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/board/board.module.ts":
/*!***************************************!*\
  !*** ./src/app/board/board.module.ts ***!
  \***************************************/
/*! exports provided: BoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModule", function() { return BoardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board/board.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var BoardModule = /** @class */ (function () {
    function BoardModule() {
    }
    BoardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            exports: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]]
        })
    ], BoardModule);
    return BoardModule;
}());



/***/ }),

/***/ "./src/app/board/board/board.component.css":
/*!*************************************************!*\
  !*** ./src/app/board/board/board.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boardpage{\r\n  position: fixed;\r\n  top: 46px;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.boardpage ul{\r\n    padding: 14px;\r\n    list-style-type: none;\r\n    margin: 0px;\r\n}\r\n\r\n.boardpage ul li{\r\n    float: left;\r\n    padding: 0px 10px;\r\n    border-right: 1px solid #ffffff29;\r\n}\r\n\r\n.boardpage ul li:hover{\r\n    background-color: #f8f9fa42;\r\n}\r\n\r\n.boardpage ul li a{\r\n    color: white;\r\n    text-decoration: none;\r\n    display: block;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n}\r\n\r\n.board_topbar .dropdown-menu{\r\n\r\n    padding: 20px 36px;\r\n\r\n}\r\n\r\n.board_topbar .dropdown-menu button{\r\n    margin: 10px 0px;\r\n    background: #fc3faa;\r\n    color: white;\r\n    border: none;\r\n    padding: 7px 20px;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n/******************************************************drag and drop *************************************/\r\n\r\n.example-container {\r\n  width: 250px;\r\n  max-width: 100%;\r\n  margin: 0 10px 25px 0;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  box-shadow: 0px 5px 10px #5a5a5a;\r\n  border-radius: 5px;\r\n  }\r\n\r\n.example-list {\r\n    border: solid 1px #ccc;\r\n    background: #aaa;\r\n    display: block;\r\n    max-height: 480px;\r\n    overflow-y: auto;\r\n  }\r\n\r\n.example-box {\r\n    padding: 10px 10px 0px 10px;\r\n    border-bottom: solid 1px #ccc;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    display: inherit;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: white;\r\n    font-size: 14px;\r\n  }\r\n\r\n.cdk-drag-preview {\r\n    background-color: #000;\r\n    color: white;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n                \r\n  }\r\n\r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n\r\n.cdk-drag-animating {\r\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\n.example-box:last-child {\r\n    border: none;\r\n  }\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\ninput.cardname{\r\n    width: 72%;\r\n    height: 35px;\r\n    padding-left: 12px;\r\n    font-size: 14px;\r\n    border: navajowhite;\r\n    outline: none;\r\n  }\r\n\r\n.add_card{\r\n    padding: 5px 9px;\r\n    outline: none;\r\n    color: rgba(0,0,0,.87);\r\n    background: linear-gradient(to right,#b4b9bd,#dee2e6);\r\n    border: none;\r\n    text-shadow: 1px 1px 1px #6c757d;\r\n  }\r\n\r\n.section-heading {\r\n    background-color: #b71d74;\r\n    padding: 10px;\r\n    color: white;\r\n    border-radius: 10px 10px 0px 0px;\r\n}\r\n\r\n.createlistgroup{\r\n  height: 65px;\r\n  width: 273px;\r\n  background-color: #1a4167;\r\n  color: white;\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  }\r\n\r\n.card_box{\r\n\r\n  height: 611px;\r\n  width: 1366px;\r\n  padding: 62px 10px;\r\n  background-color: #e9ecef;\r\n  overflow-x: auto;\r\n  float: left;\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n\r\n}\r\n\r\n.label {\r\n  display: flex;\r\n}\r\n\r\n.label span {\r\n  display: inline-block;\r\n  height: 10px;\r\n  width: 30px;\r\n  background-color: #8BC34A;\r\n  margin: 3px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.members span {\r\n  height: 30px;\r\n  width: 30px;\r\n  line-height: 30px;\r\n  background-color: #607D8B;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  color: white;\r\n  margin: 5px 1px;\r\n  font-size: 11px;\r\n}\r\n\r\n.date span {\r\n  margin: 0px 3px;\r\n}\r\n\r\n.date{\r\n  margin: 3px 0px;\r\n}\r\n\r\n.board_title{\r\n  font-size: 14px;\r\n  background-color: #c13464;\r\n  padding: 10px;\r\n  margin: 0px;\r\n  color: white;\r\n  border-radius: 5px 5px 0px 0px;\r\n}\r\n\r\n.add_new_card{\r\n  margin: 0px;\r\n  font-size: 14px;\r\n  padding-left: 10px;\r\n  background-color: #dee2e6;\r\n  height: 35px;\r\n  width: 100%;\r\n  line-height: 35px;\r\n  cursor: pointer;\r\n  border-radius: 0px 0px 5px 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87QUFDVDs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFHQTs7SUFFSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUEsMEdBQTBHOztBQUcxRztFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQjs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQjs7a0RBRThDOztFQUVoRDs7QUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFQTtJQUNFLDhEQUFzRDtJQUF0RCxzREFBc0Q7SUFBdEQsMEdBQXNEO0VBQ3hEOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsOERBQXNEO0lBQXRELHNEQUFzRDtJQUF0RCwwR0FBc0Q7RUFDeEQ7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osZ0NBQWdDO0VBQ2xDOztBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjs7QUFJRjs7RUFFRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixhQUFhOztBQUVmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2FyZHBhZ2V7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNDZweDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uYm9hcmRwYWdlIHVse1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uYm9hcmRwYWdlIHVsIGxpe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmYyOTtcclxufVxyXG5cclxuLmJvYXJkcGFnZSB1bCBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE0MjtcclxufVxyXG5cclxuLmJvYXJkcGFnZSB1bCBsaSBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG4uYm9hcmRfdG9wYmFyIC5kcm9wZG93bi1tZW51e1xyXG5cclxuICAgIHBhZGRpbmc6IDIwcHggMzZweDtcclxuXHJcbn1cclxuXHJcbi5ib2FyZF90b3BiYXIgLmRyb3Bkb3duLW1lbnUgYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYzNmYWE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipkcmFnIGFuZCBkcm9wICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAxMHB4IDI1cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggIzVhNWE1YTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWxpc3Qge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC1oZWlnaHQ6IDQ4MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgICAgICBcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuICBpbnB1dC5jYXJkbmFtZXtcclxuICAgIHdpZHRoOiA3MiU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IG5hdmFqb3doaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLmFkZF9jYXJke1xyXG4gICAgcGFkZGluZzogNXB4IDlweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNiNGI5YmQsI2RlZTJlNik7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzZjNzU3ZDtcclxuICB9XHJcbiAgLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxZDc0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uY3JlYXRlbGlzdGdyb3Vwe1xyXG4gIGhlaWdodDogNjVweDtcclxuICB3aWR0aDogMjczcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNDE2NztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4uY2FyZF9ib3h7XHJcblxyXG4gIGhlaWdodDogNjExcHg7XHJcbiAgd2lkdGg6IDEzNjZweDtcclxuICBwYWRkaW5nOiA2MnB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcbi5sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxhYmVsIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhCQzM0QTtcclxuICBtYXJnaW46IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5tZW1iZXJzIHNwYW4ge1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDVweCAxcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi5kYXRlIHNwYW4ge1xyXG4gIG1hcmdpbjogMHB4IDNweDtcclxufVxyXG4uZGF0ZXtcclxuICBtYXJnaW46IDNweCAwcHg7XHJcbn1cclxuLmJvYXJkX3RpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzEzNDY0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxufVxyXG5cclxuLmFkZF9uZXdfY2FyZHtcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/board/board/board.component.html":
/*!**************************************************!*\
  !*** ./src/app/board/board/board.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- The Modal -->\n  <div class=\"modal fade\" id=\"myModal\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n      \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal Heading</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          Modal body..\n        </div>\n        \n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n\n  <div *ngFor=\"let boarddata of boardlist\">\n\n<div class=\"boardpage\">\n\n<div class=\"container-fluid\" style=\"background-color:#1a41678a;\nmargin-bottom: 5px;\">\n\n\n    <div class=\"board_topbar\">\n\n<ul>\n\n  <li class=\"dropdown\"> <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{boarddata.title}}</a> \n  \n    <div class=\"dropdown-menu\">\n      <p><b>Rename Board</b></p>\n      <hr>\n       <label>Name</label>\n       <input type=\"text\" [(ngModel)]=\"boardname\" #boardnam>\n       <button type=\"button\">Rename</button>\n    </div>\n  \n  </li>\n  <li> <a><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></a> </li>\n  <li> <a>Personal</a> </li>\n  <li> <a><i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i> Private</a> </li>\n  <li> <a>Welcome Board</a> </li>\n  <li> <a>Welcome Board</a> </li>\n\n</ul>\n\n    </div>\n    <br>\n\n</div>\n\n\n</div>\n\n<div class=\"card_box\" [style.background-color]=\"boarddata.color_code\" [ngStyle]=\"{'background-image': 'url(' + boarddata.color_code + ')'}\">\n\n  <div cdkDropList cdkDropListOrientation=\"horizontal\" \n  [cdkDropListData]=\"groups\" \n  (cdkDropListDropped)=\"dropGroup($event)\">\n    <div cdkDropListGroup class=\"example-container\" \n    *ngFor=\"let group of groups\"\n    cdkDrag [cdkDragData]=\"group\">\n      <h2 class=\"board_title\">{{group.name}}</h2>\n      <div cdkDropList class=\"example-list\" \n      id={{group._id}}\n      [cdkDropListData]=\"group.items\"\n      (cdkDropListDropped)=\"dropItem($event)\"\n      [cdkDropListConnectedTo]=\"getConnectedList()\">\n        <div data-toggle=\"modal\" data-target=\"#myModal\" class=\"example-box\" \n        *ngFor=\"let item of group.items\" \n        cdkDrag [cdkDragData]=\"item\">\n          <div class=\"label\">\n\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n\n          </div>\n         <div class=\"crad_name\">\n\n          <span> {{item.name}}</span>\n\n         </div>\n\n         <div class=\"date\">\n\n          <span> <i class=\"fa fa-calendar\" aria-hidden=\"true\"> 30 March </i> </span>\n          <span> <span> <i class=\"fa fa-calendar\" aria-hidden=\"true\"> 3 </i> </span> </span>\n          <span> <span> <i class=\"fa fa-sticky-note-o\" aria-hidden=\"true\"></i> </span> </span>\n          <span> <span> <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> </span> </span>\n          <span> <span><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"> 0/6 </i></span> </span>\n\n         </div>\n\n         <div class=\"members\">\n\n          <span>G</span>\n          <span>D</span>\n          <span>D</span>\n\n         </div>\n\n        </div>\n      </div>\n  \n      <p class=\"add_new_card\" (click)=\"get_id(group._id)\"> + Add new Card</p>\n      \n    <div id=\"open\">\n      <form [formGroup]=\"addcard\">\n        <input type=\"text\"  [(ngModel)]=\"card.name\" formControlName=\"name\" name=\"name\">\n        <input type=\"text\" [(ngModel)]=\"card.list_id\" formControlName=\"list_id\" name=\"list_id\">\n    </form>\n    <button type=\"button\" (click)=\"CreateCard(group._id)\">Add Card</button>\n\n    </div>\n    </div>\n    \n  \n  </div>\n  \n<div class=\"createlistgroup\">\n\n\n<form [formGroup]=\"addlist\" (ngSubmit)=\"CreateList()\">\n\n<input type=\"text\" formControlName=\"name\" placeholder=\"enter List Name\" name=\"name\" [(ngModel)]=\"list.name\">\n<input type=\"hidden\" formControlName=\"board_id\" name=\"board_id\" [(ngModel)]=\"list.board_id\">\n<input type=\"submit\" value=\"Add\">\n\n</form>\n\n\n</div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/board/board/board.component.ts":
/*!************************************************!*\
  !*** ./src/app/board/board/board.component.ts ***!
  \************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_createboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../homepage/createboard.service */ "./src/app/homepage/createboard.service.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/list */ "./src/app/services/list.ts");
/* harmony import */ var _services_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/card */ "./src/app/services/card.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var BoardComponent = /** @class */ (function () {
    function BoardComponent(route, boardservice, mainservice, fb) {
        this.route = route;
        this.boardservice = boardservice;
        this.mainservice = mainservice;
        this.fb = fb;
        this.boards = [];
        this.list = new _services_list__WEBPACK_IMPORTED_MODULE_6__["List"]();
        this.card = new _services_card__WEBPACK_IMPORTED_MODULE_7__["Card"]();
        this.groups = [];
        this.items = [];
        this.hello = 'hello i am guddu kumar';
        this.boardname = "Welcome Board";
        this.addlist = this.fb.group({
            _id: [''],
            name: [''],
            h_pos: [''],
            v_pos: [''],
            board_id: ['']
        });
        this.addcard = this.fb.group({
            _id: [''],
            name: [''],
            h_pos: [''],
            v_pos: [''],
            list_id: ['']
        });
        this.list.board_id = this.route.snapshot.params._id;
        // this.card.list_id = this.list._id;
    }
    BoardComponent.prototype.CreateList = function () {
        var _this = this;
        this.mainservice.createListt(this.list).subscribe(function (list) {
            _this.groups.push(list);
        });
    };
    BoardComponent.prototype.CreateCard = function (_id) {
        var _this = this;
        alert(_id);
        this.card.list_id = _id;
        this.mainservice.createCardd(this.card).subscribe(function (list) {
            _this.items.push(list);
        });
    };
    BoardComponent.prototype.ngOnInit = function () {
        // this.mainservice.getCardbylist(this.listId).subscribe((card:any[]) => {
        //   this.items = card
        //   console.log(card);
        var _this = this;
        // });
        this.mainservice.getBoardId(this.route.snapshot.params._id).subscribe(function (board) { return _this.boardlist = board; });
        this.mainservice.getListbyboard(this.route.snapshot.params._id).subscribe(function (list) {
            _this.groups = list;
        });
    };
    // groups = [
    //   {
    //   id: 1,
    //   title: 'Group 1',
    //   items: [{
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   }]
    // },
    // {
    //   id: 2,
    //   title: 'Group 2',
    //   items: [{
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },{
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   }]
    // },
    // {
    //   id: 3,
    //   title: 'Group 2',
    //   items: [{
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },{
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   }]
    // },  {
    //   id: 4,
    //   title: 'Group 2',
    //   items: [{
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   },{
    //     name: 'cardname'
    //   },
    //   {
    //     name: 'cardname'
    //   }]
    // }];
    BoardComponent.prototype.dropItem = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    BoardComponent.prototype.getConnectedList = function () {
        var result = [];
        this.groups.forEach(function (x) { return result.push("" + x.id); });
        return result;
    };
    BoardComponent.prototype.dropGroup = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.groups, event.previousIndex, event.currentIndex);
    };
    BoardComponent.prototype.get_id = function (_id) {
        this.listId = _id;
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board/board.component.html"),
            providers: [_services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]],
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board/board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _homepage_createboard_service__WEBPACK_IMPORTED_MODULE_4__["CreateboardService"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-dark {\r\n    background-color:#c13464!important;\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link span {\r\n    display: inline-block;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #ffffff75;\r\n    border-radius: 3px;\r\n    color: white;\r\n    text-align: center;\r\n    line-height: 30px;\r\n}\r\n\r\n.navbar{\r\n    padding: 0rem 1rem;\r\n    \r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    margin: 0px 10px!important;\r\n    color: white!important;\r\n    font-size: 11px;\r\n    line-height: 30px;\r\n}\r\n\r\n.search_header{\r\n    border: none;\r\n    outline: none;\r\n    padding-left: 10px;\r\n    width: 560px;\r\n    height: 30px;\r\n    font-size: 12px;\r\n}\r\n\r\n.fa-archive , .fa-home{\r\n    color: white;\r\n    font-size: 16px;\r\n    padding: 6px 9px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.dropdown-menu{\r\n    width: 300px!important;\r\n    left: -150px;\r\n    border-radius: 0px;\r\n    box-shadow: 0px 0px 6px 1px #999;\r\n    padding: 0px;\r\n}\r\n\r\n.dropdown-menu p{\r\n    margin: 0px;\r\n    text-align: center;\r\n    color: #999;\r\n    border-bottom: 1px solid #aaa;\r\n    line-height: 35px;\r\n}\r\n\r\nhr{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.notify_msg{\r\n    height: 200px;\r\n    margin: 48px;\r\n}\r\n\r\n.dropdown-menu h5{\r\n\r\n\r\n    text-align: center;\r\n    font-size: 14px;\r\n    padding: 20px;\r\n\r\n}\r\n\r\n.dropdown-menu h6{\r\n    font-size: 11px;\r\n    color: #555;\r\n    line-height: 15px;\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.dropdown-menu input{\r\n    width: 86%;\r\n    margin: 20px;\r\n    outline: none;\r\n    padding-left: 10px;\r\n}\r\n\r\n/***************************************************ACCORDIAN CSS *******************************************/\r\n\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/***************************************************ACCORDIAN CSS *******************************************/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBLDZHQUE2Rzs7QUFFN0c7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQSw2R0FBNkciLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjMTM0NjQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNzU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLm5hdmJhcntcclxuICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcclxuICAgIFxyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIG1hcmdpbjogMHB4IDEwcHghaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2hlYWRlcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogNTYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mYS1hcmNoaXZlICwgLmZhLWhvbWV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIHdpZHRoOiAzMDBweCFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAtMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAxcHggIzk5OTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgcHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcbmhye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5ub3RpZnlfbXNne1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogNDhweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgaDV7XHJcblxyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBoNntcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGlucHV0e1xyXG4gICAgd2lkdGg6IDg2JTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipBQ0NPUkRJQU4gQ1NTICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkFDQ09SRElBTiBDU1MgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top\">\n    <div class=\"container-fluid\">\n  <!-- Brand -->\n  <a class=\"navbar-brand\" href=\"javascript:;\">TaskManagement</a>\n\n  <!-- Toggler/collapsibe Button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Navbar links -->\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\" *ngIf=\"isLoggedIn\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/home',_id]\">\n          Home\n        </a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"detail\"> Boards</a>\n        <ul class=\"dropdown-menu\">\n          \n          \n                <p>Find Boards By Name</p>\n                <input type=\"text\" placeholder=\"Find Boards By Name\">\n                <mat-accordion class=\"example-headers-align\">\n                    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n                      <mat-expansion-panel-header>\n                     \n                        <mat-panel-description>\n                            STARRED BOARDS <i class=\"fa fa-star-o\"></i>\n                        </mat-panel-description>\n                      </mat-expansion-panel-header>\n                  \n                     \n                      <mat-action-row>\n                        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                      </mat-action-row>\n                    </mat-expansion-panel>\n                  \n                    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n                        <mat-expansion-panel-header>\n                     \n                            <mat-panel-description>\n                                RECENT BOARDS  <i aria-hidden=\"true\" class=\"fa fa-clock-o\"></i>\n                            </mat-panel-description>\n                          </mat-expansion-panel-header>\n                  \n                   \n                      <mat-action-row>\n                        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                      </mat-action-row>\n                    </mat-expansion-panel>\n                  \n                    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n                        <mat-expansion-panel-header>\n                     \n                            <mat-panel-description>\n                                PERSONAL BOARDS <i class=\"fa fa-suitcase\"></i>\n                            </mat-panel-description>\n                          </mat-expansion-panel-header>\n                  \n                     \n                     \n                  \n                      <mat-action-row>\n                        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                        <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n                      </mat-action-row>\n                    </mat-expansion-panel>\n                  \n                  </mat-accordion>\n                                  <hr>\n           \n          \n        </ul>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"><input type=\"search\" class=\"search_header\" placeholder=\"search here...\"></a>\n      </li> \n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"isLoggedIn\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span></a>\n        <ul class=\"dropdown-menu\">\n\n            <p>Create</p>\n  \n            <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Create Board...<br><h6>A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</h6></a></li>\n            <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Create Team...<br><h6>A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</h6></a></li>\n            <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Create Business Team...<br><h6>A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</h6></a></li>\n            <hr>\n            \n          </ul>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"><span><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i></span></a>\n        <ul class=\"dropdown-menu\">\n\n            <p>Information</p>\n  \n           <img src=\"../../assets/information-icon.png\" class=\"notify_msg\">\n           <h5>Join A Webinar To Take Your Productivity To The Next Level</h5>\n            <hr>\n            <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Change Notification Email Frequency</a></li>\n          </ul>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span><i class=\"fa fa-bell\" aria-hidden=\"true\"></i></span></a>\n        <ul class=\"dropdown-menu\">\n\n            <p>Notifications</p>\n  \n           <img src=\"../../assets/mail-open-flat.png\" class=\"notify_msg\">\n           <p>No Notifications</p>\n            <hr>\n            <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Change Notification Email Frequency</a></li>\n          </ul>\n      </li> \n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span><i class=\"fa fa-user\" aria-hidden=\"true\"> </i></span></a>\n        <ul class=\"dropdown-menu\">\n\n          <p>Jhon deo (jhon deo)</p>\n\n          <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Profile</a></li>\n          <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Cards</a></li>\n          <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Settings</a></li>\n          <hr>\n          <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Help</a></li>\n          <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Shortcuts</a></li>\n          <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Change Language...</a></li>\n          <hr>\n          <li><a class=\"dropdown-item\" routerLink=\"userprofile\">Log Out</a></li>\n        </ul>\n      </li> \n\n      <li><a href=\"javascript:;\" class=\"nav-link\">{{usernaame}}</a></li>\n\n    </ul>\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"!isLoggedIn\">\n\n \n      <li class=\"nav-item\">\n\n        <a class=\"nav-link btn btn-primary\" routerLink=\"signup\">Signup</a>\n       \n      </li> \n\n      <li class=\"nav-item\">\n\n          <a class=\"nav-link btn btn-primary\" routerLink=\"login\">Login</a>\n         \n        </li> \n    </ul>\n\n  </div> \n</div>\n</nav>\n<app-login (messageEvent)=\"receiveMessage($event)\" *ngIf=\"hide\"></app-login>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





// import { SocialUser } from 'angularx-social-login';
// import { AuthService } from 'angularx-social-login';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.hide = false;
        this.step = 0;
        this._id = JSON.parse(localStorage.getItem('_id'));
    }
    HeaderComponent.prototype.receiveMessage = function ($event) {
        this.message = $event;
    };
    HeaderComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    HeaderComponent.prototype.nextStep = function () {
        this.step++;
    };
    HeaderComponent.prototype.prevStep = function () {
        this.step--;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.checkLogin();
        this.auth.isUserLoggedIn.subscribe(function (val) {
            if (val) {
                _this.isLoggedIn = val;
                _this.usernaame = JSON.parse(localStorage.getItem('uname'));
                _this.id = JSON.parse(localStorage.getItem('_id'));
            }
        });
        // this.authService.authState.subscribe((user) => {
        //   this.user = user;
        //   console.log(user);
        // });
        jquery__WEBPACK_IMPORTED_MODULE_2__("document").ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.dropdown-menu').on('click', function (e) {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__(this).hasClass('dropdown-menu')) {
                    e.stopPropagation();
                }
            });
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/createboard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/homepage/createboard.service.ts ***!
  \*************************************************/
/*! exports provided: CreateboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateboardService", function() { return CreateboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CreateboardService = /** @class */ (function () {
    function CreateboardService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api";
        this.apiurl = "http://localhost:3000/api/teams";
        this.teamdetail = "http://localhost:3000/api/getTeam";
        this.getteam = "http://localhost:3000/api/getTeamUser";
        this.updateteam = "http://localhost:3000/api/updateTeam";
    }
    CreateboardService.prototype.getAlluser = function () {
        return this.http.get(this.apiurl);
    };
    CreateboardService.prototype.getuserById = function (_id) {
        return this.http.get(this.teamdetail + '/' + _id);
    };
    CreateboardService.prototype.getTeamById = function (user_id) {
        return this.http.get(this.getteam + '/' + user_id);
    };
    CreateboardService.prototype.creaeTeamPro = function (teams) {
        return this.http.post(this.apiurl, teams);
    };
    CreateboardService.prototype.UpdateTeam = function (teams) {
        return this.http.put(this.apiurl + "/" + teams._id, teams);
    };
    CreateboardService.prototype.getAllBoard = function () {
        return this.http.get(this.url + 'boards');
    };
    CreateboardService.prototype.getStarBoards = function () {
        return this.http.get(this.url + 'starboards');
    };
    CreateboardService.prototype.getRecentBoards = function () {
        return this.http.get(this.url + 'recentboards');
    };
    CreateboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CreateboardService);
    return CreateboardService;
}());



/***/ }),

/***/ "./src/app/homepage/createboard.ts":
/*!*****************************************!*\
  !*** ./src/app/homepage/createboard.ts ***!
  \*****************************************/
/*! exports provided: Createboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createboard", function() { return Createboard; });
var Createboard = /** @class */ (function () {
    function Createboard() {
    }
    return Createboard;
}());



/***/ }),

/***/ "./src/app/homepage/detail/detail.component.css":
/*!******************************************************!*\
  !*** ./src/app/homepage/detail/detail.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/homepage/detail/detail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/homepage/detail/detail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  detail works!\n</p>\n{{myinput}} -->"

/***/ }),

/***/ "./src/app/homepage/detail/detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/detail/detail.component.ts ***!
  \*****************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DetailComponent.prototype, "myinput", void 0);
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/homepage/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/homepage/detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/homepage/home/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/homepage/home/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar{\r\n    background-color: #061e35;\r\n    padding: 30px;\r\n    height: 100%;\r\n    position: fixed;\r\n    width: 17%;\r\n}\r\n\r\n\r\n.board_data{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n\r\n.right_side{\r\n    background-color: #dee2e6;\r\n    color: white;\r\n    position: fixed;\r\n    top: 46px;\r\n    bottom: 0;\r\n    width: 16.666667%;\r\n    right: 0;\r\n}\r\n\r\n\r\n.Starred ul li{\r\n\r\n    background-color: white;\r\n    padding: 5px 5px;\r\n    width: 100%;\r\n    border-bottom: 1px solid #aaa;\r\n    position: relative;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n\r\n}\r\n\r\n\r\n.Starredd ul li a{\r\n\r\n    color: #000000!important;\r\n    font-size: 13px;\r\n    text-decoration: none;\r\n    display: block;\r\n    padding:5px 10px;\r\n    /* text-shadow: 0px 4px 8px #000; */\r\n\r\n}\r\n\r\n\r\n.Starred ul li a{\r\n\r\n    color: #555;\r\n    font-size: 13px;\r\n    text-decoration: none;\r\n    display: block;\r\n    padding:5px 10px;\r\n  \r\n\r\n}\r\n\r\n\r\n.Starred ul{\r\n\r\n    list-style: none;\r\n    padding: 0px;\r\n    width: 100%;\r\n    margin-bottom: 0px;\r\n    /* height: 253px; */\r\n    overflow-x: auto;\r\n\r\n}\r\n\r\n\r\n.right_side h5{\r\n    color: #fff;\r\n    background-color: #061e35;\r\n    padding: 10px;\r\n    margin: 0px!important;\r\n}\r\n\r\n\r\n.createteam input {\r\n    width: 100%;\r\n    height: 40px;\r\n    font-size: 13px;\r\n    padding-left: 10px;\r\n    margin-bottom: 20px;\r\n    border: 1px solid #aaa;\r\n    outline: none;\r\n\r\n}\r\n\r\n\r\n.createteam label{\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.createteam textarea {\r\n    width: 100%;\r\n    height: 80px;\r\n    font-size: 13px;\r\n}\r\n\r\n\r\n.createteam {\r\n    background-color: white;\r\n    width: 227px;\r\n    padding: 15px;\r\n    margin-left: -39px;\r\n}\r\n\r\n\r\n.createteam input[type=\"submit\"] {\r\n    background-color: #29a229;\r\n    color: white;\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n\r\n.crteam{\r\n    padding: 5px 20px;\r\n    border: none;\r\n    background-color: #0c3154;\r\n    color: white;\r\n    box-shadow: 1px 1px 2px 0px #000;\r\n    cursor: pointer;\r\n    margin: 12px 40px;\r\n}\r\n\r\n\r\n.board_view{\r\n    background-color: #70bfa4;\r\n    height: 100px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    margin: 10px 0px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-size: cover!important;\r\n    background-repeat: no-repeat!important;\r\n    background-position: center!important;\r\n}\r\n\r\n\r\n.wrapper h5{\r\n    font-size: 14px;\r\n    margin: 10px 0px;\r\n}\r\n\r\n\r\n.board_view h4{\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: white;\r\n    padding: 10px;\r\n    text-shadow: 1px 1px 2px #000;\r\n}\r\n\r\n\r\n.board_view .fa{\r\n    font-weight: bold;\r\n    color: white;\r\n    position: absolute;\r\n    bottom: 17px;\r\n    right: 26px;\r\n}\r\n\r\n\r\n.sidebar ul{\r\npadding: 0px;\r\nlist-style-type: none;\r\n}\r\n\r\n\r\n.sidebar ul li a{\r\n    color: #fff;\r\n    text-decoration: none;\r\n    padding: 5px 0px;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.sidebar i\r\n{\r\n    font-size: 12px;\r\n    color: #fff;\r\n\r\n}\r\n\r\n\r\n.sidebar p{\r\n    color:white;\r\n}\r\n\r\n\r\n.right_side .fa-star-o{\r\ncolor: #fff000;\r\n}\r\n\r\n\r\n.starcolor .star{\r\n  /* display: none; */\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 40px;\r\n  color: white;\r\n  transition: all 0.4s ease;\r\n}\r\n\r\n\r\n.starcolor .col-md-3:hover > .star{\r\n    display: block;\r\n}\r\n\r\n\r\n.Starred .star{\r\n\r\n  position: absolute;\r\n  top: 0;\r\n  right: 22px;\r\n\r\n}\r\n\r\n\r\n.board_create{\r\n\r\n    background-color: #cdd0d4;\r\n    height: 100px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    margin: 10px 0px;\r\n    cursor: pointer;\r\n    position: relative;\r\n\r\n}\r\n\r\n\r\n.board_view span {\r\n    color: white;\r\n    margin: 0px 5px;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.board_create h4 {\r\n    color: #222;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    line-height: 100px;\r\n}\r\n\r\n\r\n.create_panel_board{\r\n\r\n    height: 200px;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-color: #061e35;\r\n    position: relative;\r\n\r\n}\r\n\r\n\r\n.overlay{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: #0000004f;\r\n}\r\n\r\n\r\n.team_pic{\r\n    height: 25px;\r\n    margin: 0px 4px;\r\n    border-radius: 3px;\r\n    width: 30px;\r\n}\r\n\r\n\r\ndiv#image span, div#color span {\r\n\r\n    display: inline-block;\r\n    height: 40px;\r\n    width: 40px;\r\n    margin: 1px;\r\n   \r\n   }\r\n\r\n\r\ndiv#color span:nth-child(2){\r\nbackground-color: #3f51b5;\r\n   }\r\n\r\n\r\ndiv#color span:nth-child(3){\r\nbackground-color: #17a2b8;\r\n       \r\n}\r\n\r\n\r\ndiv#color span:nth-child(4){\r\nbackground-color: #dc3545;\r\n       \r\n}\r\n\r\n\r\ndiv#color span:nth-child(5){\r\n    background-color: blueviolet;\r\n}\r\n\r\n\r\ndiv#color span:nth-child(6){\r\n    background-color: chocolate;\r\n}\r\n\r\n\r\ndiv#color span:nth-child(7){\r\n    background-color: darkgray;\r\n}\r\n\r\n\r\ndiv#color span:nth-child(8){\r\n    background-color: teal;\r\n\r\n}\r\n\r\n\r\ndiv#color span:nth-child(9){\r\n    background-color: springgreen;\r\n}\r\n\r\n\r\n#image h4{\r\n       font-size: 14px;\r\n   }\r\n\r\n\r\n#color h4{\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.create_panel_board input{\r\n\r\n    background: none;\r\n    margin: 20px;\r\n    width: 88%;\r\n    height: 40px;\r\n    padding-left: 14px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    border: 1px solid white;\r\n\r\n}\r\n\r\n\r\n.create_panel_board select{\r\n\r\n    background: none;\r\n    margin: 0px 20px;\r\n    width: auto;\r\n    height: 25px;\r\n    border: none;\r\n    color: white;\r\n\r\n}\r\n\r\n\r\n.create_panel_board input[type='submit']{\r\n\r\n    background: none;\r\n    margin: 20px;\r\n    width: 30%;\r\n    height: 40px;\r\n    border: none;\r\n    background-color: white;\r\n    color: #000;\r\n\r\n}\r\n\r\n\r\n.create_panel_board input::-webkit-input-placeholder{\r\n\r\n    color: white!important;\r\n    font-size: 14px;\r\n\r\n\r\n}\r\n\r\n\r\n.create_panel_board input::-ms-input-placeholder{\r\n\r\n    color: white!important;\r\n    font-size: 14px;\r\n\r\n\r\n}\r\n\r\n\r\n.create_panel_board input::placeholder{\r\n\r\n    color: white!important;\r\n    font-size: 14px;\r\n\r\n\r\n}\r\n\r\n\r\nselect option{\r\n    color: #000;\r\n}\r\n\r\n\r\n/**************************************** CUSTOM RADIO BUTTON *****************************************/\r\n\r\n\r\n.custom-radios div {\r\n    display: inline-block;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"] {\r\n    display: none;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"] + label {\r\n    color: #333;\r\n    font-family: Arial, sans-serif;\r\n    font-size: 14px;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"] + label span {\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin: -1px 4px 0 0;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    text-align: center;\r\n    line-height: 44px;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"] + label span img {\r\n    opacity: 0;\r\n    transition: all .3s ease;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color-1 + label span {\r\n    background-color: red;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color-2 + label span {\r\n    background-color: green;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color-3 + label span {\r\n    background-color: blue;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color-4 + label span {\r\n    background-color: yellow;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color-5 + label span {\r\n    background-color: pink;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color-6 + label span {\r\n    background-color: hotpink;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color-7 + label span {\r\n    background-color: gray;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color-8 + label span {\r\n    background-color: black;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color-9 + label span {\r\n    background-color: aqua;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color1 + label {\r\n    background-image: url('house-3966469_1280.jpg');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color2 + label {\r\n    background-image: url('house-3966469_1280.jpg');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color3 + label {\r\n    background-image: url('auto-3298890_1280.jpg');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color4 + label {\r\n    background-image: url('house-3966469_1280.jpg');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color5 + label {\r\n    background-image: url('auto-3298890_1280.jpg');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color6 + label {\r\n    background-image: url('house-3966469_1280.jpg');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color7 + label {\r\n    background-image: url('auto-3298890_1280.jpg');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color8 + label {\r\n    background-image: url('house-3966469_1280.jpg');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]#color9 + label {\r\n    background-image: url('auto-3298890_1280.jpg');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.custom-radios input[type=\"radio\"]:checked + label span {\r\n    opacity: 1;\r\n    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg) center center no-repeat;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: inline-block;\r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtBQUNkOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCOztBQUUxQjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtJQUNqQixRQUFRO0FBQ1o7OztBQUlBOztJQUVJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7O0FBRWhDOzs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1DQUFtQzs7QUFFdkM7OztBQUNBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7OztBQUdwQjs7O0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0FBRXBCOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhOztBQUVqQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxzQ0FBc0M7SUFDdEMscUNBQXFDO0FBQ3pDOzs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFFQTtBQUNBLFlBQVk7QUFDWixxQkFBcUI7QUFDckI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7OztBQUVBOztJQUVJLGVBQWU7SUFDZixXQUFXOztBQUVmOzs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7QUFDQSxjQUFjO0FBQ2Q7OztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7OztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXOztBQUViOzs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7O0FBRXRCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7OztBQUVBOztJQUVJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGtCQUFrQjs7QUFFdEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0I7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOzs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXOztHQUVaOzs7QUFFQTtBQUNILHlCQUF5QjtHQUN0Qjs7O0FBQ0E7QUFDSCx5QkFBeUI7O0FBRXpCOzs7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7OztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7O0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7OztBQUNBO0lBQ0ksc0JBQXNCOztBQUUxQjs7O0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7OztBQUVHO09BQ0ksZUFBZTtHQUNuQjs7O0FBR0E7SUFDQyxlQUFlO0FBQ25COzs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsdUJBQXVCOztBQUUzQjs7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOztBQUVoQjs7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVzs7QUFFZjs7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7OztBQUduQjs7O0FBTkE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7OztBQUduQjs7O0FBTkE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7OztBQUduQjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBLHVHQUF1Rzs7O0FBSXZHO0lBQ0kscUJBQXFCO0VBQ3ZCOzs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7OztBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7OztBQUNBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjs7O0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7OztBQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCOzs7QUFDQTtJQUNFLHNCQUFzQjtFQUN4Qjs7O0FBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7OztBQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOzs7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7O0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7OztBQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCOzs7QUFDQTtJQUNFLHNCQUFzQjtFQUN4Qjs7O0FBRUE7SUFDRSwrQ0FBNkQ7SUFDN0QsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0VBQ3BCOzs7QUFDQTtJQUNFLCtDQUE2RDtJQUM3RCwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7OztBQUNBO0lBQ0UsOENBQTREO0lBQzVELDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjs7O0FBQ0E7SUFDRSwrQ0FBNkQ7SUFDN0QsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0VBQ3BCOzs7QUFFQTtJQUNFLDhDQUE0RDtJQUM1RCwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7OztBQUNBO0lBQ0UsK0NBQTZEO0lBQzdELDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjs7O0FBQ0E7SUFDRSw4Q0FBNEQ7SUFDNUQsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0VBQ3BCOzs7QUFDQTtJQUNFLCtDQUE2RDtJQUM3RCwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7OztBQUNBO0lBQ0UsOENBQTREO0lBQzVELDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjs7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsMEdBQTBHO0lBQzFHLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCOztFQUV2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxZTM1O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxNyU7XHJcbn1cclxuXHJcblxyXG4uYm9hcmRfZGF0YXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG4ucmlnaHRfc2lkZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDQ2cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTYuNjY2NjY3JTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuXHJcbi5TdGFycmVkIHVsIGxpe1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbn1cclxuXHJcbi5TdGFycmVkZCB1bCBsaSBhe1xyXG5cclxuICAgIGNvbG9yOiAjMDAwMDAwIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgIC8qIHRleHQtc2hhZG93OiAwcHggNHB4IDhweCAjMDAwOyAqL1xyXG5cclxufVxyXG4uU3RhcnJlZCB1bCBsaSBhe1xyXG5cclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gIFxyXG5cclxufVxyXG4uU3RhcnJlZCB1bHtcclxuXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAvKiBoZWlnaHQ6IDI1M3B4OyAqL1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbn1cclxuLnJpZ2h0X3NpZGUgaDV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjFlMzU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3JlYXRldGVhbSBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5jcmVhdGV0ZWFtIGxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jcmVhdGV0ZWFtIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jcmVhdGV0ZWFtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDIyN3B4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzlweDtcclxufVxyXG5cclxuLmNyZWF0ZXRlYW0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlhMjI5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uY3J0ZWFte1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMzMTU0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMHB4ICMwMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDEycHggNDBweDtcclxufVxyXG5cclxuLmJvYXJkX3ZpZXd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBiZmE0O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcbi53cmFwcGVyIGg1e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5cclxuLmJvYXJkX3ZpZXcgaDR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbi5ib2FyZF92aWV3IC5mYXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxN3B4O1xyXG4gICAgcmlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHVse1xyXG5wYWRkaW5nOiAwcHg7XHJcbmxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFyIHVsIGxpIGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGlcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG59XHJcbi5zaWRlYmFyIHB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5yaWdodF9zaWRlIC5mYS1zdGFyLW97XHJcbmNvbG9yOiAjZmZmMDAwO1xyXG59XHJcbi5zdGFyY29sb3IgLnN0YXJ7XHJcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5zdGFyY29sb3IgLmNvbC1tZC0zOmhvdmVyID4gLnN0YXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLlN0YXJyZWQgLnN0YXJ7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDIycHg7XHJcblxyXG59XHJcblxyXG4uYm9hcmRfY3JlYXRle1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGQwZDQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLmJvYXJkX3ZpZXcgc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5ib2FyZF9jcmVhdGUgaDQge1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGVfcGFuZWxfYm9hcmR7XHJcblxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MWUzNTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi5vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDRmO1xyXG59XHJcblxyXG4udGVhbV9waWN7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IDBweCA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuZGl2I2ltYWdlIHNwYW4sIGRpdiNjb2xvciBzcGFuIHtcclxuXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICBcclxuICAgfVxyXG5cclxuICAgZGl2I2NvbG9yIHNwYW46bnRoLWNoaWxkKDIpe1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICB9XHJcbiAgIGRpdiNjb2xvciBzcGFuOm50aC1jaGlsZCgzKXtcclxuYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICAgICAgIFxyXG59XHJcbmRpdiNjb2xvciBzcGFuOm50aC1jaGlsZCg0KXtcclxuYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgICAgIFxyXG59XHJcbmRpdiNjb2xvciBzcGFuOm50aC1jaGlsZCg1KXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbn1cclxuZGl2I2NvbG9yIHNwYW46bnRoLWNoaWxkKDYpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xyXG59XHJcbmRpdiNjb2xvciBzcGFuOm50aC1jaGlsZCg3KXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG59XHJcbmRpdiNjb2xvciBzcGFuOm50aC1jaGlsZCg4KXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcblxyXG59XHJcbmRpdiNjb2xvciBzcGFuOm50aC1jaGlsZCg5KXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNwcmluZ2dyZWVuO1xyXG59XHJcblxyXG4gICAjaW1hZ2UgaDR7XHJcbiAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgIH1cclxuXHJcbiAgIFxyXG4gICAjY29sb3IgaDR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jcmVhdGVfcGFuZWxfYm9hcmQgaW5wdXR7XHJcblxyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG5cclxufVxyXG5cclxuLmNyZWF0ZV9wYW5lbF9ib2FyZCBzZWxlY3R7XHJcblxyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5jcmVhdGVfcGFuZWxfYm9hcmQgaW5wdXRbdHlwZT0nc3VibWl0J117XHJcblxyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG5cclxufVxyXG5cclxuLmNyZWF0ZV9wYW5lbF9ib2FyZCBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcblxyXG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcblxyXG59XHJcblxyXG5zZWxlY3Qgb3B0aW9ue1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENVU1RPTSBSQURJTyBCVVRUT04gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuXHJcbi5jdXN0b20tcmFkaW9zIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogLTFweCA0cHggMCAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4zMyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHNwYW4gaW1nIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSNjb2xvci0xICsgbGFiZWwgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSNjb2xvci0yICsgbGFiZWwgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdI2NvbG9yLTMgKyBsYWJlbCBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgfVxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSNjb2xvci00ICsgbGFiZWwgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0jY29sb3ItNSArIGxhYmVsIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxuICB9XHJcbiAgLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdI2NvbG9yLTYgKyBsYWJlbCBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XHJcbiAgfVxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSNjb2xvci03ICsgbGFiZWwgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIH1cclxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0jY29sb3ItOCArIGxhYmVsIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSNjb2xvci05ICsgbGFiZWwgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdI2NvbG9yMSArIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaG91c2UtMzk2NjQ2OV8xMjgwLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSNjb2xvcjIgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hvdXNlLTM5NjY0NjlfMTI4MC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0jY29sb3IzICsgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hdXRvLTMyOTg4OTBfMTI4MC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0jY29sb3I0ICsgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9ob3VzZS0zOTY2NDY5XzEyODAuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSNjb2xvcjUgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2F1dG8tMzI5ODg5MF8xMjgwLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSNjb2xvcjYgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hvdXNlLTM5NjY0NjlfMTI4MC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0jY29sb3I3ICsgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hdXRvLTMyOTg4OTBfMTI4MC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0jY29sb3I4ICsgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9ob3VzZS0zOTY2NDY5XzEyODAuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdI2NvbG9yOSArIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYXV0by0zMjk4ODkwXzEyODAuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwgc3BhbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzI0MjUxOC9jaGVjay1pY24uc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/homepage/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- The Modal -->\n  <div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n  \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Create Board</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n  \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n        \n            <div class=\"container\">\n\n<form [formGroup]=\"createboard\">\n    <div class=\"row\">\n<div class=\"col-md-6\">\n\n    <div class=\"create_panel_board\" [style.background-color]=\"boards.color_code\" [ngStyle]=\"{'background-image': 'url(' + boards.color_code + ')'}\">\n    <div class=\"overlay\">\n    <input type=\"text\" placeholder=\"Enter Project Title\" name=\"title\" formControlName=\"title\" [(ngModel)]=\"boards.title\" required>\n<br>\n<select formControlName=\"team_id\" [(ngModel)]=\"boards.team_id\" name=\"team_id\" (change)=\"selectChangeHandler($event)\" required>\n\n    <option selected> No Team </option> \n    <option *ngFor=\"let team of myteam\" [ngValue]=\"team._id\"> {{team.name}} </option>\n\n</select>\n\n<select formControlName=\"access_type\" [(ngModel)]=\"boards.access_type\" name=\"access_type\" required>\n    <option value=\"public\"> Public </option>\n    <option value=\"private\"> Private </option>\n</select>\n\n<input type=\"hidden\" id=\"user_id\" formControlName=\"user_id\" [(ngModel)]=\"boards.user_id\" name=\"user_id\">\n<input type=\"button\" (click)=\"createBoard()\" data-dismiss=\"modal\" value=\"Create\" [disabled]=\"createboard.invalid\">\n</div>\n</div>\n\n</div>\n\n<div class=\"col-md-6\">\n    <div class=\"row\">\n        <div class=\"col-md-12\" id=\"color\">\n            <h4 class=\"text-center\">Choose Colours</h4>\n            <div class=\"custom-radios\">\n                <div>\n                  <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-1\" [value]=\"colour.clr1\" name=\"color_code\" required>\n                  <label for=\"color-1\">\n                    <span>\n                    </span>\n                  </label>\n                </div>  \n                \n                <div>\n                  <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-2\" [value]=\"colour.clr2\" name=\"color_code\" required>\n                  <label for=\"color-2\">\n                    <span>\n                    </span>\n                  </label>\n                </div>\n                \n                <div>\n                  <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-3\" [value]=\"colour.clr3\" name=\"color_code\" required>\n                  <label for=\"color-3\">\n                    <span>\n                    </span>\n                  </label>\n                </div>\n\n                <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-4\" [value]=\"colour.clr4\" name=\"color_code\" required>\n                    <label for=\"color-4\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n\n                  <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-5\" [value]=\"colour.clr5\" name=\"color_code\" required>\n                    <label for=\"color-5\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n\n                  <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-6\" [value]=\"colour.clr6\" name=\"color_code\" required>\n                    <label for=\"color-6\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n                  <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-7\" [value]=\"colour.clr7\" name=\"color_code\" required>\n                    <label for=\"color-7\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n                  <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-8\" [value]=\"colour.clr8\" name=\"color_code\" required>\n                    <label for=\"color-8\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n              \n                \n                        \n                        <div>\n                          <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color2\" name=\"color_code\" [value]=\"img2\" required>\n                          <label for=\"color2\">\n                            <span>\n                            </span>\n                          </label>\n                        </div>\n                        \n                        <div>\n                          <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color3\" name=\"color_code\" [value]=\"img3\" required>\n                          <label for=\"color3\">\n                            <span>\n                            </span>\n                          </label>\n                        </div>\n        \n                        <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color4\" name=\"color_code\" [value]=\"img4\" required>\n                            <label for=\"color4\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n        \n                          <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color5\" name=\"color_code\" [value]=\"img5\" required>\n                            <label for=\"color5\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n        \n                          <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color6\" name=\"color_code\" [value]=\"img6\" required>\n                            <label for=\"color6\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n                          <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color7\" name=\"color_code\" [value]=\"img7\" required>\n                            <label for=\"color7\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n                          <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color8\" name=\"color_code\" [value]=\"img8\" required>\n                            <label for=\"color8\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n                      \n                        <div>\n                          <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color9\" name=\"color_code\" [value]=\"img9\" required>\n                          <label for=\"color9\">\n                            <span>\n                            </span>\n                          </label>\n                        </div>\n\n                       \n\n                      </div>\n            \n                </div>\n            \n    \n    </div>\n\n</div>\n\n</div>\n</form>\n            </div>\n\n\n        </div>\n  \n      \n  \n      </div>\n    </div>\n  </div>\n\n<div class=\"board\">\n\n    <div class=\"container-fluid wrapper\">\n\n\n        <div class=\"row\">\n      \n          <div class=\"col-md-2 p-0\">\n      \n              <div class=\"right_side\" [ngStyle]=\"{'left':0}\">\n\n                  <h5> <i class=\"fa fa-users\"></i> Teams </h5>\n                  <div class=\"Starred\">\n                  \n                  \n                    <div class=\"starcolor\">\n                  \n\n                      <ul *ngFor=\"let team of myteam\">\n\n                        <li> <a [routerLink]=\"['/teamprofile',team._id]\"> <img src=\"https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\" class=\"img-fluid team_pic\"> {{team.name}}</a> </li>\n\n                      </ul>\n          \n               <div class=\"dropdown\">\n\n<button class=\"crteam dropdown-toggle\" data-toggle=\"dropdown\">Create Team</button>\n<div class=\"createteam dropdown-menu\">\n\n  \n  <form [formGroup]=\"createteam\" (ngSubmit)=\"createTeam()\">\n  <label>Name:</label>\n    <input type=\"text\" name=\"name\" formControlName=\"name\" [(ngModel)]=\"team.name\">\n    <label>Description:</label>\n    <textarea formControlName=\"description\" [(ngModel)]=\"team.description\" name=\"description\"></textarea>\n \n    <!-- <input type=\"hidden\" id=\"user_id\" formControlName=\"user_id\" [(ngModel)]=\"team.user_id\" name=\"user_id\"> -->\n\n    <input type=\"submit\" [disabled]=\"createteam.invalid\">\n  \n   </form>\n          \n  </div>\n</div>\n\n</div>\n                  \n                      \n                  </div>\n\n              </div>\n      \n          </div>\n          <div class=\"col-md-8\">\n      \n            <div class=\"\">\n\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n\n    <h5><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Personal Boards</h5>\n    <div class=\"row starcolor\">\n      \n       <div class=\"col-md-3\" *ngFor=\"let board of boardd\">\n       <a [routerLink]=\"['/board',board._id]\" (click)=\"store([board._id])\">\n       <div class=\"board_view\" [style.background]=\"board.color_code\" [ngStyle]=\"{'background': 'url(' + board.color_code + ')'}\">\n\n           <div class=\"board_data\">\n            \n            <h4>{{board.title}}</h4>\n            \n           </div>\n            \n       </div>\n     </a>\n     \n      \n     <input [ngClass]='(board.stared==\"Yes\")?\"orange\":\"white\"' checked=\"true\" class=\"star\" type=\"checkbox\" title=\"bookmark page\" (click)=\"addremoveboard(board._id,board.stared)\">\n    \n  \n       </div>\n      \n      \n                   <div class=\"col-md-3\">\n       \n                       <div class=\"board_create\" data-toggle=\"modal\" data-target=\"#myModal\">\n\n                           <h4>Create new board...</h4>\n\n                       </div>\n             \n                       </div>\n       \n                  \n       \n                        </div>\n\n\n  </div>\n\n\n\n</div>\n     \n            </div>\n      \n          </div>\n          <div class=\"col-md-2 pr-0\">\n\n            <div class=\"right_side\">\n\n            <h5><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> Starred Boards</h5>\n            <div class=\"Starred Starredd\">\n\n              <ul>\n\n           \n<li *ngFor=\"let star of stars\" id=\"rollDiv\">\n \n  \n<a [routerLink]=\"['/board',star._id]\">\n\n<span> {{star.title}} </span> \n\n</a>\n<input [ngClass]=\"(star.stared=='Yes')?'orange':'white'\" checked=\"true\" class=\"star\" type=\"checkbox\" title=\"bookmark page\" (click)=\"addremoveboard(star._id,star.stared)\">\n</li>\n\n\n              </ul>\n              <h5><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Recently Viewed</h5>\n              <div class=\"starcolor\">\n              \n                  <ul>\n\n                      <li *ngFor=\"let recent of items\"> \n                      \n                          <a [routerLink]=\"['board',recent._id]\">\n\n                        <span> {{recent._id}} </span>\n                        <span> {{recent.title}} </span>\n                      </a>\n                      </li>\n                   \n                      \n                                    </ul>\n              \n              </div>\n            </div>\n          \n          \n        \n          \n        </div>\n          </div>\n        </div>\n      \n      \n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/homepage/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _createboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createboard.service */ "./src/app/homepage/createboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team */ "./src/app/homepage/team.ts");
/* harmony import */ var _services_board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/board */ "./src/app/services/board.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);










var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, boardservice, route, aroute, mainservice) {
        this.fb = fb;
        this.boardservice = boardservice;
        this.route = route;
        this.aroute = aroute;
        this.mainservice = mainservice;
        this.boards = new _services_board__WEBPACK_IMPORTED_MODULE_6__["Board"]();
        this.starboards = [];
        this.recentboards = [];
        this.team = new _team__WEBPACK_IMPORTED_MODULE_5__["Teams"]();
        this.boardd = [];
        this.stars = [];
        this.createboard = this.fb.group({
            _id: [''],
            stared: [''],
            title: [''],
            user_id: [''],
            team_id: [''],
            color_code: [''],
            access_type: [''],
            access_id: [''],
            image_url: [''],
            create_date: [''],
            __v: ['']
        });
        this.createteam = this.fb.group({
            _id: [''],
            name: [''],
            user_id: [''],
            short_name: [],
            website: [],
            description: [],
            members_id: [''],
            setting: [''],
            image_url: [''],
            Board: [''],
            create_date: [''],
            __v: ['']
        });
        this.selectedDay = "";
        this.items = [];
        this.img2 = "../../../assets/house-3966469_1280.jpg";
        this.img3 = "https://cdn.pixabay.com/photo/2018/02/21/11/02/adult-3170055_960_720.jpg";
        this.img4 = "https://cdn.pixabay.com/photo/2017/08/08/14/44/belfry-2611573_960_720.jpg";
        this.img5 = "https://cdn.pixabay.com/photo/2016/04/27/15/27/canyon-1356886_960_720.jpg";
        this.img6 = "https://cdn.pixabay.com/photo/2017/10/04/18/14/ice-2817112_960_720.jpg";
        this.img7 = "https://cdn.pixabay.com/photo/2013/10/07/18/06/field-192179_960_720.jpg";
        this.img8 = "https://cdn.pixabay.com/photo/2018/04/23/09/28/nature-3343653_960_720.jpg";
        this.img9 = "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg";
        this.colour = {
            clr1: "red",
            clr2: "green",
            clr3: "blue",
            clr4: "yellow",
            clr5: "pink",
            clr6: "hotpink",
            clr7: "gray",
            clr8: "black"
        };
    }
    HomeComponent.prototype.selectChangeHandler = function (event) {
        this.selectedDay = event.target.value;
        if (this.selectedDay == "No Team") {
            this.createboard.patchValue({
                user_id: JSON.parse(localStorage.getItem('_id'))
            });
            this.user_id = this.createboard.controls["user_id"].value;
        }
    };
    HomeComponent.prototype.createBoard = function () {
        var _this = this;
        this.mainservice.createBoardd(this.boards).subscribe(function (res) {
            console.log(res);
            _this.ngOnInit();
        });
        this.createboard.reset();
    };
    HomeComponent.prototype.createTeam = function () {
        var _this = this;
        this.boardservice.creaeTeamPro(this.team).subscribe(function (data) { return _this.myteam.push(data); });
    };
    HomeComponent.prototype.addremoveboard = function (_id, stared) {
        var _this = this;
        if (stared == 'Yes') {
            this.mainservice.removestarBoard(this.boards, _id).subscribe(function (star) {
                star;
                _this.ngOnInit();
            });
        }
        if (stared == 'No') {
            this.mainservice.addstarBoard(this.boards, _id).subscribe(function (star) {
                _this.ngOnInit();
            });
        }
    };
    HomeComponent.prototype.store = function (item_id) {
        this.items.push(item_id);
        localStorage.setItem("item", JSON.stringify(this.items));
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainservice.getBoardById(this.aroute.snapshot.params.user_id).subscribe(function (usere) { return _this.boardd = usere; });
        this.mainservice.getStarBoard(this.aroute.snapshot.params.user_id).subscribe(function (usere) { return _this.stars = usere; });
        this.boardservice.getTeamById(this.aroute.snapshot.params.user_id).subscribe(function (user) { return _this.myteam = user; });
        this.items = JSON.parse(localStorage.getItem('item'));
        this.items = lodash__WEBPACK_IMPORTED_MODULE_8__["uniqWith"](this.items, lodash__WEBPACK_IMPORTED_MODULE_8__["isEqual"]);
        alert(this.items);
        // $(document).ready(function(){
        //   $('.star').click(function () {
        //     var $this = $(this);
        //     if ($this.is(':checked')) {
        //         alert('checked');
        //     } else {
        //         alert('unchecked');
        //     }
        // });
        // });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/homepage/home/home.component.html"),
            providers: [_createboard_service__WEBPACK_IMPORTED_MODULE_3__["CreateboardService"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/homepage/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _createboard_service__WEBPACK_IMPORTED_MODULE_3__["CreateboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/homepage/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/homepage/detail/detail.component.ts");








var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/homepage/team.ts":
/*!**********************************!*\
  !*** ./src/app/homepage/team.ts ***!
  \**********************************/
/*! exports provided: Teams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teams", function() { return Teams; });
var Teams = /** @class */ (function () {
    function Teams() {
        this.userId = JSON.parse(localStorage.getItem('_id'));
        this.user_id = this.userId;
    }
    return Teams;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/error_404_http_code.jpg\" class=\"img-fluid\" style=\"width:100%;\">\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/profile/userprofile/userprofile.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_3__["UserprofileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            exports: [_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_3__["UserprofileComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/userprofile/userprofile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/profile/userprofile/userprofile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-group {\r\n    margin-bottom: 48px;\r\n  }\r\n  \r\n  .userprofile span{\r\n\r\n   height: 150px;\r\n   width: 150px;\r\n   background-color: rebeccapurple;\r\n   border-radius: 50%;\r\n   display: inline-block;\r\n   overflow: hidden;\r\n   \r\n\r\n  }\r\n  \r\n  .userprofile{\r\n        margin-right: 39px;\r\n  }\r\n  \r\n  .userprofile button{\r\n    padding: 5px 20px;\r\n    border: none;\r\n    background-color: #0c3154;\r\n    color: white;\r\n    box-shadow: 1px 1px 2px 0px #000;\r\n    cursor: pointer;\r\n    margin-left: 16px;\r\n  }\r\n  \r\n  .userprofile h4{\r\n   padding-left: 20px;\r\n  \r\n  }\r\n  \r\n  .usersection{\r\n\r\n    padding: 50px 20px;\r\n\r\n  }\r\n  \r\n  .col-md-3.mx-auto.userpic input {\r\n    width: 100%;\r\n    height: 40px;\r\n    padding-left: 10px;\r\n    outline: none;\r\n}\r\n  \r\n  /* .userpic{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  } */\r\n  \r\n  .userpic form button{\r\n\r\n    background-color: #0c3154;\r\n    margin: 17px 3px;\r\n    padding: 6px 23px;\r\n    border: none;\r\n    color: white;\r\n    font-size: 14px;\r\n\r\n  }\r\n  \r\n  .userpic form button:last-child{\r\n\r\n    background-color:gray;\r\n\r\n  }\r\n  \r\n  .userpic form label{\r\n    margin: 10px 0px 0px 0px;\r\n  }\r\n  \r\n  .userpic form input{\r\n    outline: none;\r\n    padding-left: 10px;\r\n  }\r\n  \r\n  .userpic form textarea{\r\n\r\n    height: 100px;\r\n\r\n  }\r\n  \r\n  .Trello{\r\n\r\n    padding: 50px 0px;\r\n\r\n  }\r\n  \r\n  .Trello h4, .Trello h5{\r\n    text-align: center;\r\n    padding: 30px 0px 0px 0px;\r\n\r\n   \r\n  }\r\n  \r\n  .Trello p{\r\n  text-align: center;\r\n}\r\n  \r\n  .activity{\r\n    display: flex;\r\n    width: 100%;\r\n    border-top: 1px solid #ccc;\r\n    padding: 15px 0px;\r\n  }\r\n  \r\n  .activity p,.activity span{\r\n\r\n    margin: 0px;\r\n    font-size: 13px;\r\n\r\n  }\r\n  \r\n  .activity_pic span{\r\n    height: 40px;\r\n    width: 40px;\r\n    display: inline-block;\r\n    border: 1px solid #aaa;\r\n    border-radius: 50%;\r\n    margin-right: 15px;\r\n  }\r\n  \r\n  .settings h4{\r\n    margin: 20px 0px;\r\n  }\r\n  \r\n  .settings form {\r\n    margin: 20px 0px;\r\n}\r\n  \r\n  .settings input {\r\n    height: 40px;\r\n    width: 100%;\r\n    margin: -5px 0px 15px 0px;\r\n    outline: none;\r\n    padding-left: 20px;\r\n}\r\n  \r\n  .settings button{\r\n  padding:10px 30px;\r\n  margin:0px 10px;\r\n  border:none;\r\n  background-color:#0c3154;\r\n  color:white;\r\n  outline:none;\r\n  box-shadow: 0px 2px 1px 0px #000;\r\n}\r\n  \r\n  .setting_sidebar{\r\n\r\n  height: 200px;\r\n  width: 100%;\r\n  background-color: #152638;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VycHJvZmlsZS91c2VycHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0VBQ3JCOztFQUVBOztHQUVDLGFBQWE7R0FDYixZQUFZO0dBQ1osK0JBQStCO0dBQy9CLGtCQUFrQjtHQUNsQixxQkFBcUI7R0FDckIsZ0JBQWdCOzs7RUFHakI7O0VBRUE7UUFDTSxrQkFBa0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7R0FDQyxrQkFBa0I7O0VBRW5COztFQUNBOztJQUVFLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztFQUNFOzs7O0tBSUc7O0VBRUg7O0lBRUUseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlOztFQUVqQjs7RUFHQTs7SUFFRSxxQkFBcUI7O0VBRXZCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxhQUFhOztFQUVmOztFQUVBOztJQUVFLGlCQUFpQjs7RUFFbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCOzs7RUFHM0I7O0VBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLGVBQWU7O0VBRWpCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7QUFDcEI7O0VBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztFQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztFQUdBOztFQUVFLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS91c2VycHJvZmlsZS91c2VycHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXJwcm9maWxlIHNwYW57XHJcblxyXG4gICBoZWlnaHQ6IDE1MHB4O1xyXG4gICB3aWR0aDogMTUwcHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBcclxuXHJcbiAgfVxyXG5cclxuICAudXNlcnByb2ZpbGV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzOXB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXJwcm9maWxlIGJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMzE1NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDBweCAjMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAudXNlcnByb2ZpbGUgaDR7XHJcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBcclxuICB9XHJcbiAgLnVzZXJzZWN0aW9ue1xyXG5cclxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuY29sLW1kLTMubXgtYXV0by51c2VycGljIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4gIC8qIC51c2VycGlje1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9ICovXHJcblxyXG4gIC51c2VycGljIGZvcm0gYnV0dG9ue1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzMxNTQ7XHJcbiAgICBtYXJnaW46IDE3cHggM3B4O1xyXG4gICAgcGFkZGluZzogNnB4IDIzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC51c2VycGljIGZvcm0gYnV0dG9uOmxhc3QtY2hpbGR7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xyXG5cclxuICB9XHJcblxyXG4gIC51c2VycGljIGZvcm0gbGFiZWx7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAudXNlcnBpYyBmb3JtIGlucHV0e1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC51c2VycGljIGZvcm0gdGV4dGFyZWF7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuVHJlbGxve1xyXG5cclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5UcmVsbG8gaDQsIC5UcmVsbG8gaDV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweCAwcHggMHB4O1xyXG5cclxuICAgXHJcbiAgfVxyXG5cclxuLlRyZWxsbyBwe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAuYWN0aXZpdHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2aXR5IHAsLmFjdGl2aXR5IHNwYW57XHJcblxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmFjdGl2aXR5X3BpYyBzcGFue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNldHRpbmdzIGg0e1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5zZXR0aW5ncyBmb3JtIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncyBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogLTVweCAwcHggMTVweCAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MgYnV0dG9ue1xyXG4gIHBhZGRpbmc6MTBweCAzMHB4O1xyXG4gIG1hcmdpbjowcHggMTBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwYzMxNTQ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgb3V0bGluZTpub25lO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCAjMDAwO1xyXG59XHJcblxyXG5cclxuLnNldHRpbmdfc2lkZWJhcntcclxuXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyNjM4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/profile/userprofile/userprofile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/userprofile/userprofile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"usersection\">\n<div class=\"container-fluid\">\n\n<div class=\"row\">\n\n<div class=\"col-md-3 mx-auto userpic\">\n\n\n  <div class=\"userprofile\">\n\n    <span> <img src=\"../../../assets/userpic5.jpg\" class=\"img-fluid\"> </span>\n<h4 class=\"username\"> {{usernaame}} </h4>\n<button id=\"edit_profile\" class=\"username\">Edit Profile</button>\n  </div>\n\n<form [formGroup]=\"useredit\" (ngSubmit)=\"onSubmit()\" class=\"editform\">\n\n<label>Full Name</label>\n\n<input type=\"text\" formControlName=\"fullname\">\n\n<label>Username</label>\n\n<input type=\"text\" formControlName=\"username\">\n\n<label>Initials</label>\n\n<input type=\"text\" formControlName=\"Initials\">\n\n<label>Bio (optional)</label>\n\n<input type=\"text\" formControlName=\"bio\">\n\n\n\n<button type=\"submit\">Save</button>\n<button id=\"cancel\">Cancle</button>\n\n  </form>\n\n</div>\n\n\n\n\n\n\n\n  <div class=\"col-md-9\">\n\n    <mat-tab-group animationDuration=\"0ms\">\n      <mat-tab label=\"Profile\">\n        \n<h4 style=\"margin-top:20px;\">Activity</h4>\n\n<div class=\"activity\"> \n\n  <div class=\"activity_pic\"><span></span></div>\n\n  <div>\n\n    <p><b>Jhon deo</b> copied as from as in list ass</p>\n    <span>21 minutes ago - on board ddjadgasS</span>\n\n  </div>\n\n</div>\n\n<div class=\"activity\"> \n\n    <div class=\"activity_pic\"><span></span></div>\n  \n    <div>\n  \n      <p><b>Jhon deo</b> copied as from as in list ass</p>\n      <span>21 minutes ago - on board ddjadgasS</span>\n  \n    </div>\n  \n  </div>\n  <div class=\"activity\"> \n\n      <div class=\"activity_pic\"><span></span></div>\n    \n      <div>\n    \n        <p><b>Jhon deo</b> copied as from as in list ass</p>\n        <span>21 minutes ago - on board ddjadgasS</span>\n    \n      </div>\n    \n    </div>\n    <div class=\"activity\"> \n\n        <div class=\"activity_pic\"><span></span></div>\n      \n        <div>\n      \n          <p><b>Jhon deo</b> copied as from as in list ass</p>\n          <span>21 minutes ago - on board ddjadgasS</span>\n      \n        </div>\n      \n      </div>\n      <div class=\"activity\"> \n\n          <div class=\"activity_pic\"><span></span></div>\n        \n          <div>\n        \n            <p><b>Jhon deo</b> copied as from as in list ass</p>\n            <span>21 minutes ago - on board ddjadgasS</span>\n        \n          </div>\n        \n        </div>\n        <div class=\"activity\"> \n\n            <div class=\"activity_pic\"><span></span></div>\n          \n            <div>\n          \n              <p><b>Jhon deo</b> copied as from as in list ass</p>\n              <span>21 minutes ago - on board ddjadgasS</span>\n          \n            </div>\n          \n          </div>\n          <div class=\"activity\"> \n\n              <div class=\"activity_pic\"><span></span></div>\n            \n              <div>\n            \n                <p><b>Jhon deo</b> copied as from as in list ass</p>\n                <span>21 minutes ago - on board ddjadgasS</span>\n            \n              </div>\n            \n            </div>\n            <div class=\"activity\"> \n\n                <div class=\"activity_pic\"><span></span></div>\n              \n                <div>\n              \n                  <p><b>Jhon deo</b> copied as from as in list ass</p>\n                  <span>21 minutes ago - on board ddjadgasS</span>\n              \n                </div>\n              \n              </div>\n\n\n      </mat-tab>\n      <mat-tab label=\"Cards\">Content 2</mat-tab>\n      <mat-tab label=\"Settings\">\n\n          <mat-tab-group animationDuration=\"0ms\">\n              <mat-tab label=\"Change Name\">\n\n\n <div class=\"settings\">\n\n<div class=\"container\">\n\n<div class=\"row\">\n\n<div class=\"col-md-8 mx-auto\">\n\n    <h4>Accounts Details</h4>     \n\n\n    <form [formGroup]=\"useredit\" (ngSubmit)=\"onSubmit()\" class=\"editform\">\n    \n        <label>Full Name</label>\n        \n        <input type=\"text\" formControlName=\"fullname\">\n        \n        <label>Username</label>\n        \n        <input type=\"text\" formControlName=\"username\">\n        \n        <label>Initials</label>\n        \n        <input type=\"text\" formControlName=\"Initials\">\n        \n        <label>Bio (optional)</label>\n        \n        <input type=\"text\" formControlName=\"bio\">\n        \n        \n        \n        <button type=\"submit\">Save</button>\n        <button id=\"cancel\">Cancle</button>\n        \n          </form>\n    \n\n</div>\n\n</div>\n\n</div>\n\n</div> \n\n\n              </mat-tab>\n              <mat-tab label=\"Change Avatar\">\n\n                \n\n <div class=\"settings\">\n\n    <div class=\"container\">\n    \n    <div class=\"row\">\n    \n    <div class=\"col-md-8 mx-auto\">\n    \n        <h4>Update Picture</h4>     \n    \n    \n        <form [formGroup]=\"useredit\" (ngSubmit)=\"onSubmit()\" class=\"editform\">\n        \n            <label>Upload Picture</label>\n            \n            <input type=\"file\">\n            \n           \n            <button type=\"submit\">Update</button>\n            \n              </form>\n        \n    \n    </div>\n    \n    </div>\n    \n    </div>\n    \n    </div> \n    \n\n              </mat-tab>\n              <mat-tab label=\"Set Password\">\n\n\n\n\n                  <div class=\"settings\">\n\n                      <div class=\"container\">\n                      \n                      <div class=\"row\">\n                      \n                      <div class=\"col-md-8 mx-auto\">\n                      \n                          <h4>Set Password</h4>     \n                      \n                      \n                          <form [formGroup]=\"useredit\" (ngSubmit)=\"onSubmit()\" class=\"editform\">\n                          \n                              <label>Password</label>\n                              \n                              <input type=\"password\">\n                              \n\n                              <label>Password again</label>\n                              \n                              <input type=\"password\">\n                              \n                              \n                              \n                              <button type=\"submit\">Save</button>\n                             \n                              \n                                </form>\n                          \n                      \n                      </div>\n                      \n                      </div>\n                      \n                      </div>\n                      \n                      </div> \n                      \n\n              </mat-tab>\n\n              <mat-tab label=\"Change Email\">\n\n\n                  <div class=\"settings\">\n\n                      <div class=\"container\">\n                      \n                      <div class=\"row\">\n                      \n                      <div class=\"col-md-8 mx-auto\">\n                      \n                          <h4>Change Email</h4>     \n                      \n                      \n                          <form [formGroup]=\"useredit\" (ngSubmit)=\"onSubmit()\" class=\"editform\">\n                          \n                              <label>Current Email</label>\n                              \n<span>abc@gmail.com</span>\n\n                              <input type=\"text\" formControlName=\"fullname\">\n                              \n                              <label>New Email</label>\n                              \n                           \n                              <button type=\"submit\">Save</button>\n                             \n                              \n                                </form>\n                          \n                      \n                      </div>\n                      \n                      </div>\n                      \n                      </div>\n                      \n                      </div> \n                      \n\n              </mat-tab>\n              <mat-tab label=\"Change Language\">\n\n\n                  <div class=\"settings\">\n\n                      <div class=\"container\">\n                      \n                      <div class=\"row\">\n                      \n                      <div class=\"col-md-8 mx-auto\">\n                      \n                          <h4>Change Language</h4>     \n                      \n                      \n                          <form [formGroup]=\"useredit\" (ngSubmit)=\"onSubmit()\" class=\"\">\n                          \n                              <label>Change Language</label>\n                              \n                              <input type=\"text\" formControlName=\"fullname\">\n                              \n                              <button type=\"submit\">Save</button>\n                             \n                              \n                                </form>\n                          \n                      \n                      </div>\n                      \n                      </div>\n                      \n                      </div>\n                      \n                      </div> \n                      \n\n              </mat-tab>\n      \n\n            </mat-tab-group>\n\n      </mat-tab>\n      <mat-tab label=\"TaskManagement\">\n\n<div class=\"container\">\n\n<div class=\"row Trello\">\n\n<div class=\"col-md-12\">\n\n<h4>Get extra fun and functionality.</h4>\n<p>TaskManagement Gold gives you all the regular TaskManagement features plus…</p>\n\n</div>\n\n<div class=\"col-md-4\">\n    <img src=\"../../../assets/error_404_http_code.jpg\" class=\"img-fluid\"> \n<h5>Power-Up Your Productivity</h5>\n\n<p>Give your boards a boost with additional features and \n  integrations. Enable up to three Power-Ups on any board.</p>\n\n</div>\n\n<div class=\"col-md-4\">\n    <img src=\"../../../assets/error_404_http_code.jpg\" class=\"img-fluid\"> \n    <h5>Power-Up Your Productivity</h5>\n    \n    <p>Give your boards a boost with additional features and \n      integrations. Enable up to three Power-Ups on any board.</p>\n    \n    </div>\n\n    <div class=\"col-md-4\">\n        <img src=\"../../../assets/error_404_http_code.jpg\" class=\"img-fluid\"> \n    <h5>Power-Up Your Productivity</h5>\n    \n    <p>Give your boards a boost with additional features and \n      integrations. Enable up to three Power-Ups on any board.</p>\n    \n    </div>\n\n</div>\n\n\n</div>\n\n      </mat-tab>\n    </mat-tab-group>\n\n  </div>\n\n\n\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/profile/userprofile/userprofile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/userprofile/userprofile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(fb) {
        this.fb = fb;
        this.useredit = this.fb.group({
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [''],
            Initials: [''],
            bio: ['']
        });
    }
    //  useredit = new FormGroup({
    //   fullname: new FormControl(''),
    //   username: new FormControl(''),
    //   Initials: new FormControl(''),
    //   bio:new FormControl('')
    //  });
    UserprofileComponent.prototype.onSubmit = function () {
        console.log(this.useredit.value);
    };
    UserprofileComponent.prototype.ngOnInit = function () {
        this.usernaame = JSON.parse(localStorage.getItem('uname'));
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".editform").hide();
            jquery__WEBPACK_IMPORTED_MODULE_3__("#edit_profile").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(".editform").show();
                jquery__WEBPACK_IMPORTED_MODULE_3__(".username").hide();
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("#cancel").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(".editform").hide();
                jquery__WEBPACK_IMPORTED_MODULE_3__(".username").show();
            });
        });
    };
    UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/profile/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/profile/userprofile/userprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/app/services/board.ts":
/*!***********************************!*\
  !*** ./src/app/services/board.ts ***!
  \***********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
var Board = /** @class */ (function () {
    function Board() {
    }
    return Board;
}());



/***/ }),

/***/ "./src/app/services/card.ts":
/*!**********************************!*\
  !*** ./src/app/services/card.ts ***!
  \**********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/services/list.ts":
/*!**********************************!*\
  !*** ./src/app/services/list.ts ***!
  \**********************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
var List = /** @class */ (function () {
    function List() {
    }
    return List;
}());



/***/ }),

/***/ "./src/app/services/service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.postboard = this.base_url + "/boards";
        this.getboardByUserId = this.base_url + "/Userboard";
        this.getboardbyid = this.base_url + "/board";
        this.getboardbyteam = this.base_url + "/Teamboard";
        this.getstarboard = this.base_url + "/GetStaredBoard";
        this.addstarboard = this.base_url + "/AddStaredBoard";
        this.removestarboard = this.base_url + "/RemoveStaredBoard";
        this.getteamstarboard = this.base_url + "/GetTeamStaredBoard";
        this.createlist = this.base_url + "/board-list";
        this.listbyboardid = this.base_url + "/ListByBoardId";
        this.createcard = this.base_url + "/List-card";
        this.cardbylistid = this.base_url + "/CardByListId";
        this.updateteam = this.base_url + "/updateTeam";
        this.updateuser = this.base_url + "/updateUser";
    }
    ServiceService.prototype.createBoardd = function (board) {
        return this.http.post(this.postboard + '/', board);
    };
    ServiceService.prototype.createTmBoardd = function (tboard) {
        return this.http.post(this.postboard + '/', tboard);
    };
    ServiceService.prototype.getBoardById = function (user_id) {
        return this.http.get(this.getboardByUserId + '/' + user_id);
    };
    ServiceService.prototype.getBoardId = function (_id) {
        return this.http.get(this.getboardbyid + '/' + _id);
    };
    ServiceService.prototype.getBoardTeam = function (_id) {
        return this.http.get(this.getboardbyteam + '/' + _id);
    };
    ServiceService.prototype.getStarBoard = function (user_id) {
        return this.http.get(this.getstarboard + '/' + user_id);
    };
    ServiceService.prototype.addstarBoard = function (board, _id) {
        return this.http.post(this.addstarboard + '/' + _id, board);
    };
    ServiceService.prototype.removestarBoard = function (board, _id) {
        return this.http.post(this.removestarboard + '/' + _id, board);
    };
    ServiceService.prototype.createListt = function (list) {
        return this.http.post(this.createlist + "/", list);
    };
    ServiceService.prototype.createCardd = function (card) {
        return this.http.post(this.createcard + "/", card);
    };
    ServiceService.prototype.getListbyboard = function (_id) {
        return this.http.get(this.listbyboardid + "/" + _id);
    };
    ServiceService.prototype.getCardbylist = function (list_id) {
        return this.http.get(this.cardbylistid + "/" + list_id);
    };
    ServiceService.prototype.getTeamStar = function (_id) {
        return this.http.get(this.getteamstarboard + "/" + _id);
    };
    ServiceService.prototype.updateTeam = function (_id, team) {
        return this.http.put(this.updateteam + "/" + _id, team);
    };
    ServiceService.prototype.updateUser = function (_id, auth) {
        return this.http.put(this.updateteam + "/" + _id, auth);
    };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/services/teamboard.ts":
/*!***************************************!*\
  !*** ./src/app/services/teamboard.ts ***!
  \***************************************/
/*! exports provided: Teamboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teamboard", function() { return Teamboard; });
var Teamboard = /** @class */ (function () {
    function Teamboard() {
    }
    return Teamboard;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebar works!\n</p>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/teamprofile/teamprofile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/teamprofile/teamprofile.module.ts ***!
  \***************************************************/
/*! exports provided: TeamprofileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamprofileModule", function() { return TeamprofileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teamprofile_teamprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teamprofile/teamprofile.component */ "./src/app/teamprofile/teamprofile/teamprofile.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _homepage_createboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../homepage/createboard.service */ "./src/app/homepage/createboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var TeamprofileModule = /** @class */ (function () {
    function TeamprofileModule() {
    }
    TeamprofileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_teamprofile_teamprofile_component__WEBPACK_IMPORTED_MODULE_3__["TeamprofileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            exports: [_teamprofile_teamprofile_component__WEBPACK_IMPORTED_MODULE_3__["TeamprofileComponent"]],
            providers: [_homepage_createboard_service__WEBPACK_IMPORTED_MODULE_6__["CreateboardService"]]
        })
    ], TeamprofileModule);
    return TeamprofileModule;
}());



/***/ }),

/***/ "./src/app/teamprofile/teamprofile/teamprofile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/teamprofile/teamprofile/teamprofile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-group {\r\n    margin-bottom: 48px;\r\n  }\r\n  \r\n  .userprofile span{\r\n\r\n   height: 150px;\r\n   width: 150px;\r\n   background-color: rebeccapurple;\r\n   border-radius: 50%;\r\n   display: inline-block;\r\n   overflow: hidden;\r\n  \r\n  }\r\n  \r\n  .userprofile{\r\n        margin-right: 39px;\r\n  }\r\n  \r\n  .userprofile button{\r\n    padding: 5px 20px;\r\n    border: none;\r\n    background-color: #0c3154;\r\n    color: white;\r\n    box-shadow: 1px 1px 2px 0px #000;\r\n    cursor: pointer;\r\n    margin-left: 16px;\r\n  }\r\n  \r\n  .userprofile h4{\r\n   padding-left: 20px;\r\n  \r\n  }\r\n  \r\n  .usersection{\r\n\r\n    padding: 50px 20px;\r\n\r\n  }\r\n  \r\n  .col-md-3.mx-auto.userpic input {\r\n    width: 100%;\r\n    height: 40px;\r\n    padding-left: 10px;\r\n    outline: none;\r\n}\r\n  \r\n  /* .userpic{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  } */\r\n  \r\n  .userpic form button{\r\n\r\n    background-color: #0c3154;\r\n    margin: 17px 3px;\r\n    padding: 6px 23px;\r\n    border: none;\r\n    color: white;\r\n    font-size: 14px;\r\n\r\n  }\r\n  \r\n  .userpic form button:last-child{\r\n\r\n    background-color:gray;\r\n\r\n  }\r\n  \r\n  .userpic form label{\r\n    margin: 10px 0px 0px 0px;\r\n  }\r\n  \r\n  .userpic form input{\r\n    outline: none;\r\n    padding-left: 10px;\r\n  }\r\n  \r\n  .userpic form textarea{\r\n\r\n    height: 100px;\r\n\r\n  }\r\n  \r\n  .Trello{\r\n\r\n    padding: 50px 0px;\r\n\r\n  }\r\n  \r\n  .Trello h4, .Trello h5{\r\n    text-align: center;\r\n    padding: 30px 0px 0px 0px;\r\n\r\n   \r\n  }\r\n  \r\n  .Trello p{\r\n  text-align: center;\r\n}\r\n  \r\n  .activity{\r\n    display: flex;\r\n    width: 100%;\r\n    border-top: 1px solid #ccc;\r\n    padding: 15px 0px;\r\n  }\r\n  \r\n  .activity p,.activity span{\r\n\r\n    margin: 0px;\r\n    font-size: 13px;\r\n\r\n  }\r\n  \r\n  .activity_pic span{\r\n    height: 40px;\r\n    width: 40px;\r\n    display: inline-block;\r\n    border: 1px solid #aaa;\r\n    border-radius: 50%;\r\n    margin-right: 15px;\r\n  }\r\n  \r\n  .settings h4{\r\n    margin: 20px 0px;\r\n  }\r\n  \r\n  .settings form {\r\n    margin: 20px 0px;\r\n}\r\n  \r\n  .settings input {\r\n    height: 40px;\r\n    width: 100%;\r\n    margin: -5px 0px 15px 0px;\r\n    outline: none;\r\n    padding-left: 20px;\r\n}\r\n  \r\n  .settings button{\r\n  padding:10px 30px;\r\n  margin:0px 10px;\r\n  border:none;\r\n  background-color:#0c3154;\r\n  color:white;\r\n  outline:none;\r\n  box-shadow: 0px 2px 1px 0px #000;\r\n}\r\n  \r\n  .board_view{\r\n  background-color: #70bfa4;\r\n  height: 100px;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  margin: 10px 0px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  background-size: cover!important;\r\n  background-repeat: no-repeat!important;\r\n  background-position: center!important;\r\n}\r\n  \r\n  .wrapper h5{\r\n  font-size: 14px;\r\n  margin: 10px 0px;\r\n}\r\n  \r\n  .board_view h4{\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: white;\r\n  padding: 10px;\r\n  text-shadow: 1px 1px 2px #000;\r\n}\r\n  \r\n  .board_view .fa{\r\n  font-weight: bold;\r\n  color: white;\r\n  position: absolute;\r\n  bottom: 17px;\r\n  right: 26px;\r\n}\r\n  \r\n  .setting_sidebar{\r\n\r\n  height: 200px;\r\n  width: 100%;\r\n  background-color: #152638;\r\n}\r\n  \r\n  .board_create{\r\n\r\n  background-color: #cdd0d4;\r\n  height: 100px;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  margin: 10px 0px;\r\n  cursor: pointer;\r\n  position: relative;\r\n\r\n}\r\n  \r\n  .board_view span {\r\n  color: white;\r\n  margin: 0px 5px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n  \r\n  .board_create h4 {\r\n  color: #222;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  line-height: 100px;\r\n}\r\n  \r\n  .starcolor .fa{\r\n  display: none;\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  color: white;\r\n}\r\n  \r\n  .starcolor .col-md-3:hover > .fa{\r\n  display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXByb2ZpbGUvdGVhbXByb2ZpbGUvdGVhbXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtFQUNyQjs7RUFFQTs7R0FFQyxhQUFhO0dBQ2IsWUFBWTtHQUNaLCtCQUErQjtHQUMvQixrQkFBa0I7R0FDbEIscUJBQXFCO0dBQ3JCLGdCQUFnQjs7RUFFakI7O0VBRUE7UUFDTSxrQkFBa0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7R0FDQyxrQkFBa0I7O0VBRW5COztFQUNBOztJQUVFLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztFQUNFOzs7O0tBSUc7O0VBRUg7O0lBRUUseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlOztFQUVqQjs7RUFHQTs7SUFFRSxxQkFBcUI7O0VBRXZCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxhQUFhOztFQUVmOztFQUVBOztJQUVFLGlCQUFpQjs7RUFFbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCOzs7RUFHM0I7O0VBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLGVBQWU7O0VBRWpCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7QUFDcEI7O0VBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztFQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxzQ0FBc0M7RUFDdEMscUNBQXFDO0FBQ3ZDOztFQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztFQUdBOztFQUVFLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztFQUdBOztFQUVFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztFQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlYW1wcm9maWxlL3RlYW1wcm9maWxlL3RlYW1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuICBcclxuICAudXNlcnByb2ZpbGUgc3BhbntcclxuXHJcbiAgIGhlaWdodDogMTUwcHg7XHJcbiAgIHdpZHRoOiAxNTBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgfVxyXG5cclxuICAudXNlcnByb2ZpbGV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzOXB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXJwcm9maWxlIGJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMzE1NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDBweCAjMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAudXNlcnByb2ZpbGUgaDR7XHJcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBcclxuICB9XHJcbiAgLnVzZXJzZWN0aW9ue1xyXG5cclxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuY29sLW1kLTMubXgtYXV0by51c2VycGljIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4gIC8qIC51c2VycGlje1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9ICovXHJcblxyXG4gIC51c2VycGljIGZvcm0gYnV0dG9ue1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzMxNTQ7XHJcbiAgICBtYXJnaW46IDE3cHggM3B4O1xyXG4gICAgcGFkZGluZzogNnB4IDIzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC51c2VycGljIGZvcm0gYnV0dG9uOmxhc3QtY2hpbGR7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xyXG5cclxuICB9XHJcblxyXG4gIC51c2VycGljIGZvcm0gbGFiZWx7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAudXNlcnBpYyBmb3JtIGlucHV0e1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC51c2VycGljIGZvcm0gdGV4dGFyZWF7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuVHJlbGxve1xyXG5cclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5UcmVsbG8gaDQsIC5UcmVsbG8gaDV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweCAwcHggMHB4O1xyXG5cclxuICAgXHJcbiAgfVxyXG5cclxuLlRyZWxsbyBwe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAuYWN0aXZpdHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2aXR5IHAsLmFjdGl2aXR5IHNwYW57XHJcblxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmFjdGl2aXR5X3BpYyBzcGFue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNldHRpbmdzIGg0e1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5zZXR0aW5ncyBmb3JtIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncyBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogLTVweCAwcHggMTVweCAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MgYnV0dG9ue1xyXG4gIHBhZGRpbmc6MTBweCAzMHB4O1xyXG4gIG1hcmdpbjowcHggMTBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwYzMxNTQ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgb3V0bGluZTpub25lO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCAjMDAwO1xyXG59XHJcblxyXG4uYm9hcmRfdmlld3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBiZmE0O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0IWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcbi53cmFwcGVyIGg1e1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG4uYm9hcmRfdmlldyBoNHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMDAwO1xyXG59XHJcblxyXG4uYm9hcmRfdmlldyAuZmF7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE3cHg7XHJcbiAgcmlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcblxyXG4uc2V0dGluZ19zaWRlYmFye1xyXG5cclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTI2Mzg7XHJcbn1cclxuXHJcblxyXG4uYm9hcmRfY3JlYXRle1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkMGQ0O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi5ib2FyZF92aWV3IHNwYW4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDBweCA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJvYXJkX2NyZWF0ZSBoNCB7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5zdGFyY29sb3IgLmZhe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnN0YXJjb2xvciAuY29sLW1kLTM6aG92ZXIgPiAuZmF7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/teamprofile/teamprofile/teamprofile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/teamprofile/teamprofile/teamprofile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- The Modal -->\n  <div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n  \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Create Board</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n  \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n        \n            <div class=\"container\">\n\n<form [formGroup]=\"createboard\">\n    <div class=\"row\">\n<div class=\"col-md-6\">\n\n    <div class=\"create_panel_board\" [style.background]=\"boards.color_code\" [ngStyle]=\"{'background': 'url(' + boards.color_code + ')'}\">\n      <div class=\"overlay\">\n     <input type=\"text\" placeholder=\"Enter Project Title\" name=\"title\" formControlName=\"title\" [(ngModel)]=\"boards.title\" required>\n<br>\n<select formControlName=\"access_id\" [(ngModel)]=\"boards.access_id\" name=\"access_id\" required>\n\n    <!-- <option *ngFor=\"let team of myteam\"> {{team.name}} </option> -->\n    \n    <option value=\"public\"> Public </option>\n    <option value=\"private\"> Private </option>\n\n</select>\n\n<select formControlName=\"access_type\" [(ngModel)]=\"boards.access_type\" name=\"access_type\" required>\n\n    <option value=\"public\"> Public </option>\n    <option value=\"private\"> Private </option>\n</select>\n<input type=\"hidden\" id=\"team_id\" formControlName=\"team_id\" [(ngModel)]=\"boards.team_id\" name=\"team_id\">\n<!-- <input type=\"hidden\" id=\"user_id\" formControlName=\"user_id\" [(ngModel)]=\"boards.user_id\" name=\"user_id\"> -->\n<input type=\"button\" (click)=\"createBoard()\" data-dismiss=\"modal\" value=\"Create\" [disabled]=\"createboard.invalid\">\n</div>\n    </div>\n\n</div>\n\n<div class=\"col-md-6\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\" id=\"color\">\n            <h4 class=\"text-center\">Choose Colours</h4>\n            <div class=\"custom-radios\">\n                <div>\n                  <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-1\" name=\"color_code\" value=\"red\" required>\n                  <label for=\"color-1\">\n                    <span>\n                    </span>\n                  </label>\n                </div>  \n                \n                <div>\n                  <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-2\" name=\"color_code\" value=\"green\" required>\n                  <label for=\"color-2\">\n                    <span>\n                    </span>\n                  </label>\n                </div>\n                \n                <div>\n                  <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-3\" name=\"color_code\" value=\"blue\" required>\n                  <label for=\"color-3\">\n                    <span>\n                    </span>\n                  </label>\n                </div>\n\n                <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-4\" name=\"color_code\" value=\"yellow\" required>\n                    <label for=\"color-4\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n\n                  <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-5\" name=\"color_code\" value=\"pink\" required>\n                    <label for=\"color-5\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n\n                  <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-6\" name=\"color_code\" value=\"hotpink\" required>\n                    <label for=\"color-6\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n                  <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-7\" name=\"color_code\" value=\"gray\" required>\n                    <label for=\"color-7\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n                  <div>\n                    <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color-8\" name=\"color_code\" value=\"black\" required>\n                    <label for=\"color-8\">\n                      <span>\n                      </span>\n                    </label>\n                  </div>\n              \n                \n                        \n                        <div>\n                          <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color2\" name=\"color_code\" [value]=\"img2\" required>\n                          <label for=\"color2\">\n                            <span>\n                            </span>\n                          </label>\n                        </div>\n                        \n                        <div>\n                          <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color3\" name=\"color_code\" [value]=\"img3\" required>\n                          <label for=\"color3\">\n                            <span>\n                            </span>\n                          </label>\n                        </div>\n        \n                        <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color4\" name=\"color_code\" [value]=\"img4\" required>\n                            <label for=\"color4\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n        \n                          <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color5\" name=\"color_code\" [value]=\"img5\" required>\n                            <label for=\"color5\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n        \n                          <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color6\" name=\"color_code\" [value]=\"img6\" required>\n                            <label for=\"color6\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n                          <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color7\" name=\"color_code\" [value]=\"img7\" required>\n                            <label for=\"color7\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n                          <div>\n                            <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color8\" name=\"color_code\" [value]=\"img8\" required>\n                            <label for=\"color8\">\n                              <span>\n                              </span>\n                            </label>\n                          </div>\n                      \n                        <div>\n                          <input type=\"radio\" formControlName=\"color_code\" [(ngModel)]=\"boards.color_code\" id=\"color9\" name=\"color_code\" [value]=\"img9\" required>\n                          <label for=\"color9\">\n                            <span>\n                            </span>\n                          </label>\n                        </div>\n\n                       \n\n                      </div>\n            \n                </div>\n            \n    \n    </div>\n\n</div>\n\n</div>\n</form>\n            </div>\n\n\n        </div>\n  \n      \n  \n      </div>\n    </div>\n  </div>\n\n\n<div class=\"usersection\">\n  <div class=\"container-fluid\">\n  \n  <div class=\"row\">\n\n  <div class=\"col-md-3 mx-auto userpic\">\n    <div *ngFor=\"let tem of team\">\n  <div class=\"userprofile\">\n  \n  <span> <img src=\"../../../assets/userpic5.jpg\" class=\"img-fluid\"> </span>\n  <h4 class=\"username\"> {{tem.name}} <br></h4>\n  <button id=\"edit_profile\" class=\"username\">Edit Profile</button>\n  \n  </div>\n  \n  <form [formGroup]=\"useredittT\">\n  \n  <label>Name</label>\n  \n  <input type=\"text\" formControlName=\"name\" [(ngModel)]=\"teamm.name\" name=\"name\" [value]=\"tem.name\">\n  \n  <label>Short Name</label>\n  \n  <input type=\"text\" formControlName=\"short_name\" [(ngModel)]=\"teamm.short_name\" name=\"short_name\" [value]=\"tem.short_name\">\n  \n  <label>Website (optional)</label>\n  \n  <input type=\"text\" formControlName=\"website\" [(ngModel)]=\"teamm.website\" name=\"website\" [value]=\"tem.website\">\n  \n  <label>Description (optional)</label>\n  \n  <input type=\"text\" formControlName=\"description\" [(ngModel)]=\"teamm.description\" name=\"description\" [value]=\"tem.description\">\n  \n  <button type=\"button\" (click)=\"UpdateTeamm()\">Save</button>\n  <button id=\"cancel\">Cancle</button>\n  \n  </form>\n  </div>\n  </div>\n  \n  \n     <div class=\"col-md-9\">\n  \n      <mat-tab-group animationDuration=\"0ms\">\n        <mat-tab label=\"Boards\">\n\n\n<div class=\"col-md-12\">\n    <h6>Starred Board</h6>\n  <div class=\"row starcolor\">\n    \n    <div class=\"col-md-3\" *ngFor=\"let star of starteam\">\n \n    <a [routerLink]=\"['/board',star._id]\">\n    <div class=\"board_view\" [style.background]=\"star.color_code\" [ngStyle]=\"{'background': 'url(' + star.color_code + ')'}\">\n\n        <div class=\"board_data\">\n\n         <h4>{{star.title}}</h4>\n         \n        </div>\n    </div>\n  </a>\n  <input [ngClass]='(star.stared==\"Yes\")?\"orange\":\"white\"' checked=\"true\" class=\"star\" type=\"checkbox\" title=\"bookmark page\" (click)=\"addremoveboardd(star._id,star.stared)\">\n    </div>\n   \n     \n    \n               \n    \n                     </div>\n\n\n</div>\n\n          <div class=\"col-md-12\">\n      \n            <div class=\"\">\n\n\n<div class=\"row\">\n\n\n  <div class=\"col-md-12\">\n\n\n      <h6>Personal Board</h6>\n    <div class=\"row starcolor\">\n       \n       <div class=\"col-md-3\" *ngFor=\"let board of boardd\">\n       <a [routerLink]=\"['/board',board._id]\">\n       <div class=\"board_view\" [style.background]=\"board.color_code\" [ngStyle]=\"{'background': 'url(' + board.color_code + ')'}\">\n\n           <div class=\"board_data\">\n\n            <h4>{{board.title}}</h4>\n            \n           </div>\n       </div>\n     </a>\n     <input [ngClass]='(board.stared==\"Yes\")?\"orange\":\"white\"' checked=\"true\" class=\"star\" type=\"checkbox\" title=\"bookmark page\" (click)=\"addremoveboardd(board._id,board.stared)\">\n       </div>\n      \n                   <div class=\"col-md-3\">\n       \n                       <div class=\"board_create\" data-toggle=\"modal\" data-target=\"#myModal\">\n\n                           <h4>Create new board...</h4>\n\n                           <i class=\"fa fa-star-o\"></i>\n\n                       </div>\n             \n                   </div>\n       \n                  \n       \n                        </div>\n\n\n  </div>\n\n\n\n</div>\n\n\n                          \n            </div>\n      \n          </div>\n\n     \n        </mat-tab>\n        <mat-tab label=\"Members\">Content 2</mat-tab>\n        <mat-tab label=\"Settings\">\n  settings\n        </mat-tab>\n        <mat-tab label=\"Business Classes\">\n  \n  <div class=\"container\">\n  \n  <div class=\"row Trello\">\n  \n  <div class=\"col-md-12\">\n  \n  <h4>Get extra fun and functionality.</h4>\n  <p>TaskManagement Gold gives you all the regular TaskManagement features plus…</p>\n  \n  </div>\n  \n  <div class=\"col-md-4\">\n      <img src=\"../../../assets/error_404_http_code.jpg\" class=\"img-fluid\"> \n  <h5>Power-Up Your Productivity</h5>\n  \n  <p>Give your boards a boost with additional features and \n    integrations. Enable up to three Power-Ups on any board.</p>\n  \n  </div>\n  \n  <div class=\"col-md-4\">\n      <img src=\"../../../assets/error_404_http_code.jpg\" class=\"img-fluid\"> \n      <h5>Power-Up Your Productivity</h5>\n      \n      <p>Give your boards a boost with additional features and \n        integrations. Enable up to three Power-Ups on any board.</p>\n      \n      </div>\n  \n      <div class=\"col-md-4\">\n          <img src=\"../../../assets/error_404_http_code.jpg\" class=\"img-fluid\"> \n      <h5>Power-Up Your Productivity</h5>\n      \n      <p>Give your boards a boost with additional features and \n        integrations. Enable up to three Power-Ups on any board.</p>\n      \n      </div>\n  \n  </div>\n  \n  \n  </div>\n  \n        </mat-tab>\n      </mat-tab-group>\n  \n    </div>\n  \n  \n  \n  \n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/teamprofile/teamprofile/teamprofile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/teamprofile/teamprofile/teamprofile.component.ts ***!
  \******************************************************************/
/*! exports provided: TeamprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamprofileComponent", function() { return TeamprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_createboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../homepage/createboard.service */ "./src/app/homepage/createboard.service.ts");
/* harmony import */ var _homepage_createboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../homepage/createboard */ "./src/app/homepage/createboard.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_teamboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/teamboard */ "./src/app/services/teamboard.ts");
/* harmony import */ var _services_board__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/board */ "./src/app/services/board.ts");
/* harmony import */ var _homepage_team__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../homepage/team */ "./src/app/homepage/team.ts");











var TeamprofileComponent = /** @class */ (function () {
    //  public createboard: FormGroup;
    function TeamprofileComponent(fb, boardservice, routee, route, mainservice) {
        this.fb = fb;
        this.boardservice = boardservice;
        this.routee = routee;
        this.route = route;
        this.mainservice = mainservice;
        this.boards = new _services_teamboard__WEBPACK_IMPORTED_MODULE_7__["Teamboard"]();
        this.boardss = new _services_board__WEBPACK_IMPORTED_MODULE_8__["Board"]();
        this.starboards = [];
        this.recentboards = [];
        this.board = new _homepage_createboard__WEBPACK_IMPORTED_MODULE_5__["Createboard"]();
        this.stars = [];
        this.teamm = new _homepage_team__WEBPACK_IMPORTED_MODULE_9__["Teams"]();
        this.createboard = this.fb.group({
            _id: [''],
            title: [''],
            team_id: [''],
            color_code: [''],
            access_type: [''],
            access_id: [''],
            image_url: [''],
            create_date: [''],
            __v: ['']
        });
        this.img2 = "https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg";
        this.img3 = "https://cdn.pixabay.com/photo/2018/02/21/11/02/adult-3170055_960_720.jpg";
        this.img4 = "https://cdn.pixabay.com/photo/2017/08/08/14/44/belfry-2611573_960_720.jpg";
        this.img5 = "https://cdn.pixabay.com/photo/2016/04/27/15/27/canyon-1356886_960_720.jpg";
        this.img6 = "https://cdn.pixabay.com/photo/2017/10/04/18/14/ice-2817112_960_720.jpg";
        this.img7 = "https://cdn.pixabay.com/photo/2013/10/07/18/06/field-192179_960_720.jpg";
        this.img8 = "https://cdn.pixabay.com/photo/2018/04/23/09/28/nature-3343653_960_720.jpg";
        this.img9 = "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg";
        /**********************from  home component  *********************/
        this.useredittT = this.fb.group({
            name: [''],
            short_name: [''],
            website: [''],
            description: ['']
        });
        this.starteam = [];
        this.teamidupdate = null;
    }
    TeamprofileComponent.prototype.createBoard = function () {
        var _this = this;
        this.mainservice.createTmBoardd(this.boards).subscribe(function (res) { return _this.boardd.push(res); });
    };
    TeamprofileComponent.prototype.addremoveboardd = function (_id, stared) {
        var _this = this;
        if (stared === 'Yes') {
            this.mainservice.removestarBoard(this.boardss, _id).subscribe(function (star) {
                console.log(star);
                _this.ngOnInit();
            });
        }
        if (stared === 'No') {
            this.mainservice.addstarBoard(this.boardss, _id).subscribe(function (star) {
                _this.ngOnInit();
            });
        }
    };
    TeamprofileComponent.prototype.UpdateTeamm = function () {
        var _this = this;
        this.mainservice.updateTeam(this.route.snapshot.params._id, this.teamm).subscribe(function (tream) {
            _this.ngOnInit();
        });
    };
    TeamprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boards.team_id = this.route.snapshot.params._id;
        this.mainservice.getBoardTeam(this.route.snapshot.params._id).subscribe(function (tmboard) { return _this.boardd = tmboard; });
        this.mainservice.getStarBoard(this.route.snapshot.params.user_id).subscribe(function (usere) { return _this.stars = usere; });
        this.boardservice.getuserById(this.route.snapshot.params._id).subscribe(function (user) {
            _this.team = user;
        });
        this.mainservice.getTeamStar(this.route.snapshot.params._id).subscribe(function (star) { return _this.starteam = star; });
        // $(document).ready(function(){
        //   $(".editform").hide();
        //   $("#edit_profile").click(function(){
        //      $(".editform").show();
        //      $(".username").hide();
        //   });
        //   $("#cancel").click(function(){
        //     $(".editform").hide();
        //     $(".username").show();
        //  });
        // });
    };
    TeamprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teamprofile',
            template: __webpack_require__(/*! ./teamprofile.component.html */ "./src/app/teamprofile/teamprofile/teamprofile.component.html"),
            providers: [_homepage_createboard_service__WEBPACK_IMPORTED_MODULE_4__["CreateboardService"]],
            styles: [__webpack_require__(/*! ./teamprofile.component.css */ "./src/app/teamprofile/teamprofile/teamprofile.component.css"), __webpack_require__(/*! ../../homepage/home/home.component.css */ "./src/app/homepage/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _homepage_createboard_service__WEBPACK_IMPORTED_MODULE_4__["CreateboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"]])
    ], TeamprofileComponent);
    return TeamprofileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\TaskManagement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
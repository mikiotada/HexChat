(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'hexchat';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/routing/app-routing.module */ "./src/app/shared/routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/preference/preference.component */ "./src/app/components/preference/preference.component.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/app/components/rating/rating.component.ts");
/* harmony import */ var _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/chat-list/chat-list.component */ "./src/app/components/chat-list/chat-list.component.ts");
/* harmony import */ var _components_chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/chat-msgs/chat-msgs.component */ "./src/app/components/chat-msgs/chat-msgs.component.ts");


// routing


// Firebase services + environment module




// Auth service

// Components that we created










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_13__["PreferenceComponent"],
        _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
        _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"],
        _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_15__["ChatListComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        _components_chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_16__["ChatMsgsComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_13__["PreferenceComponent"],
                    _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
                    _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"],
                    _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_15__["ChatListComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                    _components_chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_16__["ChatMsgsComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"]
                ],
                providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/chat-list/chat-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-list/chat-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ChatListComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_tr_7_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeChannel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", chat_r15.img_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r15.group_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r15.last_msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r15.time);
} }
class ChatListComponent {
    constructor() {
        this.channel = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chatList = [
            {
                group_name: 'USF MSDS Students',
                time: '9:30 AM',
                last_msg: 'meeting at 10',
                img_url: 'https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg'
            },
            {
                group_name: 'fast.ai Cohort 4',
                time: 'yesterday',
                last_msg: 'nice to meet you all',
                img_url: 'https://cdn.aarp.net/content/dam/aarp/travel/destination-guides/2018/04/1140-travel-destination-san-francisco-main-page.imgcache.rev2e8bf9592b441099e8e7efb70e1c1e4b.web.650.370.jpg'
            },
            {
                group_name: 'Python developers',
                time: '04/03/2020',
                last_msg: 'great work!',
                img_url: 'https://image.shutterstock.com/image-photo/positive-skilled-young-multiethnic-coders-260nw-1145542748.jpg'
            }
        ];
    }
    changeChannel() {
        this.channel = true;
        this.change.emit(this.channel);
    }
    changeChannelBack() {
        this.channel = false;
        this.change.emit(this.channel);
    }
    changeToProfile() {
        this.channel = false;
        this.change.emit(this.channel);
    }
    ngOnInit() {
    }
}
ChatListComponent.ɵfac = function ChatListComponent_Factory(t) { return new (t || ChatListComponent)(); };
ChatListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatListComponent, selectors: [["app-chat-list"]], inputs: { channel: "channel" }, outputs: { change: "update" }, decls: 8, vars: 1, consts: [["type", "button", "routerLink", "/preference", "routerLinkActive", "active", 1, "btn", "btn-primary", "btn-block"], ["type", "button", "routerLink", "/profile", "routerLinkActive", "active", 1, "btn", "btn-primary", "btn-block"], [1, "table", "table-hover"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["scope", "col"], [1, "avatar", 3, "src"], [2, "font-weight", "bold", "font-size", "125%"], ["align", "right", "scope", "col", 2, "font-size", "90%"]], template: function ChatListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go back to preferences\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Profile\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatListComponent_tr_7_Template, 10, 4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".avatar[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-list',
                templateUrl: './chat-list.component.html',
                styleUrls: ['./chat-list.component.css']
            }]
    }], function () { return []; }, { channel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['update']
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat-msgs/chat-msgs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-msgs/chat-msgs.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatMsgsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMsgsComponent", function() { return ChatMsgsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChatMsgsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatMsgsComponent.ɵfac = function ChatMsgsComponent_Factory(t) { return new (t || ChatMsgsComponent)(); };
ChatMsgsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMsgsComponent, selectors: [["app-chat-msgs"]], decls: 26, vars: 0, consts: [[1, "container"], ["src", "https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg", "alt", "Avatar", 2, "width", "100%"], [1, "time-right"], [1, "container", "darker"], ["src", "https://www.guampassportrenewal.com/sites/default/files/sage-2_o.jpg", "alt", "Avatar", 1, "right", 2, "width", "100%"], [1, "time-left"]], template: function ChatMsgsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chat Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hello. How are you today?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hey! I'm fine. Thanks for asking!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "11:01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sweet! So, what do you wanna do today?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "11:02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nah, I dunno. Play soccer.. or learn more coding perhaps?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "11:05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 800px;\n  padding: 0 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n  width:700px;\n}\n\n.darker[_ngcontent-%COMP%] {\n  border-color: #ccc;\n  background-color: #ddd;\n}\n\n.container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%;\n}\n\n.container[_ngcontent-%COMP%]   img.right[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 20px;\n  margin-right:0;\n}\n\n.time-right[_ngcontent-%COMP%] {\n  float: right;\n  color: #aaa;\n}\n\n.time-left[_ngcontent-%COMP%] {\n  float: left;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LW1zZ3MvY2hhdC1tc2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbXNncy9jaGF0LW1zZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6NzAwcHg7XG59XG5cbi5kYXJrZXIge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY29udGFpbmVyIGltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbnRhaW5lciBpbWcucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6MDtcbn1cblxuLnRpbWUtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4udGltZS1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjOTk5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMsgsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-msgs',
                templateUrl: './chat-msgs.component.html',
                styleUrls: ['./chat-msgs.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 0, consts: [["id", "home", 1, "bgimg-1", "w3-grayscale-min"], ["id", "submissionlogin"], [1, "buttonlogin"], ["routerLink", "/signin", "type", "submit"], [1, "w3-display-left", "w3-text-white", 2, "padding", "130px"], [1, "firstsentecne"], [1, "secondsentecne"], ["id", "submissionsignup"], [1, "buttonsignup"], ["routerLink", "/join", "type", "submit"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOG IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rediscover Friendship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Make new friends with hexchat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".buttonsignup[_ngcontent-%COMP%]{\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 15px;\n  margin: 4px 4px;\n  cursor: pointer;\n  background-color: #4000FF;\n  border-radius: 20px;\n  width: 220px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.buttonlogin[_ngcontent-%COMP%]{\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 15px;\n  margin: 4px 4px;\n  cursor: pointer;\n  background-color: #FAFAFA;\n  color: #4000FF;\n  border-radius: 10px;\n  width: 150px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.firstsentecne[_ngcontent-%COMP%]{\n  font-size: 80px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.secondsentecne[_ngcontent-%COMP%]{\n  font-size: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n#submissionsignup[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#submissionlogin[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 0px 100px 0px;\n  margin-top : 25px;\n}\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  height: 100%;\n  line-height: 1.8;\n}\n\n.bgimg-1[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.pinimg.com/originals/10/18/82/10188295afc41a318ec41ab958ec38b3.jpg\");\n  background-position: center;\n  background-size: cover;\n  min-height: 100%;\n}\n#home[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.pinimg.com/originals/10/18/82/10188295afc41a318ec41ab958ec38b3.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QztBQUMzQztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUdBLDZCQUE2QjtBQUM3QjtFQUNFLHFHQUFxRztFQUNyRywyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUdBQXFHO0FBQ3ZHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zaWdudXB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA0cHggNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDAwRkY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAyMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4uYnV0dG9ubG9naW57XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA0cHggNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIGNvbG9yOiAjNDAwMEZGO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLmZpcnN0c2VudGVjbmV7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4uc2Vjb25kc2VudGVjbmV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4jc3VibWlzc2lvbnNpZ251cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzdWJtaXNzaW9ubG9naW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAwcHggMTAwcHggMHB4O1xuICBtYXJnaW4tdG9wIDogMjVweDtcbn1cblxuYm9keSwgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxuXG4vKiBGdWxsIGhlaWdodCBpbWFnZSBoZWFkZXIgKi9cbi5iZ2ltZy0xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzEwLzE4LzgyLzEwMTg4Mjk1YWZjNDFhMzE4ZWM0MWFiOTU4ZWMzOGIzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4jaG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8xMC8xOC84Mi8xMDE4ODI5NWFmYzQxYTMxOGVjNDFhYjk1OGVjMzhiMy5qcGdcIik7XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/preference/preference.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/preference/preference.component.ts ***!
  \***************************************************************/
/*! exports provided: PreferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferenceComponent", function() { return PreferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-list/chat-list.component */ "./src/app/components/chat-list/chat-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rating/rating.component */ "./src/app/components/rating/rating.component.ts");
/* harmony import */ var _chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat-msgs/chat-msgs.component */ "./src/app/components/chat-msgs/chat-msgs.component.ts");








function PreferenceComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r3.photoURL ? user_r3.photoURL : "/assets/dummy-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r3.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.displayName ? user_r3.displayName : "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.email);
} }
function PreferenceComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PreferenceComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-msgs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PreferenceComponent {
    constructor(authService, router, ngZone) {
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.channel = false;
    }
    countChange(event) {
        this.channel = event;
    }
    ngOnInit() {
    }
}
PreferenceComponent.ɵfac = function PreferenceComponent_Factory(t) { return new (t || PreferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
PreferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreferenceComponent, selectors: [["app-preference"]], decls: 10, vars: 4, consts: [[1, "split", "left"], [3, "channel", "update"], [1, "text-center", 2, "position", "absolute", "bottom", "5%", "right", "40%"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 2, "margin-top", "auto", 3, "click"], [1, "split", "right"], ["class", "row", 4, "ngIf"], ["class", "centered", 4, "ngIf"], ["class", "msgs", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "media"], ["routerLink", "/home"], [1, "align-self-start", "mr-5", "img-thumbnail", "rounded-circle", 3, "src", "alt"], [1, "media-body"], [1, "centered"], [1, "msgs"]], template: function PreferenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-chat-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function PreferenceComponent_Template_app_chat_list_update_1_listener($event) { return ctx.countChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferenceComponent_Template_button_click_3_listener() { return ctx.authService.SignOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PreferenceComponent_div_7_Template, 18, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PreferenceComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PreferenceComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channel);
    } }, directives: [_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_3__["ChatListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__["RatingComponent"], _chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_6__["ChatMsgsComponent"]], styles: [".split[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 50%;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    overflow-x: hidden;\n    padding-top: 20px;\n  }\n\n  \n\n  .left[_ngcontent-%COMP%] {\n    left: 0;\n    background-color: #E0E0E0;\n    width: 30%;\n  }\n\n  \n\n  .right[_ngcontent-%COMP%] {\n    right: 0;\n    \n    width: 70%;\n  }\n\n  \n\n  .centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    left: 20%;\n    right: 20%;\n    \n    \n  }\n\n  .msgs[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    left: 5%;\n    right: 5%;\n    \n    \n  }\n\n  \n\n  .centered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    border-radius: 50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlL3ByZWZlcmVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQSwwQkFBMEI7O0VBQzFCO0lBQ0UsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUEsMkJBQTJCOztFQUMzQjtJQUNFLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVBLGlFQUFpRTs7RUFDakU7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtFQUN4Qjs7RUFFRTtJQUNBLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsc0JBQXNCO0VBQ3hCOztFQUVBLDZEQUE2RDs7RUFDN0Q7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlL3ByZWZlcmVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxpdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC8qIENvbnRyb2wgdGhlIGxlZnQgc2lkZSAqL1xuICAubGVmdCB7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cblxuICAvKiBDb250cm9sIHRoZSByaWdodCBzaWRlICovXG4gIC5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Ki9cbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLyogSWYgeW91IHdhbnQgdGhlIGNvbnRlbnQgY2VudGVyZWQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5ICovXG4gIC5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICByaWdodDogMjAlO1xuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xuICB9XG5cbiAgICAubXNncyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDUlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG4gICAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbiAgfVxuXG4gIC8qIFN0eWxlIHRoZSBpbWFnZSBpbnNpZGUgdGhlIGNlbnRlcmVkIGNvbnRhaW5lciwgaWYgbmVlZGVkICovXG4gIC5jZW50ZXJlZCBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preference',
                templateUrl: './preference.component.html',
                styleUrls: ['./preference.component.css']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-list/chat-list.component */ "./src/app/components/chat-list/chat-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ProfileComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r12.photoURL ? user_r12.photoURL : "/assets/dummy-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r12.displayName);
} }
class ProfileComponent {
    constructor(authService, router, ngZone) {
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.channel = false;
    }
    countChange(event) {
        this.channel = event;
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 84, vars: 2, consts: [[1, "split", "left"], [3, "channel", "update"], [1, "text-center", 2, "position", "absolute", "bottom", "5%", "right", "40%"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 2, "margin-top", "auto", 3, "click"], [1, "split", "right"], [1, "h2"], ["class", "row", 4, "ngIf"], [1, "form-group"], ["for", "userPhoto1"], ["type", "file", "id", "userPhoto1", 1, "form-control-file"], [1, "tab"], ["type", "email", "id", "exampleFormControlInput1", "placeholder", "robot@hexchat.com", 1, "form-control"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "inlineRadioOptions", "id", "userGender1", "value", "option1", 1, "form-check-input"], ["for", "userGender1", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "userGender2", "value", "option2", 1, "form-check-input"], ["for", "userGender2", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "userGender3", "value", "option3", 1, "form-check-input"], ["for", "userGender3", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "userGender4", "value", "option4", 1, "form-check-input"], ["for", "userGender4", 1, "form-check-label"], ["for", "userAge"], ["id", "userAge", 1, "form-control"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["for", "userCity"], ["type", "text", "id", "userCity", "required", "", 1, "form-control"], [1, "col-md-3", "mb-3"], ["for", "userState"], ["id", "userState", "required", "", 1, "custom-select"], ["selected", "", "disabled", "", "value", ""], ["for", "userZipcode"], ["type", "text", "id", "userZipcode", "required", "", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "userCheck", "required", "", 1, "form-check-input"], ["for", "userCheck", 1, "form-check-label"], ["for", "userText"], ["id", "userText", "rows", "3", "placeholder", "E.g. I like skiing and skating in my leisure time./I have a dog named Lambda.", 1, "form-control"], ["type", "button", "type", "submit", 1, "btn", "btn-primary", "btn-lg"], [1, "row"], [1, "text-center"], [1, "col-md-12"], [1, "media"], [1, "small", 3, "src", "alt"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-chat-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function ProfileComponent_Template_app_chat_list_update_1_listener($event) { return ctx.countChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_3_listener() { return ctx.authService.SignOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_div_8_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Upload my photo here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "My Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " My gender is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Secret");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "I belong to this range of age.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "18-20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "21-25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "26-30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "31-35");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "36-40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "41-50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "51-60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "60+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "I live in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Click to protect my personal information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Things I want to share... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Renew my profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
    } }, directives: [_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_3__["ChatListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".split[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 50%;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    overflow-x: hidden;\n    padding-top: 20px;\n  }\n\n  \n\n  .left[_ngcontent-%COMP%] {\n    left: 0;\n    background-color: #E0E0E0;\n    width: 30%;\n  }\n\n  \n\n  .right[_ngcontent-%COMP%] {\n    right: 0;\n    \n    width: 66%;\n  }\n\n  \n\n  .centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    left: 20%;\n    right: 20%;\n    \n    \n  }\n\n  .msgs[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    left: 5%;\n    right: 5%;\n    \n    \n  }\n\n  \n\n  .centered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    border-radius: 50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQSwwQkFBMEI7O0VBQzFCO0lBQ0UsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUEsMkJBQTJCOztFQUMzQjtJQUNFLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVBLGlFQUFpRTs7RUFDakU7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtFQUN4Qjs7RUFFRTtJQUNBLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsc0JBQXNCO0VBQ3hCOztFQUVBLDZEQUE2RDs7RUFDN0Q7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxpdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC8qIENvbnRyb2wgdGhlIGxlZnQgc2lkZSAqL1xuICAubGVmdCB7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cblxuICAvKiBDb250cm9sIHRoZSByaWdodCBzaWRlICovXG4gIC5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Ki9cbiAgICB3aWR0aDogNjYlO1xuICB9XG5cbiAgLyogSWYgeW91IHdhbnQgdGhlIGNvbnRlbnQgY2VudGVyZWQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5ICovXG4gIC5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICByaWdodDogMjAlO1xuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xuICB9XG5cbiAgICAubXNncyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDUlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG4gICAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbiAgfVxuXG4gIC8qIFN0eWxlIHRoZSBpbWFnZSBpbnNpZGUgdGhlIGNlbnRlcmVkIGNvbnRhaW5lciwgaWYgbmVlZGVkICovXG4gIC5jZW50ZXJlZCBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/rating/rating.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/rating/rating.component.ts ***!
  \*******************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function RatingComponent_p_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data submitted successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RatingComponent {
    constructor() {
        this.currentRate1 = 3;
        this.currentRate2 = 3;
        this.currentRate3 = 3;
        this.showSuccessMsg = false;
    }
    ngOnInit() {
    }
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["app-rating"]], decls: 69, vars: 4, consts: [[2, "width", "100%"], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "demo", 4, "ngIf"], ["id", "demo"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select your preferences:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Group name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "USF MSDS Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_17_listener() { ctx.currentRate1 = 1; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_19_listener() { ctx.currentRate1 = 2; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_21_listener() { ctx.currentRate1 = 3; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_23_listener() { ctx.currentRate1 = 4; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_25_listener() { ctx.currentRate1 = 5; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "fast.ai Cohort 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Rate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_35_listener() { ctx.currentRate2 = 1; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_37_listener() { ctx.currentRate2 = 2; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_39_listener() { ctx.currentRate2 = 3; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_41_listener() { ctx.currentRate2 = 4; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_43_listener() { ctx.currentRate2 = 5; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Python developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Rate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_53_listener() { ctx.currentRate3 = 1; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_55_listener() { ctx.currentRate3 = 2; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_57_listener() { ctx.currentRate3 = 3; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_59_listener() { ctx.currentRate3 = 4; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_61_listener() { ctx.currentRate3 = 5; return ctx.showSuccessMsg = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_65_listener() { return ctx.showSuccessMsg = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, RatingComponent_p_68_Template, 2, 0, "p", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSuccessMsg == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".star[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n      font-size: 3rem;\n      color: #d3d3d3;\n    }\n    .full[_ngcontent-%COMP%] {\n      color: red;\n    }\n    .half[_ngcontent-%COMP%] {\n      position: absolute;\n      display: inline-block;\n      \n      color: red;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSxrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsb0JBQW9CO01BQ3BCLFVBQVU7SUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgY29sb3I6ICNkM2QzZDM7XG4gICAgfVxuICAgIC5mdWxsIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICAgIC5oYWxmIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rating',
                templateUrl: './rating.component.html',
                styleUrls: ['./rating.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SignInComponent {
    constructor(
    // Inject AuthService class here so that these services will be available throughout the same template
    authService) {
        this.authService = authService;
    }
    ngOnInit() { }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 22, vars: 0, consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "formGroup"], ["type", "text", "placeholder", "Enter Email", "required", "", 1, "formControl"], ["userEmail", ""], ["type", "password", "placeholder", "Enter Password", "required", "", 1, "formControl"], ["userPassword", ""], ["type", "button", "value", "Log in", 1, "btn", "btnPrimary", 3, "click"], ["type", "button", 1, "buttonfb", 3, "click"], [1, "fab", "fa-facebook-plus-g"], [1, "redirectToLogin"], ["routerLink", "/join", 1, "redirect"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_input_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.authService.SignIn(_r4.value, _r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_14_listener() { return ctx.authService.FacebookAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Continue with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Don't have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".displayTable[_ngcontent-%COMP%]{\n  padding: 15px 30px;\n}\n\n.buttonfb[_ngcontent-%COMP%]{\n    border: none;\n    color: white;\n    padding: 15px 30px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 15px;\n    margin: 4px 4px;\n    cursor: pointer;\n    background-color: #4000FF;\n    border-radius: 15px;\n    width: 240px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5Q0FBeUM7RUFDM0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5VGFibGV7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbn1cblxuLmJ1dHRvbmZie1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDRweCA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDAwRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.css']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SignUpComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-signup"]], decls: 29, vars: 0, consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "formGroup"], ["type", "email", "placeholder", "Enter Email Address", "required", "", 1, "formControl"], ["userEmail", ""], ["type", "password", "placeholder", "Enter Password", "required", "", 1, "formControl"], ["userPwd", ""], ["type", "text", "placeholder", "Enter User name", "required", "", 1, "formControl"], ["displayName", ""], ["type", "button", "value", "Sign Up", 1, "btn", "btnPrimary", 3, "click"], [1, "or"], [1, "orInner"], ["type", "button", 1, "buttonfb", 3, "click"], [1, "fab", "fa-facebook-plus-g"], [1, "redirectToLogin"], ["type", "button", "routerLink", "/signin", 1, "login"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.authService.SignUp(_r7.value, _r8.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_21_listener() { return ctx.authService.FacebookAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Join with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".displayTable[_ngcontent-%COMP%]{\n    padding: 15px 30px;\n\n}\n\n\n.buttonfb[_ngcontent-%COMP%]{\n    border: none;\n    color: white;\n    padding: 15px 30px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 15px;\n    margin: 4px 4px;\n    cursor: pointer;\n    background-color: #4000FF;\n    border-radius: 15px;\n    width: 240px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n\n.singup[_ngcontent-%COMP%]{\n    font-size: 20px;\n    padding: 15px 0px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n\n.redirectToLogin[_ngcontent-%COMP%]{\n    padding: 15px 0px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0FBRXRCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlDQUF5QztFQUMzQzs7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlDQUF5QztFQUMzQzs7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5VGFibGV7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuXG59XG5cblxuLmJ1dHRvbmZie1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDRweCA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDAwRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuc2luZ3Vwe1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5yZWRpcmVjdFRvTG9naW57XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['/']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/routing/app-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/routing/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/preference/preference.component */ "./src/app/components/preference/preference.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");


// components





// Import canActivate guard services



// Include route guard in routes array
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'join', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], canActivate: [] },
    { path: 'signin', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], canActivate: [] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [] },
    { path: 'preference', component: _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_3__["PreferenceComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






// import { Observable, of } from 'rxjs';
// import { switchMap, first, map} from 'rxjs/operators';
class AuthService {
    constructor(afAuth, // Inject Firebase auth service
    afs, // Inject FIrestore service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.ngZone = ngZone;
        //   get the auth state, then fetch the Firestore user document or return null
        this.afAuth.authState.subscribe(user => {
            // logged in
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                // logged out
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['preference']);
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    // Sign up with email/password
    SignUp(email, password) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
            this.SetUserData(result.user);
            this.router.navigate(['preference']);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null) ? true : false;
    }
    // Sign in with Facebook
    FacebookAuth() {
        // return new auth.FacebookAuthProvider();
        const provider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider();
        return this.AuthLogin(provider);
    }
    // Auth logic to turn auth providers
    AuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider)
            .then((result) => {
            this.ngZone.run(() => {
                console.log('You have been successfully logged in!');
                this.router.navigate(['preference']);
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error);
        });
    }
    // sign in with social auth
    SetUserData(user) {
        const userData = {
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
            emailVerified: user.emailVerified
        };
        const userRef = this.afs.doc(`users/${user.uid}`);
        return userRef.set(userData, {
            merge: true
        });
    }
    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['']);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDRB2-4d-joGKpmSGWW3r2NsY1UeuMdN2Q",
        authDomain: "msds603-85328.firebaseapp.com",
        databaseURL: "https://msds603-85328.firebaseio.com",
        projectId: "msds603-85328",
        storageBucket: "msds603-85328.appspot.com",
        messagingSenderId: "516534688358",
        appId: "1:516534688358:web:a26ea92c106aa4ada9eba7",
        measurementId: "G-FS6SEZ8M5X"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/MikioTada/Desktop/MSDS/S2/2020-product-analytics-group-project-hexchat/code/angular_firebase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
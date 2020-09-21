function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'hexchat';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-dropdowns */
    "./node_modules/@syncfusion/ej2-angular-dropdowns/__ivy_ngcc__/@syncfusion/ej2-angular-dropdowns.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/routing/app-routing.module */
    "./src/app/shared/routing/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/services/firebase.service */
    "./src/app/shared/services/firebase.service.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/signin/signin.component */
    "./src/app/components/signin/signin.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/preference/preference.component */
    "./src/app/components/preference/preference.component.ts");
    /* harmony import */


    var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/rating/rating.component */
    "./src/app/components/rating/rating.component.ts");
    /* harmony import */


    var _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/chat-list/chat-list.component */
    "./src/app/components/chat-list/chat-list.component.ts");
    /* harmony import */


    var _components_chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/chat-msgs/chat-msgs.component */
    "./src/app/components/chat-msgs/chat-msgs.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_front_front_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/front/front.component */
    "./src/app/components/front/front.component.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/new-user/new-user.component */
    "./src/app/components/new-user/new-user.component.ts");
    /* harmony import */


    var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/edit-user/edit-user.component */
    "./src/app/components/edit-user/edit-user.component.ts");
    /* harmony import */


    var _components_new_user_facebook_new_user_facebook_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/new-user-facebook/new-user-facebook.component */
    "./src/app/components/new-user-facebook/new-user-facebook.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _components_showprofile_showprofile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/showprofile/showprofile.component */
    "./src/app/components/showprofile/showprofile.component.ts"); // import { SelectAutocompleteModule } from 'mat-select-autocomplete';
    // routing
    // Firebase services + environment module
    // Google Analytics
    // Auth service
    // Components that we created


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_19__["FirebaseService"]],
      imports: [[_angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__["FlexLayoutModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_30__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__["MultiSelectAllModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__["MatExpansionModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_17__["AngularFireAnalyticsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_24__["PreferenceComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__["SignInComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__["SignUpComponent"], _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__["RatingComponent"], _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_26__["ChatListComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"], _components_chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_27__["ChatMsgsComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_28__["ChatComponent"], _components_front_front_component__WEBPACK_IMPORTED_MODULE_29__["FrontComponent"], _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_33__["NewUserComponent"], _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__["EditUserComponent"], _components_new_user_facebook_new_user_facebook_component__WEBPACK_IMPORTED_MODULE_35__["NewUserFacebookComponent"], _components_showprofile_showprofile_component__WEBPACK_IMPORTED_MODULE_37__["ShowProfileComponent"]],
        imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__["FlexLayoutModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_30__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__["MultiSelectAllModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__["MatExpansionModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_17__["AngularFireAnalyticsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_24__["PreferenceComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__["SignInComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__["SignUpComponent"], _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__["RatingComponent"], _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_26__["ChatListComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"], _components_chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_27__["ChatMsgsComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_28__["ChatComponent"], _components_front_front_component__WEBPACK_IMPORTED_MODULE_29__["FrontComponent"], _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_33__["NewUserComponent"], _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__["EditUserComponent"], _components_new_user_facebook_new_user_facebook_component__WEBPACK_IMPORTED_MODULE_35__["NewUserFacebookComponent"], _components_showprofile_showprofile_component__WEBPACK_IMPORTED_MODULE_37__["ShowProfileComponent"]],
          imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__["FlexLayoutModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_30__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__["MultiSelectAllModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__["MatExpansionModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_17__["AngularFireAnalyticsModule"]],
          providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_19__["FirebaseService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-list/chat-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/chat-list/chat-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: ChatListComponent */

  /***/
  function srcAppComponentsChatListChatListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListComponent", function () {
      return ChatListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/chat.service */
    "./src/app/shared/services/chat.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChatListComponent_tbody_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_tbody_7_Template_tr_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227);

          var chat_r225 = ctx.$implicit;

          var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r226.showChat(chat_r225.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r225 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/chats/", chat_r225.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ChatId: ", chat_r225.id, "");
      }
    }

    var ChatListComponent = /*#__PURE__*/function () {
      function ChatListComponent(route, authService, router, cs) {
        _classCallCheck(this, ChatListComponent);

        this.route = route;
        this.authService = authService;
        this.router = router;
        this.cs = cs;
        this.chatList = [{
          group_name: 'USF MSDS Students',
          time: '9:30 AM',
          last_msg: 'meeting at 10',
          img_url: 'https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg'
        }, {
          group_name: 'fast.ai Cohort 4',
          time: 'yesterday',
          last_msg: 'nice to meet you all',
          img_url: 'https://cdn.aarp.net/content/dam/aarp/travel/destination-guides/2018/04/1140-travel-destination-san-francisco-main-page.imgcache.rev2e8bf9592b441099e8e7efb70e1c1e4b.web.650.370.jpg'
        }, {
          group_name: 'Python developers',
          time: '04/03/2020',
          last_msg: 'great work!',
          img_url: 'https://image.shutterstock.com/image-photo/positive-skilled-young-multiethnic-coders-260nw-1145542748.jpg'
        }]; //       id = userChats.

        this.showChat = function (id) {
          console.log(id);
          this.router.navigate(['chats/', id], {
            relativeTo: this.route
          });
        };
      }

      _createClass(ChatListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userChats$ = this.cs.getUserChats();
        }
      }]);

      return ChatListComponent;
    }();

    ChatListComponent.ɵfac = function ChatListComponent_Factory(t) {
      return new (t || ChatListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]));
    };

    ChatListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatListComponent,
      selectors: [["app-chat-list"]],
      decls: 9,
      vars: 3,
      consts: [[1, "group-list"], [1, "table", "table-hover"], [1, "chat-list-header"], [4, "ngFor", "ngForOf"], [3, "click"], ["scope", "col"], [3, "routerLink"]],
      template: function ChatListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chat Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatListComponent_tbody_7_Template, 6, 2, "tbody", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.userChats$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".group-list[_ngcontent-%COMP%]{\n  font-family: 'Baloo Paaji 2', cursive;\n}\n\n\n.chat-list-header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  border-style: solid;\n  border-width: 2px 2px 2px 2px;\n  color: #4d2c91;\n}\n\n\n.tbody[_ngcontent-%COMP%] {\n  font-family: 'Baloo Paaji 2', cursive;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n\n.avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ncm91cC1saXN0e1xuICBmb250LWZhbWlseTogJ0JhbG9vIFBhYWppIDInLCBjdXJzaXZlO1xufVxuXG5cbi5jaGF0LWxpc3QtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAycHggMnB4O1xuICBjb2xvcjogIzRkMmM5MTtcbn1cblxuLnRib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdCYWxvbyBQYWFqaSAyJywgY3Vyc2l2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIl19 */", "chat-list-header[_ngcontent-%COMP%] {\n  color: #4d2c91;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-top: 11.25px;\n  padding-right: 11.25px;\n  padding-bottom: 11.25px;\n  padding-left: 30px;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-list',
          templateUrl: './chat-list.component.html',
          styleUrls: ['./chat-list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-msgs/chat-msgs.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/chat-msgs/chat-msgs.component.ts ***!
    \*************************************************************/

  /*! exports provided: ChatMsgsComponent */

  /***/
  function srcAppComponentsChatMsgsChatMsgsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMsgsComponent", function () {
      return ChatMsgsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChatMsgsComponent = /*#__PURE__*/function () {
      function ChatMsgsComponent() {
        _classCallCheck(this, ChatMsgsComponent);
      }

      _createClass(ChatMsgsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatMsgsComponent;
    }();

    ChatMsgsComponent.ɵfac = function ChatMsgsComponent_Factory(t) {
      return new (t || ChatMsgsComponent)();
    };

    ChatMsgsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatMsgsComponent,
      selectors: [["app-chat-msgs"]],
      decls: 26,
      vars: 0,
      consts: [[1, "container"], ["src", "https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg", "alt", "Avatar", 2, "width", "100%"], [1, "time-right"], [1, "container", "darker"], ["src", "https://www.guampassportrenewal.com/sites/default/files/sage-2_o.jpg", "alt", "Avatar", 1, "right", 2, "width", "100%"], [1, "time-left"]],
      template: function ChatMsgsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 800px;\n  padding: 0 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n  width:700px;\n}\n\n.darker[_ngcontent-%COMP%] {\n  border-color: #ccc;\n  background-color: #ddd;\n}\n\n.container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%;\n}\n\n.container[_ngcontent-%COMP%]   img.right[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 20px;\n  margin-right:0;\n}\n\n.time-right[_ngcontent-%COMP%] {\n  float: right;\n  color: #aaa;\n}\n\n.time-left[_ngcontent-%COMP%] {\n  float: left;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LW1zZ3MvY2hhdC1tc2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbXNncy9jaGF0LW1zZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6NzAwcHg7XG59XG5cbi5kYXJrZXIge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY29udGFpbmVyIGltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbnRhaW5lciBpbWcucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6MDtcbn1cblxuLnRpbWUtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4udGltZS1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjOTk5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMsgsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-msgs',
          templateUrl: './chat-msgs.component.html',
          styleUrls: ['./chat-msgs.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat/chat.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/chat/chat.component.ts ***!
    \***************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppComponentsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/chat.service */
    "./src/app/shared/services/chat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["scroller"];

    function ChatComponent_section_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_section_0_div_7_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var msg_r33 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r34.showUser(msg_r33.uid);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", msg_r33.user == null ? null : msg_r33.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/user-profile/", msg_r33.uid, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r33.user == null ? null : msg_r33.user.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r33.content, " ");
      }
    }

    function ChatComponent_section_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_section_0_div_7_Template, 9, 4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_0_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.newMsg = $event;
        })("keydown.enter", function ChatComponent_section_0_Template_input_keydown_enter_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var chat_r30 = ctx.ngIf;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.submit(chat_r30.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_section_0_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var chat_r30 = ctx.ngIf;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.submit(chat_r30.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r30 = ctx.ngIf;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Group Id: ", chat_r30.id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", chat_r30.messages)("ngForTrackBy", ctx_r29.trackByCreated);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r29.newMsg);
      }
    }

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(cs, route, router, authService, afs) {
        _classCallCheck(this, ChatComponent);

        this.cs = cs;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.afs = afs;

        this.showUser = function (id) {
          console.log("user id on showUser", id);
          this.router.navigate(['user-profile/', id], {
            relativeTo: this.route
          });
        };
      } //
      //   test() {
      //     const docRef = this.afs.collection("chats").doc("2jC0rOg3gH4U4UKvb5ni")
      //   }


      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var chatId = this.route.snapshot.paramMap.get('id');
          var source = this.cs.get(chatId);
          this.chat$ = this.cs.joinUsers(source);
          this.scrollBottom();
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        }
      }, {
        key: "submit",
        value: function submit(chatId) {
          if (!this.newMsg) {
            return alert('you need to enter something');
          }

          this.cs.sendMessage(chatId, this.newMsg);
          this.newMsg = '';
          this.scrollBottom();
        }
      }, {
        key: "trackByCreated",
        value: function trackByCreated(i, msg) {
          return msg.createdAt;
        }
      }, {
        key: "scrollBottom",
        value: function scrollBottom() {
          setTimeout(function () {
            return window.scrollTo(0, document.body.scrollHeight);
          }, 500);
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      viewQuery: function ChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatContainer = _t.first);
        }
      },
      decls: 2,
      vars: 3,
      consts: [["class", "msger", 4, "ngIf"], [1, "msger"], [1, "msger-header"], [1, "chat-header-title"], [1, "msger-chat"], ["scroller", ""], ["class", "msg", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "msger-inputarea"], ["type", "text", "placeholder", "Enter your message...", 1, "msger-input", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "msger-send-btn", 3, "click"], [1, "msg"], [1, "msg-img", 3, "click"], [3, "src"], [1, "msg-bubble"], [1, "msg-info"], [1, "msg-info-name", 3, "routerLink"], [1, "msg-text"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatComponent_section_0_Template, 12, 4, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.chat$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["[_ngcontent-%COMP%]:root {\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --msger-bg: #fff;\n  --border: 2px solid #ddd;\n}\n\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-image: var(--body-bg);\n  font-family: Helvetica, sans-serif;\n}\n\n.msger[_ngcontent-%COMP%]{\n  font-family: 'Baloo Paaji 2', cursive;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 867px;\n  margin: 25px 10px;\n  height: calc(100% - 50px);\n  border: var(--border);\n  border-radius: 5px;\n  background: var(--msger-bg);\n  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);\n  height: 700px;\n}\n\n.msger-header[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: var(--border);\n  background: #eee;\n  color: #4d2c91;\n  font-size: 20px;\n}\n\n.msger-chat[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: scroll;\n  padding: 10px;\n\n}\n\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #bdbdbd;\n}\n\n.msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n}\n\n.msg[_ngcontent-%COMP%]:last-of-type {\n  margin: 0;\n}\n\n.msg-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  background: #ddd;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 50%;\n}\n\n.msg-bubble[_ngcontent-%COMP%] {\n  max-width: 700px;\n  padding: 15px;\n  border-radius: 15px;\n  background: var(--left-msg-bg);\n  background: #F8F9F9;\n  border-bottom-left-radius: 0;\n}\n\n.msg-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.msg-info-name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.msger-inputarea[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n  border-top: var(--border);\n  background: #eee;\n}\n\n.msger-inputarea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  font-size: 1em;\n}\n\n.msger-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #ddd;\n}\n\n.msger-send-btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  background: #4d2c91;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background 0.23s;\n}\n\n.msger-send-btn[_ngcontent-%COMP%]:hover {\n  background: #4A235A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDREQUE0RDtFQUM1RCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwrQ0FBK0M7RUFDL0MsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixhQUFhOztBQUVmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1ib2R5LWJnOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xuICAtLW1zZ2VyLWJnOiAjZmZmO1xuICAtLWJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJvZHktYmcpO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ubXNnZXJ7XG4gIGZvbnQtZmFtaWx5OiAnQmFsb28gUGFhamkgMicsIGN1cnNpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODY3cHg7XG4gIG1hcmdpbjogMjVweCAxMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbXNnZXItYmcpO1xuICBib3gtc2hhZG93OiAwIDE1cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiA3MDBweDtcbn1cblxuLm1zZ2VyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBjb2xvcjogIzRkMmM5MTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubXNnZXItY2hhdCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMTBweDtcblxufVxuXG4ubXNnZXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuXG4ubXNnZXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4ubXNnZXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xufVxuXG4ubXNnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubXNnOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1zZy1pbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubXNnLWJ1YmJsZSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxlZnQtbXNnLWJnKTtcbiAgYmFja2dyb3VuZDogI0Y4RjlGOTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLm1zZy1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cbi5tc2ctaW5mby1uYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbi5tc2dlci1pbnB1dGFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItdG9wOiB2YXIoLS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4ubXNnZXItaW5wdXRhcmVhICoge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5tc2dlci1pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbi5tc2dlci1zZW5kLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNGQyYzkxO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjIzcztcbn1cblxuLm1zZ2VyLXNlbmQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRBMjM1QTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }];
      }, {
        chatContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scroller']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/edit-user/edit-user.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/edit-user/edit-user.component.ts ***!
    \*************************************************************/

  /*! exports provided: EditUserComponent */

  /***/
  function srcAppComponentsEditUserEditUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () {
      return EditUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _assets_Countries_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../assets/Countries.json */
    "./src/assets/Countries.json");

    var _assets_Countries_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/Countries.json */
    "./src/assets/Countries.json", 1);
    /* harmony import */


    var _assets_Languages_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../assets/Languages.json */
    "./src/assets/Languages.json");

    var _assets_Languages_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/Languages.json */
    "./src/assets/Languages.json", 1);
    /* harmony import */


    var _assets_JobTitles_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../assets/JobTitles.json */
    "./src/assets/JobTitles.json");

    var _assets_JobTitles_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/JobTitles.json */
    "./src/assets/JobTitles.json", 1);
    /* harmony import */


    var _assets_Industries_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../assets/Industries.json */
    "./src/assets/Industries.json");

    var _assets_Industries_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/Industries.json */
    "./src/assets/Industries.json", 1);
    /* harmony import */


    var _assets_Degrees_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../assets/Degrees.json */
    "./src/assets/Degrees.json");

    var _assets_Degrees_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/Degrees.json */
    "./src/assets/Degrees.json", 1);
    /* harmony import */


    var _assets_FieldOfStudy_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../assets/FieldOfStudy.json */
    "./src/assets/FieldOfStudy.json");

    var _assets_FieldOfStudy_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/FieldOfStudy.json */
    "./src/assets/FieldOfStudy.json", 1);
    /* harmony import */


    var _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/services/firebase.service */
    "./src/app/shared/services/firebase.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function EditUserComponent_form_2_ng_container_6_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](validation_r176.message);
      }
    }

    function EditUserComponent_form_2_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_form_2_ng_container_6_mat_error_1_Template, 2, 1, "mat-error", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r176 = ctx.$implicit;

        var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r147.exampleForm.get("userAppName").hasError(validation_r176.type) && (ctx_r147.exampleForm.get("userAppName").dirty || ctx_r147.exampleForm.get("userAppName").touched));
      }
    }

    function EditUserComponent_form_2_mat_radio_button_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gen_r179 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gen_r179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gen_r179, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");
      }
    }

    function EditUserComponent_form_2_ng_container_13_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](validation_r180.message);
      }
    }

    function EditUserComponent_form_2_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_form_2_ng_container_13_mat_error_1_Template, 2, 1, "mat-error", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r180 = ctx.$implicit;

        var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r149.exampleForm.get("age").hasError(validation_r180.type) && (ctx_r149.exampleForm.get("age").dirty || ctx_r149.exampleForm.get("age").touched));
      }
    }

    function EditUserComponent_form_2_mat_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r183 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r183);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r183, " ");
      }
    }

    function EditUserComponent_form_2_mat_form_field_30_mat_chip_3_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditUserComponent_form_2_mat_form_field_30_mat_chip_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function EditUserComponent_form_2_mat_form_field_30_mat_chip_3_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var exp1_r186 = ctx.$implicit;

          var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r188.remove(exp1_r186, ctx_r188.countries);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditUserComponent_form_2_mat_form_field_30_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp1_r186 = ctx.$implicit;

        var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", ctx_r185.removable)("selectable", ctx_r185.selectable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp1_r186, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r185.removable);
      }
    }

    function EditUserComponent_form_2_mat_form_field_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", 47, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditUserComponent_form_2_mat_form_field_30_mat_chip_3_Template, 3, 4, "mat-chip", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function EditUserComponent_form_2_mat_form_field_30_Template_input_matChipInputTokenEnd_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r191);

          var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r190.add($event, ctx_r190.countries);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r153.countries);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputAddOnBlur", ctx_r153.addOnBlur)("matChipInputFor", _r184)("matChipInputSeparatorKeyCodes", ctx_r153.separatorKeysCodes)("multiple", true);
      }
    }

    function EditUserComponent_form_2_mat_option_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r192 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r192);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r192, " ");
      }
    }

    function EditUserComponent_form_2_mat_form_field_40_mat_chip_3_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditUserComponent_form_2_mat_form_field_40_mat_chip_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function EditUserComponent_form_2_mat_form_field_40_mat_chip_3_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198);

          var exp1_r195 = ctx.$implicit;

          var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r197.remove(exp1_r195, ctx_r197.languages);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditUserComponent_form_2_mat_form_field_40_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp1_r195 = ctx.$implicit;

        var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", ctx_r194.removable)("selectable", ctx_r194.selectable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp1_r195, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r194.removable);
      }
    }

    function EditUserComponent_form_2_mat_form_field_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", 47, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditUserComponent_form_2_mat_form_field_40_mat_chip_3_Template, 3, 4, "mat-chip", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function EditUserComponent_form_2_mat_form_field_40_Template_input_matChipInputTokenEnd_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200);

          var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r199.add($event, ctx_r199.languages);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r156.languages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputAddOnBlur", ctx_r156.addOnBlur)("matChipInputFor", _r193)("matChipInputSeparatorKeyCodes", ctx_r156.separatorKeysCodes)("multiple", true);
      }
    }

    function EditUserComponent_form_2_mat_option_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r201 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r201);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r201, " ");
      }
    }

    function EditUserComponent_form_2_mat_form_field_54_mat_chip_3_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditUserComponent_form_2_mat_form_field_54_mat_chip_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function EditUserComponent_form_2_mat_form_field_54_mat_chip_3_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207);

          var exp1_r204 = ctx.$implicit;

          var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r206.remove(exp1_r204, ctx_r206.interests);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditUserComponent_form_2_mat_form_field_54_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp1_r204 = ctx.$implicit;

        var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", ctx_r203.removable)("selectable", ctx_r203.selectable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp1_r204, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r203.removable);
      }
    }

    function EditUserComponent_form_2_mat_form_field_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", 47, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditUserComponent_form_2_mat_form_field_54_mat_chip_3_Template, 3, 4, "mat-chip", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function EditUserComponent_form_2_mat_form_field_54_Template_input_matChipInputTokenEnd_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r208.add($event, ctx_r208.interests);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r159.interests);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputAddOnBlur", ctx_r159.addOnBlur)("matChipInputFor", _r202)("matChipInputSeparatorKeyCodes", ctx_r159.separatorKeysCodes)("multiple", true);
      }
    }

    function EditUserComponent_form_2_mat_option_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r210 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r210, " ");
      }
    }

    function EditUserComponent_form_2_mat_option_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r211 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r211);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r211, " ");
      }
    }

    function EditUserComponent_form_2_mat_option_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r212 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r212);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r212, " ");
      }
    }

    function EditUserComponent_form_2_mat_option_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r213 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r213);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r213, " ");
      }
    }

    function EditUserComponent_form_2_mat_option_104_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r214 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r214);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r214, " ");
      }
    }

    function EditUserComponent_form_2_mat_option_116_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r215 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r215);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r215, " ");
      }
    }

    function EditUserComponent_form_2_mat_option_124_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r216 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r216);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r216, " ");
      }
    }

    function EditUserComponent_form_2_mat_option_132_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r217 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r217);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r217, " ");
      }
    }

    function EditUserComponent_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditUserComponent_form_2_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r218.onSubmit(ctx_r218.exampleForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditUserComponent_form_2_ng_container_6_Template, 2, 1, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-group", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditUserComponent_form_2_mat_radio_button_9_Template, 2, 2, "mat-radio-button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditUserComponent_form_2_ng_container_13_Template, 2, 1, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditUserComponent_form_2_Template_input_change_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r220.onFileSelected($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Upload new image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-autocomplete", null, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditUserComponent_form_2_mat_option_26_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserComponent_form_2_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r221.addCountry();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EditUserComponent_form_2_mat_form_field_30_Template, 6, 5, "mat-form-field", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-autocomplete", null, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EditUserComponent_form_2_mat_option_36_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserComponent_form_2_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r222.addLanguage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, EditUserComponent_form_2_mat_form_field_40_Template, 6, 5, "mat-form-field", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Interests");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-autocomplete", null, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EditUserComponent_form_2_mat_option_50_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserComponent_form_2_Template_button_click_52_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r223.addInterest();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EditUserComponent_form_2_mat_form_field_54_Template, 6, 5, "mat-form-field", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Career networking");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-autocomplete", null, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, EditUserComponent_form_2_mat_option_65_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-autocomplete", null, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, EditUserComponent_form_2_mat_option_73_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Education details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Latest education detail:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-autocomplete", null, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, EditUserComponent_form_2_mat_option_88_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-autocomplete", null, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, EditUserComponent_form_2_mat_option_96_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-autocomplete", null, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, EditUserComponent_form_2_mat_option_104_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Any other education detail:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-autocomplete", null, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, EditUserComponent_form_2_mat_option_116_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-autocomplete", null, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, EditUserComponent_form_2_mat_option_124_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-autocomplete", null, 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, EditUserComponent_form_2_mat_option_132_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](133, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Update ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

        var _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

        var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

        var _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

        var _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87);

        var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](95);

        var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103);

        var _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](115);

        var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](123);

        var _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](131);

        var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r146.exampleForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r146.validation_messages.userAppName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r146.gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r146.validation_messages.age);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r146.fb_image ? ctx_r146.fb_image : "../../assets/images/dummy_profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.country)("matAutocomplete", _r151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 42, ctx_r146.filteredOptions));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r146.countries == null ? null : ctx_r146.countries.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.language)("matAutocomplete", _r154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 44, ctx_r146.filteredOptions_lang));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r146.languages == null ? null : ctx_r146.languages.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.interest)("matAutocomplete", _r157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 46, ctx_r146.filteredOptions_interests));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r146.interests == null ? null : ctx_r146.interests.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.jobTitle)("matAutocomplete", _r160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 48, ctx_r146.filteredOptions_jobs));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.industry)("matAutocomplete", _r162);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 50, ctx_r146.filteredOptions_industries));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.schoolName1)("matAutocomplete", _r164);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 52, ctx_r146.filteredOptions_schools1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.degree1)("matAutocomplete", _r166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 54, ctx_r146.filteredOptions_degrees1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.fieldOfStudy1)("matAutocomplete", _r168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 56, ctx_r146.filteredOptions_fields1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.schoolName2)("matAutocomplete", _r170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](117, 58, ctx_r146.filteredOptions_schools2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.degree2)("matAutocomplete", _r172);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](125, 60, ctx_r146.filteredOptions_degrees2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r146.fieldOfStudy2)("matAutocomplete", _r174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](133, 62, ctx_r146.filteredOptions_fields2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r146.exampleForm.valid);
      }
    }

    var EditUserComponent = /*#__PURE__*/function () {
      function EditUserComponent(firebaseService, fb, storage, authService, router, snackBar) {
        _classCallCheck(this, EditUserComponent);

        this.firebaseService = firebaseService;
        this.fb = fb;
        this.storage = storage;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar; //variables for image

        this.title = "cloudsSorage";
        this.selectedFile = null; //-----

        this.validation_messages = {
          'name': [{
            type: 'required',
            message: 'Name is required.'
          }],
          'userAppName': [{
            type: 'required',
            message: 'userAppName is required.'
          }],
          'age': [{
            type: 'required',
            message: 'Age is required.'
          }]
        };
        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = _assets_Countries_json__WEBPACK_IMPORTED_MODULE_4__["countryList"];
        this.countries = [];
        this.language = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_lang = _assets_Languages_json__WEBPACK_IMPORTED_MODULE_5__["languageList"];
        this.languages = [];
        this.interest = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_interests = ["singing", "dancing"];
        this.interests = [];
        this.jobTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_jobs = _assets_JobTitles_json__WEBPACK_IMPORTED_MODULE_6__["occupations"];
        this.industry = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_industries = _assets_Industries_json__WEBPACK_IMPORTED_MODULE_7__["industries"];
        this.schoolName1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_schools1 = ["GSB", "MIT"];
        this.degree1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_degrees1 = _assets_Degrees_json__WEBPACK_IMPORTED_MODULE_8__["degrees"];
        this.fieldOfStudy1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_fieldOfStudy1 = _assets_FieldOfStudy_json__WEBPACK_IMPORTED_MODULE_9__["fields"];
        this.schoolName2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_schools2 = ["GSB", "MIT"];
        this.degree2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_degrees2 = _assets_Degrees_json__WEBPACK_IMPORTED_MODULE_8__["degrees"];
        this.fieldOfStudy2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_fieldOfStudy2 = _assets_FieldOfStudy_json__WEBPACK_IMPORTED_MODULE_9__["fields"]; // These are environment variables for chips/tags.

        this.visible = true;
        this.selectable = false;
        this.removable = true;
        this.addOnBlur = true;
        this.isUserInput = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]]; // filteredOptions_industries: Observable<string[]>;

        this.gender = ['Male', 'Female', 'Other'];
      }

      _createClass(EditUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.filteredOptions = this.country.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options);
          }));
          this.filteredOptions_lang = this.language.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_lang);
          }));
          this.filteredOptions_interests = this.interest.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_interests);
          }));
          this.filteredOptions_jobs = this.jobTitle.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_jobs);
          }));
          this.filteredOptions_industries = this.industry.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_industries);
          }));
          this.filteredOptions_schools1 = this.schoolName1.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_schools1);
          }));
          this.filteredOptions_schools2 = this.schoolName2.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_schools2);
          }));
          this.filteredOptions_degrees1 = this.degree1.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_degrees1);
          }));
          this.filteredOptions_degrees2 = this.degree2.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_degrees2);
          }));
          this.filteredOptions_fields1 = this.fieldOfStudy1.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_fieldOfStudy1);
          }));
          this.filteredOptions_fields2 = this.fieldOfStudy2.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value, _this.options_fieldOfStudy2);
          }));
          this.authService.user$.subscribe(function (user) {
            if (user) {
              _this.userId = user.uid;
              _this.userProfile = user.profile; // this.

              _this.countries = _this.userProfile.country;
              _this.languages = _this.userProfile.languages;
              _this.interests = _this.userProfile.interests;
              _this.fb_image = _this.userProfile.profileImageUrl;

              _this.createForm();

              _this.jobTitle.setValue(_this.userProfile.jobTitle);

              _this.industry.setValue(_this.userProfile.industry);

              _this.schoolName1.setValue(_this.userProfile.school1Info.schoolName);

              _this.schoolName2.setValue(_this.userProfile.school2Info.schoolName);

              _this.degree1.setValue(_this.userProfile.school1Info.degree);

              _this.degree2.setValue(_this.userProfile.school2Info.degree);

              _this.fieldOfStudy1.setValue(_this.userProfile.school1Info.fieldOfStudy);

              _this.fieldOfStudy2.setValue(_this.userProfile.school2Info.fieldOfStudy);
            }
          });
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.exampleForm = this.fb.group({
            userAppName: [this.userProfile.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: [this.userProfile.age, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: [''],
            gender: [this.userProfile.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            language: [''],
            interest: ['']
          });
        }
      }, {
        key: "add",
        value: function add(event, thing) {
          var input = event.input;
          var value = event.value; // Add a tag

          if ((value || '').trim()) {
            thing.push({
              name: value.trim()
            });
          } // Reset the input value


          if (input) {
            input.value = '';
          }
        }
      }, {
        key: "remove",
        value: function remove(exp, thing) {
          var index = thing.indexOf(exp);

          if (index >= 0) {
            thing.splice(index, 1);
          }
        }
      }, {
        key: "addCountry",
        value: function addCountry() {
          this.countries.push(this.country.value);
          this.country.setValue("");
        }
      }, {
        key: "addLanguage",
        value: function addLanguage() {
          this.languages.push(this.language.value);
          this.language.setValue("");
        }
      }, {
        key: "addInterest",
        value: function addInterest() {
          this.interests.push(this.interest.value);
          this.interest.setValue("");
        }
      }, {
        key: "resetFields",
        value: function resetFields() {
          // this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
          this.exampleForm = this.fb.group({
            // name: new FormControl('', Validators.required),
            userAppName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "removeEmptyStrings",
        value: function removeEmptyStrings(variable) {
          var filteredArray = variable.filter(function (el) {
            return el != "";
          });
          return filteredArray;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(value) {
          var _this2 = this;

          console.log(this.country.value);

          if (this.country.value != null) {
            this.countries.push(this.country.value);
          }

          if (this.language.value != null) {
            this.languages.push(this.language.value);
          }

          if (this.interest.value != null) {
            this.interests.push(this.interest.value);
          }

          value.countries = this.removeEmptyStrings(this.countries);
          value.languages = this.removeEmptyStrings(this.languages);
          value.interests = this.removeEmptyStrings(this.interests);
          value.jobTitle = this.jobTitle.value;
          value.industry = this.industry.value;
          value.school1Info = {
            schoolName: this.schoolName1.value,
            degree: this.degree1.value,
            fieldOfStudy: this.fieldOfStudy1.value
          };
          value.school2Info = {
            schoolName: this.schoolName2.value,
            degree: this.degree2.value,
            fieldOfStudy: this.fieldOfStudy2.value
          };
          this.firebaseService.updateUser(this.userId, value, this.userProfile.profileImageUrl).then(function (res) {
            _this2.snackBar.open("Update successful !!", "Dismiss", {
              duration: 2000,
              horizontalPosition: 'right'
            }); // this.router.navigate(['preference']);
            // this.resetFields();

          });
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this3 = this;

          var n = Date.now();
          var file = event.target.files[0];
          var filePath = "ProfileImages/".concat(n);
          var fileRef = this.storage.ref(filePath);
          var task = this.storage.upload("ProfileImages/".concat(n), file);
          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this3.downloadURL = fileRef.getDownloadURL();

            _this3.downloadURL.subscribe(function (url) {
              if (url) {
                _this3.fb_image = url;
                _this3.userProfile.profileImageUrl = url;
              }

              console.log(_this3.fb_image);
            });
          })).subscribe(function (url) {
            if (url) {
              console.log(url);
            }
          });
        }
      }, {
        key: "_filter",
        value: function _filter(value, options) {
          var filterValue = value.toLowerCase();

          if (options) {
            return options.filter(function (option) {
              return option.toLowerCase().includes(filterValue);
            });
          }
        }
      }]);

      return EditUserComponent;
    }();

    EditUserComponent.ɵfac = function EditUserComponent_Factory(t) {
      return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]));
    };

    EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditUserComponent,
      selectors: [["app-edit-user"]],
      decls: 3,
      vars: 1,
      consts: [[1, ""], ["class", "create-form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 1, "create-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12", "col-md-8"], [1, "form-group"], [1, "input-style"], ["formControlName", "userAppName", "matInput", "", "placeholder", "What should we call you?", 1, "form-control"], [4, "ngFor", "ngForOf"], ["aria-labelledby", "example-radio-group-label", "formControlName", "gender", 1, "input-style"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "age", "matInput", "", "max", "100", "min", "0", "placeholder", "How old are you?", "type", "number", 1, "form-control"], [1, "form-group", "col-6", "col-md-4"], [1, "user", 3, "src"], ["autocomplete", "off", "id", "file", "name", "image", "title", "Choose a file please", "type", "file", 2, "display", "none", 3, "change"], ["userPhoto", ""], ["for", "file"], [1, "example-full-width"], ["aria-label", "Number", "matInput", "", "placeholder", "Country", "type", "text", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "primary", "mat-mini-fab", "", "type", "button", 3, "click"], ["class", "example-chip-list", 4, "ngIf"], ["aria-label", "Number", "matInput", "", "placeholder", "Language", "type", "text", 3, "formControl", "matAutocomplete"], ["auto1", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Interest", "type", "text", 3, "formControl", "matAutocomplete"], ["auto_interest", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Job Title", "type", "text", 3, "formControl", "matAutocomplete"], ["auto2", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Industry", "type", "text", 3, "formControl", "matAutocomplete"], ["auto3", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "School Name", "type", "text", 3, "formControl", "matAutocomplete"], ["auto4", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Degree", "type", "text", 3, "formControl", "matAutocomplete"], ["auto5", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Field of Study", "type", "text", 3, "formControl", "matAutocomplete"], ["auto6", "matAutocomplete"], ["auto7", "matAutocomplete"], ["auto8", "matAutocomplete"], ["auto9", "matAutocomplete"], [1, "row", "submit-button-container"], [1, "col-md-4"], ["color", "primary", "mat-raised-button", "", "type", "submit", 1, "submit-button", 3, "disabled"], [4, "ngIf"], [1, "example-radio-button", 3, "value"], [3, "value"], [1, "example-chip-list"], ["aria-label", "Background selection"], ["chipList", ""], [3, "removable", "selectable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Added countries", 3, "matChipInputAddOnBlur", "matChipInputFor", "matChipInputSeparatorKeyCodes", "multiple", "matChipInputTokenEnd"], [3, "removable", "selectable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["placeholder", "Added languages", 3, "matChipInputAddOnBlur", "matChipInputFor", "matChipInputSeparatorKeyCodes", "multiple", "matChipInputTokenEnd"], ["placeholder", "Added interests", 3, "matChipInputAddOnBlur", "matChipInputFor", "matChipInputSeparatorKeyCodes", "multiple", "matChipInputTokenEnd"]],
      template: function EditUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditUserComponent_form_2_Template, 138, 64, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exampleForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocomplete"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipRemove"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]],
      styles: [".user[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 50px;\n  margin-right: 50px;\n  margin-left: 50px;\n}\n\n.split[_ngcontent-%COMP%] {\n  height: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  overflow-x: hidden;\n  padding-top: 20px;\n}\n\n\n\n.left[_ngcontent-%COMP%] {\n  left: 2%;\n  width: 20%;\n  \n}\n\n\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n  width: 80%;\n  \n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.centered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 50%;\n}\n\n.star[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n      font-size: 3rem;\n      color: #d3d3d3;\n    }\n\n.full[_ngcontent-%COMP%] {\n      color: red;\n    }\n\n.half[_ngcontent-%COMP%] {\n      position: absolute;\n      display: inline-block;\n      \n      color: red;\n    }\n\n.example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBLDBCQUEwQjs7QUFDMUI7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLDBCQUEwQjtBQUM1Qjs7QUFFQSwyQkFBMkI7O0FBQzNCO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUEsaUVBQWlFOztBQUNqRSxjQUFjOztBQUNkLHdCQUF3Qjs7QUFDeEIsY0FBYzs7QUFDZCxlQUFlOztBQUNmLHNDQUFzQzs7QUFDdEMsd0JBQXdCOztBQUN4QixJQUFJOztBQUVKLDZEQUE2RDs7QUFDN0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO01BQ00sa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsY0FBYztJQUNoQjs7QUFDQTtNQUNFLFVBQVU7SUFDWjs7QUFDQTtNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsb0JBQW9CO01BQ3BCLFVBQVU7SUFDWjs7QUFFSjtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5zcGxpdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi8qIENvbnRyb2wgdGhlIGxlZnQgc2lkZSAqL1xuLmxlZnQge1xuICBsZWZ0OiAyJTtcbiAgd2lkdGg6IDIwJTtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMTExOyovXG59XG5cbi8qIENvbnRyb2wgdGhlIHJpZ2h0IHNpZGUgKi9cbi5yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogODAlO1xuICAvKmJhY2tncm91bmQtY29sb3I6IHJlZDsqL1xufVxuXG4vKiBJZiB5b3Ugd2FudCB0aGUgY29udGVudCBjZW50ZXJlZCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkgKi9cbi8qLmNlbnRlcmVkIHsqL1xuLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuLyogIHRvcDogNDAlOyovXG4vKiAgbGVmdDogNDAlOyovXG4vKiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbi8qICB0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbi8qfSovXG5cbi8qIFN0eWxlIHRoZSBpbWFnZSBpbnNpZGUgdGhlIGNlbnRlcmVkIGNvbnRhaW5lciwgaWYgbmVlZGVkICovXG4uY2VudGVyZWQgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zdGFyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIGNvbG9yOiAjZDNkM2QzO1xuICAgIH1cbiAgICAuZnVsbCB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICAuaGFsZiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-user',
          templateUrl: './edit-user.component.html',
          styleUrls: ['./edit-user.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/front/front.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/front/front.component.ts ***!
    \*****************************************************/

  /*! exports provided: FrontComponent */

  /***/
  function srcAppComponentsFrontFrontComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrontComponent", function () {
      return FrontComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/chat.service */
    "./src/app/shared/services/chat.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FrontComponent_div_3_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/chats/", chat_r47.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", chat_r47.id, " - ", chat_r47.messages.length, " Messages ");
      }
    }

    function FrontComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrontComponent_div_3_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.authService.SignOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrontComponent_div_3_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.cs.create();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create New Chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "My Chats");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FrontComponent_div_3_li_16_Template, 3, 3, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r45 = ctx.ngIf;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r45.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r45.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r45.uid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 4, ctx_r42.userChats$));
      }
    }

    function FrontComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrontComponent_ng_template_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.authService.FacebookAuth();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login with Facebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FrontComponent = /*#__PURE__*/function () {
      function FrontComponent(authService, cs) {
        _classCallCheck(this, FrontComponent);

        this.authService = authService;
        this.cs = cs;
      }

      _createClass(FrontComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userChats$ = this.cs.getUserChats();
        }
      }]);

      return FrontComponent;
    }();

    FrontComponent.ɵfac = function FrontComponent_Factory(t) {
      return new (t || FrontComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]));
    };

    FrontComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FrontComponent,
      selectors: [["app-front"]],
      decls: 7,
      vars: 4,
      consts: [[1, "login"], [4, "ngIf", "ngIfElse"], ["login", ""], ["width", "50px", 3, "src"], [1, "tag", "is-dark"], [1, "tag", "is-light"], [1, "button", "is-small", 3, "click"], [1, "button", "is-info", 3, "click"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "button", 3, "click"]],
      template: function FrontComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to Mega Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FrontComponent_div_3_Template, 18, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FrontComponent_ng_template_5_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.authService.user$))("ngIfElse", _r43);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnJvbnQvZnJvbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-front',
          templateUrl: './front.component.html',
          styleUrls: ['./front.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authService) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 152,
      vars: 0,
      consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Raleway"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["id", "top", 1, "bgimg-1"], ["color", "primary", 1, "baloo", 2, "font-size", "17px", "color", "white"], ["mat-button", "", "routerLink", "/home", 1, "hexchat-text"], [1, "fill-space"], ["mat-raised-button", "", "routerLink", "/signin", 1, "toolbar-button"], [1, "firstsentecne"], [2, "text-align", "center"], ["mat-raised-button", "", "color", "primary", "routerLink", "/join", "type", "submit", 1, "button-shape", "baloo"], ["id", "about", 1, "w3-container", 2, "padding", "128px 16px", "min-height", "100%"], [1, "w3-center"], [1, "w3-center", "w3-large"], [1, "w3-row-padding", "w3-center", 2, "margin-top", "64px"], [1, "w3-quarter"], [1, "fa", "fa-desktop", "w3-margin-bottom", "w3-jumbo", "w3-center"], [1, "w3-large"], [1, "fa", "fa-heart", "w3-margin-bottom", "w3-jumbo"], [1, "fa", "fa-diamond", "w3-margin-bottom", "w3-jumbo"], [1, "fa", "fa-cog", "w3-margin-bottom", "w3-jumbo"], [1, "w3-container", "w3-light-grey", 2, "padding", "128px 16px"], [1, "w3-row-padding"], [1, "w3-col", "m6"], ["id", "team", 1, "w3-container", 2, "padding", "128px 16px"], [1, "w3-row-padding", 2, "margin-top", "64px"], [1, "w3-col", "l3", "m6", "w3-margin-bottom"], [1, "w3-card"], ["src", "assets/images/akanksha.jpg", "alt", "image", 2, "width", "100%"], [1, "w3-container"], [1, "w3-opacity"], ["target", "_blank", "href", "https://www.linkedin.com/in/akanksha130/", 1, "w3-button", "w3-light-grey", "w3-block"], [1, "fa", "fa-linkedin-square"], ["src", "assets/images/annette.jpg", "alt", "image", 2, "width", "100%"], ["target", "_blank", "href", "https://www.linkedin.com/in/zijun-annette-lin/", 1, "w3-button", "w3-light-grey", "w3-block"], ["src", "assets/images/daren_ma.jpg", "alt", "image", 2, "width", "100%"], ["target", "_blank", "href", "https://www.linkedin.com/in/daren-ma/", 1, "w3-button", "w3-light-grey", "w3-block"], ["src", "assets/images/geoffrey.png", "alt", "image", 2, "width", "100%"], ["target", "_blank", "href", "https://www.linkedin.com/in/geoffreyhung/", 1, "w3-button", "w3-light-grey", "w3-block"], ["src", "assets/images/mikio_tada.jpg", "alt", "image", 2, "width", "100%"], ["target", "_blank", "href", "https://www.linkedin.com/in/mikiotada/", 1, "w3-button", "w3-light-grey", "w3-block"], ["src", "assets/images/nishat_parveen.jpg", "alt", "image", 2, "width", "100%"], ["target", "_blank", "href", "https://www.linkedin.com/in/nishat-parveen/", 1, "w3-button", "w3-light-grey", "w3-block"], ["src", "assets/images/sakshi_singla.jpg", "alt", "image", 2, "width", "100%"], ["target", "_blank", "href", "https://www.linkedin.com/in/sakshi-singla/", 1, "w3-button", "w3-light-grey", "w3-block"], [1, "w3-center", "w3-padding-64", 2, "background-color", "#9877d1", "color", "white"], ["href", "#top", 1, "w3-button", 2, "background-color", "white", "color", "#60468f"], [1, "fa", "fa-arrow-up", "w3-margin-right", 2, "color", "#60468f"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-toolbar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hexchat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Already have an account?\u2002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rediscover Friendship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Get Started ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ABOUT HEXCHAT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Product Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Smart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hexchat develops smart matching algorithms that know deeper about your preferences.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Hexchat matches you to another 5 and creates a small chat room for you to find friends who think alike. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Hexchat discovers interesting topics to spark conversations.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Hexchat is planning icebreaker bots, chat rooms with limited time and an invitation function.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Our Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "The modern world makes us closer physically yet separated. Closeness is meaningless if we are not connected. Hexchat aims to be a product to help users to create their connections, quickly and in scale!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "THE TEAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "The ones who create this miracle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Akanksha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Back End Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Annette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Designer & Product Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Daren");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Front End Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Geoffrey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lead Product Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Mikio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Front End Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Nishat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Back End Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Sakshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Front End Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "footer", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "To the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Baloo+Paaji+2&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');\n.baloo[_ngcontent-%COMP%]{\n  font-family: 'Baloo Paaji 2', cursive;\n}\n.fill-space[_ngcontent-%COMP%]{flex: 1 1 auto}\n.firstsentecne[_ngcontent-%COMP%]{\n  text-align: center;\n  vertical-align: text-bottom;\n  color: #60468f;\n  font-size: 105px;\n  font-family: 'Caveat', cursive;\n  padding-top: 1.8%;\n}\n.button-shape[_ngcontent-%COMP%]{\n  padding: 8px 10px;\n  border-radius: 10px;\n  color: white;\n  width: 170px;\n  display: inline-block;\n  font-size: 25px;\n}\n.w3-bar[_ngcontent-%COMP%]   .w3-button[_ngcontent-%COMP%] {\n  padding: 16px;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; color: #60468f;}\nbody[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {font-family: \"Raleway\", sans-serif; color: #60468f; line-height: 1.8;}\n\nbutton[_ngcontent-%COMP%] {outline: none;}\n\n.bgimg-1[_ngcontent-%COMP%] {\n  background-image: url(\"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s4-jj-06379_1.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=2048&s=3b2cb5d4933cefe9c6d4f7aea135700d\");\n  \n  background-position: center;\n  background-size: cover;\n  min-height: 100%;\n}\n.hexchat-text[_ngcontent-%COMP%]{\n  padding-right: 1rem;\n  color: antiquewhite;\n  font-size: 25px;\n}\n.toolbar-button[_ngcontent-%COMP%]{\n  \n  \n  font-size: 17px;\n  width: 70px;\n  color: #4d2c91;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRkFBa0Y7QUFDbEYsb0ZBQW9GO0FBQ3BGLDhFQUE4RTtBQUM5RTtFQUNFLHFDQUFxQztBQUN2QztBQUNBLFlBQVksY0FBYztBQUMxQjtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBLGFBQWEsWUFBWSxFQUFFLGNBQWMsQ0FBQztBQUMxQyx3QkFBd0Isa0NBQWtDLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO0FBQzdGLHFCQUFxQjtBQUNyQixRQUFRLGFBQWEsQ0FBQztBQUN0Qiw2QkFBNkI7QUFDN0I7RUFDRSw4VEFBOFQ7RUFDOVQsMklBQTJJO0VBQzNJLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbG9vK1BhYWppKzImZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQ6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMmZGlzcGxheT1zd2FwJyk7XG4uYmFsb297XG4gIGZvbnQtZmFtaWx5OiAnQmFsb28gUGFhamkgMicsIGN1cnNpdmU7XG59XG4uZmlsbC1zcGFjZXtmbGV4OiAxIDEgYXV0b31cbi5maXJzdHNlbnRlY25le1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgY29sb3I6ICM2MDQ2OGY7XG4gIGZvbnQtc2l6ZTogMTA1cHg7XG4gIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JywgY3Vyc2l2ZTtcbiAgcGFkZGluZy10b3A6IDEuOCU7XG59XG4uYnV0dG9uLXNoYXBle1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTcwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLnczLWJhciAudzMtYnV0dG9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IGNvbG9yOiAjNjA0NjhmO31cbmJvZHksaDEsaDIsaDMsaDQsaDUsaDYge2ZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjsgY29sb3I6ICM2MDQ2OGY7IGxpbmUtaGVpZ2h0OiAxLjg7fVxuLypib2R5IHsgbWFyZ2luOiAwO30qL1xuYnV0dG9uIHtvdXRsaW5lOiBub25lO31cbi8qIEZ1bGwgaGVpZ2h0IGltYWdlIGhlYWRlciAqL1xuLmJnaW1nLTEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltZy5yYXdwaXhlbC5jb20vczNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvay1zNC1qai0wNjM3OV8xLmpwZz9hdXRvPWZvcm1hdCZiZz10cmFuc3BhcmVudCZjb249MyZjcz1zcmdiJmRwcj0xJmZtPWpwZyZpeGxpYj1waHAtMy4xLjAmbWFyaz1yYXdwaXhlbC13YXRlcm1hcmsucG5nJm1hcmthbHBoYT05MCZtYXJrcGFkPTEzJm1hcmtzY2FsZT0xMCZtYXJreD0yNSZxPTc1JnVzbT0xNSZ2aWI9MyZ3PTIwNDgmcz0zYjJjYjVkNDkzM2NlZmU5YzZkNGY3YWVhMTM1NzAwZFwiKTtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2FrbS1pbWctYS1pbi50b3NzaHViLmNvbS9pbmRpYXRvZGF5L2ltYWdlcy9zdG9yeS8yMDE5MDUvZnJpZW5kc3MuanBlZz96cmYub3pLTjZGZGpURjhuZmhQcHZiTzRLZWJnSjZyZFwiKTsqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4uaGV4Y2hhdC10ZXh0e1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4udG9vbGJhci1idXR0b257XG4gIC8qcGFkZGluZy1sZWZ0OiAxcmVtOyovXG4gIC8qcGFkZGluZy1yaWdodDogMXJlbTsqL1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBjb2xvcjogIzRkMmM5MTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/new-user-facebook/new-user-facebook.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/new-user-facebook/new-user-facebook.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: NewUserFacebookComponent */

  /***/
  function srcAppComponentsNewUserFacebookNewUserFacebookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewUserFacebookComponent", function () {
      return NewUserFacebookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _assets_Countries_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../assets/Countries.json */
    "./src/assets/Countries.json");

    var _assets_Countries_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/Countries.json */
    "./src/assets/Countries.json", 1);
    /* harmony import */


    var _assets_Languages_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../assets/Languages.json */
    "./src/assets/Languages.json");

    var _assets_Languages_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/Languages.json */
    "./src/assets/Languages.json", 1);
    /* harmony import */


    var _assets_JobTitles_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../assets/JobTitles.json */
    "./src/assets/JobTitles.json");

    var _assets_JobTitles_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/JobTitles.json */
    "./src/assets/JobTitles.json", 1);
    /* harmony import */


    var _assets_Industries_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../assets/Industries.json */
    "./src/assets/Industries.json");

    var _assets_Industries_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/Industries.json */
    "./src/assets/Industries.json", 1);
    /* harmony import */


    var _assets_Degrees_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../assets/Degrees.json */
    "./src/assets/Degrees.json");

    var _assets_Degrees_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/Degrees.json */
    "./src/assets/Degrees.json", 1);
    /* harmony import */


    var _assets_FieldOfStudy_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../assets/FieldOfStudy.json */
    "./src/assets/FieldOfStudy.json");

    var _assets_FieldOfStudy_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/FieldOfStudy.json */
    "./src/assets/FieldOfStudy.json", 1);
    /* harmony import */


    var _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/services/firebase.service */
    "./src/app/shared/services/firebase.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function NewUserFacebookComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r67.fb_image ? ctx_r67.fb_image : "../../assets/images/dummy_profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r67.userProfile.name);
      }
    }

    function NewUserFacebookComponent_label_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload new image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFacebookComponent_form_8_ng_container_4_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](validation_r99);
      }
    }

    function NewUserFacebookComponent_form_8_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewUserFacebookComponent_form_8_ng_container_4_mat_error_1_Template, 2, 1, "mat-error", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r99 = ctx.$implicit;

        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r71.exampleForm.get("userAppName").hasError(validation_r99.type) && (ctx_r71.exampleForm.get("userAppName").dirty || ctx_r71.exampleForm.get("userAppName").touched));
      }
    }

    function NewUserFacebookComponent_form_8_mat_radio_button_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gen_r102 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gen_r102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gen_r102, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");
      }
    }

    function NewUserFacebookComponent_form_8_ng_container_11_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](validation_r103);
      }
    }

    function NewUserFacebookComponent_form_8_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewUserFacebookComponent_form_8_ng_container_11_mat_error_1_Template, 2, 1, "mat-error", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r103 = ctx.$implicit;

        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r73.exampleForm.get("age").hasError(validation_r103.type) && (ctx_r73.exampleForm.get("age").dirty || ctx_r73.exampleForm.get("age").touched));
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r106 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r106, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_form_field_21_mat_chip_3_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFacebookComponent_form_8_mat_form_field_21_mat_chip_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function NewUserFacebookComponent_form_8_mat_form_field_21_mat_chip_3_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var exp1_r109 = ctx.$implicit;

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r111.remove(exp1_r109, ctx_r111.countries);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewUserFacebookComponent_form_8_mat_form_field_21_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp1_r109 = ctx.$implicit;

        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", ctx_r108.removable)("selectable", ctx_r108.selectable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp1_r109, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r108.removable);
      }
    }

    function NewUserFacebookComponent_form_8_mat_form_field_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", 49, 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewUserFacebookComponent_form_8_mat_form_field_21_mat_chip_3_Template, 3, 4, "mat-chip", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function NewUserFacebookComponent_form_8_mat_form_field_21_Template_input_matChipInputTokenEnd_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r113.add($event, ctx_r113.countries);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r76.countries);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputAddOnBlur", ctx_r76.addOnBlur)("matChipInputFor", _r107)("matChipInputSeparatorKeyCodes", ctx_r76.separatorKeysCodes)("multiple", true);
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r115 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r115, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_form_field_31_mat_chip_3_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFacebookComponent_form_8_mat_form_field_31_mat_chip_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function NewUserFacebookComponent_form_8_mat_form_field_31_mat_chip_3_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121);

          var exp1_r118 = ctx.$implicit;

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r120.remove(exp1_r118, ctx_r120.languages);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewUserFacebookComponent_form_8_mat_form_field_31_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp1_r118 = ctx.$implicit;

        var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", ctx_r117.removable)("selectable", ctx_r117.selectable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp1_r118, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r117.removable);
      }
    }

    function NewUserFacebookComponent_form_8_mat_form_field_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", 49, 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewUserFacebookComponent_form_8_mat_form_field_31_mat_chip_3_Template, 3, 4, "mat-chip", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function NewUserFacebookComponent_form_8_mat_form_field_31_Template_input_matChipInputTokenEnd_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123);

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r122.add($event, ctx_r122.languages);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r79.languages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputAddOnBlur", ctx_r79.addOnBlur)("matChipInputFor", _r116)("matChipInputSeparatorKeyCodes", ctx_r79.separatorKeysCodes)("multiple", true);
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r124 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r124, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_form_field_45_mat_chip_3_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFacebookComponent_form_8_mat_form_field_45_mat_chip_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function NewUserFacebookComponent_form_8_mat_form_field_45_mat_chip_3_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

          var exp1_r127 = ctx.$implicit;

          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r129.remove(exp1_r127, ctx_r129.interests);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewUserFacebookComponent_form_8_mat_form_field_45_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp1_r127 = ctx.$implicit;

        var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", ctx_r126.removable)("selectable", ctx_r126.selectable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp1_r127, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.removable);
      }
    }

    function NewUserFacebookComponent_form_8_mat_form_field_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", 49, 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewUserFacebookComponent_form_8_mat_form_field_45_mat_chip_3_Template, 3, 4, "mat-chip", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function NewUserFacebookComponent_form_8_mat_form_field_45_Template_input_matChipInputTokenEnd_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r131.add($event, ctx_r131.interests);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r82.interests);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputAddOnBlur", ctx_r82.addOnBlur)("matChipInputFor", _r125)("matChipInputSeparatorKeyCodes", ctx_r82.separatorKeysCodes)("multiple", true);
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r133 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r133, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r134 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r134, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r135 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r135, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r136 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r136, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r137 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r137, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r138 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r138, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_115_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r139 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r139, " ");
      }
    }

    function NewUserFacebookComponent_form_8_mat_option_123_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r140 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r140, " ");
      }
    }

    function NewUserFacebookComponent_form_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewUserFacebookComponent_form_8_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r141.onSubmit(ctx_r141.exampleForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewUserFacebookComponent_form_8_ng_container_4_Template, 2, 1, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewUserFacebookComponent_form_8_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewUserFacebookComponent_form_8_ng_container_11_Template, 2, 1, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-autocomplete", null, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NewUserFacebookComponent_form_8_mat_option_17_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserFacebookComponent_form_8_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r143.addCountry();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NewUserFacebookComponent_form_8_mat_form_field_21_Template, 6, 5, "mat-form-field", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-autocomplete", null, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NewUserFacebookComponent_form_8_mat_option_27_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserFacebookComponent_form_8_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r144.addLanguage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NewUserFacebookComponent_form_8_mat_form_field_31_Template, 6, 5, "mat-form-field", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Interests");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-autocomplete", null, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NewUserFacebookComponent_form_8_mat_option_41_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserFacebookComponent_form_8_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r145.addInterest();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, NewUserFacebookComponent_form_8_mat_form_field_45_Template, 6, 5, "mat-form-field", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Career networking");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-autocomplete", null, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, NewUserFacebookComponent_form_8_mat_option_56_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-autocomplete", null, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, NewUserFacebookComponent_form_8_mat_option_64_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Education details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Latest education detail:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-autocomplete", null, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, NewUserFacebookComponent_form_8_mat_option_79_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-autocomplete", null, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, NewUserFacebookComponent_form_8_mat_option_87_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-autocomplete", null, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, NewUserFacebookComponent_form_8_mat_option_95_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Any other education detail:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-autocomplete", null, 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, NewUserFacebookComponent_form_8_mat_option_107_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-autocomplete", null, 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, NewUserFacebookComponent_form_8_mat_option_115_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](116, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-autocomplete", null, 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, NewUserFacebookComponent_form_8_mat_option_123_Template, 2, 2, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](124, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);

        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86);

        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](94);

        var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](106);

        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](114);

        var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](122);

        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r70.exampleForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r70.validation_messages.userAppName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r70.gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r70.validation_messages.age);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.country)("matAutocomplete", _r74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 41, ctx_r70.filteredOptions));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r70.countries == null ? null : ctx_r70.countries.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.language)("matAutocomplete", _r77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 43, ctx_r70.filteredOptions_lang));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r70.languages == null ? null : ctx_r70.languages.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.interest)("matAutocomplete", _r80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 45, ctx_r70.filteredOptions_interests));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r70.interests == null ? null : ctx_r70.interests.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.jobTitle)("matAutocomplete", _r83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 47, ctx_r70.filteredOptions_jobs));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.industry)("matAutocomplete", _r85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 49, ctx_r70.filteredOptions_industries));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.schoolName1)("matAutocomplete", _r87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 51, ctx_r70.filteredOptions_schools1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.degree1)("matAutocomplete", _r89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 53, ctx_r70.filteredOptions_degrees1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.fieldOfStudy1)("matAutocomplete", _r91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 55, ctx_r70.filteredOptions_fields1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.schoolName2)("matAutocomplete", _r93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 57, ctx_r70.filteredOptions_schools2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.degree2)("matAutocomplete", _r95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](116, 59, ctx_r70.filteredOptions_degrees2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r70.fieldOfStudy2)("matAutocomplete", _r97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](124, 61, ctx_r70.filteredOptions_fields2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r70.exampleForm.valid);
      }
    }

    var NewUserFacebookComponent = /*#__PURE__*/function () {
      function NewUserFacebookComponent(firebaseService, fb, storage, authService, router) {
        _classCallCheck(this, NewUserFacebookComponent);

        this.firebaseService = firebaseService;
        this.fb = fb;
        this.storage = storage;
        this.authService = authService;
        this.router = router; //variables for image

        this.title = "cloudsSorage";
        this.selectedFile = null; //-----

        this.validation_messages = {
          'name': [{
            type: 'required',
            message: 'Name is required.'
          }],
          'userAppName': [{
            type: 'required',
            message: 'userAppName is required.'
          }],
          'age': [{
            type: 'required',
            message: 'Age is required.'
          }]
        };
        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = _assets_Countries_json__WEBPACK_IMPORTED_MODULE_4__["countryList"];
        this.countries = [];
        this.language = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_lang = _assets_Languages_json__WEBPACK_IMPORTED_MODULE_5__["languageList"];
        this.languages = [];
        this.interest = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_interests = ["singing", "dancing"];
        this.interests = [];
        this.jobTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_jobs = _assets_JobTitles_json__WEBPACK_IMPORTED_MODULE_6__["occupations"];
        this.industry = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_industries = _assets_Industries_json__WEBPACK_IMPORTED_MODULE_7__["industries"];
        this.schoolName1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_schools1 = ["GSB", "MIT"];
        this.degree1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_degrees1 = _assets_Degrees_json__WEBPACK_IMPORTED_MODULE_8__["degrees"];
        this.fieldOfStudy1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_fieldOfStudy1 = _assets_FieldOfStudy_json__WEBPACK_IMPORTED_MODULE_9__["fields"];
        this.schoolName2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.degree2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_degrees2 = _assets_Degrees_json__WEBPACK_IMPORTED_MODULE_8__["degrees"];
        this.fieldOfStudy2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options_fieldOfStudy2 = _assets_FieldOfStudy_json__WEBPACK_IMPORTED_MODULE_9__["fields"]; // These are environment variables for chips/tags.

        this.visible = true;
        this.selectable = false;
        this.removable = true;
        this.addOnBlur = true;
        this.isUserInput = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]]; // filteredOptions_industries: Observable<string[]>;

        this.gender = ['Male', 'Female', 'Other'];
      }

      _createClass(NewUserFacebookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.filteredOptions = this.country.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options);
          }));
          this.filteredOptions_lang = this.language.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_lang);
          }));
          this.filteredOptions_interests = this.interest.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_interests);
          }));
          this.filteredOptions_jobs = this.jobTitle.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_jobs);
          }));
          this.filteredOptions_industries = this.industry.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_industries);
          }));
          this.filteredOptions_schools1 = this.schoolName1.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_schools1);
          }));
          this.filteredOptions_schools2 = this.schoolName2.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_schools2);
          }));
          this.filteredOptions_degrees1 = this.degree1.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_degrees1);
          }));
          this.filteredOptions_degrees2 = this.degree2.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_degrees2);
          }));
          this.filteredOptions_fields1 = this.fieldOfStudy1.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_fieldOfStudy1);
          }));
          this.filteredOptions_fields2 = this.fieldOfStudy2.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this4._filter(value, _this4.options_fieldOfStudy2);
          }));
          this.authService.user$.subscribe(function (user) {
            if (user) {
              _this4.userId = user.uid;
              _this4.userProfile = user.profile;
              _this4.fb_image = _this4.userProfile.profileImageUrl;

              _this4.createForm();
            }
          });
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.exampleForm = this.fb.group({
            // name: [this.userProfile.name, Validators.required],
            userAppName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: [''],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            language: [''],
            jobTitle: [''],
            industry: [''],
            interest: ['']
          });
        }
      }, {
        key: "add",
        value: function add(event, thing) {
          var input = event.input;
          var value = event.value; // Add a tag

          if ((value || '').trim()) {
            thing.push({
              name: value.trim()
            });
          } // Reset the input value


          if (input) {
            input.value = '';
          }
        }
      }, {
        key: "remove",
        value: function remove(exp, thing) {
          var index = thing.indexOf(exp);

          if (index >= 0) {
            thing.splice(index, 1);
          }
        }
      }, {
        key: "addCountry",
        value: function addCountry() {
          this.countries.push(this.country.value);
          this.country.setValue("");
        }
      }, {
        key: "addLanguage",
        value: function addLanguage() {
          this.languages.push(this.language.value);
          this.language.setValue("");
        }
      }, {
        key: "addInterest",
        value: function addInterest() {
          this.interests.push(this.interest.value);
          this.interest.setValue("");
        }
      }, {
        key: "resetFields",
        value: function resetFields() {
          // this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
          this.exampleForm = this.fb.group({
            // name: new FormControl('', Validators.required),
            userAppName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "removeEmptyStrings",
        value: function removeEmptyStrings(variable) {
          var filteredArray = variable.filter(function (el) {
            return el != "";
          });
          return filteredArray;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(value) {
          var _this5 = this;

          this.countries.push(this.country.value);
          this.languages.push(this.language.value);
          this.interests.push(this.interest.value);
          value.countries = this.removeEmptyStrings(this.countries);
          value.languages = this.removeEmptyStrings(this.languages);
          value.interests = this.removeEmptyStrings(this.interests);
          value.jobTitle = this.jobTitle.value;
          value.industry = this.industry.value;
          value.school1Info = {
            schoolName: this.schoolName1.value,
            degree: this.degree1.value,
            fieldOfStudy: this.fieldOfStudy1.value
          };
          value.school2Info = {
            schoolName: this.schoolName2.value,
            degree: this.degree2.value,
            fieldOfStudy: this.fieldOfStudy2.value
          };
          this.firebaseService.createUserFacebook(value, this.userProfile.name, this.userProfile.profileImageUrl, this.userId).then(function (res) {
            _this5.router.navigate(['user']); // this.resetFields();

          });
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this6 = this;

          var n = Date.now();
          var file = event.target.files[0];
          var filePath = "ProfileImages/".concat(n);
          var fileRef = this.storage.ref(filePath);
          var task = this.storage.upload("ProfileImages/".concat(n), file);
          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this6.downloadURL = fileRef.getDownloadURL();

            _this6.downloadURL.subscribe(function (url) {
              if (url) {
                _this6.fb_image = url;
                _this6.userProfile.profileImageUrl = url;
              }

              console.log(_this6.fb_image);
            });
          })).subscribe(function (url) {
            if (url) {
              console.log(url);
            }
          });
        }
      }, {
        key: "_filter",
        value: function _filter(value, options) {
          var filterValue = value.toLowerCase();

          if (options) {
            return options.filter(function (option) {
              return option.toLowerCase().includes(filterValue);
            });
          }
        }
      }]);

      return NewUserFacebookComponent;
    }();

    NewUserFacebookComponent.ɵfac = function NewUserFacebookComponent_Factory(t) {
      return new (t || NewUserFacebookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]));
    };

    NewUserFacebookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewUserFacebookComponent,
      selectors: [["app-new-user-facebook"]],
      decls: 9,
      vars: 3,
      consts: [[1, "split", "left"], ["class", "centered", 4, "ngIf"], [1, "form-group", "col-12"], ["autocomplete", "off", "id", "file", "name", "image", "type", "file", "title", "Choose a file please", 2, "display", "none", 3, "change"], ["userPhoto", ""], ["for", "file", 4, "ngIf"], [1, "split", "right"], [1, "centered"], ["class", "create-form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "user", 3, "src"], ["for", "file"], ["novalidate", "", 1, "create-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-style"], ["formControlName", "userAppName", "matInput", "", "placeholder", "What should we call you?", 1, "form-control"], [4, "ngFor", "ngForOf"], ["aria-labelledby", "example-radio-group-label", "formControlName", "gender", 1, "input-style"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "age", "matInput", "", "max", "100", "min", "0", "placeholder", "How old are you?", "type", "number", 1, "form-control"], [1, "example-full-width"], ["aria-label", "Number", "matInput", "", "placeholder", "Country", "type", "text", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "primary", "mat-mini-fab", "", "type", "button", 3, "click"], ["class", "example-chip-list", 4, "ngIf"], ["aria-label", "Number", "matInput", "", "placeholder", "Language", "type", "text", 3, "formControl", "matAutocomplete"], ["auto1", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Interest", "type", "text", 3, "formControl", "matAutocomplete"], ["auto_interest", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Job Title", "type", "text", 3, "formControl", "matAutocomplete"], ["auto2", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Industry", "type", "text", 3, "formControl", "matAutocomplete"], ["auto3", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "School Name", "type", "text", 3, "formControl", "matAutocomplete"], ["auto4", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Degree", "type", "text", 3, "formControl", "matAutocomplete"], ["auto5", "matAutocomplete"], ["aria-label", "Number", "matInput", "", "placeholder", "Field of Study", "type", "text", 3, "formControl", "matAutocomplete"], ["auto6", "matAutocomplete"], ["auto7", "matAutocomplete"], ["auto8", "matAutocomplete"], ["auto9", "matAutocomplete"], [1, "row", "submit-button-container"], [1, "col-md-4"], ["color", "primary", "mat-raised-button", "", "type", "submit", 1, "submit-button", 3, "disabled"], [4, "ngIf"], [1, "example-radio-button", 3, "value"], [3, "value"], [1, "example-chip-list"], ["aria-label", "Background selection"], ["chipList", ""], [3, "removable", "selectable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Added countries", 3, "matChipInputAddOnBlur", "matChipInputFor", "matChipInputSeparatorKeyCodes", "multiple", "matChipInputTokenEnd"], [3, "removable", "selectable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["placeholder", "Added languages", 3, "matChipInputAddOnBlur", "matChipInputFor", "matChipInputSeparatorKeyCodes", "multiple", "matChipInputTokenEnd"], ["placeholder", "Added interests", 3, "matChipInputAddOnBlur", "matChipInputFor", "matChipInputSeparatorKeyCodes", "multiple", "matChipInputTokenEnd"]],
      template: function NewUserFacebookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewUserFacebookComponent_div_1_Template, 7, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewUserFacebookComponent_Template_input_change_3_listener($event) {
            return ctx.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewUserFacebookComponent_label_5_Template, 2, 0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewUserFacebookComponent_form_8_Template, 129, 63, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exampleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exampleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exampleForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipRemove"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]],
      styles: [".user[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n\n  -o-object-fit: cover;\n\n     object-fit: cover;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 50px;\n  margin-right: 50px;\n  margin-left: 50px;\n}\n\n.split[_ngcontent-%COMP%] {\n  height: 100%;\n\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  overflow-x: hidden;\n  padding-top: 20px;\n}\n\n\n\n.left[_ngcontent-%COMP%] {\n  left: 2%;\n  width: 20%;\n  \n}\n\n\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n  width: 80%;\n  \n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.centered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 50%;\n}\n\n.star[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n      font-size: 3rem;\n      color: #d3d3d3;\n    }\n\n.full[_ngcontent-%COMP%] {\n      color: red;\n    }\n\n.half[_ngcontent-%COMP%] {\n      position: absolute;\n      display: inline-block;\n      \n      color: red;\n    }\n\n.example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%]{\n    margin-top: 11px;\n    margin-right: 15px;\n    margin-bottom: 16px;\n    margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctdXNlci1mYWNlYm9vay9uZXctdXNlci1mYWNlYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCOztFQUVsQixvQkFBaUI7O0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7O0FBRUEsMkJBQTJCOztBQUMzQjtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBLGlFQUFpRTs7QUFDakUsY0FBYzs7QUFDZCx3QkFBd0I7O0FBQ3hCLGNBQWM7O0FBQ2QsZUFBZTs7QUFDZixzQ0FBc0M7O0FBQ3RDLHdCQUF3Qjs7QUFDeEIsSUFBSTs7QUFFSiw2REFBNkQ7O0FBQzdEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtNQUNNLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGNBQWM7SUFDaEI7O0FBQ0E7TUFDRSxVQUFVO0lBQ1o7O0FBQ0E7TUFDRSxrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLG9CQUFvQjtNQUNwQixVQUFVO0lBQ1o7O0FBRUo7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldy11c2VyLWZhY2Vib29rL25ldy11c2VyLWZhY2Vib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmZvcm0ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uc3BsaXQge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi8qIENvbnRyb2wgdGhlIGxlZnQgc2lkZSAqL1xuLmxlZnQge1xuICBsZWZ0OiAyJTtcbiAgd2lkdGg6IDIwJTtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMTExOyovXG59XG5cbi8qIENvbnRyb2wgdGhlIHJpZ2h0IHNpZGUgKi9cbi5yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogODAlO1xuICAvKmJhY2tncm91bmQtY29sb3I6IHJlZDsqL1xufVxuXG4vKiBJZiB5b3Ugd2FudCB0aGUgY29udGVudCBjZW50ZXJlZCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkgKi9cbi8qLmNlbnRlcmVkIHsqL1xuLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuLyogIHRvcDogNDAlOyovXG4vKiAgbGVmdDogNDAlOyovXG4vKiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbi8qICB0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbi8qfSovXG5cbi8qIFN0eWxlIHRoZSBpbWFnZSBpbnNpZGUgdGhlIGNlbnRlcmVkIGNvbnRhaW5lciwgaWYgbmVlZGVkICovXG4uY2VudGVyZWQgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zdGFyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIGNvbG9yOiAjZDNkM2QzO1xuICAgIH1cbiAgICAuZnVsbCB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICAuaGFsZiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDJ7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewUserFacebookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-user-facebook',
          templateUrl: './new-user-facebook.component.html',
          styleUrls: ['./new-user-facebook.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/new-user/new-user.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/new-user/new-user.component.ts ***!
    \***********************************************************/

  /*! exports provided: NewUserComponent */

  /***/
  function srcAppComponentsNewUserNewUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewUserComponent", function () {
      return NewUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _assets_Countries_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/Countries.json */
    "./src/assets/Countries.json");

    var _assets_Countries_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/Countries.json */
    "./src/assets/Countries.json", 1);
    /* harmony import */


    var _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/firebase.service */
    "./src/app/shared/services/firebase.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function NewUserComponent_ng_container_7_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](validation_r59);
      }
    }

    function NewUserComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewUserComponent_ng_container_7_mat_error_1_Template, 2, 1, "mat-error", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r59 = ctx.$implicit;

        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r54.exampleForm.get("name").hasError(validation_r59.type) && (ctx_r54.exampleForm.get("name").dirty || ctx_r54.exampleForm.get("name").touched));
      }
    }

    function NewUserComponent_mat_radio_button_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gen_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gen_r62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gen_r62, " ");
      }
    }

    function NewUserComponent_ng_container_14_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](validation_r63);
      }
    }

    function NewUserComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewUserComponent_ng_container_14_mat_error_1_Template, 2, 1, "mat-error", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r63 = ctx.$implicit;

        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.exampleForm.get("age").hasError(validation_r63.type) && (ctx_r56.exampleForm.get("age").dirty || ctx_r56.exampleForm.get("age").touched));
      }
    }

    function NewUserComponent_mat_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r66 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r66, " ");
      }
    } // import {Observable} from "rxjs";


    var NewUserComponent = /*#__PURE__*/function () {
      function NewUserComponent(firebaseService, fb, storage, authService, router) {
        _classCallCheck(this, NewUserComponent);

        this.firebaseService = firebaseService;
        this.fb = fb;
        this.storage = storage;
        this.authService = authService;
        this.router = router;
        this.validation_messages = {
          'name': [{
            type: 'required',
            message: 'Name is required.'
          }],
          'age': [{
            type: 'required',
            message: 'Age is required.'
          }]
        }; //variables for image

        this.title = "cloudsSorage";
        this.selectedFile = null; //-----

        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = _assets_Countries_json__WEBPACK_IMPORTED_MODULE_3__["countryList"];
        this.gender = ['Male', 'Female', 'Other'];
      }

      _createClass(NewUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.filteredOptions = this.country.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this7._filter(value);
          }));
          this.createForm();
          this.authService.user$.subscribe(function (user) {
            return _this7.userInfo = user;
          }); // this.user=getValue(this.authService.user$)

          console.log(this.userInfo);
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.exampleForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            imageurl: [''],
            country: [''],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "resetFields",
        value: function resetFields() {
          // this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
          this.exampleForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            // surname: new FormControl('', Validators.required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(value) {
          var _this8 = this;

          value.country = this.country.value;
          this.firebaseService.createUser(value, this.fb_image, this.userInfo.uid).then(function (res) {
            _this8.router.navigate(['preference']);

            _this8.resetFields();
          });
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this9 = this;

          var n = Date.now();
          var file = event.target.files[0];
          var filePath = "ProfileImages/".concat(n);
          var fileRef = this.storage.ref(filePath);
          var task = this.storage.upload("ProfileImages/".concat(n), file);
          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this9.downloadURL = fileRef.getDownloadURL();

            _this9.downloadURL.subscribe(function (url) {
              if (url) {
                _this9.fb_image = url;
              }

              console.log(_this9.fb_image);
            });
          })).subscribe(function (url) {
            if (url) {
              console.log(url);
            }
          });
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }]);

      return NewUserComponent;
    }();

    NewUserComponent.ɵfac = function NewUserComponent_Factory(t) {
      return new (t || NewUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    NewUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewUserComponent,
      selectors: [["app-new-user"]],
      decls: 26,
      vars: 10,
      consts: [[1, "form-group", "col-12"], ["autocomplete", "off", "id", "file", "name", "image", "type", "file", 3, "change"], ["userPhoto", ""], ["novalidate", "", 1, "create-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-style"], ["formControlName", "name", "matInput", "", "placeholder", "Name", 1, "form-control"], [4, "ngFor", "ngForOf"], ["aria-labelledby", "example-radio-group-label", "formControlName", "gender", 1, "input-style"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "age", "matInput", "", "max", "100", "min", "0", "placeholder", "Age", "type", "number", 1, "form-control"], [1, "example-full-width"], ["aria-label", "Number", "matInput", "", "placeholder", "Country", "type", "text", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "submit-button-container"], [1, "col-md-4"], ["color", "primary", "mat-raised-button", "", "type", "submit", 1, "submit-button", 3, "disabled"], [4, "ngIf"], [1, "example-radio-button", 3, "value"], [3, "value"]],
      template: function NewUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewUserComponent_Template_input_change_1_listener($event) {
            return ctx.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewUserComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit(ctx.exampleForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewUserComponent_ng_container_7_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-group", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewUserComponent_mat_radio_button_10_Template, 2, 2, "mat-radio-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NewUserComponent_ng_container_14_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-autocomplete", null, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewUserComponent_mat_option_20_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.exampleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validation_messages.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validation_messages.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.country)("matAutocomplete", _r57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 8, ctx.filteredOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.exampleForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXVzZXIvbmV3LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-user',
          templateUrl: './new-user.component.html',
          styleUrls: ['./new-user.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preference/preference.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/preference/preference.component.ts ***!
    \***************************************************************/

  /*! exports provided: PreferenceComponent */

  /***/
  function srcAppComponentsPreferencePreferenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferenceComponent", function () {
      return PreferenceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../chat-list/chat-list.component */
    "./src/app/components/chat-list/chat-list.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function PreferenceComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferenceComponent_div_3_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.profileBtnClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "face");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferenceComponent_div_3_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.authService.SignOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.ngIf;

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r1.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r1.profile.profileImageUrl ? user_r1.profile.profileImageUrl : "/assets/images/dummy_profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
      }
    }

    var PreferenceComponent = /*#__PURE__*/function () {
      function PreferenceComponent(route, authService, router, ngZone) {
        _classCallCheck(this, PreferenceComponent);

        this.route = route;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;

        this.profileBtnClick = function () {
          this.router.navigate(['edit-user'], {
            relativeTo: this.route
          });
        };
      }

      _createClass(PreferenceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreferenceComponent;
    }();

    PreferenceComponent.ɵfac = function PreferenceComponent_Factory(t) {
      return new (t || PreferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    PreferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferenceComponent,
      selectors: [["app-preference"]],
      decls: 11,
      vars: 3,
      consts: [[1, "split", "left"], [4, "ngIf"], ["color", "#b2fef7", "routerLink", "/preference", 1, "preference-btn"], [1, "split", "right"], [1, "centered"], ["color", "primary"], [1, "media"], ["routerLink", "/user"], [1, "align-self-start", "mr-5", "img-thumbnail", "rounded-circle", 3, "alt", "src"], [1, "spacer"], ["mat-icon-button", "", "aria-label", "menu button", 2, "color", "antiquewhite", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]],
      template: function PreferenceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreferenceComponent_div_3_Template, 22, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " My Tags ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-chat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.authService.user$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_4__["ChatListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Baloo+Paaji+2&display=swap');\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    font-family: 'Baloo Paaji 2', cursive;\n    font-size: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    outline: none;\n}\n\n.spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    color: antiquewhite;\n    font-size: x-large;\n}\n\n.preference-btn[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100%;\n    position: relative;\n    z-index: 5;\n    top: 0;\n    text-align: center;\n    vertical-align: middle;\n    \n    background-color: #EDCB64;\n    display: inline-block;\n    border: 1px solid transparent;\n    cursor: pointer;\n}\n\n.split[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 50%;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    overflow-x: hidden;\n    \n}\n\n\n\n.left[_ngcontent-%COMP%] {\n    left: 0;\n    background-color: antiquewhite;\n    width: 30%;\n}\n\n\n\n.right[_ngcontent-%COMP%] {\n    right: 0;\n    \n    width: 70%;\n}\n\n\n\n.centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 3%;\n    left: 10%;\n    right: 10%;\n    \n    \n}\n\n.msgs[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    left: 5%;\n    right: 5%;\n    \n    \n}\n\n\n\n.centered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    border-radius: 50%;\n}\n\n.img-thumbnail[_ngcontent-%COMP%] {\n    \n    width: 70px;\n    height: 70px;\n    border: 0px;\n}\n\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n    height: 82px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlL3ByZWZlcmVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRkFBa0Y7O0FBRWxGO0lBQ0kscUNBQXFDO0lBQ3JDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUEsMEJBQTBCOztBQUMxQjtJQUNJLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUVBLDJCQUEyQjs7QUFDM0I7SUFDSSxRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQSxpRUFBaUU7O0FBQ2pFO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHNCQUFzQjtBQUMxQjs7QUFFQSw2REFBNkQ7O0FBQzdEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZWZlcmVuY2UvcHJlZmVyZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rUGFhamkrMiZkaXNwbGF5PXN3YXAnKTtcblxuaHRtbCwgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyBQYWFqaSAyJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi5wcmVmZXJlbmNlLWJ0biB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgLypvdmVyZmxvdy14OiBoaWRkZW47Ki9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURDQjY0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcGxpdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXG59XG5cbi8qIENvbnRyb2wgdGhlIGxlZnQgc2lkZSAqL1xuLmxlZnQge1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi8qIENvbnRyb2wgdGhlIHJpZ2h0IHNpZGUgKi9cbi5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Ki9cbiAgICB3aWR0aDogNzAlO1xufVxuXG4vKiBJZiB5b3Ugd2FudCB0aGUgY29udGVudCBjZW50ZXJlZCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkgKi9cbi5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMyU7XG4gICAgbGVmdDogMTAlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xuICAgIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXG59XG5cbi5tc2dzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgbGVmdDogNSU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xufVxuXG4vKiBTdHlsZSB0aGUgaW1hZ2UgaW5zaWRlIHRoZSBjZW50ZXJlZCBjb250YWluZXIsIGlmIG5lZWRlZCAqL1xuLmNlbnRlcmVkIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmltZy10aHVtYm5haWwge1xuICAgIC8qbWF4LXdpZHRoOiAyMyU7Ki9cbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbi5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgICBoZWlnaHQ6IDgycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preference',
          templateUrl: './preference.component.html',
          styleUrls: ['./preference.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ProfileComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r28 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r28.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r28.photoURL ? user_r28.photoURL : "/assets/dummy-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(authService, router, ngZone) {
        _classCallCheck(this, ProfileComponent);

        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.channel = false;
      }

      _createClass(ProfileComponent, [{
        key: "countChange",
        value: function countChange(event) {
          this.channel = event;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 79,
      vars: 3,
      consts: [[1, "h2"], ["class", "row", 4, "ngIf"], [1, "form-group"], ["for", "userPhoto1"], ["id", "userPhoto1", "type", "file", 1, "form-control-file"], [1, "tab"], ["id", "exampleFormControlInput1", "placeholder", "robot@hexchat.com", "type", "email", 1, "form-control"], [1, "form-check", "form-check-inline"], ["id", "userGender1", "name", "inlineRadioOptions", "type", "radio", "value", "option1", 1, "form-check-input"], ["for", "userGender1", 1, "form-check-label"], ["id", "userGender2", "name", "inlineRadioOptions", "type", "radio", "value", "option2", 1, "form-check-input"], ["for", "userGender2", 1, "form-check-label"], ["id", "userGender3", "name", "inlineRadioOptions", "type", "radio", "value", "option3", 1, "form-check-input"], ["for", "userGender3", 1, "form-check-label"], ["id", "userGender4", "name", "inlineRadioOptions", "type", "radio", "value", "option4", 1, "form-check-input"], ["for", "userGender4", 1, "form-check-label"], ["for", "userAge"], ["id", "userAge", 1, "form-control"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["for", "userCity"], ["id", "userCity", "required", "", "type", "text", 1, "form-control"], [1, "col-md-3", "mb-3"], ["for", "userState"], ["id", "userState", "required", "", 1, "custom-select"], ["disabled", "", "selected", "", "value", ""], ["for", "userZipcode"], ["id", "userZipcode", "required", "", "type", "text", 1, "form-control"], [1, "form-check"], ["id", "userCheck", "required", "", "type", "checkbox", "value", "", 1, "form-check-input"], ["for", "userCheck", 1, "form-check-label"], ["for", "userText"], ["id", "userText", "placeholder", "E.g. I like skiing and skating in my leisure time./I have a dog named Lambda.", "rows", "3", 1, "form-control"], ["type", "button", "type", "submit", 1, "btn", "btn-primary", "btn-lg"], [1, "row"], [1, "text-center"], [1, "col-md-12"], [1, "media"], [1, "small", 3, "alt", "src"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 5, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Upload my photo here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " My gender is: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Other");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Secret");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "I belong to this range of age.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "18-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "21-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "26-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "31-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "36-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "41-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "51-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "60+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "I live in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Zip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Click to protect my personal information. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Things I want to share... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "textarea", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Renew my profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.authService.user$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".split[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 50%;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    overflow-x: hidden;\n    padding-top: 20px;\n  }\n\n  \n\n  .left[_ngcontent-%COMP%] {\n    left: 0;\n    background-color: #E0E0E0;\n    width: 30%;\n  }\n\n  \n\n  .right[_ngcontent-%COMP%] {\n    right: 0;\n    \n    width: 66%;\n  }\n\n  \n\n  .centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    left: 20%;\n    right: 20%;\n    \n    \n  }\n\n  .msgs[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    left: 5%;\n    right: 5%;\n    \n    \n  }\n\n  \n\n  .centered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    border-radius: 50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQSwwQkFBMEI7O0VBQzFCO0lBQ0UsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUEsMkJBQTJCOztFQUMzQjtJQUNFLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVBLGlFQUFpRTs7RUFDakU7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtFQUN4Qjs7RUFFRTtJQUNBLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsc0JBQXNCO0VBQ3hCOztFQUVBLDZEQUE2RDs7RUFDN0Q7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxpdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC8qIENvbnRyb2wgdGhlIGxlZnQgc2lkZSAqL1xuICAubGVmdCB7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cblxuICAvKiBDb250cm9sIHRoZSByaWdodCBzaWRlICovXG4gIC5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Ki9cbiAgICB3aWR0aDogNjYlO1xuICB9XG5cbiAgLyogSWYgeW91IHdhbnQgdGhlIGNvbnRlbnQgY2VudGVyZWQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5ICovXG4gIC5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICByaWdodDogMjAlO1xuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xuICB9XG5cbiAgICAubXNncyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDUlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG4gICAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbiAgfVxuXG4gIC8qIFN0eWxlIHRoZSBpbWFnZSBpbnNpZGUgdGhlIGNlbnRlcmVkIGNvbnRhaW5lciwgaWYgbmVlZGVkICovXG4gIC5jZW50ZXJlZCBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/rating/rating.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/rating/rating.component.ts ***!
    \*******************************************************/

  /*! exports provided: RatingComponent */

  /***/
  function srcAppComponentsRatingRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return RatingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/firebase.service */
    "./src/app/shared/services/firebase.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RatingComponent_mat_chip_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RatingComponent_mat_chip_9_Template_mat_chip_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var option_r18 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.toggleChip(option_r18, "tags1");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r18 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r13.chipControl.tags1.has(option_r18));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r18, " ");
      }
    }

    function RatingComponent_mat_chip_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RatingComponent_mat_chip_19_Template_mat_chip_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var option_r21 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.toggleChip(option_r21, "tags2");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r21 = ctx.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r15.chipControl.tags2.has(option_r21));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r21, " ");
      }
    }

    function RatingComponent_mat_chip_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RatingComponent_mat_chip_29_Template_mat_chip_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var option_r24 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r25.toggleChip(option_r24, "tags3");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r24 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r17.chipControl.tags3.has(option_r24));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r24, " ");
      }
    }

    var RatingComponent = /*#__PURE__*/function () {
      function RatingComponent(firebaseService, authService, fb) {
        var _this10 = this;

        _classCallCheck(this, RatingComponent);

        this.firebaseService = firebaseService;
        this.authService = authService;
        this.fb = fb;
        this.showSuccessMsg = false; // These are environment variables for chips/tags.

        this.visible = true;
        this.selectable = false;
        this.removable = true;
        this.addOnBlur = true;
        this.isUserInput = true; // userTags = this.firebaseService.getUserTags(this.userId);

        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.drawer1 = [];
        this.drawer2 = [];
        this.drawer3 = [];
        this.chipControl = {
          tags1: new Set(),
          tags2: new Set(),
          tags3: new Set()
        };
        this.submitted = this.alreadySub();

        this.toggleChip = function (chip, tagField) {
          var addChip = function addChip() {
            _this10.chipControl[tagField].add(chip);
          };

          var removeChip = function removeChip() {
            _this10.chipControl[tagField]["delete"](chip);
          };

          _this10.chipControl[tagField].has(chip) ? removeChip() : addChip();
        };
      }

      _createClass(RatingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this11 = this;

            var _iterator, _step, item, _iterator2, _step2, _item, _iterator3, _step3, _item2;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.authService.user$.subscribe(function (user) {
                      if (user) {
                        _this11.userId = user.uid;
                      }
                    });
                    _context.next = 3;
                    return this.firebaseService.getTest();

                  case 3:
                    this.tags = _context.sent;
                    _context.next = 6;
                    return this.firebaseService.getTest().then(function (aws) {
                      return aws.tags1;
                    });

                  case 6:
                    this.tags1 = _context.sent;
                    _context.next = 9;
                    return this.firebaseService.getTest().then(function (aws) {
                      return aws.tags2;
                    });

                  case 9:
                    this.tags2 = _context.sent;
                    _context.next = 12;
                    return this.firebaseService.getTest().then(function (aws) {
                      return aws.tags3;
                    });

                  case 12:
                    this.tags3 = _context.sent;
                    _iterator = _createForOfIteratorHelper(this.tags1);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        item = _step.value;
                        this.drawer1.push({
                          name: item.toString()
                        });
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    _iterator2 = _createForOfIteratorHelper(this.tags2);

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        _item = _step2.value;
                        this.drawer2.push({
                          name: _item.toString()
                        });
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }

                    _iterator3 = _createForOfIteratorHelper(this.tags3);

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        _item2 = _step3.value;
                        this.drawer3.push({
                          name: _item2.toString()
                        });
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "alreadySub",
        value: function alreadySub() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var pref;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise().then(function (ams) {
                      return ams.preference;
                    });

                  case 2:
                    pref = _context2.sent;
                    console.log("hi", Object.keys(pref).length);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(sth, tags) {
          // value.avatar = this.item.avatar;
          console.log('vali', _toConsumableArray(tags));
          this.firebaseService.updatePreference(this.userId, sth, _toConsumableArray(tags));
        }
      }]);

      return RatingComponent;
    }();

    RatingComponent.ɵfac = function RatingComponent_Factory(t) {
      return new (t || RatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]));
    };

    RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RatingComponent,
      selectors: [["app-rating"]],
      decls: 34,
      vars: 6,
      consts: [["aria-label", "Background selection", "selectable", "", 3, "multiple"], ["chipList", ""], [3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", "color", "primary", 1, "btn", "btn-primary", 3, "click"], ["Chiplist", ""], [3, "selected", "click"]],
      template: function RatingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Choose one field of preferences.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Background Tags ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-chip-list", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RatingComponent_mat_chip_9_Template, 2, 2, "mat-chip", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-action-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_11_listener() {
            return ctx.onSubmit(1, ctx.chipControl.tags1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Industrial Tags ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-chip-list", 0, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RatingComponent_mat_chip_19_Template, 2, 2, "mat-chip", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-action-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_21_listener() {
            return ctx.onSubmit(2, ctx.chipControl.tags2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Interest Tags ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-chip-list", 0, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RatingComponent_mat_chip_29_Template, 2, 2, "mat-chip", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-action-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_31_listener() {
            return ctx.onSubmit(3, ctx.chipControl.tags3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags3);
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelActionRow"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWLDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixRQUFRO0FBQ1IsY0FBYztBQUNkLG9CQUFvQjtBQUNwQixRQUFRO0FBQ1IsY0FBYztBQUNkLDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0IsOEJBQThCO0FBQzlCLG9CQUFvQjtBQUNwQixRQUFRO0FBRVIsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQixJQUFJIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5zdGFyIHsqL1xuLyogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbi8qICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyovXG4vKiAgICAgIGZvbnQtc2l6ZTogM3JlbTsqL1xuLyogICAgICBjb2xvcjogI2QzZDNkMzsqL1xuLyogICAgfSovXG4vKiAgICAuZnVsbCB7Ki9cbi8qICAgICAgY29sb3I6IHJlZDsqL1xuLyogICAgfSovXG4vKiAgICAuaGFsZiB7Ki9cbi8qICAgICAgcG9zaXRpb246IGFic29sdXRlOyovXG4vKiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xuLyogICAgICAhKm92ZXJmbG93OiBoaWRkZW47KiEqL1xuLyogICAgICBjb2xvcjogcmVkOyovXG4vKiAgICB9Ki9cblxuLyouZXhhbXBsZS1jaGlwLWxpc3QgeyovXG4vKiAgd2lkdGg6IDEwMCU7Ki9cbi8qfSovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-rating',
          templateUrl: './rating.component.html',
          styleUrls: ['./rating.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/showprofile/showprofile.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/showprofile/showprofile.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ShowProfileComponent */

  /***/
  function srcAppComponentsShowprofileShowprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowProfileComponent", function () {
      return ShowProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/chat.service */
    "./src/app/shared/services/chat.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function ShowProfileComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var users_r41 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", users_r41.profile.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", users_r41.profile.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", users_r41.profile.gender, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Age: ", users_r41.profile.age, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Country: ", users_r41.profile.country, "");
      }
    }

    var ShowProfileComponent = /*#__PURE__*/function () {
      function ShowProfileComponent(route, cs) {
        _classCallCheck(this, ShowProfileComponent);

        this.route = route;
        this.cs = cs;
      }

      _createClass(ShowProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var userID = this.route.snapshot.paramMap.get('id');
          console.log("userid on paramMap", userID);
          this.users$ = this.cs.userID2usermail_(userID);
        }
      }]);

      return ShowProfileComponent;
    }();

    ShowProfileComponent.ɵfac = function ShowProfileComponent_Factory(t) {
      return new (t || ShowProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]));
    };

    ShowProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowProfileComponent,
      selectors: [["app-showprofile"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "header-image", 3, "src"]],
      template: function ShowProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowProfileComponent_div_0_Template, 14, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.users$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".header-image[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  background: #ddd;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93cHJvZmlsZS9zaG93cHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvd3Byb2ZpbGUvc2hvd3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2V7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-showprofile',
          templateUrl: './showprofile.component.html',
          styleUrls: ['./showprofile.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signin/signin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signin/signin.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignInComponent, MaterialModule */

  /***/
  function srcAppComponentsSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent( // Inject AuthService class here so that these services will be available throughout the same template
      authService) {
        _classCallCheck(this, SignInComponent);

        this.authService = authService;
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 26,
      vars: 0,
      consts: [[1, "bgimg-1"], ["color", "primary"], ["mat-button", "", "routerLink", "/home", 1, "hexchat-text"], [2, "color", "#8161ba"], ["mat-raised-button", "", 1, "fb", "connect", 3, "click"], [2, "color", "#9877d1"], ["matInput", "", "placeholder", "Email", "required", ""], ["userEmail", ""], ["matInput", "", "type", "password", "placeholder", "Password", "required", "", 3, "keyup.enter"], ["userPassword", ""], ["mat-raised-button", "", "color", "primary", 2, "color", "white", 3, "click"], ["mat-button", "", "color", "primary", "routerLink", "/join"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hexchat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recommended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_9_listener() {
            return ctx.authService.FacebookAuthLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Login with Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SignInComponent_Template_input_keyup_enter_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return ctx.authService.SignIn(_r6.value, _r7.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return ctx.authService.SignIn(_r6.value, _r7.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Not a user yet?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"]],
      styles: [".hexchat-theme[_ngcontent-%COMP%]{\n  padding-right: 1rem;\n  color: antiquewhite;\n  font-family: 'Baloo Paaji 2', cursive;\n}\n.hexchat-text[_ngcontent-%COMP%]{\n  padding-right: 1rem;\n  color: antiquewhite;\n  font-size: 25px;\n}\n.bgimg-1[_ngcontent-%COMP%] {\n  background-image: url(\"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s4-jj-06379_1.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=2048&s=3b2cb5d4933cefe9c6d4f7aea135700d\");\n  background-position: center;\n  background-size: cover;\n  min-height: 100%;\n}\n.fb[_ngcontent-%COMP%] {\n    font-family: Lucida Grande, Helvetica Neue, Helvetica, Arial, sans-serif;\n    display: inline-block;\n    font-size: 14px;\n    padding: 13px 30px 15px 44px;\n    background: #3A5A97;\n    color: #fff;\n    text-decoration: none;\n    line-height: 1;\n    position: relative;\n    border-radius: 5px;\n    justify-content: center;\n}\n.connect[_ngcontent-%COMP%]:before {\n    display: inline-block;\n    position: relative;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAKzGlDQ1BJQ0MgUHJvZmlsZQAASA2tlndUU8kXx+e99EZLqFJCb9JbAOk19I5gIySBhBJjIIjYEFlcgbUgIgKKIEtVcC2ArAURxcKi2FBBF2RRUNfFgg2V3wOWuOd3fvvfb96Zmc+7c+fOnTkz53wBIPeyhMIUWAaAVEG6KMzHnb40JpaOewwgQADSQBVQWew0oVtISAD41/L+HuKNlNsms7H+1e1/D8hyuGlsAKAQZDiek8ZORfjkbGULRekAoHiIXXttunCWCxGmiZAEET40y4nzjPgDWvw8X5nziQjzQHyGAMCTWSxRIgCkccROz2AnInHIeITNBRy+AGEGws5sHouDcCbCi1NTV89yDcIG8f+Ik/gPZrHiJTFZrEQJz+8FmYks7MlPE6aw1s39/D+b1BQxcl5zRRNpyTyRbxjSKyFnVpG82l/Cgvig4AU7H9nRAvPEvpELzE7zQM5yfi6H5em/wOLkSLcFZokQ+tuHn86MWGDR6jBJfEFK0Oz9mMuBx2VKmJvmFb5gT+B7Mxc4ixcRvcAZ/KigBU5LDpfkkMXzkNhF4jBJzgkib8keU9OQmX+vy2Z9XyudF+G7YOdwPb0WmCuIlOQjTHeXxBGmzN3vufy5KT4Se1pGuGRuuihCYk9i+c3e1zl/YXqI5EyAJ/ACAchHB5bAGpgDBogG3iAknZuJ3DsAPFYL14n4ibx0uhvyUrh0poBtuphuaW5hDcDsu5v1AeDt/bn3BCngv9uqKgAIsEIGB7/bzHYAUO2EXP0d3226RwCQ3QXA2W62WJQxFw6gZzsMICLvmQaUgTrQBgbABMnQFjgCVyRjPxAMIkAMWAnYgAdSgQisBRvAFpAHCsAusBeUgUpwGNSDo+A4aANnwAVwGVwHN8FdMAiGwRh4ASbBezANQRAOokBUSBnSgHQhY8gSYkDOkBcUAIVBMVAclAgJIDG0AdoKFUBFUBlUBTVAv0CnoQvQVagfegCNQBPQG+gzjILJMA1Wg/VgM5gBu8H+cAS8Ak6E18BZcC68Ay6Fq+EjcCt8Ab4O34WH4RfwFAqgSCgFlCbKBMVAeaCCUbGoBJQItQmVjypBVaOaUR2oHtRt1DDqJeoTGoumouloE7Qj2hcdiWaj16A3oQvRZeh6dCu6G30bPYKeRH/DUDCqGGOMA4aJWYpJxKzF5GFKMLWYU5hLmLuYMcx7LBargNXH2mF9sTHYJOx6bCH2ALYF24ntx45ip3A4nDLOGOeEC8axcOm4PNx+3BHcedwt3BjuI56E18Bb4r3xsXgBPgdfgm/En8Pfwj/DTxNkCLoEB0IwgUNYR9hJqCF0EG4QxgjTRFmiPtGJGEFMIm4hlhKbiZeIQ8S3JBJJi2RPCiXxSdmkUtIx0hXSCOkTWY5sRPYgLyeLyTvIdeRO8gPyWwqFokdxpcRS0ik7KA2Ui5THlI9SVClTKaYUR2qzVLlUq9QtqVfSBGldaTfpldJZ0iXSJ6RvSL+UIcjoyXjIsGQ2yZTLnJYZkJmSpcpayAbLpsoWyjbKXpUdl8PJ6cl5yXHkcuUOy12UG6WiqNpUDyqbupVaQ71EHaNhafo0Ji2JVkA7SuujTcrLyVvLR8lnypfLn5UfVkAp6CkwFVIUdiocV7in8FlRTdFNkau4XbFZ8ZbiB6VFSq5KXKV8pRalu0qflenKXsrJyruV25QfqaBVjFRCVdaqHFS5pPJyEW2R4yL2ovxFxxc9VIVVjVTDVNerHlbtVZ1SU1fzUROq7Ve7qPZSXUHdVT1JvVj9nPqEBlXDWYOvUaxxXuM5XZ7uRk+hl9K76ZOaqpq+mmLNKs0+zWktfa1IrRytFq1H2kRthnaCdrF2l/akjoZOoM4GnSadh7oEXYYuT3efbo/uBz19vWi9bXpteuP6SvpM/Sz9Jv0hA4qBi8Eag2qDO4ZYQ4ZhsuEBw5tGsJGNEc+o3OiGMWxsa8w3PmDcvxiz2H6xYHH14gETsombSYZJk8mIqYJpgGmOaZvpKzMds1iz3WY9Zt/MbcxTzGvMBy3kLPwsciw6LN5YGlmyLcst71hRrLytNlu1W722NrbmWh+0vm9DtQm02WbTZfPV1s5WZNtsO2GnYxdnV2E3wKAxQhiFjCv2GHt3+832Z+w/Odg6pDscd/jL0cQx2bHRcXyJ/hLukpolo05aTiynKqdhZ7pznPMh52EXTReWS7XLE1dtV45rreszN0O3JLcjbq/czd1F7qfcP3g4eGz06PREefp45nv2ecl5RXqVeT321vJO9G7ynvSx8Vnv0+mL8fX33e07wFRjspkNzEk/O7+Nft3+ZP9w/zL/JwFGAaKAjkA40C9wT+BQkG6QIKgtGAQzg/cEPwrRD1kT8msoNjQktDz0aZhF2IawnnBq+KrwxvD3Ee4ROyMGIw0ixZFdUdJRy6Maoj5Ee0YXRQ8vNVu6cen1GJUYfkx7LC42KrY2dmqZ17K9y8aW2yzPW35vhf6KzBVXV6qsTFl5dpX0KtaqE3GYuOi4xrgvrGBWNWsqnhlfET/J9mDvY7/guHKKORNcJ24R91mCU0JRwniiU+KexAmeC6+E95LvwS/jv07yTapM+pAcnFyXPJMSndKSik+NSz0tkBMkC7pXq6/OXN0vNBbmCYfXOKzZu2ZS5C+qTYPSVqS1p9MQgdMrNhD/IB7JcM4oz/i4NmrtiUzZTEFm7zqjddvXPcvyzvp5PXo9e33XBs0NWzaMbHTbWLUJ2hS/qWuz9ubczWPZPtn1W4hbkrf8lmOeU5Tzbmv01o5ctdzs3NEffH5oypPKE+UNbHPcVvkj+kf+j33brbbv3/4tn5N/rcC8oKTgSyG78NpPFj+V/jSzI2FH307bnQd3YXcJdt3b7bK7vki2KKtodE/gntZienF+8bu9q/ZeLbEuqdxH3CfeN1waUNq+X2f/rv1fynhld8vdy1sqVCu2V3w4wDlw66DrweZKtcqCys+H+IfuV/lUtVbrVZccxh7OOPy0Jqqm52fGzw21KrUFtV/rBHXD9WH13Q12DQ2Nqo07m+AmcdPEkeVHbh71PNrebNJc1aLQUnAMHBMfe/5L3C/3jvsf7zrBONF8UvdkxSnqqfxWqHVd62Qbr224Paa9/7Tf6a4Ox45Tv5r+WndG80z5WfmzO88Rz+WemzmfdX6qU9j58kLihdGuVV2DF5devNMd2t13yf/Slcvely/2uPWcv+J05cxVh6unrzGutV23vd7aa9N76jeb30712fa13rC70X7T/mZH/5L+c7dcbl247Xn78h3mnet3g+7234u8d39g+cDwfc798QcpD14/zHg4PZg9hBnKfyTzqOSx6uPq3w1/bxm2HT474jnS+yT8yeAoe/TFH2l/fBnLfUp5WvJM41nDuOX4mQnviZvPlz0feyF8Mf0y70/ZPyteGbw6+ZfrX72TSyfHXotez7wpfKv8tu6d9buuqZCpx+9T309/yP+o/LH+E+NTz+foz8+m137BfSn9avi145v/t6GZ1JkZIUvEmtMCKKSFExIAeFMHACUGAOpNAIhS87p4zgOa1/IIQ3/XWfN/8bx2nh1ANAQ4kg1AaCciqZHfk0ivh/Qy2QCEuAIQ4QpgKytJRUZmS1qCleUcQKQ2RJqUzMy8RfQgzhCArwMzM9NtMzNfaxH9/hCAzvfzenzWWwbRNoeMrDw9w7sVjbPn5v+j+Q+WawDovrJFEQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAdVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj4xPC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPjI8L3RpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjl0tmoAAAEMSURBVDgRY8hu3Pj/xevP/ykFIDNAZjE+ffnxv5QYHwM1wLNXnxgYQS4jx7C/f/8xMDMzYWhlwRDBI/DyzReGWatOMRw5+5Dh6/dfDOxsLAyiQtwMK/oi4LqINvDFm88MqTXrGd5/+g7X/PPXH4YnLz7C+SAG0QbOXnUaxTBhAS4GYUEuBl4udvIMPHnpMVxjY64Lg7OlMpyPzMAMVWRZJPaHTz/gPFyGgRQQbSDcNAIMvMnGJmomAe0MDAJ8HAxbZsTD1VHsQgVpQbhhIAbFBirKCKEYiNfLyCqRvX9kWTqyFAqbYheimAbkjBqIHiKk85lAhSK1AMgsprYZBxhevf1CsZnPX39mAJkFAN8bnc6Q9Jq4AAAAAElFTkSuQmCC);\n    height: 23px;\n    background-repeat: no-repeat;\n    background-position: 0px 3px;\n    text-indent: -9999px;\n    text-align: center;\n    width: 29px;\n    line-height: 23px;\n    margin: -8px 7px -7px -30px;\n    content: \"f\";\n}\n.mat-form-field[_ngcontent-%COMP%] {\nwidth: 100%;\nmin-width: 300px;\n}\nmat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\nmat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbutton[_ngcontent-%COMP%] {\njustify-content: center;\n    outline: none;\n}\nbody[_ngcontent-%COMP%] { margin: 0; font-family: 'Baloo Paaji 2', cursive; line-height: 1.8;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw4VEFBOFQ7RUFDOVQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaXZKQUFpdko7SUFDanZKLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUVBO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUVBO0FBQ0EsdUJBQXVCO0lBQ25CLGFBQWE7QUFDakI7QUFFQSxPQUFPLFNBQVMsRUFBRSxxQ0FBcUMsRUFBRSxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhleGNoYXQtdGhlbWV7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnQmFsb28gUGFhamkgMicsIGN1cnNpdmU7XG59XG4uaGV4Y2hhdC10ZXh0e1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uYmdpbWctMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1nLnJhd3BpeGVsLmNvbS9zM2ZzLXByaXZhdGUvcmF3cGl4ZWxfaW1hZ2VzL3dlYnNpdGVfY29udGVudC9rLXM0LWpqLTA2Mzc5XzEuanBnP2F1dG89Zm9ybWF0JmJnPXRyYW5zcGFyZW50JmNvbj0zJmNzPXNyZ2ImZHByPTEmZm09anBnJml4bGliPXBocC0zLjEuMCZtYXJrPXJhd3BpeGVsLXdhdGVybWFyay5wbmcmbWFya2FscGhhPTkwJm1hcmtwYWQ9MTMmbWFya3NjYWxlPTEwJm1hcmt4PTI1JnE9NzUmdXNtPTE1JnZpYj0zJnc9MjA0OCZzPTNiMmNiNWQ0OTMzY2VmZTljNmQ0ZjdhZWExMzU3MDBkXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5mYiB7XG4gICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBHcmFuZGUsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTNweCAzMHB4IDE1cHggNDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjM0E1QTk3O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29ubmVjdDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUt6R2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFTQTJ0bG5kVVU4a1h4K2U5OUVaTHFGSkNiOUpiQU9rMTlJNWdJeVNCaEJKaklJallFRmxjZ2JVZ0lnS0tJRXRWY0MyQXJBVVJ4Y0tpMkZCQkYyUlJVTmZGZ2cyVjN3T1d1T2QzZnZ2ZmI5NlptYys3YytmT25Ua3o1M3dCSVBleWhNSVVXQWFBVkVHNktNekhuYjQwSnBhT2V3d2dRQURTUUJWUVdldzBvVnRJU0FENDEvTCtIdUtObE5zbXM3SCsxZTEvRDhoeXVHbHNBS0FRWkRpZWs4Wk9SZmprYkdVTFJla0FvSGlJWFh0dHVuQ1dDeEdtaVpBRUVUNDB5NG56alBnRFd2dzhYNW56aVFqelFIeUdBTUNUV1N4UklnQ2tjY1JPejJBbkluSEllSVROQlJ5K0FHRUd3czVzSG91RGNDYkNpMU5UVjg5eURjSUc4ZitJay9nUFpySGlKVEZackVRSnorOEZtWWtzN01sUEU2YXcxczM5L0QrYjFCUXhjbDV6UlJOcHlUeVJieGpTS3lGblZwRzgybC9DZ3ZpZzRBVTdIOW5SQXZQRXZwRUx6RTd6UU01eWZpNkg1ZW0vd09Ma1NMY0Zab2tRK3R1SG44Nk1XR0RSNmpCSmZFRkswT3o5bU11QngyVkttSnZtRmI1Z1QrQjdNeGM0aXhjUnZjQVovS2lnQlU1TERwZmtrTVh6a05oRjRqQkp6Z2tpYjhrZVU5T1FtWCt2eTJaOVh5dWRGK0c3WU9kd1BiMFdtQ3VJbE9RalRIZVh4Qkdtek4zdnVmeTVLVDRTZTFwR3VHUnV1aWhDWWs5aStjM2UxemwvWVhxSTVFeUFKL0FDQWNoSEI1YkFHcGdEQm9nRzNpQWtuWnVKM0RzQVBGWUwxNG40aWJ4MHVodnlVcmgwcG9CdHVwaHVhVzVoRGNEc3U1djFBZUR0L2JuM0JDbmd2OXVxS2dBSXNFSUdCNy9iekhZQVVPMkVYUDBkMzIyNlJ3Q1EzUVhBMlc2MldKUXhGdzZnWnpzTUlDTHZtUWFVZ1RyUUJnYkFCTW5RRmpnQ1Z5UmpQeEFNSWtBTVdBbllnQWRTZ1Fpc0JSdkFGcEFIQ3NBdXNCZVVnVXB3R05TRG8rQTRhQU5ud0FWd0dWd0hOOEZkTUFpR3dSaDRBU2JCZXpBTlFSQU9va0JVU0JuU2dIUWhZOGdTWWtET2tCY1VBSVZCTVZBY2xBZ0pJREcwQWRvS0ZVQkZVQmxVQlRWQXYwQ25vUXZRVmFnZmVnQ05RQlBRRytnempJTEpNQTFXZy9WZ001Z0J1OEgrY0FTOEFrNkUxOEJaY0M2OEF5NkZxK0VqY0N0OEFiNE8zNFdINFJmd0ZBcWdTQ2dGbENiS0JNVkFlYUNDVWJHb0JKUUl0UW1WanlwQlZhT2FVUjJvSHRSdDFERHFKZW9UR291bW91bG9FN1FqMmhjZGlXYWoxNkEzb1F2UlplaDZkQ3U2RzMwYlBZS2VSSC9EVURDcUdHT01BNGFKV1lwSnhLekY1R0ZLTUxXWVU1aExtTHVZTWN4N0xCYXJnTlhIMm1GOXNUSFlKT3g2YkNIMkFMWUYyNG50eDQ1aXAzQTRuRExPR09lRUM4YXhjT200UE54KzNCSGNlZHd0M0JqdUk1NkUxOEJiNHIzeHNYZ0JQZ2RmZ20vRW44UGZ3ai9EVHhOa0NMb0VCMEl3Z1VOWVI5aEpxQ0YwRUc0UXhnalRSRm1pUHRHSkdFRk1JbTRobGhLYmlaZUlROFMzSkJKSmkyUlBDaVh4U2Rta1V0SXgwaFhTQ09rVFdZNXNSUFlnTHllTHlUdklkZVJPOGdQeVd3cUZva2R4cGNSUzBpazdLQTJVaTVUSGxJOVNWQ2xUS2FZVVIycXpWTGxVcTlRdHFWZlNCR2xkYVRmcGxkSlowaVhTSjZSdlNMK1VJY2pveVhqSXNHUTJ5WlRMbkpZWmtKbVNwY3BheUFiTHBzb1d5amJLWHBVZGw4UEo2Y2w1eVhIa2N1VU95MTJVRzZXaXFOcFVEeXFidXBWYVE3MUVIYU5oYWZvMEppMkpWa0E3U3V1alRjckx5VnZMUjhsbnlwZkxuNVVmVmtBcDZDa3dGVklVZGlvY1Y3aW44RmxSVGRGTmthdTRYYkZaOFpiaUI2VkZTcTVLWEtWOHBSYWx1MHFmbGVuS1hzckp5cnVWMjVRZnFhQlZqRlJDVmRhcUhGUzVwUEp5RVcyUjR5TDJvdnhGeHhjOVZJVlZqVlREVk5lckhsYnRWWjFTVTFmelVST3E3VmU3cVBaU1hVSGRWVDFKdlZqOW5QcUVCbFhEV1lPdlVheHhYdU01WFo3dVJrK2hsOUs3NlpPYXFwcSttbUxOS3MwK3pXa3RmYTFJclJ5dEZxMUgya1J0aG5hQ2RyRjJsL2Fram9aT29NNEduU2FkaDdvRVhZWXVUM2VmYm8vdUJ6MTl2V2k5YlhwdGV1UDZTdnBNL1N6OUp2MGhBNHFCaThFYWcycURPNFpZUTRaaHN1RUJ3NXRHc0pHTkVjK28zT2lHTVd4c2E4dzNQbURjdnhpejJINnhZSEgxNGdFVHNvbWJTWVpKazhtSXFZSnBnR21PYVp2cEt6TWRzMWl6M1dZOVp0L01iY3hUekd2TUJ5M2tMUHdzY2l3NkxONVlHbG15TGNzdDcxaFJyTHl0Tmx1MVc3MjJOcmJtV2grMHZtOUR0UW0wMldiVFpmUFYxczVXWk50c08yR25ZeGRuVjJFM3dLQXhRaGlGakN2MkdIdDMrODMyWit3L09kZzZwRHNjZC9qTDBjUXgyYkhSY1h5Si9oTHVrcG9sbzA1YVRpeW5LcWRoWjdwem5QTWg1MkVYVFJlV1M3WExFMWR0VjQ1cnJlc3pOME8zSkxjamJxL2N6ZDFGN3FmY1AzZzRlR3owNlBSRWVmcDQ1bnYyZWNsNVJYcVZlVDMyMXZKTzlHN3ludlN4OFZudjArbUw4ZlgzM2UwN3dGUmpzcGtOekVrL083K05mdDMrWlA5dy96TC9Kd0ZHQWFLQWprQTQwQzl3VCtCUWtHNlFJS2d0R0FRemcvY0VQd3JSRDFrVDhtc29OalFrdER6MGFaaEYySWF3bm5CcStLcnd4dkQzRWU0Uk95TUdJdzBpeFpGZFVkSlJ5Nk1hb2o1RWUwWVhSUTh2TlZ1NmNlbjFHSlVZZmt4N0xDNDJLclkyZG1xWjE3Szl5OGFXMnl6UFczNXZoZjZLekJWWFY2cXNURmw1ZHBYMEt0YXFFM0dZdU9pNHhyZ3ZyR0JXTldzcW5obGZFVC9KOW1Edlk3L2d1SEtLT1JOY0oyNFI5MW1DVTBKUnduaWlVK0tleEFtZUM2K0U5NUx2d1MvanYwN3lUYXBNK3BBY25GeVhQSk1TbmRLU2lrK05TejB0a0JNa0M3cFhxNi9PWE4wdk5CYm1DWWZYT0t6WnUyWlM1QytxVFlQU1ZxUzFwOU1RZ2RNck5oRC9JQjdKY000b3ovaTRObXJ0aVV6WlRFRm03enFqZGR2WFBjdnl6dnA1UFhvOWUzM1hCczBOV3phTWJIVGJXTFVKMmhTL3FXdXo5dWJjeldQWlB0bjFXNGhia3JmOGxtT2VVNVR6Ym12MDFvNWN0ZHpzM05FZmZINW95cFBLRStVTmJIUGNWdmtqK2tmK2ozM2JyYmJ2My80dG41Ti9yY0M4b0tUZ1N5Rzc4TnBQRmorVi9qU3pJMkZIMzA3Ym5RZDNZWGNKZHQzYjdiSzd2a2kyS0t0b2RFL2dudFppZW5GKzhidTlxL1plTGJFdXFkeEgzQ2ZlTjF3YVVOcStYMmYvcnYxZnluaGxkOHZkeTFzcVZDdTJWM3c0d0RsdzY2RHJ3ZVpLdGNxQ3lzK0grSWZ1Vi9sVXRWYnJWWmNjeGg3T09QeTBKcXFtNTJmR3p3MjFLclVGdFYvckJIWEQ5V0gxM1ExMkRRMk5xbzA3bStBbWNkUEVrZVZIYmg3MVBOcmViTkpjMWFMUVVuQU1IQk1mZS81TDNDLzNqdnNmN3pyQk9ORjhVdmRreFNucXFmeFdxSFZkNjJRYnIyMjRQYWE5LzdUZjZhNE94NDVUdjVyK1duZEc4MHo1V2Ztek84OFJ6K1dlbXptZmRYNnFVOWo1OGtMaWhkR3VWVjJERjVkZXZOTWQydDEzeWYvU2xjdmVseS8ydVBXY3YrSjA1Y3hWaDZ1bnJ6R3V0VjIzdmQ3YWE5Tjc2amViMzA3MTJmYTEzckM3MFg3VC9tWkgvNUwrYzdkY2JsMjQ3WG43OGgzbW5ldDNnKzcyMzR1OGQzOWcrY0R3ZmM3OThRY3BEMTQvekhnNFBaZzloQm5LZnlUenFPU3g2dVBxM3cxL2J4bTJIVDQ3NGpuUyt5VDh5ZUFvZS9URkgybC9mQm5MZlVwNVd2Sk00MW5EdU9YNG1RbnZpWnZQbHowZmV5RjhNZjB5NzAvWlB5dGVHYnc2K1pmclg3MlRTeWZIWG90ZXo3d3BmS3Y4dHU2ZDlidXVxWkNweCs5VDMwOS95UCtvL0xIK0UrTlR6K2ZvejgrbTEzN0JmU245YXZpMTQ1di90NkdaMUprWklVdkVtdE1DS0tTRkV4SUFlRk1IQUNVR0FPcE5BSWhTODdwNHpnT2ExL0lJUTMvWFdmTi84YngybmgxQU5BUTRrZzFBYUNjaXFaSGZrMGl2aC9ReTJRQ0V1QUlRNFFwZ0t5dEpSVVptUzFxQ2xlVWNRS1EyUkpxVXpNeThSZlFnemhDQXJ3TXpNOU50TXpOZmF4SDkvaENBenZmemVueldXd2JSTm9lTXJEdzl3N3NWamJQbjV2K2orUStXYXdEb3ZySkZFUUFBQUFsd1NGbHpBQUFMRXdBQUN4TUJBSnFjR0FBQUFkVnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlsaE5VQ0JEYjNKbElEVXVOQzR3SWo0S0lDQWdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBZ0lDQWdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpUGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBEYjIxd2NtVnpjMmx2Ymo0eFBDOTBhV1ptT2tOdmJYQnlaWE56YVc5dVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwUWFHOTBiMjFsZEhKcFkwbHVkR1Z5Y0hKbGRHRjBhVzl1UGpJOEwzUnBabVk2VUdodmRHOXRaWFJ5YVdOSmJuUmxjbkJ5WlhSaGRHbHZiajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZUM0pwWlc1MFlYUnBiMjQrTVR3dmRHbG1aanBQY21sbGJuUmhkR2x2Ymo0S0lDQWdJQ0FnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2lBZ0lEd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2psMHRtb0FBQUVNU1VSQlZEZ1JZOGh1M1BqL3hldlAveWtGSUROQVpqRStmZm54djVRWUh3TTF3TE5YbnhnWVFTNGp4N0MvZi84eE1ETXpZV2hsd1JEQkkvRHl6UmVHV2F0T01SdzUrNURoNi9kZkRPeHNMQXlpUXR3TUsvb2k0THFJTnZERm04OE1xVFhyR2Q1LytnN1gvUFBYSDRZbkx6N0MrU0FHMFFiT1huVWF4VEJoQVM0R1lVRXVCbDR1ZHZJTVBIbnBNVnhqWTY0TGc3T2xNcHlQek1BTVZXUlpKUGFIVHovZ1BGeUdnUlFRYlNEY05BSU12TW5HSm1vbUFlME1EQUo4SEF4YlpzVEQxVkhzUWdWcFFiaGhJQWJGQmlyS0NLRVlpTmZMeUNxUnZYOWtXVHF5RkFxYlloZWltQWJrakJxSUhpS2s4NWxBaFNLMUFNZ3NwcllaQnhoZXZmMUNzWm5QWDM5bUFKa0ZBTjhibmM2UTlKcTRBQUFBQUVsRlRrU3VRbUNDKTtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggM3B4O1xuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjlweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBtYXJnaW46IC04cHggN3B4IC03cHggLTMwcHg7XG4gICAgY29udGVudDogXCJmXCI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG53aWR0aDogMTAwJTtcbm1pbi13aWR0aDogMzAwcHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtY2FyZC10aXRsZSwgbWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuYm9keSB7IG1hcmdpbjogMDsgZm9udC1mYW1pbHk6ICdCYWxvbyBQYWFqaSAyJywgY3Vyc2l2ZTsgbGluZS1oZWlnaHQ6IDEuODt9XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-in',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();

    var modules = [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [modules, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]],
        exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: modules,
          exports: modules
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(authService) {
        _classCallCheck(this, SignUpComponent);

        this.authService = authService;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-signup"]],
      decls: 26,
      vars: 0,
      consts: [[1, "bgimg-1"], ["color", "primary"], ["mat-button", "", "routerLink", "/home", 1, "hexchat-text"], [2, "color", "#9877d1"], ["mat-raised-button", "", 1, "fb", "connect", 3, "click"], ["matInput", "", "placeholder", "Email", "required", ""], ["userEmail", ""], ["matInput", "", "type", "password", "placeholder", "Password", "required", "", 3, "keyup.enter"], ["userPassword", ""], ["mat-raised-button", "", "color", "primary", 2, "color", "white", 3, "click"], ["mat-button", "", "color", "primary", "routerLink", "/signin"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hexchat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recommended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_9_listener() {
            return ctx.authService.FacebookAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sign Up with Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign Up with Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SignUpComponent_Template_input_keyup_enter_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return ctx.authService.SignUp(_r9.value, _r10.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return ctx.authService.SignUp(_r9.value, _r10.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Already have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"]],
      styles: [".displayTable[_ngcontent-%COMP%]{\n    padding: 15px 30px;\n\n}\n\n\n.buttonfb[_ngcontent-%COMP%]{\n    border: none;\n    color: white;\n    padding: 15px 30px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 15px;\n    margin: 4px 4px;\n    cursor: pointer;\n    background-color: #4000FF;\n    border-radius: 15px;\n    width: 240px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n\n.singup[_ngcontent-%COMP%]{\n    font-size: 20px;\n    padding: 15px 0px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n\n.redirectToLogin[_ngcontent-%COMP%]{\n    padding: 15px 0px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0FBRXRCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlDQUF5QztFQUMzQzs7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlDQUF5QztFQUMzQzs7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5VGFibGV7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuXG59XG5cblxuLmJ1dHRvbmZie1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDRweCA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDAwRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuc2luZ3Vwe1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5yZWRpcmVjdFRvTG9naW57XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gIH1cbiJdfQ== */", ".hexchat-theme[_ngcontent-%COMP%]{\n  padding-right: 1rem;\n  color: antiquewhite;\n  font-family: 'Baloo Paaji 2', cursive;\n}\n.hexchat-text[_ngcontent-%COMP%]{\n  padding-right: 1rem;\n  color: antiquewhite;\n  font-size: 25px;\n}\n.bgimg-1[_ngcontent-%COMP%] {\n  background-image: url(\"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s4-jj-06379_1.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=2048&s=3b2cb5d4933cefe9c6d4f7aea135700d\");\n  background-position: center;\n  background-size: cover;\n  min-height: 100%;\n}\n.fb[_ngcontent-%COMP%] {\n    font-family: Lucida Grande, Helvetica Neue, Helvetica, Arial, sans-serif;\n    display: inline-block;\n    font-size: 14px;\n    padding: 13px 30px 15px 44px;\n    background: #3A5A97;\n    color: #fff;\n    text-decoration: none;\n    line-height: 1;\n    position: relative;\n    border-radius: 5px;\n    justify-content: center;\n}\n.connect[_ngcontent-%COMP%]:before {\n    display: inline-block;\n    position: relative;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAKzGlDQ1BJQ0MgUHJvZmlsZQAASA2tlndUU8kXx+e99EZLqFJCb9JbAOk19I5gIySBhBJjIIjYEFlcgbUgIgKKIEtVcC2ArAURxcKi2FBBF2RRUNfFgg2V3wOWuOd3fvvfb96Zmc+7c+fOnTkz53wBIPeyhMIUWAaAVEG6KMzHnb40JpaOewwgQADSQBVQWew0oVtISAD41/L+HuKNlNsms7H+1e1/D8hyuGlsAKAQZDiek8ZORfjkbGULRekAoHiIXXttunCWCxGmiZAEET40y4nzjPgDWvw8X5nziQjzQHyGAMCTWSxRIgCkccROz2AnInHIeITNBRy+AGEGws5sHouDcCbCi1NTV89yDcIG8f+Ik/gPZrHiJTFZrEQJz+8FmYks7MlPE6aw1s39/D+b1BQxcl5zRRNpyTyRbxjSKyFnVpG82l/Cgvig4AU7H9nRAvPEvpELzE7zQM5yfi6H5em/wOLkSLcFZokQ+tuHn86MWGDR6jBJfEFK0Oz9mMuBx2VKmJvmFb5gT+B7Mxc4ixcRvcAZ/KigBU5LDpfkkMXzkNhF4jBJzgkib8keU9OQmX+vy2Z9XyudF+G7YOdwPb0WmCuIlOQjTHeXxBGmzN3vufy5KT4Se1pGuGRuuihCYk9i+c3e1zl/YXqI5EyAJ/ACAchHB5bAGpgDBogG3iAknZuJ3DsAPFYL14n4ibx0uhvyUrh0poBtuphuaW5hDcDsu5v1AeDt/bn3BCngv9uqKgAIsEIGB7/bzHYAUO2EXP0d3226RwCQ3QXA2W62WJQxFw6gZzsMICLvmQaUgTrQBgbABMnQFjgCVyRjPxAMIkAMWAnYgAdSgQisBRvAFpAHCsAusBeUgUpwGNSDo+A4aANnwAVwGVwHN8FdMAiGwRh4ASbBezANQRAOokBUSBnSgHQhY8gSYkDOkBcUAIVBMVAclAgJIDG0AdoKFUBFUBlUBTVAv0CnoQvQVagfegCNQBPQG+gzjILJMA1Wg/VgM5gBu8H+cAS8Ak6E18BZcC68Ay6Fq+EjcCt8Ab4O34WH4RfwFAqgSCgFlCbKBMVAeaCCUbGoBJQItQmVjypBVaOaUR2oHtRt1DDqJeoTGoumouloE7Qj2hcdiWaj16A3oQvRZeh6dCu6G30bPYKeRH/DUDCqGGOMA4aJWYpJxKzF5GFKMLWYU5hLmLuYMcx7LBargNXH2mF9sTHYJOx6bCH2ALYF24ntx45ip3A4nDLOGOeEC8axcOm4PNx+3BHcedwt3BjuI56E18Bb4r3xsXgBPgdfgm/En8Pfwj/DTxNkCLoEB0IwgUNYR9hJqCF0EG4QxgjTRFmiPtGJGEFMIm4hlhKbiZeIQ8S3JBJJi2RPCiXxSdmkUtIx0hXSCOkTWY5sRPYgLyeLyTvIdeRO8gPyWwqFokdxpcRS0ik7KA2Ui5THlI9SVClTKaYUR2qzVLlUq9QtqVfSBGldaTfpldJZ0iXSJ6RvSL+UIcjoyXjIsGQ2yZTLnJYZkJmSpcpayAbLpsoWyjbKXpUdl8PJ6cl5yXHkcuUOy12UG6WiqNpUDyqbupVaQ71EHaNhafo0Ji2JVkA7SuujTcrLyVvLR8lnypfLn5UfVkAp6CkwFVIUdiocV7in8FlRTdFNkau4XbFZ8ZbiB6VFSq5KXKV8pRalu0qflenKXsrJyruV25QfqaBVjFRCVdaqHFS5pPJyEW2R4yL2ovxFxxc9VIVVjVTDVNerHlbtVZ1SU1fzUROq7Ve7qPZSXUHdVT1JvVj9nPqEBlXDWYOvUaxxXuM5XZ7uRk+hl9K76ZOaqpq+mmLNKs0+zWktfa1IrRytFq1H2kRthnaCdrF2l/akjoZOoM4GnSadh7oEXYYuT3efbo/uBz19vWi9bXpteuP6SvpM/Sz9Jv0hA4qBi8Eag2qDO4ZYQ4ZhsuEBw5tGsJGNEc+o3OiGMWxsa8w3PmDcvxiz2H6xYHH14gETsombSYZJk8mIqYJpgGmOaZvpKzMds1iz3WY9Zt/MbcxTzGvMBy3kLPwsciw6LN5YGlmyLcst71hRrLytNlu1W722NrbmWh+0vm9DtQm02WbTZfPV1s5WZNtsO2GnYxdnV2E3wKAxQhiFjCv2GHt3+832Z+w/Odg6pDscd/jL0cQx2bHRcXyJ/hLukpolo05aTiynKqdhZ7pznPMh52EXTReWS7XLE1dtV45rreszN0O3JLcjbq/czd1F7qfcP3g4eGz06PREefp45nv2ecl5RXqVeT321vJO9G7ynvSx8Vnv0+mL8fX33e07wFRjspkNzEk/O7+Nft3+ZP9w/zL/JwFGAaKAjkA40C9wT+BQkG6QIKgtGAQzg/cEPwrRD1kT8msoNjQktDz0aZhF2IawnnBq+KrwxvD3Ee4ROyMGIw0ixZFdUdJRy6Maoj5Ee0YXRQ8vNVu6cen1GJUYfkx7LC42KrY2dmqZ17K9y8aW2yzPW35vhf6KzBVXV6qsTFl5dpX0KtaqE3GYuOi4xrgvrGBWNWsqnhlfET/J9mDvY7/guHKKORNcJ24R91mCU0JRwniiU+KexAmeC6+E95LvwS/jv07yTapM+pAcnFyXPJMSndKSik+NSz0tkBMkC7pXq6/OXN0vNBbmCYfXOKzZu2ZS5C+qTYPSVqS1p9MQgdMrNhD/IB7JcM4oz/i4NmrtiUzZTEFm7zqjddvXPcvyzvp5PXo9e33XBs0NWzaMbHTbWLUJ2hS/qWuz9ubczWPZPtn1W4hbkrf8lmOeU5Tzbmv01o5ctdzs3NEffH5oypPKE+UNbHPcVvkj+kf+j33brbbv3/4tn5N/rcC8oKTgSyG78NpPFj+V/jSzI2FH307bnQd3YXcJdt3b7bK7vki2KKtodE/gntZienF+8bu9q/ZeLbEuqdxH3CfeN1waUNq+X2f/rv1fynhld8vdy1sqVCu2V3w4wDlw66DrweZKtcqCys+H+IfuV/lUtVbrVZccxh7OOPy0Jqqm52fGzw21KrUFtV/rBHXD9WH13Q12DQ2Nqo07m+AmcdPEkeVHbh71PNrebNJc1aLQUnAMHBMfe/5L3C/3jvsf7zrBONF8UvdkxSnqqfxWqHVd62Qbr224Paa9/7Tf6a4Ox45Tv5r+WndG80z5WfmzO88Rz+WemzmfdX6qU9j58kLihdGuVV2DF5devNMd2t13yf/Slcvely/2uPWcv+J05cxVh6unrzGutV23vd7aa9N76jeb30712fa13rC70X7T/mZH/5L+c7dcbl247Xn78h3mnet3g+7234u8d39g+cDwfc798QcpD14/zHg4PZg9hBnKfyTzqOSx6uPq3w1/bxm2HT474jnS+yT8yeAoe/TFH2l/fBnLfUp5WvJM41nDuOX4mQnviZvPlz0feyF8Mf0y70/ZPyteGbw6+ZfrX72TSyfHXotez7wpfKv8tu6d9buuqZCpx+9T309/yP+o/LH+E+NTz+foz8+m137BfSn9avi145v/t6GZ1JkZIUvEmtMCKKSFExIAeFMHACUGAOpNAIhS87p4zgOa1/IIQ3/XWfN/8bx2nh1ANAQ4kg1AaCciqZHfk0ivh/Qy2QCEuAIQ4QpgKytJRUZmS1qCleUcQKQ2RJqUzMy8RfQgzhCArwMzM9NtMzNfaxH9/hCAzvfzenzWWwbRNoeMrDw9w7sVjbPn5v+j+Q+WawDovrJFEQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAdVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj4xPC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPjI8L3RpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjl0tmoAAAEMSURBVDgRY8hu3Pj/xevP/ykFIDNAZjE+ffnxv5QYHwM1wLNXnxgYQS4jx7C/f/8xMDMzYWhlwRDBI/DyzReGWatOMRw5+5Dh6/dfDOxsLAyiQtwMK/oi4LqINvDFm88MqTXrGd5/+g7X/PPXH4YnLz7C+SAG0QbOXnUaxTBhAS4GYUEuBl4udvIMPHnpMVxjY64Lg7OlMpyPzMAMVWRZJPaHTz/gPFyGgRQQbSDcNAIMvMnGJmomAe0MDAJ8HAxbZsTD1VHsQgVpQbhhIAbFBirKCKEYiNfLyCqRvX9kWTqyFAqbYheimAbkjBqIHiKk85lAhSK1AMgsprYZBxhevf1CsZnPX39mAJkFAN8bnc6Q9Jq4AAAAAElFTkSuQmCC);\n    height: 23px;\n    background-repeat: no-repeat;\n    background-position: 0px 3px;\n    text-indent: -9999px;\n    text-align: center;\n    width: 29px;\n    line-height: 23px;\n    margin: -8px 7px -7px -30px;\n    content: \"f\";\n}\n.mat-form-field[_ngcontent-%COMP%] {\nwidth: 100%;\nmin-width: 300px;\n}\nmat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\nmat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbutton[_ngcontent-%COMP%] {\njustify-content: center;\n    outline: none;\n}\nbody[_ngcontent-%COMP%] { margin: 0; font-family: 'Baloo Paaji 2', cursive; line-height: 1.8;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw4VEFBOFQ7RUFDOVQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaXZKQUFpdko7SUFDanZKLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUVBO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUVBO0FBQ0EsdUJBQXVCO0lBQ25CLGFBQWE7QUFDakI7QUFFQSxPQUFPLFNBQVMsRUFBRSxxQ0FBcUMsRUFBRSxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhleGNoYXQtdGhlbWV7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnQmFsb28gUGFhamkgMicsIGN1cnNpdmU7XG59XG4uaGV4Y2hhdC10ZXh0e1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uYmdpbWctMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1nLnJhd3BpeGVsLmNvbS9zM2ZzLXByaXZhdGUvcmF3cGl4ZWxfaW1hZ2VzL3dlYnNpdGVfY29udGVudC9rLXM0LWpqLTA2Mzc5XzEuanBnP2F1dG89Zm9ybWF0JmJnPXRyYW5zcGFyZW50JmNvbj0zJmNzPXNyZ2ImZHByPTEmZm09anBnJml4bGliPXBocC0zLjEuMCZtYXJrPXJhd3BpeGVsLXdhdGVybWFyay5wbmcmbWFya2FscGhhPTkwJm1hcmtwYWQ9MTMmbWFya3NjYWxlPTEwJm1hcmt4PTI1JnE9NzUmdXNtPTE1JnZpYj0zJnc9MjA0OCZzPTNiMmNiNWQ0OTMzY2VmZTljNmQ0ZjdhZWExMzU3MDBkXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5mYiB7XG4gICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBHcmFuZGUsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTNweCAzMHB4IDE1cHggNDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjM0E1QTk3O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29ubmVjdDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUt6R2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFTQTJ0bG5kVVU4a1h4K2U5OUVaTHFGSkNiOUpiQU9rMTlJNWdJeVNCaEJKaklJallFRmxjZ2JVZ0lnS0tJRXRWY0MyQXJBVVJ4Y0tpMkZCQkYyUlJVTmZGZ2cyVjN3T1d1T2QzZnZ2ZmI5NlptYys3YytmT25Ua3o1M3dCSVBleWhNSVVXQWFBVkVHNktNekhuYjQwSnBhT2V3d2dRQURTUUJWUVdldzBvVnRJU0FENDEvTCtIdUtObE5zbXM3SCsxZTEvRDhoeXVHbHNBS0FRWkRpZWs4Wk9SZmprYkdVTFJla0FvSGlJWFh0dHVuQ1dDeEdtaVpBRUVUNDB5NG56alBnRFd2dzhYNW56aVFqelFIeUdBTUNUV1N4UklnQ2tjY1JPejJBbkluSEllSVROQlJ5K0FHRUd3czVzSG91RGNDYkNpMU5UVjg5eURjSUc4ZitJay9nUFpySGlKVEZackVRSnorOEZtWWtzN01sUEU2YXcxczM5L0QrYjFCUXhjbDV6UlJOcHlUeVJieGpTS3lGblZwRzgybC9DZ3ZpZzRBVTdIOW5SQXZQRXZwRUx6RTd6UU01eWZpNkg1ZW0vd09Ma1NMY0Zab2tRK3R1SG44Nk1XR0RSNmpCSmZFRkswT3o5bU11QngyVkttSnZtRmI1Z1QrQjdNeGM0aXhjUnZjQVovS2lnQlU1TERwZmtrTVh6a05oRjRqQkp6Z2tpYjhrZVU5T1FtWCt2eTJaOVh5dWRGK0c3WU9kd1BiMFdtQ3VJbE9RalRIZVh4Qkdtek4zdnVmeTVLVDRTZTFwR3VHUnV1aWhDWWs5aStjM2UxemwvWVhxSTVFeUFKL0FDQWNoSEI1YkFHcGdEQm9nRzNpQWtuWnVKM0RzQVBGWUwxNG40aWJ4MHVodnlVcmgwcG9CdHVwaHVhVzVoRGNEc3U1djFBZUR0L2JuM0JDbmd2OXVxS2dBSXNFSUdCNy9iekhZQVVPMkVYUDBkMzIyNlJ3Q1EzUVhBMlc2MldKUXhGdzZnWnpzTUlDTHZtUWFVZ1RyUUJnYkFCTW5RRmpnQ1Z5UmpQeEFNSWtBTVdBbllnQWRTZ1Fpc0JSdkFGcEFIQ3NBdXNCZVVnVXB3R05TRG8rQTRhQU5ud0FWd0dWd0hOOEZkTUFpR3dSaDRBU2JCZXpBTlFSQU9va0JVU0JuU2dIUWhZOGdTWWtET2tCY1VBSVZCTVZBY2xBZ0pJREcwQWRvS0ZVQkZVQmxVQlRWQXYwQ25vUXZRVmFnZmVnQ05RQlBRRytnempJTEpNQTFXZy9WZ001Z0J1OEgrY0FTOEFrNkUxOEJaY0M2OEF5NkZxK0VqY0N0OEFiNE8zNFdINFJmd0ZBcWdTQ2dGbENiS0JNVkFlYUNDVWJHb0JKUUl0UW1WanlwQlZhT2FVUjJvSHRSdDFERHFKZW9UR291bW91bG9FN1FqMmhjZGlXYWoxNkEzb1F2UlplaDZkQ3U2RzMwYlBZS2VSSC9EVURDcUdHT01BNGFKV1lwSnhLekY1R0ZLTUxXWVU1aExtTHVZTWN4N0xCYXJnTlhIMm1GOXNUSFlKT3g2YkNIMkFMWUYyNG50eDQ1aXAzQTRuRExPR09lRUM4YXhjT200UE54KzNCSGNlZHd0M0JqdUk1NkUxOEJiNHIzeHNYZ0JQZ2RmZ20vRW44UGZ3ai9EVHhOa0NMb0VCMEl3Z1VOWVI5aEpxQ0YwRUc0UXhnalRSRm1pUHRHSkdFRk1JbTRobGhLYmlaZUlROFMzSkJKSmkyUlBDaVh4U2Rta1V0SXgwaFhTQ09rVFdZNXNSUFlnTHllTHlUdklkZVJPOGdQeVd3cUZva2R4cGNSUzBpazdLQTJVaTVUSGxJOVNWQ2xUS2FZVVIycXpWTGxVcTlRdHFWZlNCR2xkYVRmcGxkSlowaVhTSjZSdlNMK1VJY2pveVhqSXNHUTJ5WlRMbkpZWmtKbVNwY3BheUFiTHBzb1d5amJLWHBVZGw4UEo2Y2w1eVhIa2N1VU95MTJVRzZXaXFOcFVEeXFidXBWYVE3MUVIYU5oYWZvMEppMkpWa0E3U3V1alRjckx5VnZMUjhsbnlwZkxuNVVmVmtBcDZDa3dGVklVZGlvY1Y3aW44RmxSVGRGTmthdTRYYkZaOFpiaUI2VkZTcTVLWEtWOHBSYWx1MHFmbGVuS1hzckp5cnVWMjVRZnFhQlZqRlJDVmRhcUhGUzVwUEp5RVcyUjR5TDJvdnhGeHhjOVZJVlZqVlREVk5lckhsYnRWWjFTVTFmelVST3E3VmU3cVBaU1hVSGRWVDFKdlZqOW5QcUVCbFhEV1lPdlVheHhYdU01WFo3dVJrK2hsOUs3NlpPYXFwcSttbUxOS3MwK3pXa3RmYTFJclJ5dEZxMUgya1J0aG5hQ2RyRjJsL2Fram9aT29NNEduU2FkaDdvRVhZWXVUM2VmYm8vdUJ6MTl2V2k5YlhwdGV1UDZTdnBNL1N6OUp2MGhBNHFCaThFYWcycURPNFpZUTRaaHN1RUJ3NXRHc0pHTkVjK28zT2lHTVd4c2E4dzNQbURjdnhpejJINnhZSEgxNGdFVHNvbWJTWVpKazhtSXFZSnBnR21PYVp2cEt6TWRzMWl6M1dZOVp0L01iY3hUekd2TUJ5M2tMUHdzY2l3NkxONVlHbG15TGNzdDcxaFJyTHl0Tmx1MVc3MjJOcmJtV2grMHZtOUR0UW0wMldiVFpmUFYxczVXWk50c08yR25ZeGRuVjJFM3dLQXhRaGlGakN2MkdIdDMrODMyWit3L09kZzZwRHNjZC9qTDBjUXgyYkhSY1h5Si9oTHVrcG9sbzA1YVRpeW5LcWRoWjdwem5QTWg1MkVYVFJlV1M3WExFMWR0VjQ1cnJlc3pOME8zSkxjamJxL2N6ZDFGN3FmY1AzZzRlR3owNlBSRWVmcDQ1bnYyZWNsNVJYcVZlVDMyMXZKTzlHN3ludlN4OFZudjArbUw4ZlgzM2UwN3dGUmpzcGtOekVrL083K05mdDMrWlA5dy96TC9Kd0ZHQWFLQWprQTQwQzl3VCtCUWtHNlFJS2d0R0FRemcvY0VQd3JSRDFrVDhtc29OalFrdER6MGFaaEYySWF3bm5CcStLcnd4dkQzRWU0Uk95TUdJdzBpeFpGZFVkSlJ5Nk1hb2o1RWUwWVhSUTh2TlZ1NmNlbjFHSlVZZmt4N0xDNDJLclkyZG1xWjE3Szl5OGFXMnl6UFczNXZoZjZLekJWWFY2cXNURmw1ZHBYMEt0YXFFM0dZdU9pNHhyZ3ZyR0JXTldzcW5obGZFVC9KOW1Edlk3L2d1SEtLT1JOY0oyNFI5MW1DVTBKUnduaWlVK0tleEFtZUM2K0U5NUx2d1MvanYwN3lUYXBNK3BBY25GeVhQSk1TbmRLU2lrK05TejB0a0JNa0M3cFhxNi9PWE4wdk5CYm1DWWZYT0t6WnUyWlM1QytxVFlQU1ZxUzFwOU1RZ2RNck5oRC9JQjdKY000b3ovaTRObXJ0aVV6WlRFRm03enFqZGR2WFBjdnl6dnA1UFhvOWUzM1hCczBOV3phTWJIVGJXTFVKMmhTL3FXdXo5dWJjeldQWlB0bjFXNGhia3JmOGxtT2VVNVR6Ym12MDFvNWN0ZHpzM05FZmZINW95cFBLRStVTmJIUGNWdmtqK2tmK2ozM2JyYmJ2My80dG41Ti9yY0M4b0tUZ1N5Rzc4TnBQRmorVi9qU3pJMkZIMzA3Ym5RZDNZWGNKZHQzYjdiSzd2a2kyS0t0b2RFL2dudFppZW5GKzhidTlxL1plTGJFdXFkeEgzQ2ZlTjF3YVVOcStYMmYvcnYxZnluaGxkOHZkeTFzcVZDdTJWM3c0d0RsdzY2RHJ3ZVpLdGNxQ3lzK0grSWZ1Vi9sVXRWYnJWWmNjeGg3T09QeTBKcXFtNTJmR3p3MjFLclVGdFYvckJIWEQ5V0gxM1ExMkRRMk5xbzA3bStBbWNkUEVrZVZIYmg3MVBOcmViTkpjMWFMUVVuQU1IQk1mZS81TDNDLzNqdnNmN3pyQk9ORjhVdmRreFNucXFmeFdxSFZkNjJRYnIyMjRQYWE5LzdUZjZhNE94NDVUdjVyK1duZEc4MHo1V2Ztek84OFJ6K1dlbXptZmRYNnFVOWo1OGtMaWhkR3VWVjJERjVkZXZOTWQydDEzeWYvU2xjdmVseS8ydVBXY3YrSjA1Y3hWaDZ1bnJ6R3V0VjIzdmQ3YWE5Tjc2amViMzA3MTJmYTEzckM3MFg3VC9tWkgvNUwrYzdkY2JsMjQ3WG43OGgzbW5ldDNnKzcyMzR1OGQzOWcrY0R3ZmM3OThRY3BEMTQvekhnNFBaZzloQm5LZnlUenFPU3g2dVBxM3cxL2J4bTJIVDQ3NGpuUyt5VDh5ZUFvZS9URkgybC9mQm5MZlVwNVd2Sk00MW5EdU9YNG1RbnZpWnZQbHowZmV5RjhNZjB5NzAvWlB5dGVHYnc2K1pmclg3MlRTeWZIWG90ZXo3d3BmS3Y4dHU2ZDlidXVxWkNweCs5VDMwOS95UCtvL0xIK0UrTlR6K2ZvejgrbTEzN0JmU245YXZpMTQ1di90NkdaMUprWklVdkVtdE1DS0tTRkV4SUFlRk1IQUNVR0FPcE5BSWhTODdwNHpnT2ExL0lJUTMvWFdmTi84YngybmgxQU5BUTRrZzFBYUNjaXFaSGZrMGl2aC9ReTJRQ0V1QUlRNFFwZ0t5dEpSVVptUzFxQ2xlVWNRS1EyUkpxVXpNeThSZlFnemhDQXJ3TXpNOU50TXpOZmF4SDkvaENBenZmemVueldXd2JSTm9lTXJEdzl3N3NWamJQbjV2K2orUStXYXdEb3ZySkZFUUFBQUFsd1NGbHpBQUFMRXdBQUN4TUJBSnFjR0FBQUFkVnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlsaE5VQ0JEYjNKbElEVXVOQzR3SWo0S0lDQWdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBZ0lDQWdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpUGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBEYjIxd2NtVnpjMmx2Ymo0eFBDOTBhV1ptT2tOdmJYQnlaWE56YVc5dVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwUWFHOTBiMjFsZEhKcFkwbHVkR1Z5Y0hKbGRHRjBhVzl1UGpJOEwzUnBabVk2VUdodmRHOXRaWFJ5YVdOSmJuUmxjbkJ5WlhSaGRHbHZiajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZUM0pwWlc1MFlYUnBiMjQrTVR3dmRHbG1aanBQY21sbGJuUmhkR2x2Ymo0S0lDQWdJQ0FnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2lBZ0lEd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2psMHRtb0FBQUVNU1VSQlZEZ1JZOGh1M1BqL3hldlAveWtGSUROQVpqRStmZm54djVRWUh3TTF3TE5YbnhnWVFTNGp4N0MvZi84eE1ETXpZV2hsd1JEQkkvRHl6UmVHV2F0T01SdzUrNURoNi9kZkRPeHNMQXlpUXR3TUsvb2k0THFJTnZERm04OE1xVFhyR2Q1LytnN1gvUFBYSDRZbkx6N0MrU0FHMFFiT1huVWF4VEJoQVM0R1lVRXVCbDR1ZHZJTVBIbnBNVnhqWTY0TGc3T2xNcHlQek1BTVZXUlpKUGFIVHovZ1BGeUdnUlFRYlNEY05BSU12TW5HSm1vbUFlME1EQUo4SEF4YlpzVEQxVkhzUWdWcFFiaGhJQWJGQmlyS0NLRVlpTmZMeUNxUnZYOWtXVHF5RkFxYlloZWltQWJrakJxSUhpS2s4NWxBaFNLMUFNZ3NwcllaQnhoZXZmMUNzWm5QWDM5bUFKa0ZBTjhibmM2UTlKcTRBQUFBQUVsRlRrU3VRbUNDKTtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggM3B4O1xuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjlweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBtYXJnaW46IC04cHggN3B4IC03cHggLTMwcHg7XG4gICAgY29udGVudDogXCJmXCI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG53aWR0aDogMTAwJTtcbm1pbi13aWR0aDogMzAwcHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtY2FyZC10aXRsZSwgbWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuYm9keSB7IG1hcmdpbjogMDsgZm9udC1mYW1pbHk6ICdCYWxvbyBQYWFqaSAyJywgY3Vyc2l2ZTsgbGluZS1oZWlnaHQ6IDEuODt9XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css', '../signin/signin.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js"); // import {MatOptionModule} from '@angular/material/option';


    var material = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], // MatOptionModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], material], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], // MatOptionModule,
      _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], // MatOptionModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], // MatOptionModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [material],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], material]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guard/auth.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/guard/auth.guard.ts ***!
    \********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this12 = this;

          return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            return !!user;
          }), // <-- map to boolean
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (loggedIn) {
            if (!loggedIn) {
              console.log('access denied');

              _this12.router.navigate(['/']);
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/routing/app-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/routing/app-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppSharedRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/preference/preference.component */
    "./src/app/components/preference/preference.component.ts");
    /* harmony import */


    var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/signin/signin.component */
    "./src/app/components/signin/signin.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/rating/rating.component */
    "./src/app/components/rating/rating.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_showprofile_showprofile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/showprofile/showprofile.component */
    "./src/app/components/showprofile/showprofile.component.ts");
    /* harmony import */


    var _components_front_front_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/front/front.component */
    "./src/app/components/front/front.component.ts");
    /* harmony import */


    var _components_new_user_facebook_new_user_facebook_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/new-user-facebook/new-user-facebook.component */
    "./src/app/components/new-user-facebook/new-user-facebook.component.ts");
    /* harmony import */


    var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../components/edit-user/edit-user.component */
    "./src/app/components/edit-user/edit-user.component.ts");
    /* harmony import */


    var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/guard/auth.guard */
    "./src/app/shared/guard/auth.guard.ts"); // components
    // Import canActivate guard services
    // Include route guard in routes array


    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'join',
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
      canActivate: []
    }, {
      path: 'signin',
      component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
      canActivate: []
    }, // { path: 'new-user', component: NewUserComponent, canActivate: [AuthGuard]},
    {
      path: 'new-user',
      component: _components_new_user_facebook_new_user_facebook_component__WEBPACK_IMPORTED_MODULE_11__["NewUserFacebookComponent"],
      canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {
      path: 'front',
      component: _components_front_front_component__WEBPACK_IMPORTED_MODULE_10__["FrontComponent"]
    }, // { path: 'chats/:id', component: ChatComponent, canActivate: [AuthGuard]},
    {
      path: 'user',
      component: _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_3__["PreferenceComponent"],
      canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
      children: [{
        path: '',
        component: _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"]
      }, {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
      }, {
        path: 'edit-user',
        component: _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"]
      }, {
        path: 'chats/:id',
        component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
        children: [{
          path: 'user-profile/:id',
          component: _components_showprofile_showprofile_component__WEBPACK_IMPORTED_MODULE_9__["ShowProfileComponent"]
        }]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      // userData: any;
      function AuthService(afAuth, // Inject Firebase auth service
      afs, // Inject FIrestore service
      router, ngZone // NgZone service to remove outside scope warning
      ) {
        var _this13 = this;

        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.ngZone = ngZone;
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
          if (user) {
            return _this13.afs.doc("users/".concat(user.uid)).valueChanges();
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          }
        }));
      }

      _createClass(AuthService, [{
        key: "getUser",
        value: function getUser() {
          return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
        } // Sign in with email/password

      }, {
        key: "SignIn",
        value: function SignIn(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password)["catch"](function (error) {
                      var errorMessage = error.message;
                      alert(errorMessage);
                      console.log(error);
                    });

                  case 2:
                    response = _context3.sent;
                    // const token = await response.user.getIdToken();
                    console.log('THIS IS RESPONSE', response); // console.log('THIS IS TOKEN', token);

                    this.router.navigate(['user']);
                    console.log('finish login and route to preference'); // this.SetUserData(response.user)

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this14 = this;

            var response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password).then(function (response) {
                      _this14.SetUserData(response.user);

                      console.log('THIS IS RESPONSE', response);

                      _this14.router.navigate(['new-user']);
                    })["catch"](function (error) {
                      var errorMessage = error.message;
                      alert(errorMessage);
                      console.log(error);
                    });

                  case 2:
                    response = _context4.sent;

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        } // Sign up with Facebook

      }, {
        key: "FacebookAuth",
        value: function FacebookAuth() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var provider, credential;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    // return new auth.FacebookAuthProvider();
                    provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
                    _context5.next = 3;
                    return this.afAuth.signInWithPopup(provider);

                  case 3:
                    credential = _context5.sent;
                    this.router.navigate(['new-user']);
                    console.log(credential.user);
                    return _context5.abrupt("return", this.SetUserData(credential.user));

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // Sign in with Facebook

      }, {
        key: "FacebookAuthLogin",
        value: function FacebookAuthLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var provider, credential;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // return new auth.FacebookAuthProvider();
                    provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
                    _context6.next = 3;
                    return this.afAuth.signInWithPopup(provider);

                  case 3:
                    credential = _context6.sent;
                    this.router.navigate(['user']); // return this.SetUserData(credential.user);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // Update data in Firestore

      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
            profile: {
              profileImageUrl: user.photoURL,
              name: user.displayName
            },
            preference: {}
          };
          return userRef.set(userData, {
            merge: true
          });
        }
      }, {
        key: "SignOut",
        value: function SignOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.afAuth.signOut();

                  case 2:
                    return _context7.abrupt("return", this.router.navigate(['']));

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/chat.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/chat.service.ts ***!
    \*************************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppSharedServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ChatService = /*#__PURE__*/function () {
      function ChatService(afs, auth, router) {
        _classCallCheck(this, ChatService);

        this.afs = afs;
        this.auth = auth;
        this.router = router;
      }

      _createClass(ChatService, [{
        key: "get",
        value: function get(chatId) {
          return this.afs.collection('chats').doc(chatId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (doc) {
            console.log('payload id', doc.payload.id); // doc.payload.id is chatId

            return Object.assign({
              id: doc.payload.id
            }, doc.payload.data());
          }));
        }
      }, {
        key: "userID2usermail_",
        value: function userID2usermail_(userID) {
          console.log("clicked userID is ", userID);
          return this.afs.collection('users').doc(userID).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (doc) {
            console.log('payload id', doc.payload.id); // doc.payload.id is chatId

            return Object.assign({
              id: doc.payload.id
            }, doc.payload.data());
          }));
        }
      }, {
        key: "getUserChats",
        value: function getUserChats() {
          var _this15 = this;

          return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            return _this15.afs.collection('chats', function (ref) {
              return ref.where('uid', 'array-contains', user.uid);
            }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
          }));
        }
      }, {
        key: "create",
        value: function create() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _yield$this$auth$getU, uid, data, docRef;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.auth.getUser();

                  case 2:
                    _yield$this$auth$getU = _context8.sent;
                    uid = _yield$this$auth$getU.uid;
                    data = {
                      uid: uid,
                      createdAt: Date.now(),
                      messages_cnt: 0,
                      messages: [],
                      metadata: {},
                      connection: {},
                      questionnaire: {}
                    };
                    _context8.next = 7;
                    return this.afs.collection('chats').add(data);

                  case 7:
                    docRef = _context8.sent;
                    return _context8.abrupt("return", this.router.navigate(['chats', docRef.id]));

                  case 9:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(chatId, content) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _yield$this$auth$getU2, uid, data, ref;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.auth.getUser();

                  case 2:
                    _yield$this$auth$getU2 = _context9.sent;
                    uid = _yield$this$auth$getU2.uid;
                    data = {
                      uid: uid,
                      content: content,
                      createdAt: Date.now()
                    };

                    if (!uid) {
                      _context9.next = 8;
                      break;
                    }

                    ref = this.afs.collection('chats').doc(chatId);
                    return _context9.abrupt("return", ref.update({
                      messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(data)
                    }));

                  case 8:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(chat, msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _yield$this$auth$getU3, uid, ref;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.auth.getUser();

                  case 2:
                    _yield$this$auth$getU3 = _context10.sent;
                    uid = _yield$this$auth$getU3.uid;
                    ref = this.afs.collection('chats').doc(chat.id);
                    console.log(msg);

                    if (!(chat.uid === uid || msg.uid === uid)) {
                      _context10.next = 9;
                      break;
                    }

                    // Allowed to delete
                    delete msg.user;
                    return _context10.abrupt("return", ref.update({
                      messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(msg)
                    }));

                  case 9:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "joinUsers",
        value: function joinUsers(chat$) {
          var _this16 = this;

          var chat;
          var joinKeys = {};
          return chat$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (c) {
            // Unique User IDs
            chat = c;
            var uids = Array.from(new Set(c.messages.map(function (v) {
              return v.uid;
            }))); // Firestore User Doc Reads

            var userDocs = uids.map(function (u) {
              return _this16.afs.doc("users/".concat(u)).valueChanges();
            });
            return userDocs.length ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(userDocs) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) {
            arr.forEach(function (v) {
              return joinKeys[v.uid] = v;
            });
            chat.messages = chat.messages.map(function (v) {
              return Object.assign(Object.assign({}, v), {
                user: joinKeys[v.uid]
              });
            });
            return chat;
          }));
        }
      }]);

      return ChatService;
    }();

    ChatService.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/firebase.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/firebase.service.ts ***!
    \*****************************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppSharedServicesFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

    var FirebaseService = /*#__PURE__*/function () {
      function FirebaseService(db, afAuth) {
        var _this17 = this;

        _classCallCheck(this, FirebaseService);

        this.db = db;
        this.afAuth = afAuth;
        this.test$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
          if (user) {
            return _this17.db.doc("group/1YsYSkVW2lZGUXynAI8l").valueChanges();
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }
        }));
      }

      _createClass(FirebaseService, [{
        key: "getTest",
        value: function getTest() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var tags, tags1, tags2, tags3;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.test$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise().then(function (ams) {
                      return ams.tags;
                    });

                  case 2:
                    tags = _context11.sent;
                    tags1 = Object.keys(tags.background);
                    tags2 = Object.keys(tags.career);
                    tags3 = Object.keys(tags.interest);
                    console.log({
                      tags1: tags1,
                      tags2: tags2,
                      tags3: tags3
                    });
                    return _context11.abrupt("return", {
                      tags1: tags1,
                      tags2: tags2,
                      tags3: tags3
                    });

                  case 8:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "createUser",
        value: function createUser(value, imageurl, uid) {
          return this.db.collection('users').doc(uid).update({
            profile: {
              name: value.name,
              gender: value.gender,
              country: value.country,
              age: parseInt(value.age),
              profileImageUrl: imageurl
            },
            preference: {}
          }).then(function () {
            console.log('User profile created');
          });
        }
      }, {
        key: "createUserFacebook",
        value: function createUserFacebook(value, name, imageurl, uid) {
          console.log(value.countries);
          return this.db.collection('users').doc(uid).update({
            profile: {
              name: value.userAppName,
              gender: value.gender,
              // nameToSearch: value.name.toLowerCase(),
              userFbName: name,
              age: parseInt(value.age),
              profileImageUrl: imageurl,
              country: value.countries,
              languages: value.languages,
              interests: value.interests,
              jobTitle: value.jobTitle,
              industry: value.industry,
              school1Info: value.school1Info,
              school2Info: value.school2Info
            },
            preference: {}
          }).then(function () {
            console.log('User profile created');
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(userKey, value, profileImageUrl) {
          return this.db.collection('users').doc(userKey).update({
            profile: {
              name: value.userAppName,
              age: parseInt(value.age),
              gender: value.gender,
              country: value.countries,
              languages: value.languages,
              interests: value.interests,
              jobTitle: value.jobTitle,
              industry: value.industry,
              school1Info: value.school1Info,
              school2Info: value.school2Info,
              profileImageUrl: profileImageUrl
            }
          }).then(function () {
            console.log('User profile updated');
          }); // return this.db.collection('users').doc(userKey).set(value);
        }
      }, {
        key: "updatePreference",
        value: function updatePreference(userKey, sth, tags) {
          return this.db.collection('users').doc(userKey).update({
            preference: {
              major: sth,
              selected_tags: tags
            }
          }); // return this.db.collection('users').doc(userKey).set(value);
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ɵfac = function FirebaseService_Factory(t) {
      return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]));
    };

    FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FirebaseService,
      factory: FirebaseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/Countries.json":
  /*!***********************************!*\
    !*** ./src/assets/Countries.json ***!
    \***********************************/

  /*! exports provided: countryList, default */

  /***/
  function srcAssetsCountriesJson(module) {
    module.exports = JSON.parse("{\"countryList\":[\"Afghanistan\",\"Albania\",\"Algeria\",\"American Samoa\",\"Andorra\",\"Angola\",\"Anguilla\",\"Antarctica\",\"Antigua and Barbuda\",\"Argentina\",\"Armenia\",\"Aruba\",\"Australia\",\"Austria\",\"Azerbaijan\",\"Bahamas (the)\",\"Bahrain\",\"Bangladesh\",\"Barbados\",\"Belarus\",\"Belgium\",\"Belize\",\"Benin\",\"Bermuda\",\"Bhutan\",\"Bolivia (Plurinational State of)\",\"Bonaire, Sint Eustatius and Saba\",\"Bosnia and Herzegovina\",\"Botswana\",\"Bouvet Island\",\"Brazil\",\"British Indian Ocean Territory (the)\",\"Brunei Darussalam\",\"Bulgaria\",\"Burkina Faso\",\"Burundi\",\"Cabo Verde\",\"Cambodia\",\"Cameroon\",\"Canada\",\"Cayman Islands (the)\",\"Central African Republic (the)\",\"Chad\",\"Chile\",\"China\",\"Christmas Island\",\"Cocos (Keeling) Islands (the)\",\"Colombia\",\"Comoros (the)\",\"Congo (the Democratic Republic of the)\",\"Congo (the)\",\"Cook Islands (the)\",\"Costa Rica\",\"Croatia\",\"Cuba\",\"Curaçao\",\"Cyprus\",\"Czechia\",\"Côte d'Ivoire\",\"Denmark\",\"Djibouti\",\"Dominica\",\"Dominican Republic (the)\",\"Ecuador\",\"Egypt\",\"El Salvador\",\"Equatorial Guinea\",\"Eritrea\",\"Estonia\",\"Eswatini\",\"Ethiopia\",\"Falkland Islands (the) [Malvinas]\",\"Faroe Islands (the)\",\"Fiji\",\"Finland\",\"France\",\"French Guiana\",\"French Polynesia\",\"French Southern Territories (the)\",\"Gabon\",\"Gambia (the)\",\"Georgia\",\"Germany\",\"Ghana\",\"Gibraltar\",\"Greece\",\"Greenland\",\"Grenada\",\"Guadeloupe\",\"Guam\",\"Guatemala\",\"Guernsey\",\"Guinea\",\"Guinea-Bissau\",\"Guyana\",\"Haiti\",\"Heard Island and McDonald Islands\",\"Holy See (the)\",\"Honduras\",\"Hong Kong\",\"Hungary\",\"Iceland\",\"India\",\"Indonesia\",\"Iran (Islamic Republic of)\",\"Iraq\",\"Ireland\",\"Isle of Man\",\"Israel\",\"Italy\",\"Jamaica\",\"Japan\",\"Jersey\",\"Jordan\",\"Kazakhstan\",\"Kenya\",\"Kiribati\",\"Korea (the Democratic People's Republic of)\",\"Korea (the Republic of)\",\"Kuwait\",\"Kyrgyzstan\",\"Lao People's Democratic Republic (the)\",\"Latvia\",\"Lebanon\",\"Lesotho\",\"Liberia\",\"Libya\",\"Liechtenstein\",\"Lithuania\",\"Luxembourg\",\"Macao\",\"Madagascar\",\"Malawi\",\"Malaysia\",\"Maldives\",\"Mali\",\"Malta\",\"Marshall Islands (the)\",\"Martinique\",\"Mauritania\",\"Mauritius\",\"Mayotte\",\"Mexico\",\"Micronesia (Federated States of)\",\"Moldova (the Republic of)\",\"Monaco\",\"Mongolia\",\"Montenegro\",\"Montserrat\",\"Morocco\",\"Mozambique\",\"Myanmar\",\"Namibia\",\"Nauru\",\"Nepal\",\"Netherlands (the)\",\"New Caledonia\",\"New Zealand\",\"Nicaragua\",\"Niger (the)\",\"Nigeria\",\"Niue\",\"Norfolk Island\",\"Northern Mariana Islands (the)\",\"Norway\",\"Oman\",\"Pakistan\",\"Palau\",\"Palestine, State of\",\"Panama\",\"Papua New Guinea\",\"Paraguay\",\"Peru\",\"Philippines (the)\",\"Pitcairn\",\"Poland\",\"Portugal\",\"Puerto Rico\",\"Qatar\",\"Republic of North Macedonia\",\"Romania\",\"Russian Federation (the)\",\"Rwanda\",\"Réunion\",\"Saint Barthélemy\",\"Saint Helena, Ascension and Tristan da Cunha\",\"Saint Kitts and Nevis\",\"Saint Lucia\",\"Saint Martin (French part)\",\"Saint Pierre and Miquelon\",\"Saint Vincent and the Grenadines\",\"Samoa\",\"San Marino\",\"Sao Tome and Principe\",\"Saudi Arabia\",\"Senegal\",\"Serbia\",\"Seychelles\",\"Sierra Leone\",\"Singapore\",\"Sint Maarten (Dutch part)\",\"Slovakia\",\"Slovenia\",\"Solomon Islands\",\"Somalia\",\"South Africa\",\"South Georgia and the South Sandwich Islands\",\"South Sudan\",\"Spain\",\"Sri Lanka\",\"Sudan (the)\",\"Suriname\",\"Svalbard and Jan Mayen\",\"Sweden\",\"Switzerland\",\"Syrian Arab Republic\",\"Taiwan (Province of China)\",\"Tajikistan\",\"Tanzania, United Republic of\",\"Thailand\",\"Timor-Leste\",\"Togo\",\"Tokelau\",\"Tonga\",\"Trinidad and Tobago\",\"Tunisia\",\"Turkey\",\"Turkmenistan\",\"Turks and Caicos Islands (the)\",\"Tuvalu\",\"Uganda\",\"Ukraine\",\"United Arab Emirates (the)\",\"United Kingdom of Great Britain and Northern Ireland (the)\",\"United States Minor Outlying Islands (the)\",\"United States of America (the)\",\"Uruguay\",\"Uzbekistan\",\"Vanuatu\",\"Venezuela (Bolivarian Republic of)\",\"Viet Nam\",\"Virgin Islands (British)\",\"Virgin Islands (U.S.)\",\"Wallis and Futuna\",\"Western Sahara\",\"Yemen\",\"Zambia\",\"Zimbabwe\",\"Åland Islands\"]}");
    /***/
  },

  /***/
  "./src/assets/Degrees.json":
  /*!*********************************!*\
    !*** ./src/assets/Degrees.json ***!
    \*********************************/

  /*! exports provided: degrees, default */

  /***/
  function srcAssetsDegreesJson(module) {
    module.exports = JSON.parse("{\"degrees\":[\"Associate degree\",\"Bachelor's degree\",\"Master's degree\",\"Doctoral degree\"]}");
    /***/
  },

  /***/
  "./src/assets/FieldOfStudy.json":
  /*!**************************************!*\
    !*** ./src/assets/FieldOfStudy.json ***!
    \**************************************/

  /*! exports provided: fields, default */

  /***/
  function srcAssetsFieldOfStudyJson(module) {
    module.exports = JSON.parse("{\"fields\":[\"Engineering and technology\",\"Environmental studies and forestry\",\"Journalism, media studies and communication\",\"Law\"]}");
    /***/
  },

  /***/
  "./src/assets/Industries.json":
  /*!************************************!*\
    !*** ./src/assets/Industries.json ***!
    \************************************/

  /*! exports provided: description, source, industries, default */

  /***/
  function srcAssetsIndustriesJson(module) {
    module.exports = JSON.parse("{\"description\":\"A list of all industries on LinkedIn, as of May 21, 2013\",\"source\":\"http://robertwdempsey.com/liindustries\",\"industries\":[\"Accounting\",\"Airlines/Aviation\",\"Alternative Dispute Resolution\",\"Alternative Medicine\",\"Animation\",\"Apparel & Fashion\",\"Architecture & Planning\",\"Arts & Crafts\",\"Automotive\",\"Aviation & Aerospace\",\"Banking\",\"Biotechnology\",\"Broadcast Media\",\"Building Materials\",\"Business Supplies & Equipment\",\"Capital Markets\",\"Chemicals\",\"Civic & Social Organization\",\"Civil Engineering\",\"Commercial Real Estate\",\"Computer & Network Security\",\"Computer Games\",\"Computer Hardware\",\"Computer Networking\",\"Computer Software\",\"Construction\",\"Consumer Electronics\",\"Consumer Goods\",\"Consumer Services\",\"Cosmetics\",\"Dairy\",\"Defense & Space\",\"Design\",\"Education Management\",\"E-learning\",\"Electrical & Electronic Manufacturing\",\"Entertainment\",\"Environmental Services\",\"Events Services\",\"Executive Office\",\"Facilities Services\",\"Farming\",\"Financial Services\",\"Fine Art\",\"Fishery\",\"Food & Beverages\",\"Food Production\",\"Fundraising\",\"Furniture\",\"Gambling & Casinos\",\"Glass, Ceramics & Concrete\",\"Government Administration\",\"Government Relations\",\"Graphic Design\",\"Health, Wellness & Fitness\",\"Higher Education\",\"Hospital & Health Care\",\"Hospitality\",\"Human Resources\",\"Import & Export\",\"Individual & Family Services\",\"Industrial Automation\",\"Information Services\",\"Information Technology & Services\",\"Insurance\",\"International Affairs\",\"International Trade & Development\",\"Internet\",\"Investment Banking/Venture\",\"Investment Management\",\"Judiciary\",\"Law Enforcement\",\"Law Practice\",\"Legal Services\",\"Legislative Office\",\"Leisure & Travel\",\"Libraries\",\"Logistics & Supply Chain\",\"Luxury Goods & Jewelry\",\"Machinery\",\"Management Consulting\",\"Maritime\",\"Marketing & Advertising\",\"Market Research\",\"Mechanical or Industrial Engineering\",\"Media Production\",\"Medical Device\",\"Medical Practice\",\"Mental Health Care\",\"Military\",\"Mining & Metals\",\"Motion Pictures & Film\",\"Museums & Institutions\",\"Music\",\"Nanotechnology\",\"Newspapers\",\"Nonprofit Organization Management\",\"Oil & Energy\",\"Online Publishing\",\"Outsourcing/Offshoring\",\"Package/Freight Delivery\",\"Packaging & Containers\",\"Paper & Forest Products\",\"Performing Arts\",\"Pharmaceuticals\",\"Philanthropy\",\"Photography\",\"Plastics\",\"Political Organization\",\"Primary/Secondary\",\"Printing\",\"Professional Training\",\"Program Development\",\"Public Policy\",\"Public Relations\",\"Public Safety\",\"Publishing\",\"Railroad Manufacture\",\"Ranching\",\"Real Estate\",\"Recreational\",\"Facilities & Services\",\"Religious Institutions\",\"Renewables & Environment\",\"Research\",\"Restaurants\",\"Retail\",\"Security & Investigations\",\"Semiconductors\",\"Shipbuilding\",\"Sporting Goods\",\"Sports\",\"Staffing & Recruiting\",\"Supermarkets\",\"Telecommunications\",\"Textiles\",\"Think Tanks\",\"Tobacco\",\"Translation & Localization\",\"Transportation/Trucking/Railroad\",\"Utilities\",\"Venture Capital\",\"Veterinary\",\"Warehousing\",\"Wholesale\",\"Wine & Spirits\",\"Wireless\",\"Writing & Editing\"]}");
    /***/
  },

  /***/
  "./src/assets/JobTitles.json":
  /*!***********************************!*\
    !*** ./src/assets/JobTitles.json ***!
    \***********************************/

  /*! exports provided: occupations, default */

  /***/
  function srcAssetsJobTitlesJson(module) {
    module.exports = JSON.parse("{\"occupations\":[\"accountant\",\"actor\",\"actuary\",\"adhesive bonding machine tender\",\"adjudicator\",\"administrative assistant\",\"administrative services manager\",\"adult education teacher\",\"advertising manager\",\"advertising sales agent\",\"aerobics instructor\",\"aerospace engineer\",\"aerospace engineering technician\",\"agent\",\"agricultural engineer\",\"agricultural equipment operator\",\"agricultural grader\",\"agricultural inspector\",\"agricultural manager\",\"agricultural sciences teacher\",\"agricultural sorter\",\"agricultural technician\",\"agricultural worker\",\"air conditioning installer\",\"air conditioning mechanic\",\"air traffic controller\",\"aircraft cargo handling supervisor\",\"aircraft mechanic\",\"aircraft service technician\",\"airline copilot\",\"airline pilot\",\"ambulance dispatcher\",\"ambulance driver\",\"amusement machine servicer\",\"anesthesiologist\",\"animal breeder\",\"animal control worker\",\"animal scientist\",\"animal trainer\",\"animator\",\"answering service operator\",\"anthropologist\",\"apparel patternmaker\",\"apparel worker\",\"arbitrator\",\"archeologist\",\"architect\",\"architectural drafter\",\"architectural manager\",\"archivist\",\"art director\",\"art teacher\",\"artist\",\"assembler\",\"astronomer\",\"athlete\",\"athletic trainer\",\"ATM machine repairer\",\"atmospheric scientist\",\"attendant\",\"audio and video equipment technician\",\"audio-visual and multimedia collections specialist\",\"audiologist\",\"auditor\",\"author\",\"auto damage insurance appraiser\",\"automotive and watercraft service attendant\",\"automotive glass installer\",\"automotive mechanic\",\"avionics technician\",\"baggage porter\",\"bailiff\",\"baker\",\"barback\",\"barber\",\"bartender\",\"basic education teacher\",\"behavioral disorder counselor\",\"bellhop\",\"bench carpenter\",\"bicycle repairer\",\"bill and account collector\",\"billing and posting clerk\",\"biochemist\",\"biological technician\",\"biomedical engineer\",\"biophysicist\",\"blaster\",\"blending machine operator\",\"blockmason\",\"boiler operator\",\"boilermaker\",\"bookkeeper\",\"boring machine tool tender\",\"brazer\",\"brickmason\",\"bridge and lock tender\",\"broadcast news analyst\",\"broadcast technician\",\"brokerage clerk\",\"budget analyst\",\"building inspector\",\"bus mechanic\",\"butcher\",\"buyer\",\"cabinetmaker\",\"cafeteria attendant\",\"cafeteria cook\",\"camera operator\",\"camera repairer\",\"cardiovascular technician\",\"cargo agent\",\"carpenter\",\"carpet installer\",\"cartographer\",\"cashier\",\"caster\",\"ceiling tile installer\",\"cellular equipment installer\",\"cement mason\",\"channeling machine operator\",\"chauffeur\",\"checker\",\"chef\",\"chemical engineer\",\"chemical plant operator\",\"chemist\",\"chemistry teacher\",\"chief executive\",\"child social worker\",\"childcare worker\",\"chiropractor\",\"choreographer\",\"civil drafter\",\"civil engineer\",\"civil engineering technician\",\"claims adjuster\",\"claims examiner\",\"claims investigator\",\"cleaner\",\"clinical laboratory technician\",\"clinical laboratory technologist\",\"clinical psychologist\",\"coating worker\",\"coatroom attendant\",\"coil finisher\",\"coil taper\",\"coil winder\",\"coin machine servicer\",\"commercial diver\",\"commercial pilot\",\"commodities sales agent\",\"communications equipment operator\",\"communications teacher\",\"community association manager\",\"community service manager\",\"compensation and benefits manager\",\"compliance officer\",\"composer\",\"computer hardware engineer\",\"computer network architect\",\"computer operator\",\"computer programmer\",\"computer science teacher\",\"computer support specialist\",\"computer systems administrator\",\"computer systems analyst\",\"concierge\",\"conciliator\",\"concrete finisher\",\"conservation science teacher\",\"conservation scientist\",\"conservation worker\",\"conservator\",\"construction inspector\",\"construction manager\",\"construction painter\",\"construction worker\",\"continuous mining machine operator\",\"convention planner\",\"conveyor operator\",\"cook\",\"cooling equipment operator\",\"copy marker\",\"correctional officer\",\"correctional treatment specialist\",\"correspondence clerk\",\"correspondent\",\"cosmetologist\",\"cost estimator\",\"costume attendant\",\"counseling psychologist\",\"counselor\",\"courier\",\"court reporter\",\"craft artist\",\"crane operator\",\"credit analyst\",\"credit checker\",\"credit counselor\",\"criminal investigator\",\"criminal justice teacher\",\"crossing guard\",\"curator\",\"custom sewer\",\"customer service representative\",\"cutter\",\"cutting machine operator\",\"dancer\",\"data entry keyer\",\"database administrator\",\"decorating worker\",\"delivery services driver\",\"demonstrator\",\"dental assistant\",\"dental hygienist\",\"dental laboratory technician\",\"dentist\",\"derrick operator\",\"designer\",\"desktop publisher\",\"detective\",\"diagnostic medical sonographer\",\"die maker\",\"diesel engine specialist\",\"dietetic technician\",\"dietitian\",\"dinkey operator\",\"director\",\"dishwasher\",\"dispatcher\",\"door-to-door sales worker\",\"drafter\",\"dragline operator\",\"drama teacher\",\"dredge operator\",\"dressing room attendant\",\"dressmaker\",\"drier operator\",\"drilling machine tool operator\",\"dry-cleaning worker\",\"drywall installer\",\"dyeing machine operator\",\"earth driller\",\"economics teacher\",\"economist\",\"editor\",\"education administrator\",\"electric motor repairer\",\"electrical electronics drafter\",\"electrical engineer\",\"electrical equipment assembler\",\"electrical installer\",\"electrical power-line installer\",\"electrician\",\"electro-mechanical technician\",\"elementary school teacher\",\"elevator installer\",\"elevator repairer\",\"embalmer\",\"emergency management director\",\"emergency medical technician\",\"engine assembler\",\"engineer\",\"engineering manager\",\"engineering teacher\",\"english language teacher\",\"engraver\",\"entertainment attendant\",\"environmental engineer\",\"environmental science teacher\",\"environmental scientist\",\"epidemiologist\",\"escort\",\"etcher\",\"event planner\",\"excavating operator\",\"executive administrative assistant\",\"executive secretary\",\"exhibit designer\",\"expediting clerk\",\"explosives worker\",\"extraction worker\",\"fabric mender\",\"fabric patternmaker\",\"fabricator\",\"faller\",\"family practitioner\",\"family social worker\",\"family therapist\",\"farm advisor\",\"farm equipment mechanic\",\"farm labor contractor\",\"farmer\",\"farmworker\",\"fashion designer\",\"fast food cook\",\"fence erector\",\"fiberglass fabricator\",\"fiberglass laminator\",\"file clerk\",\"filling machine operator\",\"film and video editor\",\"financial analyst\",\"financial examiner\",\"financial manager\",\"financial services sales agent\",\"fine artist\",\"fire alarm system installer\",\"fire dispatcher\",\"fire inspector\",\"fire investigator\",\"firefighter\",\"fish and game warden\",\"fish cutter\",\"fish trimmer\",\"fisher\",\"fitness studies teacher\",\"fitness trainer\",\"flight attendant\",\"floor finisher\",\"floor layer\",\"floor sander\",\"floral designer\",\"food batchmaker\",\"food cooking machine operator\",\"food preparation worker\",\"food science technician\",\"food scientist\",\"food server\",\"food service manager\",\"food technologist\",\"foreign language teacher\",\"foreign literature teacher\",\"forensic science technician\",\"forest fire inspector\",\"forest fire prevention specialist\",\"forest worker\",\"forester\",\"forestry teacher\",\"forging machine setter\",\"foundry coremaker\",\"freight agent\",\"freight mover\",\"fundraising manager\",\"funeral attendant\",\"funeral director\",\"funeral service manager\",\"furnace operator\",\"furnishings worker\",\"furniture finisher\",\"gaming booth cashier\",\"gaming cage worker\",\"gaming change person\",\"gaming dealer\",\"gaming investigator\",\"gaming manager\",\"gaming surveillance officer\",\"garment mender\",\"garment presser\",\"gas compressor\",\"gas plant operator\",\"gas pumping station operator\",\"general manager\",\"general practitioner\",\"geographer\",\"geography teacher\",\"geological engineer\",\"geological technician\",\"geoscientist\",\"glazier\",\"government program eligibility interviewer\",\"graduate teaching assistant\",\"graphic designer\",\"groundskeeper\",\"groundskeeping worker\",\"gynecologist\",\"hairdresser\",\"hairstylist\",\"hand grinding worker\",\"hand laborer\",\"hand packager\",\"hand packer\",\"hand polishing worker\",\"hand sewer\",\"hazardous materials removal worker\",\"head cook\",\"health and safety engineer\",\"health educator\",\"health information technician\",\"health services manager\",\"health specialties teacher\",\"healthcare social worker\",\"hearing officer\",\"heat treating equipment setter\",\"heating installer\",\"heating mechanic\",\"heavy truck driver\",\"highway maintenance worker\",\"historian\",\"history teacher\",\"hoist and winch operator\",\"home appliance repairer\",\"home economics teacher\",\"home entertainment installer\",\"home health aide\",\"home management advisor\",\"host\",\"hostess\",\"hostler\",\"hotel desk clerk\",\"housekeeping cleaner\",\"human resources assistant\",\"human resources manager\",\"human service assistant\",\"hunter\",\"hydrologist\",\"illustrator\",\"industrial designer\",\"industrial engineer\",\"industrial engineering technician\",\"industrial machinery mechanic\",\"industrial production manager\",\"industrial truck operator\",\"industrial-organizational psychologist\",\"information clerk\",\"information research scientist\",\"information security analyst\",\"information systems manager\",\"inspector\",\"instructional coordinator\",\"instructor\",\"insulation worker\",\"insurance claims clerk\",\"insurance sales agent\",\"insurance underwriter\",\"intercity bus driver\",\"interior designer\",\"internist\",\"interpreter\",\"interviewer\",\"investigator\",\"jailer\",\"janitor\",\"jeweler\",\"judge\",\"judicial law clerk\",\"kettle operator\",\"kiln operator\",\"kindergarten teacher\",\"laboratory animal caretaker\",\"landscape architect\",\"landscaping worker\",\"lathe setter\",\"laundry worker\",\"law enforcement teacher\",\"law teacher\",\"lawyer\",\"layout worker\",\"leather worker\",\"legal assistant\",\"legal secretary\",\"legislator\",\"librarian\",\"library assistant\",\"library science teacher\",\"library technician\",\"licensed practical nurse\",\"licensed vocational nurse\",\"life scientist\",\"lifeguard\",\"light truck driver\",\"line installer\",\"literacy teacher\",\"literature teacher\",\"loading machine operator\",\"loan clerk\",\"loan interviewer\",\"loan officer\",\"lobby attendant\",\"locker room attendant\",\"locksmith\",\"locomotive engineer\",\"locomotive firer\",\"lodging manager\",\"log grader\",\"logging equipment operator\",\"logistician\",\"machine feeder\",\"machinist\",\"magistrate judge\",\"magistrate\",\"maid\",\"mail clerk\",\"mail machine operator\",\"mail superintendent\",\"maintenance painter\",\"maintenance worker\",\"makeup artist\",\"management analyst\",\"manicurist\",\"manufactured building installer\",\"mapping technician\",\"marble setter\",\"marine engineer\",\"marine oiler\",\"market research analyst\",\"marketing manager\",\"marketing specialist\",\"marriage therapist\",\"massage therapist\",\"material mover\",\"materials engineer\",\"materials scientist\",\"mathematical science teacher\",\"mathematical technician\",\"mathematician\",\"maxillofacial surgeon\",\"measurer\",\"meat cutter\",\"meat packer\",\"meat trimmer\",\"mechanical door repairer\",\"mechanical drafter\",\"mechanical engineer\",\"mechanical engineering technician\",\"mediator\",\"medical appliance technician\",\"medical assistant\",\"medical equipment preparer\",\"medical equipment repairer\",\"medical laboratory technician\",\"medical laboratory technologist\",\"medical records technician\",\"medical scientist\",\"medical secretary\",\"medical services manager\",\"medical transcriptionist\",\"meeting planner\",\"mental health counselor\",\"mental health social worker\",\"merchandise displayer\",\"messenger\",\"metal caster\",\"metal patternmaker\",\"metal pickling operator\",\"metal pourer\",\"metal worker\",\"metal-refining furnace operator\",\"metal-refining furnace tender\",\"meter reader\",\"microbiologist\",\"middle school teacher\",\"milling machine setter\",\"millwright\",\"mine cutting machine operator\",\"mine shuttle car operator\",\"mining engineer\",\"mining safety engineer\",\"mining safety inspector\",\"mining service unit operator\",\"mixing machine setter\",\"mobile heavy equipment mechanic\",\"mobile home installer\",\"model maker\",\"model\",\"molder\",\"mortician\",\"motel desk clerk\",\"motion picture projectionist\",\"motorboat mechanic\",\"motorboat operator\",\"motorboat service technician\",\"motorcycle mechanic\",\"multimedia artist\",\"museum technician\",\"music director\",\"music teacher\",\"musical instrument repairer\",\"musician\",\"natural sciences manager\",\"naval architect\",\"network systems administrator\",\"new accounts clerk\",\"news vendor\",\"nonfarm animal caretaker\",\"nuclear engineer\",\"nuclear medicine technologist\",\"nuclear power reactor operator\",\"nuclear technician\",\"nursing aide\",\"nursing instructor\",\"nursing teacher\",\"nutritionist\",\"obstetrician\",\"occupational health and safety specialist\",\"occupational health and safety technician\",\"occupational therapist\",\"occupational therapy aide\",\"occupational therapy assistant\",\"offbearer\",\"office clerk\",\"office machine operator\",\"operating engineer\",\"operations manager\",\"operations research analyst\",\"ophthalmic laboratory technician\",\"optician\",\"optometrist\",\"oral surgeon\",\"order clerk\",\"order filler\",\"orderly\",\"ordnance handling expert\",\"orthodontist\",\"orthotist\",\"outdoor power equipment mechanic\",\"oven operator\",\"packaging machine operator\",\"painter \",\"painting worker\",\"paper goods machine setter\",\"paperhanger\",\"paralegal\",\"paramedic\",\"parking enforcement worker\",\"parking lot attendant\",\"parts salesperson\",\"paving equipment operator\",\"payroll clerk\",\"pediatrician\",\"pedicurist\",\"personal care aide\",\"personal chef\",\"personal financial advisor\",\"pest control worker\",\"pesticide applicator\",\"pesticide handler\",\"pesticide sprayer\",\"petroleum engineer\",\"petroleum gauger\",\"petroleum pump system operator\",\"petroleum refinery operator\",\"petroleum technician\",\"pharmacist\",\"pharmacy aide\",\"pharmacy technician\",\"philosophy teacher\",\"photogrammetrist\",\"photographer\",\"photographic process worker\",\"photographic processing machine operator\",\"physical therapist aide\",\"physical therapist assistant\",\"physical therapist\",\"physician assistant\",\"physician\",\"physicist\",\"physics teacher\",\"pile-driver operator\",\"pipefitter\",\"pipelayer\",\"planing machine operator\",\"planning clerk\",\"plant operator\",\"plant scientist\",\"plasterer\",\"plastic patternmaker\",\"plastic worker\",\"plumber\",\"podiatrist\",\"police dispatcher\",\"police officer\",\"policy processing clerk\",\"political science teacher\",\"political scientist\",\"postal service clerk\",\"postal service mail carrier\",\"postal service mail processing machine operator\",\"postal service mail processor\",\"postal service mail sorter\",\"postmaster\",\"postsecondary teacher\",\"poultry cutter\",\"poultry trimmer\",\"power dispatcher\",\"power distributor\",\"power plant operator\",\"power tool repairer\",\"precious stone worker\",\"precision instrument repairer\",\"prepress technician\",\"preschool teacher\",\"priest\",\"print binding worker\",\"printing press operator\",\"private detective\",\"probation officer\",\"procurement clerk\",\"producer\",\"product promoter\",\"production clerk\",\"production occupation\",\"proofreader\",\"property manager\",\"prosthetist\",\"prosthodontist\",\"psychiatric aide\",\"psychiatric technician\",\"psychiatrist\",\"psychologist\",\"psychology teacher\",\"public relations manager\",\"public relations specialist\",\"pump operator\",\"purchasing agent\",\"purchasing manager\",\"radiation therapist\",\"radio announcer\",\"radio equipment installer\",\"radio operator\",\"radiologic technician\",\"radiologic technologist\",\"rail car repairer\",\"rail transportation worker\",\"rail yard engineer\",\"rail-track laying equipment operator\",\"railroad brake operator\",\"railroad conductor\",\"railroad police\",\"rancher\",\"real estate appraiser\",\"real estate broker\",\"real estate manager\",\"real estate sales agent\",\"receiving clerk\",\"receptionist\",\"record clerk\",\"recreation teacher\",\"recreation worker\",\"recreational therapist\",\"recreational vehicle service technician\",\"recyclable material collector\",\"referee\",\"refractory materials repairer\",\"refrigeration installer\",\"refrigeration mechanic\",\"refuse collector\",\"regional planner\",\"registered nurse\",\"rehabilitation counselor\",\"reinforcing iron worker\",\"reinforcing rebar worker\",\"religion teacher\",\"religious activities director\",\"religious worker\",\"rental clerk\",\"repair worker\",\"reporter\",\"residential advisor\",\"resort desk clerk\",\"respiratory therapist\",\"respiratory therapy technician\",\"retail buyer\",\"retail salesperson\",\"revenue agent\",\"rigger\",\"rock splitter\",\"rolling machine tender\",\"roof bolter\",\"roofer\",\"rotary drill operator\",\"roustabout\",\"safe repairer\",\"sailor\",\"sales engineer\",\"sales manager\",\"sales representative\",\"sampler\",\"sawing machine operator\",\"scaler\",\"school bus driver\",\"school psychologist\",\"school social worker\",\"scout leader\",\"sculptor\",\"secondary education teacher\",\"secondary school teacher\",\"secretary\",\"securities sales agent\",\"security guard\",\"security system installer\",\"segmental paver\",\"self-enrichment education teacher\",\"semiconductor processor\",\"septic tank servicer\",\"set designer\",\"sewer pipe cleaner\",\"sewing machine operator\",\"shampooer\",\"shaper\",\"sheet metal worker\",\"sheriff's patrol officer\",\"ship captain\",\"ship engineer\",\"ship loader\",\"shipmate\",\"shipping clerk\",\"shoe machine operator\",\"shoe worker\",\"short order cook\",\"signal operator\",\"signal repairer\",\"singer\",\"ski patrol\",\"skincare specialist\",\"slaughterer\",\"slicing machine tender\",\"slot supervisor\",\"social science research assistant\",\"social sciences teacher\",\"social scientist\",\"social service assistant\",\"social service manager\",\"social work teacher\",\"social worker\",\"sociologist\",\"sociology teacher\",\"software developer\",\"software engineer\",\"soil scientist\",\"solderer\",\"sorter\",\"sound engineering technician\",\"space scientist\",\"special education teacher\",\"speech-language pathologist\",\"sports book runner\",\"sports entertainer\",\"sports performer\",\"stationary engineer\",\"statistical assistant\",\"statistician\",\"steamfitter\",\"stock clerk\",\"stock mover\",\"stonemason\",\"street vendor\",\"streetcar operator\",\"structural iron worker\",\"structural metal fabricator\",\"structural metal fitter\",\"structural steel worker\",\"stucco mason\",\"substance abuse counselor\",\"substance abuse social worker\",\"subway operator\",\"surfacing equipment operator\",\"surgeon\",\"surgical technologist\",\"survey researcher\",\"surveying technician\",\"surveyor\",\"switch operator\",\"switchboard operator\",\"tailor\",\"tamping equipment operator\",\"tank car loader\",\"taper\",\"tax collector\",\"tax examiner\",\"tax preparer\",\"taxi driver\",\"teacher assistant\",\"teacher\",\"team assembler\",\"technical writer\",\"telecommunications equipment installer\",\"telemarketer\",\"telephone operator\",\"television announcer\",\"teller\",\"terrazzo finisher\",\"terrazzo worker\",\"tester\",\"textile bleaching operator\",\"textile cutting machine setter\",\"textile knitting machine setter\",\"textile presser\",\"textile worker\",\"therapist\",\"ticket agent\",\"ticket taker\",\"tile setter\",\"timekeeping clerk\",\"timing device assembler\",\"tire builder\",\"tire changer\",\"tire repairer\",\"title abstractor\",\"title examiner\",\"title searcher\",\"tobacco roasting machine operator\",\"tool filer\",\"tool grinder\",\"tool maker\",\"tool sharpener\",\"tour guide\",\"tower equipment installer\",\"tower operator\",\"track switch repairer\",\"tractor operator\",\"tractor-trailer truck driver\",\"traffic clerk\",\"traffic technician\",\"training and development manager\",\"training and development specialist\",\"transit police\",\"translator\",\"transportation equipment painter\",\"transportation inspector\",\"transportation security screener\",\"transportation worker\",\"trapper\",\"travel agent\",\"travel clerk\",\"travel guide\",\"tree pruner\",\"tree trimmer\",\"trimmer\",\"truck loader\",\"truck mechanic\",\"tuner\",\"turning machine tool operator\",\"typist\",\"umpire\",\"undertaker\",\"upholsterer\",\"urban planner\",\"usher\",\"valve installer\",\"vending machine servicer\",\"veterinarian\",\"veterinary assistant\",\"veterinary technician\",\"vocational counselor\",\"vocational education teacher\",\"waiter\",\"waitress\",\"watch repairer\",\"water treatment plant operator\",\"weaving machine setter\",\"web developer\",\"weigher\",\"welder\",\"wellhead pumper\",\"wholesale buyer\",\"wildlife biologist\",\"window trimmer\",\"wood patternmaker\",\"woodworker\",\"word processor\",\"writer\",\"yardmaster\",\"zoologist\"]}");
    /***/
  },

  /***/
  "./src/assets/Languages.json":
  /*!***********************************!*\
    !*** ./src/assets/Languages.json ***!
    \***********************************/

  /*! exports provided: languageList, default */

  /***/
  function srcAssetsLanguagesJson(module) {
    module.exports = JSON.parse("{\"languageList\":[\"Abkhaz\",\"Afar\",\"Afrikaans\",\"Akan\",\"Albanian\",\"Amharic\",\"Arabic\",\"Aragonese\",\"Armenian\",\"Assamese\",\"Avaric\",\"Avestan\",\"Aymara\",\"Azerbaijani\",\"Bambara\",\"Bashkir\",\"Basque\",\"Belarusian\",\"Bengali\",\"Bihari\",\"Bislama\",\"Bosnian\",\"Breton\",\"Bulgarian\",\"Burmese\",\"Catalan; Valencian\",\"Chamorro\",\"Chechen\",\"Chichewa; Chewa; Nyanja\",\"Chinese\",\"Chuvash\",\"Cornish\",\"Corsican\",\"Cree\",\"Croatian\",\"Czech\",\"Danish\",\"Divehi; Dhivehi; Maldivian;\",\"Dutch\",\"English\",\"Esperanto\",\"Estonian\",\"Ewe\",\"Faroese\",\"Fijian\",\"Finnish\",\"French\",\"Fula; Fulah; Pulaar; Pular\",\"Galician\",\"Georgian\",\"German\",\"Greek, Modern\",\"Guaraní\",\"Gujarati\",\"Haitian; Haitian Creole\",\"Hausa\",\"Hebrew (modern)\",\"Herero\",\"Hindi\",\"Hiri Motu\",\"Hungarian\",\"Interlingua\",\"Indonesian\",\"Interlingue\",\"Irish\",\"Igbo\",\"Inupiaq\",\"Ido\",\"Icelandic\",\"Italian\",\"Inuktitut\",\"Japanese\",\"Javanese\",\"Kalaallisut, Greenlandic\",\"Kannada\",\"Kanuri\",\"Kashmiri\",\"Kazakh\",\"Khmer\",\"Kikuyu, Gikuyu\",\"Kinyarwanda\",\"Kirghiz, Kyrgyz\",\"Komi\",\"Kongo\",\"Korean\",\"Kurdish\",\"Kwanyama, Kuanyama\",\"Latin\",\"Luxembourgish, Letzeburgesch\",\"Luganda\",\"Limburgish, Limburgan, Limburger\",\"Lingala\",\"Lao\",\"Lithuanian\",\"Luba-Katanga\",\"Latvian\",\"Manx\",\"Macedonian\",\"Malagasy\",\"Malay\",\"Malayalam\",\"Maltese\",\"Māori\",\"Marathi (Marāṭhī)\",\"Marshallese\",\"Mongolian\",\"Nauru\",\"Navajo, Navaho\",\"Norwegian Bokmål\",\"North Ndebele\",\"Nepali\",\"Ndonga\",\"Norwegian Nynorsk\",\"Norwegian\",\"Nuosu\",\"South Ndebele\",\"Occitan\",\"Ojibwe, Ojibwa\",\"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic\",\"Oromo\",\"Oriya\",\"Ossetian, Ossetic\",\"Panjabi, Punjabi\",\"Pāli\",\"Persian\",\"Polish\",\"Pashto, Pushto\",\"Portuguese\",\"Quechua\",\"Romansh\",\"Kirundi\",\"Romanian, Moldavian, Moldovan\",\"Russian\",\"Sanskrit (Saṁskṛta)\",\"Sardinian\",\"Sindhi\",\"Northern Sami\",\"Samoan\",\"Sango\",\"Serbian\",\"Scottish Gaelic; Gaelic\",\"Shona\",\"Sinhala, Sinhalese\",\"Slovak\",\"Slovene\",\"Somali\",\"Southern Sotho\",\"Spanish; Castilian\",\"Sundanese\",\"Swahili\",\"Swati\",\"Swedish\",\"Tamil\",\"Telugu\",\"Tajik\",\"Thai\",\"Tigrinya\",\"Tibetan Standard, Tibetan, Central\",\"Turkmen\",\"Tagalog\",\"Tswana\",\"Tonga (Tonga Islands)\",\"Turkish\",\"Tsonga\",\"Tatar\",\"Twi\",\"Tahitian\",\"Uighur, Uyghur\",\"Ukrainian\",\"Urdu\",\"Uzbek\",\"Venda\",\"Vietnamese\",\"Volapük\",\"Walloon\",\"Welsh\",\"Wolof\",\"Western Frisian\",\"Xhosa\",\"Yiddish\",\"Yoruba\",\"Zhuang, Chuang\"]}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/nikhilsv/ak-projects/hexchat/code/angular_firebase/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
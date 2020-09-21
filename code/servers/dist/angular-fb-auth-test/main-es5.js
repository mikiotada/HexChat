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


    var _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/routing/app-routing.module */
    "./src/app/shared/routing/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/signin/signin.component */
    "./src/app/components/signin/signin.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/preference/preference.component */
    "./src/app/components/preference/preference.component.ts");
    /* harmony import */


    var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/rating/rating.component */
    "./src/app/components/rating/rating.component.ts");
    /* harmony import */


    var _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/chat-list/chat-list.component */
    "./src/app/components/chat-list/chat-list.component.ts");
    /* harmony import */


    var _components_chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/chat-msgs/chat-msgs.component */
    "./src/app/components/chat-msgs/chat-msgs.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_front_front_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/front/front.component */
    "./src/app/components/front/front.component.ts"); // routing
    // Firebase services + environment module
    // Auth service
    // Components that we created


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_14__["PreferenceComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"], _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__["RatingComponent"], _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_16__["ChatListComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _components_chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_17__["ChatMsgsComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"], _components_front_front_component__WEBPACK_IMPORTED_MODULE_19__["FrontComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_14__["PreferenceComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"], _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__["RatingComponent"], _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_16__["ChatListComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _components_chat_msgs_chat_msgs_component__WEBPACK_IMPORTED_MODULE_17__["ChatMsgsComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"], _components_front_front_component__WEBPACK_IMPORTED_MODULE_19__["FrontComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]],
          providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

    function ChatListComponent_tr_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/chats/", chat_r32.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ChatId: ", chat_r32.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number of messages: ", chat_r32.messages.length, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("uid: ", chat_r32.uid, "");
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

        this.showChat = function () {
          console.log();
          this.router.navigate(['chats/:id'], {
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
      decls: 6,
      vars: 3,
      consts: [["rel", "stylesheet", "href", "https://fonts.googleapis.com/icon?family=Material+Icons"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "material-icons"], ["scope", "col"], [2, "font-weight", "bold", "font-size", "125%"], [3, "routerLink"]],
      template: function ChatListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatListComponent_tr_4_Template, 12, 4, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.userChats$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".avatar[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"]
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ChatComponent_ng_container_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", msg_r15.user == null ? null : msg_r15.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r15.user == null ? null : msg_r15.user.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r15.user == null ? null : msg_r15.user.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r15.content);
      }
    }

    function ChatComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_ng_container_0_div_5_Template, 9, 4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_ng_container_0_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.newMsg = $event;
        })("keydown.enter", function ChatComponent_ng_container_0_Template_input_keydown_enter_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var chat_r13 = ctx.ngIf;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.submit(chat_r13.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_0_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var chat_r13 = ctx.ngIf;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.submit(chat_r13.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var chat_r13 = ctx.ngIf;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" https://firestore-megachat.firebaseapp.com/chats/", chat_r13.id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", chat_r13.messages)("ngForTrackBy", ctx_r12.trackByCreated);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.newMsg);
      }
    }

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(cs, route, authService) {
        _classCallCheck(this, ChatComponent);

        this.cs = cs;
        this.route = route;
        this.authService = authService;
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var chatId = this.route.snapshot.paramMap.get('id');
          var source = this.cs.get(chatId);
          this.chat$ = this.cs.joinUsers(source);
          this.scrollBottom();
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
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "top"], [1, "chat"], ["class", "msg", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "form"], [3, "ngModel", "ngModelChange", "keydown.enter"], [3, "click"], [1, "msg"], [1, "user"], [3, "src"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatComponent_ng_container_0_Template, 10, 4, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.chat$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".chat[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 70px auto 100px;\n  width: 100%;\n}\n\n.msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-left: auto;\n  order: 2;\n  text-align: left;\n  border-bottom: 1px solid #e9e9e9;\n  padding: 10px;\n  width: 90vw;\n  font-size: 1.3em;\n  -webkit-animation-delay: 0ms;\n          animation-delay: 0ms;\n  -webkit-animation-duration: 600ms;\n          animation-duration: 600ms;\n\n  .user {\n    margin-right: 10px;\n    min-width: 100px;\n    border-right: 1px solid #e9e9e9;\n  }\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  padding: 20px 10vw;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.top[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70px;\n  padding: 20px 10vw;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixpQ0FBeUI7VUFBekIseUJBQXlCOztFQUV6QjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsK0JBQStCO0VBQ2pDO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNzBweCBhdXRvIDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1zZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgb3JkZXI6IDI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTB2dztcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwbXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG5cbiAgLnVzZXIge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIH1cbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTB2dztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4udG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTB2dztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB6LWluZGV4OiA5OTtcbn0iXX0= */"]
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
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
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
        var chat_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/chats/", chat_r25.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", chat_r25.id, " - ", chat_r25.messages.length, " Messages ");
      }
    }

    function FrontComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.authService.SignOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrontComponent_div_3_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.cs.create();
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
        var user_r23 = ctx.ngIf;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r23.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r23.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r23.uid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 4, ctx_r20.userChats$));
      }
    }

    function FrontComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrontComponent_ng_template_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.authService.FacebookAuth();
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
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.authService.user$))("ngIfElse", _r21);
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
      decls: 16,
      vars: 0,
      consts: [["id", "home", 1, "bgimg-1", "w3-grayscale-min"], ["id", "submissionlogin"], [1, "buttonlogin"], ["routerLink", "/signin", "type", "submit"], [1, "w3-display-left", "w3-text-white", 2, "padding", "130px"], [1, "firstsentecne"], [1, "secondsentecne"], ["id", "submissionsignup"], [1, "buttonsignup"], ["routerLink", "/join", "type", "submit"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".buttonsignup[_ngcontent-%COMP%]{\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 15px;\n  margin: 4px 4px;\n  cursor: pointer;\n  background-color: #4000FF;\n  border-radius: 20px;\n  width: 220px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.buttonlogin[_ngcontent-%COMP%]{\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 15px;\n  margin: 4px 4px;\n  cursor: pointer;\n  background-color: #FAFAFA;\n  color: #4000FF;\n  border-radius: 10px;\n  width: 150px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.firstsentecne[_ngcontent-%COMP%]{\n  font-size: 80px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.secondsentecne[_ngcontent-%COMP%]{\n  font-size: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n#submissionsignup[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#submissionlogin[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 0px 100px 0px;\n  margin-top : 25px;\n}\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  height: 100%;\n  line-height: 1.8;\n}\n\n.bgimg-1[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.pinimg.com/originals/10/18/82/10188295afc41a318ec41ab958ec38b3.jpg\");\n  background-position: center;\n  background-size: cover;\n  min-height: 100%;\n}\n#home[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.pinimg.com/originals/10/18/82/10188295afc41a318ec41ab958ec38b3.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QztBQUMzQztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUdBLDZCQUE2QjtBQUM3QjtFQUNFLHFHQUFxRztFQUNyRywyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUdBQXFHO0FBQ3ZHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zaWdudXB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA0cHggNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDAwRkY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAyMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4uYnV0dG9ubG9naW57XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA0cHggNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIGNvbG9yOiAjNDAwMEZGO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLmZpcnN0c2VudGVjbmV7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4uc2Vjb25kc2VudGVjbmV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4jc3VibWlzc2lvbnNpZ251cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzdWJtaXNzaW9ubG9naW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAwcHggMTAwcHggMHB4O1xuICBtYXJnaW4tdG9wIDogMjVweDtcbn1cblxuYm9keSwgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxuXG4vKiBGdWxsIGhlaWdodCBpbWFnZSBoZWFkZXIgKi9cbi5iZ2ltZy0xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzEwLzE4LzgyLzEwMTg4Mjk1YWZjNDFhMzE4ZWM0MWFiOTU4ZWMzOGIzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4jaG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8xMC8xOC84Mi8xMDE4ODI5NWFmYzQxYTMxOGVjNDFhYjk1OGVjMzhiMy5qcGdcIik7XG59XG5cblxuIl19 */"]
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

    function PreferenceComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var user_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r1.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r1.photoURL ? user_r1.photoURL : "/assets/dummy-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.displayName ? user_r1.displayName : "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.uid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
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
          this.router.navigate(['profile'], {
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
      decls: 14,
      vars: 3,
      consts: [[1, "split", "left"], ["class", "row", 4, "ngIf"], ["routerLink", "/preference", "routerLinkActive", "active", "type", "button", 1, "btn", "btn-primary", "btn-block"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "text-center", 2, "position", "absolute", "bottom", "5%", "right", "40%"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 2, "margin-top", "auto", 3, "click"], [1, "split", "right"], [1, "centered"], [1, "row"], [1, "col-md-12"], [1, "media"], ["routerLink", "/home"], [1, "align-self-start", "mr-5", "img-thumbnail", "rounded-circle", 3, "alt", "src"], [1, "media-body"]],
      template: function PreferenceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreferenceComponent_div_1_Template, 18, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go back to preferences ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferenceComponent_Template_button_click_5_listener() {
            return ctx.profileBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-chat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferenceComponent_Template_button_click_9_listener() {
            return ctx.authService.SignOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Log out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.authService.user$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_4__["ChatListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".split[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 50%;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    overflow-x: hidden;\n    padding-top: 20px;\n  }\n\n  \n\n  .left[_ngcontent-%COMP%] {\n    left: 0;\n    background-color: #E0E0E0;\n    width: 30%;\n  }\n\n  \n\n  .right[_ngcontent-%COMP%] {\n    right: 0;\n    \n    width: 70%;\n  }\n\n  \n\n  .centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    right: 20%;\n    \n    \n  }\n\n  .msgs[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    left: 5%;\n    right: 5%;\n    \n    \n  }\n\n  \n\n  .centered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    border-radius: 50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlL3ByZWZlcmVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQSwwQkFBMEI7O0VBQzFCO0lBQ0UsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUEsMkJBQTJCOztFQUMzQjtJQUNFLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVBLGlFQUFpRTs7RUFDakU7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtFQUN4Qjs7RUFFRTtJQUNBLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsc0JBQXNCO0VBQ3hCOztFQUVBLDZEQUE2RDs7RUFDN0Q7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlL3ByZWZlcmVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxpdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC8qIENvbnRyb2wgdGhlIGxlZnQgc2lkZSAqL1xuICAubGVmdCB7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cblxuICAvKiBDb250cm9sIHRoZSByaWdodCBzaWRlICovXG4gIC5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Ki9cbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLyogSWYgeW91IHdhbnQgdGhlIGNvbnRlbnQgY2VudGVyZWQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5ICovXG4gIC5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICByaWdodDogMjAlO1xuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cbiAgICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xuICB9XG5cbiAgICAubXNncyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDUlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG4gICAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbiAgfVxuXG4gIC8qIFN0eWxlIHRoZSBpbWFnZSBpbnNpZGUgdGhlIGNlbnRlcmVkIGNvbnRhaW5lciwgaWYgbmVlZGVkICovXG4gIC5jZW50ZXJlZCBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH0iXX0= */"]
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
        var user_r11 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r11.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r11.photoURL ? user_r11.photoURL : "/assets/dummy-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RatingComponent_p_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data submitted successfully!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RatingComponent = /*#__PURE__*/function () {
      function RatingComponent() {
        _classCallCheck(this, RatingComponent);

        this.currentRate1 = 3;
        this.currentRate2 = 3;
        this.currentRate3 = 3;
        this.showSuccessMsg = false;
      }

      _createClass(RatingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RatingComponent;
    }();

    RatingComponent.ɵfac = function RatingComponent_Factory(t) {
      return new (t || RatingComponent)();
    };

    RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RatingComponent,
      selectors: [["app-rating"]],
      decls: 69,
      vars: 4,
      consts: [[2, "width", "100%"], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "demo", 4, "ngIf"], ["id", "demo"]],
      template: function RatingComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_17_listener() {
            ctx.currentRate1 = 1;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_19_listener() {
            ctx.currentRate1 = 2;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_21_listener() {
            ctx.currentRate1 = 3;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_23_listener() {
            ctx.currentRate1 = 4;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_25_listener() {
            ctx.currentRate1 = 5;
            return ctx.showSuccessMsg = false;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_35_listener() {
            ctx.currentRate2 = 1;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_37_listener() {
            ctx.currentRate2 = 2;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_39_listener() {
            ctx.currentRate2 = 3;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_41_listener() {
            ctx.currentRate2 = 4;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_43_listener() {
            ctx.currentRate2 = 5;
            return ctx.showSuccessMsg = false;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_53_listener() {
            ctx.currentRate3 = 1;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_55_listener() {
            ctx.currentRate3 = 2;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_57_listener() {
            ctx.currentRate3 = 3;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_59_listener() {
            ctx.currentRate3 = 4;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_61_listener() {
            ctx.currentRate3 = 5;
            return ctx.showSuccessMsg = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_65_listener() {
            return ctx.showSuccessMsg = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, RatingComponent_p_68_Template, 2, 0, "p", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSuccessMsg == true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".star[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n      font-size: 3rem;\n      color: #d3d3d3;\n    }\n    .full[_ngcontent-%COMP%] {\n      color: red;\n    }\n    .half[_ngcontent-%COMP%] {\n      position: absolute;\n      display: inline-block;\n      \n      color: red;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSxrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsb0JBQW9CO01BQ3BCLFVBQVU7SUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgY29sb3I6ICNkM2QzZDM7XG4gICAgfVxuICAgIC5mdWxsIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICAgIC5oYWxmIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rating',
          templateUrl: './rating.component.html',
          styleUrls: ['./rating.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signin/signin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signin/signin.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppComponentsSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
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
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 22,
      vars: 0,
      consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "formGroup"], ["type", "text", "placeholder", "Enter Email", "required", "", 1, "formControl"], ["userEmail", ""], ["type", "password", "placeholder", "Enter Password", "required", "", 1, "formControl"], ["userPassword", ""], ["type", "button", "value", "Log in", 1, "btn", "btnPrimary", 3, "click"], ["type", "button", 1, "buttonfb", 3, "click"], [1, "fab", "fa-facebook-plus-g"], [1, "redirectToLogin"], ["routerLink", "/join", 1, "redirect"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_input_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.authService.SignIn(_r2.value, _r3.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_14_listener() {
            return ctx.authService.FacebookAuth();
          });

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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".displayTable[_ngcontent-%COMP%]{\n  padding: 15px 30px;\n}\n\n.buttonfb[_ngcontent-%COMP%]{\n    border: none;\n    color: white;\n    padding: 15px 30px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 15px;\n    margin: 4px 4px;\n    cursor: pointer;\n    background-color: #4000FF;\n    border-radius: 15px;\n    width: 240px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5Q0FBeUM7RUFDM0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5VGFibGV7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbn1cblxuLmJ1dHRvbmZie1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDRweCA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDAwRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIH0iXX0= */"]
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
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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
      decls: 29,
      vars: 0,
      consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "formGroup"], ["type", "email", "placeholder", "Enter Email Address", "required", "", 1, "formControl"], ["userEmail", ""], ["type", "password", "placeholder", "Enter Password", "required", "", 1, "formControl"], ["userPwd", ""], ["type", "text", "placeholder", "Enter User name", "required", "", 1, "formControl"], ["displayName", ""], ["type", "button", "value", "Sign Up", 1, "btn", "btnPrimary", 3, "click"], [1, "or"], [1, "orInner"], ["type", "button", 1, "buttonfb", 3, "click"], [1, "fab", "fa-facebook-plus-g"], [1, "redirectToLogin"], ["type", "button", "routerLink", "/signin", 1, "login"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_input_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.authService.SignUp(_r5.value, _r6.value);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_21_listener() {
            return ctx.authService.FacebookAuth();
          });

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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".displayTable[_ngcontent-%COMP%]{\n    padding: 15px 30px;\n\n}\n\n\n.buttonfb[_ngcontent-%COMP%]{\n    border: none;\n    color: white;\n    padding: 15px 30px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 15px;\n    margin: 4px 4px;\n    cursor: pointer;\n    background-color: #4000FF;\n    border-radius: 15px;\n    width: 240px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n\n.singup[_ngcontent-%COMP%]{\n    font-size: 20px;\n    padding: 15px 0px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n\n.redirectToLogin[_ngcontent-%COMP%]{\n    padding: 15px 0px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0FBRXRCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlDQUF5QztFQUMzQzs7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlDQUF5QztFQUMzQzs7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5VGFibGV7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuXG59XG5cblxuLmJ1dHRvbmZie1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDRweCA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDAwRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuc2luZ3Vwe1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5yZWRpcmVjdFRvTG9naW57XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
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
          var _this = this;

          return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            return !!user;
          }), // <-- map to boolean
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (loggedIn) {
            if (!loggedIn) {
              console.log('access denied');

              _this.router.navigate(['/']);
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


    var _components_front_front_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/front/front.component */
    "./src/app/components/front/front.component.ts");
    /* harmony import */


    var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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
    }, // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {
      path: 'front',
      component: _components_front_front_component__WEBPACK_IMPORTED_MODULE_9__["FrontComponent"]
    }, {
      path: 'chats/:id',
      component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
      canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: 'preference',
      component: _components_preference_preference_component__WEBPACK_IMPORTED_MODULE_3__["PreferenceComponent"],
      canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      children: [{
        path: '',
        component: _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"]
      }, {
        path: 'chats/:id',
        component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"]
      }, {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
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
        var _this2 = this;

        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.ngZone = ngZone;
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
          if (user) {
            return _this2.afs.doc("users/".concat(user.uid)).valueChanges();
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var response, token;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password);

                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.user.getIdToken();

                  case 5:
                    token = _context.sent;
                    console.log('THIS IS RESPONSE', response);
                    console.log('THIS IS TOKEN', token);
                    this.router.navigate(['preference']);
                    console.log('finish login and route to preference');
                    this.SetUserData(response.user);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var response, token;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password);

                  case 2:
                    response = _context2.sent;
                    _context2.next = 5;
                    return response.user.getIdToken();

                  case 5:
                    token = _context2.sent;
                    console.log('THIS IS RESPONSE', response);
                    console.log('THIS IS TOKEN', token);
                    this.router.navigate(['preference']);
                    console.log('finish login and route to preference');
                    this.SetUserData(response.user);

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Sign in with Facebook

      }, {
        key: "FacebookAuth",
        value: function FacebookAuth() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var provider, credential;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // return new auth.FacebookAuthProvider();
                    provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
                    _context3.next = 3;
                    return this.afAuth.signInWithPopup(provider);

                  case 3:
                    credential = _context3.sent;
                    this.router.navigate(['preference']);
                    return _context3.abrupt("return", this.SetUserData(credential.user));

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
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
            emailVerified: user.emailVerified
          };
          return userRef.set(userData, {
            merge: true
          });
        }
      }, {
        key: "SignOut",
        value: function SignOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.afAuth.signOut();

                  case 2:
                    return _context4.abrupt("return", this.router.navigate(['']));

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
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
        key: "getUserChats",
        value: function getUserChats() {
          var _this3 = this;

          return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            return _this3.afs.collection('chats', function (ref) {
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _yield$this$auth$getU, uid, data, docRef;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.auth.getUser();

                  case 2:
                    _yield$this$auth$getU = _context5.sent;
                    uid = _yield$this$auth$getU.uid;
                    data = {
                      uid: uid,
                      createdAt: Date.now(),
                      count: 0,
                      messages: []
                    };
                    _context5.next = 7;
                    return this.afs.collection('chats').add(data);

                  case 7:
                    docRef = _context5.sent;
                    return _context5.abrupt("return", this.router.navigate(['chats', docRef.id]));

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(chatId, content) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _yield$this$auth$getU2, uid, data, ref;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.auth.getUser();

                  case 2:
                    _yield$this$auth$getU2 = _context6.sent;
                    uid = _yield$this$auth$getU2.uid;
                    data = {
                      uid: uid,
                      content: content,
                      createdAt: Date.now()
                    };

                    if (!uid) {
                      _context6.next = 8;
                      break;
                    }

                    ref = this.afs.collection('chats').doc(chatId);
                    return _context6.abrupt("return", ref.update({
                      messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(data)
                    }));

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(chat, msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _yield$this$auth$getU3, uid, ref;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.auth.getUser();

                  case 2:
                    _yield$this$auth$getU3 = _context7.sent;
                    uid = _yield$this$auth$getU3.uid;
                    ref = this.afs.collection('chats').doc(chat.id);
                    console.log(msg);

                    if (!(chat.uid === uid || msg.uid === uid)) {
                      _context7.next = 9;
                      break;
                    }

                    // Allowed to delete
                    delete msg.user;
                    return _context7.abrupt("return", ref.update({
                      messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(msg)
                    }));

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "joinUsers",
        value: function joinUsers(chat$) {
          var _this4 = this;

          var chat;
          var joinKeys = {};
          return chat$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (c) {
            // Unique User IDs
            chat = c;
            var uids = Array.from(new Set(c.messages.map(function (v) {
              return v.uid;
            }))); // Firestore User Doc Reads

            var userDocs = uids.map(function (u) {
              return _this4.afs.doc("users/".concat(u)).valueChanges();
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
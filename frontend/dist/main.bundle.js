webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack:stretch;\r\n      align-content:stretch;\r\n  min-height: 100vh;\r\n}\r\n.header{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.header__title{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.header__name{\r\n  margin: 0;\r\n  font-size: 1.5em;\r\n  text-transform: uppercase;\r\n}\r\n.header__box{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n  padding: .7em 0;\r\n}\r\n.header__box .col:last-child{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.header__name a{\r\n  text-decoration: none;\r\n}\r\n.main{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header row card-panel light-blue darken-3 waves-effect waves-light\">\n  <div class=\"container header__box\">\n    <div class=\"col s8 offset-s2 l6 offset-l3 header__title\">\n      <h1 class=\"header__name\"><a class=\"white-text\" routerLink=\"/\">{{'Main.Title' | translate}}</a></h1>\n      <!--<h6 class=\"header__description white-text\" (click)=\"logout()\">from ruby garage</h6>-->\n    </div>\n    <div class=\"col s2 l3\">\n      <i class=\"material-icons\" (click)=\"logout()\">person</i>\n    </div>\n  </div>\n</header>\n<main class=\"main\">\n  <router-outlet></router-outlet>\n</main>\n<footer class=\"footer page-footer darken-3 waves-effect waves-light\">\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n    &copy; {{'Main.Description' | translate}}\n    <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(loginService, router, translate) {
        this.loginService = loginService;
        this.router = router;
        this.translate = translate;
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout().then(function (data) {
            _this.router.navigate(['']);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_page_register_page_component__ = __webpack_require__("../../../../../src/app/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_firebase_config__ = __webpack_require__("../../../../../src/app/shared/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_routes__ = __webpack_require__("../../../../../src/app/shared/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__project_page_project_page_component__ = __webpack_require__("../../../../../src/app/project-page/project-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__todo_project_todo_project_component__ = __webpack_require__("../../../../../src/app/todo-project/todo-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__todo_form_todo_form_component__ = __webpack_require__("../../../../../src/app/todo-form/todo-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__todo_projects_form_todo_projects_form_component__ = __webpack_require__("../../../../../src/app/todo-projects-form/todo-projects-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__todo_task_todo_task_component__ = __webpack_require__("../../../../../src/app/todo-task/todo-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__todo_project_header_todo_project_header_component__ = __webpack_require__("../../../../../src/app/todo-project-header/todo-project-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_translateLoader__ = __webpack_require__("../../../../../src/app/shared/translateLoader.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__register_page_register_page_component__["a" /* RegisterPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__project_page_project_page_component__["a" /* ProjectPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__todo_project_todo_project_component__["a" /* TodoProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_20__todo_form_todo_form_component__["a" /* TodoFormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__todo_projects_form_todo_projects_form_component__["a" /* TodoProjectsFormComponent */],
            __WEBPACK_IMPORTED_MODULE_22__todo_task_todo_task_component__["a" /* TodoTaskComponent */],
            __WEBPACK_IMPORTED_MODULE_23__todo_project_header_todo_project_header_component__["a" /* TodoProjectHeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__shared_firebase_config__["a" /* firebaseConfig */].firebase), __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__shared_routes__["a" /* appRouter */]), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (__WEBPACK_IMPORTED_MODULE_24__shared_translateLoader__["a" /* createTranslateLoader */]),
                    deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]]
                }
            }), __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_10__shared_login_service__["a" /* LoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-item-align: stretch;\r\n      align-self: stretch;\r\n}\r\n.main__box{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.form{\r\n  width: 100%;\r\n}\r\n.main__btn{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center\r\n}\r\n.main__btn .btn{\r\n  margin: 0 1em;\r\n}\r\n.main__login{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: .5em 0;\r\n}\r\n.main__login .btn{\r\n  width: 200px;\r\n  margin: 0 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main__box\">\n    <h4 class=\"col s12 main__title\">\n      Login Page\n    </h4>\n    <form class=\"col s12 form\" #myForm=\"ngForm\" novalidate (ngSubmit)=\"loginWithEmailAndPassword(email, password)\">\n      <div class=\"row\">\n        <div class=\"input-field col s10 offset-s1 l6 offset-l3\">\n          <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" required name=\"email\" class=\"validate\">\n          <label for=\"email\" data-error=\"wrong\" data-success=\"right\">Email</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s10 offset-s1 l6 offset-l3\">\n          <input id=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\" required name=\"password\">\n          <label for=\"password\">Password</label>\n        </div>\n      </div>\n      <div class=\"row main__btn\">\n         <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" [disabled]=\"myForm.invalid || password.length<6\">Sign\n          <i class=\"material-icons right\">send</i>\n        </button>\n        <a routerLink=\"/register\" class=\"btn waves-effect waves-light register__btn light-green darken-3\">Register\n        <i class=\"material-icons right\">send</i>\n        </a>\n      </div>\n    </form>\n    <h5 class=\"col s12 main__title\">\n      Another type\n    </h5>\n    <div class=\"col col s10 offset-s1 l6 offset-l3 main__login\">\n      <button class=\"btn waves-effect waves-light light-blue darken-3\" type=\"submit\" name=\"action\" (click)=\"loginFacebook()\">Facebook\n        <i class=\"material-icons right\">send</i>\n      </button>\n      <button class=\"btn waves-effect waves-light red darken-3\" type=\"submit\" name=\"action\" (click)=\"loginGoogle()\">Google+\n        <i class=\"material-icons right\">send</i>\n      </button>\n    </div>\n    <div class=\"col col s10 offset-s1 l6 offset-l3 main__login\">\n      <button class=\"btn waves-effect waves-light grey darken-3\" type=\"submit\" name=\"action\" (click)=\"loginGithub()\">Github\n        <i class=\"material-icons right\">send</i>\n      </button>\n      <button class=\"btn waves-effect waves-light blue darken-3\" type=\"submit\" name=\"action\" (click)=\"loginTwitter()\">Twitter\n        <i class=\"material-icons right\">send</i>\n      </button>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = (function () {
    function LoginPageComponent(dataService, loginService, router) {
        this.dataService = dataService;
        this.loginService = loginService;
        this.router = router;
        this.email = "";
        this.password = '';
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.initUser().subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
            if (_this.user !== null) {
                _this.navToProjects();
            }
        });
    };
    LoginPageComponent.prototype.loginGoogle = function () {
        this.loginService.loginGoogle();
    };
    LoginPageComponent.prototype.loginFacebook = function () {
        this.loginService.loginFacebook();
    };
    LoginPageComponent.prototype.loginTwitter = function () {
        this.loginService.loginTwitter();
    };
    LoginPageComponent.prototype.loginGithub = function () {
        this.loginService.loginGithub();
    };
    LoginPageComponent.prototype.loginWithEmailAndPassword = function (mail, pass) {
        this.loginService.loginEmailAndPassword(mail, pass);
    };
    LoginPageComponent.prototype.navToProjects = function () {
        this.router.navigate(['projects']);
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginPageComponent);

var _a, _b, _c;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-page/project-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  /*align-items: flex-start;*/\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-item-align: stretch;\r\n      align-self: stretch;\r\n  width: 100%;\r\n  margin-bottom: 1.5em;\r\n}\r\ntodo-project{\r\n  width: 80%;\r\n  height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-page/project-page.component.html":
/***/ (function(module, exports) {

module.exports = "<todo-project [(projects)]=\"projects\"></todo-project>\n<todo-form [projects]=\"projects\" [user]=\"user\"></todo-form>"

/***/ }),

/***/ "../../../../../src/app/project-page/project-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectPageComponent = (function () {
    function ProjectPageComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.projects = [];
    }
    ProjectPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.initUser().subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
            if (!_this.user) {
                return _this.router.navigate(['/']);
            }
            _this.dataService.getProjects(_this.user).subscribe(function (data) { return _this.projects = data; }, function (err) { return console.log(err); });
        });
    };
    return ProjectPageComponent;
}());
ProjectPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-project-page',
        template: __webpack_require__("../../../../../src/app/project-page/project-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-page/project-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjectPageComponent);

var _a, _b;
//# sourceMappingURL=project-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/register-page/register-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  width: 100%;\r\n  -ms-flex-item-align: stretch;\r\n      -ms-grid-row-align: stretch;\r\n      align-self: stretch;\r\n}\r\n.main__box, .main__btn{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.main__box{\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.main__box > *{\r\n  width: 100%;\r\n}\r\n.main__title{\r\n  text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-page/register-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main__box\">\n    <h4 class=\"col s12 main__title\">\n      Register\n    </h4>\n    <form class=\"col s12 form\" #myForm=\"ngForm\" novalidate (ngSubmit)=\"loginForm(fullName,email, password)\" enctype=\"multipart/form-data\">\n      <div class=\"row\">\n        <div class=\"input-field col col s12 l6 offset-l3\">\n          <input id=\"fullname\" type=\"text\" [(ngModel)]=\"fullName\" required name=\"fullname\" class=\"validate\">\n          <label for=\"fullname\" data-error=\"wrong\" data-success=\"right\">Full Name</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col col s12 l6 offset-l3\">\n          <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" required name=\"email\" class=\"validate\">\n          <label for=\"email\" data-error=\"wrong\" data-success=\"right\">Email</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col col s12 l6 offset-l3\">\n          <input id=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\" required name=\"password\">\n          <label for=\"password\">Password</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col col s12 l6 offset-l3\">\n          <input id=\"repeatPassword\" type=\"password\" class=\"validate\" [(ngModel)]=\"repeatPassword\" required name=\"repeatPassword\" >\n          <label for=\"repeatPassword\">Repeat Your Password</label>\n        </div>\n      </div>\n      <div class=\"row main__btn\">\n         <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" [disabled]=\"password !== repeatPassword || myForm.invalid\">Send\n          <i class=\"material-icons right\">send</i>\n        </button>\n      </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register-page/register-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPageComponent = (function () {
    function RegisterPageComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.fullName = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent.prototype.loginForm = function (name, mail, pass) {
        var _this = this;
        this.loginService.registerUser(name, mail, pass).then(function (data) {
            _this.fullName = "";
            _this.email = "";
            _this.password = "";
            _this.repeatPassword = "";
            _this.router.navigate(['']);
        }).catch(function (err) { return console.log("Error: " + err); });
    };
    return RegisterPageComponent;
}());
RegisterPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-register-page',
        template: __webpack_require__("../../../../../src/app/register-page/register-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register-page/register-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterPageComponent);

var _a, _b;
//# sourceMappingURL=register-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return myAnim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formAnim; });

// export const myAnim = trigger('myAnim', [
//       transition('* => *', [
//         query(':enter', style({ opacity: 0 }), {optional: true}),
//         query(':enter', stagger('300ms', [
//           animate('1s ease-in', keyframes([
//             style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
//             style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
//             style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
//           ]))]), {optional: true})
//       ])
//     ])
var myAnim = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('myAnim', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])(500)
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))
    ])
]);
var formAnim = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('formAnim', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])(500)
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }))
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(afAuth, http) {
        this.afAuth = afAuth;
        this.http = http;
        // items: BehaviorSubject<Project[]>;
        this.url = 'http://localhost:7000/';
        this.user = this.afAuth.authState;
        // this.user.subscribe(data=>this.postRegister(data).subscribe(data=>{
        //   console.log(data);
        // })
        // );
    }
    DataService.prototype.initUser = function () {
        return this.user;
    };
    DataService.prototype.getProjects = function (userObj) {
        // return this.items;
        // this.items.
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.items = this.http.get(this.url + 'api/' + userObj.uid, { headers: headers }).map(this.parseData);
    };
    DataService.prototype.initit = function (userObj) {
        // let headers = new Headers();
        // this.createAuthorizationHeader(headers);
        // this.items = new Observable((observer)=>{
        // })
        // return this.items = this.http.get(this.url+'api/'+userObj.uid, {headers: headers}).map(this.parseData);
    };
    DataService.prototype.createAuthorizationHeader = function (headers) {
        headers.append("Content-Type", "application/json");
    };
    DataService.prototype.parseData = function (res) {
        var data = res.json();
        return data || [];
    };
    DataService.prototype.removeTask = function (project, task, person) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var fullUrl = this.url + 'api/' + person.uid + '/project/' + project + '/task/' + task;
        return this.http.delete(fullUrl, { headers: headers });
    };
    DataService.prototype.toggleTask = function (project, task, person) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var fullUrl = this.url + 'api/toggle';
        var body = { "status": !task.done, name: person.uid, project: project, task: task };
        return this.http.put(fullUrl, body, { headers: headers });
    };
    DataService.prototype.rewriteTask = function (project, task, newTitle, person) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var fullUrl = this.url + 'api/task/update';
        var body = JSON.stringify({ 'task': newTitle, 'name': person.uid, 'project': project.title, 'taskName': task.text });
        return this.http.put(fullUrl, body, { headers: headers });
    };
    DataService.prototype.addTask = function (titleTask, project, person) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var fullUrl = this.url + 'api/task';
        var body = JSON.stringify({ 'task': titleTask, 'name': person.uid, 'project': project.title });
        return this.http.post(fullUrl, body, { headers: headers });
    };
    DataService.prototype.rewriteProject = function (person, project, newTitle) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var fullUrl = this.url + 'api/project/update';
        console.log(person);
        var body = JSON.stringify({
            'project': newTitle,
            'name': person.uid,
            'projectName': project.title
        });
        return this.http.put(fullUrl, body, { headers: headers });
    };
    DataService.prototype.removeProject = function (person, project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var fullUrl = this.url + 'api/' + person.uid + '/project/' + project.title;
        return this.http.delete(fullUrl, { headers: headers });
    };
    DataService.prototype.createProject = function (title, person) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var fullUrl = this.url + 'api/project';
        var body = JSON.stringify({
            'name': person.uid,
            'project': title
        });
        return this.http.post(fullUrl, body, { headers: headers });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCyvYmSGJrxYGR_Ir4AIEGdK1bIQOa7mGg",
        authDomain: "angulartodo-c00ed.firebaseapp.com",
        databaseURL: "https://angulartodo-c00ed.firebaseio.com",
        projectId: "angulartodo-c00ed",
        storageBucket: "",
        messagingSenderId: "405962863586"
    }
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(afAuth, http) {
        this.afAuth = afAuth;
        this.http = http;
    }
    LoginService.prototype.registerUser = function (name, email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (user) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.updateProfile({ displayName: name, photoURL: '' });
        }).catch(function (err) { return _this.handleError(err); });
    };
    LoginService.prototype.loginGoogle = function () {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider()).then(function (data) {
            console.log(data);
        }).catch(function (err) { return _this.handleError(err); });
    };
    LoginService.prototype.loginGithub = function () {
        var _this = this;
        var githubUser = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GithubAuthProvider();
        githubUser.addScope('repo');
        return this.afAuth.auth.signInWithPopup(githubUser).then(function (data) {
            console.log(data);
        }).catch(function (err) { return _this.handleError(err); });
    };
    LoginService.prototype.loginFacebook = function () {
        var _this = this;
        var facebookUser = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider();
        facebookUser.addScope('user_birthday');
        return this.afAuth.auth.signInWithPopup(facebookUser).then(function (data) {
            console.log(data);
        }).catch(function (err) { return _this.handleError(err); });
    };
    LoginService.prototype.loginTwitter = function () {
        var _this = this;
        var twitterUser = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider();
        twitterUser.setCustomParameters({
            lang: 'ru'
        });
        return this.afAuth.auth.signInWithPopup(twitterUser).then(function (data) {
            console.log(data);
        }, function (err) { return _this.handleError(err); });
        ;
    };
    LoginService.prototype.loginEmailAndPassword = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (data) {
            console.log(data);
        }).catch(function (err) { return _this.handleError(err); });
    };
    LoginService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    LoginService.prototype.handleError = function (err) {
        console.log(err.name, err.message);
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/project.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=project.js.map

/***/ }),

/***/ "../../../../../src/app/shared/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_page_register_page_component__ = __webpack_require__("../../../../../src/app/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_page_project_page_component__ = __webpack_require__("../../../../../src/app/project-page/project-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouter; });



var appRouter = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__register_page_register_page_component__["a" /* RegisterPageComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_2__project_page_project_page_component__["a" /* ProjectPageComponent */] }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/task.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=task.js.map

/***/ }),

/***/ "../../../../../src/app/shared/translateLoader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = createTranslateLoader;

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//# sourceMappingURL=translateLoader.js.map

/***/ }),

/***/ "../../../../../src/app/todo-form/todo-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".foot{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.foot__add{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  /*font-weight: bold;\r\n  background: #416ce2;\r\n  border: none;\r\n  font-size: 1.2em;\r\n  padding: .35em .45em .35em 0;\r\n  color: white;\r\n  cursor: pointer;\r\n  border-radius: .15em;\r\n  transition: all .3s ease;*/\r\n}\r\n.footer__add:hover, .footer__add:focus{\r\n  outline: none;\r\n  background: steelblue;\r\n}\r\n.footer__form{\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 100;\r\n  background: rgba(0,0,0,.5);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-transform: translateY(-100%);\r\n          transform: translateY(-100%);\r\n  transition: all .5s ease;\r\n}\r\n.action{\r\n  -webkit-transform: translateY(0%);\r\n          transform: translateY(0%);\r\n}\r\n.form__action{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n  -ms-flex-line-pack: stretch;\r\n      align-content: stretch;\r\n  font-size: 1.2em;\r\n  min-width: 40vw;\r\n  max-width: 90vw;\r\n}\r\n.footer__form .clear{\r\n  position: absolute;\r\n  font-size: 2em;\r\n  top: 5%;\r\n  right: 5%;\r\n}\r\n.form__action .action__input, .form__action .action__submit{\r\n  padding: .15em .2em;\r\n}\r\n.form__action .action__submit{\r\n  background: #359942;\r\n  border: 1px solid green;\r\n  transition: all .3s ease;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n.form__action .action__input{\r\n  margin: 0!important;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.form__action .action__submit:focus,.form__action .action__submit:hover{\r\n  outline: none;\r\n  background: #44c455;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-form/todo-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"foot\">\n  <button class=\"waves-effect waves-light btn foot__add\" (click)=\"show()\"><i class=\"material-icons\">add</i>Add TODO List</button>\n  <form #myForm=\"ngForm\" novalidate class=\"footer__form\" *ngIf=\"formActive\" [@formAnim]>\n    <div class=\"form__action card\">\n      <input type=\"text\" class=\"action__input\" name=\"name\" [(ngModel)]=\"title\" #userText placeholder=\"Add Your Task Title\">\n      <button type=\"submit\" class=\"action__submit\" (click)=\"addTitle(userText)\">Add Title</button>\n    </div>\n    <i class=\"material-icons clear\" (click)=\"show()\">clear</i>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-form/todo-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations__ = __webpack_require__("../../../../../src/app/shared/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoFormComponent = (function () {
    function TodoFormComponent(dataService) {
        this.dataService = dataService;
        this.title = "";
        this.formActive = false;
    }
    TodoFormComponent.prototype.ngOnInit = function () {
    };
    TodoFormComponent.prototype.show = function () {
        this.formActive = !this.formActive;
    };
    TodoFormComponent.prototype.addTitle = function (title) {
        var _this = this;
        if (!title.value.trim()) {
            return;
        }
        this.dataService.createProject(title.value, this.user).subscribe(function (data) {
            _this.projects.push({ title: title.value, arrayTask: [] });
            _this.title = "";
            _this.show();
        }, function (err) {
            console.log(err);
        });
    };
    return TodoFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TodoFormComponent.prototype, "projects", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TodoFormComponent.prototype, "user", void 0);
TodoFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-form',
        template: __webpack_require__("../../../../../src/app/todo-form/todo-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-form/todo-form.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations__["a" /* formAnim */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */]) === "function" && _a || Object])
], TodoFormComponent);

var _a;
//# sourceMappingURL=todo-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-project-header/todo-project-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list__head{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -ms-flex-line-pack: stretch;\r\n      align-content: stretch;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: .2em .3em;\r\n  color: white;\r\n  transition: all .4s ease;\r\n}\r\n.head__input{\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 1.3em!important;\r\n  color: white;\r\n  font-weight: 400;\r\n  /*flex: 1;*/\r\n  width: 90%;\r\n  margin: 0!important;\r\n  border-bottom: none!important;\r\n  height: 2em!important;\r\n}\r\n.material-icons{\r\n  cursor: pointer;\r\n  font-size: 1.3em;\r\n  transition: all .4s ease;\r\n  width: 3%;\r\n  text-align: center;\r\n}\r\n.material-icons:first-child{\r\n  width: 4%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-project-header/todo-project-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list__head waves-effect waves-light card-header darken-1\" [ngClass]=\"{blue: !changed, red: changed}\">\n  <i class=\"material-icons date\">date_range</i>\n  <input type=\"text\" class=\"head__input white-text\" [attr.disabled]=\"changed?null:'disabled'\" value=\"{{item.title}}\" #inputElement>\n  <i class=\"material-icons rewrite\" *ngIf=\"!changed\" (click)=\"changed = !changed\">create</i>\n  <i class=\"material-icons rewrite\" *ngIf=\"changed\" (click)=\"onRewrite(item, inputElement)\">done</i>\n  <i class=\"material-icons delete\" (click)=\"onRemove(item)\">delete</i>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/todo-project-header/todo-project-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project__ = __webpack_require__("../../../../../src/app/shared/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_project__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoProjectHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoProjectHeaderComponent = (function () {
    function TodoProjectHeaderComponent(dataService) {
        this.dataService = dataService;
        this.changed = false;
    }
    TodoProjectHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.initUser().subscribe(function (data) { _this.user = data; });
    };
    TodoProjectHeaderComponent.prototype.onRewrite = function (project, input) {
        var _this = this;
        this.dataService.rewriteProject(this.user, project, input.value).subscribe(function (data) {
            console.log(data);
            _this.changed = !_this.changed;
        }, function (err) {
            console.log(err);
        });
    };
    TodoProjectHeaderComponent.prototype.onRemove = function (project) {
        var _this = this;
        this.dataService.removeProject(this.user, project).subscribe(function (data) {
            var index = _this.projects.indexOf(project);
            _this.projects.splice(index, 1);
        }, function (err) {
            console.log(err);
        });
    };
    return TodoProjectHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_project__["Project"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_project__["Project"]) === "function" && _a || Object)
], TodoProjectHeaderComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TodoProjectHeaderComponent.prototype, "projects", void 0);
TodoProjectHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-project-header',
        template: __webpack_require__("../../../../../src/app/todo-project-header/todo-project-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-project-header/todo-project-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */]) === "function" && _b || Object])
], TodoProjectHeaderComponent);

var _a, _b;
//# sourceMappingURL=todo-project-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-project/todo-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n  height: 100%;\r\n}\r\n.main__list{\r\n  list-style: none;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n  -ms-flex-item-align: center;\r\n      align-self: center;\r\n  width: 80%;\r\n  margin-bottom: 2.5%;\r\n}\r\n.material-icons{\r\n  cursor: pointer;\r\n  font-size: 1.3em;\r\n  transition: all .4s ease;\r\n  width: 3%;\r\n  text-align: center;\r\n}\r\n\r\n.rewrite, .delete{\r\n  color: lightgray;\r\n}\r\n.material-icons:hover{\r\n  color: white;\r\n}\r\n.date{\r\n  /*color: rgb(71, 72, 73);*/\r\n  color: white;\r\n}\r\n.date:hover{\r\n  color: gray;\r\n}\r\n.list__todos{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-line-pack: stretch;\r\n      align-content: stretch;\r\n  border-right: none;\r\n  border-left: none;\r\n  margin-bottom: 0!important;\r\n  margin-top: .25em;\r\n}\r\n.todos__task{\r\n  list-style: none;\r\n  width: 100%;\r\n  /*padding: .25em 0;*/\r\n  background: white;\r\n  /*border: 1px solid lightgray;*/\r\n  border-top: none;\r\n  padding: 0!important;\r\n  \r\n}\r\n.todos__task:last-child{\r\n  /*border-radius: 0 0 .5em .5em;*/\r\n}\r\ntodo-task{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n  width: 100%;\r\n}\r\n.zero{\r\n  text-align: center;\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-project/todo-project.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"main\" [@myAnim]>\n  <li class=\"main__list card\" *ngFor=\"let item of projects; let i= index\">\n    <todo-project-header [item]=\"item\" [projects]=\"projects\"></todo-project-header>\n    <todo-projects-form [item]=\"item\" [user]=\"user\" [projects]=\"projects\"></todo-projects-form>\n    <ul class=\"list__todos collection\">\n      <li class=\"todos__task collection-item\" *ngFor=\"let task of item.arrayTask\">\n        <!--<todo-task [item]=\"item\" [task]=\"task\"></todo-task>-->\n        <todo-task [item]=\"item\" [task]=\"task\" [projects]=\"projects\"></todo-task>\n      </li>\n    </ul>\n  </li>\n  <li class=\"main__list zero\" *ngIf=\"projects?.length < 1\">\n    Задач нет, придумайте их!\n  </li>\n</ul> "

/***/ }),

/***/ "../../../../../src/app/todo-project/todo-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations__ = __webpack_require__("../../../../../src/app/shared/animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoProjectComponent = (function () {
    function TodoProjectComponent(dataService, loginService) {
        this.dataService = dataService;
        this.loginService = loginService;
    }
    TodoProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.initUser().subscribe(function (data) {
            _this.user = data;
            // this.dataService.getProjects().subscribe(data=>this.projects = data);
        });
    };
    TodoProjectComponent.prototype.ngDoCheck = function () {
        console.log(this.projects.length);
    };
    return TodoProjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TodoProjectComponent.prototype, "projects", void 0);
TodoProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-project',
        template: __webpack_require__("../../../../../src/app/todo-project/todo-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-project/todo-project.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__shared_animations__["b" /* myAnim */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], TodoProjectComponent);

var _a, _b;
//# sourceMappingURL=todo-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-projects-form/todo-projects-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list__form{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-line-pack: stretch;\r\n      align-content: stretch;\r\n  /*background: lightgray;*/\r\n  padding: .15em .2em .15em 0;\r\n}\r\n.list__form .material-icons{\r\n  color: forestgreen;\r\n  font-weight: bold;\r\n  font-size: 2em;\r\n  cursor: default;\r\n  width: 5%;\r\n  text-align: center;\r\n}\r\n.list__form .form__input{\r\n  font-size: 1em;\r\n  padding: 0.2em .2em;\r\n  /*flex: 1;*/\r\n  font-size: 1.3em;\r\n  width: 77.5%;\r\n  margin: 0;\r\n  margin: 0;\r\n  margin-right: 1%;\r\n  height: auto;\r\n}\r\n.list__form .form__submit{\r\n  font-size: 1em;\r\n  padding: .1em .4em;\r\n  background: #359942;\r\n  color: white;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  width: 15%;\r\n  height: 2em!important;\r\n  line-height: 2em!important;\r\n}\r\n.list__form .form__submit:focus,.list__form .form__submit:hover{\r\n  outline: none;\r\n  background: #44c455;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-projects-form/todo-projects-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"list__form card-content\" #myForm1=\"ngForm\" novalidate>\n  <i class=\"material-icons\">add</i>\n  <input type=\"text\" placeholder=\"Start typing here to create a task...\" class=\"form__input\" name=\"task\" [(ngModel)]=\"task\" #userTask>\n  <button type=\"submit\" class=\"form__submit waves-effect waves-light btn\" (click)=\"addTask(userTask, item)\">Add Task</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/todo-projects-form/todo-projects-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project__ = __webpack_require__("../../../../../src/app/shared/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_project__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoProjectsFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoProjectsFormComponent = (function () {
    function TodoProjectsFormComponent(dataService) {
        this.dataService = dataService;
        this.task = '';
    }
    TodoProjectsFormComponent.prototype.ngOnInit = function () {
    };
    TodoProjectsFormComponent.prototype.addTask = function (input, project) {
        var _this = this;
        if (!input.value.trim()) {
            return;
        }
        this.dataService.addTask(input.value, project, this.user).subscribe(function (data) {
            var index = 0;
            var indexTodo = _this.projects.find(function (elem, item) {
                if (elem.title === project.title) {
                    index = item;
                    return true;
                }
                return false;
            });
            _this.projects[index].arrayTask.push({ text: input.value, done: false });
            _this.task = "";
        }, function (err) {
            console.log(err);
        });
    };
    return TodoProjectsFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_project__["Project"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_project__["Project"]) === "function" && _a || Object)
], TodoProjectsFormComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TodoProjectsFormComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TodoProjectsFormComponent.prototype, "projects", void 0);
TodoProjectsFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-projects-form',
        template: __webpack_require__("../../../../../src/app/todo-projects-form/todo-projects-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-projects-form/todo-projects-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */]) === "function" && _b || Object])
], TodoProjectsFormComponent);

var _a, _b;
//# sourceMappingURL=todo-projects-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-task/todo-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .checkbox{\r\n  font-size: 1.2em;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n  width: 5%;\r\n  text-align: center;\r\n  color: gray;\r\n  cursor: pointer;\r\n}\r\n:host .checkbox:hover{\r\n  color: darkgray;\r\n}\r\n.task__title{\r\n  /*flex: 1;*/\r\n  width: 79.5%;\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 1.2em;\r\n  margin: 0.15em .25em .15em .05em!important;\r\n  padding: .15em 0 .15em .2em;\r\n  height: 2em!important;\r\n  /*border-left: 1px solid pink;*/\r\n  color: #26a69a;\r\n  transition: all .35s ease;\r\n}\r\n.task__title:disabled{\r\n  color: #424242!important;\r\n}\r\n.done{\r\n  text-decoration: line-through;\r\n}\r\n.task__interaction{\r\n  width: 15.5%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border-left: 1px solid lightgray;\r\n}\r\n.task__interaction > *{\r\n  font-size: 1.2em;\r\n  color: rgb(71, 72, 73);\r\n  transition: all .25s ease; \r\n  width: calc(100%/3);\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.task__interaction > *:hover{\r\n  color: gray;\r\n}\r\n.task__interaction > *:first-child{\r\n  border-right: 1px solid lightgray;\r\n  /*margin-left: 15%;*/\r\n}\r\n.task__interaction > *:last-child{\r\n  border-left: 1px solid lightgray;\r\n  /*margin-right: 15%;*/\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-task/todo-task.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"material-icons checkbox\" (click)=\"toggle(item, task, inputElement)\">{{task.done?'check_box':'check_box_outline_blank'}}</i>\n<input type=\"text\" class=\"task__title\" value=\"{{task.text}}\" [attr.disabled]=\"changed?null:'disabled'\" [ngClass]=\"{done: task.done}\" #inputElement focus>\n<div class=\"task__interaction\">\n  <i class=\"material-icons\">swap_vert</i>\n  <i class=\"material-icons\" *ngIf=\"!changed\" (click)=\"changed = !changed\">create</i>\n  <i class=\"material-icons\" (click)=\"rewriteTask(item,task, inputElement)\" *ngIf=\"changed\">done</i>\n  <i class=\"material-icons\" (click)=\"removeTask(item, task)\">delete</i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-task/todo-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project__ = __webpack_require__("../../../../../src/app/shared/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_project__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_task__ = __webpack_require__("../../../../../src/app/shared/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shared_task__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoTaskComponent = (function () {
    function TodoTaskComponent(dataService) {
        this.dataService = dataService;
        this.changed = false;
    }
    TodoTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.initUser().subscribe(function (data) { _this.user = data; });
    };
    TodoTaskComponent.prototype.removeTask = function (todo, mission) {
        var _this = this;
        this.dataService.removeTask(todo.title, mission.text, this.user).subscribe(function (data) {
            var arr = _this.searchTask(todo, mission);
            _this.projects[arr[0]].arrayTask.splice(arr[1], 1);
        }, function (err) {
            console.log(err);
        });
    };
    TodoTaskComponent.prototype.searchTask = function (todo, mission) {
        var indexTodo = this.projects.indexOf(todo);
        var indexTask = this.projects[indexTodo].arrayTask.indexOf(mission);
        var arr = [indexTodo, indexTask];
        return arr;
    };
    TodoTaskComponent.prototype.toggle = function (project, task, input) {
        this.dataService.toggleTask(project.title, input.value, this.user).subscribe(function (data) {
            task.done = !task.done;
        }, function (err) {
            console.log('ERR: ' + err);
        });
    };
    TodoTaskComponent.prototype.rewriteTask = function (project, task, input) {
        var _this = this;
        this.dataService.rewriteTask(project, task, input.value, this.user).subscribe(function (data) {
            _this.changed = !_this.changed;
        }, function (err) {
            console.log(err);
        });
    };
    return TodoTaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_project__["Project"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_project__["Project"]) === "function" && _a || Object)
], TodoTaskComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TodoTaskComponent.prototype, "projects", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_task__["Task"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_task__["Task"]) === "function" && _b || Object)
], TodoTaskComponent.prototype, "task", void 0);
TodoTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-task',
        template: __webpack_require__("../../../../../src/app/todo-task/todo-task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-task/todo-task.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */]) === "function" && _c || Object])
], TodoTaskComponent);

var _a, _b, _c;
//# sourceMappingURL=todo-task.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
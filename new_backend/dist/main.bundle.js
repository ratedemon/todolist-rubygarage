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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
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
    function AppComponent(router, translate, authService) {
        this.router = router;
        this.translate = translate;
        this.authService = authService;
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (data) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_new_data_service__ = __webpack_require__("../../../../../src/app/shared/new-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_page_register_page_component__ = __webpack_require__("../../../../../src/app/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_routes__ = __webpack_require__("../../../../../src/app/shared/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_page_project_page_component__ = __webpack_require__("../../../../../src/app/project-page/project-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__todo_project_todo_project_component__ = __webpack_require__("../../../../../src/app/todo-project/todo-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__todo_form_todo_form_component__ = __webpack_require__("../../../../../src/app/todo-form/todo-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__todo_projects_form_todo_projects_form_component__ = __webpack_require__("../../../../../src/app/todo-projects-form/todo-projects-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__todo_task_todo_task_component__ = __webpack_require__("../../../../../src/app/todo-task/todo-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__todo_project_header_todo_project_header_component__ = __webpack_require__("../../../../../src/app/todo-project-header/todo-project-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_translateLoader__ = __webpack_require__("../../../../../src/app/shared/translateLoader.ts");
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
            __WEBPACK_IMPORTED_MODULE_11__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__register_page_register_page_component__["a" /* RegisterPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__project_page_project_page_component__["a" /* ProjectPageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__todo_project_todo_project_component__["a" /* TodoProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_16__todo_form_todo_form_component__["a" /* TodoFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__todo_projects_form_todo_projects_form_component__["a" /* TodoProjectsFormComponent */],
            __WEBPACK_IMPORTED_MODULE_18__todo_task_todo_task_component__["a" /* TodoTaskComponent */],
            __WEBPACK_IMPORTED_MODULE_19__todo_project_header_todo_project_header_component__["a" /* TodoProjectHeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__shared_routes__["a" /* appRouter */]), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (__WEBPACK_IMPORTED_MODULE_20__shared_translateLoader__["a" /* createTranslateLoader */]),
                    deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]]
                }
            }), __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__shared_new_data_service__["a" /* NewDataService */]],
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
exports.push([module.i, ":host{\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-item-align: stretch;\r\n      align-self: stretch;\r\n}\r\n.main__box{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.form{\r\n  width: 100%;\r\n}\r\n.main__btn{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center\r\n}\r\n.main__btn .btn{\r\n  margin: 0 1em;\r\n}\r\n.main__login{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: .5em 0;\r\n}\r\n.main__login .btn{\r\n  width: 200px;\r\n  margin: 0 1em;\r\n}\r\n.main__box .card-panel{\r\n  position: relative;\r\n}\r\n.main__box .loader{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: rgba(209, 209, 209, .35);\r\n  z-index: 10;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main__box\">\n    <div class=\"card-panel hoverable\">\n        <div class=\"row\">\n            <h4 class=\"col s12 main__title\">\n              Login Page\n            </h4>\n            <form class=\"col s12 form\" #myForm=\"ngForm\" novalidate (ngSubmit)=\"loginWithEmailAndPassword(email, password)\">\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" required name=\"email\" class=\"validate\">\n                  <label for=\"email\" data-error=\"wrong\" data-success=\"right\">Email</label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input id=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\" required name=\"password\">\n                  <label for=\"password\">Password</label>\n                </div>\n              </div>\n              <div class=\"row main__btn\">\n                 <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" [disabled]=\"myForm.invalid || password.length<6\">Sign\n                  <i class=\"material-icons right\">send</i>\n                </button>\n                <a routerLink=\"/register\" class=\"btn waves-effect waves-light register__btn light-green darken-3\">Register\n                <i class=\"material-icons right\">send</i>\n                </a>\n              </div>\n            </form>\n        </div>\n        <div class=\"loader\" *ngIf=\"isSending\">\n            <div class=\"preloader-wrapper big active\">\n                <div class=\"spinner-layer spinner-blue\">\n                    <div class=\"circle-clipper left\">\n                        <div class=\"circle\"></div>\n                    </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n                </div>\n\n                <div class=\"spinner-layer spinner-red\">\n                    <div class=\"circle-clipper left\">\n                        <div class=\"circle\"></div>\n                    </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n                </div>\n\n                <div class=\"spinner-layer spinner-yellow\">\n                    <div class=\"circle-clipper left\">\n                        <div class=\"circle\"></div>\n                    </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n                </div>\n\n                <div class=\"spinner-layer spinner-green\">\n                    <div class=\"circle-clipper left\">\n                        <div class=\"circle\"></div>\n                    </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__ = __webpack_require__("../../../../../src/app/shared/new-data.service.ts");
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
    function LoginPageComponent(router, authService, newDataService) {
        this.router = router;
        this.authService = authService;
        this.newDataService = newDataService;
        this.email = "";
        this.password = '';
        this.isSending = false;
    }
    LoginPageComponent.prototype.loginWithEmailAndPassword = function (mail, pass) {
        var _this = this;
        this.isSending = true;
        this.authService.login(mail, pass).subscribe(function (res) {
            _this.isSending = false;
            var token = res.json().token;
            console.log(token);
            _this.newDataService.setToken(token);
            _this.navToProjects();
        }, function (err) { return console.log(err); });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__["a" /* NewDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__["a" /* NewDataService */]) === "function" && _c || Object])
], LoginPageComponent);

var _a, _b, _c;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-page/project-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  /*align-items: flex-start;*/\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-item-align: stretch;\r\n      align-self: stretch;\r\n  width: 100%;\r\n  margin-bottom: 1.5em;\r\n}\r\ntodo-project{\r\n  width: 80%;\r\n  /*height: 100%;*/\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-page/project-page.component.html":
/***/ (function(module, exports) {

module.exports = "<todo-project [(projects)]=\"projects\"></todo-project>\n<todo-form [projects]=\"projects\"></todo-form>"

/***/ }),

/***/ "../../../../../src/app/project-page/project-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__ = __webpack_require__("../../../../../src/app/shared/new-data.service.ts");
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
    function ProjectPageComponent(router, newDataService) {
        var _this = this;
        this.router = router;
        this.newDataService = newDataService;
        // projects: Project[] = [];
        this.projects = [];
        this.newDataService.projectList.subscribe(function (res) {
            _this.projects = res;
        });
    }
    ProjectPageComponent.prototype.ngOnInit = function () {
        this.newDataService.getProjects();
    };
    return ProjectPageComponent;
}());
ProjectPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-project-page',
        template: __webpack_require__("../../../../../src/app/project-page/project-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-page/project-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__["a" /* NewDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__["a" /* NewDataService */]) === "function" && _b || Object])
], ProjectPageComponent);

var _a, _b;
//# sourceMappingURL=project-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/register-page/register-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  width: 100%;\r\n  -ms-flex-item-align: stretch;\r\n      -ms-grid-row-align: stretch;\r\n      align-self: stretch;\r\n}\r\n.main__box, .main__btn{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.main__btn{\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.main__box{\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.box_center{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.box_center > div{\r\n  margin: 0;\r\n}\r\n.main__box > *{\r\n  width: 100%;\r\n}\r\n.main__title{\r\n  text-align: center;\r\n}\r\n.main__box .card-panel{\r\n  position: relative;\r\n}\r\n.main__box .loader{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: rgba(209, 209, 209, .35);\r\n  z-index: 10;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-page/register-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main__box\">\n    <div class=\"row box_center\">\n        <div class=\"col s12 m8 l6\">\n            <div class=\"card-panel hoverable\">\n                <div class=\"row\">\n                    <h4 class=\"col s12 main__title\">\n                        Register\n                    </h4>\n                    <form class=\"col s12 form\" #myForm=\"ngForm\" novalidate\n                          (ngSubmit)=\"loginForm(fullName,email, password)\" enctype=\"multipart/form-data\">\n                        <div class=\"row\">\n                            <div class=\"input-field col col s12\">\n                                <input id=\"fullname\" type=\"text\" [(ngModel)]=\"fullName\" required name=\"fullname\"\n                                       class=\"validate\">\n                                <label for=\"fullname\" data-error=\"wrong\" data-success=\"right\">Full Name</label>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"input-field col col s12\">\n                                <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" required name=\"email\"\n                                       class=\"validate\">\n                                <label for=\"email\" data-error=\"wrong\" data-success=\"right\">Email</label>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"input-field col col s12\">\n                                <input id=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\" required\n                                       name=\"password\">\n                                <label for=\"password\">Password</label>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"input-field col col s12\">\n                                <input id=\"repeatPassword\" type=\"password\" class=\"validate\" [(ngModel)]=\"repeatPassword\"\n                                       required name=\"repeatPassword\">\n                                <label for=\"repeatPassword\">Repeat Your Password</label>\n                            </div>\n                        </div>\n                        <div *ngIf=\"status\" class=\"center-align\">\n                            <span [ngClass]=\"{'green-text':status == 1, 'red-text': status==2}\">{{message}}</span>\n                        </div>\n                        <div class=\"row main__btn\">\n                            <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\"\n                                    [disabled]=\"password !== repeatPassword || myForm.invalid\">Send\n                                <i class=\"material-icons right\">send</i>\n                            </button>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"loader\" *ngIf=\"isSending\">\n                    <div class=\"preloader-wrapper big active\">\n                        <div class=\"spinner-layer spinner-blue\">\n                            <div class=\"circle-clipper left\">\n                                <div class=\"circle\"></div>\n                            </div><div class=\"gap-patch\">\n                            <div class=\"circle\"></div>\n                        </div><div class=\"circle-clipper right\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        </div>\n\n                        <div class=\"spinner-layer spinner-red\">\n                            <div class=\"circle-clipper left\">\n                                <div class=\"circle\"></div>\n                            </div><div class=\"gap-patch\">\n                            <div class=\"circle\"></div>\n                        </div><div class=\"circle-clipper right\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        </div>\n\n                        <div class=\"spinner-layer spinner-yellow\">\n                            <div class=\"circle-clipper left\">\n                                <div class=\"circle\"></div>\n                            </div><div class=\"gap-patch\">\n                            <div class=\"circle\"></div>\n                        </div><div class=\"circle-clipper right\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        </div>\n\n                        <div class=\"spinner-layer spinner-green\">\n                            <div class=\"circle-clipper left\">\n                                <div class=\"circle\"></div>\n                            </div><div class=\"gap-patch\">\n                            <div class=\"circle\"></div>\n                        </div><div class=\"circle-clipper right\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register-page/register-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
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
    function RegisterPageComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.fullName = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
        this.isSending = false;
        this.message = "";
        this.status = 0;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent.prototype.loginForm = function (name, mail, pass) {
        var _this = this;
        this.isSending = true;
        this.authService.register(name, mail, pass).subscribe(function (res) {
            _this.isSending = false;
            _this.fullName = "";
            _this.email = "";
            _this.password = "";
            _this.repeatPassword = "";
            _this.message = "All OK! You can come in!";
            // console.log(res);
            _this.status = 1;
            setTimeout(function () {
                _this.router.navigate(['']);
            }, 5000);
        }, function (err) {
            _this.isSending = false;
            _this.message = "This email has been registered";
            _this.status = 2;
            console.log(err);
        });
    };
    return RegisterPageComponent;
}());
RegisterPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-register-page',
        template: __webpack_require__("../../../../../src/app/register-page/register-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register-page/register-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
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

/***/ "../../../../../src/app/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    AuthService.prototype.login = function (email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var body = JSON.stringify({ 'email': email, 'password': password });
        return this.http.post(this.url + "/login", body, { headers: headers });
    };
    AuthService.prototype.register = function (name, email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var body = JSON.stringify({ 'name': name, 'email': email, 'password': password });
        return this.http.post(this.url + "/register", body, { headers: headers });
    };
    AuthService.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            localStorage.clear();
            resolve(true);
        });
    };
    AuthService.prototype.createAuthorizationHeader = function (headers) {
        headers.append("Content-Type", "application/json");
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/new-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Observable} from 'rxjs/Observable';





var NewDataService = (function () {
    function NewDataService(http, router) {
        this.http = http;
        this.router = router;
        this.token = localStorage.getItem('session_token') || null;
        this.projects = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.projectList = this.projects.asObservable();
        this.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
        this.token = localStorage.getItem('session_token') || null;
    }
    NewDataService.prototype.setToken = function (token) {
        localStorage.setItem('session_token', token);
        this.token = token;
    };
    NewDataService.prototype.getProjects = function () {
        var _this = this;
        this.http.get(this.url + "/projects", { headers: this.createAuthorizationHeader() }).map(this.parseData).subscribe(function (res) {
            _this.projects.next(res);
        }, function (err) {
            _this.router.navigate(['']);
        });
    };
    NewDataService.prototype.createProject = function (name) {
        var body = JSON.stringify({ name: name });
        return this.http.post(this.url + "/project", body, { headers: this.createAuthorizationHeader() }).map(this.parseData);
    };
    NewDataService.prototype.renameProject = function (project_id, name) {
        var body = JSON.stringify({ project_id: project_id, name: name });
        return this.http.put(this.url + "/project", body, { headers: this.createAuthorizationHeader() });
    };
    NewDataService.prototype.deleteProject = function (project_id) {
        return this.http.delete(this.url + "/project/" + project_id, { headers: this.createAuthorizationHeader() });
    };
    NewDataService.prototype.addTask = function (name, project_id) {
        var body = JSON.stringify({ name: name, project_id: project_id });
        return this.http.post(this.url + "/task", body, { headers: this.createAuthorizationHeader() });
    };
    NewDataService.prototype.toggleTask = function (project, task) {
        var body = JSON.stringify({ status: !task.status, project_id: project.id, task_id: task.id });
        return this.http.put(this.url + "/task/status", body, { headers: this.createAuthorizationHeader() });
    };
    NewDataService.prototype.removeTask = function (project, task) {
        return this.http.delete(this.url + "/project/" + project.id + "/task/" + task.id, { headers: this.createAuthorizationHeader() });
    };
    NewDataService.prototype.renameTask = function (project, task, name) {
        var body = JSON.stringify({ name: name, task_id: task.id, project_id: project.id });
        return this.http.put(this.url + "/task", body, { headers: this.createAuthorizationHeader() });
    };
    NewDataService.prototype.createAuthorizationHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append('Authorization', "Bearer " + this.token);
        return headers;
    };
    NewDataService.prototype.parseData = function (res) {
        var data = res.json();
        return data || [];
    };
    return NewDataService;
}());
NewDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewDataService);

var _a, _b;
//# sourceMappingURL=new-data.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__ = __webpack_require__("../../../../../src/app/shared/new-data.service.ts");
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
    function TodoFormComponent(newDataService) {
        this.newDataService = newDataService;
        this.title = "";
        this.formActive = false;
    }
    TodoFormComponent.prototype.show = function () {
        this.formActive = !this.formActive;
    };
    TodoFormComponent.prototype.addTitle = function (input) {
        var _this = this;
        if (!input.value.trim()) {
            return;
        }
        this.newDataService.createProject(input.value).subscribe(function (res) {
            _this.projects.unshift(res.project);
            _this.show();
        }, function (err) { return console.log(err); });
    };
    return TodoFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TodoFormComponent.prototype, "projects", void 0);
TodoFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-form',
        template: __webpack_require__("../../../../../src/app/todo-form/todo-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-form/todo-form.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations__["a" /* formAnim */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__["a" /* NewDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__["a" /* NewDataService */]) === "function" && _a || Object])
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

module.exports = "<div class=\"list__head waves-effect waves-light card-header darken-1\" [ngClass]=\"{blue: !changed, red: changed}\">\n  <i class=\"material-icons date\">date_range</i>\n  <input type=\"text\" class=\"head__input white-text\" [attr.disabled]=\"changed?null:'disabled'\" value=\"{{item.name}}\" #inputElement>\n  <i class=\"material-icons rewrite\" *ngIf=\"!changed\" (click)=\"changed = !changed\">create</i>\n  <i class=\"material-icons rewrite\" *ngIf=\"changed\" (click)=\"onRewrite(item, inputElement)\">done</i>\n  <i class=\"material-icons delete\" (click)=\"onRemove(item)\">delete</i>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/todo-project-header/todo-project-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_new_data_service__ = __webpack_require__("../../../../../src/app/shared/new-data.service.ts");
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
    function TodoProjectHeaderComponent(newDataService) {
        this.newDataService = newDataService;
        this.changed = false;
    }
    TodoProjectHeaderComponent.prototype.onRewrite = function (project, input) {
        var _this = this;
        console.log(project, input);
        this.newDataService.renameProject(project.id, input.value).subscribe(function (res) {
            _this.changed = !_this.changed;
        }, function (err) { return console.log(err); });
    };
    TodoProjectHeaderComponent.prototype.onRemove = function (project) {
        var _this = this;
        this.newDataService.deleteProject(project.id).subscribe(function (data) {
            var index = _this.projects.indexOf(project);
            _this.projects.splice(index, 1);
        }, function (err) {
            console.log(err);
        });
    };
    return TodoProjectHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TodoProjectHeaderComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TodoProjectHeaderComponent.prototype, "projects", void 0);
TodoProjectHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-project-header',
        template: __webpack_require__("../../../../../src/app/todo-project-header/todo-project-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-project-header/todo-project-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_new_data_service__["a" /* NewDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_new_data_service__["a" /* NewDataService */]) === "function" && _a || Object])
], TodoProjectHeaderComponent);

var _a;
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

module.exports = "<ul class=\"main\" [@myAnim]>\n  <li class=\"main__list card\" *ngFor=\"let item of projects; let i= index\">\n    <todo-project-header [item]=\"item\" [projects]=\"projects\"></todo-project-header>\n    <todo-projects-form [item]=\"item\" [projects]=\"projects\"></todo-projects-form>\n    <ul class=\"list__todos collection\">\n      <li class=\"todos__task collection-item\" *ngFor=\"let task of item.ProjectTasks\">\n        <todo-task [item]=\"item\" [task]=\"task\" [projects]=\"projects\"></todo-task>\n      </li>\n    </ul>\n  </li>\n  <li class=\"main__list zero\" *ngIf=\"projects?.length < 1\">\n    Задач нет, придумайте их!\n  </li>\n</ul> "

/***/ }),

/***/ "../../../../../src/app/todo-project/todo-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations__ = __webpack_require__("../../../../../src/app/shared/animations.ts");
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
    function TodoProjectComponent() {
    }
    return TodoProjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Array)
], TodoProjectComponent.prototype, "projects", void 0);
TodoProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-project',
        template: __webpack_require__("../../../../../src/app/todo-project/todo-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-project/todo-project.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations__["b" /* myAnim */]]
    }),
    __metadata("design:paramtypes", [])
], TodoProjectComponent);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_new_data_service__ = __webpack_require__("../../../../../src/app/shared/new-data.service.ts");
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
    function TodoProjectsFormComponent(newDataService) {
        this.newDataService = newDataService;
        this.task = '';
    }
    TodoProjectsFormComponent.prototype.addTask = function (input, project) {
        var _this = this;
        if (!input.value.trim()) {
            return;
        }
        this.newDataService.addTask(input.value, project.id).subscribe(function (data) {
            var index = 0;
            _this.projects.forEach(function (el, i) {
                if (el.id == project.id) {
                    index = i;
                }
            });
            _this.projects[index].ProjectTasks.push({ name: input.value, status: false });
            _this.task = "";
        }, function (err) { return console.log(err); });
    };
    return TodoProjectsFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TodoProjectsFormComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TodoProjectsFormComponent.prototype, "projects", void 0);
TodoProjectsFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-projects-form',
        template: __webpack_require__("../../../../../src/app/todo-projects-form/todo-projects-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-projects-form/todo-projects-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_new_data_service__["a" /* NewDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_new_data_service__["a" /* NewDataService */]) === "function" && _a || Object])
], TodoProjectsFormComponent);

var _a;
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

module.exports = "<i class=\"material-icons checkbox\" (click)=\"toggle(item, task, inputElement)\">{{task.status?'check_box':'check_box_outline_blank'}}</i>\n<input type=\"text\" class=\"task__title\" value=\"{{task.name}}\" [attr.disabled]=\"changed?null:'disabled'\" [ngClass]=\"{done: task.status}\" #inputElement focus>\n<div class=\"task__interaction\">\n  <i class=\"material-icons\">swap_vert</i>\n  <i class=\"material-icons\" *ngIf=\"!changed\" (click)=\"changed = !changed\">create</i>\n  <i class=\"material-icons\" (click)=\"rewriteTask(item,task, inputElement)\" *ngIf=\"changed\">done</i>\n  <i class=\"material-icons\" (click)=\"removeTask(item, task)\">delete</i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-task/todo-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project__ = __webpack_require__("../../../../../src/app/shared/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_project__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__ = __webpack_require__("../../../../../src/app/shared/new-data.service.ts");
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
    function TodoTaskComponent(newDataService) {
        this.newDataService = newDataService;
        this.changed = false;
    }
    TodoTaskComponent.prototype.removeTask = function (project, task) {
        var _this = this;
        this.newDataService.removeTask(project, task).subscribe(function (res) {
            var arr = _this.searchTask(project, task);
            _this.projects[arr[0]].ProjectTasks.splice(arr[1], 1);
        }, function (err) { return console.log(err); });
    };
    TodoTaskComponent.prototype.toggle = function (project, task, input) {
        var _this = this;
        this.newDataService.toggleTask(project, task).subscribe(function (res) {
            _this.task.status = !_this.task.status;
        }, function (err) { return console.log(err); });
    };
    TodoTaskComponent.prototype.rewriteTask = function (project, task, input) {
        var _this = this;
        this.newDataService.renameTask(project, task, input.value).subscribe(function (res) {
            _this.changed = !_this.changed;
        }, function (err) { return console.log(err); });
    };
    TodoTaskComponent.prototype.searchTask = function (todo, mission) {
        var indexTodo = this.projects.indexOf(todo);
        var indexTask = this.projects[indexTodo].ProjectTasks.indexOf(mission);
        var arr = [indexTodo, indexTask];
        return arr;
    };
    return TodoTaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_project__["Project"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_project__["Project"]) === "function" && _a || Object)
], TodoTaskComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TodoTaskComponent.prototype, "projects", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TodoTaskComponent.prototype, "task", void 0);
TodoTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'todo-task',
        template: __webpack_require__("../../../../../src/app/todo-task/todo-task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-task/todo-task.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__["a" /* NewDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_new_data_service__["a" /* NewDataService */]) === "function" && _b || Object])
], TodoTaskComponent);

var _a, _b;
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
    production: false,
    apiUrl: 'http://localhost:8181'
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
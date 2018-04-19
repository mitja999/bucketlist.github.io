webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}<i class=\"fa fa-home\"></i>!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>-->\n\n<div>\n    <div class=\"card text-white bg-primary  mb-3 main-header\" >\n        <div class=\"card-body\">\n            <a [routerLink]=\"['/bucketList']\"><h4 class=\"card-title\">Secure cloud storage</h4></a>\n         </div>\n      </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "main-header {\n  width: 100%;\n  padding: 0 0 0 0;\n  margin: 0 0 0 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bucket_list_bucket_list_component__ = __webpack_require__("./src/app/bucket-list/bucket-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bucket_list_bucket_list_new_bucket_list_new_component__ = __webpack_require__("./src/app/bucket-list/bucket-list-new/bucket-list-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bucket_item_bucket_item_component__ = __webpack_require__("./src/app/bucket-item/bucket-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bucket_item_bucket_item_files_bucket_item_files_component__ = __webpack_require__("./src/app/bucket-item/bucket-item-files/bucket-item-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bucket_item_bucket_item_details_bucket_item_details_component__ = __webpack_require__("./src/app/bucket-item/bucket-item-details/bucket-item-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__bucket_list_bucket_list_component__["a" /* BucketListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__bucket_item_bucket_item_component__["a" /* BucketItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__bucket_list_bucket_list_new_bucket_list_new_component__["a" /* BucketListNewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__bucket_item_bucket_item_files_bucket_item_files_component__["a" /* BucketItemFilesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__bucket_item_bucket_item_details_bucket_item_details_component__["a" /* BucketItemDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot([
                    {
                        path: '',
                        redirectTo: '/bucketList',
                        pathMatch: 'full'
                    },
                    {
                        path: 'bucketList',
                        component: __WEBPACK_IMPORTED_MODULE_4__bucket_list_bucket_list_component__["a" /* BucketListComponent */],
                        children: [
                            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_5__bucket_list_bucket_list_new_bucket_list_new_component__["a" /* BucketListNewComponent */] }
                        ]
                    },
                    {
                        path: 'bucketItem/:id',
                        component: __WEBPACK_IMPORTED_MODULE_6__bucket_item_bucket_item_component__["a" /* BucketItemComponent */],
                        children: [
                            { path: '', redirectTo: 'files', pathMatch: 'full' },
                            { path: 'files', component: __WEBPACK_IMPORTED_MODULE_7__bucket_item_bucket_item_files_bucket_item_files_component__["a" /* BucketItemFilesComponent */] },
                            { path: 'details', component: __WEBPACK_IMPORTED_MODULE_8__bucket_item_bucket_item_details_bucket_item_details_component__["a" /* BucketItemDetailsComponent */] }
                        ]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bucket-item/bucket-item-details/bucket-item-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Type</th>\n            <th scope=\"col\">Column heading</th>\n            <th scope=\"col\">Column heading</th>\n            <th scope=\"col\">Column heading</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"table-active\">\n            <th scope=\"row\">Active</th>\n            <td>Column content</td>\n            <td>Column content</td>\n            <td>Column content</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Default</th>\n            <td>Column content</td>\n            <td>Column content</td>\n            <td>Column content</td>\n          </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/bucket-item/bucket-item-details/bucket-item-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bucket-item/bucket-item-details/bucket-item-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketItemDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BucketItemDetailsComponent = /** @class */ (function () {
    function BucketItemDetailsComponent() {
    }
    BucketItemDetailsComponent.prototype.ngOnInit = function () {
    };
    BucketItemDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bucket-item-details',
            template: __webpack_require__("./src/app/bucket-item/bucket-item-details/bucket-item-details.component.html"),
            styles: [__webpack_require__("./src/app/bucket-item/bucket-item-details/bucket-item-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BucketItemDetailsComponent);
    return BucketItemDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bucket-item/bucket-item-files/bucket-item-files.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"clear container allBucketsContainer\">\n    <div class=\"left\">\n      <b>All Files</b>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bucket-item/bucket-item-files/bucket-item-files.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bucket-item/bucket-item-files/bucket-item-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketItemFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BucketItemFilesComponent = /** @class */ (function () {
    function BucketItemFilesComponent() {
    }
    BucketItemFilesComponent.prototype.ngOnInit = function () {
    };
    BucketItemFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bucket-item-files',
            template: __webpack_require__("./src/app/bucket-item/bucket-item-files/bucket-item-files.component.html"),
            styles: [__webpack_require__("./src/app/bucket-item/bucket-item-files/bucket-item-files.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BucketItemFilesComponent);
    return BucketItemFilesComponent;
}());



/***/ }),

/***/ "./src/app/bucket-item/bucket-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"navbar navbar-default navbar-fixed-top\">\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link show\" data-toggle=\"tab\" [routerLink]=\"'./files'\" [routerLinkActive]=\"['active']\">Files</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" [routerLink]=\"'./details'\" [routerLinkActive]=\"['active']\">Details</a>\n      </li>\n    </ul>\n    <div class=\"navbar-header\">\n      <a href=\".\" class=\"navbar-brand\">\n        <button type=\"button\" class=\"btn btn-primary\">\n          <a [routerLink]=\"['./new']\">Delete Object</a>\n        </button>\n\n        <button type=\"button\" class=\"btn btn-primary\">\n          <a [routerLink]=\"['./new']\">Upload Object</a>\n        </button>\n      </a>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/bucket-item/bucket-item.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bucket-item/bucket-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BucketItemComponent = /** @class */ (function () {
    function BucketItemComponent(route) {
        this.route = route;
        debugger;
        this.route.params.subscribe(function (params) { return console.log(params); });
    }
    BucketItemComponent.prototype.ngOnInit = function () {
    };
    BucketItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bucket-item',
            template: __webpack_require__("./src/app/bucket-item/bucket-item.component.html"),
            styles: [__webpack_require__("./src/app/bucket-item/bucket-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BucketItemComponent);
    return BucketItemComponent;
}());



/***/ }),

/***/ "./src/app/bucket-list/bucket-list-new/bucket-list-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"form-group has-success left\">\n    <label class=\"form-control-label\" for=\"inputSuccess1\">Bucket name</label>\n    <input value=\"correct value\" class=\"form-control is-valid\" id=\"inputValid\" type=\"text\">\n    <div class=\"valid-feedback\">Success! You've done it.</div>\n  </div>\n  <div class=\"form-group right\">\n    <label class=\"form-control-label\">Bucket location</label>\n    <select class=\"custom-select\">\n      <option selected=\"\">Open this select menu</option>\n      <option value=\"1\">One</option>\n      <option value=\"2\">Two</option>\n      <option value=\"3\">Three</option>\n    </select>\n  </div>\n  <div class=\"clear\">\n\n    <a [routerLink]=\"['./new']\">\n      <button type=\"button\" class=\"btn btn-primary\">Create Bucket</button>\n    </a>\n    <a [routerLink]=\"['/bucketList']\">\n      <button type=\"button\" class=\"btn btn-primary\">Cancel</button>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bucket-list/bucket-list-new/bucket-list-new.component.scss":
/***/ (function(module, exports) {

module.exports = ".left {\n  float: left;\n  width: 40%; }\n\n.right {\n  float: right;\n  width: 40%; }\n\n.clear {\n  clear: both; }\n"

/***/ }),

/***/ "./src/app/bucket-list/bucket-list-new/bucket-list-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketListNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BucketListNewComponent = /** @class */ (function () {
    function BucketListNewComponent() {
    }
    BucketListNewComponent.prototype.ngOnInit = function () {
    };
    BucketListNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bucket-list-new',
            template: __webpack_require__("./src/app/bucket-list/bucket-list-new/bucket-list-new.component.html"),
            styles: [__webpack_require__("./src/app/bucket-list/bucket-list-new/bucket-list-new.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BucketListNewComponent);
    return BucketListNewComponent;
}());



/***/ }),

/***/ "./src/app/bucket-list/bucket-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Bucket list</h2>\n\n  <router-outlet></router-outlet>\n  <div class=\"clear container allBucketsContainer\">\n    <div class=\"left\">\n      <b>All buckets</b>\n    </div>\n\n    <div class=\"right\" [hidden]=\"newBucketList\">\n      <a [routerLink]=\"['./new']\">\n        <button type=\"button\" class=\"btn btn-primary\">\n          Create new Bucket\n        </button>\n      </a>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bucket-list/bucket-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".allBucketsContainer {\n  padding-top: 20px; }\n"

/***/ }),

/***/ "./src/app/bucket-list/bucket-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BucketListComponent = /** @class */ (function () {
    function BucketListComponent(router) {
        var _this = this;
        this.router = router;
        this.newBucketList = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.newBucketList = event.urlAfterRedirects.indexOf('new') !== -1;
            }
        });
    }
    BucketListComponent.prototype.ngOnInit = function () {
    };
    BucketListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bucket-list',
            template: __webpack_require__("./src/app/bucket-list/bucket-list.component.html"),
            styles: [__webpack_require__("./src/app/bucket-list/bucket-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], BucketListComponent);
    return BucketListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
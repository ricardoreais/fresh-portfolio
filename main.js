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
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test1/test1.component.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'test-1'
    },
    {
        path: 'test-1',
        component: _test1_test1_component__WEBPACK_IMPORTED_MODULE_3__["Test1Component"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'ng-code-test';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test1/test1.component.ts");
/* harmony import */ var _common_pipes_highlight_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/pipes/highlight-search-pipe */ "./src/app/common/pipes/highlight-search-pipe.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _test1_test1_component__WEBPACK_IMPORTED_MODULE_7__["Test1Component"],
                _common_pipes_highlight_search_pipe__WEBPACK_IMPORTED_MODULE_8__["HighlightSearchPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/pipes/highlight-search-pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/pipes/highlight-search-pipe.ts ***!
  \*******************************************************/
/*! exports provided: HighlightSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function() { return HighlightSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightSearchPipe = /** @class */ (function () {
    function HighlightSearchPipe() {
    }
    HighlightSearchPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        // Remove trailing whitespaces from the search phrase and split it into keywords.
        var keywords = args.trim(/\S+/g).split(' ');
        for (var _i = 0, keywords_1 = keywords; _i < keywords_1.length; _i++) {
            var keyword = keywords_1[_i];
            var regText = new RegExp(keyword, 'gi');
            value = value.replace(regText, '<mark>' + keyword + '</mark>');
        }
        return value;
    };
    HighlightSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'highlight'
        })
    ], HighlightSearchPipe);
    return HighlightSearchPipe;
}());



/***/ }),

/***/ "./src/app/test1/services/entry.service.ts":
/*!*************************************************!*\
  !*** ./src/app/test1/services/entry.service.ts ***!
  \*************************************************/
/*! exports provided: EntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryService", function() { return EntryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! random-words */ "./node_modules/random-words/index.js");
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(random_words__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var EntryService = /** @class */ (function () {
    function EntryService() {
        this.entries$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    EntryService.prototype.getEntries = function (entriesCount) {
        var entriesList = [];
        for (var index = 0; index < entriesCount; index++) {
            entriesList.push(this.generateRandomEntry());
        }
        this.entries$.next(entriesList);
    };
    EntryService.prototype.getFilteredEntries = function (filter) {
        var _this = this;
        return this.entries$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (entries) { return _this.filterEntries(filter, entries); }));
    };
    EntryService.prototype.filterEntries = function (filter, entries) {
        if (!entries) {
            return entries;
        }
        if (!filter) {
            return entries.slice();
        }
        // With this regular expression we find each keyword inside the phrase.
        // Regardless of whatever characters (or full words) are between each keyword.
        var regExp = new RegExp('\\b' + filter.replace(/\s/g, '.*') + '\\b', 'i');
        return entries.filter(function (entry) { return regExp.test(entry.name)
            || regExp.test(entry.description)
            || entry.status.indexOf(filter) !== -1; });
    };
    EntryService.prototype.generateRandomEntry = function () {
        return {
            name: random_words__WEBPACK_IMPORTED_MODULE_2__({ exactly: 3, join: ' ' }),
            description: random_words__WEBPACK_IMPORTED_MODULE_2__({ exactly: 100, join: ' ' }),
            status: ['new', 'submitted', 'failed'][Math.floor(Math.random() * 3)]
        };
    };
    EntryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntryService);
    return EntryService;
}());



/***/ }),

/***/ "./src/app/test1/test1.component.css":
/*!*******************************************!*\
  !*** ./src/app/test1/test1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    padding: 8px 16px;\r\n    cursor: pointer\r\n  }\r\n\r\n  a:hover, a.selected {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n\r\n  .previous {\r\n    background-color: #f1f1f1;\r\n    color: black;\r\n  }\r\n\r\n  .next {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n\r\n  .round {\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .cool-column{\r\n    color: coral;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdDEvdGVzdDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtHQUNkOztFQUVEO0lBQ0UsMEJBQTBCO0lBQzFCLGFBQWE7R0FDZDs7RUFFRDtJQUNFLDBCQUEwQjtJQUMxQixhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxhQUFhO0dBQ2QiLCJmaWxlIjoic3JjL2FwcC90ZXN0MS90ZXN0MS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gIH1cclxuXHJcbiAgYTpob3ZlciwgYS5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnByZXZpb3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29vbC1jb2x1bW57XHJcbiAgICBjb2xvcjogY29yYWw7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/test1/test1.component.html":
/*!********************************************!*\
  !*** ./src/app/test1/test1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Search:\n  <!-- Using template driven instead of reactive forms -->\n  <input type=\"text\" [(ngModel)]=\"filter\" (keyup)=\"updateFilter()\">\n</div>\n\n<table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Description</th>\n        <th scope=\"col\">Status</th>\n        <th scope=\"col\" class=\"cool-column\">Cool column</th>\n      </tr>\n    </thead>\n    <!-- I'm assuming you don't want me to remove this \"hidden\" template subscribe -->\n    <tbody *ngIf=\"filteredData$ | async as entries; else loading\">\n      <tr *ngFor=\"let entry of entries | paginate: { itemsPerPage: pageSize, currentPage: page }\">\n        <!-- This highlight pipe affects performance a bit, but it looks super cool -->\n        <th scope=\"row\" [innerHTML]=\"entry.name  |  highlight : filter\"></th>\n        <td [innerHTML]=\"entry.description  |  highlight : filter\"></td>\n        <td [innerHTML]=\"entry.status  |  highlight : filter\"></td>\n        <td>\n          <!-- I know I should remove this column because it is affecting the application's performance by generating a lot of empty divs in the DOM, but I won't -->\n          <!-- I'm a very important column for whatever reasons, so please do not remove me -->\n          <div *ngFor=\"let x of emptyArray\"></div>\n        </td>\n      </tr>\n      <tr *ngIf=\"!entries.length\">\n        <td>\n          No results! Try searching some other words :)\n        </td>\n      </tr>\n    </tbody>\n    <ng-template #loading>\n        Loading Entries...\n    </ng-template>\n  </table>\n\n<pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n"

/***/ }),

/***/ "./src/app/test1/test1.component.ts":
/*!******************************************!*\
  !*** ./src/app/test1/test1.component.ts ***!
  \******************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/entry.service */ "./src/app/test1/services/entry.service.ts");



var Test1Component = /** @class */ (function () {
    function Test1Component(entryService) {
        this.entryService = entryService;
        this.entriesCount = 50000;
        this.page = 1;
        this.pageSize = 20;
        this.emptyArray = new Array(1000);
    }
    Test1Component.prototype.ngOnInit = function () {
        this.entryService.getEntries(this.entriesCount);
        this.filteredData$ = this.entryService.getFilteredEntries('');
    };
    Test1Component.prototype.updateFilter = function () {
        var _this = this;
        // I added this delay of 300ms to avoid an intensive filtering everytime an user presses a key.
        if (!this.filter || this.filter.length > 0) {
            window.clearTimeout(this.timeoutHandle);
        }
        // Our callback will only run once the user has stopped writing (this could be a BE call).
        this.timeoutHandle = window.setTimeout(function () {
            _this.filteredData$ = _this.entryService.getFilteredEntries(_this.filter);
        }, 300);
    };
    Test1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__(/*! ./test1.component.html */ "./src/app/test1/test1.component.html"),
            styles: [__webpack_require__(/*! ./test1.component.css */ "./src/app/test1/test1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]])
    ], Test1Component);
    return Test1Component;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RicardoTavaresReais\Downloads\ng-code-test-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
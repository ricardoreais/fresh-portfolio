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



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-intro></app-intro>\r\n  <app-bio></app-bio>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'fresh-portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_7__["BioComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__["TimelineComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid mb-0 bg-light\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 text-left\">About me.</h1>\r\n    <p class=\"lead text-justify\">\r\n      software engineer with two years of professional experience developing. proficient with programming in C# and JavaScript, and adept with problem solving using computers\r\n      ...by the way, I have a passion for design and minimalism.\r\n    </p>\r\n    <p class=\"lead text-justify\">\r\n      born in 96' in portugal, original from the coastal town of armação de pêra in the algarve district.\r\n      since my early days, I've always liked computers and playing games, eventually my interest for games faded and the interest for programming appeared.\r\n      nowadays I mainly enjoy music and skating.\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<app-timeline></app-timeline>\r\n\r\n<div id=\"education\" class=\"jumbotron jumbotron-fluid mb-0 bg-light\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 text-left\">Education.</h1>\r\n    <p class=\"lead text-justify mb-0\">\r\n      BSc. in Informatics and Computing Engineering Sept 2014 - June 2017\r\n    </p>\r\n    <p class=\"lead text-justify\">\r\n      @Faculty of Sciences and Technology at University of Algarve, Portugal\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"jumbotron jumbotron-fluid mb-0 bg-extra-light\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 text-left mb-3\">My skills.</h1>\r\n    <p class=\"text-left\">JavaScript</p>\r\n    <div class=\"progress mb-4\">\r\n      <div class=\"progress-bar w-85 text-dark\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">80%</div>\r\n    </div>\r\n    <p class=\"text-left\">C#</p>\r\n    <div class=\"progress mb-5\">\r\n      <div class=\"progress-bar w-85 text-dark\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">80%</div>\r\n    </div>\r\n    <p class=\"text-left\">HTML</p>\r\n    <div class=\"progress mb-5\">\r\n      <div class=\"progress-bar w-65 text-dark\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">65%</div>\r\n    </div>\r\n    <p class=\"text-left\">CSS</p>\r\n    <div class=\"progress mb-5\">\r\n      <div class=\"progress-bar w-55 text-dark\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">55%</div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/bio/bio.component.scss":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress {\n  background-color: white;\n  border-radius: 0%; }\n\n.progress-bar {\n  background-color: #fa5959; }\n\n.w-85 {\n  width: 85%; }\n\n.w-65 {\n  width: 65%; }\n\n.w-55 {\n  width: 55%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvL0M6XFxSZXBvc1xcZnJlc2gtcG9ydGZvbGlvXFxmcmVzaC1wb3J0Zm9saW8vc3JjXFxhcHBcXGJpb1xcYmlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iaW8vQzpcXFJlcG9zXFxmcmVzaC1wb3J0Zm9saW9cXGZyZXNoLXBvcnRmb2xpby9zcmNcXGFzc2V0c1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUJDUmtCLEVBQUE7O0FEV3BCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmlvL2Jpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcclxufVxyXG5cclxuLnctODUge1xyXG4gIHdpZHRoOiA4NSU7XHJcbn1cclxuXHJcbi53LTY1IHtcclxuICB3aWR0aDogNjUlO1xyXG59XHJcblxyXG4udy01NSB7XHJcbiAgd2lkdGg6IDU1JTtcclxufVxyXG4iLCIkbWFpbi1jb2xvcjogI2ZhNTk1OTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.scss */ "./src/app/bio/bio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" [class.bg-extra-light]=\"navbarOpen\">\r\n    <a class=\"navbar-brand\" href=\"#\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" [class.show]=\"navbarOpen\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#experience\">Professional experience</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#education\">Education</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Projects</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Contact</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.nav-link {\n  color: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxSZXBvc1xcZnJlc2gtcG9ydGZvbGlvXFxmcmVzaC1wb3J0Zm9saW8vc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5uYXYtbGluayB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(eRef) {
        this.eRef = eRef;
        this.navbarOpen = false;
    }
    HeaderComponent.prototype.clickout = function (event) {
        if (this.eRef.nativeElement.contains(event.target)) {
            // Clicked inside navbar, do nothing
        }
        else {
            // Clicked outside navbar, close it
            this.navbarOpen = false;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "clickout", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container intro ml-0\">\r\n  <div class=\"row pt-5\">\r\n    <div class=\"col pt-5\">\r\n      <h1 class=\"font-weight-bold text-left mb-0\">Ricardo Reais.</h1>\r\n      <h2 class=\"ml-5\">Software engineer.</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-right\">\r\n    <div class=\"col mr-5\">\r\n      <img class=\"circular\" src=\"https://avatars1.githubusercontent.com/u/22318105?s=400&u=088b8ab2b85b4ea7865ee2ed81e01e197f0eb088&v=4\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"offset-lg-7 offset-md-6 offset-sm-5 col-3 offset-2 text-center\">\r\n        <img class=\"thats-me\" src=\"assets/thats-me.png\" />\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/intro/intro.component.scss":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 5vw;\n  color: #fa5959; }\n\nh2 {\n  font-size: 5vw;\n  color: black; }\n\n.intro {\n  background-size: cover;\n  height: 100vh;\n  max-width: 99vw;\n  top: 0;\n  left: 0; }\n\n.circular {\n  width: 17vw;\n  border-radius: 50%; }\n\n.thats-me {\n  width: 16vw; }\n\n@media (max-width: 768px) {\n  h1 {\n    font-size: 10vw; }\n  h1 {\n    font-size: 9vw; }\n  .circular {\n    width: 29vw; }\n  .thats-me {\n    width: 29vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vQzpcXFJlcG9zXFxmcmVzaC1wb3J0Zm9saW9cXGZyZXNoLXBvcnRmb2xpby9zcmNcXGFwcFxcaW50cm9cXGludHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnRyby9DOlxcUmVwb3NcXGZyZXNoLXBvcnRmb2xpb1xcZnJlc2gtcG9ydGZvbGlvL3NyY1xcYXNzZXRzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQWM7RUFDZCxjQ0hrQixFQUFBOztBRE1wQjtFQUNFLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTyxFQUFBOztBQUdUO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsY0FBYyxFQUFBO0VBR2hCO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxXQUFXLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3ZhcmlhYmxlcy5zY3NzJztcclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmludHJvIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWF4LXdpZHRoOiA5OXZ3O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uY2lyY3VsYXIge1xyXG4gIHdpZHRoOiAxN3Z3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnRoYXRzLW1lIHtcclxuICB3aWR0aDogMTZ2dztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMHZ3O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA5dnc7XHJcbiAgfVxyXG5cclxuICAuY2lyY3VsYXIge1xyXG4gICAgd2lkdGg6IDI5dnc7XHJcbiAgfVxyXG4gIFxyXG4gIC50aGF0cy1tZSB7XHJcbiAgICB3aWR0aDogMjl2dztcclxuICB9XHJcbn1cclxuIiwiJG1haW4tY29sb3I6ICNmYTU5NTk7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/intro/intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"experience\" class=\"jumbotron jumbotron-fluid mb-0 bg-extra-light\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 text-left mb-0\">Professional experience.</h1>\r\n  </div>\r\n</div>\r\n<section class=\"section-spacing text-center\" id=\"features\">\r\n  <div class=\"container\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <ul class=\"timeline\">\r\n            <li class=\"timeline wow bounceInUp\">\r\n              <div class=\"timeline-badge warning\"><i class=\"fa fa-bullseye\"></i></div>\r\n              <div class=\"date-info date-info-start\">\r\n                <span class=\"month\"> Sep</span>\r\n                <span class=\"year\"> 2018</span>\r\n              </div>\r\n              <div class=\"date-info\">\r\n                  <span class=\"day\">-</span>\r\n                  <span class=\"month\"> Aug</span>\r\n                  <span class=\"year\"> 2019</span>\r\n                </div>\r\n              <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                  <h6 class=\"timeline-title\">Full-stack Software Engineer — Vortal - Lisbon, Portugal</h6>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                  <p>\r\n                      • Developed a middleware application for e-procurement using .NET Core and\r\n                      design patterns such as IoC (dependency injection)<br/>\r\n                      • Unit testing of all code pushed to production<br/>\r\n                      • Integrated with the Journal of the European Union API to get contract notices\r\n                      published in the EU<br/>\r\n                      • Created reusable Angular 2+ module and components for file uploading<br/>\r\n                      • Release planning and management using SCRUM methodologies and Azure\r\n                      DevOps as management tool<br/>\r\n                      • Implemented CI/CD in Azure Pipelines, which reduced by 30% the deployment\r\n                      time of the application<br/>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"timeline-inverted wow bounceInUp\">\r\n                <div class=\"timeline-badge warning\"><i class=\"fa fa-bullseye\"></i></div>\r\n                <div class=\"date-info date-info-start\">\r\n                  <span class=\"month\"> Aug</span>\r\n                  <span class=\"year\"> 2017</span>\r\n                </div>\r\n                <div class=\"date-info date-info-end\">\r\n                    <span class=\"day\">-</span>\r\n                    <span class=\"month\"> Aug</span>\r\n                    <span class=\"year\"> 2018</span>\r\n                  </div>\r\n                <div class=\"timeline-panel\">\r\n                  <div class=\"timeline-heading\">\r\n                    <h6 class=\"timeline-title\">Full-stack Software Developer — CGI - Lisbon, Portugal</h6>\r\n                  </div>\r\n                  <div class=\"timeline-body\">\r\n                    <p>\r\n                        • Created AngularJS directives to prevent input mistakes in an user interface<br/>\r\n                        • Structured reusable components for each independent feature<br/>\r\n                        • Tested code weekly using Jasmine and MSTest and kept approx. 5100 auto\r\n                        mated unit tests with a code coverage above 90%<br/>\r\n                        • Designed and implemented web services using WCF in order to send SOAP\r\n                        messages<br/>\r\n                        • Defined a REST ASP.NET Web API to get and save user data<br/>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/timeline/timeline.component.scss":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\n  list-style: none;\n  padding: 5px 0 5px;\n  position: relative; }\n\n.timeline h6 {\n  margin-bottom: 0px;\n  font-size: 15px; }\n\n.timeline:before {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: ' ';\n  width: 2px;\n  background-color: #eeeeee;\n  left: 49%;\n  margin-left: -1.5px;\n  background: #505050;\n  background: linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, #505050 8%, #505050 92%, rgba(80, 80, 80, 0) 100%); }\n\n.timeline > li {\n  margin-bottom: 5px;\n  position: relative; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: ' ';\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: ' ';\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  width: 45%;\n  text-align: left;\n  float: right;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  padding: 15px;\n  position: relative;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  position: absolute;\n  top: 7px;\n  display: inline-block;\n  border-top: 7px solid transparent;\n  border-left: 7px solid #ccc;\n  border-right: 0 solid #ccc;\n  border-bottom: 7px solid transparent;\n  content: ' ';\n  border-left-width: 0;\n  border-right-width: 10px;\n  left: -10px;\n  right: auto; }\n\n.timeline > li > .timeline-panel:after {\n  position: absolute;\n  top: 7px;\n  display: inline-block;\n  border-top: 7px solid transparent;\n  border-left: 7px solid #fff;\n  border-right: 0 solid #fff;\n  border-bottom: 7px solid transparent;\n  content: ' ';\n  border-left-width: 0;\n  border-right-width: 10px;\n  left: -10px;\n  right: auto; }\n\n.timeline > li > .timeline-badge {\n  color: #fff;\n  width: 35px;\n  height: 35px;\n  line-height: 34px;\n  font-size: 20px;\n  text-align: center;\n  position: absolute;\n  top: 8px;\n  left: 50%;\n  margin-left: -28px;\n  background-color: #fa5959;\n  z-index: 8;\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  border-bottom-left-radius: 50%; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: left; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  border-left-width: 12px;\n  border-right-width: 0px;\n  left: auto;\n  right: -12px; }\n\n.timeline-inverted {\n  padding-top: 5px; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  border-left-width: 12px;\n  border-right-width: 0px;\n  left: auto;\n  right: -12px; }\n\n.timeline-heading {\n  color: #000; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n  font-size: 13px;\n  color: #777; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  top: 0; }\n\n.timeline .date-info {\n  position: absolute;\n  top: -2px;\n  left: 40%;\n  margin-left: -28px;\n  width: 100px; }\n\n.timeline .date-info-start {\n  left: 34%; }\n\n.timeline-inverted .date-info-start {\n  left: 48%; }\n\n.timeline-inverted .date-info-end {\n  left: 54.5%; }\n\n.date-info .month {\n  position: absolute;\n  top: 10px;\n  font-size: 14px;\n  left: 70px; }\n\n.date-info .year {\n  position: absolute;\n  top: 23px;\n  font-size: 14px;\n  left: 70px; }\n\n.date-info .day {\n  font-size: 35px; }\n\n@media (max-width: 768px) {\n  .timeline:before {\n    left: 0.9%; }\n  .timeline > li > .timeline-badge {\n    left: 2.2%; }\n  .timeline > li > .timeline-panel {\n    width: 94%; }\n  .timeline > li.timeline-inverted > .timeline-panel {\n    float: right; }\n  .timeline > li.timeline-inverted > .timeline-panel:before {\n    border-left-width: 0;\n    border-right-width: 10px;\n    left: -10px;\n    right: auto; }\n  .timeline > li.timeline-inverted > .timeline-panel:after {\n    border-left-width: 0;\n    border-right-width: 10px;\n    left: -10px;\n    right: auto; }\n  .date-info {\n    position: absolute;\n    top: 1px;\n    left: 90%;\n    margin-left: -24px;\n    width: auto; }\n  .date-info-start {\n    left: 21% !important; }\n  .date-info-end {\n    left: 39% !important; }\n  .date-info .day {\n    font-size: 12px; }\n  .date-info .month,\n  .date-info .year {\n    position: initial;\n    font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvQzpcXFJlcG9zXFxmcmVzaC1wb3J0Zm9saW9cXGZyZXNoLXBvcnRmb2xpby9zcmNcXGFwcFxcdGltZWxpbmVcXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aW1lbGluZS9DOlxcUmVwb3NcXGZyZXNoLXBvcnRmb2xpb1xcZnJlc2gtcG9ydGZvbGlvL3NyY1xcYXNzZXRzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxNQUFNO0VBQ04sU0FBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1CQUEyQjtFQU0zQixpSEFBaUksRUFBQTs7QUFFbkk7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXBCOztFQUVFLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsV0FBVyxFQUFBOztBQUViOztFQUVFLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDBDQUEwQyxFQUFBOztBQUU1QztFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQywyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIseUJDbEdrQjtFRG1HbEIsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFFZDtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBRWhCOztFQUVFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixNQUFNLEVBQUE7O0FBR1I7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUVaO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxXQUFXLEVBQUE7RUFFYjtJQUNFLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFdBQVcsRUFBQTtFQUViO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTtFQUViO0lBQ0Usb0JBQW9CLEVBQUE7RUFFdEI7SUFDRSxvQkFBb0IsRUFBQTtFQUV0QjtJQUNFLGVBQWUsRUFBQTtFQUVqQjs7SUFFRSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLnRpbWVsaW5lIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAwIDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRpbWVsaW5lIGg2IHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi50aW1lbGluZTpiZWZvcmUge1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICB3aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgbGVmdDogNDklO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMS41cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDgwLCA4MCwgODApO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg4MCwgODAsIDgwLCAwKSAwJSwgcmdiKDgwLCA4MCwgODApIDglLCByZ2IoODAsIDgwLCA4MCkgOTIlLCByZ2JhKDgwLCA4MCwgODAsIDApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMzAsIDg3LCAxNTMsIDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDEyNSwgMTg1LCAyMzIsIDEpKSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDgwLCA4MCwgODAsIDApIDAlLCByZ2IoODAsIDgwLCA4MCkgOCUsIHJnYig4MCwgODAsIDgwKSA5MiUsIHJnYmEoODAsIDgwLCA4MCwgMCkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg4MCwgODAsIDgwLCAwKSAwJSwgcmdiKDgwLCA4MCwgODApIDglLCByZ2IoODAsIDgwLCA4MCkgOTIlLCByZ2JhKDgwLCA4MCwgODAsIDApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDgwLCA4MCwgODAsIDApIDAlLCByZ2IoODAsIDgwLCA4MCkgOCUsIHJnYig4MCwgODAsIDgwKSA5MiUsIHJnYmEoODAsIDgwLCA4MCwgMCkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg4MCwgODAsIDgwLCAwKSAwJSwgcmdiKDgwLCA4MCwgODApIDglLCByZ2IoODAsIDgwLCA4MCkgOTIlLCByZ2JhKDgwLCA4MCwgODAsIDApIDEwMCUpO1xyXG59XHJcbi50aW1lbGluZSA+IGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcclxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4udGltZWxpbmUgPiBsaTphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxyXG4udGltZWxpbmUgPiBsaTphZnRlciB7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcclxuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XHJcbn1cclxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDEwcHg7XHJcbiAgbGVmdDogLTEwcHg7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMTBweDtcclxuICBsZWZ0OiAtMTBweDtcclxuICByaWdodDogYXV0bztcclxufVxyXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTI4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgei1pbmRleDogODtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDEycHg7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwcHg7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogLTEycHg7XHJcbn1cclxuLnRpbWVsaW5lLWludmVydGVkIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcclxuICBib3JkZXItbGVmdC13aWR0aDogMTJweDtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAtMTJweDtcclxufVxyXG4udGltZWxpbmUtaGVhZGluZyB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnRpbWVsaW5lLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi50aW1lbGluZS1ib2R5ID4gcCxcclxuLnRpbWVsaW5lLWJvZHkgPiB1bCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuLnRpbWVsaW5lLWJvZHkgPiBwICsgcCB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUgLmRhdGUtaW5mbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTJweDtcclxuICBsZWZ0OiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yOHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC5kYXRlLWluZm8tc3RhcnQge1xyXG4gIGxlZnQ6IDM0JTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWludmVydGVkIC5kYXRlLWluZm8tc3RhcnQge1xyXG4gIGxlZnQ6IDQ4JTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWludmVydGVkIC5kYXRlLWluZm8tZW5kIHtcclxuICBsZWZ0OiA1NC41JTtcclxufVxyXG5cclxuLmRhdGUtaW5mbyAubW9udGgge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxlZnQ6IDcwcHg7XHJcbn1cclxuLmRhdGUtaW5mbyAueWVhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGVmdDogNzBweDtcclxufVxyXG4uZGF0ZS1pbmZvIC5kYXkge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudGltZWxpbmU6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDAuOSU7XHJcbiAgfVxyXG4gIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcclxuICAgIGxlZnQ6IDIuMiU7XHJcbiAgfVxyXG4gIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgfVxyXG4gIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTBweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxMHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLmRhdGUtaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIGxlZnQ6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICAuZGF0ZS1pbmZvLXN0YXJ0IHtcclxuICAgIGxlZnQ6IDIxJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGF0ZS1pbmZvLWVuZCB7XHJcbiAgICBsZWZ0OiAzOSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRhdGUtaW5mbyAuZGF5IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmRhdGUtaW5mbyAubW9udGgsXHJcbiAgLmRhdGUtaW5mbyAueWVhciB7XHJcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuIiwiJG1haW4tY29sb3I6ICNmYTU5NTk7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/timeline/timeline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
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

module.exports = __webpack_require__(/*! C:\Repos\fresh-portfolio\fresh-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
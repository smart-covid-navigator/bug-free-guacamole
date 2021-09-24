(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./angular2-ui-switch/src/index.ts":
/*!*****************************************!*\
  !*** ./angular2-ui-switch/src/index.ts ***!
  \*****************************************/
/*! exports provided: UiSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return UiSwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-switch.component */ "./angular2-ui-switch/src/ui-switch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiSwitchModule = /** @class */ (function () {
    function UiSwitchModule() {
    }
    UiSwitchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ui_switch_component__WEBPACK_IMPORTED_MODULE_1__["UiSwitchComponent"]],
            exports: [_ui_switch_component__WEBPACK_IMPORTED_MODULE_1__["UiSwitchComponent"]]
        })
    ], UiSwitchModule);
    return UiSwitchModule;
}());



/***/ }),

/***/ "./angular2-ui-switch/src/ui-switch.component.ts":
/*!*******************************************************!*\
  !*** ./angular2-ui-switch/src/ui-switch.component.ts ***!
  \*******************************************************/
/*! exports provided: UiSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return UiSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiSwitchComponent; }),
    multi: true
};
var UiSwitchComponent = /** @class */ (function () {
    function UiSwitchComponent() {
        this.onTouchedCallback = function (v) {
        };
        this.onChangeCallback = function (v) {
        };
        this.size = 'medium';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
    }
    Object.defineProperty(UiSwitchComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(UiSwitchComponent.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (v) {
            this._reverse = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    UiSwitchComponent.prototype.getColor = function (flag) {
        if (flag === 'borderColor')
            return this.defaultBoColor;
        if (flag === 'switchColor') {
            if (this.reverse)
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse)
            return !this.checked ? this.color : this.defaultBgColor;
        return this.checked ? this.color : this.defaultBgColor;
    };
    UiSwitchComponent.prototype.onToggle = function () {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    };
    UiSwitchComponent.prototype.writeValue = function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    };
    UiSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    UiSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UiSwitchComponent.prototype, "checked", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UiSwitchComponent.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UiSwitchComponent.prototype, "reverse", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiSwitchComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UiSwitchComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiSwitchComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiSwitchComponent.prototype, "switchOffColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UiSwitchComponent.prototype, "switchColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UiSwitchComponent.prototype, "onToggle", null);
    UiSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-switch',
            template: "\n  <span class=\"switch\" \n  [class.checked]=\"checked\" \n  [class.disabled]=\"disabled\"\n  [class.switch-large]=\"size === 'large'\"\n  [class.switch-medium]=\"size === 'medium'\"\n  [class.switch-small]=\"size === 'small'\"\n  [style.background-color]=\"getColor('')\"\n  [style.border-color]=\"getColor('borderColor')\"\n  >\n  <small [style.background]=\"getColor('switchColor')\">\n  </small>\n  </span>\n  ",
            styles: ["\n    .switch {\n    background: #f00;\n    border: 1px solid #dfdfdf;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box;\n    overflow: visible;\n    padding: 0;\n    margin: 0;            \n    cursor: pointer;\n    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }        \n\n    small {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);          \n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    .switch-large {\n    width: 66px;\n    height: 40px;\n    border-radius: 40px;\n    }\n\n    .switch-large small {\n    width: 40px;\n    height: 40px;\n    }\n\n    .switch-medium {\n    width: 50px;\n    height: 30px;\n    border-radius: 30px;\n    }\n\n    .switch-medium small {\n    width: 30px;\n    height: 30px;\n    }\n\n    .switch-small {\n    width: 33px;\n    height: 20px;\n    border-radius: 20px;\n    }\n\n    .switch-small small {\n    width: 20px;\n    height: 20px;\n    }\n\n    .checked {\n    background: rgb(100, 189, 99);\n    border-color: rgb(100, 189, 99);\n    }\n\n    .switch-large.checked small {\n    left: 26px;\n    }\n\n    .switch-medium.checked small {\n    left: 20px;\n    }\n\n    .switch-small.checked small {\n    left: 13px;\n    }\n\n    .disabled {\n    opacity: .50;\n    cursor: not-allowed;\n    }\n    "],
            providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
        })
    ], UiSwitchComponent);
    return UiSwitchComponent;
}());



/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _smart_initialization_smart_launch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart-initialization/smart-launch.component */ "./src/app/smart-initialization/smart-launch.component.ts");
/* harmony import */ var _smart_initialization_smart_token_reception_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-initialization/smart-token-reception.component */ "./src/app/smart-initialization/smart-token-reception.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_entry_and_visualization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-entry-and-visualization.component */ "./src/app/routes/entry-and-visualization/variant-entry-and-visualization.component.ts");
/* harmony import */ var _routes_ehr_instructions_ehr_instructions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/ehr-instructions/ehr-instructions.component */ "./src/app/routes/ehr-instructions/ehr-instructions.component.ts");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _routes_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/team/team.component */ "./src/app/routes/team/team.component.ts");
/* harmony import */ var _routes_db_analysis_db_analysis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/db-analysis/db-analysis.component */ "./src/app/routes/db-analysis/db-analysis.component.ts");
/* harmony import */ var _routes_entry_and_visualization_covid_cancer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/entry-and-visualization/covid-cancer.component */ "./src/app/routes/entry-and-visualization/covid-cancer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "smart-launch", component: _smart_initialization_smart_launch_component__WEBPACK_IMPORTED_MODULE_2__["SMARTLaunchComponent"] },
    { path: "token-reception", component: _smart_initialization_smart_token_reception_component__WEBPACK_IMPORTED_MODULE_3__["SMARTTokenReceptionComponent"] },
    { path: "app", component: _routes_entry_and_visualization_variant_entry_and_visualization_component__WEBPACK_IMPORTED_MODULE_4__["VariantEntryAndVisualizationComponent"] },
    { path: "cancer", component: _routes_entry_and_visualization_covid_cancer_component__WEBPACK_IMPORTED_MODULE_9__["CovidCancerComponent"] },
    { path: "ehr-login", component: _routes_ehr_instructions_ehr_instructions_component__WEBPACK_IMPORTED_MODULE_5__["EHRLoginComponent"] },
    { path: "home", component: _routes_home_home_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"] },
    { path: "team", component: _routes_team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"] },
    { path: "db-analysis", component: _routes_db_analysis_db_analysis_component__WEBPACK_IMPORTED_MODULE_8__["DBAnalysisComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: "\n    <github-fork-us></github-fork-us>\n    \n    <header></header>\n    <router-outlet></router-outlet>\n  ",
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular2_ui_switch_src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../angular2-ui-switch/src */ "./angular2-ui-switch/src/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_selector_variant_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-selector/variant-selector.component */ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.component.ts");
/* harmony import */ var _smart_initialization_smart_launch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./smart-initialization/smart-launch.component */ "./src/app/smart-initialization/smart-launch.component.ts");
/* harmony import */ var _smart_initialization_smart_token_reception_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./smart-initialization/smart-token-reception.component */ "./src/app/smart-initialization/smart-token-reception.component.ts");
/* harmony import */ var _routes_entry_and_visualization_filterable_search_filterable_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/entry-and-visualization/filterable-search/filterable-search.component */ "./src/app/routes/entry-and-visualization/filterable-search/filterable-search.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_assocs_assocs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/assocs/assocs.component */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_assocs_drug_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/assocs/drug-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/drug-modal.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_assocs_disease_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/assocs/disease-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/disease-modal.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_clinical_trials_clinical_trials_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component */ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_drugs_drug_details_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_gene_gene_information_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/gene/gene-information.component */ "./src/app/routes/entry-and-visualization/variant-visualization/gene/gene-information.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_variant_variant_information_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/variant/variant-information.component */ "./src/app/routes/entry-and-visualization/variant-visualization/variant/variant-information.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_variant_visualization_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/variant-visualization.component */ "./src/app/routes/entry-and-visualization/variant-visualization/variant-visualization.component.ts");
/* harmony import */ var _routes_ehr_instructions_ehr_instructions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes/ehr-instructions/ehr-instructions.component */ "./src/app/routes/ehr-instructions/ehr-instructions.component.ts");
/* harmony import */ var _routes_feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./routes/feedback-form/feedback-form-modal.component */ "./src/app/routes/feedback-form/feedback-form-modal.component.ts");
/* harmony import */ var _universal_components_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./universal-components/header.component */ "./src/app/universal-components/header.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_variant_classifications_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_entry_and_visualization_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-entry-and-visualization.component */ "./src/app/routes/entry-and-visualization/variant-entry-and-visualization.component.ts");
/* harmony import */ var _routes_entry_and_visualization_covid_cancer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./routes/entry-and-visualization/covid-cancer.component */ "./src/app/routes/entry-and-visualization/covid-cancer.component.ts");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _universal_components_github_fork_us_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./universal-components/github-fork-us.component */ "./src/app/universal-components/github-fork-us.component.ts");
/* harmony import */ var _routes_team_team_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./routes/team/team.component */ "./src/app/routes/team/team.component.ts");
/* harmony import */ var _routes_db_analysis_db_analysis_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./routes/db-analysis/db-analysis.component */ "./src/app/routes/db-analysis/db-analysis.component.ts");
/* harmony import */ var _routes_entry_and_visualization_condition_visualization_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./routes/entry-and-visualization/condition-visualization.component */ "./src/app/routes/entry-and-visualization/condition-visualization.component.ts");
/* harmony import */ var _routes_entry_and_visualization_cancer_visualization_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./routes/entry-and-visualization/cancer-visualization.component */ "./src/app/routes/entry-and-visualization/cancer-visualization.component.ts");
/* harmony import */ var _routes_entry_and_visualization_clinical_trial_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./routes/entry-and-visualization/clinical-trial-modal.component */ "./src/app/routes/entry-and-visualization/clinical-trial-modal.component.ts");
/* harmony import */ var _routes_entry_and_visualization_cancer_trials_modal_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./routes/entry-and-visualization/cancer-trials-modal.component */ "./src/app/routes/entry-and-visualization/cancer-trials-modal.component.ts");
/* harmony import */ var _routes_entry_and_visualization_covid_cancer_tabs_covid_patient_information_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./routes/entry-and-visualization/covid-cancer-tabs/covid-patient-information.component */ "./src/app/routes/entry-and-visualization/covid-cancer-tabs/covid-patient-information.component.ts");
/* harmony import */ var _routes_entry_and_visualization_covid_cancer_tabs_cancer_drugs_information_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./routes/entry-and-visualization/covid-cancer-tabs/cancer-drugs-information.component */ "./src/app/routes/entry-and-visualization/covid-cancer-tabs/cancer-drugs-information.component.ts");
/* harmony import */ var _routes_entry_and_visualization_covid_cancer_tabs_cancer_summary_modal_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./routes/entry-and-visualization/covid-cancer-tabs/cancer-summary-modal.component */ "./src/app/routes/entry-and-visualization/covid-cancer-tabs/cancer-summary-modal.component.ts");
/* harmony import */ var _routes_home_comment_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./routes/home/comment-modal.component */ "./src/app/routes/home/comment-modal.component.ts");
/* harmony import */ var _universal_components_logout_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./universal-components/logout.component */ "./src/app/universal-components/logout.component.ts");
/* harmony import */ var _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./smart-initialization/smart-reference.service */ "./src/app/smart-initialization/smart-reference.service.ts");
/* harmony import */ var _routes_entry_and_visualization_genomic_data_providers_myvariantinfo_search_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_assocs_assocs_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/assocs/assocs.service */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.service.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_clinical_trials_clinical_trials_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service */ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-selector/variant-selector.service */ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_drugs_drugs_search_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service.ts");
/* harmony import */ var _routes_entry_and_visualization_genomic_data_providers_mygeneinfo_search_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service.ts");
/* harmony import */ var _routes_entry_and_visualization_genomic_data_providers_utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts");
/* harmony import */ var _routes_entry_and_visualization_genomic_data_providers_csv_reader_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./routes/entry-and-visualization/genomic-data-providers/csv-reader.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/csv-reader.service.ts");
/* harmony import */ var _routes_entry_and_visualization_genomic_data_providers_xlsx_reader_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./routes/entry-and-visualization/genomic-data-providers/xlsx-reader.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/xlsx-reader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules








// Components
































// Services










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular2_ui_switch_src__WEBPACK_IMPORTED_MODULE_7__["UiSwitchModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _universal_components_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                _routes_entry_and_visualization_variant_entry_and_visualization_component__WEBPACK_IMPORTED_MODULE_25__["VariantEntryAndVisualizationComponent"],
                _routes_entry_and_visualization_covid_cancer_component__WEBPACK_IMPORTED_MODULE_26__["CovidCancerComponent"],
                _routes_entry_and_visualization_variant_visualization_variant_visualization_component__WEBPACK_IMPORTED_MODULE_20__["VariantVisualizationComponent"],
                _routes_entry_and_visualization_variant_selector_variant_selector_component__WEBPACK_IMPORTED_MODULE_9__["VariantSelectorComponent"],
                _smart_initialization_smart_launch_component__WEBPACK_IMPORTED_MODULE_10__["SMARTLaunchComponent"],
                _smart_initialization_smart_token_reception_component__WEBPACK_IMPORTED_MODULE_11__["SMARTTokenReceptionComponent"],
                _routes_entry_and_visualization_filterable_search_filterable_search_component__WEBPACK_IMPORTED_MODULE_12__["FilterableSearchComponent"],
                _routes_entry_and_visualization_variant_visualization_variant_variant_information_component__WEBPACK_IMPORTED_MODULE_19__["VariantInformationComponent"],
                _routes_entry_and_visualization_variant_visualization_clinical_trials_clinical_trials_component__WEBPACK_IMPORTED_MODULE_16__["ClinicalTrialsComponent"],
                _routes_entry_and_visualization_variant_visualization_assocs_assocs_component__WEBPACK_IMPORTED_MODULE_13__["AssocsComponent"],
                _routes_entry_and_visualization_variant_visualization_assocs_drug_modal_component__WEBPACK_IMPORTED_MODULE_14__["DrugModalComponent"],
                _routes_entry_and_visualization_variant_visualization_assocs_disease_modal_component__WEBPACK_IMPORTED_MODULE_15__["DiseaseModalComponent"],
                _routes_entry_and_visualization_variant_visualization_gene_gene_information_component__WEBPACK_IMPORTED_MODULE_18__["GeneInformationComponent"],
                _routes_entry_and_visualization_variant_visualization_drugs_drug_details_modal_component__WEBPACK_IMPORTED_MODULE_17__["DrugDetailsModalComponent"],
                _routes_entry_and_visualization_variant_visualization_variant_classifications_modal_component__WEBPACK_IMPORTED_MODULE_24__["ClassificationsModalComponent"],
                _routes_ehr_instructions_ehr_instructions_component__WEBPACK_IMPORTED_MODULE_21__["EHRLoginComponent"],
                _routes_home_home_component__WEBPACK_IMPORTED_MODULE_27__["LandingPageComponent"],
                _universal_components_github_fork_us_component__WEBPACK_IMPORTED_MODULE_28__["GithubForkUsComponent"],
                _routes_feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_22__["FeedbackFormModalComponent"],
                _routes_team_team_component__WEBPACK_IMPORTED_MODULE_29__["TeamComponent"],
                _routes_db_analysis_db_analysis_component__WEBPACK_IMPORTED_MODULE_30__["DBAnalysisComponent"],
                _routes_entry_and_visualization_condition_visualization_component__WEBPACK_IMPORTED_MODULE_31__["ConditionVisualizationComponent"],
                _routes_entry_and_visualization_cancer_visualization_component__WEBPACK_IMPORTED_MODULE_32__["CancerVisualizationComponent"],
                _routes_entry_and_visualization_clinical_trial_modal_component__WEBPACK_IMPORTED_MODULE_33__["ClinicalTrialModalComponent"],
                _routes_entry_and_visualization_cancer_trials_modal_component__WEBPACK_IMPORTED_MODULE_34__["CancerTrialsModalComponent"],
                _routes_entry_and_visualization_covid_cancer_tabs_covid_patient_information_component__WEBPACK_IMPORTED_MODULE_35__["CovidPatientInformationComponent"],
                _routes_entry_and_visualization_covid_cancer_tabs_cancer_drugs_information_component__WEBPACK_IMPORTED_MODULE_36__["CancerDrugsInformationComponent"],
                _routes_entry_and_visualization_covid_cancer_tabs_cancer_summary_modal_component__WEBPACK_IMPORTED_MODULE_37__["CancerSummaryModalComponent"],
                _routes_home_comment_modal_component__WEBPACK_IMPORTED_MODULE_38__["CommentModalComponent"],
                _universal_components_logout_component__WEBPACK_IMPORTED_MODULE_39__["LogoutComponent"]
            ],
            entryComponents: [
                _routes_entry_and_visualization_variant_visualization_drugs_drug_details_modal_component__WEBPACK_IMPORTED_MODULE_17__["DrugDetailsModalComponent"],
                _routes_entry_and_visualization_variant_visualization_variant_classifications_modal_component__WEBPACK_IMPORTED_MODULE_24__["ClassificationsModalComponent"],
                _routes_entry_and_visualization_variant_visualization_assocs_drug_modal_component__WEBPACK_IMPORTED_MODULE_14__["DrugModalComponent"],
                _routes_entry_and_visualization_variant_visualization_assocs_disease_modal_component__WEBPACK_IMPORTED_MODULE_15__["DiseaseModalComponent"],
                _routes_feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_22__["FeedbackFormModalComponent"],
                _routes_entry_and_visualization_clinical_trial_modal_component__WEBPACK_IMPORTED_MODULE_33__["ClinicalTrialModalComponent"],
                _routes_entry_and_visualization_cancer_trials_modal_component__WEBPACK_IMPORTED_MODULE_34__["CancerTrialsModalComponent"],
                _routes_entry_and_visualization_covid_cancer_tabs_covid_patient_information_component__WEBPACK_IMPORTED_MODULE_35__["CovidPatientInformationComponent"],
                _routes_entry_and_visualization_covid_cancer_tabs_cancer_drugs_information_component__WEBPACK_IMPORTED_MODULE_36__["CancerDrugsInformationComponent"],
                _routes_entry_and_visualization_covid_cancer_tabs_cancer_summary_modal_component__WEBPACK_IMPORTED_MODULE_37__["CancerSummaryModalComponent"],
                _routes_home_comment_modal_component__WEBPACK_IMPORTED_MODULE_38__["CommentModalComponent"]
            ],
            providers: [
                _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_40__["SMARTReferenceService"],
                _routes_entry_and_visualization_variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_44__["VariantSelectorService"],
                _routes_entry_and_visualization_genomic_data_providers_myvariantinfo_search_service__WEBPACK_IMPORTED_MODULE_41__["MyVariantInfoSearchService"],
                _routes_entry_and_visualization_genomic_data_providers_mygeneinfo_search_service__WEBPACK_IMPORTED_MODULE_46__["MyGeneInfoSearchService"],
                _routes_entry_and_visualization_variant_visualization_assocs_assocs_service__WEBPACK_IMPORTED_MODULE_42__["AssocsService"],
                _routes_entry_and_visualization_variant_visualization_clinical_trials_clinical_trials_service__WEBPACK_IMPORTED_MODULE_43__["ClinicalTrialsService"],
                _routes_entry_and_visualization_variant_visualization_drugs_drugs_search_service__WEBPACK_IMPORTED_MODULE_45__["DrugsSearchService"],
                _routes_entry_and_visualization_genomic_data_providers_utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_47__["JSONNavigatorService"],
                _routes_entry_and_visualization_genomic_data_providers_csv_reader_service__WEBPACK_IMPORTED_MODULE_48__["CSVReader"],
                _routes_entry_and_visualization_genomic_data_providers_xlsx_reader_service__WEBPACK_IMPORTED_MODULE_49__["XLSXReader"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/routes/db-analysis/db-analysis.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/db-analysis/db-analysis.component.ts ***!
  \*************************************************************/
/*! exports provided: DBAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBAnalysisComponent", function() { return DBAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DBAnalysisComponent = /** @class */ (function () {
    function DBAnalysisComponent() {
    }
    DBAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "db-analysis",
            template: "\n    <div class=\"infoCard\">\n      <div class=\"cardContent\">\n        <div>\n          <h1 class=\"thick\">Why Database Analysis?</h1>\n          <hr>\n          <p class=\"regular\">A pressing issue currently in the research community is that of \"research parasites\": those who profit off of the research done by other labs without contributing anything meaningful and new.  By carrying out analysis on the each prominent oncology database, we hope to foster a symbiotic relationship between this app and its information sources.  </p>\n        </div>\n      </div>\n      <div class=\"cardImage\">\n        <div>\n          <img src=\"/assets/db-analysis/civic-oncokb-comparison.png\" class=\"dbAnalysisImage\">\n          <img src=\"/assets/db-analysis/civic-oncokb-comparison-2.png\" class=\"dbAnalysisImage\">\n          <img src=\"/assets/db-analysis/clinvar-civic-oncokb-comparison.png\" class=\"dbAnalysisImage\">\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .infoCard {\n      margin: 10px 5px;\n      overflow: hidden;\n    }\n\n    .cardContent {\n      float: left;\n      width: 100%;\n    }\n\n    .cardImage {\n      float: left;\n      width: 100%;\n      min-width: 150px;\n      max-width: 100%;\n    }\n\n    .cardImage>div, .cardContent>div {\n      float: left;\n      background-color: white;\n      box-shadow: 1px 3px #d5d5d5;\n      border: 1px solid #d1d1d1;\n      padding: 15px;\n      margin: 7px 3px;\n    }\n    \n    .dbAnalysisImage {\n      width: 33.333%;\n      height: auto;\n      float: left;\n    }\n  "]
        })
    ], DBAnalysisComponent);
    return DBAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/routes/ehr-instructions/ehr-instructions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/ehr-instructions/ehr-instructions.component.ts ***!
  \***********************************************************************/
/*! exports provided: EHRLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EHRLoginComponent", function() { return EHRLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_services_cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-services/cms.service */ "./src/app/routes/login-services/cms.service.ts");
/* harmony import */ var _login_services_va_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-services/va.service */ "./src/app/routes/login-services/va.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EHRLoginComponent = /** @class */ (function () {
    function EHRLoginComponent(cmsService, vaService) {
        this.cmsService = cmsService;
        this.vaService = vaService;
    }
    // called when the "Login to CMS" button is clicked.
    EHRLoginComponent.prototype.cmsSignIn = function () {
        localStorage.setItem("cmsUser", "attempt");
        var auth = "https://sandbox.bluebutton.cms.gov/v1/o/authorize/?client_id=" + this.cmsService.clientId + "&redirect_uri=http://localhost:4200/app&response_type=code&state=test1";
        location.href = auth;
    };
    // called when the "Login to VA" button is clicked.
    EHRLoginComponent.prototype.vaSignIn = function () {
        localStorage.setItem("vaUser", "attempt");
        var scope = encodeURIComponent("openid offline_access profile email launch/patient veteran_status.read patient/Observation.read patient/Patient.read patient/Condition.read");
        var auth = "https://sandbox-api.va.gov/oauth2/authorization/?client_id=" + this.vaService.clientId + "&redirect_uri=http://localhost:4200/app&response_type=code&scope=" + scope + "&state=test1";
        location.href = auth;
    };
    EHRLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./ehr-login.component.html */ "./src/app/routes/ehr-instructions/ehr-login.component.html") }),
        __metadata("design:paramtypes", [_login_services_cms_service__WEBPACK_IMPORTED_MODULE_1__["CMSService"],
            _login_services_va_service__WEBPACK_IMPORTED_MODULE_2__["VAService"]])
    ], EHRLoginComponent);
    return EHRLoginComponent;
}());



/***/ }),

/***/ "./src/app/routes/ehr-instructions/ehr-login.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/ehr-instructions/ehr-login.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    #wrapper {\n        padding: 5px;\n        margin: 15px 50px;\n    }\n    \n    .instructionBlock {\n        border: 1px solid #cecece;\n        box-shadow: 1px 3px #cfcfcf;\n        background-color: white;\n        padding: 10px;\n        text-align: center;\n    }\n    \n    .instructionHeading {\n        text-align: center;\n    }\n    \n    .instructionBlock p {\n        font-size: 20px;\n    }\n    \n    .display-2 {\n        font-weight: 550;\n    }\n    \n    .display-4 {\n        font-weight: 500;\n    }\n    \n    button {\n        font-size: 30;\n    }\n    </style>\n    \n    \n    <div id=\"wrapper\">\n        <div class=\"instructionBlock\">\n            <h2 class=\"display-2\" style=\"text-align: center;\">EHR Logins</h2>\n        </div>\n        <hr>\n        <div class=\"instructionBlock\">\n            <h4 class=\"display-4 instructionHeading\">Logins</h4>\n            <button (click)=\"vaSignIn()\">  \n                Login to VA  \n            </button> \n            <br><br>\n            <button (click)=\"cmsSignIn()\">  \n                Login to CMS  \n            </button>\n            \n        </div><br>\n    \n        <div class=\"instructionBlock\">\n            <h4 class=\"display-4 instructionHeading\">Server Information</h4>\n            <p>The SMART COVID Navigator connects to two medical records servers: <b>Vetarans Affairs (VA)</b> and <b>Centers for Medicare and Medicaid Services (CMS)</b>.</p>\n            \n            <p>The app can connect to these servers to display data about a patient's conditions.</p>\n        </div>\n        <br>\n        \n        \n        <br>\n        \n        \n    </div>"

/***/ }),

/***/ "./src/app/routes/entry-and-visualization/cancer-trials-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/cancer-trials-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VISUALIZATION_CONTROL_VALUE_ACCESSOR, CancerTrialsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISUALIZATION_CONTROL_VALUE_ACCESSOR", function() { return VISUALIZATION_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerTrialsModalComponent", function() { return CancerTrialsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _condition_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./condition-info */ "./src/app/routes/entry-and-visualization/condition-info.ts");
/* harmony import */ var _genomic_data_providers_xlsx_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genomic-data-providers/xlsx-reader.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/xlsx-reader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VISUALIZATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CancerTrialsModalComponent; }),
    multi: true
};
var CancerTrialsModalComponent = /** @class */ (function () {
    function CancerTrialsModalComponent(activeModal, xlsxReader) {
        this.activeModal = activeModal;
        this.xlsxReader = xlsxReader;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"])
    ], CancerTrialsModalComponent.prototype, "tissue", void 0);
    CancerTrialsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "clinical-trial-modal",
            template: "\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{tissue.name}}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <ngb-tabset>\n            <ngb-tab title=\"Patient Data\">\n                <ng-template ngbTabContent>\n                    <covid-patient-information [tissue]=\"tissue\"></covid-patient-information>\n                </ng-template>\n            </ngb-tab>\n\n            <ngb-tab title=\"COVID/Cancer Drugs\">\n                <ng-template ngbTabContent>\n                    <cancer-drugs-information [tissue]=\"tissue\"></cancer-drugs-information>\n                </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n    </div>\n    ",
            providers: [VISUALIZATION_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _genomic_data_providers_xlsx_reader_service__WEBPACK_IMPORTED_MODULE_3__["XLSXReader"]])
    ], CancerTrialsModalComponent);
    return CancerTrialsModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/cancer-visualization.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/cancer-visualization.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CancerVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerVisualizationComponent", function() { return CancerVisualizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data_providers_xlsx_reader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genomic-data-providers/xlsx-reader.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/xlsx-reader.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _cancer_trials_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancer-trials-modal.component */ "./src/app/routes/entry-and-visualization/cancer-trials-modal.component.ts");
/* harmony import */ var _covid_cancer_tabs_cancer_summary_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./covid-cancer-tabs/cancer-summary-modal.component */ "./src/app/routes/entry-and-visualization/covid-cancer-tabs/cancer-summary-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CancerVisualizationComponent = /** @class */ (function () {
    function CancerVisualizationComponent(xlsxReader, modalService) {
        this.xlsxReader = xlsxReader;
        this.modalService = modalService;
        this.tissueList = [];
        this.patientConditions = [];
        this.loggedIn = false;
    }
    CancerVisualizationComponent.prototype.ngOnInit = function () {
        this.tissueList = this.xlsxReader.tissueArray;
        this.xlsxReader.readPatientXLSX("hello").subscribe(function (data) {
            // just to get the localStorage into the system
        });
        this.xlsxReader.readDrugsXLSX("hello").subscribe(function (data) {
            // just to get the localStorage into the system
        });
    };
    CancerVisualizationComponent.prototype.showModal = function (tissue) {
        var modalRef = this.modalService.open(_cancer_trials_modal_component__WEBPACK_IMPORTED_MODULE_3__["CancerTrialsModalComponent"], { size: "lg" });
        modalRef.componentInstance.tissue = tissue;
    };
    CancerVisualizationComponent.prototype.summaryModal = function () {
        var modalRef = this.modalService.open(_covid_cancer_tabs_cancer_summary_modal_component__WEBPACK_IMPORTED_MODULE_4__["CancerSummaryModalComponent"], { size: "lg" });
    };
    CancerVisualizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "cancer-visualization",
            template: "\n        <div class=\"textBlock\">\n            <h3>Cancer </h3>\n            <button (click)=\"summaryModal()\" id=\"normal\" style=\"background-color:lightblue\">Summary</button>\n            <span *ngFor=\"let tissue of tissueList\">\n                <button (click)=\"showModal(tissue)\" id=\"normal\" >{{tissue.name}}</button>\n            </span>\n        </div>\n\n        <div class=\"textBlock\">\n            <h3>Legend</h3>\n            <p>\n                Listed above are cancer tissue types. Select one to see more information.\n                <br>\n                The first tab shows outcome statistics for patients with a certain type of cancer and COVID-19. Specifically, it shows the fatality rate for these individuals.\n                <br>\n                The second tab shows clinical studies testing the effectiveness of certain drugs on cancer outcomes. These are drugs that are currently being tested for their effectiveness in treating COVID-19, but could also be useful for cancer treatment.\n            </p>\n        </div>\n    ",
            styles: ["\n        #normal {\n            margin: 12px;\n            font-size: 20px;\n        }\n        .textBlock {\n            padding: 15px;\n            margin-top: 2%;\n            margin-left: 4%;\n            margin-right: 4%;\n            background-color: white;\n        }\n        p {\n            font-size: 20px;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_genomic_data_providers_xlsx_reader_service__WEBPACK_IMPORTED_MODULE_1__["XLSXReader"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], CancerVisualizationComponent);
    return CancerVisualizationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/clinical-trial-modal.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/clinical-trial-modal.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClinicalTrialModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialModalComponent", function() { return ClinicalTrialModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _condition_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./condition-info */ "./src/app/routes/entry-and-visualization/condition-info.ts");
/* harmony import */ var _genomic_data_providers_csv_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genomic-data-providers/csv-reader.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/csv-reader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClinicalTrialModalComponent = /** @class */ (function () {
    function ClinicalTrialModalComponent(activeModal, csvReader) {
        this.activeModal = activeModal;
        this.csvReader = csvReader;
        this.clinicalTrials = [];
        this.totalPapers = 0;
        this.studyingSeverity = 0;
        this.severeSignificant = 0;
        this.severeProportion = 0;
        this.studyingFatality = 0;
        this.fatalitySignificant = 0;
        this.fatalityProportion = 0;
        this.studyingBoth = 0;
        this.bothSignificant = 0;
        this.bothProportion = 0;
    }
    ClinicalTrialModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.csvReader.readCSV(this.conditionName.name).subscribe(function (data) {
            _this.clinicalTrials = data;
            _this.analyzeStudies();
        });
    };
    ClinicalTrialModalComponent.prototype.styleSeverity = function (significance) {
        console.log("hello");
        var result = "background-color:";
        if (significance == "Significant")
            result += "green";
        else if (significance == "Not Significant")
            result += "red";
        else
            result += "white";
        return result;
    };
    ClinicalTrialModalComponent.prototype.analyzeStudies = function () {
        this.totalPapers = this.clinicalTrials.length;
        for (var i = 0; i < this.clinicalTrials.length; i++) {
            var study = this.clinicalTrials[i];
            if (study.severeSignificant != "") {
                this.studyingSeverity += 1;
                if (study.severeSignificant == "Significant") {
                    this.severeSignificant += 1;
                }
            }
            if (study.fatalSignificant != "") {
                this.studyingFatality += 1;
                if (study.fatalSignificant == "Significant") {
                    this.fatalitySignificant += 1;
                }
            }
            if (study.severeSignificant != "" && study.fatalSignificant != "") {
                this.studyingBoth += 1;
                if (study.severeSignificant == "Significant" && study.fatalSignificant == "Significant") {
                    this.bothSignificant += 1;
                }
            }
        }
        this.severeProportion = this.severeSignificant / this.studyingSeverity;
        this.severeProportion *= 100;
        this.severeProportion = Math.round(this.severeProportion);
        this.fatalityProportion = this.fatalitySignificant / this.studyingFatality;
        this.fatalityProportion *= 100;
        this.fatalityProportion = Math.round(this.fatalityProportion);
        this.bothProportion = this.bothSignificant / this.studyingBoth;
        this.bothProportion *= 100;
        this.bothProportion = Math.round(this.bothProportion);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"])
    ], ClinicalTrialModalComponent.prototype, "conditionName", void 0);
    ClinicalTrialModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "clinical-trial-modal",
            template: "\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{conditionName.name}}</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>Number of papers: {{totalPapers}}</p>\n        <p>Proportion of significant findings for severity: {{severeProportion}}% <span style=\"color:red\" *ngIf=\"severeProportion >= 50\">The proportion is above 50%</span></p>\n        <p>Proportion of significant findings for fatality: {{fatalityProportion}}% <span style=\"color:red\" *ngIf=\"severeProportion >= 50\">The proportion is above 50%</span></p>\n        <!-- A bit of info about the studies -->\n        <table class=\"table table-bordered table-striped\" *ngIf=\"clinicalTrials !== undefined\">\n            <thead>\n            </thead>\n            <tbody>\n                <ng-container *ngIf=\"clinicalTrials !== undefined && clinicalTrials.length > 0\">\n                    <tr>\n                        <td style=\"font-weight: bold;\">Study Name</td>\n                        <td style=\"font-weight: bold;\">Date</td>\n                        <td style=\"font-weight: bold;\">Severity Significance</td>\n                        <td style=\"font-weight: bold;\">Fatality Significance</td>\n                    </tr>\n                    <tr *ngFor=\"let trial of clinicalTrials\">\n                        <td><a href=\"{{trial.link}}\">{{trial.name}}</a></td>\n                        <td>{{trial.date}}</td>\n                        <td>{{trial.severeSignificant}}</td>\n                        <td>{{trial.fatalSignificant}}</td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n        <br>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _genomic_data_providers_csv_reader_service__WEBPACK_IMPORTED_MODULE_3__["CSVReader"]])
    ], ClinicalTrialModalComponent);
    return ClinicalTrialModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/condition-info.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/condition-info.ts ***!
  \******************************************************************/
/*! exports provided: Condition, ClinicalTrial, CancerClinicalTrial, CancerDrugClinicalTrial, Tissue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Condition", function() { return Condition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrial", function() { return ClinicalTrial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerClinicalTrial", function() { return CancerClinicalTrial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerDrugClinicalTrial", function() { return CancerDrugClinicalTrial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tissue", function() { return Tissue; });
/*
Various classes to store information about conditions.
Each is described in more detail below.
*/
var Condition = /** @class */ (function () {
    function Condition(name, codes) {
        this.name = name;
        this.codes = codes;
        this.color = 0;
    }
    return Condition;
}());

// stores information about a clinical trial for a condition being examined.
var ClinicalTrial = /** @class */ (function () {
    function ClinicalTrial(name, date, link, severeSignificant, fatalSignificant) {
        this.name = name;
        this.date = date;
        this.link = link;
        this.severeSignificant = severeSignificant;
        this.fatalSignificant = fatalSignificant;
    }
    return ClinicalTrial;
}());

var CancerClinicalTrial = /** @class */ (function () {
    function CancerClinicalTrial(name, cancerType, numberPatients, numberDeaths, fatalityRate) {
        this.name = name;
        this.numberPatients = numberPatients;
        this.numberDeaths = numberDeaths;
        this.fatalityRate = fatalityRate;
        this.cancerType = cancerType;
    }
    return CancerClinicalTrial;
}());

var CancerDrugClinicalTrial = /** @class */ (function () {
    function CancerDrugClinicalTrial(name, cancerType, drug, benefit) {
        this.name = name;
        this.cancerType = cancerType;
        this.drug = drug;
        this.benefit = benefit;
    }
    return CancerDrugClinicalTrial;
}());

var Tissue = /** @class */ (function () {
    function Tissue(name, files) {
        this.name = name;
        this.files = files;
    }
    return Tissue;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/condition-visualization.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/condition-visualization.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConditionVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionVisualizationComponent", function() { return ConditionVisualizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data_providers_csv_reader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genomic-data-providers/csv-reader.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/csv-reader.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _clinical_trial_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clinical-trial-modal.component */ "./src/app/routes/entry-and-visualization/clinical-trial-modal.component.ts");
/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient */ "./src/app/routes/entry-and-visualization/patient.ts");
/* harmony import */ var _login_services_va_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-services/va.service */ "./src/app/routes/login-services/va.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConditionVisualizationComponent = /** @class */ (function () {
    function ConditionVisualizationComponent(csvReader, modalService, vaService) {
        this.csvReader = csvReader;
        this.modalService = modalService;
        this.vaService = vaService;
        this.conditionList = [];
        this.patientConditions = [];
        this.loggedIn = false;
    }
    ConditionVisualizationComponent.prototype.ngOnInit = function () {
        this.conditionList = this.csvReader.conditionArray;
        if (localStorage.getItem("vaUser") == "in") {
            this.loggedIn = true;
            var currentUser = this.vaService.getLocalStorageToken();
            this.vaService.accessToken = currentUser['access_token'];
            this.getVA(currentUser['patient']);
        }
    };
    ConditionVisualizationComponent.prototype.getVA = function (patientId) {
        var _this = this;
        this.vaService.conditionInfo(patientId).subscribe(function (patient) {
            var age = Number(localStorage.getItem("age"));
            console.log(localStorage.getItem("age"));
            // if (age != null && age > 60) {
            _this.conditionList[0].color = 1;
            // }
            var stringified = JSON.stringify(patient);
            var entry = JSON.parse(stringified).entry;
            var conditionsArray = [];
            var codesInArray = [];
            for (var i = 0; i < entry.length; i++) {
                var thisIndex = JSON.stringify(entry[i]);
                var resource = JSON.stringify(JSON.parse(thisIndex).resource);
                var clinicalStatus = JSON.parse(resource).clinicalStatus; // has a tracker of active vs resolved
                var codeOutside = JSON.stringify(JSON.parse(resource).code);
                var coding = JSON.stringify((JSON.parse(codeOutside).coding)[0]);
                var code = JSON.parse(coding).code;
                var display = JSON.parse(coding).display;
                if (!codesInArray.includes(code) && clinicalStatus == "active") { // not already listed, and still an ongoing issue
                    var condition = new _patient__WEBPACK_IMPORTED_MODULE_4__["PatientCondition"](code, display, "VA");
                    conditionsArray.push(condition);
                    codesInArray.push(code);
                    for (var j = 0; j < _this.conditionList.length; j++) {
                        var conditionHere = _this.conditionList[j];
                        var codesForCondition = conditionHere.codes;
                        if (codesForCondition.includes(code)) {
                            _this.conditionList[j].color = 1;
                        }
                    }
                }
            }
        });
    };
    ConditionVisualizationComponent.prototype.getCMS = function () {
    };
    ConditionVisualizationComponent.prototype.showModal = function (condition) {
        var modalRef = this.modalService.open(_clinical_trial_modal_component__WEBPACK_IMPORTED_MODULE_3__["ClinicalTrialModalComponent"], { size: "lg" });
        modalRef.componentInstance.conditionName = condition;
    };
    ConditionVisualizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "condition-visualization",
            template: "\n        <div class=\"textBlock\">\n            <h3>Conditions</h3>\n            <span *ngFor=\"let condition of conditionList\">\n                <button (click)=\"showModal(condition)\" id=\"normal\" [ngStyle]=\"{'background-color':condition.color === 1 ? '#ff9100' : '#dedede'}\">{{condition.name}}</button>\n            </span>\n        </div>\n\n        <div class=\"textBlock\">\n            <h3>Legend</h3>\n            <p>\n                These are conditions that have been shown to possibly be linked to increased severity and mortality rates for COVID-19 patients.\n                <br>\n                Click each condition to see information on recent studies conducted involving each of these risk factors.\n                <br>\n                If you are logged into the VA server, some conditions might highlight as <span style=\"color: #ff9100\">orange</span> above. This signifies that the condition (or some form of it) is present in your profile. \n            </p>\n        </div>\n    ",
            styles: ["\n        #normal {\n            margin: 12px;\n            font-size: 20px;\n        }\n        .textBlock {\n            padding: 15px;\n            margin-top: 2%;\n            margin-left: 4%;\n            margin-right: 4%;\n            background-color: white;\n        }\n        p {\n            font-size: 20px;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_genomic_data_providers_csv_reader_service__WEBPACK_IMPORTED_MODULE_1__["CSVReader"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _login_services_va_service__WEBPACK_IMPORTED_MODULE_5__["VAService"]])
    ], ConditionVisualizationComponent);
    return ConditionVisualizationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/covid-cancer-tabs/cancer-drugs-information.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/covid-cancer-tabs/cancer-drugs-information.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CancerDrugsInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerDrugsInformationComponent", function() { return CancerDrugsInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _condition_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../condition-info */ "./src/app/routes/entry-and-visualization/condition-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CancerDrugsInformationComponent = /** @class */ (function () {
    function CancerDrugsInformationComponent() {
        this.patientData = [];
        this.clinicalTrials = [];
        this.totalPapers = 0;
        this.totalCancerCovid = 0;
        this.totalDeaths = 0;
        this.percentDeaths = 0.00;
    }
    CancerDrugsInformationComponent.prototype.ngOnInit = function () {
        this.patientData = JSON.parse(localStorage.getItem("drugData"));
        this.analyzeStudies();
    };
    CancerDrugsInformationComponent.prototype.analyzeStudies = function () {
        // this.totalPapers = this.patientData.length;
        for (var i = 1; i < this.patientData.length; i++) {
            var study = this.patientData[i];
            if (study["Tissue type"] == this.tissue.name || (study["Tissue type"] == "CNS/Brain" && this.tissue.name == "Brain/CNS")) {
                this.totalPapers += 1;
                var title = study["Title"];
                var cancerType = study["Cancer type"];
                var drug = study["Drug"];
                var benefit = study["Therapeutic association"];
                this.clinicalTrials.push(new _condition_info__WEBPACK_IMPORTED_MODULE_1__["CancerDrugClinicalTrial"](title, cancerType, drug, benefit));
            }
        }
        console.log(this.totalCancerCovid);
        console.log(this.totalDeaths);
        this.percentDeaths = Math.round(this.totalDeaths / this.totalCancerCovid * 100);
        console.log(this.percentDeaths);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _condition_info__WEBPACK_IMPORTED_MODULE_1__["Tissue"])
    ], CancerDrugsInformationComponent.prototype, "tissue", void 0);
    CancerDrugsInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "cancer-drugs-information",
            template: "\n    <br>\n    <div *ngIf=\"tissue.files == 2 || tissue.files == 3\">\n        <p>Total papers: {{totalPapers}}</p>\n        <table class=\"table table-bordered table-striped\" *ngIf=\"clinicalTrials !== undefined\">\n            <thead>\n            </thead>\n            <tbody>\n                <ng-container *ngIf=\"clinicalTrials !== undefined && clinicalTrials.length > 0\">\n                    <tr>\n                        <td style=\"font-weight: bold;\">Study Name</td>\n                        <td style=\"font-weight: bold;\">Cancer Type</td>\n                        <td style=\"font-weight: bold;\">Drug</td>\n                        <td style=\"font-weight: bold;\">Therapeutic Association</td>\n                    </tr>\n                    <tr *ngFor=\"let trial of clinicalTrials\">\n                        <td>{{trial.name}}</td>\n                        <td>{{trial.cancerType}}</td>\n                        <td>{{trial.drug}}</td>\n                        <td>{{trial.benefit}}</td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n    </div>\n    <div *ngIf=\"tissue.files == 1\">\n        <p>There are no entries regarding COVID/Cancer drugs for this tissue type.</p>\n    </div>\n    "
        })
    ], CancerDrugsInformationComponent);
    return CancerDrugsInformationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/covid-cancer-tabs/cancer-summary-modal.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/covid-cancer-tabs/cancer-summary-modal.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CancerSummaryModalComponent, TissueTypeSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerSummaryModalComponent", function() { return CancerSummaryModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TissueTypeSummary", function() { return TissueTypeSummary; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CancerSummaryModalComponent = /** @class */ (function () {
    function CancerSummaryModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.tissueTypes = [
            new TissueTypeSummary("Bladder/Urinary tract"),
            new TissueTypeSummary("Bone and soft tissue"),
            new TissueTypeSummary("Bowel"),
            new TissueTypeSummary("Brain/CNS"),
            new TissueTypeSummary("Breast"),
            new TissueTypeSummary("Cervix"),
            new TissueTypeSummary("Genitourinary"),
            new TissueTypeSummary("Gynecological"),
            new TissueTypeSummary("Head and neck"),
            new TissueTypeSummary("Hematologic not specified"),
            new TissueTypeSummary("Kidney"),
            new TissueTypeSummary("Liver"),
            new TissueTypeSummary("Lung"),
            new TissueTypeSummary("Lymphoid"),
            new TissueTypeSummary("Myeloid"),
            new TissueTypeSummary("Not specified"),
            new TissueTypeSummary("Ovary/Fallopian tube"),
            new TissueTypeSummary("Pleura"),
            new TissueTypeSummary("Prostate"),
            new TissueTypeSummary("Skin"),
            new TissueTypeSummary("Thoracic"),
            new TissueTypeSummary("Thymus")
        ];
    }
    CancerSummaryModalComponent.prototype.ngOnInit = function () {
        var patientData = JSON.parse(localStorage.getItem("covidData"));
        console.log(patientData.length * this.tissueTypes.length);
        for (var i = 1; i < patientData.length; i++) {
            var study = patientData[i];
            var tissueName = study["Tissue type"];
            var cancerCovid = study["Number of cancer patients with COVID-19"];
            var deaths = study["Number of patient deaths"];
            if (cancerCovid != 0 && deaths != "Not applicable") {
                for (var j = 0; j < this.tissueTypes.length; j++) {
                    console.log("hello");
                    if (this.tissueTypes[j].name == tissueName) {
                        // console.log("bye")
                        this.tissueTypes[j].totalCovidCases += cancerCovid;
                        this.tissueTypes[j].totalDeaths += deaths;
                    }
                }
            }
        }
        for (var j = 0; j < this.tissueTypes.length; j++) {
            this.tissueTypes[j].percentFatality = Math.round(this.tissueTypes[j].totalDeaths / this.tissueTypes[j].totalCovidCases * 100);
        }
    };
    CancerSummaryModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "cancer-summary-modal",
            template: "\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Summary</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        \n        <!-- A bit of info about the studies -->\n        <table class=\"table table-bordered table-striped\" *ngIf=\"tissueTypes !== undefined\">\n            <thead>\n            </thead>\n            <tbody>\n                <ng-container *ngIf=\"tissueTypes !== undefined && tissueTypes.length > 0\">\n                    <tr>\n                        <td style=\"font-weight: bold;\">Tissue Type</td>\n                        <td style=\"font-weight: bold;\"># Patients</td>\n                        <td style=\"font-weight: bold;\"># Deaths</td>\n                        <td style=\"font-weight: bold;\">% Fatality</td>\n                    </tr>\n                    <tr *ngFor=\"let tissue of tissueTypes\">\n                        <td>{{tissue.name}}</td>\n                        <td>{{tissue.totalCovidCases}}</td>\n                        <td>{{tissue.totalDeaths}}</td>\n                        <td>{{tissue.percentFatality}}</td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n        <br>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], CancerSummaryModalComponent);
    return CancerSummaryModalComponent;
}());

var TissueTypeSummary = /** @class */ (function () {
    function TissueTypeSummary(name) {
        this.name = name;
        this.totalCovidCases = 0;
        this.totalDeaths = 0;
        this.percentFatality = 0;
    }
    return TissueTypeSummary;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/covid-cancer-tabs/covid-patient-information.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/covid-cancer-tabs/covid-patient-information.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CovidPatientInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidPatientInformationComponent", function() { return CovidPatientInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _condition_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../condition-info */ "./src/app/routes/entry-and-visualization/condition-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CovidPatientInformationComponent = /** @class */ (function () {
    function CovidPatientInformationComponent() {
        this.patientData = [];
        this.clinicalTrials = [];
        this.totalPapers = 0;
        this.totalCancerCovid = 0;
        this.totalDeaths = 0;
        this.percentDeaths = 0.00;
    }
    CovidPatientInformationComponent.prototype.ngOnInit = function () {
        this.patientData = JSON.parse(localStorage.getItem("covidData"));
        this.analyzeStudies();
    };
    CovidPatientInformationComponent.prototype.analyzeStudies = function () {
        // this.totalPapers = this.patientData.length;
        for (var i = 1; i < this.patientData.length; i++) {
            var study = this.patientData[i];
            if (study["Tissue type"] == this.tissue.name) {
                this.totalPapers += 1;
                var title = study["Title"];
                var cancerType = study["Cancer type"];
                var cancerCovid = study["Number of cancer patients with COVID-19"];
                var deaths = study["Number of patient deaths"];
                var fatalityRate = study["Case fatality rate (%)"];
                if (cancerCovid != 0 && deaths != "Not applicable") {
                    this.totalCancerCovid += cancerCovid;
                    this.totalDeaths += deaths;
                    this.clinicalTrials.push(new _condition_info__WEBPACK_IMPORTED_MODULE_1__["CancerClinicalTrial"](title, cancerType, cancerCovid, deaths, Math.round(fatalityRate * 100)));
                }
            }
        }
        console.log(this.totalCancerCovid);
        console.log(this.totalDeaths);
        this.percentDeaths = Math.round(this.totalDeaths / this.totalCancerCovid * 100);
        console.log(this.percentDeaths);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _condition_info__WEBPACK_IMPORTED_MODULE_1__["Tissue"])
    ], CovidPatientInformationComponent.prototype, "tissue", void 0);
    CovidPatientInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "covid-patient-information",
            template: "\n    <br>\n    <div *ngIf=\"tissue.files == 1 || tissue.files == 3\">\n        <p>Total papers: {{totalPapers}}</p>\n        <p># cancer patients with COVID-19: {{totalCancerCovid}}</p>\n        <p># deaths: {{totalDeaths}}</p>\n        <p>% fatality: {{percentDeaths}}%</p>\n        <table class=\"table table-bordered table-striped\" *ngIf=\"clinicalTrials !== undefined\">\n            <thead>\n            </thead>\n            <tbody>\n                <ng-container *ngIf=\"clinicalTrials !== undefined && clinicalTrials.length > 0\">\n                    <tr>\n                        <td style=\"font-weight: bold;\">Study Name</td>\n                        <td style=\"font-weight: bold;\">Cancer type</td>\n                        <td style=\"font-weight: bold;\"># cancer patients with COVID-19</td>\n                        <td style=\"font-weight: bold;\"># deaths</td>\n                        <td style=\"font-weight: bold;\">% Fatality Rate</td>\n                    </tr>\n                    <tr *ngFor=\"let trial of clinicalTrials\">\n                        <td>{{trial.name}}</td>\n                        <td>{{trial.cancerType}}</td>\n                        <td>{{trial.numberPatients}}</td>\n                        <td>{{trial.numberDeaths}}</td>\n                        <td>{{trial.fatalityRate}}%</td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n    </div>\n    <div *ngIf=\"tissue.files == 2\">\n        <p>There are no entries regarding patient statistics for this tissue type.</p>\n    </div>\n    "
        })
    ], CovidPatientInformationComponent);
    return CovidPatientInformationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/covid-cancer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/covid-cancer.component.ts ***!
  \**************************************************************************/
/*! exports provided: CovidCancerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidCancerComponent", function() { return CovidCancerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smart-initialization/smart-reference.service */ "./src/app/smart-initialization/smart-reference.service.ts");
/* harmony import */ var _variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant-selector/variant-selector.service */ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feedback-form/feedback-form-modal.component */ "./src/app/routes/feedback-form/feedback-form-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient */ "./src/app/routes/entry-and-visualization/patient.ts");
/* harmony import */ var _login_services_cms_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login-services/cms.service */ "./src/app/routes/login-services/cms.service.ts");
/* harmony import */ var _login_services_va_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login-services/va.service */ "./src/app/routes/login-services/va.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var VariantWrapper = /** @class */ (function () {
    function VariantWrapper(_index, _variant) {
        var _this = this;
        this.toggleDrawer = function () {
            _this.drawerState = _this.drawerState === "closed" ? "open" : "closed";
        };
        this.index = _index;
        this.variant = _variant;
        this.drawerState = "closed";
        this.saved = false;
    }
    return VariantWrapper;
}());
var CovidCancerComponent = /** @class */ (function () {
    function CovidCancerComponent(selectorService, router, modalService, cmsService, vaService, activatedRoute) {
        this.selectorService = selectorService;
        this.router = router;
        this.modalService = modalService;
        this.cmsService = cmsService;
        this.vaService = vaService;
        this.activatedRoute = activatedRoute;
        // This is what we're using to determine whether the user is worthy to rate our service (has interacted enough with the service).
        this.userInteractionPoints = 0;
        this.askForReview = true;
        this.variants = [];
        this.offerToLinkToEHRInstructions = true;
        this.patientExists = false;
        this.patientObject = null;
        this.patientAge = -1;
        this.patientConditions = [];
        this.patient = null;
        // Toggled by the user depending on whether they want to sync to the EHR their changes right away (as soon as they make them)
        this.autosync = true;
    }
    CovidCancerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addRow();
        this.offerToLinkToEHRInstructions = true;
        this.patientExists = false;
        // everything inside this activatedRoute statement is going towards getting VA/CMS API data
        this.activatedRoute.queryParams.subscribe(function (params) {
            var code = params['code']; // necessary for both logins
            var state = params['state']; // necessary for VA logim
            // va trying to log on for the first time
            if (localStorage.getItem("vaUser") == "attempt") {
                _this.vaService.getToken("User", code, state).subscribe(function (data) {
                    _this.vaService.accessToken = data.access_token;
                    localStorage.setItem("vaUser", "in");
                    location.reload();
                });
            }
            // cms log on for first time
            if (localStorage.getItem("cmsUser") == "attempt") {
                _this.cmsService.getToken("User", code).subscribe(function (data) {
                    _this.cmsService.accessToken = data.access_token;
                    localStorage.setItem("cmsUser", "in");
                    location.reload();
                });
            }
            // can occur after the auto-refresh, or if the user refreshes/navigates to another page
            if (localStorage.getItem("vaUser") == 'in' && localStorage.getItem("cmsUser") == null) {
                var currentUser = _this.vaService.getLocalStorageToken();
                _this.vaService.accessToken = currentUser['access_token'];
                _this.getVAInfo(currentUser['patient']);
            }
            if (localStorage.getItem("cmsUser") == 'in' && localStorage.getItem("vaUser") == null) {
                var currentUser = _this.cmsService.getLocalStorageToken();
                console.log(currentUser);
                _this.cmsService.accessToken = currentUser['access_token'];
                _this.getCMSInfo(currentUser['patient']);
            }
            // if we have the access token for both VA and CMS, then we run a different function to combine their informations
            if (localStorage.getItem("vaUser") == 'in' && localStorage.getItem("cmsUser") == "in") {
                var vaUser = _this.vaService.getLocalStorageToken();
                var cmsUser = _this.cmsService.getLocalStorageToken();
                _this.vaService.accessToken = vaUser['access_token'];
                _this.cmsService.accessToken = cmsUser['access_token'];
                _this.getBothInfo(vaUser['patient'], cmsUser['patient']);
            }
        }, function (error) {
        });
        // As soon as the smart client is loaded from the SMART JS library, this creates the patient info header and populates the patient variants.
        _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__["SMARTClient"].subscribe(function (smartClient) {
            if (smartClient === null) {
                return;
            }
            _this.offerToLinkToEHRInstructions = false;
            // Get all patient information.
            smartClient.patient.read().then(function (p) {
                console.log("Patient read is ", p);
                _this.patientObject = p;
                if (p.birthDate && p.active) {
                    var birthDateValues = p.birthDate.split("-");
                    var timeDiff = Math.abs(Date.now() - new Date(parseInt(birthDateValues[0]), parseInt(birthDateValues[1]), parseInt(birthDateValues[2])).getTime());
                    // Used Math.floor instead of Math.ceil so 26 years and 140 days would be considered as 26, not 27.
                    _this.patientAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                }
                _this.patientExists = true;
            });
            // Get all genomic variants (LOINC 69548-6) attached to this patient carrying HGVS component (LOINC 81290-9)
            smartClient.patient.api.search({ type: "Observation", query: { "code": "69548-6" }, count: 10 })
                .then(function (results) {
                console.log("Successfully got variants!", results);
                if (!results.data.entry) {
                    return;
                }
                if (results.data.entry.length > 0) {
                    _this.removeRow(0); // Start at the first index if we find other variants.
                }
                // For every variant in the query, loop through components and codings to find HGVS = "81290-9"
                var resultIndex = 0;
                var _loop_1 = function (result) {
                    var hgvsID = "0";
                    for (var _i = 0, _a = result.resource.component; _i < _a.length; _i++) {
                        var myComponent = _a[_i];
                        for (var _b = 0, _c = myComponent.code.coding; _b < _c.length; _b++) {
                            var myCoding = _c[_b];
                            if (myCoding.code === "81290-9") {
                                console.log("found HGVS");
                                var index = myComponent.code.coding.indexOf(myCoding);
                                hgvsID = myComponent.valueCodeableConcept.coding[index].code;
                            }
                        }
                    }
                    console.log("Will now add " + hgvsID);
                    _this.selectorService.search(hgvsID).subscribe(function (variants) {
                        if (variants.length === 0) {
                            console.log("NOT GOOD: Couldn't find any search results for " + result.resource.code.text);
                            return;
                        }
                        // Add the first search result to the list (the one with the correct HGVS ID).
                        console.log("Adding", variants[0]);
                        _this.selectorService.getByReference(variants[0])
                            .subscribe(function (variant) {
                            var newWrapper = new VariantWrapper(resultIndex, variant);
                            if (_this.variants.length === resultIndex) {
                                _this.variants.push(newWrapper);
                            }
                            else {
                                _this.variants[resultIndex] = newWrapper;
                            }
                            resultIndex++;
                        });
                    });
                };
                for (var _i = 0, _a = results.data.entry; _i < _a.length; _i++) {
                    var result = _a[_i];
                    _loop_1(result);
                }
            })
                .fail(function (err) {
                console.log("Couldn't query genomic variants error!", err);
            });
            smartClient.patient.api.search({ type: "Condition" })
                .then(function (results) {
                console.log("Got patient conditions:", results);
                if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(results.data.entry) && results.data.entry.length > 0) {
                    for (var _i = 0, _a = results.data.entry; _i < _a.length; _i++) {
                        var entry = _a[_i];
                        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(entry.resource)) {
                            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(entry.resource.code)) {
                                if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(entry.resource.code.text)) {
                                    _this.patientConditions.push(entry.resource.code.text);
                                    console.log("Added " + entry.resource.code.text);
                                }
                            }
                        }
                    }
                }
            })
                .fail(function (err) {
                console.log("The query for patient conditions failed!", err);
            });
        });
    };
    // create a patient using information gotten from files, and put that into the class patient object
    CovidCancerComponent.prototype.createPatient = function (first, last, zip, gender, age, conditionsArray, codesInArray) {
        var patient = new _patient__WEBPACK_IMPORTED_MODULE_8__["Patient"](first, last, zip, gender, age, conditionsArray, codesInArray);
        this.patient = patient;
    };
    // age calculator given birthdate and current date
    CovidCancerComponent.prototype.calculateAge = function (birthDateString) {
        var birthDate = birthDateString.split("-");
        var timeDiff = Math.abs(Date.now() - new Date(parseInt(birthDate[0]), parseInt(birthDate[1]), parseInt(birthDate[2])).getTime());
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        return age;
    };
    // runs if just CMS is logged in
    CovidCancerComponent.prototype.getCMSInfo = function (patientId) {
        var _this = this;
        this.offerToLinkToEHRInstructions = false;
        this.patientExists = true;
        // patient info file reading
        this.cmsService.patientInfo(patientId).subscribe(function (patient) {
            var parsing = JSON.parse(patient);
            var justPatient = JSON.stringify(parsing.entry);
            var bigResource = JSON.stringify(JSON.parse(justPatient)[0]);
            var justResource = JSON.stringify(JSON.parse(bigResource).resource);
            var bigName = JSON.stringify(JSON.parse(justResource).name);
            var given = JSON.parse(bigName)[0].given;
            var last = JSON.parse(bigName)[0].family;
            var first = given[0];
            var fullAddress = JSON.stringify(JSON.parse(justResource).address);
            var justAddress = JSON.stringify(JSON.parse(fullAddress)[0]);
            var zipCode = JSON.parse(justAddress).postalCode;
            var gender = JSON.parse(justResource).gender;
            var birthDate = JSON.parse(justResource).birthDate;
            var age = _this.calculateAge(birthDate);
            // EOB info file reading
            _this.cmsService.eobInfo(patientId).subscribe(function (eob) {
                var entry = JSON.parse(eob).entry;
                var entryString = JSON.stringify(entry);
                var conditionsArray = [];
                var codesInArray = [];
                for (var i = 0; i < entry.length; i++) { // looping through all entries to find 
                    var entryHere = JSON.stringify(JSON.parse(entryString)[i]);
                    var resource = JSON.stringify(JSON.parse(entryHere).resource);
                    var allDiagnoses = JSON.parse(resource).diagnosis;
                    for (var j = 0; j < allDiagnoses.length; j++) {
                        var diagnosisHere = allDiagnoses[j];
                        var diagnosisHereString = JSON.stringify(diagnosisHere);
                        var diagnosisCodeableConcept = JSON.stringify(JSON.parse(diagnosisHereString).diagnosisCodeableConcept);
                        var coding = JSON.parse(diagnosisCodeableConcept).coding;
                        var indexHere = JSON.stringify(coding[0]);
                        var code = JSON.parse(indexHere).code;
                        var display = JSON.parse(indexHere).display;
                        if (code != "9999999") {
                            if (!codesInArray.includes(code)) {
                                var condition = new _patient__WEBPACK_IMPORTED_MODULE_8__["PatientCondition"](code, display, "CMS");
                                conditionsArray.push(condition);
                                codesInArray.push(code);
                            }
                        }
                    }
                }
                // create patient based on information collected in the files
                _this.createPatient(first, last, zipCode, gender, age, conditionsArray, codesInArray);
            });
        });
    };
    // same as the getCMSInfo function, but instead this is for VA.
    CovidCancerComponent.prototype.getVAInfo = function (patientId) {
        var _this = this;
        this.vaService.patientInfo(patientId).subscribe(function (patient) {
            _this.offerToLinkToEHRInstructions = false;
            _this.patientExists = true;
            var stringified = JSON.stringify(patient);
            var name = JSON.stringify((JSON.parse(stringified).name)[0]);
            var lastName = (JSON.parse(name).family)[0];
            var firstName = (JSON.parse(name).given)[0];
            var birthDate = JSON.parse(stringified).birthDate;
            var age = _this.calculateAge(birthDate);
            console.log(age);
            localStorage.setItem("age", age.toString());
            var address = JSON.stringify((JSON.parse(stringified).address)[0]);
            var zipCode = JSON.parse(address).postalCode;
            var gender = JSON.parse(stringified).gender;
            _this.vaService.conditionInfo(patientId).subscribe(function (patient) {
                _this.offerToLinkToEHRInstructions = false;
                _this.patientExists = true;
                var stringified = JSON.stringify(patient);
                var entry = JSON.parse(stringified).entry;
                var conditionsArray = [];
                var codesInArray = [];
                for (var i = 0; i < entry.length; i++) {
                    var thisIndex = JSON.stringify(entry[i]);
                    var resource = JSON.stringify(JSON.parse(thisIndex).resource);
                    var clinicalStatus = JSON.parse(resource).clinicalStatus; // has a tracker of active vs resolved
                    var codeOutside = JSON.stringify(JSON.parse(resource).code);
                    var coding = JSON.stringify((JSON.parse(codeOutside).coding)[0]);
                    var code = JSON.parse(coding).code;
                    var display = JSON.parse(coding).display;
                    if (!codesInArray.includes(code) && clinicalStatus == "active") { // not already listed, and still an ongoing issue
                        var condition = new _patient__WEBPACK_IMPORTED_MODULE_8__["PatientCondition"](code, display, "VA");
                        conditionsArray.push(condition);
                        codesInArray.push(code);
                    }
                }
                _this.createPatient(firstName, lastName, zipCode, gender, age, conditionsArray, codesInArray);
            });
        });
    };
    // if both are logged in, here are the steps that we follow:
    //    - get patient demographics from VA
    //    - get patient conditions from VA
    //    - get patient conditions from CMS (we only get demographics from VA)
    //    - put it all into a Patient object and sent it away
    CovidCancerComponent.prototype.getBothInfo = function (vaPatientId, cmsPatientId) {
        var _this = this;
        // VA demographics
        this.vaService.patientInfo(vaPatientId).subscribe(function (patient) {
            _this.offerToLinkToEHRInstructions = false;
            _this.patientExists = true;
            var stringified = JSON.stringify(patient);
            var name = JSON.stringify((JSON.parse(stringified).name)[0]);
            var lastName = (JSON.parse(name).family)[0];
            var firstName = (JSON.parse(name).given)[0];
            var birthDate = JSON.parse(stringified).birthDate;
            var age = _this.calculateAge(birthDate);
            var address = JSON.stringify((JSON.parse(stringified).address)[0]);
            var zipCode = JSON.parse(address).postalCode;
            var gender = JSON.parse(stringified).gender;
            // VA conditions
            _this.vaService.conditionInfo(vaPatientId).subscribe(function (patient) {
                _this.offerToLinkToEHRInstructions = false;
                _this.patientExists = true;
                var stringified = JSON.stringify(patient);
                var entry = JSON.parse(stringified).entry;
                var conditionsArray = [];
                var codesInArray = [];
                for (var i = 0; i < entry.length; i++) {
                    var thisIndex = JSON.stringify(entry[i]);
                    var resource = JSON.stringify(JSON.parse(thisIndex).resource);
                    var clinicalStatus = JSON.parse(resource).clinicalStatus; // has a tracker of active vs resolved
                    var codeOutside = JSON.stringify(JSON.parse(resource).code);
                    var coding = JSON.stringify((JSON.parse(codeOutside).coding)[0]);
                    var code = JSON.parse(coding).code;
                    var display = JSON.parse(coding).display;
                    if (!codesInArray.includes(code) && clinicalStatus == "active") { // not already listed, and still an ongoing issue
                        var condition = new _patient__WEBPACK_IMPORTED_MODULE_8__["PatientCondition"](code, display, "VA");
                        conditionsArray.push(condition);
                        codesInArray.push(code);
                    }
                }
                // CMS conditions
                _this.cmsService.eobInfo(cmsPatientId).subscribe(function (eob) {
                    var entry = JSON.parse(eob).entry;
                    var entryString = JSON.stringify(entry);
                    for (var i = 0; i < entry.length; i++) { // looping through all entries to find 
                        var entryHere = JSON.stringify(JSON.parse(entryString)[i]);
                        var resource = JSON.stringify(JSON.parse(entryHere).resource);
                        var allDiagnoses = JSON.parse(resource).diagnosis;
                        for (var j = 0; j < allDiagnoses.length; j++) {
                            var diagnosisHere = allDiagnoses[j];
                            var diagnosisHereString = JSON.stringify(diagnosisHere);
                            var diagnosisCodeableConcept = JSON.stringify(JSON.parse(diagnosisHereString).diagnosisCodeableConcept);
                            var coding = JSON.parse(diagnosisCodeableConcept).coding;
                            var indexHere = JSON.stringify(coding[0]);
                            var code = JSON.parse(indexHere).code;
                            var display = JSON.parse(indexHere).display;
                            if (code != "9999999") {
                                if (!codesInArray.includes(code)) {
                                    var condition = new _patient__WEBPACK_IMPORTED_MODULE_8__["PatientCondition"](code, display, "CMS");
                                    conditionsArray.push(condition);
                                    codesInArray.push(code);
                                }
                            }
                        }
                    }
                });
                _this.createPatient(firstName, lastName, zipCode, gender, age, conditionsArray, codesInArray);
            });
        });
    };
    // Row management.
    CovidCancerComponent.prototype.addRow = function () {
        this.variants.push(new VariantWrapper(this.variants.length, null));
    };
    CovidCancerComponent.prototype.addRowMaybe = function (indexInQuestion) {
        if (this.variants.length === indexInQuestion + 1) {
            this.addRow();
        }
        this.userInteractionPoints++;
    };
    CovidCancerComponent.prototype.removeRow = function (index) {
        var variantToRemove = this.variants[index].variant;
        this.variants.splice(index, 1);
        for (var i = 0; i < this.variants.length; i++) {
            this.variants[i].index = i;
        }
        this.removeEHRVariant(variantToRemove);
        this.userInteractionPoints++;
    };
    CovidCancerComponent.prototype.routeToInstructions = function () {
        this.router.navigate(["ehr-login"]);
    };
    CovidCancerComponent.prototype.onToggleAutosync = function (newVal) {
        this.autosync = newVal;
        if (this.autosync) {
            for (var _i = 0, _a = this.variants; _i < _a.length; _i++) {
                var variant = _a[_i];
                if (!variant.saved) {
                    this.saveEHRVariant(variant);
                }
            }
        }
    };
    CovidCancerComponent.prototype.openFeedbackForm = function () {
        this.modalService.open(_feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackFormModalComponent"], { size: "lg" });
        this.askForReview = false;
    };
    // Remove and save EHR variants.
    CovidCancerComponent.prototype.saveEHRVariant = function (variant) {
        if (!this.autosync) {
            return;
        }
        console.log("saving variant");
        _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__["SMARTClient"].subscribe(function (smartClient) {
            if (smartClient === null) {
                return;
            }
            smartClient.patient.read().then(function (p) {
                var dataToTransmit = {
                    "resource": {
                        "resourceType": "Observation",
                        "id": "SMART-Observation-" + p.identifier[0].value + "-variation-" + variant.variant.hgvsID.replace(/[.,\/#!$%\^&\*;:{}<>=\-_`~()]/g, ""),
                        "meta": {
                            "versionId": "1" // ,
                            // "lastUpdated": Date.now().toString()
                        },
                        "text": {
                            "status": "generated",
                            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Variation at " + variant.variant.getLocation() + "</div>"
                        },
                        "status": "final",
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/observation-category",
                                        "code": "laboratory",
                                        "display": "Laboratory"
                                    }
                                ],
                                "text": "Genomic Variant"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "69548-6",
                                    "display": "Genetic variant assessment"
                                }
                            ],
                            "text": "Genetic variant assessment"
                        },
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "LA9633-4",
                                    "display": "Present"
                                }
                            ]
                        },
                        "component": [
                            {
                                "code": {
                                    "coding": [
                                        {
                                            "system": "http://loinc.org",
                                            "code": "81290-9",
                                            "display": "Genomic DNA change (gHGVS)"
                                        }
                                    ]
                                },
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://varnomen.hgvs.org",
                                            "code": variant.variant.hgvsID,
                                            "display": variant.variant.hgvsID
                                        }
                                    ],
                                    "text": variant.variant.hgvsID
                                }
                            },
                            {
                                "code": {
                                    "coding": [
                                        {
                                            "system": "http://loinc.org",
                                            "code": "48018-6",
                                            "display": "Gene studied ID (HGNC)"
                                        }
                                    ]
                                },
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://hl7.org/fhir/uv/genomics-reporting/ValueSet/hgnc",
                                            "code": variant.variant.origin.hugoSymbol,
                                            "display": variant.variant.origin.hugoSymbol
                                        }
                                    ],
                                    "text": variant.variant.origin.hugoSymbol
                                }
                            }
                        ],
                        "subject": {
                            "reference": "Patient/" + p.id
                        },
                    }
                };
                console.log("Adding variant with", dataToTransmit);
                smartClient.api.update(dataToTransmit)
                    .then(function (result) {
                    console.log("Added EHR variant successfully!", result);
                    variant.saved = true;
                })
                    .fail(function (err) {
                    console.log("Failed to add EHR variant", err);
                });
            });
        });
    };
    CovidCancerComponent.prototype.removeEHRVariant = function (variant) {
        if (!this.autosync || variant === null)
            return;
        _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__["SMARTClient"].subscribe(function (smartClient) {
            // We can't do anything without a smartClient!
            if (smartClient === null)
                return;
            smartClient.patient.read().then(function (p) {
                var dataToTransmit = {
                    "resource": {
                        "resourceType": "Observation",
                        "id": "SMART-Observation-" + p.identifier[0].value + "-variation-" + variant.hgvsID.replace(/[.,\/#!$%\^&\*;:{}<>=\-_`~()]/g, ""),
                        "meta": {
                            "versionId": "1" // ,
                            // "lastUpdated": Date.now().toString()
                        },
                        "text": {
                            "status": "generated",
                            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Variation at " + variant.getLocation() + "</div>"
                        },
                        "status": "final",
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/observation-category",
                                        "code": "laboratory",
                                        "display": "Laboratory"
                                    }
                                ],
                                "text": "Genomic Variant"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "69548-6",
                                    "display": "Genetic variant assessment"
                                }
                            ],
                            "text": "Genetic variant assessment"
                        },
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "LA9633-4",
                                    "display": "Present"
                                }
                            ]
                        },
                        "component": [
                            {
                                "code": {
                                    "coding": [
                                        {
                                            "system": "http://loinc.org",
                                            "code": "81290-9",
                                            "display": "Genomic DNA change (gHGVS)"
                                        }
                                    ]
                                },
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://varnomen.hgvs.org",
                                            "code": variant.hgvsID,
                                            "display": variant.hgvsID
                                        }
                                    ],
                                    "text": variant.hgvsID
                                }
                            },
                            {
                                "code": {
                                    "coding": [
                                        {
                                            "system": "http://loinc.org",
                                            "code": "48018-6",
                                            "display": "Gene studied ID (HGNC)"
                                        }
                                    ]
                                },
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://hl7.org/fhir/uv/genomics-reporting/ValueSet/hgnc",
                                            "code": variant.origin.hugoSymbol,
                                            "display": variant.origin.hugoSymbol
                                        }
                                    ],
                                    "text": variant.origin.hugoSymbol
                                }
                            }
                        ],
                        "subject": {
                            "reference": "Patient/" + p.id
                        },
                    }
                };
                console.log("Removing variant with", dataToTransmit);
                smartClient.api.delete(dataToTransmit)
                    .then(function (result) {
                    console.log("Removed EHR variant successfully!", result);
                })
                    .fail(function (err) {
                    console.log("Failed to remove EHR variant", err);
                });
            });
        });
    };
    CovidCancerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "covid-cancer",
            template: "\n    <div id=\"patientLinkState\">\n      <!-- If an EHR link is NOT detected -->\n      <div id=\"suggestEHRLink\" *ngIf=\"offerToLinkToEHRInstructions\">\n        <div id=\"suggestions\">\n          <img src=\"/assets/entry-and-visualization/info-icon.png\">\n          <p class=\"thick\" style=\"color:#fff\">SMART COVID Navigator is not connected to an EHR. <a style=\"color:#891924\" href=\"javascript:void(0)\" (click)=\"routeToInstructions()\">Learn how to connect.</a></p>\n        </div>\n        <button class=\"btn btn-danger\" (click)=\"offerToLinkToEHRInstructions = false\"><div style=\"margin-top:-3px; margin-right:-2px\">&times;</div></button>\n      </div>\n\n      <!-- If an EHR link is detected -->\n      <div id=\"patientInfo\" *ngIf=\"patientExists\" [style.background-color]=\"patient.gender === 'male' ? '#27384f' : '#ff45f7'\">\n        <img [src]=\"patient.gender === 'male' ? '/assets/entry-and-visualization/male-icon.png' : '/assets/entry-and-visualization/female-icon.png'\">\n\n        <!-- Patient Details -->\n        <p style=\"color: white\">\n        <b>Name: </b> {{patient.firstName}} {{patient.lastName}} |\n          <b>Zip Code:</b> {{patient.zipCode}} | <b>Age:</b> {{patient.age}} | \n          <b>Condition:</b> \n          <select style=\"font-size: 15px;\">\n            <option *ngFor=\"let condition of patient.conditions\">{{condition.display}}</option>\n          </select>\n        </p>\n\n        <div id=\"autosyncToggle\">\n          <div>\n            <ui-switch [ngModel]=\"autosync\" (ngModelChange)=\"onToggleAutosync($event)\"></ui-switch>\n            <p class=\"thick\" style=\"color: white\">Auto-Sync</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--\n    <div id=\"variantVisualizations\">\n      <div class=\"variantWrapper\" *ngFor=\"let variant of variants; let i = index\">\n        <div class=\"variantSelector\">\n          <div [style.width]=\"i === variants.length - 1 ? '100%' : 'calc(100% - 38px)'\">\n            <variant-selector [ngModel]=\"variant.variant\"\n                              (ngModelChange)=\"variant.variant = $event; addRowMaybe(i); saveEHRVariant(variant);\"></variant-selector>\n          </div>\n          <button style=\"font-size:200%\" class=\"removeRowButton btn btn-danger\" (click)=\"removeRow(i)\" *ngIf=\"i !== variants.length - 1\"><div style=\"margin-top:-8px; margin-right:-2px;\">&times;</div>\n          </button>\n        </div>\n        <div>\n          <div class=\"visualizationContent\" [@drawerAnimation]=\"variant.drawerState\">\n            <variant-visualization [(ngModel)]=\"variant.variant\"></variant-visualization>\n          </div>\n          <div *ngIf=\"variant.variant !== undefined && variant.variant !== null\" class=\"informationToggle\"\n               (click)=\"variant.toggleDrawer()\">\n            <img src=\"/assets/entry-and-visualization/dropdown.svg\">\n          </div>\n        </div>\n      </div>\n    </div>\n    -->\n    \n    <!-- <div id=\"variantVisualizations\"> -->\n      <cancer-visualization></cancer-visualization>\n    <!-- </div> -->\n    \n    <!-- Review form question -->\n    <div id=\"askForReviewDiv\" *ngIf=\"userInteractionPoints >= 3 && askForReview\">\n      <a href=\"javascript:void(0)\" (click)=\"openFeedbackForm()\">\n        <ngb-alert [type]=\"'primary'\" (close)=\"askForReview = false\">Please review our service!</ngb-alert>\n      </a>\n    </div>\n  ",
            styles: ["\n    p {\n      margin: 0;\n    }\n\n    #patientLinkState {\n      margin-left: 6%;\n      margin-right: 6%;\n    }\n\n    #suggestEHRLink {\n      height: 80px;\n      width: 100%;\n\n      background-color: #dc3545;\n      overflow: hidden;\n    }\n\n    #suggestEHRLink > * {\n      float: left;\n    }\n\n    #suggestEHRLink > #suggestions {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: calc(100% - 60px);\n      height: 100%;\n    }\n\n    #suggestEHRLink img {\n      width: 60px;\n      height: 60px;\n      margin: 1% 10px;\n    }\n\n    #suggestEHRLink p {\n      width: calc(96% - 80px);\n      margin: 1%;\n      font-size: 20px;\n      color: black;\n    }\n\n    #suggestEHRLink button {\n      width: 30px;\n      height: 30px;\n      color: white;\n      font-size: 130%;\n      border-radius: 0px 0px 0px 10px;\n      padding: 0;\n      float: right;\n    }\n\n    #patientLinkState > div {\n      border-bottom-left-radius: 30px;\n      border-bottom-right-radius: 30px;\n    }\n\n    #patientInfo {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      height: 80px;\n      width: 100%;\n\n      overflow: hidden;\n\n      text-align: center;\n    }\n\n    #patientInfo img {\n      width: 60px;\n      height: 60px;\n      margin: 10px;\n    }\n\n    #patientInfo p {\n      width: calc(96% - 280px);\n      margin: 1%;\n      font-size: 20px;\n      color: black;\n    }\n    \n    #autosyncToggle {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      width: 200px;\n      height: 100%;\n    }\n\n    #autosyncToggle > div {\n      width: 100%;\n    }\n\n    #autosyncToggle > div > p {\n      width: 100%;\n    }\n\n    #variantVisualizations {\n      padding: 15px;\n      margin-top: 2%;\n      margin-left: 4%;\n      margin-right: 4%;\n      background-color: white;\n    }\n\n    .variantWrapper {\n      margin-bottom: 5px;\n    }\n\n    .variantSelector {\n      height: 38px;\n    }\n\n    .variantSelector > * {\n      float: left;\n      height: 100%;\n    }\n\n    .removeRowButton {\n      width: 38px;\n      font-size: 20px;\n      color: white;\n      padding: 0;\n    }\n\n    .informationToggle {\n      width: 100%;\n      background-color: #e2e2e2;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      text-align: center;\n      height: 30px;\n    }\n\n    .visualizationContent {\n      overflow: scroll;\n    }\n\n    .informationToggle:hover {\n      background-color: #b2b2b2;\n    }\n\n    .informationToggle img {\n      height: 10px;\n      width: 10px;\n      margin: 10px;\n    }\n\n    #askForReviewDiv {\n      display: block;\n      position: fixed;\n      bottom: 0;\n      left: 0;\n    }\n  "],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("drawerAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: "0"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: "700px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("closed => open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("400ms ease-in-out")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("open => closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("400ms ease-in-out"))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_2__["VariantSelectorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _login_services_cms_service__WEBPACK_IMPORTED_MODULE_9__["CMSService"],
            _login_services_va_service__WEBPACK_IMPORTED_MODULE_10__["VAService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CovidCancerComponent);
    return CovidCancerComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/data-merging.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/data-merging.ts ***!
  \****************************************************************/
/*! exports provided: MergeProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeProperties", function() { return MergeProperties; });
var MergeProperties = function (property1, property2) {
    if (typeof property1 !== typeof property2) {
        console.log(property1 + " and " + property2 + " have a type mismatch, since " + typeof property1 + " is not " + typeof property2);
        return property1;
    }
    // Merge arrays.
    if (property1 instanceof Array) {
        var addToArray = function (toAdd) {
            for (var _i = 0, mergedArray_1 = mergedArray_2; _i < mergedArray_1.length; _i++) {
                var value = mergedArray_1[_i];
                if (value === toAdd) {
                    return;
                }
            }
            mergedArray_2.push(toAdd);
        };
        var mergedArray_2 = Array.from(property1);
        for (var _i = 0, property2_1 = property2; _i < property2_1.length; _i++) {
            var value = property2_1[_i];
            addToArray(value);
        }
    }
    if (property1) {
        if (property2) {
            if (property1 !== property1) {
                console.log("Conflicting values between " + property1 + " and " + property2);
            }
            return property1;
        }
        else {
            return property1;
        }
    }
    else {
        return property2;
    }
};


/***/ }),

/***/ "./src/app/routes/entry-and-visualization/filterable-search/filterable-search.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/filterable-search/filterable-search.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, FilterableSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterableSearchComponent", function() { return FilterableSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * Since the amount of data that one would have to parse through in a dropdown list while dealing
 * with genomic data is far too vast to be encompassed in a single select field, the filterable search
 * box is a vastly preferable alternative.  What"s nice about Angular is that - using Observables -
 * the options access can be delayed in asynchronous fashion.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Observable class extensions

// Observable operators







var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return FilterableSearchComponent; }),
    multi: true
};
var FilterableSearchComponent = /** @class */ (function () {
    function FilterableSearchComponent(myElement) {
        var _this = this;
        this.menuCurrentlyOpen = false; // Used to toggle between display and filter mode.
        this.searchTerms = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // The internal data model (for ngModel)
        this._currentlySelected = null;
        // Placeholders for the callbacks which are later providesd by the Control Value Accessor
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.recalculatePopupWidth = function () {
            _this.desiredPopupWidth = _this.popupToggle.nativeElement.offsetWidth;
        };
        this.clearField = function () {
            _this.currentlySelected = null;
        };
        this.elementRef = myElement;
    }
    Object.defineProperty(FilterableSearchComponent.prototype, "currentlySelected", {
        get: function () {
            return this._currentlySelected;
        },
        set: function (v) {
            if (v !== this.currentlySelected) {
                this._currentlySelected = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    FilterableSearchComponent.prototype.writeValue = function (value) {
        if (value !== this.currentlySelected) {
            this.currentlySelected = value;
        }
    };
    FilterableSearchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    FilterableSearchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // For when the user clicks outside of the dropdown.
    FilterableSearchComponent.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (inside) {
        }
        else {
            this.menuCurrentlyOpen = false;
        }
    };
    /**
     * Automatically resize the popup menu upon creating the menu or resizing the window.
     */
    FilterableSearchComponent.prototype.toggleMenu = function (newState) {
        var _this = this;
        if (newState && typeof newState === "boolean") {
            if (this.menuCurrentlyOpen === newState) {
                return;
            }
            this.menuCurrentlyOpen = newState;
        }
        else {
            this.menuCurrentlyOpen = !this.menuCurrentlyOpen;
        }
        if (!this.menuCurrentlyOpen) {
            return;
        }
        this.recalculatePopupWidth();
        // Doesn"t work without timeout...
        setTimeout(function () { return _this.searchBox.nativeElement.focus(); }, 50);
    };
    FilterableSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Otherwise "Expression changed after checked error"
        setTimeout(function () { return _this.recalculatePopupWidth(); }, 50);
    };
    FilterableSearchComponent.prototype.onResize = function (event) {
        this.recalculatePopupWidth();
    };
    /**
     * Setting search services and the rest of the required components for this filterable search is important
     * to its functionality.
     */
    FilterableSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * Refer to https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html.
         * This is essentially subscribing the options to the searchTerms.
         */
        this.options = this.searchTerms
            .debounceTime(100) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes (ternary operator)
            ? _this.searchService.search(term) // return the http search observable
            : rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of([]); }) // or the observable of empty options if there was no search term
            .catch(function (error) {
            // TODO: add real error handling
            console.log("Search Service Error", error);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of([]);
        });
    };
    // Provide the component with a callback for when an option is selected.
    FilterableSearchComponent.prototype.onSelection = function (option) {
        this.currentlySelected = option;
        this.menuCurrentlyOpen = false;
        console.log("Got chosen", option);
    };
    // Push a search term into the observable stream.
    FilterableSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilterableSearchComponent.prototype, "placeholderString", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterableSearchComponent.prototype, "searchService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("SearchBox"),
        __metadata("design:type", Object)
    ], FilterableSearchComponent.prototype, "searchBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("PopupToggle"),
        __metadata("design:type", Object)
    ], FilterableSearchComponent.prototype, "popupToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("document:click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FilterableSearchComponent.prototype, "handleClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FilterableSearchComponent.prototype, "onResize", null);
    FilterableSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "filterable-search",
            template: "\n    <div #PopupToggle class=\"filterToggle\" (click)=\"toggleMenu(true)\" [style.border-bottom]=\"menuCurrentlyOpen ? '0' : '1px solid #dadada'\">\n      <img src=\"/assets/entry-and-visualization/dropdown.svg\"/>\n\n      <!-- Display selected option before click -->\n      <p *ngIf=\"currentlySelected !== undefined && currentlySelected !== null\" [hidden]=\"menuCurrentlyOpen\" style=\"font-style: normal; font-weight: bold;\">{{currentlySelected.optionName()}}</p>\n      <p *ngIf=\"currentlySelected === undefined || currentlySelected === null\" [hidden]=\"menuCurrentlyOpen\" style=\"font-style: italic; font-weight: normal;\">{{placeholderString}}</p>\n\n      <!-- Switch from p to input on click -->\n      <input autocomplete=\"off\" #SearchBox [hidden]=\"!menuCurrentlyOpen\" (keyup)=\"search(SearchBox.value)\" placeholder=\"Search\" class=\"filterInput form-control\"/>\n    </div>\n    \n    <!-- Suggestions for potential selections -->\n    <div #PopupPanel class=\"lterPanel\" [hidden]=\"!menuCurrentlyOpen\" [style.width.px]=\"desiredPopupWidth\" [style.height.px]=\"(options | async)?.length < 6 ? (options | async)?.length * 48 : 288\">\n      <table class=\"table table-hover\">\n        <tr *ngFor=\"let option of options | async\">\n          <td (click)=\"onSelection(option)\">{{option.optionName()}}</td>\n        </tr>\n      </table>\n    </div>\n  ",
            styles: ["\n    .filterToggle {\n      width: 100%;\n      height: 38px;\n\n      margin: 0;\n\n      font-size: 18px;\n      cursor: pointer;\n\n      border: 1px solid #dadada;\n      background-color: white;\n      overflow: hidden;\n    }\n\n    .filterToggle:hover {\n      background-color: #efefef;\n    }\n\n    .filterToggle p {\n      float: left;\n      width: calc(100% - 43px);\n      margin: 5px 5px 5px 10px;\n    }\n\n    .filterToggle img {\n      float: right;\n      width: 20px;\n      height: 20px;\n      margin-top: 9px;\n      margin-right: 5px;\n    }\n\n    .filterToggle input {\n      width: calc(100% - 28px);\n      height: 36px;\n      margin: 0;\n    }\n\n    .filterPanel {\n      display: block;\n      position: absolute;\n      z-index: 1000;\n\n      background-color: white;\n\n      border: 1px solid #dadada;\n      border-top: 0;\n      \n      height: 95px;\n\n      overflow: scroll;\n    }\n\n    .filterInput {\n      width: 100%;\n    }\n  "],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FilterableSearchComponent);
    return FilterableSearchComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data-providers/csv-reader.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data-providers/csv-reader.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: CSVReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVReader", function() { return CSVReader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _condition_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../condition-info */ "./src/app/routes/entry-and-visualization/condition-info.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CSVReader = /** @class */ (function () {
    function CSVReader(http) {
        this.http = http;
        this.conditionArray = [
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Age", []),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Asthma", ['1945002', '2935001', '8312004', '11641008', '11944003', '12428000', '16862005', '18041002', '18197001', '19849005', '21341004', '23315001', '29422001', '30352005', '31387002', '34015007', '36979006', '41553006', '41997000', '55570000', '56018004', '56507008', '56968009', '57546000', '57607007', '59327009', '61233003', '63088003', '67415000', '71435009', '71892000', '73849000', '80374003', '85761009', '86498000', '87641005', '91053000', '91340006', '92807009', '93432008', '134380003', '134381004', '134383001', '134384007', '135854001', '135855000', '135857008', '135858003', '135859006', '135861002', '135862009', '135863004', '137774002', '138412007', '138796005', '139202009', '147853009', '147877003', '147878008', '147879000', '147880002', '147883000', '147884006', '147885007', '147892002', '147893007', '147894001', '147896004', '147897008', '148446006', '150988003', '150990002', '150991003', '150992005', '150993000', '150994006', '150995007', '151370005', '151715009', '153445004', '153906000', '153907009', '153908004', '153909007', '153910002', '153911003', '153912005', '153913000', '153914006', '153915007', '153916008', '153917004', '154115000', '155574008', '155575009', '155576005', '155577001', '155578006', '155579003', '160377001', '161105008', '161527007', '162660004', '170607007', '170631002', '170632009', '170633004', '170634005', '170635006', '170636007', '170637003', '170638008', '170641004', '170642006', '170643001', '170644007', '170645008', '170646009', '170647000', '170654006', '170655007', '170656008', '170657004', '170658009', '170664002', '170665001', '171231001', '182724005', '182726007', '182727003', '182728008', '182729000', '182730005', '182731009', '183099005', '183478001', '185242005', '185728001', '185729009', '185730004', '185731000', '185732007', '185734008', '185735009', '185736005', '185737001', '185738006', '185940009', '187687003', '195113008', '195939005', '195949008', '195967001', '195968006', '195970002', '195971003', '195972005', '195973000', '195974006', '195975007', '195976008', '195977004', '195978009', '195979001', '195980003', '195981004', '195982006', '195983001', '212766001', '219036002', '219040006', '219043008', '223108004', '225057002', '233678006', '233679003', '233680000', '233681001', '233682008', '233683003', '233684009', '233685005', '233686006', '233687002', '233688007', '233690008', '233691007', '241758002', '266358007', '266359004', '266360009', '266361008', '266362001', '266363006', '266364000', '266365004', '266396008', '266397004', '266398009', '270442000', '274105009', '275908000', '278517007', '281239006', '291366007', '291367003', '291368008', '302220000', '304527002', '307580006', '308500005', '308501009', '312453004', '312454005', '315823007', '316835004', '320636008', '320637004', '320662004', '320672001', '353867005', '360253007', '366786000', '366787009', '366788004', '366789007', '366790003', '366791004', '366792006', '366793001', '366794007', '366795008', '366796009', '366864005', '366865006', '366866007', '366867003', '366868008', '366869000', '366870004', '366871000', '366872007', '366873002', '366874008', '367039004', '367110001', '367268006', '367342002', '367542003', '370202007', '370203002', '370204008', '370205009', '370206005', '370207001', '370208006', '370210008', '370218001', '370219009', '370220003', '370221004', '370225008', '370226009', '373899003', '389145006', '389146007', '389853000', '389857004', '389858009', '389860006', '389862003', '390585000', '390589006', '390590002', '390592005', '390594006', '390798007', '390872009', '390877003', '390878008', '390921001', '390940007', '392739007', '393030008', '393031007', '393036002', '393082005', '393694000', '393986005', '393987001', '393992004', '394033000', '394700004', '394701000', '394720003', '394967008', '395022009', '397579009', '400987003', '401135008', '401182001', '401183006', '401193004', '404804003', '404806001', '404808000', '405010009', '405944004', '406162001', '407674008', '13151001', '409663006', '412775002', '415265005', '416601004', '418395004', '424199006', '424643009', '423889005', '427603009', '427679007', '426979002', '427295004', '426656000', '425969006', '427354000', '429258006', '440666007', '442025000', '443117005', '443450003', '445074007', '445313000', '445531003', '445427006', '448003001', '473391009', '1761000119103', '401000119107', '1751000119100', '698509001', '698605001', '699191007', '699728000', '10742121000119104', '702823004', '704008007', '703953004', '703954005', '707446004', '707445000', '707447008', '707513007', '707444001', '707512002', '707511009', '707980005', '707979007', '707981009', '708038006', '708094006', '708095007', '708096008', '708093000', '708090002', '708358003', '708373002', '10692721000119102', '124991000119109', '99031000119107', '125011000119100', '1741000119102', '125021000119107', '641000119106', '10675991000119100', '10675871000119106', '10675911000119109', '135181000119109', '10676391000119108', '135171000119106', '10674711000119105', '10675551000119104', '10675431000119106', '10675471000119109', '10676591000119100', '10676431000119103', '125001000119103', '10676511000119109', '10692761000119107', '2360001000004109', '711388008', '711442001', '10675631000119109', '10676071000119109', '10676711000119103', '10676151000119101', '10675591000119109', '10676031000119106', '10676631000119100', '10675671000119107', '10675711000119106', '10676191000119106', '10676351000119103', '10676671000119102', '10676551000119105', '10676231000119102', '10676111000119102', '715191006', '4431000175103', '4451000175106', '716542004', '10675751000119107', '10675391000119101', '16584951000119101', '733858005', '734346005', '734904007', '734905008', '72301000119103', '735587000', '735588005', '735589002', '736056000', '762521001', '763077003', '763078008', '763221007', '763694000', '763695004', '773860003', '782513000', '782520007', '782559003', '786836003', '10674991000119104', '5281000124103', '428511000124103', '428531000124109', '432961000124106', '901000119100', '439821000124100', '16055311000119107', '453601000124105', '460011000124102']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Autoimmune disorders", ['127049002', '127050002', '127051003', '127052005', '127061005', '183005', '4301008', '5603006', '10387001', '11110006', '11244009', '11781007', '13172003', '14848000', '18018005', '18750008', '21983002', '22850005', '23092009', '25121006', '26072008', '28032008', '31912009', '33491002', '34506009', '35394006', '41864002', '62609001', '66944004', '68784009', '69679003', '71832003', '71858003', '75316000', '76715008', '81664000', '83728000', '84362007', '85828009', '88331000', '90702000', '91411007', '95329006', '95643007', '106198007', '111585004', '123777002', '128091003', '128092005', '3978000', '22098000', '1468004', '154803002', '154804008', '165877005', '190288004', '190297000', '190454008', '190568004', '191006002', '191209000', '191214001', '191215000', '191216004', '191220000', '191221001', '191224009', '191306005', '191422005', '191423000', '197284004', '232308006', '234381003', '234425008', '235728001', '235890007', '237499004', '237519003', '237536006', '237706000', '237790001', '237822008', '237828007', '238881001', '239899000', '263680009', '275758003', '276575001', '300933005', '307515009', '309742004', '361124009', '361125005', '362992004', '47519003', '84568007', '367437009', '389285005', '390023001', '398937006', '400009001', '402397006', '402398001', '402399009', '402400002', '402401003', '402402005', '127057004', '408335007', '408539000', '413603009', '417492002', '427213005', '426875007', '429217004', '428470000', '432066002', '438476003', '443899007', '446682003', '448542008', '449731009', '449730005', '472968007', '702444009', '707297005', '707443007', '713654004', '715863001', '716743006', '718716008', '721093000', '721198006', '721711009', '721712002', '721713007', '722288007', '722290008', '722872000', '722991004', '723004005', '723022008', '723508002', '724276006', '724809006', '732960002', '732962005', '732963000', '732965007', '732966008', '737249005', '765751002', '771271000', '16098491000119109', '774083009', '778023004', '452281000124106', '1083191000119108']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Cancer", ['15886004', '18412003', '18450009', '30883001', '34563004', '38969003', '46228005', '46347006', '48120004', '48989000', '51939009', '52166007', '52691008', '61321005', '64644003', '74599000', '78080008', '86049000', '87776000', '103084007', '103085008', '103086009', '103087000', '103088005', '103089002', '103090006', '103091005', '103092003', '106241006', '106242004', '115491006', '114451003', '125528006', '125534004', '125540006', '125545001', '125549007', '125553009', '111030006', '130656004', '134405005', '137687004', '137688009', '137689001', '138699008', '139841002', '139847003', '139848008', '139849000', '139850000', '139851001', '139852008', '139853003', '139854009', '139855005', '139857002', '139858007', '154552007', '160284006', '160285007', '160286008', '160287004', '161426000', '162573006', '162579005', '162580008', '162581007', '162582000', '162583005', '162584004', '162585003', '162586002', '162587006', '162589009', '162590000', '182974001', '186709004', '187597000', '187692001', '187730003', '187759003', '187875007', '188214009', '188219004', '188220005', '188221009', '188230001', '188469005', '188470006', '189754004', '191730005', '238701007', '243072006', '243296005', '253036005', '254368001', '254369009', '254381008', '254622008', '254632001', '254637007', '254837009', '254841008', '254843006', '254908006', '255052006', '255072001', '255079005', '255080008', '255088001', '258232002', '266884005', '266987004', '267114006', '269466003', '269613007', '275108004', '275109007', '275110002', '275419009', '275862002', '275937001', '276809004', '276810009', '300930008', '302818005', '304717005', '304745004', '312824007', '315058005', '315266007', '315267003', '315268008', '315269000', '315270004', '315271000', '315272007', '315273002', '315274008', '315276005', '315277001', '128462008', '366980001', '367205006', '369814002', '38807002', '69960004', '93718007', '93735006', '93752005', '93785002', '93813005', '93819009', '93838000', '93859007', '93869001', '93870000', '93897007', '93935003', '93937006', '93938001', '93949007', '93954003', '93999006', '94070007', '94074003', '94091004', '94130002', '94141000', '94381002', '94455000', '94579000', '94602001', '94681006', '371440003', '373785006', '373793006', '373794000', '373795004', '373796003', '373797007', '373798002', '373799005', '373800009', '373811001', '373812008', '373813003', '373814009', '373815005', '373816006', '373817002', '373818007', '373865001', '363350007', '363402007', '363346000', '363348004', '363349007', '363351006', '363352004', '363354003', '363355002', '363357005', '363358000', '363367000', '363375006', '363379000', '363382005', '363385007', '363386008', '363390005', '363392002', '363393007', '363403002', '363406005', '363418001', '363421004', '363429002', '363432004', '363433009', '363438000', '363443007', '363445000', '363448003', '363450006', '363451005', '363454002', '363455001', '363458004', '363459007', '363478007', '363481002', '363482009', '363486007', '363492001', '363493006', '363495004', '363500001', '363505006', '363507003', '363508008', '363510005', '363511009', '363516004', '363518003', '371973000', '93734005', '94222008', '94225005', '94360002', '94391008', '94392001', '385377005', '386604001', '387983000', '388544006', '389278006', '390017006', '392734002', '392747007', '392991003', '393053009', '393087004', '393107000', '393137009', '393139007', '393192000', '393689000', '393702003', '393947006', '394009006', '394038009', '394058005', '394088001', '394090000', '394142009', '394900008', '394920009', '394930000', '395073001', '395081000', '395082007', '395099008', '395100000', '395104009', '395580008', '395581007', '395589009', '395590000', '395594009', '395595005', '395627002', '395628007', '395634000', '395635004', '395639005', '395640007', '395671003', '395672005', '395673000', '395674006', '395684007', '395685008', '396320002', '397614000', '397657005', '397682005', '397715008', '399414003', '399427004', '399626004', '401113000', '401123009', '403593004', '315275009', '162572001', '399068003', '399326009', '405150005', '405827002', '405828007', '406018008', '406019000', '406020006', '406021005', '406022003', '406023008', '406024002', '406025001', '406026000', '406027009', '406028004', '406029007', '406030002', '406031003', '406032005', '406033000', '406034006', '406035007', '406036008', '406037004', '406038009', '406039001', '406040004', '406041000', '406042007', '406043002', '406044008', '406045009', '406046005', '406047001', '406048006', '406049003', '406050003', '406051004', '406052006', '406053001', '406054007', '406055008', '406056009', '406057000', '406058005', '406059002', '406060007', '406061006', '406062004', '406063009', '406064003', '406065002', '406066001', '406067005', '406068000', '406069008', '406070009', '406073006', '406074000', '406075004', '406076003', '406077007', '406078002', '406079005', '406080008', '406081007', '406100007', '405843009', '409713006', '409740006', '411647008', '414205003', '413741005', '413740006', '413738001', '413739009', '413737006', '413736002', '413744002', '414861001', '413745001', '413743008', '413742003', '312940006', '372130007', '416358008', '417084004', '417680009', '15540006', '25654007', '258235000', '258236004', '260879005', '273446001', '30382004', '34537009', '49219005', '46756001', '50237009', '52708004', '68240008', '60275007', '81822003', '80975007', '79598005', '87977001', '421870003', '421411003', '421714007', '423372007', '423183009', '423000007', '422817006', '424887002', '422782004', '423987006', '427492003', '427038005', '426757001', '427196009', '426964009', '428997004', '430331003', '431330007', '431331006', '432519008', '429236009', '429000004', '429011007', '429405004', '439818007', '440388004', '443773007', '444256004', '443830009', '443941007', '444764006', '445050009', '445180002', '445430004', '444987009', '445553001', '444782009', '445333001', '444589003', '405823003', '412736006', '412734009', '412738007', '405826006', '412739004', '448233000', '449096009', '449420002', '449421003', '447883002', '448218008', '449377002', '448509007', '449308006', '449309003', '449066004', '449067008', '448882009', '448668007', '448669004', '448670003', '449205006', '448868009', '449223003', '449224009', '448674007', '448675008', '449034009', '449578008', '449259009', '449260004', '403889000', '468976001', '609102007', '1421000119104', '698470001', '397465003', '397393003', '384756002', '396970009', '384754004', '373167007', '700064004', '699346009', '40939009', '113058009', '701615002', '701616001', '701617005', '146861000119102', '429635001', '10745291000119103', '702455009', '103921000119100', '703135009', '703230006', '703228009', '93779009', '93781006', '94668004', '423480004', '429090009', '424600001', '424486004', '423274005', '371980003', '428944005', '429484003', '428941002', '427844008', '254856004', '705089007', '706970001', '708383003', '708415001', '708387002', '708400002', '708368008', '708395003', '708331005', '708446002', '708404006', '708340009', '708393005', '708432002', '708327004', '708381001', '708435000', '708443005', '708533009', '372099007', '429226001', '428748002', '428047000', '428037003', '428276009', '429251000', '429410000', '434193002', '429247002', '94243009', '94246001', '94217008', '429637009', '429252007', '94186002', '431572009', '429409005', '94161006', '432327003', '431691000', '92613002', '94344001', '94393006', '109837002', '92769003', '94350006', '94642006', '92590009', '92802003', '403468003', '423896007', '403893006', '363474009', '92750008', '423973006', '94348003', '109853004', '94253005', '425213009', '372064008', '92691004', '94503003', '424334007', '369523007', '94634005', '94402006', '425225007', '94627008', '403891008', '373627005', '424260006', '109948008', '94409002', '94398002', '94275007', '109875002', '109836006', '94603006', '92570000', '422599000', '92749008', '92696009', '424549003', '94254004', '92605003', '94665001', '92660005', '109830000', '94339008', '425148008', '92693001', '109912006', '424666005', '94509004', '94636007', '363416002', '92577002', '92767001', '94330007', '94298004', '363483004', '94395004', '92668003', '92568009', '94397007', '92612007', '405822008', '109378008', '708699002', '109838007', '92754004', '92574009', '94351005', '92546004', '109355002', '92679008', '94394000', '425231005', '94410007', '94601008', '92585006', '314994000', '94286009', '92649001', '94580002', '94515004', '92681005', '428880006', '92791005', '92531006', '94336001', '188325002', '94626004', '94494004', '94491007', '94591009', '94396003', '94327000', '94459006', '92621008', '94641004', '109824000', '94312000', '425066001', '94493005', '408649007', '94663008', '92634009', '187777008', '92788005', '109831001', '94365007', '94519005', '422378004', '254656002', '92786009', '92600008', '94606003', '94442001', '94513006', '92672004', '369530001', '109848009', '276821000', '109827007', '92581002', '276822007', '94466007', '94345000', '254986007', '422375001', '422581008', '254898001', '254900004', '269544008', '94446003', '423535002', '422758009', '443488001', '423158009', '423463003', '423793008', '423189008', '423284006', '255124004', '422985007', '423349005', '423464009', '275266006', '423424005', '428269004', '403915004', '402521004', '92740007', '92723003', '402520003', '73891000119108', '1098951000119108', '73751000119108', '402523001', '73771000119104', '1098961000119105', '92745002', '88831000119109', '92747005', '1098931000119102', '92549006', '402522006', '152891000119106', '402509003', '1098941000119106', '1098971000119104', '430954001', '403916003', '430542006', '403919005', '402508006', '73801000119102', '1099291000119102', '402820007', '92598002', '254701007', '92724009', '402819001', '92736003', '92547008', '430703009', '403917007', '402818009', '430527008', '92560002', '402519009', '92719006', '92734000', '709285002', '10987871000119109', '709606007', '408647009', '268542002', '171153008', '171157009', '171155001', '171150006', '243877001', '1098871000119109', '171154002', '171159007', '171162005', '268543007', '171151005', '268547008', '353561000119103', '353741000119106', '275978004', '444638005', '143691000119102', '94347008', '403894000', '403898002', '403892001', '171152003', '712837004', '712849003', '105121000119102', '93679002', '363410008', '93880001', '363413005', '363407001', '363408006', '363414004', '363412000', '363409003', '713613007', '715412008', '4461000175108', '4471000175100', '716593008', '716749005', '716859000', '717129004', '717130009', '718220008', '719864002', '720006006', '720007002', '720008007', '31011000119107', '12275351000119103', '112241000119107', '31001000119109', '722103009', '722081007', '722089009', '722425009', '722712000', '722843001', '723093008', '723115003', '723118001', '723121004', '723301009', '2301000119106', '85121000119109', '1099611000119109', '1099601000119106', '724167008', '13015001000119105', '90671000119109', '286481000119102', '16227531000119109', '724450008', '71241000119100', '724451007', '2291000119105', '128331000119100', '71251000119103', '154051000119101', '81651000119109', '143451000119105', '735385007', '735935009', '31881000119108', '735995007', '736252007', '736595007', '737058005', '762594002', '762996008', '762997004', '762999001', '766707003', '767310001', '429740004', '767444009', '771080008', '771474005', '100721000119109', '100731000119107', '67771000119102', '772992009', '773345007', '781076008', '94143002', '781382000', '782823001', '788891004', '1082701000112100', '1701000124101', '428661000124104', '431171000124108', '433421000124104', '433431000124101', '435561000124107', '436081000124101', '436091000124103', '436221000124109', '436231000124107', '430534005', '446391000124101', '446401000124104', '8980001000004109', '31610001000004101', '27390001000004106', '354741000119109', '4241000175108', '448731000124102', '354701000119107', '30570001000004109', '96901000119105', '85101000119100', '85111000119102', '452061000124109', '452071000124102', '452241000124100', '456441000124100', '457591000124105', '457721000124104', '187734007', '458581000124106', '459381000124106', '459391000124109', '459421000124101', '461371000124103', '461511000124101']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Cardio- and cerebrovascular disease", ['2180001', '6594005', '6636004', '9904008', '111823001', '11662009', '11802008', '14833006', '17679005', '22915003', '26046004', '28319009', '28661005', '29322000', '29845000', '31881008', '34650000', '39468009', '43038000', '45502001', '45639009', '46825001', '48428001', '49601007', '49763002', '54910005', '56545009', '61618002', '62914000', '64715009', '65587001', '70337006', '70808001', '72308001', '72427008', '73466007', '76746007', '80635001', '83337003', '83883001', '105980002', '106063007', '106064001', '107836000', '107837009', '107839007', '107841008', '108276004', '108283006', '108294005', '110997000', '82797006', '111739000', '111970001', '118672003', '118955007', '119759004', '119760009', '119761008', '119762001', '119763006', '112808008', '113021009', '113257007', '118970008', '119201007', '38609002', '112802009', '74478000', '128292002', '128402005', '128409001', '128487001', '128998007', '129898001', '134438001', '135831005', '137673004', '137752008', '138755007', '138770008', '139221001', '139263002', '139264008', '139265009', '140193007', '140196004', '145933007', '146100007', '146213009', '148623002', '149155006', '149268009', '150562007', '150999001', '151069004', '151075008', '151076009', '151079002', '151548006', '154096002', '154383007', '155263000', '155388006', '155405006', '155406007', '155409000', '155410005', '155411009', '155412002', '156142002', '157041002', '157680006', '157821006', '158041000', '158044008', '158332001', '158365009', '158647002', '158648007', '160248004', '160252004', '160270001', '160356004', '161484004', '161499004', '161964009', '162000002', '162001003', '162002005', '162978007', '162981002', '168783002', '168925002', '168995006', '171405001', '182734001', '182763003', '182765005', '182766006', '182768007', '183327007', '185920002', '186870009', '186880008', '186882000', '186883005', '191505005', '191512001', '191964004', '192813004', '194497005', '194707003', '195121002', '195139006', '195163003', '195188006', '195208004', '195216008', '195217004', '195219001', '195221006', '195222004', '195224003', '195237000', '195238005', '195239002', '195244009', '195248007', '195249004', '195251000', '195526002', '195594006', '195595007', '195603001', '195606009', '195609002', '195642001', '199264005', '199265006', '199266007', '199267003', '199268008', '199269000', '199270004', '199271000', '199272007', '199273002', '199274008', '199275009', '199276005', '199278006', '200328002', '200329005', '200330000', '200331001', '200332008', '200333003', '200334009', '204497008', '204502005', '204503000', '204504006', '204506008', '206593006', '206600008', '206632008', '206643000', '206644006', '207002009', '207043009', '207046001', '207457001', '207458006', '207463005', '212716007', '213675003', '216615004', '218848005', '218920009', '223068004', '223078001', '223218004', '223219007', '223220001', '223221002', '223222009', '223223004', '228370003', '229196003', '230689003', '230690007', '230691006', '230738008', '232844005', '237867001', '241998008', '251062007', '251063002', '251064008', '251065009', '251066005', '251067001', '251081004', '256899007', '258541006', '260568008', '265845006', '266131008', '266275004', '266312006', '266315008', '266316009', '266703006', '266805009', '266894000', '266995000', '267037003', '267117004', '267145005', '267207004', '267208009', '267321000', '270883006', '271371007', '271883001', '271910006', '271925006', '271966006', '272518008', '274525000', '276341003', '276510003', '278198007', '279771007', '281233007', '281240008', '281467004', '281827007', '282728007', '284190000', '284447007', '286561001', '286742002', '288132004', '288253004', '288723005', '294953000', '296974001', '300007000', '300852003', '300876006', '301180005', '301181009', '301182002', '301358001', '301390006', '301458000', '302116007', '302909007', '303476002', '303490004', '303669000', '303680000', '303815004', '307711003', '308064009', '309468007', '309513005', '310611001', '312035001', '312122008', '312135004', '312150008', '312286002', '314804007', '315819004', '315822002', '316571006', '316677002', '316680001', '316685006', '316708004', '318642007', '318742001', '319467009', '319480007', '350595004', '353703003', '13352000', '1508000', '362029003', '363000009', '363001008', '363002001', '363003006', '363004000', '363005004', '363028003', '363199000', '363294003', '363315004', '363696006', '34945008', '364066008', '364070000', '364071001', '366157005', '366178008', '366181003', '366744006', '366745007', '366747004', '366748009', '366761009', '366762002', '366839007', '366840009', '46219009', '66130006', '67360000', '79692001', '108231004', '268902002', '373247007', '373630003', '293416008', '315757009', '392806002', '393038001', '393760008', '393994003', '395048001', '395112001', '135832003', '397815001', '397893009', '399027007', '399231008', '399367004', '135833008', '405147007', '405617006', '408421006', '191962000', '162979004', '417287002', '417322008', '417206009', '275526006', '315628000', '424064009', '424225000', '424444005', '422685009', '163125004', '427259007', '427065003', '425642008', '426033005', '162982009', '271304000', '429074009', '428613004', '429785003', '162983004', '428668000', '427810001', '429284000', '429993008', '433183000', '432995009', '160254003', '438825005', '439590007', '439827008', '439393008', '440140008', '439724007', '440358008', '162980001', '441526008', '441529001', '442617003', '441630004', '164776000', '441759008', '441960006', '441829007', '441735003', '442668000', '441894009', '442024001', '442676003', '442097001', '441887006', '441991000', '442181008', '442212003', '164777009', '442733008', '164779007', '164778004', '266908007', '443929000', '444479000', '444465008', '444245004', '444733009', '162984005', '459155002', '459156001', '459157005', '461098000', '461099008', '461100000', '467663007', '467181006', '467726006', '467277003', '467343006', '467266009', '467840000', '467721001', '467383003', '467926000', '463904002', '467658008', '467195009', '467408009', '467704005', '470755001', '472746006', '472811009', '472808008', '472812002', '472804005', '473219007', '471278002', '471279005', '461088006', '471280008', '461338005', '473459007', '133981000119106', '99051000119101', '18761000119108', '18751000119106', '29941000119105', '87551000119101', '26021000119107', '133991000119109', '97531000119106', '1131000119105', '145741000119101', '108691000119102', '361000119103', '401103008', '698767004', '699236005', '15081000119105', '699270006', '699429007', '140281000119108', '48601000119107', '273429004', '148871000119109', '700587002', '700987005', '701995001', '702527008', '10805641000119102', '703163006', '704273008', '704125007', '705944009', '705945005', '705946006', '705988002', '706338006', '706539002', '706649009', '713410003', '141821000119104', '715323006', '716051003', '716745004', '16026951000119102', '16023911000119108', '16026991000119107', '718087004', '718348005', '720849008', '721573003', '721942007', '118961000119101', '723087000', '732062008', '732040008', '732034001', '731737000', '733741005', '733199002', '724787004', '12367511000119101', '292661000119105', '292671000119104', '290631000119103', '12242711000119109', '674381000119108', '15982271000119104', '12242751000119105', '15982311000119104', '672521000119108', '16260551000119106', '290621000119101', '690341000119100', '672511000119101', '672571000119109', '690351000119103', '672561000119103', '672531000119106', '330791000119108', '329641000119104', '329651000119102', '16002031000119102', '16002111000119106', '16024151000119105', '292681000119101', '16023991000119104', '292691000119103', '16024271000119107', '16024031000119100', '16000391000119104', '16024111000119109', '16000511000119103', '16000351000119109', '16000431000119109', '141811000119106', '291091000119102', '290931000119108', '291111000119105', '291121000119103', '674161000119102', '674361000119104', '290581000119101', '690201000119109', '674121000119107', '672461000119104', '690271000119104', '672441000119103', '290791000119105', '674091000119108', '690171000119105', '690331000119109', '674401000119108', '186831000119104', '674391000119106', '16055631000119106', '329361000119107', '329371000119101', '329421000119107', '329431000119105', '329451000119104', '329461000119102', '762228008', '763072009', '763073004', '763074005', '763075006', '763229009', '763243004', '763244005', '763245006', '763262001', '765150007', '765149007', '672551000119100', '767441001', '142031000119104', '672501000119104', '690311000119104', '672541000119102', '690321000119106', '674111000119100', '16661971000119104', '16896891000119106', '16896851000119101', '16644681000119102', '16661931000119102', '16703661000119105', '16703551000119107', '16703821000119101', '16703761000119102', '827181004', '16434071000119108', '1631000124100', '5571000124103', '432971000124104', '434111000124102', '434141000124103', '90921000119104', '674351000119101', '690181000119108', '672481000119108', '672491000119106', '672471000119105', '672451000119101', '690281000119101', '690251000119108', '290891000119100', '291081000119100', '672421000119109', '290901000119101', '291101000119107', '16002631000119108', '16002591000119108', '690191000119106', '674101000119103', '690261000119105', '674131000119105', '672381000119100', '690231000119102', '290921000119105', '672371000119103', '690241000119106', '290911000119103', '16024231000119109', '16000551000119102', '16000471000119107', '16024191000119100', '16002071000119104', '16002231000119106', '329621000119105', '16002471000119108', '329631000119108', '329401000119103', '16002511000119104', '16002431000119105', '16002351000119105', '329391000119100', '16002191000119102', '16002151000119107', '16002271000119109', '16002391000119100', '457551000124104', '460581000124104']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Cerebrovascular disease", ['6594005', '28661005', '29322000', '45502001', '45639009', '62914000', '65587001', '110997000', '82797006', '38609002', '138755007', '155388006', '155405006', '155406007', '155409000', '155410005', '155411009', '155412002', '161484004', '191505005', '191512001', '192813004', '194497005', '195163003', '195188006', '195208004', '195216008', '195217004', '195219001', '195221006', '195222004', '195224003', '195237000', '195238005', '195239002', '195244009', '195248007', '195249004', '195595007', '195603001', '195606009', '195609002', '200328002', '200329005', '200330000', '200331001', '200332008', '200333003', '200334009', '204497008', '204502005', '204503000', '230689003', '230690007', '230691006', '230738008', '237867001', '266312006', '266315008', '266316009', '270883006', '271371007', '281240008', '286742002', '288723005', '302909007', '308064009', '315819004', '1508000', '362029003', '315757009', '275526006', '427065003', '425642008', '426033005', '428668000', '429993008', '433183000', '440140008', '441526008', '441529001', '442617003', '441630004', '441759008', '441960006', '441735003', '442668000', '441894009', '442024001', '442676003', '442097001', '441887006', '441991000', '442181008', '442212003', '442733008', '443929000', '472746006', '133981000119106', '99051000119101', '18761000119108', '18751000119106', '29941000119105', '87551000119101', '26021000119107', '133991000119109', '97531000119106', '1131000119105', '145741000119101', '108691000119102', '361000119103', '401103008', '698767004', '699270006', '699429007', '140281000119108', '48601000119107', '148871000119109', '703163006', '704125007', '713410003', '141821000119104', '716051003', '716745004', '16026951000119102', '16023911000119108', '16026991000119107', '720849008', '118961000119101', '724787004', '12367511000119101', '292661000119105', '292671000119104', '290631000119103', '12242711000119109', '674381000119108', '15982271000119104', '12242751000119105', '15982311000119104', '672521000119108', '16260551000119106', '290621000119101', '690341000119100', '672511000119101', '672571000119109', '690351000119103', '672561000119103', '672531000119106', '330791000119108', '329641000119104', '329651000119102', '16002031000119102', '16002111000119106', '16024151000119105', '292681000119101', '16023991000119104', '292691000119103', '16024271000119107', '16024031000119100', '16000391000119104', '16024111000119109', '16000511000119103', '16000351000119109', '16000431000119109', '141811000119106', '291091000119102', '290931000119108', '291111000119105', '291121000119103', '674161000119102', '674361000119104', '290581000119101', '690201000119109', '674121000119107', '672461000119104', '690271000119104', '672441000119103', '290791000119105', '674091000119108', '690171000119105', '690331000119109', '674401000119108', '186831000119104', '674391000119106', '329361000119107', '329371000119101', '329421000119107', '329431000119105', '329451000119104', '329461000119102', '672551000119100', '142031000119104', '672501000119104', '690311000119104', '672541000119102', '690321000119106', '674111000119100', '16661971000119104', '16896891000119106', '16896851000119101', '16644681000119102', '16661931000119102', '16703661000119105', '16703551000119107', '16703821000119101', '16703761000119102', '5571000124103', '434111000124102', '434141000124103', '90921000119104', '674351000119101', '690181000119108', '672481000119108', '672491000119106', '672471000119105', '672451000119101', '690281000119101', '690251000119108', '290891000119100', '291081000119100', '672421000119109', '290901000119101', '291101000119107', '16002631000119108', '16002591000119108', '690191000119106', '674101000119103', '690261000119105', '674131000119105', '672381000119100', '690231000119102', '290921000119105', '672371000119103', '690241000119106', '290911000119103', '16024231000119109', '16000551000119102', '16000471000119107', '16024191000119100', '16002071000119104', '16002231000119106', '329621000119105', '16002471000119108', '329631000119108', '329401000119103', '16002511000119104', '16002431000119105', '16002351000119105', '329391000119100', '16002191000119102', '16002151000119107', '16002271000119109', '16002391000119100', '457551000124104']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Chronic digestive disorders", ['127321000', '127868003', '4710002', '5668004', '6384001', '14004009', '14508001', '14592006', '17987008', '18741006', '21891005', '23738001', '27203001', '33257003', '33334006', '37557000', '37661000', '41500002', '42357009', '47803004', '47958002', '49596003', '50410009', '50687007', '51289009', '53619000', '56171002', '59784001', '61578001', '62834003', '69518005', '71202001', '73943003', '75024003', '75679007', '76712006', '79787007', '80642001', '84410009', '85544008', '86762007', '93811007', '106079008', '106080006', '107907001', '107957009', '109821008', '109850001', '110613000', '118673008', '118821005', '118826000', '122547000', '119253004', '118971007', '119210004', '116159008', '34588007', '64856004', '95470009', '108237000', '122602008', '128284006', '128332003', '128348002', '128394004', '128398001', '128415001', '128999004', '129908006', '140339002', '142489003', '144436000', '144445004', '146242001', '149306008', '154609001', '155629009', '155847001', '157156008', '158419005', '158453009', '158455002', '163126003', '167197004', '167208005', '169023000', '174033007', '174034001', '174035000', '174422000', '174423005', '181243006', '181252002', '181253007', '181282008', '181283003', '186815006', '187720007', '187818003', '187824009', '187825005', '187826006', '188433002', '188448008', '188449000', '188809002', '188871000', '189209004', '189248004', '189250007', '189361002', '189403000', '189408009', '189440008', '189527000', '190086009', '190090006', '190146004', '190173003', '190174009', '190194000', '190216005', '197500006', '197501005', '197569009', '197571009', '197572002', '197574001', '197575000', '198287008', '199294004', '204684000', '204812008', '204813003', '204816006', '204817002', '204818007', '204819004', '204820005', '204847000', '204850002', '205905009', '205923001', '206532004', '206535002', '206536001', '206688004', '206691004', '207109003', '207150006', '207153008', '207369008', '207370009', '207372001', '207373006', '207374000', '207375004', '207376003', '207377007', '207378002', '207587005', '207591000', '207649007', '207664007', '226024005', '226046002', '226548006', '235453002', '253749008', '254305001', '254532005', '255077007', '255116009', '255167007', '265862001', '266483008', '268217007', '268937004', '269456006', '269473008', '269636003', '269810007', '271830009', '271842004', '272627002', '274680002', '274704003', '274837008', '274844004', '274851008', '274859005', '274869004', '275266006', '275865000', '278859004', '280478004', '281501002', '282007005', '286562008', '300855001', '118155006', '301362007', '301393008', '303748006', '303813006', '303943009', '304130003', '118828004', '308925008', '309514004', '312029001', '312129004', '312131008', '312158001', '314805008', '315759007', '315836007', '316121003', '316298009', '316302001', '316520009', '316768001', '316853005', '324046003', '328695006', '359718007', '361922007', '362077003', '363080007', '363112005', '363311008', '363328006', '364142000', '369657005', '369840008', '369841007', '369842000', '369843005', '369851008', '369852001', '369853006', '369854000', '369855004', '369856003', '369857007', '369858002', '369859005', '369860000', '369861001', '369862008', '369863003', '369864009', '369865005', '369866006', '369867002', '369868007', '369871004', '369872006', '369873001', '369874007', '369878005', '369879002', '369979003', '367543008', '53585008', '167198009', '167199001', '25951001', '373407002', '274529006', '274687004', '274700007', '274717000', '274872006', '315807007', '386617003', '389899003', '390631005', '391277002', '391650000', '396568009', '396632008', '396633003', '396634009', '396635005', '396636006', '399742000', '399766006', '406045009', '407774000', '408859005', '410433007', '413202007', '413204008', '413208006', '414870003', '415650003', '418910002', '274693007', '420373003', '430813008', '439220002', '439361000', '447964005', '448675008', '448908007', '448904009', '275262008', '707536003', '709493000', '709519000', '722842006', '722843001', '724002003', '726703000', '731280005', '731977000', '732037008', '733169006', '733355004', '733356003', '735425008', '735426009', '735427000', '735433009', '735518003', '736726000', '763746006', '10995641000119109', '781207006', '788951001']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Chronic kidney disease", ['126880001', '127473003', '127474009', '306005', '1068009', '4888005', '4929000', '5324007', '5572009', '6424000', '6722002', '6841009', '7185004', '7246002', '7270003', '8436004', '9264002', '9298006', '9846003', '9918001', '10106002', '10427002', '11278003', '12304001', '12622007', '13530005', '13700004', '14776004', '15067008', '15347008', '15763003', '16507009', '16620001', '16654000', '17373004', '17418001', '18417009', '18518001', '18639004', '19167000', '19784002', '19878006', '20101008', '20341008', '21904006', '23184002', '23373001', '23697004', '24007003', '24376003', '24429008', '24955000', '25543009', '25955005', '26056000', '27392003', '28049001', '28686001', '28728008', '28770003', '29681000', '29704000', '29780007', '30124006', '30275001', '30737000', '30783006', '31911002', '32278006', '32301002', '32659003', '32916005', '33422004', '33471009', '33755005', '34235002', '34249006', '34617000', '35051009', '35139005', '35157006', '36072004', '37891007', '40134000', '38644000', '39076002', '40095003', '40625006', '40952004', '41424008', '41729002', '41779004', '41962002', '42041003', '42108003', '42764009', '44198008', '44267002', '44323002', '44476006', '44513007', '45456005', '46177005', '46205009', '46270000', '47658004', '48061001', '48426002', '48643009', '48713002', '49008000', '49242003', '49935007', '50235001', '50403003', '50625002', '50759007', '51748005', '51870000', '52621004', '52777008', '52785004', '53514001', '53670009', '54610007', '54967001', '55380000', '55501000', '55536001', '55726006', '55856005', '56050009', '56108007', '56346006', '56491003', '56906005', '57261000', '57666000', '58367002', '58797008', '59530001', '59758007', '59780005', '61474001', '61852001', '62400008', '62802007', '62860002', '63242003', '63463003', '63893004', '64033007', '64119005', '64323009', '69011007', '69516009', '69762004', '70092007', '70536003', '70948008', '71064009', '72333003', '72684009', '73286009', '74033008', '74324004', '74590001', '74861003', '75780002', '76147008', '77100009', '77945009', '79827002', '81516001', '82525005', '83478002', '85365003', '86303001', '88347003', '88531004', '89610000', '89658009', '90708001', '91678002', '92165001', '92624000', '92921005', '93425004', '93849006', '94360002', '94698006', '94889006', '95474000', '95475004', '95570007', '95571006', '95582003', '104331009', '105462002', '106099002', '108022006', '108025008', '108027000', '110623009', '110624003', '110806003', '110948009', '110996009', '117162004', '122670001', '122671002', '122672009', '122673004', '122674005', '122675006', '122676007', '122677003', '122678008', '122679000', '122680002', '122681003', '122682005', '122683000', '122684006', '122685007', '122689001', '122690005', '115951004', '118851004', '116243001', '116029000', '119980000', '119981001', '112896000', '119982008', '119983003', '119984009', '122157009', '113127005', '116358006', '119275002', '119280006', '119279008', '119278000', '119274003', '119276001', '119277005', '119219003', '116210000', '116211001', '116212008', '112066009', '129128006', '137785000', '137794006', '138039007', '138707007', '138814004', '138816002', '138923002', '138929003', '139851001', '140564003', '140565002', '140566001', '140567005', '140569008', '142347007', '142440008', '142543007', '143270009', '143282000', '145273008', '145916000', '145917009', '146256004', '146339005', '146361000', '146403003', '149565006', '149566007', '149570004', '149573002', '149580000', '149585005', '149587002', '149588007', '149589004', '149594004', '149595003', '150544003', '150874003', '151049009', '151137006', '154288001', '154541001', '154542008', '154545005', '154569009', '154620001', '155848006', '155859002', '155860007', '155865002', '155867005', '155868000', '155871008', '155872001', '155876003', '155903006', '156971000', '156972007', '156973002', '156975009', '156979003', '157343006', '158615007', '160389004', '160399009', '160656007', '161435007', '161545007', '161547004', '161659007', '161665007', '161693006', '162583005', '163354000', '163355004', '163356003', '163357007', '163359005', '165881005', '168041003', '168043000', '168769004', '168770003', '169036000', '169122008', '169143009', '169144003', '169145002', '169184007', '174026007', '175898006', '175899003', '175901007', '175903005', '175904004', '175905003', '175908001', '175910004', '175916005', '175921008', '175925004', '175928002', '175931001', '175934009', '175935005', '175936006', '175937002', '175938007', '175944006', '175945007', '175946008', '175948009', '175949001', '175950001', '175957003', '175958008', '175960005', '175961009', '175964001', '175965000', '175966004', '175973009', '175975002', '175981005', '175982003', '175983008', '175984002', '175985001', '175991004', '175992006', '181414000', '182644007', '182809008', '186236001', '187144000', '188249002', '188250002', '188257004', '189143001', '189144007', '189148005', '189462008', '189813000', '197610006', '197659005', '197675008', '197676009', '197678005', '197757004', '197785002', '197792007', '197793002', '197796005', '197798006', '197799003', '197800004', '197801000', '197803002', '197815003', '197817006', '197826009', '197827000', '198530000', '198532008', '198533003', '198534009', '199110003', '204942005', '204945007', '204946008', '204949001', '204952009', '204954005', '204955006', '204956007', '204957003', '204958008', '204959000', '204962002', '204963007', '204964001', '204965000', '204966004', '204978000', '204979008', '204980006', '204981005', '204982003', '204983008', '204984002', '204985001', '204986000', '204987009', '205029000', '205940005', '205943007', '206255002', '207420007', '210197003', '210198008', '210199000', '210200002', '210201003', '210202005', '210203000', '210204006', '210205007', '210206008', '210207004', '210208009', '210209001', '213150003', '213240007', '216877000', '216878005', '216904007', '216933008', '216977001', '216978006', '217024004', '217058007', '223155009', '223166002', '223178003', '223303003', '226987003', '226988008', '226989000', '226990009', '227337005', '227362005', '227680007', '227832007', '227862001', '227863006', '228743008', '236142005', '236144006', '236145007', '236146008', '236150001', '236158008', '236160005', '236161009', '236368007', '236371004', '236377000', '236437007', '236439005', '236440007', '236443009', '236448000', '236449008', '236450008', '236459009', '236483001', '236487000', '236494002', '236512004', '236513009', '236568008', '240317003', '241395004', '241481001', '241484009', '241624001', '243620000', '243657006', '243673000', '243795008', '244752000', '244853002', '246068004', '246081006', '249578005', '249579002', '249580004', '249581000', '249582007', '249583002', '249584008', '249592004', '251096000', '251968008', '252053007', '252917007', '253766005', '253862000', '253864004', '253865003', '253866002', '253867006', '253869009', '253870005', '253872002', '253873007', '253874001', '253877008', '253878003', '253879006', '253880009', '253884000', '253885004', '254337000', '254914004', '254915003', '254916002', '254917006', '254918001', '254919009', '254920003', '254921004', '254922006', '254923001', '259941006', '262612001', '262891006', '262892004', '262893009', '264541003', '264917009', '264918004', '265550007', '265551006', '265555002', '265556001', '265764009', '265880005', '266181004', '266556005', '266557001', '266561007', '266612003', '266618004', '266622009', '266623004', '266624005', '266625006', '266772000', '266813005', '267142008', '268233005', '268234004', '268329001', '268331005', '268332003', '268333008', '268406008', '269158000', '269301005', '269488003', '269608008', '269609000', '269642004', '269698004', '270517006', '271387005', '271469008', '272945000', '273231006', '273404005', '273911001', '273981006', '274060004', '274108006', '274143007', '274231001', '274279008', '274329007', '274358005', '274385003', '274428000', '274430003', '274522002', '274566000', '274567009', '274581006', '274582004', '274583009', '274597001', '274613006', '274624008', '274733002', '274881000', '275069007', '275155009', '275407001', '275409003', '275535004', '275552000', '275708005', '275893001', '276011007', '276115001', '276176009', '276192004', '276193009', '279366003', '279367007', '279369005', '279370006', '279372003', '279373008', '279374002', '279375001', '279376000', '279377009', '279378004', '279381009', '279505001', '280365003', '281112005', '283905005', '284348003', '285639008', '286618009', '286619001', '286621006', '286624003', '286625002', '286626001', '286636009', '286979008', '286980006', '287730002', '287739001', '288004005', '288005006', '288006007', '288182009', '289754003', '289916006', '290691008', '300440002', '300441003', '300442005', '300444006', '300445007', '300446008', '300447004', '300448009', '302360002', '302922004', '303402001', '304582006', '307415006', '309088003', '309269002', '311496007', '312303009', '314285002', '314397003', '314967004', '314996003', '315270004', '315837003', '316054003', '316348005', '316521008', '353723002', '359563005', '16934004', '361264003', '361330004', '362208000', '362209008', '362210003', '362211004', '362212006', '363518003', '363529004', '363530009', '363531008', '363532001', '363533006', '363534000', '364180004', '364181000', '364182007', '364183002', '366263008', '369626005', '369804006', '369888006', '369889003', '369946003', '369977001', '367441008', '40410004', '50988004', '52592006', '66316006', '369434007', '90852002', '371326003', '372185006', '373599008', '373633001', '102770000', '106000008', '12976005', '207464004', '315738000', '44277000', '386206008', '387663003', '387664009', '388985009', '394024002', '394912007', '388141008', '388717004', '386200002', '241354002', '275825004', '396082002', '396083007', '396084001', '396085000', '396086004', '396087008', '396088003', '396089006', '396090002', '396091003', '396092005', '396093000', '396200000', '396299006', '396301004', '396682003', '399741007', '35175007', '405004009', '405584002', '405922009', '405923004', '405924005', '405925006', '405976009', '405977000', '406064003', '406065002', '406081007', '407465001', '408642003', '167180005', '204941003', '411753002', '415081006', '416298008', '175911000', '419558006', '418580002', '418704006', '419174006', '419467008', '418354002', '420852008', '420970005', '420279001', '421893009', '274446006', '427173009', '426978005', '425751005', '426697007', '426606005', '426136000', '427765008', '428830000', '428575007', '428645009', '428629007', '429496005', '429025008', '430703009', '431662003', '432582008', '432422008', '431814007', '432294000', '433144002', '433146000', '431855005', '431856006', '431988002', '429861004', '431731009', '431909007', '429931008', '431857002', '431729000', '236425005', '432461000', '438804005', '440499003', '440657008', '441137002', '439083005', '440512006', '440449002', '438813007', '438661003', '438345008', '439739008', '309270001', '438820000', '439427001', '439808002', '440446009', '440055001', '439964001', '439396000', '438578000', '440706004', '88994001', '73487002', '443820000', '443267007', '443768001', '443578000', '444083005', '444271000', '443869003', '443806007', '445503007', '444691002', '444819004', '444794000', '444699000', '444954005', '444955006', '446224008', '446990000', '447531002', '447532009', '447480009', '446296004', '446907008', '446844009', '446126004', '447393003', '447124007', '446894005', '447527008', '175922001', '448587007', '449408005', '449409002', '450516001', '285871000119106', '285851000119102', '285861000119100', '153851000119106', '285831000119108', '96741000119109', '96731000119100', '285881000119109', '469628005', '469215008', '469210003', '472953006', '473195006', '473231009', '608909005', '608895005', '609114004', '608838009', '609030009', '609168009', '731000119105', '741000119101', '721000119107', '751000119104', '711000119100', '129161000119100', '96721000119103', '117681000119102', '129171000119106', '129181000119109', '96711000119105', '129151000119102', '96751000119106', '76285001', '49752000', '2508002', '18370004', '698306007', '698463001', '8501000119104', '405251001', '699286004', '104931000119100', '699322002', '699720007', '96701000119107', '699719001', '15781000119107', '700379002', '700378005', '198809000', '62771000119104', '702685007', '10757481000119107', '10757401000119104', '118781000119108', '90731000119103', '90721000119101', '74011000119107', '367821000119106', '140031000119103', '140121000119100', '140131000119102', '140101000119109', '96441000119101', '90741000119107', '79131000119100', '90751000119109', '771000119108', '90761000119106', '129561000119108', '76114004', '140111000119107', '71701000119105', '71421000119105', '705022001', '707323002', '707530009', '36689008', '708688004', '708679008', '709044004', '708929007', '140491000119105', '709546005', '285001000119105', '285011000119108', '284981000119102', '284961000119106', '284991000119104', '709654004', '284971000119100', '709978007', '710796008', '711308006', '711352003', '711411006', '711446003', '711413009', '16220971000119101', '16212371000119106', '713183000', '713313000', '713369009', '15883561000119108', '691421000119108', '713504001', '367051000119105', '713574000', '10987721000119102', '713825007', '713824006', '713886006', '714152005', '714153000', '716748002', '717735006', '717748005', '718031007', '718030008', '718394008', '691401000119104', '691411000119101', '718533003', '6471000179103', '718723009', '719033000', '720706000', '719025001', '719072001', '6501000179109', '719341006', '719352000', '1081231000119103', '1081241000119107', '719804000', '719805004', '16550151000119102', '720330001', '1078991000119106', '1079001000119106', '720701005', '720510004', '15638291000119105', '717945001', '721183009', '721191000', '721817004', '407981000119107', '408451000119106', '722095005', '722096006', '722098007', '722149000', '722150000', '722223000', '722274008', '722278006', '16548901000119104', '722466009', '722467000', '16550201000119105', '16549791000119102', '16549841000119104', '723066005', '354361000119107', '354351000119105', '723409007', '723720008', '409841000119100', '16444991000119109', '16440141000119108', '1141000087106', '1151000087109', '1391000087101', '1401000087103', '13861000087101', '13871000087105', '14361000087105', '2711000087100', '2701000087102', '724094005', '411011000119106', '6461000087108', '6451000087105', '19531000087109', '17011000087103', '17001000087100', '16451621000119103', '16451571000119101', '725905005', '726018006', '726017001', '723373006', '726541005', '727390001', '727415008', '731627000', '732094003', '731761007', '729736000', '733137002', '733138007', '733139004', '733342000', '733470002', '1811000087104', '1641000087102', '13301000087109', '11581000087109', '11521000087108', '734953007', '735430007', '735474009', '73901000119107', '736616001', '736617005', '736640009', '737295003', '737429003', '737562008', '16550051000119101', '16550101000119101', '16547871000119103', '16547921000119107', '16460061000119103', '16460111000119102', '762288006', '762531008', '762907005', '762908000', '762909008', '762910003', '762911004', '762912006', '762913001', '762914007', '764416003', '764643003', '765154003', '765155002', '765156001', '765157005', '241362005', '765313000', '765330003', '765331004', '765472003', '765473008', '765474002', '765475001', '765476000', '765477009', '765478004', '765479007', '765773009', '765774003', '765775002', '765776001', '765779008', '765780006', '767094002', '767436009', '768968005', '127013003', '769246001', '770892001', '770853008', '770851005', '11801251000119105', '11801171000119107', '11800891000119109', '11800851000119104', '772125001', '774014009', '781084007', '4501000087102', '4511000087100', '782655004', '15959101000119103', '15959061000119101', '16675351000119101', '16675391000119106', '16675431000119101', '1082331000119102', '1082321000119100', '784054000', '784055004', '784329008', '784330003', '1056501000112102', '786064007', '786449003', '351611000119101', '351421000119105', '16705361000119104', '16705321000119109', '787824002', '787807008', '707221002', '310387003', '63510008', '38046004', '5161000087109', '4611000119106', '11798461000119103', '11798411000119101', '789781007', '792925006', '792926007', '429691000124100', '429701000124100', '429711000124102', '429721000124105', '429731000124108', '130181000119100', '434421000124101', '123641000119107', '416519002', '3700001000004100', '108211000119108', '14350001000004108', '18300001000004102', '22470001000004107', '15636991000119103', '1081581000119104', '1081571000119102', '449631000124102', '285061000119106', '285081000119102', '285101000119109', '120261000119101', '285911000119109', '108131000119108', '108101000119101', '122531000119108', '128631000119109', '285921000119102', '108201000119105', '1087041000119107', '354121000119104', '353961000119108', '461501000124104']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Chronic liver disease", ['1059007', '126076005', '126077001', '126078006', '126079003', '126080000', '1846000', '1933006', '2701006', '126081001', '126082008', '4664006', '9953008', '11105007', '11938002', '13891000', '15151004', '15230009', '15257006', '19943007', '20402005', '20919000', '21580006', '23275005', '24179004', '24365002', '25370001', '25554004', '26842003', '26958001', '27280000', '28009009', '28253005', '28698006', '28906000', '30673003', '32838008', '33427005', '34748004', '34798003', '34816007', '36559008', '36631002', '36974001', '37043005', '37292007', '37537004', '38306002', '38884006', '41309000', '42679009', '43841005', '44418001', '45588000', '46875004', '48303008', '48374001', '51555009', '52949009', '54780008', '57604000', '58262005', '59557004', '59927004', '62191005', '62216007', '62741004', '62857009', '65324009', '65860006', '65870008', '67251005', '69500007', '69897008', '70460002', '70522008', '72100002', '72566003', '75119003', '75183008', '77981007', '78058005', '78601005', '79036002', '79720007', '81391006', '82308007', '85870004', '86389004', '88566002', '90651007', '90753004', '91162000', '91231009', '92864004', '95297004', '102626001', '102627005', '105463007', '107963000', '109096005', '109841003', '110616008', '110805004', '110806003', '110807007', '110808002', '110809005', '110810000', '110811001', '110865001', '110927007', '115627007', '111370006', '111990005', '117295001', '117296000', '119912004', '119913009', '119914003', '122156000', '122157009', '119216005', '111922007', '112450003', '256002', '137781009', '138804008', '138935003', '140462001', '140463006', '140464000', '140465004', '140466003', '140467007', '140468002', '140469005', '140470006', '140471005', '140472003', '140473008', '140474002', '140475001', '140476000', '140477009', '140478004', '140479007', '142542002', '143920004', '143921000', '143922007', '143927001', '143929003', '143949007', '143955002', '143958000', '143960003', '143961004', '143962006', '143970001', '145913008', '146339005', '146380003', '149465009', '149469003', '149473000', '149475007', '154469006', '154470007', '154609001', '155807008', '155808003', '155809006', '155812009', '155816007', '155817003', '155818008', '155822003', '10200004', '158514002', '158662000', '158663005', '158664004', '160384009', '161535005', '161671001', '163252003', '163253008', '163254002', '163255001', '163256000', '163257009', '163258004', '163259007', '163260002', '163261003', '163262005', '163263000', '163264006', '163265007', '163266008', '163267004', '163268009', '163269001', '166601004', '166602006', '166603001', '166607000', '166609002', '166629001', '166636000', '166639007', '166641008', '166642001', '166643006', '166658003', '168766006', '169122008', '169135004', '169164008', '174425003', '174426002', '174427006', '174429009', '174430004', '174432007', '174435009', '174436005', '174438006', '174440001', '174442009', '174447003', '174451001', '174455005', '174456006', '174457002', '174459004', '174460009', '174461008', '174462001', '174463006', '174464000', '174465004', '174470006', '174476000', '174479007', '174481009', '174483007', '174484001', '174487008', '174491003', '174493000', '187124006', '187125007', '187133008', '187139007', '187142001', '187767006', '187771009', '187779006', '187781008', '188842001', '188847007', '189241005', '189247009', '189389004', '189398001', '191150003', '191296000', '197268000', '197270009', '197273006', '197277007', '197278002', '197279005', '197282000', '197309008', '197314007', '197322000', '197323005', '197324004', '197325003', '197326002', '197327006', '197328001', '197329009', '197330004', '197331000', '197335009', '197336005', '197337001', '197354009', '197355005', '197356006', '197358007', '197359004', '197360009', '197361008', '197362001', '197363006', '197370006', '197373008', '197374002', '197375001', '197552007', '197554008', '197556005', '197557001', '197558006', '198866005', '199010001', '199116009', '199117000', '199118005', '199119002', '204770000', '204771001', '204772008', '204775005', '204784005', '204785006', '204786007', '204787003', '204789000', '204790009', '204792001', '204793006', '204799005', '204800009', '204803006', '204804000', '206242003', '206245001', '207232008', '207471009', '207473007', '207474001', '210164004', '210165003', '210166002', '210167006', '210169009', '210170005', '210171009', '210172002', '210173007', '210174001', '210175000', '210176004', '210177008', '210178003', '210179006', '213153001', '213230009', '217025003', '218554000', '218558002', '226991008', '227014008', '227015009', '227029005', '230364000', '230582001', '233444007', '235455009', '235456005', '235457001', '235458006', '235459003', '235460008', '235461007', '235464004', '235856003', '235859005', '235882007', '235890007', '235891006', '235910007', '235911006', '235912004', '238001003', '240326000', '240327009', '240798009', '240799001', '241342002', '241346004', '241347008', '241350006', '243978007', '248413004', '249565005', '249566006', '249567002', '249568007', '249970007', '253016009', '253810002', '253811003', '254312005', '254365003', '256887000', '258272006', '258273001', '258276009', '258323002', '258324008', '258325009', '258326005', '258327001', '258328006', '259320009', '259670004', '260721000', '262796008', '262797004', '262798009', '262800002', '265440009', '265441008', '265442001', '266473009', '266535008', '266536009', '266537000', '266538005', '266902008', '268213006', '268214000', '268422009', '268943002', '269022009', '269547001', '269548006', '269636003', '269856004', '269992001', '270881008', '271053009', '271482000', '271525004', '271527007', '271548009', '271552009', '271679004', '271680001', '273052007', '274325001', '274384004', '274882007', '276548008', '277506008', '277955006', '279930008', '279931007', '279932000', '279933005', '279934004', '279935003', '279936002', '279937006', '279938001', '279939009', '279940006', '279941005', '279942003', '279943008', '279944002', '279945001', '279946000', '279947009', '279948004', '279949007', '279950007', '279951006', '279952004', '279954003', '279955002', '279956001', '279957005', '282364005', '285613005', '287496005', '287858000', '297288000', '300323005', '300327006', '300328001', '300329009', '300330004', '300332007', '300334008', '300337001', '300338006', '301031003', '303270005', '303590002', '303866009', '303867000', '303916004', '307008007', '307189004', '307590003', '307616002', '307619009', '307620003', '307621004', '307626009', '307627000', '309203003', '309204009', '309414002', '313843003', '313844009', '314587006', '314617008', '316061004', '316688008', '327543007', '328383001', '329238006', '331469001', '346665001', '353776007', '128241005', '360556003', '360558002', '364159005', '365769003', '366253000', '369982008', '4974007', '5415002', '71405002', '7265005', '72925005', '81675001', '85057007', '85946004', '87248009', '93870000', '94381002', '169147005', '172488004', '173369000', '174307009', '174428001', '174431000', '174434008', '174437001', '174439003', '174441002', '174443004', '174444005', '174445006', '174448008', '174449000', '174450000', '174454009', '174468002', '174469005', '174471005', '174472003', '174473008', '174474002', '174475001', '174477009', '174478004', '174480005', '174482002', '174485000', '174488003', '174489006', '174490002', '174492005', '181268008', '186273003', '187062006', '187068005', '187523006', '187769009', '105377009', '189390008', '190087000', '190088005', '197269008', '197274000', '197315008', '197321007', '197364000', '197551000', '197553002', '197555009', '204788008', '204791008', '204795004', '205921004', '10780002', '109559009', '226992001', '226993006', '226994000', '109820009', '109844006', '109845007', '109846008', '235878005', '235880004', '235887001', '235903001', '110731006', '110741009', '110817002', '240729009', '241471000', '241472007', '111369005', '111371005', '241549007', '241622002', '245378000', '249559005', '249591006', '112883001', '253812005', '253813000', '253814006', '254601002', '113125002', '256886009', '113286005', '113287001', '261413003', '262018003', '262209009', '262307008', '262586001', '262795007', '262799001', '262801003', '262802005', '262803000', '265436000', '265437009', '265439007', '266467008', '268215004', '270226005', '270327004', '270429000', '270511007', '270601007', '270703004', '270804002', '270896007', '270989009', '271085007', '271187002', '271288003', '271374004', '271447001', '271460007', '271517001', '271598005', '271664006', '271718009', '271786003', '271851007', '272023004', '272124008', '272313000', '272409008', '272508003', '272598007', '272656002', '272709009', '272795008', '272896002', '273200004', '275179006', '278527001', '279929003', '279958000', '279959008', '279961004', '279962006', '279963001', '279964007', '279966009', '282429000', '283979000', '287489008', '289995009', '298110006', '298111005', '300324004', '300325003', '300326002', '300331000', '300333002', '300335009', '300336005', '300593004', '302126000', '302285008', '303410000', '303588003', '303589006', '118822003', '307011008', '308129003', '309658008', '309783001', '119383005', '11954004', '314246009', '314264002', '314963000', '315000005', '12254005', '123607009', '126851005', '127879008', '128168004', '128240006', '13415004', '13630003', '360354004', '360359009', '360971006', '360981005', '15050001', '360982003', '15461002', '15760000', '16763008', '16777006', '1684009', '17864001', '18027006', '18939001', '362182008', '362183003', '362184009', '362186006', '362187002', '362188007', '362189004', '362190008', '19880000', '20790006', '20933000', '22275003', '23542001', '363361004', '26103000', '26226001', '2644002', '26485002', '363535004', '26928007', '26975007', '27235001', '27916005', '2909002', '29978008', '30527007', '318001', '33167004', '33392008', '34736002', '35523009', '3650004', '37184006', '364160000', '364161001', '364162008', '3860006', '3873005', '39182001', '39400004', '40018000', '40210001', '40444006', '40912001', '41038009', '42551006', '42663008', '43047008', '45306004', '48025006', '48100000', '48192002', '48521005', '48536008', '50325005', '5360002', '54153006', '54453000', '57268006', '57661005', '5792004', '58583003', '59148003', '60039004', '60833002', '61460008', '61477008', '62919005', '63377001', '65617004', '65706005', '65922001', '68221002', '68932007', '69039008', '69735007', '69842003', '70286005', '70668000', '71133005', '71728002', '72106008', '74052002', '74208003', '74692004', '75358002', '75393009', '76202000', '76919008', '78171005', '790007', '79552009', '80303005', '80391004', '80515008', '80770009', '81151002', '82111003', '82531008', '8292002', '8345004', '84150000', '84318003', '8444004', '86028001', '86127008', '86259008', '87421006', '88353003', '89166001', '89255003', '89835009', '90752009', '90781005', '92186001', '9242006', '92644006', '92924002', '93332007', '93426003', '93469006', '94699003', '94910002', '95199009', '95214007', '95557003', '371329005', '371330000', '374881004', '376751003', '95605009', '129617008', '20415001', '248610008', '274527008', '386550008', '386552000', '389584008', '390316005', '241174000', '286887005', '396099001', '396476009', '396477000', '396478005', '396479002', '396480004', '396481000', '397096000', '397097009', '397238007', '397239004', '397242005', '397451000', '397497003', '402837000', '405559000', '406459008', '406460003', '406519007', '408217001', '408389009', '408646000', '412238008', '416720006', '418640003', '418749009', '418458003', '418158005', '418797005', '419739000', '418276008', '417958008', '419616000', '418234000', '422354009', '421423009', '421751001', '420339008', '420728008', '421294007', '420889006', '420417005', '425060007', '422407006', '422584000', '424263008', '427022004', '425712000', '427108001', '426059008', '426830009', '426713000', '425463001', '425613000', '426356008', '426989003', '425413006', '427399008', '427700000', '427744002', '429519002', '428187007', '428953003', '274355008', '427929006', '429066008', '428784009', '429281008', '429236009', '428115007', '428198008', '429862006', '429791001', '430053005', '187768001', '155811002', '154568001', '197281007', '149468006', '150560004', '146363002', '187770005', '157341008', '187780009', '204796003', '432908002', '431948007', '432772009', '432777003', '433116003', '431674004', '432870009', '431604000', '142344000', '431222008', '432551009', '431362005', '431839003', '433876005', '432633002', '430059009', '195478001', '151052001', '197317000', '430799001', '432226009', '431475009', '433866007', '149466005', '241470004', '146465008', '149467001', '195477006', '149474006', '390002007', '146353005', '430239004', '432905004', '437831006', '438300009', '438305004', '441138007', '439034006', '438591004', '438815000', '438659007', '438529005', '440711002', '439368006', '440204002', '438543000', '438473006', '438588004', '441491005', '441802002', '442086001', '442684004', '442993000', '442831001', '444412001', '443637005', '443638000', '443630007', '443755009', '444918006', '446674003', '447058001', '448997008', '448683002', '448540000', '447917005', '448781006', '448677000', '447918000', '448012004', '449404007', '420054005', '450681009', '470078002', '469347000', '473158006', '473067009', '609169001', '609031008', '608910000', '609232008', '608839001', '609111007', '609454008', '831000119103', '1691000119104', '697946005', '698305006', '698862003', '699071002', '699586000', '700196009', '702399004', '702618002', '10807061000119103', '702690005', '702777009', '703271000', '704201006', '704154001', '704180000', '704182008', '103611000119102', '707167006', '707724006', '707734002', '708248004', '708590009', '708589000', '708612007', '708625004', '708730009', '708733006', '708697000', '708630000', '709020001', '1098951000119108', '266468003', '709591001', '709656002', '710312009', '711161006', '96601000119101', '13580001000004101', '1082621000119108', '1092691000119109', '1092801000119102', '16213731000119100', '16216171000119108', '712539007', '708818009', '708889005', '15633881000119102', '48036004', '713178008', '713181003', '713203006', '713370005', '713353002', '16212091000119109', '16212131000119106', '713510001', '713519000', '713529007', '713652000', '713698004', '715140008', '715397000', '715805005', '716196007', '716203000', '716379000', '716518003', '716648006', '716756004', '717053007', '717329009', '718078008', '718290002', '719944006', '720330001', '723069003', '720461006', '721017000', '721710005', '721715000', '571921000119104', '405481000119105', '16534151000119105', '407971000119109', '722577000', '722866000', '409901000119107', '725026008', '725416005', '16443041000119100', '725938001', '725939009', '726513006', '726887008', '727054000', '727177003', '728286003', '728801001', '729184000', '729185004', '729186003', '729187007', '729188002', '729189005', '730048008', '730056006', '730210009', '730832006', '730960007', '730961006', '730962004', '730963009', '730964003', '730965002', '730966001', '730967005', '730968000', '730969008', '730970009', '730971008', '730972001', '730973006', '730974000', '732125009', '731762000', '730835008', '732049009', '726781000', '725940006', '735456000', '735677007', '735733008', '736083004', '735732003', '736155004', '736164009', '736181000', '736434005', '736758005', '737202006', '737203001', '737204007', '737205008', '737297006', '16558481000119100', '16534101000119106', '762278005', '763096004', '764569004', '764677008', '765030005', '765251003', '765252005', '765253000', '765254006', '765255007', '765257004', '765258009', '241348003', '765308004', '767438005', '768846004', '769034009', '770585004', '770684008', '770685009', '771835006', '771887005', '772403001', '772813001', '772814007', '772815008', '772928000', '773252007', '773253002', '774013003', '774207004', '774940001', '775351004', '775352006', '775353001', '776168003', '776559006', '777127004', '777128009', '777304000', '777525004', '778843006', '778844000', '778845004', '778846003', '779430005', '780448002', '780449005', '780826002', '787091002', '788982002', '822972000', '434031000124107', '5780001000004109', '3450001000004101', '14520001000004109', '2260001000004104', '122521000119105', '452001000124108', '453301000124104', '454051000124104', '456261000124102']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Chronic respiratory diseases", ['127275008', '490008', '1363007', '2845003', '3709003', '3774009', '4160001', '4665007', '5467003', '6415009', '6770008', '7808001', '8350005', '8764008', '10729003', '11140008', '11483009', '11891009', '12226003', '12326000', '12484000', '13474005', '13660008', '14354006', '14440004', '15226006', '15562006', '16591002', '17077006', '17097001', '17708005', '17849001', '18176002', '19086005', '20139000', '20322005', '20716004', '21784000', '22123002', '22803001', '23426006', '23782005', '24148003', '24296009', '24841007', '25050002', '26231004', '29585004', '29647006', '30298009', '30360006', '31309002', '32058005', '33594008', '33778004', '34050004', '34144006', '34448000', '34681009', '34808003', '35729006', '37341001', '39191002', '39278005', '39871006', '41187008', '41553006', '41672002', '43692000', '45429008', '45865005', '46775006', '47005005', '48064009', '48348007', '49281003', '49750008', '49779001', '50043002', '50417007', '50963007', '51395007', '52024008', '52653008', '53950000', '54150009', '54398005', '54772001', '55735004', '56775002', '56799002', '57089007', '57159002', '57591009', '57732002', '58675001', '58808003', '59028007', '60118008', '61646000', '61700007', '61958003', '62502003', '62907002', '63039003', '64649008', '65503000', '65710008', '67782005', '67794001', '67905004', '68372009', '68607008', '69454006', '69706004', '70051003', '70644008', '71078005', '71946004', '72028005', '72204002', '72869002', '126667002', '126668007', '73898009', '74427007', '75483001', '76841007', '77047003', '77304007', '77868001', '78064003', '78337007', '78563003', '79479005', '80954004', '81483001', '81671005', '81973005', '82094008', '84407002', '85617008', '86157004', '86290005', '86498000', '86963009', '87200008', '87317003', '87699006', '89187006', '89833002', '90455005', '90616004', '91275008', '91581004', '92320002', '92461001', '92698005', '92779001', '93986008', '94118008', '94515004', '94656008', '95026005', '95158003', '95430002', '95431003', '95612000', '95613005', '95618001', '95619009', '95621004', '95634003', '105978008', '106012007', '106048009', '106049001', '106050001', '106051002', '106059000', '106060005', '108227005', '108228000', '108293004', '108723008', '109365008', '110544004', '110545003', '110902000', '110906002', '111273006', '111281007', '111282000', '111378004', '111966009', '121007001', '120709004', '122877000', '122878005', '119272004', '118669005', '118670006', '118671005', '117089007', '117090003', '117088004', '122274003', '122265000', '117056007', '117254004', '117861008', '117956005', '122233003', '118969007', '123654008', '123655009', '125589001', '125696005', '11389007', '124194004', '128254003', '128256001', '128272009', '128486005', '128517006', '128518001', '128997002', '129134004', '129451001', '129893005', '134196008', '135886006', '137772003', '137777009', '138792007', '138798006', '139175004', '139218003', '139219006', '139220000', '139936009', '140097005', '140098000', '140100000', '140101001', '140102008', '140103003', '140109004', '140133005', '140184006', '141471001', '142188000', '142207002', '142209004', '142210009', '142239009', '142278008', '142328009', '142335001', '142482007', '142488006', '145961001', '146265006', '146608004', '146617004', '147853009', '147888009', '148394009', '148443003', '148447002', '149081008', '150562007', '150940001', '150948008', '150950000', '150957002', '150969005', '150973008', '150981009', '150987008', '150998009', '151125009', '151126005', '151128006', '151684007', '151743000', '154284004', '154921000', '155495001', '155496000', '155514003', '155516001', '155517005', '155518000', '155538004', '155545004', '155547007', '155598001', '155601006', '155603009', '155615008', '155626002', '155627006', '155628001', '156933008', '156938004', '156943006', '157107007', '157108002', '157114009', '157115005', '157554002', '157560002', '157781004', '158369003', '158370002', '158377004', '158378009', '158381004', '158417007', '158731006', '158732004', '158733009', '158734003', '160375009', '160380000', '161523006', '161529005', '161920001', '161961001', '161962008', '161963003', '162880000', '162881001', '162883003', '162884009', '162885005', '162886006', '162892000', '162913005', '162918001', '162969001', '164275002', '165033004', '165034005', '165035006', '165066000', '165111003', '165112005', '165113000', '168805002', '169047007', '169381009', '169390002', '170607007', '170650002', '171173003', '171228002', '171232008', '173214000', '173215004', '180745008', '181194006', '181210007', '181218000', '181219008', '181241008', '181242001', '181869007', '182680007', '182686001', '182688000', '182707004', '182711005', '182723004', '182733007', '182799008', '182801006', '183447000', '183507005', '186181005', '186192006', '186201000', '186202007', '186205009', '186206005', '186207001', '186212000', '186750007', '186760003', '187252008', '187286004', '187287008', '187288003', '187289006', '187558008', '187589007', '187827002', '187893008', '187894002', '187895001', '187896000', '187897009', '188433002', '188434008', '188449000', '188872007', '188903002', '189251006', '189269002', '189274005', '189275006', '189361002', '189430005', '189440008', '189528005', '189616005', '189618006', '190091005', '190094002', '190095001', '190096000', '190145000', '190175005', '190176006', '190210004', '190217001', '190884008', '190889003', '191373003', '191952007', '191959003', '194442000', '195085006', '195353004', '195647007', '195704001', '195705000', '195708003', '195710001', '195711002', '195727009', '195739001', '195742007', '195745009', '195748006', '195749003', '195750003', '195822007', '195872009', '195874005', '195876007', '195877003', '195881003', '195922008', '195925005', '196001008', '196018007', '196023007', '196024001', '196025000', '196029006', '196030001', '196031002', '196054006', '196055007', '196057004', '196150004', '196154008', '196165003', '196170005', '196183006', '196184000', '196185004', '196186003', '196187007', '196192009', '196193004', '196194005', '196195006', '196199000', '196200002', '196202005', '196214002', '196217009', '196228008', '196229000', '196237008', '196238003', '196239006', '196243005', '196244004', '196245003', '196248001', '196255004', '196256003', '196258002', '196259005', '196260000', '196261001', '198071002', '199293005', '200723008', '201060008', '201733005', '202000009', '204588006', '204591006', '204592004', '205894004', '205900004', '206006001', '206009008', '206010003', '206281003', '206282005', '206314003', '206315002', '206317005', '206318000', '206322005', '206323000', '206326008', '206327004', '206328009', '206329001', '206606002', '206632008', '206633003', '206639004', '206642005', '207047005', '207048000', '207049008', '207055003', '207056002', '207063002', '207106005', '207108006', '207360007', '207361006', '207362004', '207364003', '207365002', '207366001', '207367005', '207368000', '207552005', '207553000', '207554006', '207555007', '207578001', '207581006', '207584003', '207586001', '207648004', '211630009', '212040005', '212755008', '212767005', '212768000', '213215000', '213222008', '213226006', '213618007', '213624001', '213625000', '213635006', '213636007', '213680007', '213748001', '216618002', '217779001', '217795001', '217798004', '217800006', '217801005', '217802003', '217803008', '217804002', '217805001', '217806000', '217808004', '217809007', '217812005', '217813000', '219008007', '219044002', '219045001', '221122008', '221123003', '221124009', '221125005', '221126006', '221127002', '221128007', '221129004', '221130009', '221131008', '221132001', '221133006', '221134000', '221135004', '221136003', '221137007', '221138002', '221139005', '221140007', '221141006', '221142004', '221143009', '223101005', '223109007', '229286000', '230499002', '233596008', '233765002', '233814000', '233926006', '237860004', '237861000', '237862007', '237863002', '237981000', '237986005', '237987001', '239050000', '240130007', '240948002', '242669005', '242670006', '242671005', '242673008', '242674002', '242675001', '242676000', '242677009', '242678004', '243807000', '243853007', '248565000', '248566004', '248618001', '248622006', '248623001', '248624007', '248701005', '249224006', '249549009', '251880004', '251891006', '251907000', '251908005', '251916001', '251942001', '251949005', '251952002', '252486000', '252487009', '252488004', '254618003', '255076003', '255116009', '255117000', '255142009', '255166003', '257450008', '258603007', '258604001', '258606004', '258753007', '260536000', '262599003', '263653002', '264825005', '265840001', '266338006', '266340001', '266372003', '266373008', '266374002', '266375001', '266381009', '266382002', '266389006', '266390002', '266411000', '266898002', '268320002', '268321003', '268322005', '268511007', '268546004', '268771003', '268834007', '268835008', '268925001', '269005007', '269270008', '269462001', '269473008', '269481009', '269490002', '269713002', '270484008', '271313003', '271620003', '271822008', '271825005', '271908009', '271923004', '272514005', '272517003', '272626006', '273749007', '273833000', '274270007', '274618002', '274697008', '274707005', '274836004', '274856003', '275260000', '275470000', '275497007', '275498002', '275914007', '276230003', '276259003', '276536005', '276571005', '276572003', '277973009', '278197002', '278692007', '278693002', '278695009', '278696005', '278907009', '278908004', '281488008', '281794004', '282446002', '284017001', '284018006', '284028002', '284188001', '284572009', '286211006', '286212004', '286213009', '286214003', '286215002', '286216001', '286964001', '286965000', '287083004', '287460006', '287463008', '287515008', '287532007', '287690008', '288132004', '291334002', '292548001', '292556003', '292560000', '294090001', '294098008', '294102000', '296402006', '296407000', '297107002', '300851005', '300875005', '301186004', '301226008', '301233008', '301252002', '301257008', '301273002', '301280000', '301295003', '301355003', '301389002', '301820005', '302183005', '303668008', '303747001', '303814000', '303904005', '303946001', '304069007', '304077006', '304131004', '304494000', '304495004', '305266004', '305360007', '305476004', '305665008', '305805007', '305961002', '306114008', '306275005', '306421001', '306576005', '306765008', '308924007', '309164002', '309168004', '309170008', '309171007', '309775007', '309911002', '309918008', '310039004', '312031005', '312117008', '312118003', '312119006', '312133006', '312134000', '312149008', '312419003', '313221000', '313274005', '314806009', '315735002', '315758004', '315809005', '315824001', '315854006', '316120002', '316631006', '316677002', '316682009', '316685006', '316828007', '316835004', '316844003', '320072000', '320295002', '320318002', '320476006', '320477002', '320548000', '320576008', '320620006', '320892006', '320893001', '320924004', '321083002', '321084008', '321570009', '321667001', '321764001', '334087009', '334943003', '346666000', '346667009', '349366009', '349368005', '349954009', '350436004', '360198009', '360400000', '361110005', '15993004', '361380005', '361381009', '361923002', '363021009', '363074004', '363084003', '363085002', '363086001', '363121006', '363180009', '363225006', '363238003', '363249009', '363257007', '363267002', '363329003', '34431008', '364029002', '364048003', '364049006', '364053008', '364055001', '364056000', '364057009', '364989002', '365852007', '366129003', '366138001', '366143008', '366144002', '366147009', '366148004', '366154003', '366355009', '366798005', '366876005', '40617009', '367547009', '42457008', '42908004', '47525004', '48409008', '53972003', '56251003', '62640008', '79688008', '162711000', '162887002', '162895003', '162977002', '103478003', '106055006', '106057003', '265844005', '266404004', '266405003', '268380000', '268381001', '271882006', '274282003', '287082009', '370584009', '370801009', '370834006', '371044001', '372145000', '372727006', '372885009', '373272007', '373405005', '373895009', '112239003', '120902001', '271625008', '274678008', '274690005', '274848001', '274865005', '274868007', '274880004', '78645005', '385847009', '386043001', '386098006', '386151000', '386168001', '386504005', '386505006', '387661001', '387662008', '389480002', '389865001', '389928002', '390212005', '390597004', '390662009', '390757000', '390797002', '390965009', '391109009', '392738004', '393041005', '393177001', '393693006', '393997005', '394127006', '394966004', '395051008', '397190009', '397707005', '397767007', '397886005', '397972007', '398447004', '400141005', '401005004', '401288006', '386240008', '397912004', '404988002', '405618001', '407752006', '407874005', '408489005', '408553000', '404989005', '404996007', '162882008', '408684006', '408688009', '408867002', '408868007', '409474006', '409523000', '409525007', '409622000', '409623005', '410197001', '410198006', '410205005', '410206006', '410207002', '410430005', '410431009', '410579004', '410580001', '410581002', '413087007', '413585005', '415293009', '415294003', '415360003', '282297008', '416088008', '416787006', '20573003', '53617003', '418092006', '417850002', '418512001', '417796003', '418760000', '420016005', '417888000', '419597003', '417770000', '417772008', '417773003', '417774009', '417790009', '417791008', '417792001', '417793006', '417771001', '417794000', '417795004', '417797007', '315184001', '370574008', '415390005', '415391009', '415392002', '415393007', '415394001', '415395000', '415396004', '415397008', '415398003', '415399006', '415400004', '415401000', '415402007', '415403002', '415404008', '415405009', '415406005', '415407001', '415408006', '415409003', '415410008', '415411007', '415412000', '415413005', '415414004', '415415003', '415416002', '415417006', '415418001', '415419009', '415420003', '415421004', '415422006', '415423001', '415425008', '415426009', '415424007', '415428005', '415430007', '415431006', '415432004', '415433009', '415434003', '415375006', '415376007', '415377003', '415378008', '415379000', '415380002', '415381003', '415383000', '415384006', '415382005', '415385007', '415386008', '415387004', '415388009', '415389001', '415439008', '415440005', '415441009', '415442002', '415443007', '415444001', '415445000', '415446004', '415429002', '415435002', '415447008', '415448003', '415449006', '415450006', '415451005', '415452003', '415453008', '415454002', '415455001', '415456000', '415457009', '415458004', '415459007', '415460002', '415461003', '415462005', '415463000', '415464006', '415465007', '415466008', '415467004', '415468009', '415469001', '415470000', '415471001', '415472008', '415473003', '415474009', '415475005', '415476006', '415477002', '415478007', '415479004', '415436001', '415480001', '415481002', '415482009', '415483004', '415484005', '415485006', '415486007', '415487003', '415488008', '415489000', '415490009', '415491008', '415492001', '415493006', '415494000', '415495004', '415496003', '415497007', '415499005', '415498002', '415437005', '415427000', '415438000', '415361004', '415362006', '415363001', '415364007', '415365008', '415366009', '415367000', '415368005', '415369002', '415370001', '415371002', '415372009', '415373004', '415374005', '421092003', '421724004', '421874007', '423579004', '423662002', '424865006', '425123005', '422834003', '422376000', '423168004', '423234004', '162976006', '427391006', '425696007', '426896000', '427286007', '426755009', '426196002', '426197006', '426477007', '427625003', '426018002', '170609005', '428489000', '428085002', '170608002', '427809006', '170618007', '427896006', '429215007', '170619004', '428658005', '428173007', '429714005', '170620005', '430528003', '429982006', '429988005', '429989002', '429992003', '429996000', '430029004', '430785000', '430621000', '430475000', '156932003', '431190000', '429980003', '429984007', '429983001', '429981004', '429994002', '160258000', '438947006', '438063001', '441048007', '439742002', '440929004', '441278007', '441119003', '441590008', '442867008', '443259004', '444482005', '444288007', '444046005', '445019007', '445241004', '447081004', '170617002', '447006007', '446946005', '447996002', '447715008', '448459000', '448719004', '447694001', '449349006', '449066004', '448739000', '449096009', '449264008', '448708002', '399150003', '160421002', '450747009', '450748004', '465367002', '465888001', '465892008', '470356002', '463005003', '462575001', '463532000', '470396000', '233686006', '472827002', '472959005', '473339009', '473332000', '473340006', '473331007', '473336002', '473329003', '473341005', '473334004', '473338001', '473343008', '473335003', '473330008', '473333005', '697932005', '698510006', '268926000', '698801008', '698800009', '698799005', '699748007', '700272008', '700593005', '700610003', '700630004', '700705005', '700910000', '700968004', '701077002', '702152003', '702373006', '702788003', '702917005', '703346001', '704277009', '704296008', '704744009', '704882006', '704883001', '704906008', '705205006', '706167001', '706178009', '706180003', '706187000', '706190006', '706194002', '706198004', '706221005', '706223008', '706230002', '651000146102', '707224005', '707351006', '707541006', '707540007', '707944005', '707945006', '707779003', '707780000', '707781001', '707784009', '707785005', '708169007', '708761000', '151181000119106', '10692681000119108', '709111008', '709109004', '709110009', '101301000119106', '709251003', '709275003', '709508003', '709370005', '709371009', '6071000119100', '709904008', '709962005', '709905009', '94671000119102', '10625551000119103', '10685111000119102', '142941000119109', '142921000119103', '328531000119104', '710502001', '710460008', '710683000', '710777009', '296241000119107', '152921000119101', '13320001000004109', '711483003', '10672271000119100', '713419002', '713484001', '714084001', '714324006', '714554002', '714323000', '715601004', '715612004', '715659006', '715695003', '715698001', '715782000', '715784004', '715850007', '715882005', '718317002', '716488008', '716509000', '716516004', '10676831000119101', '716673006', '718018002', '718089001', '718270006', '718297004', '718296008', '311671000119100', '718606005', '719098007', '719368006', '719522009', '719930000', '7361000175106', '720294006', '720293000', '722511005', '722579002', '722692009', '722827008', '722896005', '722911000', '722936006', '723092003', '723093008', '12591000132100', '12611000132107', '12601000132105', '723541004', '723880004', '726698006', '727003000', '727359003', '731167003', '732084008', '732112001', '732156001', '429258006', '724502006', '733358002', '733490006', '734262002', '735386008', '735445000', '735446004', '736057009', '736085006', '736086007', '763547004', '764382006', '765026007', '765027003', '766983005', '767467006', '20091000175107', '770727008', '773454006', '773595007', '777424002', '780820008', '783182004', '784170001', '784192002', '784370005', '16775141000119108', '787773004', '789715006', '816074000', '818951009', '410011000124101', '435051000124104', '438391000124101', '16055271000119107', '10762071000119109', '453571000124103', '22211000175108', '459741000124104']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("COPD", ['13645005', '408501008', '195951007', '10692761000119107', '57671000052108', '741056003', '457011000124109']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Dementia", ['281004', '4817008', '6475002', '9345005', '10349009', '10532003', '12348006', '12741002', '14070001', '15662003', '25772007', '26852004', '28978003', '32875003', '46849003', '51928006', '51996004', '52448006', '54502004', '55009008', '56267009', '59651006', '62102009', '62239001', '65096006', '66108005', '70936005', '71961003', '79358009', '82959004', '88339003', '90099008', '90194001', '109478007', '111480006', '137727006', '138736007', '142730009', '142731008', '142732001', '154845000', '154846004', '154847008', '154848003', '154849006', '154850006', '154851005', '160325007', '161465002', '165277000', '165320004', '165321000', '165322007', '191448002', '191449005', '191450005', '191451009', '191452002', '191454001', '191455000', '191456004', '191457008', '191458003', '191459006', '191460001', '191461002', '191462009', '191463004', '191464005', '191465006', '191466007', '191467003', '191474008', '191493005', '191519005', '192160005', '192161009', '192162002', '192163007', '192164001', '192165000', '192166004', '192167008', '192168003', '192169006', '192170007', '192171006', '192173009', '192174003', '192175002', '192176001', '192177005', '192178000', '192179008', '192180006', '192183008', '192184002', '192214004', '192584009', '192802002', '192803007', '229672009', '230258005', '230270009', '230282000', '230283005', '230285003', '230286002', '230287006', '230288001', '230289009', '230290000', '231463001', '268613002', '268615009', '268675002', '268744003', '273280001', '273323004', '273367002', '273549005', '278857002', '279982005', '286932008', '312991009', '358926001', '371024007', '371026009', '80098002', '386257007', '406165004', '407628009', '792004', '413562009', '416780008', '416975007', '421529006', '420614009', '421023003', '425390006', '429458009', '429961000', '433278001', '429998004', '442344002', '130121000119104', '79341000119107', '22381000119105', '473203000', '1581000119101', '1591000119103', '21921000119103', '101421000119107', '142811000119104', '698464007', '698626001', '698624003', '698625002', '698687007', '698726009', '698725008', '698781002', '698949001', '698955006', '698954005', '698948009', '82361000119107', '31081000119101', '135811000119107', '82371000119101', '142001000119106', '700214004', '700464008', '702393003', '702429008', '702347001', '702426001', '703544004', '702421006', '713488003', '288631000119104', '82381000119103', '713844000', '715284000', '715454006', '715737004', '716175000', '7121000122100', '106021000119105', '716610001', '716667005', '716727004', '716994006', '717679002', '718372000', '720022007', '720021000', '719787003', '719818007', '720204003', '722978000', '722979008', '722980006', '722977005', '723123001', '723390000', '26929004', '724776007', '724777003', '725898002', '16276361000119109', '2421000119107', '733193001', '724992007', '733184002', '733190003', '733191004', '733192006', '733194007', '733185001', '16219201000119101', '735141001', '736371006', '762707000', '762350007', '762351006', '10171000132106', '773863001', '774069007', '783161005', '783258000', '788861009', '788862002', '788866004', '788867008', '788898005', '788899002', '789011007', '789062005', '789170003', '428051000124108', '428351000124105', '429161000124103', '430771000124100', '430881000124107', '431271000124101', '434871000124103', '459431000124103', '459441000124108', '459451000124105', '459471000124100', '459671000124102']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Diabetes", ['127012008', '982001', '2751001', '4307007', '4783006', '5368009', '5969009', '8801005', '9414007', '9859006', '11530004', '11687002', '13196008', '15771004', '15777000', '21584002', '21858001', '23045005', '24927004', '25093002', '28032008', '28453007', '33248009', '33559001', '33669002', '34170007', '34818008', '35824007', '37355009', '38205001', '38063000', '42021008', '42954008', '44054006', '44673006', '45369008', '46635009', '46894009', '49817004', '51002006', '54181000', '55692006', '57886004', '59079001', '61165007', '61598006', '62260007', '64410003', '70694009', '71325002', '71546005', '111395007', '72439000', '73211009', '74263009', '74331000', '75022004', '75524006', '75659004', '75682002', '76751001', '77274005', '111553002', '79367009', '80660001', '81475007', '82141001', '82260000', '82701004', '82800008', '82980005', '83728000', '85487008', '86907008', '91352004', '118951003', '111552007', '111554008', '111557001', '123294004', '55626003', '81531005', '134389002', '137677003', '137705002', '137797004', '138717002', '138832004', '138906006', '139838006', '141196007', '141197003', '141680008', '141681007', '142603005', '142604004', '142605003', '147983001', '147984007', '147994002', '148000001', '148001002', '148002009', '148401005', '151850005', '153683009', '153931004', '153932006', '153933001', '153934007', '153935008', '153936009', '153937000', '153938005', '153939002', '153940000', '153941001', '153942008', '154671004', '154672006', '154673001', '154674007', '154675008', '154677000', '154678005', '154683002', '154687001', '154688006', '154689003', '154699008', '156138000', '157143001', '160249007', '160274005', '160303001', '160402005', '161445009', '161564001', '161641009', '162570009', '162661000', '163997001', '163998006', '164483006', '164484000', '164495006', '164496007', '165204006', '165205007', '165206008', '170745003', '170752001', '170753006', '170764009', '170774007', '170775008', '170776009', '171183004', '182761001', '183615002', '185502001', '185753003', '185754009', '185755005', '185756006', '185757002', '185758007', '185759004', '185760009', '185761008', '185762001', '190321005', '190322003', '190323008', '190324002', '190325001', '190326000', '190327009', '190328004', '190329007', '190330002', '190331003', '190332005', '190333000', '190334006', '190335007', '190336008', '190337004', '190338009', '190339001', '190340004', '190341000', '190342007', '190343002', '190345009', '190346005', '190347001', '190348006', '190349003', '190350003', '190351004', '190352006', '190353001', '190354007', '190355008', '190356009', '190357000', '190360007', '190361006', '190362004', '190363009', '190364003', '190365002', '190366001', '190367005', '190368000', '190369008', '190370009', '190371008', '190372001', '190373006', '190374000', '190375004', '190376003', '190377007', '190378002', '190379005', '190380008', '190381007', '190382000', '190383005', '190384004', '190385003', '190386002', '190387006', '190388001', '190389009', '190390000', '190391001', '190392008', '190395005', '190396006', '190397002', '190398007', '190399004', '190400006', '190401005', '190402003', '190403008', '190404002', '190405001', '190406000', '190407009', '190408004', '190409007', '190410002', '190411003', '190412005', '190413000', '190414006', '190415007', '190416008', '190417004', '190418009', '190419001', '190420007', '190421006', '190422004', '190423009', '190424003', '190425002', '190426001', '190447002', '190484000', '190759004', '191044006', '191045007', '191046008', '191047004', '191048009', '193182005', '197605007', '198493003', '199223000', '199224006', '199225007', '199226008', '199227004', '199228009', '199229001', '199230006', '199231005', '199232003', '199233008', '199234002', '200505002', '206499008', '230572002', '236367002', '237599002', '237600004', '237601000', '237603002', '237604008', '237606005', '237607001', '237608006', '237609003', '237610008', '237611007', '237612000', '237614004', '237616002', '237617006', '237618001', '237619009', '237620003', '237626009', '237627000', '237629002', '237632004', '237633009', '237650006', '237696003', '238981002', '239026002', '254066006', '267118009', '267379000', '267380002', '267381003', '267382005', '267383000', '267393007', '267467004', '267468009', '267469001', '267470000', '267471001', '267472008', '267473003', '267474009', '268599005', '268606002', '268882001', '270445003', '273411009', '273412002', '273413007', '274589008', '274590004', '275522008', '275918005', '276556006', '276560009', '284350006', '285369007', '286289004', '286912007', '290002008', '303059007', '304752002', '308505000', '308506004', '309417009', '309593006', '309595004', '309596003', '309597007', '309598002', '309635005', '310425007', '312856000', '312888008', '313435000', '313436004', '314368001', '314369009', '314370005', '314371009', '314377008', '314378003', '314771006', '314772004', '314887002', '314888007', '314892000', '314893005', '314894004', '314902007', '314903002', '314904008', '315051004', '315216001', '315287002', '315831002', '315852005', '316644001', '326036003', '127014009', '359642000', '359939009', '359964007', '366909003', '367040002', '367269003', '86781004', '14052004', '371054002', '371055001', '371056000', '371086007', '372069003', '207272004', '316426000', '4855003', '50620007', '390715006', '390716007', '392935009', '393084006', '393568003', '393891005', '394035007', '394511005', '394725008', '395123002', '395204000', '284449005', '398773005', '399144008', '400971001', '401087005', '401088000', '401109007', '401110002', '401111003', '401112005', '405096004', '405124006', '405749004', '405751000', '407569005', '407584001', '408287009', '408290003', '408392008', '408417004', '408540003', '408542006', '408543001', '408544007', '408545008', '408660003', '412777005', '413180006', '413183008', '415744000', '414230000', '414229005', '413597006', '415269004', '415042006', '415270003', '417317008', '417467000', '416554009', '416672007', '416855002', '419100001', '385805005', '359638003', '420422005', '422275004', '422155003', '421389009', '421443003', '421223006', '420989005', '420738003', '420491007', '422088007', '421326000', '421468001', '420683009', '420918009', '422297002', '420436000', '421707005', '421895002', '422166005', '421365002', '421631007', '420825003', '420279001', '420715001', '421986006', '421893009', '420514000', '421305000', '422183001', '420868002', '420270002', '421075007', '421847006', '422014003', '421750000', '422126006', '421966007', '421725003', '421437000', '421164006', '420996007', '420662003', '420414003', '422228004', '422099009', '421920002', '421165007', '420486006', '421779007', '420789003', '421256007', '420756003', '422034002', '127013003', '74627003', '423263001', '425159004', '424989000', '427089005', '425442003', '426907004', '427134009', '426875007', '426705001', '427571000', '427027005', '428274007', '428896009', '313834007', '428007007', '429094000', '430678008', '430679000', '438367009', '439051004', '441628001', '441656006', '166928007', '443313003', '444094009', '443694000', '444073006', '444074000', '444110003', '445260006', '445353002', '444913002', '446641003', '313835008', '268519009', '472699005', '472972006', '472969004', '472971004', '472970003', '473127005', '473189005', '1531000119102', '781000119106', '1521000119100', '701000119103', '1541000119106', '771000119108', '1551000119108', '1491000119102', '691000119103', '791000119109', '1511000119107', '761000119102', '1561000119105', '1501000119109', '731000119105', '741000119101', '721000119107', '711000119100', '751000119104', '609568004', '609578001', '609581006', '609576002', '609575003', '609579009', '609580007', '609562003', '609572000', '609564002', '609569007', '609573005', '609570008', '609571007', '609563008', '609567009', '609565001', '609566000', '609574004', '609561005', '609577006', '1571000119104', '201000119106', '698360004', '698610002', '698650004', '699826006', '700414001', '701706004', '10754881000119104', '10753491000119101', '702706001', '40791000119105', '106281000119103', '702737001', '85031000119106', '702849009', '702848001', '703040004', '703137001', '703138006', '703136005', '119831000119106', '704241002', '71771000119100', '90731000119103', '90721000119101', '105401000119101', '84371000119108', '87441000119104', '68061000119109', '120731000119103', '41911000119107', '72031000119107', '72021000119109', '120711000119108', '82581000119105', '111231000119109', '110181000119105', '28331000119107', '109171000119104', '97341000119105', '60951000119105', '60991000119100', '104951000119106', '87921000119104', '87471000119106', '243421000119104', '1481000119100', '60961000119107', '140121000119100', '140131000119102', '157141000119108', '140101000119109', '96441000119101', '18521000119106', '90781000119102', '140391000119101', '87481000119109', '60971000119101', '104961000119108', '87451000119102', '110141000119100', '72061000119104', '704408003', '90741000119107', '137941000119106', '138911000119106', '368961000119107', '82541000119100', '82551000119103', '82571000119107', '108781000119105', '84361000119102', '71441000119104', '137931000119102', '164971000119101', '87461000119100', '90751000119109', '71721000119101', '164881000119109', '72051000119101', '90761000119106', '102781000119107', '97621000119107', '72141000119104', '87491000119107', '97331000119101', '140531000119105', '138921000119104', '140381000119104', '140521000119107', '104941000119109', '127991000119101', '90791000119104', '72041000119103', '140111000119107', '128001000119105', '71701000119105', '71421000119105', '31321000119102', '110171000119107', '90771000119100', '705072004', '704145004', '704144000', '704146003', '706894000', '706891008', '707683005', '708018005', '108791000119108', '709147009', '10656231000119100', '10656271000119102', '59801000119102', '368051000119109', '367991000119101', '712882000', '712883005', '368581000119106', '368591000119109', '368601000119102', '368171000119104', '713387007', '713457002', '71791000119104', '368721000119104', '368711000119106', '138881000119106', '138891000119109', '12811000119100', '368551000119104', '713678009', '713703005', '713705003', '713702000', '713706002', '713704004', '714628002', '368741000119105', '40801000119106', '715159005', '715759002', '715879000', '715894001', '716200002', '716362006', '102621000119101', '31211000119101', '719216001', '719570003', '719761003', '719763000', '719943000', '720685006', '720504004', '720519003', '720724003', '721088003', '721151003', '721283000', '721284006', '4481000175102', '722206009', '722454003', '10660471000119109', '10661671000119102', '530558861000132104', '723074006', '724062000', '724094005', '12275391000119108', '724997001', '724876003', '724810001', '367261000119100', '732246009', '724067006', '733072002', '734920002', '735199000', '735200002', '735258002', '735259005', '735537007', '735538002', '735539005', '735985000', '736284000', '368561000119102', '368521000119107', '737212004', '739664009', '739663003', '739681000', '762291006', '762489000', '763007002', '763008007', '763117005', '763118000', '763782001', '763783006', '765147009', '765148004', '43959009', '768792007', '768793002', '768794008', '193489006', '768797001', '768798006', '768799003', '312903003', '390834004', '312904009', '312905005', '314011005', '399876000', '399873008', '399863006', '399872003', '399877009', '193349004', '769181007', '769182000', '769183005', '769184004', '769185003', '769186002', '769187006', '769188001', '769190000', '769191001', '232020009', '312912001', '769217008', '769218003', '314010006', '314014002', '314015001', '769221001', '769222008', '769219006', '769220000', '769244003', '769245002', '193350004', '49455004', '424736006', '230574001', '230575000', '126535008', '127011001', '126534007', '230576004', '230577008', '193141005', '39181008', '39058009', '230579006', '770094004', '770095003', '427943001', '361216007', '79554005', '39127005', '193185007', '81830002', '19378003', '770096002', '399864000', '311782002', '770097006', '770098001', '59276001', '232023006', '770323005', '770324004', '312910009', '770361008', '770362001', '25412000', '770581008', '770582001', '399866003', '770599000', '770600002', '770752005', '770765001', '770766000', '770789008', '770811007', '772788006', '772789003', '774086001', '774087005', '782755007', '782825008', '783722008', '238982009', '236500003', '236499007', '309426007', '310387003', '201251005', '201724008', '399868002', '399875001', '16891151000119103', '399871005', '238984005', '312907002', '399874002', '399869005', '399862001', '399865004', '399870006', '312906006', '312908007', '312909004', '232021008', '232022001', '103981000119101', '707221002', '63510008', '38046004', '788878000', '193183000', '193184006', '789542009', '35777006', '359611005', '371087003', '789562001', '201250006', '789567007', '789568002', '789569005', '789570006', '789571005', '789572003', '789585000', '238983004', '402864004', '445170001', '792926007', '200687002', '816067005', '816177009', '816178004', '816961009', '816962002', '201723002', '237621004', '822995009', '111556005', '26298008', '170766006', '310505005', '48951005', '724136006', '314537004', '398140007', '425455002', '237635002', '1281000119104', '425011000124103', '6143009', '433051000124103', '435011000124100', '435651000124106', '138811000119100', '138621000119108', '138611000119101', '140401000119104', '60981000119103', '82561000119101', '128201000119100', '138901000119108', '140411000119101', '140421000119108', '138941000119105', '126591000119108', '126551000119103', '126531000119109', '367391000119102', '126571000119107', '453691000124103', '138591000119106', '368101000119109', '459991000124105', '460001000124100']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Drinking", ['30953006', '32055008', '102415004', '102430008', '108333003', '116336009', '137959006', '151352007', '160579004', '161844003', '161845002', '183081002', '191801006', '192018009', '224433004', '224434005', '224435006', '224436007', '225205005', '225578007', '225733006', '226010006', '226877001', '228273003', '228282009', '228283004', '228296003', '228307004', '228308009', '228309001', '228322009', '228323004', '228324005', '228325006', '228326007', '228327003', '228328008', '228329000', '228335000', '228336004', '228337008', '228338003', '228339006', '228340008', '228341007', '228342000', '228343005', '228344004', '228345003', '228346002', '228347006', '228348001', '228357007', '228359005', '228360000', '228361001', '228362008', '228363003', '231511005', '267026004', '273425005', '273560001', '273668002', '288840008', '288844004', '288851008', '288857007', '288863003', '288869004', '288998001', '289150001', '289151002', '289152009', '289153004', '289154005', '289155006', '290051006', '304293009', '304736000', '316178006', '363905002', '364645004', '364654001', '364655000', '364656004', '364657008', '364658003', '364777007', '364778002', '365536001', '365968000', '365969008', '365970009', '365971008', '365972001', '365975004', '365976003', '365979005', '63913004', '7200002', '414071003', '311492009', '251853006', '439576009', '442547005', '443315005', '444874004', '444985001', '444895009', '470630003', '468332001', '464663003', '464677000', '468191003', '464985007', '464653006', '469175009', '705383004', '708546004', '710848001', '713989000', '713981002', '714423004', '714413008', '714857001', '10939881000119105', '722177009']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Endocrine diseases", ['127009005', '127015005', '127016006', '127345001', '127572005', '127573000', '127574006', '2639009', '4184009', '7562007', '8659000', '15776009', '16166005', '17346000', '19825007', '21843009', '28028002', '29393000', '30664006', '31820007', '35284004', '35451002', '37102008', '38293004', '38956002', '39710007', '43934000', '44435002', '46724008', '50999002', '55048008', '55784007', '55937004', '57958006', '60549007', '61530001', '61808009', '68042006', '70137000', '73350006', '73820008', '73842009', '75521003', '77637002', '79537002', '80511004', '81682002', '85783008', '91329003', '92085000', '92222007', '92581002', '92661009', '93780007', '93898002', '94280003', '94417005', '94820008', '94938005', '108284000', '108296007', '108297003', '109951001', '118639003', '111544009', '111545005', '118681009', '67432001', '123757009', '123758004', '123764006', '123766008', '3789000', '5052009', '999000', '111472004', '74364000', '127575007', '127576008', '128628002', '128704005', '128928004', '138713003', '138719004', '142301004', '142303001', '142462008', '148035004', '148036003', '148813008', '153458003', '154624005', '154648001', '154721009', '154784003', '157143001', '157148005', '158023008', '158026000', '158655009', '158658006', '161441000', '161447001', '170810003', '170811004', '172010007', '172037009', '172038004', '172129004', '181122000', '181124004', '181129009', '181192005', '185255006', '188335008', '188350004', '188351000', '188855000', '189175003', '189190004', '189191000', '189466006', '189480004', '189483002', '189538000', '190138000', '190140005', '190207006', '190320006', '190566000', '190567009', '190573005', '190587005', '190589008', '190591000', '190592007', '191023006', '191025004', '191052009', '191070007', '191073009', '191116007', '191122003', '191503003', '191510009', '191980009', '193244007', '193245008', '193556009', '194523001', '194535002', '194540005', '194561003', '194617001', '194633003', '194788005', '198494009', '203437004', '203744009', '205747004', '205763007', '206026002', '206481000', '206501000', '206505009', '206507001', '206508006', '206674003', '206680006', '206686000', '207469009', '207668005', '230571009', '236810001', '237574003', '237596009', '237601000', '237822008', '237832001', '248032000', '11244009', '252171003', '252195001', '252999006', '253000007', '253004003', '254611009', '254612002', '254614001', '255043002', '255046005', '255047001', '266990005', '267405009', '267408006', '267462005', '267490009', '268882001', '268883006', '269496008', '269645002', '269804007', '273194007', '274883002', '277993001', '278876000', '280120004', '280121000', '284194009', '286566006', '286927007', '287505002', '287507005', '287514007', '288303007', '288317003', '298464002', '300860002', '301363002', '301398004', '302865004', '303908008', '304041004', '304042006', '304043001', '305072005', '305303007', '305418009', '305535006', '305889003', '306008004', '306190003', '306307004', '306472005', '306658007', '308845004', '309671006', '312434009', '315754002', '315832009', '316098003', '316642002', '316652003', '316653008', '316839005', '325291008', '325307004', '325354000', '325387001', '325425005', '325457006', '325479001', '325547007', '325552002', '325595003', '325610003', '325683007', '325729003', '325985002', '325986001', '326063002', '329834000', '361339003', '362582003', '362969004', '363104002', '363114006', '363128000', '363254000', '363297005', '363347009', '40818001', '41864002', '42681006', '83728000', '370966000', '371118004', '371122009', '371982006', '371983001', '372086009', '387922007', '387927001', '396881008', '396882001', '396883006', '396884000', '396885004', '396886003', '396887007', '396888002', '396889005', '396891002', '396892009', '396893004', '396894005', '397484000', '397485004', '397487007', '397615004', '397632000', '400103003', '402611000', '404810003', '405837007', '405838002', '113331007', '127944005', '431572009', '447241003', '448546006', '449731009', '449730005', '450891001', '51465000', '472968007', '609039005', '608906003', '608868000', '608869008', '698987009', '128878003', '703816006', '76345009', '60346004', '18831000119107', '94281000119101', '707435002', '707594002', '707625001', '160301004', '134461000119108', '710772003', '324311000119105', '117351000119101', '711272005', '123631000119103', '133531000119104', '368331000119100', '714835008', '714836009', '715907003', '716652006', '716653001', '717916003', '717917007', '717918002', '717919005', '717921000', '717922007', '719105002', '718604008', '682821000119102', '127852009', '127943004', '721188000', '721193002', '721194008', '721625004', '721626003', '721634009', '721635005', '721636006', '721637002', '721638007', '721639004', '721640002', '721641003', '721642005', '721644006', '721645007', '721670007', '721671006', '721673009', '721697000', '721698005', '721700001', '721701002', '722392003', '722527003', '722528008', '722683006', '723112000', '723115003', '723309006', '724090001', '725167001', '724554001', '726092006', '727597002', '730209004', '731165006', '732018004', '732019007', '732073001', '731811009', '733844008', '733162002', '733163007', '733348001', '733350009', '733351008', '733353006', '733491005', '735519006', '735735001', '735718000', '736653007', '737312002', '737313007', '737240009', '762665002', '764959000', '773774000', '773775004', '783006001', '783209004', '785766008', '126864006', '785824001', '130461000119102', '130571000119107', '130451000119104', '130521000119106', '411011000124109', '433041000124100', '130181000119100', '130531000119109', '435471000124104', '435571000124100', '130421000119107', '130291000119105', '130261000119103', '130371000119101', '130361000119107', '130381000119103', '143391000119109', '130321000119102', '130351000119105', '130341000119108', '130191000119102', '130441000119101', '130481000119106', '130431000119105', '130471000119108', '130221000119108', '117461000119109', '459401000124106', '135091000119106']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Ethnicity_ Hispanic vs. non-Hispanic", []),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Heart Disease", ['127063008', '127337006', '368009', '2610009', '4641009', '4995002', '5148006', '8805001', '9241004', '12770006', '13213009', '16253001', '20005002', '20753005', '23685000', '27012009', '27097002', '32598000', '33622007', '34273003', '36221001', '36222008', '36315003', '41702007', '42343007', '45650007', '46165000', '47449003', '53741008', '54225002', '56265001', '59733002', '60446003', '60899001', '61012002', '64715009', '67189007', '76219003', '77737007', '77970009', '78381004', '78485007', '79355007', '83105008', '83447001', '84537008', '85232009', '87648004', '87837008', '89456004', '111284004', '128238001', '129604005', '134439009', '137675006', '137754009', '137755005', '137757002', '137760009', '137815001', '138781006', '138788000', '138905005', '142609009', '142610004', '142613002', '147824008', '148436009', '148438005', '148439002', '148442008', '148654003', '148658000', '152177000', '155263000', '155270000', '155275005', '155293006', '155294000', '155297007', '155303000', '155305007', '155315001', '155318004', '155322009', '155323004', '155324005', '155327003', '155329000', '155330005', '155331009', '155378005', '155385009', '155387001', '156911006', '156918000', '160272009', '160358003', '160359006', '160361002', '160364005', '160420001', '161510004', '161519003', '161639008', '161640005', '165210006', '165211005', '165213008', '170570001', '171221008', '171223006', '171224000', '171227007', '171433001', '171437000', '183951007', '186938008', '191372008', '194707003', '194710005', '194712002', '194713007', '194749008', '194751007', '194752000', '194754004', '194755003', '194761000', '194762007', '194763002', '194764008', '194765009', '194766005', '194767001', '194768006', '194769003', '194770002', '194771003', '194772005', '194795001', '194812005', '194822004', '194826001', '194828000', '194840000', '194851000', '194853002', '194854008', '194855009', '194877008', '194878003', '194879006', '194880009', '194884000', '194885004', '194886003', '194887007', '194889005', '194890001', '194901009', '195013005', '195024007', '195118004', '195140008', '195146002', '195150009', '195151008', '195152001', '195529009', '195530004', '195535009', '195540001', '195543004', '195544005', '195548008', '195549000', '195551001', '195588003', '199006004', '199264005', '199271000', '204290008', '204411008', '204412001', '233952000', '237226002', '237227006', '253264007', '266229007', '266233000', '266251004', '266275004', '266277007', '266286002', '266289009', '266290000', '266291001', '266294009', '266309008', '266311004', '266882009', '266895004', '266896003', '268182004', '268315002', '268318000', '268509003', '269811006', '270455004', '271430002', '274096000', '274864009', '286952009', '286953004', '297242006', '308068007', '312207008', '312591002', '315016007', '315021005', '315038009', '315039001', '315290008', '315348000', '315610002', '315614006', '315821009', '316678007', '316834000', '360578005', '366756007', '366832003', '367538001', '61179004', '275135008', '47535005', '389901007', '389965000', '390633008', '390699009', '390799004', '390907003', '392709002', '392710007', '392711006', '392732003', '392736000', '393083000', '393664006', '393665007', '393666008', '393687003', '393691008', '394034006', '394529000', '394688002', '394689005', '394690001', '394724007', '394886001', '394926003', '401247006', '401248001', '401249009', '401250009', '401251008', '401252001', '401253006', '401254000', '401331007', '401332000', '407612004', '412781005', '412787009', '414545008', '413439005', '413838009', '417546002', '426579008', '430401005', '275931000', '170601008', '450759008', '471880001', '473196007', '473198008', '473197003', '473381003', '697927009', '697905000', '472790001', '699195003', '699245006', '10753101000119102', '10759031000119106', '10757441000119102', '702842000', '64041000119100', '713298006', '713405002', '712866001', '716193004', '720606005', '720639008', '721073008', '717943008', '722027009', '722206009', '722890004', '723086009', '723304001', '723448007', '726704006', '736368003', '737431007', '763000000', '433001000124102', '449631000124102', '285041000119107', '285061000119106', '285081000119102', '285101000119109', '120261000119101', '285911000119109', '451041000124103', '285921000119102', '459701000124101']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Heart Failure", ['364006', '5053004', '5148006', '5375005', '10091002', '10335000', '10633002', '22959007', '25544003', '36315003', '42343007', '44313006', '46113002', '48447003', '56675007', '60856006', '60899001', '61783007', '66989003', '74960003', '77737007', '77970009', '80479009', '81236001', '82523003', '83105008', '84114007', '85232009', '88805009', '89819002', '90727007', '92506005', '111283005', '128404006', '134378009', '134434004', '134440006', '138777006', '138789008', '155374007', '155375008', '155377000', '161505003', '161520009', '194779001', '194781004', '195108009', '195109001', '195110006', '195116000', '195117009', '195132002', '213214001', '233924009', '266248006', '266308000', '309634009', '314206003', '319410000', '359617009', '359620001', '366743000', '366746008', '366784002', '366810007', '366862009', '366890008', '233925005', '389838008', '389898006', '389937002', '390570006', '390630006', '390671000', '390868005', '390884006', '390885007', '392733008', '392737009', '392748002', '393688008', '393692001', '393703008', '394887005', '394927007', '395105005', '403298007', '417359009', '416683003', '416717003', '417146007', '418304008', '417996009', '424404003', '423475008', '426611007', '426263006', '426012001', '429959009', '433305001', '430429008', '440589006', '438367009', '441481004', '441530006', '443253003', '443254009', '443343001', '443344007', '446221000', '96311000119109', '120851000119104', '120861000119102', '120891000119109', '120881000119106', '67431000119105', '67441000119101', '462175008', '462174007', '462172006', '471880001', '83291003', '473226007', '609386002', '609389009', '609388001', '609387006', '609556008', '120871000119108', '609555007', '120901000119108', '153931000119109', '101281000119107', '698296002', '698361000', '698594003', '50781000119109', '153951000119103', '23341000119109', '153941000119100', '72481000119103', '15781000119107', '702843005', '703276005', '703275009', '703273002', '703272007', '703274008', '704242009', '704097008', '704095000', '704096004', '708018005', '11016261000119104', '713678009', '715621003', '15629741000119102', '718287008', '720700006', '15629641000119107', '15629591000119103', '15629541000119106', '717840005', '735258002', '735259005', '735984001', '737430008', '763007002', '763008007', '773587008', '788950000', '16838951000119100', '367363000', '1641000124105', '67451000119104', '432991000124103', '285211000119102', '285221000119109', '7371000175103', '7381000175100', '7391000175102', '7401000175100', '7421000175106', '7411000175102']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Hypertension", ['1201005', '1218009', '4210003', '8218002', '8762007', '9901000', '10562009', '10725009', '10964002', '14973001', '16756008', '18416000', '19769006', '22857008', '23130000', '23717007', '23786008', '24042004', '24184005', '26078007', '26174007', '28119000', '29259002', '30354006', '31407004', '31992008', '32966004', '34694006', '34742003', '35303009', '37618003', '38341003', '39018007', '39155009', '39727004', '44111003', '44772007', '46481004', '46764007', '48146000', '48194001', '48552006', '49239009', '49863005', '52698002', '56218007', '57684003', '59621000', '59720008', '59997006', '63287004', '65402008', '65518004', '67359005', '68267002', '69909000', '70272006', '70995007', '71874008', '72022006', '73410007', '74451002', '75150001', '77376005', '78808002', '78975002', '81626002', '84094009', '86041002', '87394009', '88223008', '89242004', '102932008', '106005003', '111438007', '123799005', '123800009', '137676007', '137753003', '138772000', '147824008', '147831007', '147832000', '147833005', '147839009', '147841005', '147848004', '147849007', '148437000', '148440000', '152085006', '153366008', '153843004', '153856006', '153894006', '153895007', '153896008', '153897004', '153898009', '153899001', '153900006', '153901005', '153902003', '153903008', '153904002', '155052007', '155121008', '155295004', '155296003', '155300002', '155301003', '155328008', '155821005', '156105009', '156106005', '156107001', '156110008', '156112000', '157038006', '158705009', '160251006', '160273004', '160357008', '161501007', '162659009', '169465000', '170570001', '170577003', '170578008', '170579000', '170586008', '170588009', '170602001', '170603006', '171222001', '171225004', '183856001', '185161003', '185264001', '185716009', '185717000', '185718005', '185719002', '185720008', '185721007', '185722000', '185723005', '185724004', '185725003', '193536008', '194757006', '194758001', '194759009', '194760004', '194775007', '194783001', '194784007', '194785008', '194786009', '194787000', '194788005', '194789002', '194790006', '194791005', '194792003', '194888002', '195538006', '195539003', '198941007', '198942000', '198943005', '198944004', '198945003', '198946002', '198947006', '198948001', '198949009', '198950009', '198951008', '198952001', '198953006', '198954000', '198955004', '198956003', '198957007', '198958002', '198959005', '198960000', '198961001', '198962008', '198963003', '198964009', '198965005', '198966006', '198967002', '198968007', '198969004', '198970003', '198971004', '198981000', '198997005', '198998000', '198999008', '199000005', '199002002', '199003007', '199004001', '199005000', '199008003', '199009006', '199011002', '199012009', '199013004', '199014005', '199015006', '199017003', '199018008', '199019000', '199072001', '199073006', '199074000', '199075004', '199076003', '199077007', '199079005', '199139003', '206596003', '233815004', '233941006', '233942004', '233943009', '233944003', '233945002', '233946001', '233947005', '233948000', '233950008', '233951007', '233952000', '233954004', '234072000', '234073005', '234074004', '234075003', '237230004', '237231000', '237232007', '237279007', '237281009', '266228004', '266287006', '266293003', '267202005', '267305005', '267306006', '267307002', '267701004', '267721003', '268607006', '270440008', '271367009', '274559001', '274560006', '274722000', '275944005', '276789009', '276792008', '276793003', '276794009', '286951002', '288250001', '288318008', '302192008', '307632004', '308427006', '308428001', '308429009', '308502002', '308503007', '308551004', '310427004', '316679004', '360573001', '360578005', '367390009', '6183001', '371125006', '371622005', '6758009', '41114007', '389359009', '389960005', '390090009', '390694004', '390925005', '391214004', '393040006', '393996001', '395050009', '397748008', '401047000', '401048005', '401117004', '401118009', '402832006', '398254007', '412779008', '417312002', '423674003', '426012001', '428575007', '170574005', '427889009', '429198000', '429457004', '440594006', '438367009', '440536005', '443402002', '445237003', '541000119105', '5501000119106', '461321006', '472749004', '472758006', '472760008', '472761007', '472759003', '472757001', '472790001', '473184000', '473185004', '473225006', '697918008', '697899000', '697925001', '697919000', '697929007', '697898008', '697926000', '697908003', '697915006', '697912009', '697920006', '697916007', '697906004', '697910001', '129161000119100', '697921005', '697901009', '697924002', '697903007', '697900005', '697917003', '697897003', '697928004', '697914005', '11399002', '697922003', '117681000119102', '697927009', '129171000119106', '697923008', '697907008', '129181000119109', '697911002', '697913004', '697902002', '697896007', '697904001', '697905000', '129151000119102', '697930002', '698638005', '698838008', '698839000', '699282002', '104931000119100', '51131000119102', '153831000119100', '153891000119101', '153811000119105', '698640000', '10752641000119102', '40521000119100', '40511000119107', '702817009', '702867002', '703254001', '703310005', '703355003', '704154001', '704180000', '704182008', '95343001', '140121000119100', '140131000119102', '140101000119109', '704667004', '127991000119101', '140111000119107', '128001000119105', '71701000119105', '71421000119105', '449759005', '707413005', '707420003', '708018005', '367821000119106', '285001000119105', '285011000119108', '284981000119102', '284961000119106', '284991000119104', '153871000119102', '709666005', '284971000119100', '11016321000119103', '709881001', '59701000119109', '712487000', '1151000175103', '712832005', '111411000119103', '713542007', '713678009', '714053003', '715280009', '715759002', '720568003', '720575002', '16229371000119106', '108701000119102', '717824007', '722559005', '722867009', '724485008', '16235071000119108', '38481006', '735258002', '735259005', '82771000119102', '736286003', '762463000', '763007002', '763008007', '763324001', '766937004', '334831000119106', '345771000119101', '340441000119107', '776416004', '783058007', '1078301000112109', '827068008', '827069000', '1651000124107', '10189761000046105', '432981000124101', '434421000124101', '434431000124103', '434711000124103', '1191000175105', '445011000124101', '286141000119103', '286131000119107', '286161000119104', '286171000119105', '453591000124102', '461301000124109']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Immune system disorders", ['127049002', '127050002', '127051003', '127052005', '127059001', '127060006', '127061005', '127319005', '183005', '940000', '2897005', '3359009', '4301008', '5603006', '6466004', '8294001', '8469004', '9542007', '9778000', '10387001', '10479001', '11110006', '11244009', '11781007', '13172003', '13292000', '14333004', '14848000', '15012007', '15073009', '16074008', '16131008', '16244008', '17853004', '18018005', '18750008', '21983002', '22850005', '23092009', '23369004', '24580007', '25121006', '26072008', '28031001', '28032008', '29759001', '30066009', '31912009', '32277001', '33066005', '33286000', '33491002', '34245000', '34506009', '35024006', '35243002', '35394006', '36763003', '41266007', '41864002', '42081005', '44719008', '46769002', '48556009', '49802003', '51116004', '54512006', '54958001', '57857002', '58606001', '58915005', '61454008', '62294009', '62299004', '62479008', '62609001', '63366007', '64871000', '65623009', '66049007', '66944004', '67213005', '67811002', '68332000', '68784009', '69679003', '70714003', '71832003', '71858003', '71922006', '73095008', '73259009', '75316000', '76715008', '78019000', '78378009', '78998005', '79085007', '79334005', '79873000', '80194003', '80405004', '80834004', '81219009', '81664000', '81759008', '83699005', '83728000', '84362007', '85828009', '86224008', '86337009', '87902006', '88331000', '89045007', '89435001', '90702000', '91411007', '95329006', '95643007', '103075007', '103076008', '106182000', '106197002', '106198007', '108723008', '111585004', '117291005', '119267008', '118686004', '117103007', '117081005', '116800003', '116802006', '116803001', '117064001', '117085001', '117086000', '117087009', '117065000', '117089007', '117092006', '117093001', '117095008', '117096009', '116813009', '116868008', '117083008', '116792006', '117090003', '116812004', '117100005', '117082003', '116791004', '116801004', '117084002', '117088004', '116811006', '117091004', '117094007', '116814003', '121242008', '113055007', '117898009', '116003000', '111163002', '116790003', '116805008', '33130007', '123307003', '123752003', '123777002', '128091003', '128092005', '128093000', '128094006', '3978000', '18323000', '19307009', '22098000', '38731003', '1468004', '116804007', '128299006', '141878000', '141879008', '141881005', '142969008', '143199007', '143201009', '143211002', '143215006', '143216007', '143399001', '152051005', '153768007', '154368002', '154779009', '154780007', '154782004', '154783009', '154803002', '154804008', '164701006', '164702004', '164704003', '164705002', '164707005', '165556002', '165792000', '165794004', '165804004', '165808001', '165809009', '165877005', '166023001', '180190006', '180192003', '183822007', '185588000', '186705005', '190288004', '190297000', '190454008', '190568004', '191006002', '191015009', '191017001', '191019003', '191026003', '191034009', '191035005', '191209000', '191214001', '191215000', '191216004', '191220000', '191221001', '191224009', '191306005', '191422005', '191423000', '192178000', '197284004', '197739000', '197743001', '198492008', '198516005', '200576000', '206020008', '206551005', '225044005', '230245009', '232308006', '234337006', '234381003', '234425008', '234490009', '234491008', '234492001', '234644008', '235728001', '235890007', '236406007', '237499004', '237519003', '237536006', '237706000', '237790001', '237822008', '237828007', '238697009', '238881001', '239899000', '239932005', '240419001', '240420007', '240421006', '240611008', '240630008', '111468003', '246943004', '250202009', '252325003', '255386009', '260227000', '263680009', '266201009', '271511000', '275758003', '276509008', '276574002', '276575001', '276577009', '276665006', '278968001', '278971009', '278972002', '278974001', '278975000', '299691001', '300933005', '302764009', '307515009', '308633006', '309742004', '12741002', '361124009', '361125005', '362590003', '362992004', '362994003', '363064002', '363138005', '363142008', '363143003', '363144009', '363145005', '363146006', '363147002', '363148007', '363149004', '363150004', '363151000', '363152007', '363153002', '363161007', '363177008', '363265005', '363331007', '364105007', '365861007', '370121008', '47519003', '84568007', '21957007', '367437009', '371063000', '371085006', '371108009', '371111005', '371112003', '371113008', '372861001', '374588004', '374590003', '374591004', '375011000', '376993007', '377508008', '108747001', '15539009', '386042006', '389285005', '390023001', '392842005', '392843000', '393797003', '393798008', '395034001', '395035000', '395036004', '387705004', '398293003', '398937006', '400009001', '400512009', '400532005', '400626006', '402124001', '402188000', '402397006', '402398001', '402399009', '402400002', '402401003', '402402005', '127057004', '399796001', '406212004', '406791008', '408335007', '408539000', '412133005', '413118006', '240305000', '413603009', '413788009', '414030009', '414029004', '413834006', '413835007', '414463005', '417492002', '416491000', '417617004', '418925002', '420740008', '421668005', '420497006', '421214008', '421804006', '421157009', '420896008', '422303009', '420388008', '421691009', '421529006', '424272000', '427213005', '426875007', '427439005', '426065008', '425835006', '425706005', '427096007', '425857004', '426202004', '426743003', '425504006', '429217004', '170530008', '428470000', '432066002', '441120009', '438476003', '441511006', '444118005', '443845002', '443899007', '445277006', '445352007', '445366002', '444644009', '445945000', '446682003', '448542008', '449731009', '449730005', '472968007', '609407009', '10746341000119109', '702444009', '702813008', '703523004', '703525006', '707297005', '707443007', '107921000119107', '1961000175104', '712803007', '713204000', '38662009', '713654004', '714464009', '715863001', '716743006', '717220006', '718716008', '572261000119106', '721093000', '717811007', '721198006', '721711009', '721712002', '721713007', '722288007', '722290008', '722872000', '722991004', '723004005', '723022008', '723508002', '118931000119109', '724276006', '724990004', '724600007', '725742006', '724815006', '724809006', '32273002', '732960002', '732962005', '732963000', '732965007', '732966008', '735157001', '735158006', '735159003', '737190002', '737249005', '737367001', '762302008', '762446004', '763021000', '572211000119108', '765751002', '240410002', '317916006', '767467006', '767477008', '767722000', '769102002', '769247005', '770596007', '771271000', '771333006', '16098491000119109', '773646003', '774083009', '774394001', '775404002', '775591000', '776836008', '777147007', '777240001', '777389008', '777424002', '778004006', '778023004', '294268009', '782309008', '785218000', '785388005', '786088009', '786971004', '789650005', '816026000', '414011000124106', '438061000124107', '452281000124106', '453711000124100', '85181000119108', '1083191000119108']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Male gender", []),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Neurological disorders", ['127049002', '127050002', '127051003', '127052005', '127059001', '127060006', '127061005', '127319005', '183005', '940000', '2897005', '3359009', '4301008', '5603006', '6466004', '8294001', '8469004', '9542007', '9778000', '10387001', '10479001', '11110006', '11244009', '11781007', '13172003', '13292000', '14333004', '14848000', '15012007', '15073009', '16074008', '16131008', '16244008', '17853004', '18018005', '18750008', '21983002', '22850005', '23092009', '23369004', '24580007', '25121006', '26072008', '28031001', '28032008', '29759001', '30066009', '31912009', '32277001', '33066005', '33286000', '33491002', '34245000', '34506009', '35024006', '35243002', '35394006', '36763003', '41266007', '41864002', '42081005', '44719008', '46769002', '48556009', '49802003', '51116004', '54512006', '54958001', '57857002', '58606001', '58915005', '61454008', '62294009', '62299004', '62479008', '62609001', '63366007', '64871000', '65623009', '66049007', '66944004', '67213005', '67811002', '68332000', '68784009', '69679003', '70714003', '71832003', '71858003', '71922006', '73095008', '73259009', '75316000', '76715008', '78019000', '78378009', '78998005', '79085007', '79334005', '79873000', '80194003', '80405004', '80834004', '81219009', '81664000', '81759008', '83699005', '83728000', '84362007', '85828009', '86224008', '86337009', '87902006', '88331000', '89045007', '89435001', '90702000', '91411007', '95329006', '95643007', '103075007', '103076008', '106182000', '106197002', '106198007', '108723008', '111585004', '117291005', '119267008', '118686004', '117103007', '117081005', '116800003', '116802006', '116803001', '117064001', '117085001', '117086000', '117087009', '117065000', '117089007', '117092006', '117093001', '117095008', '117096009', '116813009', '116868008', '117083008', '116792006', '117090003', '116812004', '117100005', '117082003', '116791004', '116801004', '117084002', '117088004', '116811006', '117091004', '117094007', '116814003', '121242008', '113055007', '117898009', '116003000', '111163002', '116790003', '116805008', '33130007', '123307003', '123752003', '123777002', '128091003', '128092005', '128093000', '128094006', '3978000', '18323000', '19307009', '22098000', '38731003', '1468004', '116804007', '128299006', '141878000', '141879008', '141881005', '142969008', '143199007', '143201009', '143211002', '143215006', '143216007', '143399001', '152051005', '153768007', '154368002', '154779009', '154780007', '154782004', '154783009', '154803002', '154804008', '164701006', '164702004', '164704003', '164705002', '164707005', '165556002', '165792000', '165794004', '165804004', '165808001', '165809009', '165877005', '166023001', '180190006', '180192003', '183822007', '185588000', '186705005', '190288004', '190297000', '190454008', '190568004', '191006002', '191015009', '191017001', '191019003', '191026003', '191034009', '191035005', '191209000', '191214001', '191215000', '191216004', '191220000', '191221001', '191224009', '191306005', '191422005', '191423000', '192178000', '197284004', '197739000', '197743001', '198492008', '198516005', '200576000', '206020008', '206551005', '225044005', '230245009', '232308006', '234337006', '234381003', '234425008', '234490009', '234491008', '234492001', '234644008', '235728001', '235890007', '236406007', '237499004', '237519003', '237536006', '237706000', '237790001', '237822008', '237828007', '238697009', '238881001', '239899000', '239932005', '240419001', '240420007', '240421006', '240611008', '240630008', '111468003', '246943004', '250202009', '252325003', '255386009', '260227000', '263680009', '266201009', '271511000', '275758003', '276509008', '276574002', '276575001', '276577009', '276665006', '278968001', '278971009', '278972002', '278974001', '278975000', '299691001', '300933005', '302764009', '307515009', '308633006', '309742004', '12741002', '361124009', '361125005', '362590003', '362992004', '362994003', '363064002', '363138005', '363142008', '363143003', '363144009', '363145005', '363146006', '363147002', '363148007', '363149004', '363150004', '363151000', '363152007', '363153002', '363161007', '363177008', '363265005', '363331007', '364105007', '365861007', '370121008', '47519003', '84568007', '21957007', '367437009', '371063000', '371085006', '371108009', '371111005', '371112003', '371113008', '372861001', '374588004', '374590003', '374591004', '375011000', '376993007', '377508008', '108747001', '15539009', '386042006', '389285005', '390023001', '392842005', '392843000', '393797003', '393798008', '395034001', '395035000', '395036004', '387705004', '398293003', '398937006', '400009001', '400512009', '400532005', '400626006', '402124001', '402188000', '402397006', '402398001', '402399009', '402400002', '402401003', '402402005', '127057004', '399796001', '406212004', '406791008', '408335007', '408539000', '412133005', '413118006', '240305000', '413603009', '413788009', '414030009', '414029004', '413834006', '413835007', '414463005', '417492002', '416491000', '417617004', '418925002', '420740008', '421668005', '420497006', '421214008', '421804006', '421157009', '420896008', '422303009', '420388008', '421691009', '421529006', '424272000', '427213005', '426875007', '427439005', '426065008', '425835006', '425706005', '427096007', '425857004', '426202004', '426743003', '425504006', '429217004', '170530008', '428470000', '432066002', '441120009', '438476003', '441511006', '444118005', '443845002', '443899007', '445277006', '445352007', '445366002', '444644009', '445945000', '446682003', '448542008', '449731009', '449730005', '472968007', '609407009', '10746341000119109', '702444009', '702813008', '703523004', '703525006', '707297005', '707443007', '107921000119107', '1961000175104', '712803007', '713204000', '38662009', '713654004', '714464009', '715863001', '716743006', '717220006', '718716008', '572261000119106', '721093000', '717811007', '721198006', '721711009', '721712002', '721713007', '722288007', '722290008', '722872000', '722991004', '723004005', '723022008', '723508002', '118931000119109', '724276006', '724990004', '724600007', '725742006', '724815006', '724809006', '32273002', '732960002', '732962005', '732963000', '732965007', '732966008', '735157001', '735158006', '735159003', '737190002', '737249005', '737367001', '762302008', '762446004', '763021000', '572211000119108', '765751002', '240410002', '317916006', '767467006', '767477008', '767722000', '769102002', '769247005', '770596007', '771271000', '771333006', '16098491000119109', '773646003', '774083009', '774394001', '775404002', '775591000', '776836008', '777147007', '777240001', '777389008', '777424002', '778004006', '778023004', '294268009', '782309008', '785218000', '785388005', '786088009', '786971004', '789650005', '816026000', '414011000124106', '438061000124107', '452281000124106', '453711000124100', '85181000119108', '1083191000119108']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Overweight or obese", ['5036006', '5476005', '9072006', '22910008', '23495001', '24883002', '30554005', '31738002', '32284009', '38293004', '44772007', '45346005', '48501009', '53146006', '55626003', '59657005', '62999006', '69052003', '71223007', '78897001', '80660001', '81531005', '82793005', '82967007', '84262009', '89441008', '111034002', '111035001', '111036000', '111375001', '123291007', '18692006', '137713001', '138724001', '139917004', '139990001', '139991002', '140079002', '140080004', '148018003', '148019006', '148020000', '148022008', '148023003', '148024009', '148025005', '148032001', '148033006', '148407009', '153918009', '153919001', '153920007', '153921006', '153922004', '153923009', '153924003', '153926001', '153927005', '153928000', '153929008', '153930003', '154774004', '154776002', '160311006', '161453001', '162690006', '162767008', '162768003', '162863004', '162864005', '170793009', '170794003', '170795002', '170797005', '170798000', '170799008', '170800007', '170807005', '170808000', '171192001', '185741002', '185742009', '185743004', '185744005', '185745006', '185746007', '185747003', '185748008', '185749000', '185750000', '190962009', '190963004', '190964005', '190965006', '190966007', '190967003', '190974008', '190975009', '191090003', '191091004', '199072001', '235240002', '238131007', '238132000', '238133005', '238134004', '238136002', '243862009', '247824007', '248311001', '248312008', '248354006', '249533007', '267511009', '268522006', '268551005', '270486005', '271590003', '275947003', '276792008', '277831002', '284352003', '289507000', '290439001', '291451008', '292464007', '293481008', '294493008', '295509007', '296526005', '297500005', '298464002', '308124008', '308504001', '310428009', '316651005', '317892008', '359581008', '359638003', '359642000', '360566006', '363247006', '363307002', '372592007', '316426000', '389986000', '408512008', '413487000', '414915002', '414916001', '414920002', '414918000', '414919008', '414438005', '414917005', '415530009', '444862003', '450451007', '171000119107', '10750551000119100', '702949005', '703316004', '704782001', '705131003', '83911000119104', '715279006', '715628009', '717269008', '717761005', '719809005', '720987001', '721231007', '722037004', '722051004', '722053001', '43991000119102', '722561001', '722562008', '722563003', '722595002', '722596001', '724137002', '16093531000119101', '15750121000119108', '763085007', '763350002', '763643007', '763688008', '764455002', '765471005', '770750002', '773663004', '774102003', '776204008', '783549006', '783556000', '783719006', '785722006', '788996008', '819948005', '443371000124107', '443381000124105', '461341000124106']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Race_ Asian vs. White", []),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Race_ Black vs. White", []),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Race_ Other vs. White", []),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Respiratory system diseases", ['127275008', '490008', '1363007', '2845003', '3709003', '3774009', '4160001', '4665007', '5467003', '6415009', '6770008', '7808001', '8350005', '8764008', '10729003', '11140008', '11483009', '11891009', '12226003', '12326000', '12484000', '13474005', '13660008', '14354006', '14440004', '15226006', '15562006', '16591002', '17077006', '17097001', '17708005', '17849001', '18176002', '19086005', '20139000', '20322005', '20716004', '21784000', '22123002', '22803001', '23426006', '23782005', '24148003', '24296009', '24841007', '25050002', '26231004', '29585004', '29647006', '30298009', '30360006', '31309002', '32058005', '33594008', '33778004', '34050004', '34144006', '34448000', '34681009', '34808003', '35729006', '37341001', '39191002', '39278005', '39871006', '41187008', '41553006', '41672002', '43692000', '45429008', '45865005', '46775006', '47005005', '48064009', '48348007', '49281003', '49750008', '49779001', '50043002', '50417007', '50963007', '51395007', '52024008', '52653008', '53950000', '54150009', '54398005', '54772001', '55735004', '56775002', '56799002', '57089007', '57159002', '57591009', '57732002', '58675001', '58808003', '59028007', '60118008', '61646000', '61700007', '61958003', '62502003', '62907002', '63039003', '64649008', '65503000', '65710008', '67782005', '67794001', '67905004', '68372009', '68607008', '69454006', '69706004', '70051003', '70644008', '71078005', '71946004', '72028005', '72204002', '72869002', '126667002', '126668007', '73898009', '74427007', '75483001', '76841007', '77047003', '77304007', '77868001', '78064003', '78337007', '78563003', '79479005', '80954004', '81483001', '81671005', '81973005', '82094008', '84407002', '85617008', '86157004', '86290005', '86498000', '86963009', '87200008', '87317003', '87699006', '89187006', '89833002', '90455005', '90616004', '91275008', '91581004', '92320002', '92461001', '92698005', '92779001', '93986008', '94118008', '94515004', '94656008', '95026005', '95158003', '95430002', '95431003', '95612000', '95613005', '95618001', '95619009', '95621004', '95634003', '103478003', '105978008', '106012007', '106048009', '106049001', '106050001', '106051002', '106059000', '106060005', '108227005', '108228000', '108293004', '108723008', '109365008', '110544004', '110545003', '110902000', '110906002', '111273006', '111281007', '111282000', '111378004', '111966009', '121007001', '120709004', '122877000', '122878005', '119272004', '118669005', '118670006', '118671005', '117089007', '117090003', '117088004', '122274003', '122265000', '117056007', '117254004', '117861008', '117956005', '122233003', '118969007', '123654008', '123655009', '125589001', '125696005', '11389007', '124194004', '128254003', '128256001', '128272009', '128486005', '128517006', '128518001', '128997002', '129134004', '129451001', '129893005', '134196008', '135886006', '137772003', '137777009', '138792007', '138798006', '139175004', '139218003', '139219006', '139220000', '139936009', '140097005', '140098000', '140100000', '140101001', '140102008', '140103003', '140109004', '140133005', '140184006', '141471001', '142188000', '142207002', '142209004', '142210009', '142239009', '142278008', '142328009', '142335001', '142482007', '142488006', '145961001', '146265006', '146608004', '146617004', '147853009', '147888009', '148394009', '148443003', '148447002', '149081008', '150562007', '150940001', '150948008', '150950000', '150957002', '150964000', '150969005', '150973008', '150981009', '150987008', '150998009', '151125009', '151126005', '151128006', '151684007', '151743000', '154284004', '154610006', '154921000', '155495001', '155496000', '155514003', '155516001', '155517005', '155518000', '155538004', '155545004', '155547007', '155598001', '155601006', '155603009', '155615008', '155626002', '155627006', '155628001', '156932003', '156933008', '156938004', '156943006', '157041002', '157107007', '157108002', '157114009', '157115005', '157554002', '157560002', '157781004', '158369003', '158370002', '158377004', '158378009', '158381004', '158417007', '158731006', '158732004', '158733009', '158734003', '160375009', '160380000', '161523006', '161529005', '161920001', '161961001', '161962008', '161963003', '162880000', '162881001', '162883003', '162884009', '162885005', '162886006', '162892000', '162913005', '162918001', '162969001', '164275002', '165033004', '165034005', '165035006', '165066000', '165111003', '165112005', '165113000', '168805002', '169047007', '169381009', '169390002', '170607007', '170650002', '171173003', '171228002', '171232008', '173214000', '173215004', '180745008', '181194006', '181210007', '181218000', '181219008', '181241008', '181242001', '181869007', '182680007', '182686001', '182688000', '182707004', '182711005', '182723004', '182733007', '182799008', '182801006', '183447000', '183507005', '186181005', '186192006', '186201000', '186202007', '186205009', '186206005', '186207001', '186212000', '186750007', '186760003', '187252008', '187286004', '187287008', '187288003', '187289006', '187558008', '187589007', '187827002', '187893008', '187894002', '187895001', '187896000', '187897009', '188433002', '188434008', '188449000', '188872007', '188903002', '189251006', '189269002', '189274005', '189275006', '189361002', '189430005', '189440008', '189528005', '189616005', '189618006', '190091005', '190094002', '190095001', '190096000', '190145000', '190175005', '190176006', '190210004', '190217001', '190884008', '190889003', '191373003', '191952007', '191959003', '194442000', '195085006', '195353004', '195647007', '195704001', '195705000', '195708003', '195710001', '195711002', '195727009', '195739001', '195742007', '195745009', '195748006', '195749003', '195750003', '195822007', '195872009', '195874005', '195876007', '195877003', '195881003', '195922008', '195925005', '196001008', '196018007', '196023007', '196024001', '196025000', '196029006', '196030001', '196031002', '196054006', '196055007', '196057004', '196150004', '196154008', '196165003', '196170005', '196183006', '196184000', '196185004', '196186003', '196187007', '196192009', '196193004', '196194005', '196195006', '196199000', '196200002', '196202005', '196214002', '196217009', '196228008', '196229000', '196237008', '196238003', '196239006', '196243005', '196244004', '196245003', '196248001', '196255004', '196256003', '196258002', '196259005', '196260000', '196261001', '198071002', '199293005', '200723008', '201060008', '201733005', '202000009', '204588006', '204591006', '204592004', '205894004', '205900004', '206006001', '206009008', '206010003', '206281003', '206282005', '206314003', '206315002', '206317005', '206318000', '206322005', '206323000', '206326008', '206327004', '206328009', '206329001', '206606002', '206632008', '206633003', '206639004', '206642005', '207047005', '207048000', '207049008', '207055003', '207056002', '207063002', '207106005', '207108006', '207360007', '207361006', '207362004', '207364003', '207365002', '207366001', '207367005', '207368000', '207552005', '207553000', '207554006', '207555007', '207578001', '207581006', '207584003', '207586001', '207648004', '211630009', '212040005', '212755008', '212767005', '212768000', '213215000', '213222008', '213226006', '213618007', '213624001', '213625000', '213635006', '213636007', '213680007', '213748001', '216618002', '217779001', '217795001', '217798004', '217800006', '217801005', '217802003', '217803008', '217804002', '217805001', '217806000', '217808004', '217809007', '217812005', '217813000', '219008007', '219044002', '219045001', '221122008', '221123003', '221124009', '221125005', '221126006', '221127002', '221128007', '221129004', '221130009', '221131008', '221132001', '221133006', '221134000', '221135004', '221136003', '221137007', '221138002', '221139005', '221140007', '221141006', '221142004', '221143009', '223101005', '223109007', '229286000', '230499002', '233596008', '233765002', '233814000', '233926006', '237860004', '237861000', '237862007', '237863002', '237981000', '237986005', '237987001', '239050000', '240130007', '240948002', '242669005', '242670006', '242671005', '242673008', '242674002', '242675001', '242676000', '242677009', '242678004', '243807000', '243853007', '248565000', '248566004', '248618001', '248622006', '248623001', '248624007', '248701005', '249224006', '249549009', '251880004', '251891006', '251907000', '251908005', '251916001', '251942001', '251949005', '251952002', '252486000', '252487009', '252488004', '254618003', '255076003', '255116009', '255117000', '255142009', '255166003', '257450008', '258603007', '258604001', '258606004', '258753007', '260536000', '262599003', '263653002', '264825005', '265840001', '266338006', '266340001', '266372003', '266373008', '266374002', '266375001', '266381009', '266382002', '266389006', '266390002', '266411000', '266804008', '266898002', '268320002', '268321003', '268322005', '268511007', '268546004', '268771003', '268834007', '268835008', '268925001', '269005007', '269270008', '269462001', '269473008', '269481009', '269490002', '269637007', '269713002', '270484008', '271306003', '271313003', '271508001', '271620003', '271822008', '271825005', '271882006', '271908009', '271923004', '272514005', '272517003', '272626006', '273749007', '273833000', '274270007', '274618002', '274697008', '274707005', '274836004', '274856003', '275260000', '275470000', '275497007', '275498002', '275914007', '276230003', '276259003', '276536005', '276571005', '276572003', '277973009', '278197002', '278692007', '278693002', '278695009', '278696005', '278907009', '278908004', '281488008', '281794004', '282446002', '284017001', '284018006', '284028002', '284188001', '284572009', '286211006', '286212004', '286213009', '286214003', '286215002', '286216001', '286964001', '286965000', '287082009', '287083004', '287460006', '287463008', '287515008', '287532007', '287690008', '288132004', '288253004', '291334002', '292548001', '292556003', '292560000', '294090001', '294098008', '294102000', '296402006', '296407000', '297107002', '300851005', '300875005', '301186004', '301226008', '301233008', '301252002', '301257008', '301273002', '301280000', '301295003', '301355003', '301389002', '301820005', '302183005', '303668008', '303747001', '303814000', '303904005', '303946001', '304069007', '304077006', '304131004', '304494000', '304495004', '305266004', '305360007', '305476004', '305665008', '305805007', '305961002', '306114008', '306275005', '306421001', '306576005', '306765008', '308924007', '309164002', '309168004', '309170008', '309171007', '309775007', '309911002', '309918008', '310039004', '312031005', '312117008', '312118003', '312119006', '312133006', '312134000', '312149008', '312419003', '313193002', '313221000', '313274005', '314806009', '315735002', '315758004', '315809005', '315824001', '315854006', '316120002', '316631006', '316677002', '316682009', '316685006', '316828007', '316835004', '316844003', '320072000', '320295002', '320318002', '320476006', '320477002', '320548000', '320576008', '320620006', '320892006', '320893001', '320924004', '321083002', '321084008', '321570009', '321667001', '321764001', '334087009', '334943003', '346666000', '346667009', '349366009', '349368005', '349954009', '350436004', '360198009', '360400000', '361110005', '15993004', '361380005', '361381009', '361923002', '363021009', '363074004', '363084003', '363085002', '363086001', '363121006', '363180009', '363225006', '363238003', '363249009', '363257007', '363267002', '363329003', '34431008', '364029002', '364048003', '364049006', '364053008', '364055001', '364056000', '364057009', '364989002', '365852007', '366129003', '366138001', '366143008', '366144002', '366147009', '366148004', '366154003', '366355009', '366798005', '366876005', '40617009', '367547009', '42457008', '42908004', '47525004', '48409008', '53972003', '56251003', '62640008', '79688008', '162711000', '162887002', '162895003', '162977002', '106055006', '106057003', '265844005', '266404004', '266405003', '268380000', '268381001', '274282003', '370584009', '370801009', '370834006', '371044001', '372145000', '372727006', '372885009', '373272007', '373405005', '373895009', '112239003', '120902001', '271625008', '274678008', '274690005', '274848001', '274865005', '274868007', '274880004', '78645005', '385847009', '386043001', '386098006', '386151000', '386168001', '386504005', '386505006', '387661001', '387662008', '389480002', '389865001', '389928002', '390212005', '390597004', '390662009', '390757000', '390797002', '390965009', '391109009', '392738004', '393041005', '393177001', '393693006', '393997005', '394127006', '394966004', '395051008', '397190009', '397707005', '397767007', '397886005', '397972007', '398447004', '400141005', '401005004', '401288006', '386240008', '397912004', '404988002', '405618001', '407752006', '407874005', '408489005', '408553000', '404989005', '404996007', '162882008', '408684006', '408688009', '408867002', '408868007', '409474006', '409523000', '409525007', '409622000', '409623005', '410197001', '410198006', '410205005', '410206006', '410207002', '410430005', '410431009', '410579004', '410580001', '410581002', '413087007', '413585005', '415293009', '415294003', '415360003', '282297008', '416088008', '416787006', '20573003', '53617003', '418092006', '417850002', '418512001', '417796003', '418760000', '420016005', '417888000', '419597003', '417770000', '417772008', '417773003', '417774009', '417790009', '417791008', '417792001', '417793006', '417771001', '417794000', '417795004', '417797007', '315184001', '370574008', '415390005', '415391009', '415392002', '415393007', '415394001', '415395000', '415396004', '415397008', '415398003', '415399006', '415400004', '415401000', '415402007', '415403002', '415404008', '415405009', '415406005', '415407001', '415408006', '415409003', '415410008', '415411007', '415412000', '415413005', '415414004', '415415003', '415416002', '415417006', '415418001', '415419009', '415420003', '415421004', '415422006', '415423001', '415425008', '415426009', '415424007', '415428005', '415430007', '415431006', '415432004', '415433009', '415434003', '415375006', '415376007', '415377003', '415378008', '415379000', '415380002', '415381003', '415383000', '415384006', '415382005', '415385007', '415386008', '415387004', '415388009', '415389001', '415439008', '415440005', '415441009', '415442002', '415443007', '415444001', '415445000', '415446004', '415429002', '415435002', '415447008', '415448003', '415449006', '415450006', '415451005', '415452003', '415453008', '415454002', '415455001', '415456000', '415457009', '415458004', '415459007', '415460002', '415461003', '415462005', '415463000', '415464006', '415465007', '415466008', '415467004', '415468009', '415469001', '415470000', '415471001', '415472008', '415473003', '415474009', '415475005', '415476006', '415477002', '415478007', '415479004', '415436001', '415480001', '415481002', '415482009', '415483004', '415484005', '415485006', '415486007', '415487003', '415488008', '415489000', '415490009', '415491008', '415492001', '415493006', '415494000', '415495004', '415496003', '415497007', '415499005', '415498002', '415437005', '415427000', '415438000', '415361004', '415362006', '415363001', '415364007', '415365008', '415366009', '415367000', '415368005', '415369002', '415370001', '415371002', '415372009', '415373004', '415374005', '421092003', '421724004', '421874007', '423579004', '423662002', '424865006', '425123005', '422834003', '422376000', '423168004', '423234004', '162976006', '427391006', '425696007', '426896000', '427286007', '426755009', '426196002', '426197006', '426477007', '427625003', '426018002', '170609005', '428489000', '428085002', '170608002', '427809006', '170618007', '427896006', '429215007', '170619004', '428658005', '428173007', '429714005', '170620005', '430528003', '429982006', '429988005', '429989002', '429992003', '429996000', '430029004', '430785000', '430621000', '430475000', '431190000', '429980003', '429984007', '429983001', '429981004', '429994002', '160258000', '438947006', '438063001', '441048007', '439742002', '440929004', '441278007', '441119003', '441590008', '442867008', '443259004', '444482005', '444288007', '444046005', '445019007', '445241004', '447081004', '170617002', '447006007', '446946005', '447996002', '447715008', '448459000', '448719004', '447694001', '449349006', '449066004', '448739000', '449096009', '449264008', '448708002', '399150003', '160421002', '450747009', '450748004', '465367002', '463005003', '462575001', '465888001', '465892008', '470356002', '463532000', '470396000', '233686006', '472827002', '472959005', '473339009', '473332000', '473340006', '473331007', '473336002', '473329003', '473341005', '473334004', '473338001', '473343008', '473335003', '473330008', '473333005', '697932005', '698510006', '268926000', '698801008', '698800009', '698799005', '699748007', '700272008', '700593005', '700610003', '700630004', '700705005', '700910000', '700968004', '701077002', '702152003', '702373006', '702788003', '702917005', '703346001', '704277009', '704296008', '704744009', '704882006', '704883001', '704906008', '705205006', '706167001', '706178009', '706180003', '706187000', '706190006', '706194002', '706198004', '706221005', '706223008', '706230002', '651000146102', '707224005', '707351006', '707541006', '707540007', '707944005', '707945006', '707779003', '707780000', '707781001', '707784009', '707785005', '708169007', '708761000', '151181000119106', '10692681000119108', '709111008', '709109004', '709110009', '101301000119106', '709251003', '709275003', '709508003', '709370005', '709371009', '6071000119100', '709904008', '709962005', '709905009', '94671000119102', '10625551000119103', '10685111000119102', '142941000119109', '142921000119103', '328531000119104', '710502001', '710460008', '710683000', '710777009', '296241000119107', '152921000119101', '13320001000004109', '711483003', '10672271000119100', '713419002', '713484001', '714084001', '714324006', '714554002', '714323000', '715601004', '715612004', '715659006', '715695003', '715698001', '715782000', '715784004', '715850007', '715882005', '718317002', '716488008', '716509000', '716516004', '10676831000119101', '716673006', '718018002', '718089001', '718270006', '718297004', '718296008', '311671000119100', '718606005', '719098007', '719368006', '719522009', '719930000', '7361000175106', '720294006', '720293000', '722511005', '722579002', '722692009', '722827008', '722896005', '722911000', '722936006', '723092003', '723093008', '12591000132100', '12611000132107', '12601000132105', '723541004', '723880004', '725507009', '726698006', '727003000', '727359003', '731167003', '732084008', '732112001', '732156001', '429258006', '724502006', '733358002', '733490006', '734262002', '735386008', '735445000', '735446004', '736057009', '736085006', '736086007', '763547004', '764382006', '765026007', '765027003', '766983005', '767467006', '20091000175107', '770727008', '773454006', '773595007', '777424002', '780820008', '783182004', '784170001', '784192002', '784370005', '16775141000119108', '787773004', '789715006', '816074000', '818951009', '410011000124101', '435051000124104', '438391000124101', '16055271000119107', '10762071000119109', '453571000124103', '22211000175108', '459741000124104']),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Condition"]("Smoking Status", ['8392000', '8517006', '10729003', '11947005', '12539000', '22951005', '26663004', '35844001', '39953003', '43381005', '46802002', '53896009', '56578002', '56771006', '59978006', '64197008', '65568007', '65909009', '66562002', '72524004', '77176002', '82302008', '84498003', '87739003', '95269005', '102407002', '102408007', '102409004', '105539002', '105540000', '105541001', '108333003', '129570009', '132908000', '134406006', '137981001', '137982008', '137983003', '137984009', '137985005', '137986006', '137987002', '137988007', '137989004', '137990008', '137991007', '137992000', '137993005', '137996002', '137997006', '137998001', '137999009', '138000003', '138001004', '138002006', '138004007', '138005008', '138006009', '138007000', '138008005', '138009002', '138010007', '138011006', '138389006', '148261009', '148279008', '151361007', '152100002', '153967006', '153968001', '153969009', '153970005', '153971009', '153972002', '153973007', '153974001', '153975000', '153976004', '153977008', '153978003', '154917007', '155567003', '160600008', '160601007', '160602000', '160603005', '160604004', '160605003', '160606002', '160607006', '160608001', '160609009', '160610004', '160611000', '160612007', '160615009', '160616005', '160617001', '160618006', '160620009', '160621008', '160622001', '160623006', '160624000', '160625004', '160626003', '161076007', '161077003', '161078008', '161079000', '161080002', '171038002', '171055003', '183090009', '183871002', '185789006', '185790002', '185791003', '185792005', '185793000', '185794006', '185795007', '185796008', '185798009', '185799001', '212861004', '212863001', '217231007', '217232000', '217233005', '217234004', '217235003', '217236002', '217237006', '217238001', '217239009', '217240006', '217241005', '217242003', '217243008', '217384009', '217385005', '217386006', '217387002', '217388007', '217389004', '217390008', '217391007', '217392000', '217393005', '217394004', '217395003', '217396002', '217397006', '221301006', '221380005', '221381009', '221382002', '221383007', '221384001', '221385000', '221386004', '221387008', '221388003', '221389006', '221390002', '221391003', '221392005', '221393000', '221394006', '221395007', '221396008', '221397004', '221399001', '221400008', '221401007', '221402000', '222227006', '222228001', '222229009', '222230004', '222231000', '222232007', '222233002', '222234008', '222235009', '222236005', '222237001', '222463009', '222464003', '222465002', '222466001', '222467005', '222468000', '222469008', '222470009', '222471008', '222472001', '222473006', '222827002', '222828007', '222829004', '222830009', '222831008', '222832001', '222833006', '222834000', '222835004', '222836003', '222837007', '225323000', '225324006', '225786009', '225934006', '226847007', '227055006', '227065000', '227128004', '227129007', '227134006', '227143002', '228377000', '228378005', '228379002', '228484007', '228486009', '228487000', '228488005', '228523000', '228524006', '228525007', '230059006', '230060001', '230062009', '230063004', '230064005', '230065006', '235033006', '242188004', '242430009', '242437007', '242451007', '242478009', '242488005', '266394006', '266918002', '266919005', '266920004', '266921000', '266922007', '266923002', '266924008', '266925009', '266927001', '266928006', '266929003', '267123009', '268768006', '271393002', '273632007', '273657002', '273738001', '275105001', '281018007', '281080007', '308438006', '308511002', '308512009', '310429001', '315213009', '315232003', '360890004', '360900008', '360907006', '360918006', '360929005', '365981007', '365982000', '366916002', '366957009', '367141000', '367182000', '384742004', '389300001', '389301002', '389302009', '389303004', '389304005', '390035002', '390036001', '390037005', '390038000', '390039008', '390900001', '390901002', '390902009', '390903004', '390904005', '392686002', '392687006', '392688001', '392689009', '392697002', '392698007', '392699004', '392700003', '392701004', '392705008', '393644001', '393645000', '393646004', '393647008', '393655001', '393656000', '393660002', '394871007', '394872000', '394873005', '394885002', '394964001', '395177003', '395600001', '395645002', '395700008', '228380004', '401068004', '401159003', '401160008', '405746006', '408398007', '408425002', '426936004', '440012000', '438618001', '443877004', '443847005', '446172000', '449345000', '449368009', '449369001', '448755007', '449868002', '221000119102', '465409000', '466123001', '465363003', '466008008', '465449008', '465634008', '465505008', '698101006', '698289004', '699009004', '699033005', '1221000175102', '10998291000119107', '709507008', '5661000124106', '710081004', '48031000119106', '711081005', '711563001', '712829007', '713096001', '713142003', '713700008', '713914004', '714151003', '428041000124106', '94151000119101', '16090371000119103', '16060351000119105', '735128000', '16090771000119104', '762296001', '765000002', '765001003', '770729006', '771155005', '782516008', '1821000124104', '428061000124105', '428071000124103', '428081000124100', '428091000124102', '433161000124102', '1041000175104', '1051000175102', '445551000124106', '445561000124108', '445581000124103', '1311000175101', '450811000124104', '450821000124107', '451381000124107', '451901000124104', '451911000124101', '451921000124109', '454261000124105', '455421000124104', '455451000124108', '456711000124105'])
        ];
    }
    CSVReader.prototype.readCSV = function (fileName) {
        var trialArray = [];
        return this.http.get("/assets/risk-factors/" + fileName + ".csv", { responseType: 'text' }).map(function (data) {
            var csvToRows = data.split("\n");
            for (var i = 1; i < csvToRows.length; i++) {
                var row = csvToRows[i];
                var rowSplit = [];
                var currentWord = "";
                if (row.length == 0)
                    continue;
                for (var j = 0; j < row.length; j++) {
                    if (row[j] == ',') {
                        if (rowSplit.length == 2) {
                            if (row.substring(j + 1, j + 5) == 'http' || row.substring(j + 1, j + 8) == 'doi.org') {
                                rowSplit.push(currentWord);
                                currentWord = "";
                            }
                        }
                        else {
                            rowSplit.push(currentWord);
                            currentWord = "";
                        }
                    }
                    else if (row[j] != '"') {
                        currentWord = currentWord + row[j];
                    }
                }
                var clinicalTrial = new _condition_info__WEBPACK_IMPORTED_MODULE_2__["ClinicalTrial"](rowSplit[2], rowSplit[1], rowSplit[3], rowSplit[9], rowSplit[16]);
                trialArray.push(clinicalTrial);
            }
            return trialArray;
        });
    };
    CSVReader.prototype.search = function (searchTerm) {
        var possibilities = [];
        searchTerm = searchTerm.toLowerCase();
        console.log(searchTerm);
        for (var i = 0; i < this.conditionArray.length; i++) {
            var condition = this.conditionArray[i];
            var lowerCase = this.conditionArray[i].name.toLowerCase();
            if (lowerCase.includes(searchTerm)) {
                possibilities.push(condition);
            }
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(possibilities);
    };
    CSVReader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CSVReader);
    return CSVReader;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: MyGeneInfoSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGeneInfoSearchService", function() { return MyGeneInfoSearchService; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/json-navigator.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * MyVariant.info compiles variant database information from across the web and provides in an easy-to-query
 * online API.
 */





/**
 * Since the myvariant.info response JSON is MASSIVE and depends to a large extent on the query, these locations
 * map the keys of the JSON where values may be stored.
 */
var GENE_DATA_LOCATIONS = {
    "Aliases": [
        "alias[]"
    ]
};
var MyGeneInfoSearchService = /** @class */ (function () {
    function MyGeneInfoSearchService(http, jsonNavigator) {
        var _this = this;
        this.http = http;
        this.jsonNavigator = jsonNavigator;
        this.updateVariantOrigin = function (variant) {
            if (!variant.origin || !variant.origin.entrezID) {
                console.log("Resulting variant is ", variant);
                console.log("Required fields for a gene query were not provided, variant.origin is " + variant.origin + " and entrez ID is " + variant.origin.entrezID);
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(variant);
            }
            // Query for gene information
            return _this.http.get("https://mygene.info/v3/gene/" + variant.origin.entrezID).map(function (response) {
                console.log("Got for gene annotation ", response);
                if (response["name"]) {
                    variant.origin.name = response["name"];
                }
                if (response["alias"]) {
                    if (response["alias"] instanceof Array) {
                        variant.origin.aliases = response["alias"];
                    }
                    else {
                        variant.origin.aliases = [response["alias"]];
                    }
                }
                if (response["summary"]) {
                    variant.origin.description = response["summary"];
                }
                if (response["type_of_gene"]) {
                    variant.origin.type = response["type_of_gene"];
                }
                if (response["genomic_pos"]) {
                    variant.origin.chromosome = response["genomic_pos"].chr;
                    variant.origin.start = response["genomic_pos"].start;
                    variant.origin.end = response["genomic_pos"].end;
                    variant.origin.strand = response["genomic_pos"].strand;
                }
                if (response["pathway"] && response["pathway"].wikipathways) {
                    for (var _i = 0, _a = response["pathway"].wikipathways; _i < _a.length; _i++) {
                        var wikipathway = _a[_i];
                        variant.origin.pathways.push(new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["Pathway"](wikipathway.id, wikipathway.name));
                    }
                }
                return variant;
            });
        };
    }
    MyGeneInfoSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_4__["JSONNavigatorService"]])
    ], MyGeneInfoSearchService);
    return MyGeneInfoSearchService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MyVariantInfoSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyVariantInfoSearchService", function() { return MyVariantInfoSearchService; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/* harmony import */ var _variant_visualization_drugs_drug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variant-visualization/drugs/drug */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/json-navigator.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/empty */ "./node_modules/rxjs-compat/_esm5/add/observable/empty.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * MyVariant.info compiles variant database information from across the web and provides in an easy-to-query
 * online API.
 */








/**
 * Since the myvariant.info response JSON is MASSIVE and depends to a large extent on the query, these locations
 * map the keys of the JSON where values may be stored.
 */
var MY_VARIANT_LOCATIONS = {
    "GeneHUGO": [
        "civic.entrez_name",
        "cadd.gene.genename",
        "cgi.gene",
        "docm.default_gene_name",
        "docm.gene_name",
        "snpeff.genename",
        "snpeff.gene_id",
        "clinvar.gene.symbol"
    ],
    "VariantName": [
        "civic.name",
        "dbnsfp.mutationtaster.AAE[0]",
        "dbnsfp.mutpred.aa_change" /*,
        "cgi.protein_change (of format BRAF:p.V600E)",
        "docm.aa_change (p. V600E)",
        "emv.egl_protein (p.Val600Glu | p.V600E)"
        */
    ],
    "EntrezID": [
        "civic.entrezID",
        "clinvar.gene.id"
    ],
    "Drug": [
        "cgi.drug",
        "cgi[].drug",
        "civic.evidence_items[].drugs[].name",
        "civic.evidence_items.drugs[].name"
    ],
    "Disease": [
        "civic.evidence_items.disease.display_name",
        "civic.evidence_items[].disease.display_name",
        "clinvar.rcv.conditions.name",
        "clinvar.rcv[].conditions.name",
        "clinvar.rcv[].conditions[].name",
        "clinvar.rcv.conditions[].name"
    ],
    "Description": [
        "civic.description"
    ],
    "Somatic": [
        "civic.evidence_items[0].variant_origin",
        "clinvar.rcv.origin"
    ],
    "ChromosomePos": [
        "chrom"
    ],
    "StartPos": [
        "vcf.position",
        "hg19.start"
    ],
    "EndPos": [
        "vcf.position",
        "hg19.end"
    ],
    "VariantTypes": [
        "civic.variant_types.display_name",
        "civic.variant_types[].display_name"
    ],
    "HGVSID": [
        "_id"
    ],
    "ClinicalSignificance": [
        "clinvar.rcv",
        "clinvar.rcv[]"
    ]
};
// Stores the keyword string and the purpose enum.
var VariantSearchKeyword = /** @class */ (function () {
    function VariantSearchKeyword(_keyword, _purpose) {
        this.keyword = _keyword;
        this.purpose = _purpose;
    }
    return VariantSearchKeyword;
}());
var MyVariantInfoSearchService = /** @class */ (function () {
    function MyVariantInfoSearchService(http, jsonNavigator) {
        var _this = this;
        this.http = http;
        this.jsonNavigator = jsonNavigator;
        // Create these in the constructor so that we don"t constantly re-create them.
        this.allFieldsIncludeString = "";
        this.referenceFieldsIncludeString = "";
        this.scrubbedLocations = {};
        this.queryEndpoint = "https://myvariant.info/v1/query?q=";
        this.currentKeywords = [];
        this.lastSuggestionSet = rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of([]);
        /**
         * Works as follows:
         * 1. The keyword is dissected (split by spaces), and then test queries are sent to figure out the likely purpose of each
         * keyword (3 chars required before any predictions made).
         * 2. Based on the likelihood of each of the words made previously, a list of variants are compiled and sent back to the
         * filterable search component, where the user selects one from the list.
         * @param {string} searchTerm
         * @returns {Observable<Variant[]>}
         */
        this.searchByString = function (searchTerm) {
            // Get new keywords.
            var newKeywords = searchTerm.split(" ");
            // Prune out keywords which are less than 3 characters.
            for (var i = 0; i < newKeywords.length; i++) {
                if (newKeywords[i].length < 1) {
                    newKeywords.splice(i, 1);
                }
            }
            /**
             * Figure out conflicts.  This is done by looking through the keyword array for each keyword object.
             * If it is found, then the item is removed from the new keywords array.  Otherwise, the keyword is
             * removed from the current keywords array.
             */
            var managePotentialConflict = function (potentialConflict) {
                // Figure out conflicting keywords.
                for (var _i = 0, newKeywords_2 = newKeywords; _i < newKeywords_2.length; _i++) {
                    var newKeyword = newKeywords_2[_i];
                    if (newKeyword === potentialConflict.keyword) {
                        // Remove the potential conflict and its corresponding keyword.
                        newKeywords.splice(newKeywords.indexOf(potentialConflict.keyword), 1);
                        return;
                    }
                }
                // It must"ve not been found if we reach here.
                _this.currentKeywords.splice(_this.currentKeywords.indexOf(potentialConflict), 1);
                console.log(potentialConflict.keyword + " is a conflict.");
            };
            for (var _i = 0, _a = _this.currentKeywords; _i < _a.length; _i++) {
                var potentialConflict = _a[_i];
                // Wrapped in a method so that we can return if need be.
                managePotentialConflict(potentialConflict);
            }
            if (newKeywords.length === 0) {
                console.log("Returning last suggestion set", _this.lastSuggestionSet);
                return _this.lastSuggestionSet;
            }
            // Gets populated, forked, and then mapped.
            var checkObservables = [];
            var _loop_1 = function (newKeyword) {
                // Since all checks follow same format.
                var determineLikelihoodBasedOnQuery = function (queryString) {
                    return _this.http.get(queryString)
                        .map(function (result) {
                        return result["hits"].length;
                    });
                };
                var quickQuerySuffix = "&fields=_id&size=15";
                // Don"t create duplicate purposes.
                var purposeAlreadyExists = function (purpose) {
                    for (var _i = 0, _a = _this.currentKeywords; _i < _a.length; _i++) {
                        var keyword = _a[_i];
                        if (keyword.purpose === purpose) {
                            return true;
                        }
                    }
                    return false;
                };
                // Query for relative likelihoods.
                if (!isNaN(Number(newKeyword))) {
                    if (!purposeAlreadyExists(3 /* ENTREZ_ID */))
                        _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 3 /* ENTREZ_ID */));
                }
                else if (newKeyword.toLowerCase().indexOf("chr") >= 0 || newKeyword.toLowerCase().indexOf("civic") >= 0) {
                    if (!purposeAlreadyExists(2 /* HGVS_ID */))
                        _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 2 /* HGVS_ID */));
                }
                else {
                    var geneHUGOQuery = determineLikelihoodBasedOnQuery(_this.queryEndpoint + _this.constructORConcatenation(_this.scrubbedLocations.GeneHUGO, newKeyword, true) + quickQuerySuffix);
                    var variantNameQuery = determineLikelihoodBasedOnQuery(_this.queryEndpoint + _this.constructORConcatenation(_this.scrubbedLocations.VariantName, newKeyword, true) + quickQuerySuffix);
                    // Create large observable fork.
                    checkObservables.push(rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].forkJoin([geneHUGOQuery, variantNameQuery])
                        .map(function (results) {
                        console.log("Classification results were ", results);
                        // Figure out purpose of keyword.
                        if (results[0] > results[1]) {
                            if (!purposeAlreadyExists(0 /* Gene_HUGO_Symbol */))
                                _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 0 /* Gene_HUGO_Symbol */));
                        }
                        else if (results[0] < results[1]) {
                            if (!purposeAlreadyExists(1 /* Variant_Name */))
                                _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 1 /* Variant_Name */));
                        }
                        else {
                            // Results must be equal.
                            if (!purposeAlreadyExists(0 /* Gene_HUGO_Symbol */))
                                _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 0 /* Gene_HUGO_Symbol */));
                            else if (!purposeAlreadyExists(1 /* Variant_Name */))
                                _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 1 /* Variant_Name */));
                        }
                    }));
                }
            };
            // Now the array only has the conflict keywords, so we can classify the purposes of the other keywords.
            for (var _b = 0, newKeywords_1 = newKeywords; _b < newKeywords_1.length; _b++) {
                var newKeyword = newKeywords_1[_b];
                _loop_1(newKeyword);
            }
            var getVariantArrayObservable = function () {
                console.log("Creating final observable with keywords", _this.currentKeywords);
                // Apply keywords to query.
                var finalQuery = _this.queryEndpoint;
                var arrayToUse;
                if (_this.currentKeywords.length > 1) {
                    finalQuery = finalQuery + "(";
                }
                for (var i = 0; i < _this.currentKeywords.length; i++) {
                    switch (_this.currentKeywords[i].purpose) {
                        case 0 /* Gene_HUGO_Symbol */:
                            arrayToUse = _this.scrubbedLocations.GeneHUGO;
                            break;
                        case 1 /* Variant_Name */:
                            arrayToUse = _this.scrubbedLocations.VariantName;
                            break;
                        case 2 /* HGVS_ID */:
                            arrayToUse = _this.scrubbedLocations.HGVSID;
                            break;
                        case 3 /* ENTREZ_ID */:
                            arrayToUse = _this.scrubbedLocations.EntrezID;
                    }
                    finalQuery = finalQuery + _this.constructORConcatenation(arrayToUse, _this.currentKeywords[i].keyword, true);
                    // Add "AND" requirement
                    if (i < _this.currentKeywords.length - 1) {
                        finalQuery = finalQuery + ")%20AND%20(";
                    }
                }
                if (_this.currentKeywords.length > 1) {
                    finalQuery = finalQuery + ")";
                }
                // Add suffix.
                finalQuery = finalQuery + "&fields=" + _this.referenceFieldsIncludeString + "&size=15";
                return _this.http.get(finalQuery)
                    .map(function (result) {
                    console.log("Final Query result from " + finalQuery, result);
                    if (!result["hits"])
                        return [];
                    // Used to check whether a given property exists in the mapped JSON.
                    var variantResults = [];
                    // For every result.
                    for (var _i = 0, _a = result["hits"]; _i < _a.length; _i++) {
                        var hit = _a[_i];
                        // Since names, HUGO symbols, and such shouldn"t include spaces.
                        var ensureValidString = function (someString) {
                            return someString.indexOf(" ") >= 0 ? someString.substring(0, someString.indexOf(" ")) : someString;
                        };
                        // Gene construction.
                        var variantGene = new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["GeneReference"](ensureValidString(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.GeneHUGO, false)[0]), Number(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.EntrezID, false)[0]));
                        // Variant construction
                        variantResults.push(new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["VariantReference"](variantGene, ensureValidString(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.VariantName, false)[0]), hit._id));
                    }
                    return variantResults;
                });
            };
            if (checkObservables.length > 0) {
                // Map the keywords (has to be done this way based on how Observables work).
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].forkJoin(checkObservables)
                    // Merge map so that we wait for the forked observable to complete.
                    .mergeMap(function (results) {
                    _this.lastSuggestionSet = getVariantArrayObservable();
                    return _this.lastSuggestionSet;
                });
            }
            else { // If this is an entrez ID or an HGVS ID based on special circumstances.
                _this.lastSuggestionSet = getVariantArrayObservable();
                return _this.lastSuggestionSet;
            }
        };
        this.getByReference = function (reference) {
            console.log("Creating final observable with keywords", _this.currentKeywords);
            // Apply key fields to query.
            var queryConstruct = _this.queryEndpoint;
            var alreadyAdded = 0;
            var addORConstructToQuery = function (orConstruct) {
                if (alreadyAdded > 0) {
                    queryConstruct = queryConstruct + "%20OR%20(";
                }
                else {
                    queryConstruct = queryConstruct + "(";
                }
                queryConstruct = queryConstruct + orConstruct + ")";
                alreadyAdded++;
            };
            if (reference.origin) {
                if (reference.origin.hugoSymbol && reference.origin.hugoSymbol !== "") {
                    addORConstructToQuery(_this.constructORConcatenation(_this.scrubbedLocations.GeneHUGO, reference.origin.hugoSymbol, true));
                }
                if (reference.origin.entrezID && reference.origin.entrezID !== -1) {
                    addORConstructToQuery(_this.constructORConcatenation(_this.scrubbedLocations.EntrezID, reference.origin.entrezID.toString(), false));
                }
            }
            if (reference.hgvsID && reference.hgvsID !== "") {
                addORConstructToQuery(_this.constructORConcatenation(_this.scrubbedLocations.HGVSID, reference.hgvsID, false));
            }
            if (reference.variantName && reference.variantName !== "") {
                addORConstructToQuery(_this.constructORConcatenation(_this.scrubbedLocations.VariantName, reference.variantName, true));
            }
            // Add suffix.
            queryConstruct = queryConstruct + "&fields=" + _this.allFieldsIncludeString + "&size=15";
            return _this.http.get(queryConstruct)
                .map(function (result) {
                console.log("Final Query result from " + queryConstruct, result);
                if (!result["hits"])
                    return null;
                // For every result.
                if (!(result["hits"] && result["hits"].length > 0))
                    return null;
                var hit = result["hits"][0];
                // Since names, HUGO symbols, and such shouldn"t include spaces.
                var ensureValidString = function (someString) {
                    return someString.indexOf(" ") >= 0 ? someString.substring(0, someString.indexOf(" ")) : someString;
                };
                // Gene construction.
                console.log("Constructing from reference " + reference.toString());
                var newVariant = _genomic_data__WEBPACK_IMPORTED_MODULE_1__["Variant"].fromReference(reference);
                newVariant.description = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.Description, false)[0];
                newVariant.score = hit._score;
                newVariant.somatic = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.Somatic, false)[0].toLowerCase().indexOf("somatic") >= 0;
                newVariant.chromosome = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.ChromosomePos, false)[0]; // Can be "X" or "Y"
                newVariant.start = Number(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.StartPos, false)[0]);
                newVariant.end = Number(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.EndPos, false)[0]);
                newVariant.drugs = [];
                for (var _i = 0, _a = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.Drug, true); _i < _a.length; _i++) {
                    var drugName = _a[_i];
                    newVariant.drugs.push(new _variant_visualization_drugs_drug__WEBPACK_IMPORTED_MODULE_2__["DrugReference"](drugName));
                }
                newVariant.types = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.VariantTypes, true);
                newVariant.diseases = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.Disease, true);
                newVariant.classifications = [];
                var addClassification = function (classification) {
                    for (var _i = 0, _a = newVariant.classifications; _i < _a.length; _i++) {
                        var existentC = _a[_i];
                        if (existentC.name === classification.name) {
                            existentC.sources.push(classification.sources[0]);
                            return;
                        }
                    }
                    newVariant.classifications.push(classification);
                };
                for (var _b = 0, _c = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.ClinicalSignificance, true); _b < _c.length; _b++) {
                    var classification = _c[_b];
                    addClassification(new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["Classification"](classification.clinical_significance, "ClinVar RCV Accession " + classification.accession));
                }
                return newVariant;
            });
        };
        // Scrub the locations of all bracket indicators.
        for (var _i = 0, _a = Object.keys(MY_VARIANT_LOCATIONS); _i < _a.length; _i++) {
            var key = _a[_i];
            var compilation = [];
            for (var i = 0; i < MY_VARIANT_LOCATIONS[key].length; i++) {
                var currentFocus = MY_VARIANT_LOCATIONS[key][i];
                if (currentFocus.indexOf("[") >= 0) {
                    // REGULAR EXPRESSIONS AHHHHH (test here: http://regexr.com/)
                    var scrubbedString = currentFocus.replace(/\[.*?\]/g, "");
                    console.log("Scrubbed " + currentFocus + " to " + scrubbedString);
                    compilation.push(scrubbedString);
                }
                else {
                    compilation.push(currentFocus);
                }
            }
            this.scrubbedLocations[key] = compilation;
        }
        // Add all values of the MY_VARIANT_LOCATIONS array to the include string.
        for (var _b = 0, _c = Object.keys(this.scrubbedLocations); _b < _c.length; _b++) {
            var key = _c[_b];
            for (var _d = 0, _e = this.scrubbedLocations[key]; _d < _e.length; _d++) {
                var location_1 = _e[_d];
                this.allFieldsIncludeString = this.allFieldsIncludeString + location_1 + ",";
            }
        }
        // Remove the final comma.
        this.allFieldsIncludeString = this.allFieldsIncludeString.substring(0, this.allFieldsIncludeString.length - 1);
        // Add fields required for references to reference include string.
        for (var _f = 0, _g = ["GeneHUGO", "VariantName", "EntrezID"]; _f < _g.length; _f++) {
            var key = _g[_f];
            for (var _h = 0, _j = this.scrubbedLocations[key]; _h < _j.length; _h++) {
                var location_2 = _j[_h];
                this.referenceFieldsIncludeString = this.referenceFieldsIncludeString + location_2 + ",";
            }
        }
        // Remove the final comma.
        this.referenceFieldsIncludeString = this.referenceFieldsIncludeString.substring(0, this.allFieldsIncludeString.length - 1);
    }
    /**
     * Utility method to query in accordance with myvariant.info API.
     * @param {string[]} stringArray
     * @param {string} desiredVal
     * @returns {string}
     */
    MyVariantInfoSearchService.prototype.constructORConcatenation = function (stringArray, desiredVal, include_prefixed_args) {
        desiredVal = desiredVal.replace(/[:]/g, "\\$&");
        // desiredVal = encodeURIComponent(desiredVal);
        var currentString = "";
        if (include_prefixed_args) {
            currentString = stringArray[0].replace(/_/g, "") + ":" + desiredVal + "*" + "%20OR%20" + stringArray[0] + ":" + desiredVal;
        }
        else {
            currentString = stringArray[0] + ":" + desiredVal;
        }
        for (var i = 1; i < stringArray.length; i++) {
            if (include_prefixed_args) {
                currentString = currentString + "%20OR%20" + stringArray[i] + ":" + desiredVal + "*";
            }
            currentString = currentString + "%20OR%20" + stringArray[i] + ":" + desiredVal;
        }
        return currentString;
    };
    MyVariantInfoSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_5__["JSONNavigatorService"]])
    ], MyVariantInfoSearchService);
    return MyVariantInfoSearchService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: JSONNavigatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONNavigatorService", function() { return JSONNavigatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * TODO: This class should eventually take over for the myvariant.info querier's JSON searching, since that service should be
 * leverageable by all services which require it.
 */

var JSONNavigatorService = /** @class */ (function () {
    function JSONNavigatorService() {
    }
    /**
     * Navigates through a simple path "item.test.name", NOT "item.test[].name"
     * @param from  the JSON to search through.
     * @param {string} path  the path of the item in question.
     * @returns {any}  the sub JSON at that path.
     */
    JSONNavigatorService.prototype.navigateToPath = function (from, path) {
        var current = from;
        for (var _i = 0, _a = path.split("."); _i < _a.length; _i++) {
            var key = _a[_i];
            if (current instanceof Array) {
                return null;
            }
            if (!current.hasOwnProperty(key)) {
                return null;
            }
            current = current[key];
        }
        return current;
    };
    /**
     * Takes a path which may contain bracket notation and recursively parses it to a string or a string array (depending
     * on the data available at that path).
     * @param from
     * @param {string} path
     * @returns {string | string[]}
     */
    JSONNavigatorService.prototype.getPathData = function (from, path) {
        // Figure out whether the user added any [] in.
        if (path.indexOf("[") >= 0 && path.indexOf("]") >= 0) {
            // Figure out the array stuff.
            var prePath = path.substring(0, path.indexOf("["));
            // Navigate to prePath.
            var current = this.navigateToPath(from, prePath);
            if (!(current instanceof Array)) {
                return null;
            }
            // Post path.
            var index = Number(path[path.indexOf("[") + 1]);
            if (isNaN(index)) {
                index = -1;
            }
            var postPath = path.substring(path.indexOf("]") + 2);
            // User wrote civic.evidence_items[] not [0]
            if (index === -1) { // Will return array
                var compilation = [];
                for (var _i = 0, current_1 = current; _i < current_1.length; _i++) {
                    var subJSON = current_1[_i];
                    // Recursive call (in case more [] are included)
                    var subJSONValue = this.navigateToPath(subJSON, postPath);
                    if (subJSONValue === null) {
                        return null;
                    }
                    if (subJSONValue instanceof Array) {
                        for (var _a = 0, subJSONValue_1 = subJSONValue; _a < subJSONValue_1.length; _a++) {
                            var subJSONArrayValue = subJSONValue_1[_a];
                            compilation.push(subJSONArrayValue);
                        }
                    }
                    else {
                        compilation.push(subJSONValue);
                    }
                }
                compilation = compilation.filter(function (filterItem) {
                    return filterItem !== null && filterItem !== "";
                });
                return compilation;
            }
            else {
                return this.getPathData(current[index], postPath);
            }
        }
        else {
            return this.navigateToPath(from, path);
        }
    };
    /**
     * Calls getPathData on a bunch of paths and merges the resulting data.
     */
    JSONNavigatorService.prototype.mergePathsData = function (from, paths, searchAll) {
        var compilation = [];
        for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
            var potentialHeader = paths_1[_i];
            var potentialValue = this.getPathData(from, potentialHeader);
            if (potentialValue !== null) {
                if (potentialValue instanceof Array) {
                    for (var _a = 0, potentialValue_1 = potentialValue; _a < potentialValue_1.length; _a++) {
                        var subValue = potentialValue_1[_a];
                        compilation.push(subValue);
                    }
                }
                else {
                    compilation.push(potentialValue);
                }
                if (!searchAll) {
                    break;
                }
            }
        }
        // Don"t search for duplicates if there"s only one value!
        if (searchAll) {
            // Remove duplicates from array (thanks StackOverflow!)
            compilation = compilation.reduce(function (p, c, i, a) {
                if (p.indexOf(c) === -1) {
                    p.push(c);
                }
                else {
                    p.push("");
                }
                return p;
            }, []);
            // Remove all empty strings from array.
            compilation = compilation.filter(function (filterItem) {
                return filterItem !== "";
            });
        }
        if (compilation.length === 0 && !searchAll) {
            compilation.push(""); // Empty string so that errors aren"t thrown.
        }
        return compilation;
    };
    JSONNavigatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JSONNavigatorService);
    return JSONNavigatorService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data-providers/xlsx-reader.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data-providers/xlsx-reader.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: XLSXReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XLSXReader", function() { return XLSXReader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _condition_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../condition-info */ "./src/app/routes/entry-and-visualization/condition-info.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var XLSXReader = /** @class */ (function () {
    function XLSXReader(http) {
        this.http = http;
        this.tissueArray = [
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Bladder/Urinary tract", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Bone and soft tissue", 1),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Bowel", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Bowel, Esophagus/Stomach", 2),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Brain/CNS", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Breast", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Cervix", 1),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Esophagus/Stomach", 2),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Genitourinary", 1),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Gynecological", 1),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Head and neck", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Hematologic not specified", 1),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Kidney", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Liver", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Lung", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Lymphoid", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Lymphoid, Myeloid", 2),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Myeloid", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Not specified", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Ovary/Fallopian tube", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Pancreas", 2),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Pleura", 1),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Prostate", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Sarcoma", 2),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Skin", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Soft tissue", 2),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Testis", 2),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Thoracic", 1),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Thymus", 3),
            new _condition_info__WEBPACK_IMPORTED_MODULE_2__["Tissue"]("Thyroid", 2)
        ];
    }
    XLSXReader.prototype.readPatientXLSX = function (fileName) {
        return this.http.get("assets/20201015_rebootrx_covid19_covidcancer_download.xlsx", { responseType: "blob" }).map(function (data) {
            var reader = new FileReader();
            reader.readAsBinaryString(data);
            reader.onload = function (e) {
                /* create workbook */
                var binarystr = e.target.result;
                var wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](binarystr, { type: "binary" });
                /* selected the first sheet */
                var wsname = wb.SheetNames[0];
                var ws = wb.Sheets[wsname];
                /* save data */
                var data = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
                console.log(data); // Data will be logged in array format containing objects
                localStorage.setItem("covidData", JSON.stringify(data));
                // console.log(localStorage.getItem("covidData"));
                return data;
            };
            // return "HELLO"
        });
    };
    XLSXReader.prototype.readDrugsXLSX = function (fileName) {
        return this.http.get("assets/20201015_rebootrx_covid19_drugcancer_download.xlsx", { responseType: "blob" }).map(function (data) {
            var reader = new FileReader();
            reader.readAsBinaryString(data);
            reader.onload = function (e) {
                /* create workbook */
                var binarystr = e.target.result;
                var wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](binarystr, { type: "binary" });
                /* selected the first sheet */
                var wsname = wb.SheetNames[0];
                var ws = wb.Sheets[wsname];
                /* save data */
                var data = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
                console.log(data); // Data will be logged in array format containing objects
                localStorage.setItem("drugData", JSON.stringify(data));
                // console.log(localStorage.getItem("covidData"));
                return data;
            };
            // return "HELLO"
        });
    };
    // loadFile() {
    //     /* wire up file reader */
    //     this.http.get(‘assets/houses.xlsx’, { responseType: ‘blob’ }).subscribe(data => {
    //     const reader: FileReader = new FileReader();
    //     reader.readAsBinaryString(data);
    //     reader.onload = (e: any) => {
    //     /* create workbook */
    //     const binarystr: string = e.target.result;
    //     const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: ‘binary’ });
    //     /* selected the first sheet */
    //     const wsname: string = wb.SheetNames[0];
    //     const ws: XLSX.WorkSheet = wb.Sheets[wsname];
    //     /* save data */
    //     const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
    //     console.log(data); // Data will be logged in array format containing objects
    //     };
    //     },
    //     error => {
    //     console.log(error);
    //     })
    //     }
    // https://stackblitz.com/edit/angular-excel-read-table?file=src%2Fapp%2Fsheet.component.ts
    XLSXReader.prototype.readCSV = function (fileName) {
        var trialArray = [];
        return this.http.get("/assets/risk-factors/" + fileName + ".csv", { responseType: 'text' }).map(function (data) {
            var csvToRows = data.split("\n");
            for (var i = 1; i < csvToRows.length; i++) {
                var row = csvToRows[i];
                var rowSplit = [];
                var currentWord = "";
                if (row.length == 0)
                    continue;
                for (var j = 0; j < row.length; j++) {
                    if (row[j] == ',') {
                        if (rowSplit.length == 2) {
                            if (row.substring(j + 1, j + 5) == 'http' || row.substring(j + 1, j + 8) == 'doi.org') {
                                rowSplit.push(currentWord);
                                currentWord = "";
                            }
                        }
                        else {
                            rowSplit.push(currentWord);
                            currentWord = "";
                        }
                    }
                    else if (row[j] != '"') {
                        currentWord = currentWord + row[j];
                    }
                }
                var clinicalTrial = new _condition_info__WEBPACK_IMPORTED_MODULE_2__["ClinicalTrial"](rowSplit[2], rowSplit[1], rowSplit[3], rowSplit[9], rowSplit[16]);
                trialArray.push(clinicalTrial);
            }
            return trialArray;
        });
    };
    XLSXReader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], XLSXReader);
    return XLSXReader;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data.ts ***!
  \****************************************************************/
/*! exports provided: GeneReference, Pathway, Gene, VariantReference, Classification, Variant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneReference", function() { return GeneReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pathway", function() { return Pathway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gene", function() { return Gene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantReference", function() { return VariantReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Classification", function() { return Classification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variant", function() { return Variant; });
/* harmony import */ var _data_merging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-merging */ "./src/app/routes/entry-and-visualization/data-merging.ts");

/**
 * The gene reference class includes only the base properties for a given gene; those which are required for merging
 * and such.
 */
var GeneReference = /** @class */ (function () {
    function GeneReference(_hugoSymbol, _entrezID) {
        var _this = this;
        // Merges another gene into this gene (overwriting properties if the property of one is undefined).
        this.mergeable = function (other) {
            if (!_this.hugoSymbol || _this.hugoSymbol === "")
                return false;
            return _this.hugoSymbol === other.hugoSymbol;
        };
        this.merge = function (other) {
            _this.entrezID = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.entrezID, other.entrezID);
        };
        this.toString = function () {
            return _this.hugoSymbol + " " + _this.entrezID;
        };
        this.hugoSymbol = _hugoSymbol;
        this.entrezID = _entrezID;
    }
    return GeneReference;
}());

/**
 * The gene class provides a quick and easy way to obtain gene names, various IDs, and so on from a
 * variety of databases.  Eventually this class will be made FHIR compliant to speed up FHIR bundle
 * conversion.
 */
var Pathway = /** @class */ (function () {
    function Pathway(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    return Pathway;
}());

/**
 * Contains additional data than the GeneReference.
 */
var Gene = /** @class */ (function () {
    function Gene(_hugoSymbol) {
        var _this = this;
        this.pathways = [];
        /**
         * Concatenates all genomic pathways for the variant in question.
         * @returns {string}
         */
        this.pathwaysString = function () {
            if (!_this.pathways || _this.pathways.length === 0)
                return "";
            var current = "The " + _this.pathways[0].name;
            for (var i = 1; i < _this.pathways.length; i++) {
                if (i < _this.pathways.length - 1) {
                    current = current + ", the " + _this.pathways[i].name;
                }
                else {
                    current = current + ", and the " + _this.pathways[i].name;
                }
            }
            return current;
        };
        // Merges another gene into this gene (overwriting properties if the property of one is undefined).
        this.mergeable = function (other) {
            if (!_this.hugoSymbol || _this.hugoSymbol === "")
                return false;
            return _this.hugoSymbol === other.hugoSymbol;
        };
        this.merge = function (other) {
            _this.entrezID = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.entrezID, other.entrezID);
            _this.name = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.name, other.name);
            _this.description = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.description, other.description);
            _this.type = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.type, other.type);
            _this.aliases = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.aliases, other.aliases);
        };
        this.hugoSymbol = _hugoSymbol;
    }
    Gene.fromReference = function (reference) {
        var newGene = new Gene(reference.hugoSymbol);
        newGene.entrezID = reference.entrezID;
        return newGene;
    };
    return Gene;
}());

/**
 * The variant reference is better way to get only the basic info required for a given variant.
 */
var VariantReference = /** @class */ (function () {
    function VariantReference(_origin, _variantName, _hgvsID) {
        var _this = this;
        this.optionName = function () {
            return _this.origin.hugoSymbol + " " + _this.variantName + " " + _this.origin.entrezID + " " + _this.hgvsID;
        };
        /**
         * Merging methods
         */
        this.mergeable = function (other) {
            return _this.variantName === other.variantName && _this.origin.mergeable(other.origin);
        };
        // Merges another variant reference into this variant reference (overwriting properties if the property of one is undefined).
        this.merge = function (other) {
            // Determine which HGVS ID to use since we don't want to mess this one up.
            if (other.hgvsID.indexOf("chr") !== -1)
                _this.hgvsID = other.hgvsID;
            else if (_this.hgvsID.indexOf("chr") !== -1)
                other.hgvsID = _this.hgvsID;
            // Merge both genes.
            _this.origin.merge(other.origin);
            console.log("Merged " + _this.toString() + " and " + other.toString());
        };
        this.toString = function () {
            return _this.origin.toString() + " " + _this.variantName + " " + _this.hgvsID;
        };
        this.origin = _origin;
        this.variantName = _variantName;
        this.hgvsID = _hgvsID;
    }
    return VariantReference;
}());

/**
 * Gene variants vary in their pathogenicity (danger to their host), and are important to consider
 * alongside the genes which they vary from.
 */
var Classification = /** @class */ (function () {
    function Classification(_name, _source) {
        this.name = _name;
        this.sources = [_source];
    }
    return Classification;
}());

/**
 * Contains the data required to display a variant.
 */
var Variant = /** @class */ (function () {
    function Variant(_origin, _variantName, _hgvsID) {
        var _this = this;
        this.score = 0;
        this.optionName = function () {
            return _this.origin.hugoSymbol + " " + _this.variantName + " " + _this.origin.entrezID + " " + _this.hgvsID;
        };
        this.getClassification = function () {
            var maxAgreements = 0;
            var verdict = "";
            for (var _i = 0, _a = _this.classifications; _i < _a.length; _i++) {
                var classification = _a[_i];
                if (maxAgreements < classification.sources.length) {
                    maxAgreements = classification.sources.length;
                    verdict = classification.name;
                }
            }
            return verdict;
        };
        /**
         * Merging methods
         */
        this.mergeable = function (other) {
            return _this.hgvsID === other.hgvsID && _this.origin.mergeable(other.origin);
        };
        // Merges another variant reference into this variant reference (overwriting properties if the property of one is undefined).
        this.merge = function (other) {
            _this.origin.merge(other.origin);
            _this.variantName = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.variantName, other.variantName);
            _this.hgvsID = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.hgvsID, other.hgvsID);
            _this.score = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.score, other.score);
            _this.description = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.description, other.description);
            _this.somatic = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.somatic, other.somatic);
            _this.types = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.types, other.types);
            _this.drugs = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.drugs, other.drugs);
            _this.diseases = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.drugs, other.drugs);
        };
        this.getLocation = function () {
            return _this.start === _this.end ? "Nucleotide " + _this.start : "Nucleotides " + _this.start + " to " + _this.end;
        };
        this.origin = _origin;
        this.variantName = _variantName;
        this.hgvsID = _hgvsID;
    }
    Variant.fromReference = function (reference) {
        return new Variant(Gene.fromReference(reference.origin), reference.variantName, reference.hgvsID);
    };
    return Variant;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/patient.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/patient.ts ***!
  \***********************************************************/
/*! exports provided: Patient, PatientCondition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientCondition", function() { return PatientCondition; });
/*
Storage for patient information
Contains two classes:
    Patient class: stores information like name, age, where they live
    Condition class: each one is a separate condition that the patient has. The patient will have a list
        of conditions within its own object. A condition consists of a code, the actual written diagnosis,
        and the source of the information (either VA or CMS). The display is for ease of writing in the HTML.
*/
// The Patient class described at the top of the file
var Patient = /** @class */ (function () {
    function Patient(firstName, lastName, zipCode, gender, age, conditions, alreadyContainedCodes) {
        this.conditions = [];
        this.alreadyContainedCodes = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.zipCode = zipCode;
        this.gender = gender;
        this.age = age;
        this.conditions = conditions;
        this.alreadyContainedCodes = alreadyContainedCodes;
    }
    return Patient;
}());

// Condition class as described at the top of the file
var PatientCondition = /** @class */ (function () {
    function PatientCondition(code, name, source) {
        this.code = code;
        this.name = name;
        this.display = source + ": " + code + " " + name;
    }
    return PatientCondition;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-entry-and-visualization.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-entry-and-visualization.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: VariantEntryAndVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantEntryAndVisualizationComponent", function() { return VariantEntryAndVisualizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smart-initialization/smart-reference.service */ "./src/app/smart-initialization/smart-reference.service.ts");
/* harmony import */ var _variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant-selector/variant-selector.service */ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feedback-form/feedback-form-modal.component */ "./src/app/routes/feedback-form/feedback-form-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient */ "./src/app/routes/entry-and-visualization/patient.ts");
/* harmony import */ var _login_services_cms_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login-services/cms.service */ "./src/app/routes/login-services/cms.service.ts");
/* harmony import */ var _login_services_va_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login-services/va.service */ "./src/app/routes/login-services/va.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var VariantWrapper = /** @class */ (function () {
    function VariantWrapper(_index, _variant) {
        var _this = this;
        this.toggleDrawer = function () {
            _this.drawerState = _this.drawerState === "closed" ? "open" : "closed";
        };
        this.index = _index;
        this.variant = _variant;
        this.drawerState = "closed";
        this.saved = false;
    }
    return VariantWrapper;
}());
var VariantEntryAndVisualizationComponent = /** @class */ (function () {
    function VariantEntryAndVisualizationComponent(selectorService, router, modalService, cmsService, vaService, activatedRoute) {
        this.selectorService = selectorService;
        this.router = router;
        this.modalService = modalService;
        this.cmsService = cmsService;
        this.vaService = vaService;
        this.activatedRoute = activatedRoute;
        // This is what we're using to determine whether the user is worthy to rate our service (has interacted enough with the service).
        this.userInteractionPoints = 0;
        this.askForReview = true;
        this.variants = [];
        this.offerToLinkToEHRInstructions = true;
        this.patientExists = false;
        this.patientObject = null;
        this.patientAge = -1;
        this.patientConditions = [];
        this.patient = null;
        // Toggled by the user depending on whether they want to sync to the EHR their changes right away (as soon as they make them)
        this.autosync = true;
    }
    VariantEntryAndVisualizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addRow();
        this.offerToLinkToEHRInstructions = true;
        this.patientExists = false;
        // everything inside this activatedRoute statement is going towards getting VA/CMS API data
        this.activatedRoute.queryParams.subscribe(function (params) {
            var code = params['code']; // necessary for both logins
            var state = params['state']; // necessary for VA logim
            // va trying to log on for the first time
            if (localStorage.getItem("vaUser") == "attempt") {
                _this.vaService.getToken("User", code, state).subscribe(function (data) {
                    _this.vaService.accessToken = data.access_token;
                    localStorage.setItem("vaUser", "in");
                    location.reload();
                });
            }
            // cms log on for first time
            if (localStorage.getItem("cmsUser") == "attempt") {
                _this.cmsService.getToken("User", code).subscribe(function (data) {
                    _this.cmsService.accessToken = data.access_token;
                    localStorage.setItem("cmsUser", "in");
                    location.reload();
                });
            }
            // can occur after the auto-refresh, or if the user refreshes/navigates to another page
            if (localStorage.getItem("vaUser") == 'in' && localStorage.getItem("cmsUser") == null) {
                var currentUser = _this.vaService.getLocalStorageToken();
                _this.vaService.accessToken = currentUser['access_token'];
                _this.getVAInfo(currentUser['patient']);
            }
            if (localStorage.getItem("cmsUser") == 'in' && localStorage.getItem("vaUser") == null) {
                var currentUser = _this.cmsService.getLocalStorageToken();
                console.log(currentUser);
                _this.cmsService.accessToken = currentUser['access_token'];
                _this.getCMSInfo(currentUser['patient']);
            }
            // if we have the access token for both VA and CMS, then we run a different function to combine their informations
            if (localStorage.getItem("vaUser") == 'in' && localStorage.getItem("cmsUser") == "in") {
                var vaUser = _this.vaService.getLocalStorageToken();
                var cmsUser = _this.cmsService.getLocalStorageToken();
                _this.vaService.accessToken = vaUser['access_token'];
                _this.cmsService.accessToken = cmsUser['access_token'];
                _this.getBothInfo(vaUser['patient'], cmsUser['patient']);
            }
        }, function (error) {
        });
        // As soon as the smart client is loaded from the SMART JS library, this creates the patient info header and populates the patient variants.
        _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__["SMARTClient"].subscribe(function (smartClient) {
            if (smartClient === null) {
                return;
            }
            _this.offerToLinkToEHRInstructions = false;
            // Get all patient information.
            smartClient.patient.read().then(function (p) {
                console.log("Patient read is ", p);
                _this.patientObject = p;
                if (p.birthDate && p.active) {
                    var birthDateValues = p.birthDate.split("-");
                    var timeDiff = Math.abs(Date.now() - new Date(parseInt(birthDateValues[0]), parseInt(birthDateValues[1]), parseInt(birthDateValues[2])).getTime());
                    // Used Math.floor instead of Math.ceil so 26 years and 140 days would be considered as 26, not 27.
                    _this.patientAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                }
                _this.patientExists = true;
            });
            // Get all genomic variants (LOINC 69548-6) attached to this patient carrying HGVS component (LOINC 81290-9)
            smartClient.patient.api.search({ type: "Observation", query: { "code": "69548-6" }, count: 10 })
                .then(function (results) {
                console.log("Successfully got variants!", results);
                if (!results.data.entry) {
                    return;
                }
                if (results.data.entry.length > 0) {
                    _this.removeRow(0); // Start at the first index if we find other variants.
                }
                // For every variant in the query, loop through components and codings to find HGVS = "81290-9"
                var resultIndex = 0;
                var _loop_1 = function (result) {
                    var hgvsID = "0";
                    for (var _i = 0, _a = result.resource.component; _i < _a.length; _i++) {
                        var myComponent = _a[_i];
                        for (var _b = 0, _c = myComponent.code.coding; _b < _c.length; _b++) {
                            var myCoding = _c[_b];
                            if (myCoding.code === "81290-9") {
                                console.log("found HGVS");
                                var index = myComponent.code.coding.indexOf(myCoding);
                                hgvsID = myComponent.valueCodeableConcept.coding[index].code;
                            }
                        }
                    }
                    console.log("Will now add " + hgvsID);
                    _this.selectorService.search(hgvsID).subscribe(function (variants) {
                        if (variants.length === 0) {
                            console.log("NOT GOOD: Couldn't find any search results for " + result.resource.code.text);
                            return;
                        }
                        // Add the first search result to the list (the one with the correct HGVS ID).
                        console.log("Adding", variants[0]);
                        _this.selectorService.getByReference(variants[0])
                            .subscribe(function (variant) {
                            var newWrapper = new VariantWrapper(resultIndex, variant);
                            if (_this.variants.length === resultIndex) {
                                _this.variants.push(newWrapper);
                            }
                            else {
                                _this.variants[resultIndex] = newWrapper;
                            }
                            resultIndex++;
                        });
                    });
                };
                for (var _i = 0, _a = results.data.entry; _i < _a.length; _i++) {
                    var result = _a[_i];
                    _loop_1(result);
                }
            })
                .fail(function (err) {
                console.log("Couldn't query genomic variants error!", err);
            });
            smartClient.patient.api.search({ type: "Condition" })
                .then(function (results) {
                console.log("Got patient conditions:", results);
                if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(results.data.entry) && results.data.entry.length > 0) {
                    for (var _i = 0, _a = results.data.entry; _i < _a.length; _i++) {
                        var entry = _a[_i];
                        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(entry.resource)) {
                            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(entry.resource.code)) {
                                if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(entry.resource.code.text)) {
                                    _this.patientConditions.push(entry.resource.code.text);
                                    console.log("Added " + entry.resource.code.text);
                                }
                            }
                        }
                    }
                }
            })
                .fail(function (err) {
                console.log("The query for patient conditions failed!", err);
            });
        });
    };
    // create a patient using information gotten from files, and put that into the class patient object
    VariantEntryAndVisualizationComponent.prototype.createPatient = function (first, last, zip, gender, age, conditionsArray, codesInArray) {
        var patient = new _patient__WEBPACK_IMPORTED_MODULE_8__["Patient"](first, last, zip, gender, age, conditionsArray, codesInArray);
        this.patient = patient;
    };
    // age calculator given birthdate and current date
    VariantEntryAndVisualizationComponent.prototype.calculateAge = function (birthDateString) {
        var birthDate = birthDateString.split("-");
        var timeDiff = Math.abs(Date.now() - new Date(parseInt(birthDate[0]), parseInt(birthDate[1]), parseInt(birthDate[2])).getTime());
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        return age;
    };
    // runs if just CMS is logged in
    VariantEntryAndVisualizationComponent.prototype.getCMSInfo = function (patientId) {
        var _this = this;
        this.offerToLinkToEHRInstructions = false;
        this.patientExists = true;
        // patient info file reading
        this.cmsService.patientInfo(patientId).subscribe(function (patient) {
            var parsing = JSON.parse(patient);
            var justPatient = JSON.stringify(parsing.entry);
            var bigResource = JSON.stringify(JSON.parse(justPatient)[0]);
            var justResource = JSON.stringify(JSON.parse(bigResource).resource);
            var bigName = JSON.stringify(JSON.parse(justResource).name);
            var given = JSON.parse(bigName)[0].given;
            var last = JSON.parse(bigName)[0].family;
            var first = given[0];
            var fullAddress = JSON.stringify(JSON.parse(justResource).address);
            var justAddress = JSON.stringify(JSON.parse(fullAddress)[0]);
            var zipCode = JSON.parse(justAddress).postalCode;
            var gender = JSON.parse(justResource).gender;
            var birthDate = JSON.parse(justResource).birthDate;
            var age = _this.calculateAge(birthDate);
            // EOB info file reading
            _this.cmsService.eobInfo(patientId).subscribe(function (eob) {
                var entry = JSON.parse(eob).entry;
                var entryString = JSON.stringify(entry);
                var conditionsArray = [];
                var codesInArray = [];
                for (var i = 0; i < entry.length; i++) { // looping through all entries to find 
                    var entryHere = JSON.stringify(JSON.parse(entryString)[i]);
                    var resource = JSON.stringify(JSON.parse(entryHere).resource);
                    var allDiagnoses = JSON.parse(resource).diagnosis;
                    for (var j = 0; j < allDiagnoses.length; j++) {
                        var diagnosisHere = allDiagnoses[j];
                        var diagnosisHereString = JSON.stringify(diagnosisHere);
                        var diagnosisCodeableConcept = JSON.stringify(JSON.parse(diagnosisHereString).diagnosisCodeableConcept);
                        var coding = JSON.parse(diagnosisCodeableConcept).coding;
                        var indexHere = JSON.stringify(coding[0]);
                        var code = JSON.parse(indexHere).code;
                        var display = JSON.parse(indexHere).display;
                        if (code != "9999999") {
                            if (!codesInArray.includes(code)) {
                                var condition = new _patient__WEBPACK_IMPORTED_MODULE_8__["PatientCondition"](code, display, "CMS");
                                conditionsArray.push(condition);
                                codesInArray.push(code);
                            }
                        }
                    }
                }
                // create patient based on information collected in the files
                _this.createPatient(first, last, zipCode, gender, age, conditionsArray, codesInArray);
            });
        });
    };
    // same as the getCMSInfo function, but instead this is for VA.
    VariantEntryAndVisualizationComponent.prototype.getVAInfo = function (patientId) {
        var _this = this;
        this.vaService.patientInfo(patientId).subscribe(function (patient) {
            _this.offerToLinkToEHRInstructions = false;
            _this.patientExists = true;
            var stringified = JSON.stringify(patient);
            var name = JSON.stringify((JSON.parse(stringified).name)[0]);
            var lastName = (JSON.parse(name).family)[0];
            var firstName = (JSON.parse(name).given)[0];
            var birthDate = JSON.parse(stringified).birthDate;
            var age = _this.calculateAge(birthDate);
            console.log(age);
            localStorage.setItem("age", age.toString());
            var address = JSON.stringify((JSON.parse(stringified).address)[0]);
            var zipCode = JSON.parse(address).postalCode;
            var gender = JSON.parse(stringified).gender;
            _this.vaService.conditionInfo(patientId).subscribe(function (patient) {
                _this.offerToLinkToEHRInstructions = false;
                _this.patientExists = true;
                var stringified = JSON.stringify(patient);
                var entry = JSON.parse(stringified).entry;
                var conditionsArray = [];
                var codesInArray = [];
                for (var i = 0; i < entry.length; i++) {
                    var thisIndex = JSON.stringify(entry[i]);
                    var resource = JSON.stringify(JSON.parse(thisIndex).resource);
                    var clinicalStatus = JSON.parse(resource).clinicalStatus; // has a tracker of active vs resolved
                    var codeOutside = JSON.stringify(JSON.parse(resource).code);
                    var coding = JSON.stringify((JSON.parse(codeOutside).coding)[0]);
                    var code = JSON.parse(coding).code;
                    var display = JSON.parse(coding).display;
                    if (!codesInArray.includes(code) && clinicalStatus == "active") { // not already listed, and still an ongoing issue
                        var condition = new _patient__WEBPACK_IMPORTED_MODULE_8__["PatientCondition"](code, display, "VA");
                        conditionsArray.push(condition);
                        codesInArray.push(code);
                    }
                }
                _this.createPatient(firstName, lastName, zipCode, gender, age, conditionsArray, codesInArray);
            });
        });
    };
    // if both are logged in, here are the steps that we follow:
    //    - get patient demographics from VA
    //    - get patient conditions from VA
    //    - get patient conditions from CMS (we only get demographics from VA)
    //    - put it all into a Patient object and sent it away
    VariantEntryAndVisualizationComponent.prototype.getBothInfo = function (vaPatientId, cmsPatientId) {
        var _this = this;
        // VA demographics
        this.vaService.patientInfo(vaPatientId).subscribe(function (patient) {
            _this.offerToLinkToEHRInstructions = false;
            _this.patientExists = true;
            var stringified = JSON.stringify(patient);
            var name = JSON.stringify((JSON.parse(stringified).name)[0]);
            var lastName = (JSON.parse(name).family)[0];
            var firstName = (JSON.parse(name).given)[0];
            var birthDate = JSON.parse(stringified).birthDate;
            var age = _this.calculateAge(birthDate);
            var address = JSON.stringify((JSON.parse(stringified).address)[0]);
            var zipCode = JSON.parse(address).postalCode;
            var gender = JSON.parse(stringified).gender;
            // VA conditions
            _this.vaService.conditionInfo(vaPatientId).subscribe(function (patient) {
                _this.offerToLinkToEHRInstructions = false;
                _this.patientExists = true;
                var stringified = JSON.stringify(patient);
                var entry = JSON.parse(stringified).entry;
                var conditionsArray = [];
                var codesInArray = [];
                for (var i = 0; i < entry.length; i++) {
                    var thisIndex = JSON.stringify(entry[i]);
                    var resource = JSON.stringify(JSON.parse(thisIndex).resource);
                    var clinicalStatus = JSON.parse(resource).clinicalStatus; // has a tracker of active vs resolved
                    var codeOutside = JSON.stringify(JSON.parse(resource).code);
                    var coding = JSON.stringify((JSON.parse(codeOutside).coding)[0]);
                    var code = JSON.parse(coding).code;
                    var display = JSON.parse(coding).display;
                    if (!codesInArray.includes(code) && clinicalStatus == "active") { // not already listed, and still an ongoing issue
                        var condition = new _patient__WEBPACK_IMPORTED_MODULE_8__["PatientCondition"](code, display, "VA");
                        conditionsArray.push(condition);
                        codesInArray.push(code);
                    }
                }
                // CMS conditions
                _this.cmsService.eobInfo(cmsPatientId).subscribe(function (eob) {
                    var entry = JSON.parse(eob).entry;
                    var entryString = JSON.stringify(entry);
                    for (var i = 0; i < entry.length; i++) { // looping through all entries to find 
                        var entryHere = JSON.stringify(JSON.parse(entryString)[i]);
                        var resource = JSON.stringify(JSON.parse(entryHere).resource);
                        var allDiagnoses = JSON.parse(resource).diagnosis;
                        for (var j = 0; j < allDiagnoses.length; j++) {
                            var diagnosisHere = allDiagnoses[j];
                            var diagnosisHereString = JSON.stringify(diagnosisHere);
                            var diagnosisCodeableConcept = JSON.stringify(JSON.parse(diagnosisHereString).diagnosisCodeableConcept);
                            var coding = JSON.parse(diagnosisCodeableConcept).coding;
                            var indexHere = JSON.stringify(coding[0]);
                            var code = JSON.parse(indexHere).code;
                            var display = JSON.parse(indexHere).display;
                            if (code != "9999999") {
                                if (!codesInArray.includes(code)) {
                                    var condition = new _patient__WEBPACK_IMPORTED_MODULE_8__["PatientCondition"](code, display, "CMS");
                                    conditionsArray.push(condition);
                                    codesInArray.push(code);
                                }
                            }
                        }
                    }
                });
                _this.createPatient(firstName, lastName, zipCode, gender, age, conditionsArray, codesInArray);
            });
        });
    };
    // Row management.
    VariantEntryAndVisualizationComponent.prototype.addRow = function () {
        this.variants.push(new VariantWrapper(this.variants.length, null));
    };
    VariantEntryAndVisualizationComponent.prototype.addRowMaybe = function (indexInQuestion) {
        if (this.variants.length === indexInQuestion + 1) {
            this.addRow();
        }
        this.userInteractionPoints++;
    };
    VariantEntryAndVisualizationComponent.prototype.removeRow = function (index) {
        var variantToRemove = this.variants[index].variant;
        this.variants.splice(index, 1);
        for (var i = 0; i < this.variants.length; i++) {
            this.variants[i].index = i;
        }
        this.removeEHRVariant(variantToRemove);
        this.userInteractionPoints++;
    };
    VariantEntryAndVisualizationComponent.prototype.routeToInstructions = function () {
        this.router.navigate(["ehr-login"]);
    };
    VariantEntryAndVisualizationComponent.prototype.onToggleAutosync = function (newVal) {
        this.autosync = newVal;
        if (this.autosync) {
            for (var _i = 0, _a = this.variants; _i < _a.length; _i++) {
                var variant = _a[_i];
                if (!variant.saved) {
                    this.saveEHRVariant(variant);
                }
            }
        }
    };
    VariantEntryAndVisualizationComponent.prototype.openFeedbackForm = function () {
        this.modalService.open(_feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackFormModalComponent"], { size: "lg" });
        this.askForReview = false;
    };
    // Remove and save EHR variants.
    VariantEntryAndVisualizationComponent.prototype.saveEHRVariant = function (variant) {
        if (!this.autosync) {
            return;
        }
        console.log("saving variant");
        _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__["SMARTClient"].subscribe(function (smartClient) {
            if (smartClient === null) {
                return;
            }
            smartClient.patient.read().then(function (p) {
                var dataToTransmit = {
                    "resource": {
                        "resourceType": "Observation",
                        "id": "SMART-Observation-" + p.identifier[0].value + "-variation-" + variant.variant.hgvsID.replace(/[.,\/#!$%\^&\*;:{}<>=\-_`~()]/g, ""),
                        "meta": {
                            "versionId": "1" // ,
                            // "lastUpdated": Date.now().toString()
                        },
                        "text": {
                            "status": "generated",
                            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Variation at " + variant.variant.getLocation() + "</div>"
                        },
                        "status": "final",
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/observation-category",
                                        "code": "laboratory",
                                        "display": "Laboratory"
                                    }
                                ],
                                "text": "Genomic Variant"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "69548-6",
                                    "display": "Genetic variant assessment"
                                }
                            ],
                            "text": "Genetic variant assessment"
                        },
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "LA9633-4",
                                    "display": "Present"
                                }
                            ]
                        },
                        "component": [
                            {
                                "code": {
                                    "coding": [
                                        {
                                            "system": "http://loinc.org",
                                            "code": "81290-9",
                                            "display": "Genomic DNA change (gHGVS)"
                                        }
                                    ]
                                },
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://varnomen.hgvs.org",
                                            "code": variant.variant.hgvsID,
                                            "display": variant.variant.hgvsID
                                        }
                                    ],
                                    "text": variant.variant.hgvsID
                                }
                            },
                            {
                                "code": {
                                    "coding": [
                                        {
                                            "system": "http://loinc.org",
                                            "code": "48018-6",
                                            "display": "Gene studied ID (HGNC)"
                                        }
                                    ]
                                },
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://hl7.org/fhir/uv/genomics-reporting/ValueSet/hgnc",
                                            "code": variant.variant.origin.hugoSymbol,
                                            "display": variant.variant.origin.hugoSymbol
                                        }
                                    ],
                                    "text": variant.variant.origin.hugoSymbol
                                }
                            }
                        ],
                        "subject": {
                            "reference": "Patient/" + p.id
                        },
                    }
                };
                console.log("Adding variant with", dataToTransmit);
                smartClient.api.update(dataToTransmit)
                    .then(function (result) {
                    console.log("Added EHR variant successfully!", result);
                    variant.saved = true;
                })
                    .fail(function (err) {
                    console.log("Failed to add EHR variant", err);
                });
            });
        });
    };
    VariantEntryAndVisualizationComponent.prototype.removeEHRVariant = function (variant) {
        if (!this.autosync || variant === null)
            return;
        _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__["SMARTClient"].subscribe(function (smartClient) {
            // We can't do anything without a smartClient!
            if (smartClient === null)
                return;
            smartClient.patient.read().then(function (p) {
                var dataToTransmit = {
                    "resource": {
                        "resourceType": "Observation",
                        "id": "SMART-Observation-" + p.identifier[0].value + "-variation-" + variant.hgvsID.replace(/[.,\/#!$%\^&\*;:{}<>=\-_`~()]/g, ""),
                        "meta": {
                            "versionId": "1" // ,
                            // "lastUpdated": Date.now().toString()
                        },
                        "text": {
                            "status": "generated",
                            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Variation at " + variant.getLocation() + "</div>"
                        },
                        "status": "final",
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/observation-category",
                                        "code": "laboratory",
                                        "display": "Laboratory"
                                    }
                                ],
                                "text": "Genomic Variant"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "69548-6",
                                    "display": "Genetic variant assessment"
                                }
                            ],
                            "text": "Genetic variant assessment"
                        },
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "LA9633-4",
                                    "display": "Present"
                                }
                            ]
                        },
                        "component": [
                            {
                                "code": {
                                    "coding": [
                                        {
                                            "system": "http://loinc.org",
                                            "code": "81290-9",
                                            "display": "Genomic DNA change (gHGVS)"
                                        }
                                    ]
                                },
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://varnomen.hgvs.org",
                                            "code": variant.hgvsID,
                                            "display": variant.hgvsID
                                        }
                                    ],
                                    "text": variant.hgvsID
                                }
                            },
                            {
                                "code": {
                                    "coding": [
                                        {
                                            "system": "http://loinc.org",
                                            "code": "48018-6",
                                            "display": "Gene studied ID (HGNC)"
                                        }
                                    ]
                                },
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://hl7.org/fhir/uv/genomics-reporting/ValueSet/hgnc",
                                            "code": variant.origin.hugoSymbol,
                                            "display": variant.origin.hugoSymbol
                                        }
                                    ],
                                    "text": variant.origin.hugoSymbol
                                }
                            }
                        ],
                        "subject": {
                            "reference": "Patient/" + p.id
                        },
                    }
                };
                console.log("Removing variant with", dataToTransmit);
                smartClient.api.delete(dataToTransmit)
                    .then(function (result) {
                    console.log("Removed EHR variant successfully!", result);
                })
                    .fail(function (err) {
                    console.log("Failed to remove EHR variant", err);
                });
            });
        });
    };
    VariantEntryAndVisualizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "variant-entry-and-visualization",
            template: "\n    <div id=\"patientLinkState\">\n      <!-- If an EHR link is NOT detected -->\n      <div id=\"suggestEHRLink\" *ngIf=\"offerToLinkToEHRInstructions\">\n        <div id=\"suggestions\">\n          <img src=\"/assets/entry-and-visualization/info-icon.png\">\n          <p class=\"thick\" style=\"color:#fff\">SMART COVID Navigator is not connected to an EHR. <a style=\"color:#891924\" href=\"javascript:void(0)\" (click)=\"routeToInstructions()\">Learn how to connect.</a></p>\n        </div>\n        <button class=\"btn btn-danger\" (click)=\"offerToLinkToEHRInstructions = false\"><div style=\"margin-top:-3px; margin-right:-2px\">&times;</div></button>\n      </div>\n\n      <!-- If an EHR link is detected -->\n      <div id=\"patientInfo\" *ngIf=\"patientExists\" [style.background-color]=\"patient.gender === 'male' ? '#27384f' : '#ff45f7'\">\n        <img [src]=\"patient.gender === 'male' ? '/assets/entry-and-visualization/male-icon.png' : '/assets/entry-and-visualization/female-icon.png'\">\n\n        <!-- Patient Details -->\n        <p style=\"color: white\">\n        <b>Name: </b> {{patient.firstName}} {{patient.lastName}} |\n          <b>Zip Code:</b> {{patient.zipCode}} | <b>Age:</b> {{patient.age}} | \n          <b>Condition:</b> \n          <select style=\"font-size: 15px;\">\n            <option *ngFor=\"let condition of patient.conditions\">{{condition.display}}</option>\n          </select>\n        </p>\n\n        <div id=\"autosyncToggle\">\n          <div>\n            <ui-switch [ngModel]=\"autosync\" (ngModelChange)=\"onToggleAutosync($event)\"></ui-switch>\n            <p class=\"thick\" style=\"color: white\">Auto-Sync</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--\n    <div id=\"variantVisualizations\">\n      <div class=\"variantWrapper\" *ngFor=\"let variant of variants; let i = index\">\n        <div class=\"variantSelector\">\n          <div [style.width]=\"i === variants.length - 1 ? '100%' : 'calc(100% - 38px)'\">\n            <variant-selector [ngModel]=\"variant.variant\"\n                              (ngModelChange)=\"variant.variant = $event; addRowMaybe(i); saveEHRVariant(variant);\"></variant-selector>\n          </div>\n          <button style=\"font-size:200%\" class=\"removeRowButton btn btn-danger\" (click)=\"removeRow(i)\" *ngIf=\"i !== variants.length - 1\"><div style=\"margin-top:-8px; margin-right:-2px;\">&times;</div>\n          </button>\n        </div>\n        <div>\n          <div class=\"visualizationContent\" [@drawerAnimation]=\"variant.drawerState\">\n            <variant-visualization [(ngModel)]=\"variant.variant\"></variant-visualization>\n          </div>\n          <div *ngIf=\"variant.variant !== undefined && variant.variant !== null\" class=\"informationToggle\"\n               (click)=\"variant.toggleDrawer()\">\n            <img src=\"/assets/entry-and-visualization/dropdown.svg\">\n          </div>\n        </div>\n      </div>\n    </div>\n    -->\n    \n    <!-- <div id=\"variantVisualizations\"> -->\n      <condition-visualization></condition-visualization>\n    <!-- </div> -->\n    \n    <!-- Review form question -->\n    <div id=\"askForReviewDiv\" *ngIf=\"userInteractionPoints >= 3 && askForReview\">\n      <a href=\"javascript:void(0)\" (click)=\"openFeedbackForm()\">\n        <ngb-alert [type]=\"'primary'\" (close)=\"askForReview = false\">Please review our service!</ngb-alert>\n      </a>\n    </div>\n  ",
            styles: ["\n    p {\n      margin: 0;\n    }\n\n    #patientLinkState {\n      margin-left: 6%;\n      margin-right: 6%;\n    }\n\n    #suggestEHRLink {\n      height: 80px;\n      width: 100%;\n\n      background-color: #dc3545;\n      overflow: hidden;\n    }\n\n    #suggestEHRLink > * {\n      float: left;\n    }\n\n    #suggestEHRLink > #suggestions {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: calc(100% - 60px);\n      height: 100%;\n    }\n\n    #suggestEHRLink img {\n      width: 60px;\n      height: 60px;\n      margin: 1% 10px;\n    }\n\n    #suggestEHRLink p {\n      width: calc(96% - 80px);\n      margin: 1%;\n      font-size: 20px;\n      color: black;\n    }\n\n    #suggestEHRLink button {\n      width: 30px;\n      height: 30px;\n      color: white;\n      font-size: 130%;\n      border-radius: 0px 0px 0px 10px;\n      padding: 0;\n      float: right;\n    }\n\n    #patientLinkState > div {\n      border-bottom-left-radius: 30px;\n      border-bottom-right-radius: 30px;\n    }\n\n    #patientInfo {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      height: 80px;\n      width: 100%;\n\n      overflow: hidden;\n\n      text-align: center;\n    }\n\n    #patientInfo img {\n      width: 60px;\n      height: 60px;\n      margin: 10px;\n    }\n\n    #patientInfo p {\n      width: calc(96% - 280px);\n      margin: 1%;\n      font-size: 20px;\n      color: black;\n    }\n    \n    #autosyncToggle {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      width: 200px;\n      height: 100%;\n    }\n\n    #autosyncToggle > div {\n      width: 100%;\n    }\n\n    #autosyncToggle > div > p {\n      width: 100%;\n    }\n\n    #variantVisualizations {\n      padding: 15px;\n      margin-top: 2%;\n      margin-left: 4%;\n      margin-right: 4%;\n      background-color: white;\n    }\n\n    .variantWrapper {\n      margin-bottom: 5px;\n    }\n\n    .variantSelector {\n      height: 38px;\n    }\n\n    .variantSelector > * {\n      float: left;\n      height: 100%;\n    }\n\n    .removeRowButton {\n      width: 38px;\n      font-size: 20px;\n      color: white;\n      padding: 0;\n    }\n\n    .informationToggle {\n      width: 100%;\n      background-color: #e2e2e2;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      text-align: center;\n      height: 30px;\n    }\n\n    .visualizationContent {\n      overflow: scroll;\n    }\n\n    .informationToggle:hover {\n      background-color: #b2b2b2;\n    }\n\n    .informationToggle img {\n      height: 10px;\n      width: 10px;\n      margin: 10px;\n    }\n\n    #askForReviewDiv {\n      display: block;\n      position: fixed;\n      bottom: 0;\n      left: 0;\n    }\n  "],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("drawerAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: "0"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: "700px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("closed => open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("400ms ease-in-out")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("open => closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("400ms ease-in-out"))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_2__["VariantSelectorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _login_services_cms_service__WEBPACK_IMPORTED_MODULE_9__["CMSService"],
            _login_services_va_service__WEBPACK_IMPORTED_MODULE_10__["VAService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], VariantEntryAndVisualizationComponent);
    return VariantEntryAndVisualizationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-selector/variant-selector.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SELECTOR_CONTROL_VALUE_ACCESSOR, VariantSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTOR_CONTROL_VALUE_ACCESSOR", function() { return SELECTOR_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantSelectorComponent", function() { return VariantSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/* harmony import */ var _variant_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant-selector.service */ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Data entry is an essential part of the final application that will be built, and it must be built in
 * a way which permits dynamic addition and removal of form elements.  Since Angular makes modularity
 * insanely easy and you can build custom input selectors, this shouldn"t require too much code.
 */




var SELECTOR_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return VariantSelectorComponent; }),
    multi: true
};
var VariantSelectorComponent = /** @class */ (function () {
    function VariantSelectorComponent(selectorService) {
        this.selectorService = selectorService;
        // callback placeholders provided by Control Value Accessor
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(VariantSelectorComponent.prototype, "currentlySelected", {
        get: function () {
            return this._currentlySelected;
        },
        set: function (v) {
            if (v !== this.currentlySelected) {
                this._currentlySelected = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // needed for ControlValueAccessor interface
    VariantSelectorComponent.prototype.writeValue = function (value) {
        if (value !== this.currentlySelected) {
            this.currentlySelected = value;
            if (value && value !== null) {
                this.currentReference = new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["VariantReference"](new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["GeneReference"](this.currentlySelected.origin.hugoSymbol, this.currentlySelected.origin.entrezID), this.currentlySelected.variantName, this.currentlySelected.hgvsID);
            }
        }
    };
    VariantSelectorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    VariantSelectorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // Update the EHR item (if possible) and change the variant.
    VariantSelectorComponent.prototype.onNewReferenceSelection = function (reference) {
        var _this = this;
        if (!reference) {
            return;
        }
        console.log("Would get by reference ", reference);
        this.currentReference = reference;
        this.selectorService.getByReference(reference)
            .subscribe(function (resultingVariant) { return _this.currentlySelected = resultingVariant; });
    };
    VariantSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "variant-selector",
            template: "\n    <!-- Gene Variation List -->\n    <div>\n      <filterable-search [searchService]=\"selectorService\" [placeholderString]=\"'Add New Variant'\" [ngModel]=\"currentReference\" (ngModelChange)=\"onNewReferenceSelection($event)\"></filterable-search>\n    </div>\n  ",
            styles: ["\n    div {\n      height: 100%;\n    }\n  "],
            providers: [SELECTOR_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_variant_selector_service__WEBPACK_IMPORTED_MODULE_2__["VariantSelectorService"]])
    ], VariantSelectorComponent);
    return VariantSelectorComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: VariantSelectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantSelectorService", function() { return VariantSelectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data_providers_myvariantinfo_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genomic-data-providers/myvariantinfo-search.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service.ts");
/* harmony import */ var _genomic_data_providers_mygeneinfo_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../genomic-data-providers/mygeneinfo-search.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
/* harmony import */ var _genomic_data_providers_csv_reader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../genomic-data-providers/csv-reader.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/csv-reader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Databases.


// RxJS stuff.




var VariantSelectorService = /** @class */ (function () {
    function VariantSelectorService(myvariantinfoSearchService, mygeneinfoSearchService, csvReader) {
        var _this = this;
        this.myvariantinfoSearchService = myvariantinfoSearchService;
        this.mygeneinfoSearchService = mygeneinfoSearchService;
        this.csvReader = csvReader;
        this.variantDatabases = [this.myvariantinfoSearchService];
        this.geneDatabases = [this.mygeneinfoSearchService];
        // Merge all variant streams into a single one.
        this.search = function (term) {
            console.log("Search " + term);
            if (term === "") {
                return null;
            }
            // map them into a array of observables and forkJoin
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].forkJoin(_this.variantDatabases
                .map(function (searchService) { return searchService.searchByString(term); })).map(function (variantArrays) {
                var mergedVariants = [];
                var addVariant = function (variant) {
                    for (var arrayIndex = 0; arrayIndex < mergedVariants.length; arrayIndex++) {
                        // Make sure that we are sorting alphabetically.
                        if (mergedVariants[arrayIndex].mergeable(variant)) {
                            mergedVariants[arrayIndex].merge(variant);
                            console.log("Merged " + variant.optionName());
                            return;
                        }
                        else if (mergedVariants[arrayIndex].optionName() > variant.optionName()) {
                            mergedVariants.splice(arrayIndex, 0, variant);
                            return;
                        }
                    }
                    // It must"ve not been pushed if we reach here.
                    mergedVariants.push(variant);
                };
                // Variant merging/placing loop.
                for (var _i = 0, variantArrays_1 = variantArrays; _i < variantArrays_1.length; _i++) {
                    var variantArray = variantArrays_1[_i];
                    for (var _a = 0, variantArray_1 = variantArray; _a < variantArray_1.length; _a++) {
                        var variant = variantArray_1[_a];
                        addVariant(variant);
                    }
                }
                console.log("Got in response to " + term, mergedVariants);
                return mergedVariants;
            });
        };
        // Merge all variant streams into a single one.
        this.getByReference = function (reference) {
            // map them into a array of observables and forkJoin
            console.log("Asked to get variant from ", reference);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].forkJoin(_this.variantDatabases
                .map(function (searchService) { return searchService.getByReference(reference); })).map(function (variantArray) {
                var mergedVariant = variantArray[0];
                for (var i = 1; i < variantArray.length; i++) {
                    if (mergedVariant.mergeable(variantArray[i])) {
                        mergedVariant.merge(variantArray[i]);
                    }
                }
                console.log("Got ", mergedVariant);
                return mergedVariant;
            }).mergeMap(function (variant) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].forkJoin(_this.geneDatabases
                    .map(function (geneService) { return geneService.updateVariantOrigin(variant); })).map(function (updatedVariants) {
                    var mergedVariant = updatedVariants[0];
                    for (var i = 1; i < updatedVariants.length; i++) {
                        if (mergedVariant.mergeable(updatedVariants[i])) {
                            mergedVariant.merge(updatedVariants[i]);
                        }
                    }
                    console.log("Updated origin to ", mergedVariant);
                    return mergedVariant;
                });
            });
        };
    }
    VariantSelectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_genomic_data_providers_myvariantinfo_search_service__WEBPACK_IMPORTED_MODULE_1__["MyVariantInfoSearchService"], _genomic_data_providers_mygeneinfo_search_service__WEBPACK_IMPORTED_MODULE_2__["MyGeneInfoSearchService"],
            _genomic_data_providers_csv_reader_service__WEBPACK_IMPORTED_MODULE_6__["CSVReader"]])
    ], VariantSelectorService);
    return VariantSelectorService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ASSOCS_CONTROL_VALUE_ACCESSOR, AssocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSOCS_CONTROL_VALUE_ACCESSOR", function() { return ASSOCS_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocsComponent", function() { return AssocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assocs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assocs.service */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _drug_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drug-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/drug-modal.component.ts");
/* harmony import */ var _disease_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disease-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/disease-modal.component.ts");
/**
 * The best way to learn is through the experiences of others, and accessing the databse of past association
 * often is the best way to glean such information.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ASSOCS_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AssocsComponent; }),
    multi: true
};
var AssocsComponent = /** @class */ (function () {
    function AssocsComponent(assocsService, modalService) {
        var _this = this;
        this.assocsService = assocsService;
        this.modalService = modalService;
        // association references.
        this.assoc = null;
        this.drugMaxCount = 0;
        this.diseaseMaxCount = 0;
        this.drugColors = ["#ffffff", "#ebfaeb", "#c2f0c2", "#99e699", "#85e085", "#5cd65c", "#33cc33", "#2eb82e", "#29a329"];
        this.diseaseColors = ["#ffffff", "#ffe6e6", "#ffcccc", "#ffb3b3", "#ff9999", "#ff6666", "#ff4d4d", "#ff3333", "#e60000"];
        // The internal data model (for ngModel)
        this._currentlySelected = null;
        // Placeholders for the callbacks which are later provided by the Control Value Accessor
        this.onTouchedCallback = function () {
        };
        this.onChangeCallback = function () {
            if (_this.assoc !== null && _this.assoc.assocDrugs.length > 0) {
                for (var _i = 0, _a = _this.assoc.assocDrugs; _i < _a.length; _i++) {
                    var assocDrug = _a[_i];
                    if (assocDrug.assocAmount > _this.drugMaxCount) {
                        _this.drugMaxCount = assocDrug.assocAmount;
                    }
                }
            }
            if (_this.assoc !== null && _this.assoc.assocDiseases.length > 0) {
                for (var _b = 0, _c = _this.assoc.assocDiseases; _b < _c.length; _b++) {
                    var assocDisease = _c[_b];
                    if (assocDisease.assocAmount > _this.diseaseMaxCount) {
                        _this.diseaseMaxCount = assocDisease.assocAmount;
                    }
                }
            }
        };
    }
    Object.defineProperty(AssocsComponent.prototype, "currentlySelected", {
        get: function () {
            return this._currentlySelected;
        },
        set: function (v) {
            var _this = this;
            if (v !== this.currentlySelected) {
                this._currentlySelected = v;
                this.assocsService.searchAssocs(v).subscribe(function (assoc) { return _this.assoc = assoc; });
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    AssocsComponent.prototype.writeValue = function (value) {
        if (value !== this.currentlySelected) {
            this.currentlySelected = value;
        }
    };
    AssocsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    AssocsComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    AssocsComponent.prototype.getUrls = function (assocReference) {
        return assocReference.publicationUrls;
    };
    AssocsComponent.prototype.openUrl = function (url) {
        window.open(url, "_blank");
    };
    AssocsComponent.prototype.viewDrugDetails = function (assocDrug) {
        var modalRef = this.modalService.open(_drug_modal_component__WEBPACK_IMPORTED_MODULE_4__["DrugModalComponent"], { size: "lg" });
        modalRef.componentInstance.assocDrug = assocDrug;
    };
    AssocsComponent.prototype.getDrugColor = function (assocDrug) {
        var degree = assocDrug.assocAmount;
        if (degree <= 1) {
            return this.drugColors[0];
        }
        else if (degree <= 2) {
            return this.drugColors[1];
        }
        else if (degree <= 3) {
            return this.drugColors[2];
        }
        else if (degree <= 6) {
            return this.drugColors[3];
        }
        else if (degree <= 10) {
            return this.drugColors[4];
        }
        else if (degree <= 20) {
            return this.drugColors[5];
        }
        else if (degree <= 30) {
            return this.drugColors[6];
        }
        else if (degree <= 50) {
            return this.drugColors[7];
        }
        else {
            return this.drugColors[8];
        }
    };
    AssocsComponent.prototype.viewDiseaseDetails = function (assocDisease) {
        var modalRef = this.modalService.open(_disease_modal_component__WEBPACK_IMPORTED_MODULE_5__["DiseaseModalComponent"], { size: "lg" });
        modalRef.componentInstance.assocDisease = assocDisease;
    };
    AssocsComponent.prototype.getDiseaseColor = function (assocDisease) {
        var degree = assocDisease.assocAmount;
        if (degree <= 1) {
            return this.diseaseColors[0];
        }
        else if (degree <= 5) {
            return this.diseaseColors[1];
        }
        else if (degree <= 10) {
            return this.diseaseColors[2];
        }
        else if (degree <= 25) {
            return this.diseaseColors[3];
        }
        else if (degree <= 50) {
            return this.diseaseColors[4];
        }
        else if (degree <= 75) {
            return this.diseaseColors[5];
        }
        else if (degree <= 100) {
            return this.diseaseColors[6];
        }
        else if (degree <= 150) {
            return this.diseaseColors[7];
        }
        else {
            return this.diseaseColors[8];
        }
    };
    AssocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "assocs",
            template: "    \n      <br>\n      <h3 class=\"display-5\" *ngIf=\"assoc !== null\">Gene-Drug Associations</h3>\n      <table class=\"table table-bordered\"  *ngIf=\"assoc !== null\">\n          <thead>\n          </thead>\n          <tbody>\n          <tr>\n              <td class=\"text-lg-center\" [ngStyle]=\"{'background-color': '#F2F2F2'}\">Known Drugs</td>\n              <td>\n                  <button *ngFor=\"let assocDrug of assoc.assocDrugs\"\n                          [ngStyle]=\"{'background-color': getDrugColor(assocDrug)}\"\n                          placement=\"top\" ngbTooltip=\"{{assocDrug.assocAmount}}\" \n                          class=\"btn btn-light\" (click)=\"viewDrugDetails(assocDrug)\"\n                  >\n                      {{assocDrug.drug}}\n                  </button>\n              </td>\n          </tr>\n          </tbody>\n      </table>\n\n      <br>\n      <h3 class=\"display-5\" *ngIf=\"assoc !== null\">Gene-Disease Associations</h3>\n      <table class=\"table table-bordered\"  *ngIf=\"assoc !== null\">\n          <thead>\n          </thead>\n          <tbody>\n          <tr>\n              <td class=\"text-lg-center\" [ngStyle]=\"{'background-color': '#F2F2F2'}\">Known Diseases</td>\n              <td>\n                  <button *ngFor=\"let assocDisease of assoc.assocDiseases\"\n                          [ngStyle]=\"{'background-color': getDiseaseColor(assocDisease)}\"\n                          placement=\"top\" ngbTooltip=\"{{assocDisease.assocAmount}}\"\n                          class=\"btn btn-light\" (click)=\"viewDiseaseDetails(assocDisease)\"\n                  >\n                      {{assocDisease.disease}}\n                  </button>\n              </td>\n          </tr>\n          </tbody>\n      </table>\n\n\n<!--      <br>-->\n<!--      <h3 class=\"display-5\">association</h3>-->\n<!--      <table class=\"table table-sm table-bordered\" *ngIf=\"assoc !== null\">-->\n<!--          <thead>-->\n<!--          <tr class=\"text-left\">-->\n<!--              <th class=\"name\">Variant Name</th>-->\n<!--              <th class=\"env\">Enviromental Contexts</th>-->\n<!--              <th class=\"phenotype\">Phenotypes</th>-->\n<!--              <th class=\"disease\">Diseases</th>-->\n<!--              <th class=\"drug\">Drugs</th>-->\n<!--              <th class=\"response\">Response</th>-->\n<!--              <th class=\"level\">Evidence Level</th>-->\n<!--              <th class=\"label\">Evidence Label</th>-->\n<!--              <th class=\"feature\">Features</th>-->\n<!--              <th class=\"url\">Publication Url</th>-->\n<!--          </tr>-->\n<!--          </thead>-->\n<!--          <tbody>-->\n<!--          <tr *ngFor=\"let assocReference of assoc.assocReferences\">-->\n<!--              <td>{{assocReference.variantName}}</td>-->\n<!--              <td>{{assocReference.envContexts}}</td>-->\n<!--              <td>{{assocReference.phenotypes}}</td>-->\n<!--              <td>{{assocReference.diseases}}</td>-->\n<!--              <td>{{assocReference.drugs}}</td>-->\n<!--              <td>{{assocReference.response}}</td>-->\n<!--              <td>{{assocReference.evidence_level}}</td>-->\n<!--              <td>{{assocReference.evidence_label}}</td>-->\n<!--              <td>{{assocReference.features}}</td>-->\n<!--              <td>-->\n<!--                  <button *ngFor=\"let url of getUrls(assocReference)\" class=\"btn btn-light btn-link\"-->\n<!--                          (click)=\"openUrl(url)\">{{url}}</button>-->\n<!--              </td>-->\n<!--          </tr>-->\n<!--          </tbody>-->\n<!--      </table>-->\n\n\n  ",
            styles: ["\n      tr {\n          white-space: normal;\n      }\n\n      table {\n          width: 100%;\n          table-layout: auto;\n      }\n\n      .feature {\n          width: 30px;\n      }\n\n      .response {\n          width: 10%;\n      }\n\n      .level {\n          width: 7.5%;\n      }\n\n      .label {\n          width: 7.5%;\n      }\n\n      .drug {\n          overflow: scroll;\n          width: 20px;\n      }\n  "],
            providers: [ASSOCS_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_assocs_service__WEBPACK_IMPORTED_MODULE_1__["AssocsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], AssocsComponent);
    return AssocsComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.service.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: AssocsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocsService", function() { return AssocsService; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assocs */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.ts");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Based on the Angular and RxJS documentation, this is the best way to deal with sequential HTTP requests (those
 * that have results which vary based on the results to prior queries).
 */

var AssocsService = /** @class */ (function () {
    function AssocsService(http) {
        var _this = this;
        this.http = http;
        this.queryEndpoint = "https://search.cancervariants.org/api/v1/associations?size=1000&q=";
        this.searchAssocs = function (variant) {
            // Gets a list of assoc references from the single JSON object.
            var jsontoReferences = function (jsonObject) {
                console.log("assoc json:", jsonObject);
                var references = [];
                for (var _i = 0, _a = jsonObject["hits"].hits; _i < _a.length; _i++) {
                    var hit = _a[_i];
                    // parse envContexts from json
                    var envContexts = [];
                    if (hit.association.environmentalContexts !== undefined && hit.association.environmentalContexts.length > 0) {
                        for (var _b = 0, _c = hit.association.environmentalContexts; _b < _c.length; _b++) {
                            var environmentalContext = _c[_b];
                            envContexts.push(environmentalContext.id);
                        }
                    }
                    else {
                    }
                    // parse drugs from json
                    var drugs = [];
                    if (hit.drugs !== undefined && hit.drugs.length > 0 && hit.drugs !== "N/A") {
                        for (var _d = 0, _e = hit.drugs.split(","); _d < _e.length; _d++) {
                            var drug = _e[_d];
                            drug = drug.trim();
                            drugs.push(drug);
                        }
                    }
                    else {
                        drugs.push("NA");
                        console.log("no drugs", hit);
                        console.log("no drugs gene", hit.genes);
                    }
                    // parse diseases from json
                    var diseases = [];
                    if (hit.diseases !== undefined && hit.diseases.length > 0 && hit.diseases !== "N/A") {
                        var diseases2 = hit.diseases.split(";").join(",");
                        for (var _f = 0, _g = diseases2.split(","); _f < _g.length; _f++) {
                            var disease = _g[_f];
                            diseases.push(disease);
                        }
                    }
                    else {
                        diseases.push("NA");
                    }
                    // parse features from json
                    var features = [];
                    if (hit.features !== undefined && hit.features.length > 0) {
                        for (var _h = 0, _j = hit.features; _h < _j.length; _h++) {
                            var feature = _j[_h];
                            if (feature.description !== undefined) {
                                features.push(feature.description);
                            }
                        }
                    }
                    // parse phenotypes from json
                    var phenotypes = [];
                    if (hit.association.phenotypes.length > 0) {
                        for (var _k = 0, _l = hit.association.phenotypes; _k < _l.length; _k++) {
                            var phenotype = _l[_k];
                            phenotypes.push(phenotype.id);
                        }
                    }
                    else {
                        phenotypes.push("NA");
                    }
                    // parse source_urls from json
                    var source_urls = "NA";
                    if (hit.source_url !== undefined) {
                        source_urls = hit.source_url;
                    }
                    else if (hit.association.source_link !== undefined) {
                        source_urls = hit.hit.association.source_link;
                    }
                    // parse genes for relation from json
                    var genes = [];
                    if (hit.genes.length > 0) {
                        for (var _m = 0, _o = hit.genes; _m < _o.length; _m++) {
                            var gene = _o[_m];
                            genes.push(gene);
                        }
                    }
                    else {
                        genes.push("NA");
                    }
                    // parse genes for relation from json
                    var response = "NA";
                    if (hit.association.response_type !== undefined
                        && hit.association.response_type !== null
                        && hit.association.response_type !== "NA"
                        && hit.association.response_type !== "N/A") {
                        response = hit.association.response_type.toLowerCase();
                    }
                    else {
                        console.log("no response", hit);
                    }
                    // create new object for row
                    references.push(new _assocs__WEBPACK_IMPORTED_MODULE_3__["AssocReference"](variant.hgvsID, variant.variantName, hit.association.description, envContexts.join(",  "), phenotypes.join(",  "), diseases.join(",  "), drugs.join(",  "), response, hit.association.evidence_level, hit.association.evidence_label, features.join(",  "), source_urls, hit.publications, genes));
                }
                references.sort(function (a, b) { return a.evidence_level < b.evidence_level ? -1 : a.evidence_level > b.evidence_level ? 1 : 0; });
                return references;
            };
            // Gets a list of assocDrug from the searching-gene assocReference.
            var getAssocDrugs = function (resultGenes) {
                var gene = variant.origin.hugoSymbol;
                var drugs = [];
                var geneDrugs = new Map();
                var assocDrugs = [];
                // filter for response
                var resultDrugs = [];
                for (var _i = 0, resultGenes_1 = resultGenes; _i < resultGenes_1.length; _i++) {
                    var result = resultGenes_1[_i];
                    if (result.response !== "NA" && result.response !== "N/A") {
                        resultDrugs.push(result);
                    }
                }
                // get drug set
                console.log("resultGenes", resultDrugs);
                for (var _a = 0, resultDrugs_1 = resultDrugs; _a < resultDrugs_1.length; _a++) {
                    var result = resultDrugs_1[_a];
                    for (var _b = 0, _c = result.drugs.split(","); _b < _c.length; _b++) {
                        var drug = _c[_b];
                        drug = drug.trim();
                        if (drug === "" || drug === " " || drug === "  " || drug === "NA" || drug === "N/A" || drugs.includes(drug)) {
                        }
                        else {
                            drugs.push(drug);
                        }
                    }
                }
                // gene-drug connection count
                for (var _d = 0, drugs_1 = drugs; _d < drugs_1.length; _d++) {
                    var drug = drugs_1[_d];
                    geneDrugs.set(drug, 0);
                }
                for (var _e = 0, drugs_2 = drugs; _e < drugs_2.length; _e++) {
                    var drug = drugs_2[_e];
                    var drugAmount = 0;
                    var references = [];
                    for (var _f = 0, resultDrugs_2 = resultDrugs; _f < resultDrugs_2.length; _f++) {
                        var resultGene = resultDrugs_2[_f];
                        // filter for dirty data
                        for (var _g = 0, _h = resultGene.drugs.split(","); _g < _h.length; _g++) {
                            var drug2 = _h[_g];
                            drug2 = drug2.trim();
                            if (drug2 === drug) {
                                drugAmount = drugAmount + 1;
                                references.push(resultGene);
                            }
                        }
                    }
                    if (drugAmount !== 0) {
                        references.sort(function (a, b) { return a.evidence_level < b.evidence_level ? -1 : a.evidence_level > b.evidence_level ? 1 : 0; });
                        assocDrugs.push(new _assocs__WEBPACK_IMPORTED_MODULE_3__["AssocDrug"](variant.hgvsID, gene, drug, drugAmount, references));
                    }
                }
                return assocDrugs;
            };
            // Gets a list of assocDiseases from the searching-gene assocReference.
            var getAssocDiseases = function (resultDiseases) {
                var gene = variant.origin.hugoSymbol;
                var diseases = [];
                var geneDiseases = new Map();
                var assocDiseases = [];
                // get disease set
                console.log("resultDiseases", resultDiseases);
                for (var _i = 0, resultDiseases_1 = resultDiseases; _i < resultDiseases_1.length; _i++) {
                    var result = resultDiseases_1[_i];
                    for (var _a = 0, _b = result.diseases.split(","); _a < _b.length; _a++) {
                        var disease = _b[_a];
                        disease = disease.trim();
                        if (disease === "" || disease === " " || disease === "  " || disease === "NA" || disease === "N/A" || diseases.includes(disease)) {
                        }
                        else {
                            diseases.push(disease);
                        }
                    }
                }
                // gene-disease connection count
                for (var _c = 0, diseases_1 = diseases; _c < diseases_1.length; _c++) {
                    var disease = diseases_1[_c];
                    geneDiseases.set(disease, 0);
                }
                for (var _d = 0, diseases_2 = diseases; _d < diseases_2.length; _d++) {
                    var disease = diseases_2[_d];
                    var diseaseAmount = 0;
                    var references = [];
                    for (var _e = 0, resultDiseases_2 = resultDiseases; _e < resultDiseases_2.length; _e++) {
                        var resultGene = resultDiseases_2[_e];
                        // filter for dirty data
                        for (var _f = 0, _g = resultGene.diseases.split(","); _f < _g.length; _f++) {
                            var disease2 = _g[_f];
                            disease2 = disease2.trim();
                            if (disease2 === disease) {
                                diseaseAmount = diseaseAmount + 1;
                                references.push(resultGene);
                            }
                        }
                    }
                    if (diseaseAmount !== 0) {
                        references.sort(function (a, b) { return a.evidence_level < b.evidence_level ? -1 : a.evidence_level > b.evidence_level ? 1 : 0; });
                        assocDiseases.push(new _assocs__WEBPACK_IMPORTED_MODULE_3__["AssocDisease"](variant.hgvsID, gene, disease, diseaseAmount, references));
                    }
                }
                return assocDiseases;
            };
            // Requirements before constructing queries.
            return _this.http
                .get(_this.queryEndpoint + variant.hgvsID.replace(":", "%5C%3A").replace(">", "%3E"))
                .mergeMap(function (result2) {
                console.log("Got assoc query result2:", result2);
                var resultReferences = jsontoReferences(result2);
                var gene = variant.origin.hugoSymbol;
                console.log("gene name", gene);
                var drugs = [];
                var diseases = [];
                console.log("resultReferences", resultReferences);
                // get drug set (all the genes)
                /*
                for (const result of resultReferences) {
                  for (let drug of result.drugs.split(",")) {
                    drug = drug.trim();
                    if (drug === "" || drug === " " || drug === "  " || drug === "NA" || drug === "N/A" || drugs.includes(drug)) {
                    } else {
                      drugs.push(drug);
                    }
                  }
                }
                */
                // get disease set (all the genes)
                /*
                for (const result of resultReferences) {
                  for (let disease of result.diseases.split(",")) {
        
                    disease = disease.trim();
                    if (disease === "NA" || diseases.includes(disease) && disease !== "NA") {
                    } else {
                      diseases.push(disease);
                    }
                  }
                }
                 */
                // filter for gene searched to faster the page load
                var resultGenes = [];
                for (var _i = 0, resultReferences_1 = resultReferences; _i < resultReferences_1.length; _i++) {
                    var result = resultReferences_1[_i];
                    for (var _a = 0, _b = result.genes; _a < _b.length; _a++) {
                        var gene2 = _b[_a];
                        if (gene2 === gene) {
                            resultGenes.push(result);
                        }
                    }
                }
                var assocDrugs = getAssocDrugs(resultGenes);
                var assocDiseases = getAssocDiseases(resultGenes);
                // construct Assoc object
                var assoc = new _assocs__WEBPACK_IMPORTED_MODULE_3__["Assoc"](variant.hgvsID, gene, drugs, diseases, assocDrugs, assocDiseases, resultReferences);
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(assoc);
            });
        };
    }
    AssocsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AssocsService);
    return AssocsService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.ts ***!
  \***************************************************************************************/
/*! exports provided: AssocReference, AssocDrug, AssocDisease, Assoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocReference", function() { return AssocReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocDrug", function() { return AssocDrug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocDisease", function() { return AssocDisease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assoc", function() { return Assoc; });
/**
 * A reference to a given association.
 */
var AssocReference = /** @class */ (function () {
    function AssocReference(_hgvsID, _variantName, _description, _envContexts, _phenotypes, _diseases, _drugs, _response, _evidence_level, _evidence_label, _features, _sourceUrls, _publicationUrls, _genes) {
        this.hgvsID = _hgvsID;
        this.variantName = _variantName;
        this.description = _description;
        this.envContexts = _envContexts;
        this.phenotypes = _phenotypes;
        this.publicationUrls = _publicationUrls.split(",");
        this.sourceUrls = _sourceUrls.split(",");
        this.genes = _genes;
        this.diseases = _diseases;
        this.drugs = _drugs;
        this.response = _response;
        this.evidence_level = _evidence_level;
        this.evidence_label = _evidence_label;
        this.features = _features;
    }
    return AssocReference;
}());

/**
 * A relation between a drug and related associations
 */
var AssocDrug = /** @class */ (function () {
    function AssocDrug(_hgvsID, _gene, _drug, _assocAmount, _assocReferences) {
        this.hgvsID = _hgvsID;
        this.drug = _drug;
        this.assocAmount = _assocAmount;
        this.assocReferences = _assocReferences;
    }
    return AssocDrug;
}());

/**
 * A relation between a disease and related associations
 */
var AssocDisease = /** @class */ (function () {
    function AssocDisease(_hgvsID, _gene, _disease, _assocAmount, _assocReferences) {
        this.hgvsID = _hgvsID;
        this.disease = _disease;
        this.assocAmount = _assocAmount;
        this.assocReferences = _assocReferences;
    }
    return AssocDisease;
}());

/**
 * A collection contains all the associations of a hgvs_id
 */
var Assoc = /** @class */ (function () {
    function Assoc(_hgvsID, _gene, _drugs, _diseases, _assocDrugs, _assocDiseases, _assocReferences) {
        this.hgvsID = _hgvsID;
        this.diseases = _diseases;
        this.drugs = _drugs;
        this.gene = _gene;
        this.assocDrugs = _assocDrugs;
        this.assocDiseases = _assocDiseases;
        this.assocReferences = _assocReferences;
    }
    return Assoc;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/disease-modal.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/assocs/disease-modal.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DiseaseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseModalComponent", function() { return DiseaseModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _assocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assocs */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * A modal to show association detail for a specific disease
 */
var DiseaseModalComponent = /** @class */ (function () {
    function DiseaseModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    DiseaseModalComponent.prototype.getPublicationUrls = function (assocReference) {
        return assocReference.publicationUrls;
    };
    DiseaseModalComponent.prototype.getSourceUrls = function (assocReference) {
        return assocReference.sourceUrls;
    };
    DiseaseModalComponent.prototype.openUrl = function (url) {
        if (url !== "NA") {
            window.open(url, "_blank");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _assocs__WEBPACK_IMPORTED_MODULE_2__["AssocDisease"])
    ], DiseaseModalComponent.prototype, "assocDisease", void 0);
    DiseaseModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "disease-modal",
            template: "\n      <div class=\"modal-header\">\n          <h4 class=\"modal-title text-muted\">Disease Detail</h4>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n              <span aria-hidden=\"true\">&times;</span>\n          </button>\n      </div>\n      <div class=\"modal-body\">\n          <h4 class=\"display-4 text-muted\">{{assocDisease.disease}}</h4>\n          <br>\n          <table class=\"table table-sm table-bordered\">\n              <thead>\n              <tr>\n                  <th class=\"response text-center px-3\">Response</th>\n                  <th class=\"label text-center px-3\">Evidence Label</th>\n                  <th class=\"url px-3\">Source Url</th>\n                  <th class=\"url px-3\">Publication Url</th>\n\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let assocReference of assocDisease.assocReferences\">\n                  <td class=\"text-center\">{{assocReference.response}}</td>\n                  <td class=\"text-center\">{{assocReference.evidence_label}}</td>\n                  <td class=\"\">\n                      <div class=\"\" *ngFor=\"let url of getSourceUrls(assocReference)\">\n                                <span class=\"overflow-hide btn-link\"\n                                      placement=\"left\" ngbTooltip=\"{{assocReference.description}}\"\n                                      (click)=\"openUrl(url)\">{{url}}</span>\n                      </div>\n\n                  </td>\n\n                  <td class=\"\">\n                      <div class=\"\" *ngFor=\"let url of getPublicationUrls(assocReference)\">\n                                <span class=\"overflow-hide btn-link\"\n                                      placement=\"left\" ngbTooltip=\"{{assocReference.description}}\"\n                                      (click)=\"openUrl(url)\">{{url}}</span>\n                      </div>\n\n                  </td>\n\n              </tr>\n              </tbody>\n          </table>\n          <br>\n\n\n      </div>\n      <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close\n          </button>\n      </div>\n\n  ",
            styles: ["\n\n      .modal-body {\n          overflow-x: auto;\n      }\n\n      table {\n          table-layout: auto;\n          width: initial;\n          overflow: scroll;\n      }\n      .overflow-hide{\n          overflow: hidden;\n          text-overflow: ellipsis;\n          -o-text-overflow: ellipsis;\n          white-space:nowrap;\n          width:250px;\n          display:block;\n      }\n\n  "],
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DiseaseModalComponent);
    return DiseaseModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/drug-modal.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/assocs/drug-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DrugModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugModalComponent", function() { return DrugModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _assocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assocs */ "./src/app/routes/entry-and-visualization/variant-visualization/assocs/assocs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * A modal to show association detail for a specific drug
 */
var DrugModalComponent = /** @class */ (function () {
    function DrugModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    DrugModalComponent.prototype.getPublicationUrls = function (assocReference) {
        return assocReference.publicationUrls;
    };
    DrugModalComponent.prototype.getSourceUrls = function (assocReference) {
        return assocReference.sourceUrls;
    };
    DrugModalComponent.prototype.openUrl = function (url) {
        if (url !== "NA") {
            window.open(url, "_blank");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _assocs__WEBPACK_IMPORTED_MODULE_2__["AssocDrug"])
    ], DrugModalComponent.prototype, "assocDrug", void 0);
    DrugModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "drug-modal",
            template: "\n      <div class=\"modal-header\">\n          <h4 class=\"modal-title text-muted\">Drug Detail</h4>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n              <span aria-hidden=\"true\">&times;</span>\n          </button>\n      </div>\n      <div class=\"modal-body\">\n          <h4 class=\"display-4 text-muted\">{{assocDrug.drug}}</h4>\n          <br>\n          <table class=\"table table-sm table-bordered\">\n              <thead>\n              <tr>\n                  <th class=\"response text-center px-3\">Response</th>\n                  <th class=\"label text-center px-3\">Evidence Label</th>\n                  <th class=\"url px-3\">Source Url</th>\n                  <th class=\"url px-3\">Publication Url</th>\n\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let assocReference of assocDrug.assocReferences\">\n                  <td class=\"text-center\">{{assocReference.response}}</td>\n                  <td class=\"text-center\">{{assocReference.evidence_label}}</td>\n                  <td class=\"\">\n                      <div class=\"\" *ngFor=\"let url of getSourceUrls(assocReference)\">\n                                <span class=\"overflow-hide btn-link\"\n                                      placement=\"left\" ngbTooltip=\"{{assocReference.description}}\"\n                                      (click)=\"openUrl(url)\">{{url}}</span>\n                      </div>\n\n                  </td>\n\n                  <td class=\"\">\n                      <div class=\"\" *ngFor=\"let url of getPublicationUrls(assocReference)\">\n                                <span class=\"overflow-hide btn-link\"\n                                      placement=\"left\" ngbTooltip=\"{{assocReference.description}}\"\n                                      (click)=\"openUrl(url)\">{{url}}</span>\n                      </div>\n\n                  </td>\n\n              </tr>\n              </tbody>\n          </table>\n          <br>\n\n\n      </div>\n      <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close\n          </button>\n      </div>\n\n  ",
            styles: ["\n\n      .modal-body {\n          overflow-x: auto;\n      }\n\n      table {\n          table-layout: auto;\n          width: initial;\n          overflow: scroll;\n      }\n      .overflow-hide{\n          overflow: hidden;\n          text-overflow: ellipsis;\n          -o-text-overflow: ellipsis;\n          white-space:nowrap;\n          width:250px;\n          display:block;\n      }\n\n  "],
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DrugModalComponent);
    return DrugModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR, ClinicalTrialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR", function() { return CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsComponent", function() { return ClinicalTrialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clinical_trials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinical-trials.service */ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * The best way to learn is through the experiences of others, and accessing the databse of past clinical trials
 * often is the best way to glean such information.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ClinicalTrialsComponent; }),
    multi: true
};
var ClinicalTrialsComponent = /** @class */ (function () {
    function ClinicalTrialsComponent(clinicalTrialsService) {
        this.clinicalTrialsService = clinicalTrialsService;
        // Clinical trials references.
        this.clinicalTrials = [];
        // The internal data model (for ngModel)
        this._currentlySelected = null;
        // Placeholders for the callbacks which are later providesd by the Control Value Accessor
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(ClinicalTrialsComponent.prototype, "currentlySelected", {
        get: function () {
            return this._currentlySelected;
        },
        set: function (v) {
            var _this = this;
            if (v !== this.currentlySelected) {
                this._currentlySelected = v;
                this.clinicalTrialsService.searchClinicalTrials(v).subscribe(function (trials) { return _this.clinicalTrials = trials; });
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    ClinicalTrialsComponent.prototype.writeValue = function (value) {
        if (value !== this.currentlySelected) {
            this.currentlySelected = value;
        }
    };
    ClinicalTrialsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ClinicalTrialsComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // Currently only logs to console.
    ClinicalTrialsComponent.prototype.getDataFor = function (reference) {
        this.clinicalTrialsService.getDetailsFor(reference).subscribe(function (details) { return console.log(details); });
    };
    ClinicalTrialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "clinical-trials",
            template: "    \n    <table class=\"table table-hover table-bordered\">\n      <thead>\n      <tr>\n        <th>Clinical Trial ID</th>\n        <th>Phase</th>\n        <th>Brief Title</th>\n        <th>Drugs</th>\n        <th>Principal Investigator</th>\n      </tr>\n      </thead>\n      <tbody>\n      <ng-container *ngIf=\"clinicalTrials.length >= 0\" >\n        <tr *ngFor=\"let clinicalTrial of clinicalTrials\" class=\"variantRow\" (click)=\"getDataFor(clinicalTrial)\">\n          <td>{{clinicalTrial.nci_id}}</td>\n          <td>{{clinicalTrial.phase}}</td>\n          <td>{{clinicalTrial.brief_title}}</td>\n          <td>{{clinicalTrial.drugsToString()}}</td>\n          <td>{{clinicalTrial.principal_investigator}}</td>\n        </tr>\n      </ng-container>\n      <ng-container *ngIf=\"clinicalTrials.length === 0\" >\n        <tr>\n          <td>Loading...</td>\n        </tr>\n      </ng-container>\n      </tbody>\n    </table>\n  ",
            styles: [""],
            providers: [CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_clinical_trials_service__WEBPACK_IMPORTED_MODULE_1__["ClinicalTrialsService"]])
    ], ClinicalTrialsComponent);
    return ClinicalTrialsComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ClinicalTrialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsService", function() { return ClinicalTrialsService; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clinical_trials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clinical-trials */ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.ts");
/* harmony import */ var _drugs_drug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drugs/drug */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Based on the Angular and RxJS documentation, this is the best way to deal with sequential HTTP requests (those
 * that have results which vary based on the results to prior queries).
 */

/**
 * Both searches for and provides data for different clinical trials.
 */
var ClinicalTrialsService = /** @class */ (function () {
    function ClinicalTrialsService(http) {
        var _this = this;
        this.http = http;
        // Reduces typing involved :P
        this.queryEndpoint = "https://clinicaltrialsapi.cancer.gov/v1/clinical-trials?";
        /**
         * What I"m trying to do for this method is obtain some examples of clinical trials being carried out on the
         * variants (also gene, but preferably variants) that the user filled out.  We get a max of 10 clinical trials
         * for each gene/variant combo.  The priority trials go to the variant (we query based on name, then HGVS ID),
         * and then finally we query for trials that involved this gene if that doesn"t work out.
         */
        this.searchClinicalTrials = function (variant) {
            // Gets a list of clinical trial references from the single JSON object.
            var clinicalTrialJSONtoReferences = function (jsonObject) {
                var references = [];
                for (var _i = 0, _a = jsonObject["trials"]; _i < _a.length; _i++) {
                    var trial = _a[_i];
                    var drugsArray = [];
                    for (var _b = 0, _c = trial.arms[0].interventions; _b < _c.length; _b++) {
                        var intervention = _c[_b];
                        if (intervention.intervention_type === "Drug") {
                            var newDrug = new _drugs_drug__WEBPACK_IMPORTED_MODULE_4__["DrugReference"](intervention.intervention_name);
                            drugsArray.push(newDrug);
                        }
                    }
                    references.push(new _clinical_trials__WEBPACK_IMPORTED_MODULE_3__["ClinicalTrialReference"](trial.nci_id, trial.phase.phase, trial.brief_title, drugsArray, trial.principal_investigator));
                }
                return references;
            };
            // Requirements before constructing queries.
            var desiredTrials = 10;
            var includes = ["brief_title", "nci_id", "principal_investigator", "phase.phase", "arms"];
            // Determine includes.
            var includeString = "";
            for (var _i = 0, includes_1 = includes; _i < includes_1.length; _i++) {
                var include = includes_1[_i];
                includeString = includeString + "&include=" + include;
            }
            // 1. Query for variant name in the clinical trials database.
            return _this.http
                .get(_this.queryEndpoint + "size=" + desiredTrials + "&_fulltext=" + encodeURIComponent(variant.variantName) + includeString)
                .mergeMap(function (result1) {
                console.log("1. Got name query results:", result1);
                var result1References = clinicalTrialJSONtoReferences(result1);
                // If we don"t have the max number of trials already.
                if (result1References.length < desiredTrials) {
                    // 2. Query for the variant HGVS ID in the clinical trials database.
                    return _this.http
                        .get(_this.queryEndpoint + "size=" + (desiredTrials - result1References.length) + "&_fulltext=" + variant.hgvsID + includeString)
                        .map(function (result2) {
                        console.log("2. Got HGVS query results:", result2);
                        var referenceArray2 = result1References;
                        // For every HGVS clinical trial reference.
                        for (var _i = 0, _a = clinicalTrialJSONtoReferences(result2); _i < _a.length; _i++) {
                            var result2Reference = _a[_i];
                            var existsInArray = false;
                            for (var _b = 0, referenceArray2_1 = referenceArray2; _b < referenceArray2_1.length; _b++) {
                                var currentReference = referenceArray2_1[_b];
                                if (result2Reference.brief_title === currentReference.brief_title) {
                                    existsInArray = true;
                                    break; // This reference must already be part of the array.
                                }
                            }
                            // Add it to the array if it doesn"t already exist.
                            if (!existsInArray) {
                                referenceArray2.push(result2Reference);
                            }
                        }
                        return referenceArray2;
                    });
                }
                else {
                    console.log("Returning result 1 references since long enough");
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(result1References);
                }
            })
                .mergeMap(function (result2References) {
                if (result2References.length < desiredTrials) {
                    // 2. Query for the variant HGVS ID in the clinical trials database.
                    return _this.http
                        .get(_this.queryEndpoint + "size=" + (desiredTrials - result2References.length) + "&_fulltext=" + variant.origin.hugoSymbol + includeString)
                        .map(function (result3) {
                        console.log("3. Got HUGO query results:", result3);
                        var referenceArray3 = result2References;
                        var result3References = clinicalTrialJSONtoReferences(result3);
                        // For every HGVS clinical trial reference.
                        for (var _i = 0, result3References_1 = result3References; _i < result3References_1.length; _i++) {
                            var result3Reference = result3References_1[_i];
                            var existsInArray = false;
                            for (var _a = 0, referenceArray3_1 = referenceArray3; _a < referenceArray3_1.length; _a++) {
                                var currentReference = referenceArray3_1[_a];
                                if (result3Reference.brief_title === currentReference.brief_title) {
                                    existsInArray = true;
                                    break; // This reference must already be part of the array.
                                }
                            }
                            // Add it to the array if it doesn"t already exist.
                            if (!existsInArray) {
                                referenceArray3.push(result3Reference);
                            }
                        }
                        return referenceArray3;
                    });
                }
                else {
                    console.log("Returning result 2 references since long enough");
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(result2References);
                }
            });
        };
        this.getDetailsFor = function (clinicalTrialReference) {
            return _this.http.get(_this.queryEndpoint + "size=1&include=official_title&include=brief_summary&nci_id=" + clinicalTrialReference.nci_id)
                .map(function (response) {
                return new _clinical_trials__WEBPACK_IMPORTED_MODULE_3__["ClinicalTrial"](clinicalTrialReference, response["trials"][0].official_title, response["trials"][0].brief_summary);
            });
        };
    }
    ClinicalTrialsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClinicalTrialsService);
    return ClinicalTrialsService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ClinicalTrialReference, ClinicalTrial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialReference", function() { return ClinicalTrialReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrial", function() { return ClinicalTrial; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClinicalTrialReference = /** @class */ (function () {
    function ClinicalTrialReference(_nci_id, _phase, _brief_title, _drugs, _principal_investigator) {
        var _this = this;
        this.drugsToString = function () {
            if (!_this.drugs || _this.drugs.length === 0) {
                return "";
            }
            var drugsString = _this.drugs[0].name;
            for (var i = 1; i < _this.drugs.length; i++) {
                if (i < _this.drugs.length - 1) {
                    drugsString = drugsString + ", " + _this.drugs[i].name;
                }
                else {
                    drugsString = drugsString + ", and " + _this.drugs[i].name;
                }
            }
            return drugsString;
        };
        this.nci_id = _nci_id;
        this.phase = _phase;
        this.brief_title = _brief_title;
        this.drugs = _drugs;
        this.principal_investigator = _principal_investigator;
    }
    return ClinicalTrialReference;
}());

/**
 * The extension of a clinical trial reference which provides access to more data about a given trial.
 */
var ClinicalTrial = /** @class */ (function (_super) {
    __extends(ClinicalTrial, _super);
    function ClinicalTrial(clinicalTrialReference, _official_title, _brief_summary) {
        var _this = _super.call(this, clinicalTrialReference.nci_id, clinicalTrialReference.phase, clinicalTrialReference.brief_title, clinicalTrialReference.drugs, clinicalTrialReference.principal_investigator) || this;
        _this.official_title = _official_title;
        _this.brief_summary = _brief_summary;
        return _this;
    }
    return ClinicalTrial;
}(ClinicalTrialReference));



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: DrugDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugDetailsModalComponent", function() { return DrugDetailsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drug */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts");
/* harmony import */ var _drugs_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drugs-search.service */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/**
 * A part of the result visualization component, which displays the drugs that will be effective against genes
 * or variants.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugDetailsModalComponent = /** @class */ (function () {
    function DrugDetailsModalComponent(drugSearchService, activeModal) {
        this.drugSearchService = drugSearchService;
        this.activeModal = activeModal;
    }
    DrugDetailsModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.drugReference) {
            return;
        }
        this.drugSearchService.searchByReference(this.drugReference).subscribe(function (drug) {
            console.log("Got drug from reference", drug);
            _this.drugModel = drug;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _drug__WEBPACK_IMPORTED_MODULE_1__["DrugReference"])
    ], DrugDetailsModalComponent.prototype, "drugReference", void 0);
    DrugDetailsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "drugs-modal",
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{drugReference.name}} details</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <!-- A bit of info about the drug -->\n      <table class=\"table table-bordered table-striped\" *ngIf=\"drugModel !== undefined\">\n        <thead>\n        </thead>\n        <tbody>\n        <tr *ngIf=\"drugModel.description !== undefined\">\n          <td>Description</td>\n          <td>{{drugModel.description}}</td>\n        </tr>\n        <ng-container *ngIf=\"drugModel.interactions !== undefined && drugModel.interactions.length > 0\">\n          <tr>\n            <td style=\"font-weight: bold;\">Gene</td>\n            <td style=\"font-weight: bold;\">Interaction Types</td>\n          </tr>\n          <tr *ngFor=\"let interaction of drugModel.interactions\">\n            <td>{{interaction.geneTarget.hugoSymbol}}</td>\n            <td>\n              <table class=\"table table-bordered\"\n                     *ngIf=\"interaction.interactionTypes !== undefined && interaction.interactionTypes.length > 0\">\n                <thead>\n                <td>Interaction Type</td>\n                <td>Sources</td>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let interactionType of interaction.interactionTypes\">\n                  <td style=\"width: 20%\">{{interactionType.name}}</td>\n                  <td style=\"width: 80%\" *ngIf=\"interactionType.sources !== undefined\">\n                    {{interactionType.sources.join(', ')}}\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n        </ng-container>\n        </tbody>\n      </table>\n    </div>\n  ",
            styles: ["\n  "]
        }),
        __metadata("design:paramtypes", [_drugs_search_service__WEBPACK_IMPORTED_MODULE_2__["DrugsSearchService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])
    ], DrugDetailsModalComponent);
    return DrugDetailsModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts":
/*!************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts ***!
  \************************************************************************************/
/*! exports provided: DrugReference, InteractionType, GeneInteraction, Drug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugReference", function() { return DrugReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionType", function() { return InteractionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneInteraction", function() { return GeneInteraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drug", function() { return Drug; });
/* harmony import */ var _data_merging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-merging */ "./src/app/routes/entry-and-visualization/data-merging.ts");
/**
 * One of the primary things that clinicians will need to see are the drugs which are most likely to be effective
 * against different genes and variants.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DrugReference = /** @class */ (function () {
    function DrugReference(_name) {
        var _this = this;
        this.brief_name = function () {
            return (_this.name.indexOf(" ") >= 0 ? _this.name.substring(0, _this.name.indexOf(" ")) : _this.name);
        };
        this.name = _name;
    }
    return DrugReference;
}());

var InteractionType = /** @class */ (function () {
    function InteractionType(_name, _sources) {
        this.name = _name;
        this.sources = _sources;
    }
    return InteractionType;
}());

var GeneInteraction = /** @class */ (function () {
    function GeneInteraction(_geneTarget, _sourceClassifications) {
        this.geneTarget = _geneTarget;
        this.interactionTypes = _sourceClassifications;
    }
    return GeneInteraction;
}());

var Drug = /** @class */ (function (_super) {
    __extends(Drug, _super);
    function Drug(_name) {
        var _this = _super.call(this, _name) || this;
        _this.mergeable = function (other) {
            return _this.name === other.name;
        };
        // Merges another gene into this gene (overwriting properties if the property of one is undefined).
        _this.merge = function (other) {
            _this.description = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.description, other.description);
            _this.interactions = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.interactions, other.interactions);
        };
        return _this;
    }
    return Drug;
}(DrugReference));



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: DrugsSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugsSearchService", function() { return DrugsSearchService; });
/* harmony import */ var _drug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drug */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * This service, like the data entry service, queries for and merges duplicate drugs for given genes.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugsSearchService = /** @class */ (function () {
    function DrugsSearchService(http) {
        this.http = http;
    }
    DrugsSearchService.prototype.searchByReference = function (reference) {
        return this.http.get("https://dgidb.genome.wustl.edu/api/v1/interactions.json?drugs=" + (reference.name.indexOf(" ") >= 0 ? reference.name.substring(0, reference.name.indexOf(" ")) : reference.name))
            .map(function (result) {
            var newDrug = new _drug__WEBPACK_IMPORTED_MODULE_0__["Drug"](reference.name);
            if (!(result["matchedTerms"] && result["matchedTerms"].length >= 0 && result["matchedTerms"][0].interactions)) {
                return;
            }
            newDrug.interactions = [];
            var addInteractionType = function (interaction, interactionTypeName, sourceName) {
                for (var _i = 0, _a = interaction.interactionTypes; _i < _a.length; _i++) {
                    var interactionType = _a[_i];
                    if (interactionType.name === interactionTypeName) {
                        interactionType.sources.push(sourceName);
                        return;
                    }
                }
                // Add new interaction type if source not found.
                interaction.interactionTypes.push(new _drug__WEBPACK_IMPORTED_MODULE_0__["InteractionType"](interactionTypeName, [sourceName]));
            };
            var addInteraction = function (interactionData) {
                var currentGeneTarget = interactionData.geneName;
                var currentInteractionType = interactionData.interactionType;
                var currentSource = interactionData.source;
                for (var _i = 0, _a = newDrug.interactions; _i < _a.length; _i++) {
                    var interaction = _a[_i];
                    if (interaction.geneTarget.hugoSymbol === currentGeneTarget) {
                        console.log("Found mergeable");
                        addInteractionType(interaction, currentInteractionType, currentSource);
                        return;
                    }
                }
                newDrug.interactions.push(new _drug__WEBPACK_IMPORTED_MODULE_0__["GeneInteraction"](new _genomic_data__WEBPACK_IMPORTED_MODULE_2__["Gene"](currentGeneTarget), [new _drug__WEBPACK_IMPORTED_MODULE_0__["InteractionType"](currentInteractionType, [currentSource])]));
            };
            console.log("Interaction JSON is ", result["matchedTerms"][0].interactions);
            for (var _i = 0, _a = result["matchedTerms"][0].interactions; _i < _a.length; _i++) {
                var jsonInteraction = _a[_i];
                addInteraction(jsonInteraction);
            }
            return newDrug;
        });
    };
    DrugsSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DrugsSearchService);
    return DrugsSearchService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/gene/gene-information.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/gene/gene-information.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GeneInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneInformationComponent", function() { return GeneInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/**
 * Visualizing the data for the gene: a tab on the result visualization.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneInformationComponent = /** @class */ (function () {
    function GeneInformationComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _genomic_data__WEBPACK_IMPORTED_MODULE_1__["Gene"])
    ], GeneInformationComponent.prototype, "gene", void 0);
    GeneInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gene-information",
            template: "\n    <ng-container *ngIf=\"gene !== undefined\">\n      <br>\n      <h3 class=\"display-3\">\n        {{gene.hugoSymbol}}\n        <small class=\"text-muted\">{{gene.name}}</small>\n      </h3>\n\n      <div style=\"width: 70%; float: left;\">\n        <div class=\"card\">\n          <!--<img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">-->\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Gene Description</h4>\n            <p class=\"card-text\">{{gene.description}}</p>\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block\" *ngIf=\"gene.pathways !== undefined && gene.pathways.length > 0\">\n            <h4 class=\"card-title\">Gene Pathways</h4>\n            <p class=\"card-text\">{{gene.pathwaysString()}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card\" style=\"width: 30%; float: left;\">\n        <!--<img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">-->\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Gene Details</h4>\n          <!-- A bit of info about the variant/gene -->\n          <table class=\"table table-bordered\">\n            <thead>\n            </thead>\n            <tbody>\n            <tr *ngIf=\"gene.entrezID !== undefined\">\n              <td>Entrez ID</td>\n              <td>{{gene.entrezID}}</td>\n            </tr>\n            <tr *ngIf=\"gene.type !== undefined\">\n              <td>Type</td>\n              <td>{{gene.type}}</td>\n            </tr>\n            <tr *ngIf=\"gene.aliases !== undefined && gene.aliases.length > 0\">\n              <td>Aliases</td>\n              <td>{{gene.aliases.join(\", \")}}</td>\n            </tr>\n            <tr *ngIf=\"gene.chromosome !== undefined\">\n              <td>Chromosome</td>\n              <td>{{gene.chromosome}}</td>\n            </tr>\n            <tr *ngIf=\"gene.strand !== undefined\">\n              <td>Strand</td>\n              <td>{{gene.strand}}</td>\n            </tr>\n            <tr *ngIf=\"gene.start !== undefined && gene.end !== undefined\">\n              <td>Nucleotides</td>\n              <td>{{gene.start}} to {{gene.end}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </ng-container>\n  ",
            styles: ["\n    small {\n      font-size: 25px;\n    }\n    \n    .card {\n      padding: 10px;\n    }\n  "]
        })
    ], GeneInformationComponent);
    return GeneInformationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/variant-visualization.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/variant-visualization.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: VISUALIZATION_CONTROL_VALUE_ACCESSOR, VariantVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISUALIZATION_CONTROL_VALUE_ACCESSOR", function() { return VISUALIZATION_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantVisualizationComponent", function() { return VariantVisualizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * Wrapper class of tabs for a bunch of post- data-entry components (Clinical Trials, etc.)
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var VISUALIZATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return VariantVisualizationComponent; }),
    multi: true
};
var VariantVisualizationComponent = /** @class */ (function () {
    function VariantVisualizationComponent() {
        // The internal data model (for ngModel)
        this._currentlySelected = null;
        // Placeholders for the callbacks which are later providesd by the Control Value Accessor
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(VariantVisualizationComponent.prototype, "currentlySelected", {
        get: function () {
            return this._currentlySelected;
        },
        set: function (v) {
            if (v !== this.currentlySelected) {
                this._currentlySelected = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    VariantVisualizationComponent.prototype.writeValue = function (value) {
        if (value !== this.currentlySelected) {
            this.currentlySelected = value;
        }
    };
    VariantVisualizationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    VariantVisualizationComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    VariantVisualizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "variant-visualization",
            template: "\n    <!-- Tabs to view the variant's info.  -->\n    <ngb-tabset [destroyOnHide]=\"false\" *ngIf=\"currentlySelected !== undefined && currentlySelected !== null\">\n      \n      <!--\n      commenting out gene, variant, and association, not relevant right now\n      <ngb-tab title=\"Gene\">\n        <ng-template ngbTabContent>\n          <gene-information [gene]=\"currentlySelected.origin\"></gene-information>\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab title=\"Variant\">\n        <ng-template ngbTabContent>\n          <variant-information [variant]=\"currentlySelected\"></variant-information>\n        </ng-template>\n      </ngb-tab>\n      -->\n      \n      <ngb-tab title=\"Clinical Trials\">\n          <ng-template ngbTabContent>\n              <clinical-trials [(ngModel)]=\"currentlySelected\"></clinical-trials>\n          </ng-template>\n      </ngb-tab>\n\n\n      <!--\n      <ngb-tab title=\"Associations\">\n          <ng-template ngbTabContent>\n              <assocs [(ngModel)]=\"currentlySelected\"></assocs>\n          </ng-template>\n      </ngb-tab>\n      -->\n    </ngb-tabset>\n  ",
            styles: ["    \n  "],
            providers: [VISUALIZATION_CONTROL_VALUE_ACCESSOR]
        })
    ], VariantVisualizationComponent);
    return VariantVisualizationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ClassificationsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationsModalComponent", function() { return ClassificationsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/**
 * A part of the result visualization component, which displays the drugs that will be effective against genes
 * or variants.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassificationsModalComponent = /** @class */ (function () {
    function ClassificationsModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _genomic_data__WEBPACK_IMPORTED_MODULE_2__["Variant"])
    ], ClassificationsModalComponent.prototype, "variant", void 0);
    ClassificationsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "classifications-modal",
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{variant.optionName()}} classifictions</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <!-- A bit of info about the drug -->\n      <table class=\"table table-bordered table-striped\" *ngIf=\"variant !== undefined\">\n        <thead>\n        </thead>\n        <tbody>\n        <ng-container *ngIf=\"variant.classifications !== undefined && variant.classifications.length > 0\">\n          <tr>\n            <td style=\"font-weight: bold;\">Classification</td>\n            <td style=\"font-weight: bold;\">Sources</td>\n          </tr>\n          <tr *ngFor=\"let classification of variant.classifications\">\n            <td>{{classification.name}}</td>\n            <td *ngIf=\"classification.sources !== undefined && classification.sources.length > 0\">\n              {{classification.sources.join(', ')}}\n            </td>\n          </tr>\n        </ng-container>\n        </tbody>\n      </table>\n      <br>\n    </div>\n  ",
            styles: ["\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ClassificationsModalComponent);
    return ClassificationsModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/variant/variant-information.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/variant/variant-information.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: VariantInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantInformationComponent", function() { return VariantInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _classifications_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classifications-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component.ts");
/**
 * Visualizing the data for the variant: a tab on the results display.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VariantInformationComponent = /** @class */ (function () {
    function VariantInformationComponent(modalService) {
        this.modalService = modalService;
    }
    // viewDrugDetails(reference: DrugReference) {
    //   const modalRef = this.modalService.open(DrugDetailsModalComponent, {size: "lg"});
    //   modalRef.componentInstance.drugReference = reference;
    // }
    VariantInformationComponent.prototype.viewClassifications = function () {
        var modalRef = this.modalService.open(_classifications_modal_component__WEBPACK_IMPORTED_MODULE_2__["ClassificationsModalComponent"], { size: "lg" });
        modalRef.componentInstance.variant = this.variant;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VariantInformationComponent.prototype, "variant", void 0);
    VariantInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "variant-information",
            template: "\n    <ng-container *ngIf=\"variant\">\n      <br>\n      <h3 class=\"display-3\">{{variant.variantName}}</h3>\n\n        <!-- A bit of info about the variant/gene -->\n      <table class=\"table table-bordered table-striped\">\n        <thead>\n        </thead>\n        <tbody>\n        <tr *ngIf=\"variant.description && variant.description !== ''\">\n          <td>Description</td>\n          <td>{{variant.description}}</td>\n        </tr>\n        <tr>\n          <td>Functional Prediction</td>\n          <td>\n            {{variant.score}} <span (click)=\"viewClassifications()\" class=\"badge badge-{{variant.getClassification().toLowerCase().indexOf('pathogenic') >= 0 ? 'danger' : 'info'}}\">{{variant.getClassification()}}</span>\n          </td>\n        </tr>\n        <tr>\n          <td>Variant Origin</td>\n          <td>{{variant.somatic ? 'Somatic' : 'Germline'}}</td>\n        </tr>\n        <tr *ngIf=\"variant.types && variant.types.length > 0\">\n          <td>Variant Type</td>\n          <td>{{variant.types.join(\", \")}}</td>\n        </tr>\n<!--        <tr *ngIf=\"variant.drugs && variant.drugs.length > 0\">-->\n<!--          <td>Effective Drugs</td>-->\n<!--          <td>-->\n<!--            <button *ngFor=\"let drugReference of variant.drugs\" class=\"btn btn-light\" (click)=\"viewDrugDetails(drugReference)\">{{drugReference.name}}</button>-->\n<!--          </td>-->\n<!--        </tr>-->\n<!--        <tr *ngIf=\"variant.diseases && variant.diseases.length > 0\">-->\n<!--          <td>Known Diseases</td>-->\n<!--          <td>{{variant.diseases.join(\", \")}}</td>-->\n<!--        </tr>-->\n        <tr>\n          <td>Variant Location</td>\n          <td>Chromosome {{variant.getLocation()}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </ng-container>\n  ",
            styles: ["\n    .badge {\n      opacity: 1;\n    }\n    \n    .badge:hover {\n      opacity: 0.8;\n    }\n    \n    .badge:active {\n      opacity: 0.6;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], VariantInformationComponent);
    return VariantInformationComponent;
}());



/***/ }),

/***/ "./src/app/routes/feedback-form/feedback-form-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/feedback-form/feedback-form-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: FeedbackFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackFormModalComponent", function() { return FeedbackFormModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FeedbackFormModalComponent = /** @class */ (function () {
    function FeedbackFormModalComponent() {
    }
    FeedbackFormModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "feedback-form-modal",
            template: "    \n    <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfLUXs73346HwTOxRI0G3rcdMBGBMulS4NyH3tj3aSG3MXD_Q/viewform?embedded=true\" width=\"800\" height=\"500\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\n  "
        })
    ], FeedbackFormModalComponent);
    return FeedbackFormModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/home/comment-modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/home/comment-modal.component.ts ***!
  \********************************************************/
/*! exports provided: CommentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModalComponent", function() { return CommentModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentModalComponent = /** @class */ (function () {
    function CommentModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    CommentModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "comment-modal-modal",
            template: "\n   <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSe0_aiT6mcBhg-Xji5I37gNyFDbldz-CxSxjt0VN_UTbGwGzA/viewform?embedded=true\" width=\"800\" height=\"500\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\n   ",
            styles: ["\n   "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], CommentModalComponent);
    return CommentModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _comment_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-modal.component */ "./src/app/routes/home/comment-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The landing page for the app, which tells the user what the app does, what the purpose of the appis, and why
 */




var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router, modalService) {
        this.router = router;
        this.modalService = modalService;
    }
    LandingPageComponent.prototype.navigateToVisualization = function () {
        this.router.navigate(["/app"]);
    };
    LandingPageComponent.prototype.showCommentModal = function () {
        var modalRef = this.modalService.open(_comment_modal_component__WEBPACK_IMPORTED_MODULE_3__["CommentModalComponent"], { size: "lg" });
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "home",
            template: "\n    <div class=\"infoCard\">\n      <div class=\"cardContent\">\n        <div>\n          <h1 class=\"thick\">SMART COVID Navigator</h1>\n          <hr>\n          <p class=\"regular\">\n          The SMART COVID Navigator connects patient information from multiple EHR servers to an AI- powered knowledge map of COVID-19 research. This will allow clinicians to access the latest data-driven research based on a particular patient\u2019s risk factors. The Navigator builds on the framework developed by the SMART Cancer Navigator, which offered clinical decision support by connecting patient EHR information to cancerous gene-variants. The Navigator is a further step in creating FHIR-protocol based tools to support personalized medicine.\n          The web-based app was built by researchers at the Biomedical Cybernetics Laboratory in Harvard Medical School. It was created using an Angular and bootstrap front-end framework.</p>\n          <p class=\"regular\">\n              If you would like to submit a comment, <a href=\"javascript:void(0);\" (click)=\"showCommentModal()\">click here</a>.\n          </p>\n        </div>\n        <!--\n        <div>\n          <h1 class=\"thick\">SMART COVID Navigator's Approach</h1>\n          <hr>\n          <p class=\"regular\">The SMART Cancer Navigator app securely links patient-specific data from EHRs and genomics laboratories to multiple knowledge bases for interpretation and validation. Through the built-in feedback functionality, meaningful responses regarding the usability and efficacy of the app are conveyed to the designers.\n          </p>\n          \n        </div>\n        -->\n        \n      </div>\n      <div class=\"cardImage\" style=\"min-width: 300px;\">\n        <div>\n          <img src=\"/assets/landing-page/not-logged-in.png\">\n          <img src=\"/assets/landing-page/logged-in.png\">\n          <img src=\"/assets/landing-page/modal-display.png\">\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .infoCard {\n      margin: 10px 5px;\n      overflow: hidden;\n    }\n\n    .cardContent {\n      float: left;\n      width: 70%;\n    }\n\n    .cardImage {\n      float: left;\n      width: 30%;\n      min-width: 150px;\n      max-width: 100%;\n    }\n\n    .cardImage>div, .cardContent>div {\n      float: left;\n      background-color: white;\n      box-shadow: 1px 3px #d5d5d5;\n      border: 1px solid #d1d1d1;\n      padding: 15px;\n      margin: 7px 3px;\n    }\n    \n    .cardImage img {\n      width: 100%;\n      height: auto;\n    }\n  "],
            animations: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/routes/login-services/cms.service.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/login-services/cms.service.ts ***!
  \******************************************************/
/*! exports provided: CMSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMSService", function() { return CMSService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var options = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var CMSService = /** @class */ (function () {
    function CMSService(http, router) {
        this.http = http;
        this.router = router;
        this.clientId = 'QoJO4ZUb4uQKoA09mu65jScgDfMZlvgbTQHXsSRn';
        this.client_secret = 'JF3JGS2DqxI5jHICvL3gEMgnPDSBdKBzTy71K0GnQYVq5WcD3rvqCC8gUg7PC0XqpvKHadgYJSJWpW254ZJHtuiXRWNjMLILm1wVO39tmn7uVHbDwIj866Tzd32J5mBp';
        this.accessToken = '';
    }
    // get access token and related information from localStorage
    CMSService.prototype.getLocalStorageToken = function () {
        return JSON.parse(localStorage.getItem('cmsData'));
    };
    // we get the access token from this function.
    CMSService.prototype.getToken = function (username, code) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        var accessTokenAppend = new URLSearchParams();
        accessTokenAppend.set('grant_type', 'authorization_code');
        accessTokenAppend.set('redirect_uri', 'http://localhost:4200/app');
        accessTokenAppend.set('client_id', this.clientId);
        accessTokenAppend.set('client_secret', this.client_secret);
        accessTokenAppend.set('code', code);
        var queryInputs = accessTokenAppend.toString();
        return this.http.post('https://sandbox.bluebutton.cms.gov/v1/o/token/?' + queryInputs, { header: header, HttpHeaders: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"] }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            localStorage.setItem('cmsData', JSON.stringify(data));
            options.headers = options.headers.set('Authorization', "Bearer " + data.access_token);
            return data;
        }, function (error) { }));
    };
    // the explanation of benefit file contains information about conditions
    CMSService.prototype.eobInfo = function (patientId) {
        var eobParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "patient=" + patientId });
        options['params'] = eobParams;
        options.headers = options.headers.set('Authorization', "Bearer " + this.accessToken);
        return this.http.get('https://sandbox.bluebutton.cms.gov/v1/fhir/ExplanationOfBenefit/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (eobData) {
            localStorage.setItem('eobData', JSON.stringify(eobData));
            return JSON.stringify(eobData);
        }));
    };
    // the patient file contains information on patient demographics
    CMSService.prototype.patientInfo = function (patientId) {
        var patientParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "patient=" + patientId });
        options['params'] = patientParams;
        options.headers = options.headers.set('Authorization', "Bearer " + this.accessToken);
        return this.http.get('https://sandbox.bluebutton.cms.gov/v1/fhir/Patient/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (patientReturnedData) {
            localStorage.setItem('patientData', JSON.stringify(patientReturnedData));
            return JSON.stringify(patientReturnedData);
        }));
    };
    CMSService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CMSService);
    return CMSService;
}());



/***/ }),

/***/ "./src/app/routes/login-services/va.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/login-services/va.service.ts ***!
  \*****************************************************/
/*! exports provided: VAService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAService", function() { return VAService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var options = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
};
var VAService = /** @class */ (function () {
    function VAService(http, router) {
        this.http = http;
        this.router = router;
        this.clientId = '0oa7hyx727mtpNfKi2p7';
        this.clientSecret = 'VcN_x8AIuFEnZ8oTHUMd3UnzsTeYp3XWUKscToWy';
        this.accessToken = '';
    }
    // get access token and related information from localStorage
    VAService.prototype.getLocalStorageToken = function () {
        return JSON.parse(localStorage.getItem('vaData'));
    };
    // we get the access token from this function.
    VAService.prototype.getToken = function (username, code, state) {
        options.headers = options.headers.set('Content-Type', 'application/x-www-form-urlencoded');
        var idSecretEncode = btoa(this.clientId + ":" + this.clientSecret);
        options.headers = options.headers.set('Authorization', "Basic " + idSecretEncode);
        var accessTokenAppend = new URLSearchParams();
        accessTokenAppend.set('grant_type', 'authorization_code');
        accessTokenAppend.set('code', code);
        accessTokenAppend.set('state', state);
        accessTokenAppend.set('redirect_uri', 'http://localhost:4200/app');
        var queryInputs = accessTokenAppend.toString();
        return this.http.post('/oauth2/token', queryInputs, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            localStorage.setItem('vaData', JSON.stringify(data));
            options.headers = options.headers.set('Authorization', "Bearer " + data.access_token);
            return data;
        }, function (err) { }));
    };
    // the patient file contains information on patient demographics
    VAService.prototype.patientInfo = function (patientId) {
        var patientParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "" + patientId });
        options['params'] = patientParams;
        options.headers = options.headers.set('Authorization', "Bearer " + this.accessToken);
        return this.http.get("https://sandbox-api.va.gov/services/fhir/v0/argonaut/data-query/Patient/" + patientId, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (patientReturnedData) {
            return patientReturnedData;
        }));
    };
    // the conditions file contains information about conditions
    VAService.prototype.conditionInfo = function (patientId) {
        var patientParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "" + patientId });
        options['params'] = patientParams;
        return this.http.get('https://sandbox-api.va.gov/services/fhir/v0/dstu2/Condition?_count=50&patient=' + patientId, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (conditionReturnedData) {
            console.log(conditionReturnedData);
            return conditionReturnedData;
        }));
    };
    VAService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VAService);
    return VAService;
}());



/***/ }),

/***/ "./src/app/routes/team/team.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/team/team.component.ts ***!
  \***********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        this.contributors = ["Gil Alterovitz, PhD", "Jeremy Warner, MD, MS", "Varun Suraj", "Makiah Bennett", "Ishaan Prasad", "Monica Arniella", "Alicia Beeghly-Fadiel, PhD"];
        this.emailDisplay = "(Click to reveal)";
    }
    TeamComponent.prototype.updateEmail = function () {
        this.emailDisplay = "ga@alum.mit.edu";
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "team",
            template: "\n    <div style=\"overflow: hidden\">\n      <div class=\"cardContent\" *ngFor=\"let contributor of contributors\" style=\"margin: 15px 8px; width: calc(50% - 16px); min-width: 300px;\">\n        <div style=\"width: 100%;\">\n          <h2 class=\"thick\">{{contributor}}</h2>\n        </div>\n      </div>\n    </div>\n    \n    <hr>\n    \n    <div>\n      <div class=\"cardContent\" style=\"margin: 8px; width: calc(100% - 16px);\">\n        <div style=\"width: 100%;\">\n          <h2 class=\"thick\">Questions?  You can reach us at <a href=\"javascript:void(0)\" (click)=\"updateEmail()\">{{emailDisplay}}</a></h2>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["    \n    .cardContent {\n      float: left;\n    }\n\n    .cardImage {\n      float: left;\n      width: 30%;\n      min-width: 150px;\n      max-width: 100%;\n    }\n\n    .cardImage>div, .cardContent>div {\n      float: left;\n      background-color: white;\n      box-shadow: 1px 3px #d5d5d5;\n      border: 1px solid #d1d1d1;\n      padding: 15px;\n      text-align: center;\n    }\n\n    .cardImage img {\n      width: 100%;\n      height: auto;\n    }\n  "]
        })
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/smart-initialization/smart-launch.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/smart-initialization/smart-launch.component.ts ***!
  \****************************************************************/
/*! exports provided: SMARTLaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTLaunchComponent", function() { return SMARTLaunchComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smart_reference_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart-reference.service */ "./src/app/smart-initialization/smart-reference.service.ts");
/**
 * Since the SMART on FHIR framework is not built to work with Angular2, this component controls the
 * redirects involved in authentication for fhir-client.js.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Modules required to access URL parameters.



var SMARTLaunchComponent = /** @class */ (function () {
    function SMARTLaunchComponent(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.requiredParametersSupplied = false;
        this.clientID = "";
        this.scopes = "launch patient/*.* openid profile";
        this.authorizeApp = function () {
            _smart_reference_service__WEBPACK_IMPORTED_MODULE_2__["SMARTModule"].oauth2.authorize({
                client_id: _this.clientID,
                scope: _this.scopes,
                redirect_uri: window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/token-reception"
            });
        };
    }
    SMARTLaunchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params["iss"] && params["launch"]) {
                _this.requiredParametersSupplied = true;
            }
            else {
                _this.requiredParametersSupplied = false;
                setTimeout(function () { _this.router.navigate(["/app"]); }, 3000); // Wait a second before redirecting.
            }
        });
    };
    SMARTLaunchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "smart-launch",
            template: "\n    <div *ngIf=\"requiredParametersSupplied === true\">\n      <h3 class=\"display-3\" style=\"width: 100%; text-align: center;\">Enter Authorization Info</h3>\n      <div class=\"inputPanel\">\n        <label class=\"thick\">Client ID: </label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"clientID\" placeholder=\"Ex: 1e7af332-b27a-4de2-8c51-728ae3ed25c2\">\n      </div>\n      <div class=\"inputPanel\">\n        <label class=\"thick\">Scopes: </label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"scopes\">\n      </div>\n      <br>\n      <button (click)=\"authorizeApp()\" class=\"btn btn-success\" style=\"margin: 20px 5%; width: 90%; height: 60px;\">Authorize</button>\n    </div>\n    \n    <p *ngIf=\"requiredParametersSupplied === false\">ISS and Launch parameters were not supplied!  Redirecting in 3 seconds...</p>\n  ",
            styles: ["\n    div {\n      padding: 10px;\n      overflow: hidden;\n    }\n    \n    div * {\n      float: left;\n    }\n    \n    .inputPanel {\n      width: 100%;\n    }\n    \n    .inputPanel>* {\n      float: left;\n    }\n\n    label {\n      width: 150px;\n      font-size: 25px;\n      margin: 0;\n    }\n    \n    input {\n      width: calc(90% - 152px);\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], SMARTLaunchComponent);
    return SMARTLaunchComponent;
}());



/***/ }),

/***/ "./src/app/smart-initialization/smart-reference.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/smart-initialization/smart-reference.service.ts ***!
  \*****************************************************************/
/*! exports provided: SMARTModule, SMARTClient, SMARTReferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTModule", function() { return SMARTModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTClient", function() { return SMARTClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTReferenceService", function() { return SMARTReferenceService; });
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/**
 * Since SMART is a JS library, this is a utility class used to make it easier to work with the JS library.
 * By declaring FHIR below, the library is referenced from .angular-cli.json, and functions can be used
 * directly from the library.  In order to get this to work like global variables, I found that the best way
 * would be to use an Observable, a backend framework of Angular known as RxJS.
 * https://stackoverflow.com/questions/36715918/how-to-define-global-variables-in-angular-2-in-a-way-that-i-
 * can-use-them-for-pro
 * https://stackoverflow.com/questions/34714462/updating-variable-changes-in-components-from-a-service-with-angular2
 */

var SMARTModule = FHIR;
// Make sure to use BehaviorSubject over Subject, since it provides the current value of the object on subscribe()
var SMARTClient = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
var SMARTReferenceService = /** @class */ (function () {
    function SMARTReferenceService() {
    }
    SMARTReferenceService.prototype.ready = function () {
        SMARTModule.oauth2.ready(function (smart) {
            SMARTClient.next(smart);
        });
    };
    return SMARTReferenceService;
}());



/***/ }),

/***/ "./src/app/smart-initialization/smart-token-reception.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/smart-initialization/smart-token-reception.component.ts ***!
  \*************************************************************************/
/*! exports provided: SMARTTokenReceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTTokenReceptionComponent", function() { return SMARTTokenReceptionComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smart_reference_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart-reference.service */ "./src/app/smart-initialization/smart-reference.service.ts");
/**
 * After being directed here as per the redirect_uri in smart-launch, this route receives the token
 * data and then applies the token as necessary.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Modules required to access URL parameters.



var SMARTTokenReceptionComponent = /** @class */ (function () {
    function SMARTTokenReceptionComponent(smartReferenceService, router) {
        this.smartReferenceService = smartReferenceService;
        this.router = router;
        this.state = "Receiving token...";
    }
    SMARTTokenReceptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set up the client reference.
        this.smartReferenceService.ready();
        // Redirect to the disease selection.
        setTimeout(function () { return _this.router.navigate(["/app"]); }, 100);
    };
    SMARTTokenReceptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "smart-launch",
            template: "\n    <p>{{state}}</p>\n  "
        }),
        __metadata("design:paramtypes", [_smart_reference_service__WEBPACK_IMPORTED_MODULE_2__["SMARTReferenceService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], SMARTTokenReceptionComponent);
    return SMARTTokenReceptionComponent;
}());



/***/ }),

/***/ "./src/app/universal-components/github-fork-us.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/universal-components/github-fork-us.component.ts ***!
  \******************************************************************/
/*! exports provided: GithubForkUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubForkUsComponent", function() { return GithubForkUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GithubForkUsComponent = /** @class */ (function () {
    function GithubForkUsComponent() {
    }
    GithubForkUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "github-fork-us",
            template: "\n    <div>\n      <a target=\"_blank\" href=\"https://www.github.com/smart-cancer-navigator/Application\">\n        <img class=\"hvr-grow\" src=\"/assets/github-icon.png\">\n      </a>\n    </div>\n  ",
            styles: ["\n    div {\n      display: block;\n      position: fixed;\n      right: 5px;\n      bottom: 5px;\n      z-index: 50;\n      //background-color: black;\n      border-radius: 25px;\n    }\n    \n    * {\n      height: 60px;\n      width: 60px;\n    }\n\n    .hvr-grow {\n      display: inline-block;\n      vertical-align: middle;\n      transform: translateZ(0);\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n      backface-visibility: hidden;\n      -moz-osx-font-smoothing: grayscale;\n      transition-duration: 0.3s;\n      transition-property: transform;\n    }\n\n    .hvr-grow:hover, .hvr-grow:focus, hvr-grow:active {\n      transform: scale(1.1);\n    }\n\n  "]
        })
    ], GithubForkUsComponent);
    return GithubForkUsComponent;
}());



/***/ }),

/***/ "./src/app/universal-components/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/universal-components/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.currentRoute = "/app";
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentRoute = val.urlAfterRedirects;
            }
        });
    }
    HeaderComponent.prototype.routeTo = function (routeLoc) {
        this.router.navigate([routeLoc]);
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        location.reload();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "header",
            template: "\n    <div id=\"greyBackground\"></div>\n\n    <div id=\"container\">\n      <img src=\"/assets/logo.png\">\n      <button (click)=\"logout()\">Logout</button>\n      <div id=\"routingOptions\">\n        <div class=\"routeOption {{currentRoute === '/home' ? 'selectedRoute' : 'unselectedRoute'}}\" (click)=\"routeTo('home')\">\n          <p>Home</p>\n        </div>\n        <div class=\"routeOption {{currentRoute === '/team' ? 'selectedRoute' : 'unselectedRoute'}}\" (click)=\"routeTo('team')\">\n          <p>Team</p>\n        </div>\n        <div class=\"routeOption {{currentRoute === '/ehr-login' ? 'selectedRoute' : 'unselectedRoute'}}\" (click)=\"routeTo('ehr-login')\">\n          <p>EHR Login</p>\n        </div>\n        <div class=\"routeOption {{currentRoute === '/db-analysis' ? 'selectedRoute' : 'unselectedRoute'}}\" (click)=\"routeTo('db-analysis')\">\n          <p>DB Analysis</p>\n        </div>\n        <div style=\"width: 1px; height: 76px; float: left; background-color: #a4a4a4; margin: 2px 3px;\">\n        </div>\n        <div class=\"routeOption {{currentRoute === '/app' ? 'selectedRoute' : 'unselectedRoute'}}\"\n             (click)=\"routeTo('app');\">\n          <p>Try It Out!</p>\n        </div>\n        <div class=\"routeOption {{currentRoute === '/cancer' ? 'selectedRoute' : 'unselectedRoute'}}\"\n             (click)=\"routeTo('cancer');\">\n          <p>COVID19-Cancer</p>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    p {\n      margin: 0;\n    }\n\n    #greyBackground {\n      width: 100vw;\n      height: 100vh;\n      background-color: #eeeeee;\n      position: fixed;\n      z-index: -50;\n    }\n\n    #container {\n      background-color: white;\n      width: 100%;\n\n      padding-left: 30px;\n\n      box-shadow: 0 2px 4px #b4b4b4;\n\n      overflow: hidden;\n    }\n\n    #container img {\n      height: 40px;\n      width: auto;\n      margin-top: 20px;\n      margin-bottom: 20px;\n      float: left;\n    }\n\n    #routingOptions {\n      min-width: 500px;\n      height: 100%;\n      overflow: hidden;\n      float: right;\n    }\n\n    .routeOption {\n      float: left;\n      color: #2f2f2f;\n\n      text-align: center;\n      height: 60px;\n      width: calc(100% / 5 - 8px); /* +1 px for each for border div */\n      margin: 10px 3px;\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      cursor: default;\n      border-radius: 5px;\n    }\n\n    .unselectedRoute {\n      background-color: white;\n    }\n\n    .unselectedRoute:hover {\n      background-color: #dbdbdb;\n    }\n\n    .unselectedRoute:active {\n      background-color: #cbcbcb;\n    }\n\n    .selectedRoute {\n      background-color: #27384f;\n      color: white;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/universal-components/logout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/universal-components/logout.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "logout",
            template: "\n    <div>\n      <a target=\"_blank\" href=\"https://www.github.com/smart-cancer-navigator/Application\">\n        <img class=\"hvr-grow\" src=\"/assets/github-icon.png\">\n      </a>\n    </div>\n  ",
            styles: ["\n    div {\n      display: block;\n      position: fixed;\n      left: 5px;\n      bottom: 5px;\n      z-index: 50;\n      //background-color: black;\n      border-radius: 25px;\n    }\n    \n    * {\n      height: 60px;\n      width: 60px;\n    }\n\n    .hvr-grow {\n      display: inline-block;\n      vertical-align: middle;\n      transform: translateZ(0);\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n      backface-visibility: hidden;\n      -moz-osx-font-smoothing: grayscale;\n      transition-duration: 0.3s;\n      transition-property: transform;\n    }\n\n    .hvr-grow:hover, .hvr-grow:focus, hvr-grow:active {\n      transform: scale(1.1);\n    }\n\n  "]
        })
    ], LogoutComponent);
    return LogoutComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ssrinivasan/Desktop/ALL PRIMES/2020/covid/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
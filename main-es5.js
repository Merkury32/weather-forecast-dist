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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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

    var routes = [];

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


    var _daily_daily_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./daily/daily.component */
    "./src/app/daily/daily.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Pogoda';
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-daily");
        }
      },
      directives: [_daily_daily_component__WEBPACK_IMPORTED_MODULE_1__["DailyComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _daily_daily_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./daily/daily.component */
    "./src/app/daily/daily.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _daily_daily_component__WEBPACK_IMPORTED_MODULE_4__["DailyComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _daily_daily_component__WEBPACK_IMPORTED_MODULE_4__["DailyComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/daily/daily.component.ts":
  /*!******************************************!*\
    !*** ./src/app/daily/daily.component.ts ***!
    \******************************************/

  /*! exports provided: DailyComponent */

  /***/
  function srcAppDailyDailyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DailyComponent", function () {
      return DailyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/weather.service */
    "./src/app/service/weather.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DailyComponent_div_14_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dzisiaj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DailyComponent_div_14_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.days[ctx_r4.daysNumbers[i_r2]]);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "daily-one-day-div-last": a0,
        "daily-one-day-div": a1
      };
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function DailyComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DailyComponent_div_14_p_4_Template, 2, 0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DailyComponent_div_14_p_5_Template, 2, 1, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, i_r2 == 7, i_r2 != 9));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, "wi wi-owm-" + ctx_r0.dailyWeather[i_r2]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 != 0);
      }
    }

    var DailyComponent = /*#__PURE__*/function () {
      function DailyComponent(weatherService) {
        _classCallCheck(this, DailyComponent);

        this.weatherService = weatherService;
        this.dailyTemperature = [];
        this.dailyWeather = [];
        this.daysNumbers = [];
        this.days = [];
      }

      _createClass(DailyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log(document.documentElement.clientHeight);

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (data) {
              _this.showWeather(data.coords.latitude, data.coords.longitude);

              _this.weatherService.getCity(data.coords.latitude, data.coords.longitude).subscribe(function (data) {
                _this.currentCity = data.locality;
              });
            });
          }
        }
      }, {
        key: "showWeather",
        value: function showWeather(latitude, longitude) {
          var _this2 = this;

          this.weatherService.getWeather(latitude, longitude).subscribe(function (data) {
            console.log(data);
            var sunrise = data[4].sunrise;
            var sunset = data[4].sunset;

            _this2.changeBackground(sunrise, sunset);

            _this2.currentTemperature = Math.round(data[4].temp) + ' °C';
            _this2.currentFeelsTemperature = Math.round(data[4].feels_like) + ' °C';
            _this2.currentWeather = data[4].weather[0].description;
            _this2.currentWeather = _this2.currentWeather.charAt(0).toUpperCase() + _this2.currentWeather.slice(1);

            for (var i = 0; i < 8; i++) {
              _this2.dailyTemperature.push(Math.round(data[7][i].temp.day) + '° / ' + (Math.round(data[7][i].temp.night) + '°'));

              _this2.dailyWeather.push(data[7][i].weather[0].id);

              console.log(_this2.dailyWeather);
              console.log(_this2.dailyTemperature);
            }

            var date = new Date().getDay();

            _this2.days.push('Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota');

            console.log(_this2.days);

            for (var j = date; j <= 6; j++) {
              _this2.daysNumbers.push(j);
            }

            for (var k = 0; k <= date; k++) {
              _this2.daysNumbers.push(k);
            }

            console.log(_this2.daysNumbers);
          });
          this.currentTime = this.weatherService.getDate();
        }
      }, {
        key: "changeBackground",
        value: function changeBackground(sunrise, sunset) {
          var currentUTC = Math.floor(new Date().getTime() / 1000);

          if (currentUTC > sunrise) {
            document.body.className = 'body-day';
          } else {
            document.body.className = 'body-night';
          }
        }
      }]);

      return DailyComponent;
    }();

    DailyComponent.ɵfac = function DailyComponent_Factory(t) {
      return new (t || DailyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_weather_service__WEBPACK_IMPORTED_MODULE_1__["weatherService"]));
    };

    DailyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DailyComponent,
      selectors: [["app-daily"]],
      decls: 15,
      vars: 6,
      consts: [[1, "current-weather-div"], [1, "current-location-header"], [1, "current-time-header"], [1, "current-temperature-header"], [1, "current-feelsTemperature-header"], [1, "current-line-breaker"], [1, "current-weather-header"], [1, "daily-weather-div"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [4, "ngIf"]],
      template: function DailyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "----------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DailyComponent_div_14_Template, 6, 10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentTemperature);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Odczuwalne ", ctx.currentFeelsTemperature, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentWeather);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dailyTemperature);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".current-weather-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #ffffff;\n}\n\n.current-location-header {\n  margin: 47px 0 0 0;\n  font-size: 32px;\n  font-weight: 400;\n}\n\n.current-time-header {\n  margin: 3px 0 0 0;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.current-temperature-header {\n  margin: 22% 0 0 0;\n  font-size: 58px;\n}\n\n.current-feelsTemperature-header {\n  margin: 2px 0 0 0;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.current-line-breaker {\n  margin: 5px 0 0 0;\n}\n\n.current-weather-header {\n  margin: 5px 0 0 0;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.daily-one-day-div {\n  flex: 0 0 auto;\n  margin: 0px 15px;\n}\n\n.daily-one-day-div-last {\n  padding-right: 30px;\n}\n\n.daily-weather-div::-webkit-scrollbar {\n  display: none;\n}\n\ni {\n  font-size: 38px;\n}\n\n@media only screen and (min-height: 400px) {\n  .body-day {\n    background: url('Pogoda-dzien.svg') no-repeat center center fixed;\n    background-size: cover;\n  }\n\n  .body-night {\n    background: url('Pogoda-noc.svg') no-repeat center center fixed;\n    background-size: cover;\n  }\n\n  .daily-weather-div {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    overflow-x: auto;\n    color: #ffffff;\n    margin: 50% 5px 0 5px;\n    padding-left: 20px;\n    text-align: center;\n  }\n}\n\n@media only screen and (min-height: 700px) {\n  .daily-weather-div {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    overflow-x: auto;\n    color: #ffffff;\n    margin: 58% 5px 0 0px;\n    padding-left: 20px;\n    text-align: center;\n  }\n}\n\n@media only screen and (min-height: 740px) {\n  .body-day {\n    background: url('Pogoda-dzien2.svg') no-repeat center center fixed;\n    background-size: cover;\n  }\n\n  .body-night {\n    background: url('Pogoda-noc2.svg') no-repeat center center fixed;\n    background-size: cover;\n  }\n\n  .daily-weather-div {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    overflow-x: auto;\n    color: #ffffff;\n    margin: 65% 5px 0 0px;\n    padding-left: 20px;\n    text-align: center;\n  }\n\n  .current-temperature-header {\n    margin: 38% 0 0 0;\n    font-size: 58px;\n  }\n\n  .daily-one-day-div {\n    flex: 0 0 auto;\n    margin: 0px 15px;\n    font-size: 18px;\n  }\n}\n\n@media only screen and (min-height: 850px) {\n  .daily-weather-div {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    overflow-x: auto;\n    color: #ffffff;\n    margin: 71% 5px 0 0px;\n    padding-left: 20px;\n    text-align: center;\n  }\n\n  .current-temperature-header {\n    margin: 42% 0 0 0;\n    font-size: 58px;\n  }\n\n  .daily-one-day-div {\n    flex: 0 0 auto;\n    margin: 0px 15px;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFpbHkvUDpcXHByb2pla3R5XFx3ZWF0aGVyLWZvcmVjYXN0L3NyY1xcYXBwXFxkYWlseVxcZGFpbHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RhaWx5L2RhaWx5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxpRUFBQTtJQUtBLHNCQUFBO0VDQUY7O0VER0E7SUFDRSwrREFBQTtJQUtBLHNCQUFBO0VDREY7O0VESUE7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDRkY7QUFDRjs7QURLQTtFQUNFO0lBQ0Usa0VBQUE7SUFLQSxzQkFBQTtFQ0pGOztFRE9BO0lBQ0UsZ0VBQUE7SUFLQSxzQkFBQTtFQ0xGOztFRFFBO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNMRjs7RURRQTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQ0xGOztFRFFBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQ0xGO0FBQ0Y7O0FEUUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDTkY7O0VEU0E7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUNORjs7RURTQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUNORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFpbHkvZGFpbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVudC13ZWF0aGVyLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jdXJyZW50LWxvY2F0aW9uLWhlYWRlciB7XHJcbiAgbWFyZ2luOiA0N3B4IDAgMCAwO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY3VycmVudC10aW1lLWhlYWRlciB7XHJcbiAgbWFyZ2luOiAzcHggMCAwIDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5jdXJyZW50LXRlbXBlcmF0dXJlLWhlYWRlciB7XHJcbiAgbWFyZ2luOiAyMiUgMCAwIDA7XHJcbiAgZm9udC1zaXplOiA1OHB4O1xyXG59XHJcblxyXG4uY3VycmVudC1mZWVsc1RlbXBlcmF0dXJlLWhlYWRlciB7XHJcbiAgbWFyZ2luOiAycHggMCAwIDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5jdXJyZW50LWxpbmUtYnJlYWtlciB7XHJcbiAgbWFyZ2luOiA1cHggMCAwIDA7XHJcbn1cclxuXHJcbi5jdXJyZW50LXdlYXRoZXItaGVhZGVyIHtcclxuICBtYXJnaW46IDVweCAwIDAgMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmRhaWx5LW9uZS1kYXktZGl2IHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBtYXJnaW46IDBweCAxNXB4O1xyXG59XHJcblxyXG4uZGFpbHktb25lLWRheS1kaXYtbGFzdCB7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmRhaWx5LXdlYXRoZXItZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaSB7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA0MDBweCkge1xyXG4gIC5ib2R5LWRheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvc3ZnL1BvZ29kYS1kemllbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJcclxuICAgICAgZml4ZWQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5ib2R5LW5pZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9zdmcvUG9nb2RhLW5vYy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJcclxuICAgICAgZml4ZWQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5kYWlseS13ZWF0aGVyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDUwJSA1cHggMCA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3MDBweCkge1xyXG4gIC5kYWlseS13ZWF0aGVyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDU4JSA1cHggMCAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3NDBweCkge1xyXG4gIC5ib2R5LWRheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvc3ZnL1BvZ29kYS1kemllbjIuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXJcclxuICAgICAgY2VudGVyIGZpeGVkO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuYm9keS1uaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvc3ZnL1BvZ29kYS1ub2MyLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlclxyXG4gICAgICBmaXhlZDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmRhaWx5LXdlYXRoZXItZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogNjUlIDVweCAwIDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50LXRlbXBlcmF0dXJlLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDM4JSAwIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogNThweDtcclxuICB9XHJcblxyXG4gIC5kYWlseS1vbmUtZGF5LWRpdiB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4NTBweCkge1xyXG4gIC5kYWlseS13ZWF0aGVyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDcxJSA1cHggMCAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY3VycmVudC10ZW1wZXJhdHVyZS1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiA0MiUgMCAwIDA7XHJcbiAgICBmb250LXNpemU6IDU4cHg7XHJcbiAgfVxyXG5cclxuICAuZGFpbHktb25lLWRheS1kaXYge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBtYXJnaW46IDBweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iLCIuY3VycmVudC13ZWF0aGVyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY3VycmVudC1sb2NhdGlvbi1oZWFkZXIge1xuICBtYXJnaW46IDQ3cHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmN1cnJlbnQtdGltZS1oZWFkZXIge1xuICBtYXJnaW46IDNweCAwIDAgMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY3VycmVudC10ZW1wZXJhdHVyZS1oZWFkZXIge1xuICBtYXJnaW46IDIyJSAwIDAgMDtcbiAgZm9udC1zaXplOiA1OHB4O1xufVxuXG4uY3VycmVudC1mZWVsc1RlbXBlcmF0dXJlLWhlYWRlciB7XG4gIG1hcmdpbjogMnB4IDAgMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jdXJyZW50LWxpbmUtYnJlYWtlciB7XG4gIG1hcmdpbjogNXB4IDAgMCAwO1xufVxuXG4uY3VycmVudC13ZWF0aGVyLWhlYWRlciB7XG4gIG1hcmdpbjogNXB4IDAgMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5kYWlseS1vbmUtZGF5LWRpdiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuXG4uZGFpbHktb25lLWRheS1kaXYtbGFzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5kYWlseS13ZWF0aGVyLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA0MDBweCkge1xuICAuYm9keS1kYXkge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9zdmcvUG9nb2RhLWR6aWVuLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5ib2R5LW5pZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvc3ZnL1BvZ29kYS1ub2Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLmRhaWx5LXdlYXRoZXItZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogNTAlIDVweCAwIDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3MDBweCkge1xuICAuZGFpbHktd2VhdGhlci1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiA1OCUgNXB4IDAgMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDc0MHB4KSB7XG4gIC5ib2R5LWRheSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3N2Zy9Qb2dvZGEtZHppZW4yLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5ib2R5LW5pZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvc3ZnL1BvZ29kYS1ub2MyLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5kYWlseS13ZWF0aGVyLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDY1JSA1cHggMCAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jdXJyZW50LXRlbXBlcmF0dXJlLWhlYWRlciB7XG4gICAgbWFyZ2luOiAzOCUgMCAwIDA7XG4gICAgZm9udC1zaXplOiA1OHB4O1xuICB9XG5cbiAgLmRhaWx5LW9uZS1kYXktZGl2IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBtYXJnaW46IDBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODUwcHgpIHtcbiAgLmRhaWx5LXdlYXRoZXItZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogNzElIDVweCAwIDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmN1cnJlbnQtdGVtcGVyYXR1cmUtaGVhZGVyIHtcbiAgICBtYXJnaW46IDQyJSAwIDAgMDtcbiAgICBmb250LXNpemU6IDU4cHg7XG4gIH1cblxuICAuZGFpbHktb25lLWRheS1kaXYge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIG1hcmdpbjogMHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-daily',
          templateUrl: './daily.component.html',
          styleUrls: ['./daily.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _service_weather_service__WEBPACK_IMPORTED_MODULE_1__["weatherService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/weather.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/weather.service.ts ***!
    \********************************************/

  /*! exports provided: weatherService */

  /***/
  function srcAppServiceWeatherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "weatherService", function () {
      return weatherService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var weatherService = /*#__PURE__*/function () {
      function weatherService(http) {
        _classCallCheck(this, weatherService);

        this.http = http;
      }

      _createClass(weatherService, [{
        key: "getWeather",
        value: function getWeather(latitude, longitude) {
          return this.http.get( //52.0887
          //17.01506
          "https://api.openweathermap.org/data/2.5/onecall?lat=".concat(latitude, "&lon=").concat(longitude, "&units=metric&lang=pl&appid=").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].weatherApiKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (responseData) {
            var postsArray = [];

            for (var key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postsArray.push(Object.assign(Object.assign({}, responseData[key]), {
                  id: key
                }));
              }
            }

            return postsArray;
          }));
        }
      }, {
        key: "getDate",
        value: function getDate() {
          var date = new Date();
          var day = date.getDate();
          var month = date.getMonth();
          var year = date.getFullYear();
          var months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
          var dateString = "".concat(day, " ").concat(months[month], " ").concat(year);
          return dateString;
        }
      }, {
        key: "getCity",
        value: function getCity(latitude, longitude) {
          return this.http.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(latitude, "&longitude=").concat(longitude, "&localityLanguage=pl"));
        }
      }]);

      return weatherService;
    }();

    weatherService.ɵfac = function weatherService_Factory(t) {
      return new (t || weatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    weatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: weatherService,
      factory: weatherService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](weatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
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
    });

    var environment = {
      production: false,
      weatherApiKey: 'bc1f103d0825160fc4ecba0adc35009a'
    };
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
    /*! P:\projekty\weather-forecast\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
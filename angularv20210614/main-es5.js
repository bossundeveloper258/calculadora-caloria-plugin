function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal-compatibility */
    "./node_modules/rxjs/_esm2015/internal-compatibility/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _utils_diacriticRegex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../utils/diacriticRegex */
    "./src/utils/diacriticRegex.ts");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_7__);

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;

        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
          this.products = fetch('./assets/products.json').then(function (response) {
            return response.json();
          }).then(function (products) {
            return products.map(function (product, index) {
              return Object.assign({
                id: index + 1
              }, product);
            });
          });
        }
      }

      _createClass(ApiService, [{
        key: "getProducts",
        value: function getProducts() {
          var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__["fromPromise"])(this.products).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (products) {
              if (search) {
                var regex = Object(_utils_diacriticRegex__WEBPACK_IMPORTED_MODULE_6__["toRegex"])({
                  flags: 'i'
                })(search);
                products = products.filter(function (x) {
                  return x.description.search(regex) !== -1;
                });
              }

              if (limit) {
                products = products.slice(0, limit);
              }

              return products.sort(function (a, b) {
                return a.description.localeCompare(b.description);
              });
            }));
          }

          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('action', 'get_products').set('search', search).set('limit', String(limit));
          return this.http.post('/wp-admin/admin-ajax.php', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          });
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            var userDataJSON = localStorage.getItem('userData');
            var toReturn = null;

            if (userDataJSON) {
              toReturn = JSON.parse(userDataJSON);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(toReturn);
          }

          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('action', 'get_user_data');
          return this.http.post('/wp-admin/admin-ajax.php', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          });
        }
      }, {
        key: "saveUserData",
        value: function saveUserData(userData) {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(localStorage.setItem('userData', JSON.stringify(userData)));
          }

          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('action', 'save_user_data');
          Object.keys(userData).forEach(function (key) {
            body = body.set("userData[".concat(key, "]"), userData[key]);
          });
          return this.http.post('/wp-admin/admin-ajax.php', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          });
        }
      }, {
        key: "getDiet",
        value: function getDiet(date) {
          var _this = this;

          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            var dietsJSON = localStorage.getItem('diets');
            var toReturn = null;

            if (dietsJSON) {
              var diets = JSON.parse(dietsJSON);
              toReturn = diets.find(function (x) {
                return x.date === date.format('YYYY-MM-DD');
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(toReturn);
          }

          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('action', 'get_date_diet').set('date', date.format('YYYY-MM-DD'));
          return this.http.post('/wp-admin/admin-ajax.php', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (serverDiet) {
            return _this.serverDietToIDiet(serverDiet);
          }));
        }
      }, {
        key: "getLocalStorageDiets",
        value: function getLocalStorageDiets() {
          var dietsJSON = localStorage.getItem('diets');
          var toReturn = [];

          if (dietsJSON) {
            toReturn = JSON.parse(dietsJSON);
          }

          return toReturn;
        }
      }, {
        key: "saveLocalStorageDiets",
        value: function saveLocalStorageDiets(diets) {
          localStorage.setItem('diets', JSON.stringify(diets));
        }
      }, {
        key: "toSaveDiet",
        value: function toSaveDiet(diet) {
          var serverDiet = this.dietToServerDiet(diet);
          return Object.assign(Object.assign({}, serverDiet), {
            meals: serverDiet.meals.map(function (meal) {
              return Object.assign(Object.assign({}, meal), {
                productLines: meal.productLines.map(function (productLine) {
                  var id = productLine.id,
                      product = productLine.product,
                      amount = productLine.amount,
                      createdAt = productLine.createdAt;
                  return {
                    id: id,
                    amount: amount,
                    product: {
                      id: product ? product.id : null
                    },
                    createdAt: createdAt
                  };
                })
              });
            })
          });
        }
      }, {
        key: "dietToServerDiet",
        value: function dietToServerDiet(diet) {
          return {
            id: diet.id,
            date: diet.date,
            meals: Object.keys(diet.meals).map(function (key) {
              var currentMeal = diet.meals[key];
              return {
                id: currentMeal.id,
                description: currentMeal.description,
                createdAt: currentMeal.createdAt,
                productLines: Object.keys(currentMeal.productLines).map(function (plKey) {
                  return currentMeal.productLines[plKey];
                })
              };
            })
          };
        }
      }, {
        key: "serverDietToIDiet",
        value: function serverDietToIDiet(diet) {
          if (!diet) {
            return null;
          }

          return {
            id: diet.id,
            date: diet.date,
            meals: diet.meals.reduce(function (mealDict, meal) {
              mealDict[meal.id] = {
                id: meal.id,
                description: meal.description,
                createdAt: meal.createdAt,
                productLines: meal.productLines.reduce(function (previousValue, currentValue) {
                  previousValue[currentValue.id] = currentValue;
                  return previousValue;
                }, {})
              };
              return mealDict;
            }, {})
          };
        }
      }, {
        key: "saveDiet",
        value: function saveDiet(diet) {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            var diets = this.getLocalStorageDiets();
            var foundDietIdx = diets.findIndex(function (x) {
              return x.date === diet.date;
            });

            if (foundDietIdx !== -1) {
              var copy = diets.slice();
              copy[foundDietIdx] = diet;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.saveLocalStorageDiets(copy));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.saveLocalStorageDiets([].concat(_toConsumableArray(diets), [diet])));
          } // we need to flatten the objects sent to the server....cause we can't send JSON ...for some reason


          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('action', 'save_date_diet').set('diet', JSON.stringify(this.toSaveDiet(diet)));
          return this.http.post('/wp-admin/admin-ajax.php', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          });
        }
      }, {
        key: "getPDF",
        value: function getPDF(date) {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }

          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('action', 'get_pdf').set('date', date);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
          return this.http.post("/wp-admin/admin-ajax.php?cache=".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])()), body.toString(), {
            headers: headers,
            responseType: 'blob'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (blob) {
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.style.display = 'none';
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'dietario.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
          }));
        }
      }, {
        key: "getDietsbyDate",
        value: function getDietsbyDate(year, month) {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            var dietsJSON = localStorage.getItem('diets');
            var toReturn = null; // if ( dietsJSON ) {
            //   const diets: IDiet[] = JSON.parse(dietsJSON);
            //   toReturn = diets.find(x => x.date === date.format('YYYY-MM-DD'));
            // }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(toReturn);
          }

          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('action', 'get_diets_date').set('month', year.toString()).set('year', month.toString());
          return this.http.post('/wp-admin/admin-ajax.php', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.??fac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    ApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
      token: ApiService,
      factory: ApiService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
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

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jspdf-autotable */
    "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _utils_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../utils/calculator */
    "./src/utils/calculator.ts");
    /* harmony import */


    var _product_info_modal_product_info_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./product-info-modal/product-info-modal.component */
    "./src/app/product-info-modal/product-info-modal.component.ts");
    /* harmony import */


    var _product_search_select_modal_product_search_select_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product-search-select-modal/product-search-select-modal.component */
    "./src/app/product-search-select-modal/product-search-select-modal.component.ts");
    /* harmony import */


    var _store_app_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/app.actions */
    "./src/app/store/app.actions.ts");
    /* harmony import */


    var _store_app_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./store/app.selectors */
    "./src/app/store/app.selectors.ts");
    /* harmony import */


    var _store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./store/diet/diet.actions */
    "./src/app/store/diet/diet.actions.ts");
    /* harmony import */


    var _store_diet_diet_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./store/diet/diet.selectors */
    "./src/app/store/diet/diet.selectors.ts");
    /* harmony import */


    var _store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./store/userData/userData.actions */
    "./src/app/store/userData/userData.actions.ts");
    /* harmony import */


    var _store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./store/userData/userData.selectors */
    "./src/app/store/userData/userData.selectors.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_17___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-moment */
    "./node_modules/ngx-moment/__ivy_ngcc__/fesm2015/ngx-moment.js");
    /* harmony import */


    var _sort_by_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./sort-by.pipe */
    "./src/app/sort-by.pipe.ts"); // jquery


    function AppComponent_div_10_div_136_div_6_mwl_calendar_month_view_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-month-view", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dayClicked", function AppComponent_div_10_div_136_div_6_mwl_calendar_month_view_15_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          return ctx_r27.dayClicked($event.day);
        })("eventClicked", function AppComponent_div_10_div_136_div_6_mwl_calendar_month_view_15_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          return ctx_r29.handleEvent("Clicked", $event.event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r26.viewDate)("events", ctx_r26.events)("refresh", ctx_r26.refresh)("activeDayIsOpen", ctx_r26.activeDayIsOpen);
      }
    }

    function AppComponent_div_10_div_136_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function AppComponent_div_10_div_136_div_6_Template_div_viewDateChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r30.viewDate = $event;
        })("viewDateChange", function AppComponent_div_10_div_136_div_6_Template_div_viewDateChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r32.closeOpenMonthViewDay();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Anterior ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function AppComponent_div_10_div_136_div_6_Template_div_viewDateChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r33.viewDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Hoy ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function AppComponent_div_10_div_136_div_6_Template_div_viewDateChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r34.viewDate = $event;
        })("viewDateChange", function AppComponent_div_10_div_136_div_6_Template_div_viewDateChange_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r35.closeOpenMonthViewDay();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Siguiente ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, AppComponent_div_10_div_136_div_6_mwl_calendar_month_view_15_Template, 1, 4, "mwl-calendar-month-view", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("view", ctx_r24.view)("viewDate", ctx_r24.viewDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r24.viewDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("view", ctx_r24.view)("viewDate", ctx_r24.viewDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](13, 8, ctx_r24.viewDate, ctx_r24.view + "ViewTitle", "es"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx_r24.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", ctx_r24.CalendarView.Month);
      }
    }

    function AppComponent_div_10_div_136_accordion_group_108_tr_33_i_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_div_136_accordion_group_108_tr_33_i_2_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);

          var productLine_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          return ctx_r42.showProductInfoModal(productLine_r39.value.product, productLine_r39.value.amount);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_div_10_div_136_accordion_group_108_tr_33_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var product_r45 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r45.description);
      }
    }

    function AppComponent_div_10_div_136_accordion_group_108_tr_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AppComponent_div_10_div_136_accordion_group_108_tr_33_i_2_Template, 1, 0, "i", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "i", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_div_136_accordion_group_108_tr_33_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

          var productLine_r39 = ctx.$implicit;

          var meal_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r46.changeProductLine(productLine_r39.value, meal_r36.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AppComponent_div_10_div_136_accordion_group_108_tr_33_span_6_Template, 2, 1, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_div_10_div_136_accordion_group_108_tr_33_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

          var productLine_r39 = ctx.$implicit;

          var meal_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r49.changeProductLineAmount(meal_r36.value, productLine_r39.value, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_div_136_accordion_group_108_tr_33_Template_div_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

          var productLine_r39 = ctx.$implicit;

          var meal_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r51.deleteProductLine(productLine_r39.value, meal_r36.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var productLine_r39 = ctx.$implicit;

        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", productLine_r39.value.product);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", productLine_r39.value.product);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", productLine_r39.value.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](productLine_r39 == null ? null : productLine_r39.value == null ? null : productLine_r39.value.product == null ? null : productLine_r39.value.product.unit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](14, 9, ctx_r38.getProductLineInfo(productLine_r39.value, "kCalories"), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](17, 12, ctx_r38.getProductLineInfo(productLine_r39.value, "protein"), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](20, 15, ctx_r38.getProductLineInfo(productLine_r39.value, "carbohydrates"), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](23, 18, ctx_r38.getProductLineInfo(productLine_r39.value, "fat"), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](26, 21, ctx_r38.getProductLineInfo(productLine_r39.value, "fiber"), "1.2-2"));
      }
    }

    function AppComponent_div_10_div_136_accordion_group_108_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "accordion-group", null, 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h5", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "i", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_div_136_accordion_group_108_Template_i_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r54);

          var meal_r36 = ctx.$implicit;

          var diet_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);

          return ctx_r53.editMeal($event, meal_r36.value, diet_r23, _r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_div_136_accordion_group_108_Template_button_click_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r54);

          var meal_r36 = ctx.$implicit;

          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

          var diet_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r56.addProduct($event, meal_r36.value, diet_r23, _r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "A\xF1adir Alimento ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "table", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Producto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Cantidad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Unidad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Kcal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Prote\xEDna (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Carbs (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Grasa (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Fibra (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, AppComponent_div_10_div_136_accordion_group_108_tr_33_Template, 30, 24, "tr", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "keyValueSortBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](41, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](47, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](50, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](53, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "tr", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "th", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Energ\xEDa %");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](60, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](63, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](66, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](69, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "th", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "% RDA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](76, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](79, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](82, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](85, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](88, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var meal_r36 = ctx.$implicit;

        var userData_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).ngIf;

        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](meal_r36.value.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](34, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](35, 21, meal_r36.value.productLines), "asc", "createdAt"))("ngForTrackBy", ctx_r25.keyValueTrackFunction);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](41, 23, ctx_r25.getMealInfo(meal_r36.value, "kCalories"), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](44, 26, ctx_r25.getMealInfo(meal_r36.value, "protein"), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](47, 29, ctx_r25.getMealInfo(meal_r36.value, "carbohydrates"), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](50, 32, ctx_r25.getMealInfo(meal_r36.value, "fat"), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](53, 35, ctx_r25.getMealInfo(meal_r36.value, "fiber"), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](60, 38, ctx_r25.getMealEnergyInfo(meal_r36.value, "protein"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](63, 41, ctx_r25.getMealEnergyInfo(meal_r36.value, "carbohydrates"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](66, 44, ctx_r25.getMealEnergyInfo(meal_r36.value, "fat"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](69, 47, ctx_r25.getMealEnergyInfo(meal_r36.value, "fiber"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](76, 50, ctx_r25.getMealRecommendedIntakePercent(userData_r21, meal_r36.value, "kCalories"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](79, 53, ctx_r25.getMealRecommendedIntakePercent(userData_r21, meal_r36.value, "protein"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](82, 56, ctx_r25.getMealRecommendedIntakePercent(userData_r21, meal_r36.value, "carbohydrates"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](85, 59, ctx_r25.getMealRecommendedIntakePercent(userData_r21, meal_r36.value, "fat"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](88, 62, ctx_r25.getMealRecommendedIntakePercent(userData_r21, meal_r36.value, "fiber"), "1.0-0"));
      }
    }

    function AppComponent_div_10_div_136_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_div_136_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r60);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r59.showCalendar = !ctx_r59.showCalendar;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "svg", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "path", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AppComponent_div_10_div_136_div_6_Template, 16, 12, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "amDateFormat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_div_136_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r60);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);

          return ctx_r61.addMeal(_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "A\xF1adir Comida ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_div_136_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r60);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](17);

          return ctx_r62.addCustomerProduct(_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Crear nuevo alimento ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_div_136_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r60);

          var diet_r23 = ctx.ngIf;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r63.exportToPDF(diet_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Exportar a PDF ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "table", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Calor\xEDas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Prote\xEDna (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Carbohidratos (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Grasas (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Fibra (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Objetivo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](47, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](48, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](51, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](52, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](55, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](56, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](59, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](60, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](63, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](64, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Consumido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](70, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](73, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](76, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](79, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](82, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Restante");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](88, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](89, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](92, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](93, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](96, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](97, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](100, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](101, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](104, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](105, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "accordion", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](108, AppComponent_div_10_div_136_accordion_group_108_Template, 91, 65, "accordion-group", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](109, "keyValueSortBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](110, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var diet_r23 = ctx.ngIf;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r22.showCalendar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](13, 20, ctx_r22.currentDate, "DD/MM/YYYY"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](47, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](48, 26, ctx_r22.goalCalories$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](51, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](52, 31, ctx_r22.proteinGrams$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](55, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](56, 36, ctx_r22.carbsGrams$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](59, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](60, 41, ctx_r22.fatGrams$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](63, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](64, 46, ctx_r22.fiberGrams$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](70, 48, ctx_r22.getDietInfo(diet_r23, "kCalories"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](73, 51, ctx_r22.getDietInfo(diet_r23, "protein"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](76, 54, ctx_r22.getDietInfo(diet_r23, "carbohydrates"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](79, 57, ctx_r22.getDietInfo(diet_r23, "fat"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](82, 60, ctx_r22.getDietInfo(diet_r23, "fiber"), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](88, 63, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](89, 66, ctx_r22.remainingKCal$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](92, 68, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](93, 71, ctx_r22.remainingProteinGrams$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](96, 73, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](97, 76, ctx_r22.remainingCarbsGrams$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](100, 78, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](101, 81, ctx_r22.remainingFatGrams$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](104, 83, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](105, 86, ctx_r22.remainingFiberGrams$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("isAnimated", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](109, 88, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](110, 92, diet_r23.meals), "asc", "createdAt"))("ngForTrackBy", ctx_r22.keyValueTrackFunction);
      }
    }

    function AppComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](1, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "G\xE9nero");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "select", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Hombre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Mujer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Edad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Peso (kg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Altura (cm)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\xCDndice de masa corporal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](43, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\xCDndice de Actividad ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_Template_i_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r65);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](21);

          return ctx_r64.showInfoModal(_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "select", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "1.200");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "1.375");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "1.550");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "1.650");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "1.725");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "1.900");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Grasa Corporal (%) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_Template_i_click_68_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r65);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](19);

          return ctx_r66.showInfoModal(_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Masa Corporal Magra (kg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](76, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "\xCDndice de Masa Corporal Magra");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](82, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](83, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h4", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](89, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](90, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_10_Template_i_click_91_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r65);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);

          return ctx_r67.showInfoModal(_r18);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "select", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Mantenimiento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Perder Grasa (PG)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Ganar Musculatura (GM)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "table", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Nutrientes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "(g/Kg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "kcal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Prote\xEDna");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](115, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](116, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Carbs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](124, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](125, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Grasa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](133, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](134, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](136, AppComponent_div_10_div_136_Template, 111, 94, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](137, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var userData_r21 = ctx.ngIf;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r7.userDataForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](userData_r21.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](43, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](44, 21, ctx_r7.bodyMassIndex$), "1.2-2"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1.2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1.375);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1.55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1.65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1.725);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1.9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](76, 23, ctx_r7.leanBodyMass$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](82, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](83, 28, ctx_r7.leanBodyMassIndex$), "1.2-2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Objetivo: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](89, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](90, 33, ctx_r7.goalCalories$), "1.0-0"), " kcal ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](115, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](116, 38, ctx_r7.proteinKCal$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](124, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](125, 43, ctx_r7.carbsKCal$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](133, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](134, 48, ctx_r7.fatKCal$), "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](137, 50, ctx_r7.diet$));
      }
    }

    function AppComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please Login to continue ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_ng_template_14_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_14_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r69.deleteMeal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Eliminar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Comida");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_14_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r72);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r71.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_14_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r72);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r73.toEditMeal.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, AppComponent_ng_template_14_button_11_Template, 2, 0, "button", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_14_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r72);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r74.updateMealDescription();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Guardar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r11.toEditMeal.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r11.addingMeal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r11.toEditMeal.description);
      }
    }

    function AppComponent_ng_template_16_div_129_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var error_r78 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", error_r78, " ");
      }
    }

    function AppComponent_ng_template_16_div_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AppComponent_ng_template_16_div_129_div_2_Template, 2, 1, "div", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r75.storeCustomerProductErrors);
      }
    }

    function AppComponent_ng_template_16_div_130_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " El alimento ha sido guardado, ya puede usarlo en sus comidas ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Crear nuevo alimento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_16_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r80.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r82.toEditCustomerProduct.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r83.toEditCustomerProduct.amount = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "gr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r84.toEditCustomerProduct.protein = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "gr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r85.toEditCustomerProduct.carbohydrates = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "gr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r86.toEditCustomerProduct.fat = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "gr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r87.toEditCustomerProduct.kCalories = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "gr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "textarea", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_textarea_ngModelChange_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r88.toEditCustomerProduct.comments = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_16_Template_button_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r89.showCustomerProductDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Detalles nutricionales ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Si conoce los siguientes datos del alimento que esta ingresando, llene los siguientes campos, de lo contrario, deje en blanco ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "input", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_55_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r90.toEditCustomerProduct.vitA = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "input", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_57_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r91.toEditCustomerProduct.vitB1 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "input", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_60_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r92.toEditCustomerProduct.vitB2 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "input", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r93.toEditCustomerProduct.vitB3 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "input", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_65_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r94.toEditCustomerProduct.vitB5 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "input", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_67_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r95.toEditCustomerProduct.vitB6 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "input", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_70_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r96.toEditCustomerProduct.vitB9 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "input", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_72_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r97.toEditCustomerProduct.vitB12 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "input", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_75_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r98.toEditCustomerProduct.vitC = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "input", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_77_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r99.toEditCustomerProduct.vitD = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "input", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_80_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r100.toEditCustomerProduct.vitE = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "input", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_82_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r101.toEditCustomerProduct.vitK = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "input", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_85_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r102.toEditCustomerProduct.choline = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "input", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_87_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r103.toEditCustomerProduct.calcium = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "input", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_90_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r104.toEditCustomerProduct.copper = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "input", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_92_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r105.toEditCustomerProduct.iron = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "input", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_95_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r106.toEditCustomerProduct.magnesium = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "input", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_97_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r107.toEditCustomerProduct.manganese = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "input", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_100_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r108.toEditCustomerProduct.phosphorus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "input", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_102_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r109.toEditCustomerProduct.potassium = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "input", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_105_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r110.toEditCustomerProduct.selenium = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "input", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_107_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r111.toEditCustomerProduct.sodium = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "input", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_110_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r112.toEditCustomerProduct.zinc = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "input", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_112_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r113.toEditCustomerProduct.water = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "input", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_115_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r114.toEditCustomerProduct.fiber = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "input", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_117_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r115.toEditCustomerProduct.cholesterol = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "input", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_120_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r116.toEditCustomerProduct.saturatedFat = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "input", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_122_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r117.toEditCustomerProduct.monoUnsaturatedFat = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "input", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_125_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r118.toEditCustomerProduct.polyUnsaturatedFat = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "input", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_ng_template_16_Template_input_ngModelChange_127_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r119.toEditCustomerProduct.glycemicIndex = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](129, AppComponent_ng_template_16_div_129_Template, 3, 1, "div", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](130, AppComponent_ng_template_16_div_130_Template, 2, 0, "div", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "button", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_16_Template_button_click_132_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r120.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " Cancelar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "button", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_16_Template_button_click_134_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81);

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r121.storeCustomerProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " Guardar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.protein);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.carbohydrates);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.fat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.kCalories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.comments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r13.collapseCustomerDetails);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitA);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitB1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitB2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitB3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitB5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitB6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitB9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitB12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitC);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitD);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitE);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.vitK);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.choline);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.calcium);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.copper);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.iron);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.magnesium);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.manganese);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.phosphorus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.potassium);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.selenium);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.sodium);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.zinc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.water);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.fiber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.cholesterol);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.saturatedFat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.monoUnsaturatedFat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.polyUnsaturatedFat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r13.toEditCustomerProduct.glycemicIndex);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.storeCustomerProductErrors.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.showSuccessMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r13.blockStoreButton);
      }
    }

    function AppComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 162);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Grasa Coporal (%)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_18_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r123);

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r122.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 163);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 164);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\xCDndice de Nivel de Actividad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_20_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r125);

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r124.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "table", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Nivel Actividad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Es un valor entre 1.2 y 1.9 usado para calcular tu nivel de calor\xEDas de mantenimiento (Mantenimiento = BMR x nivel de actividad). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "1.200");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Sedentaria: sin actividad f\xEDsica. Trabajo de oficina.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "1.375");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Ligera: ejercicios leves. 1-3 d\xEDas a la semana.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "1.550");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Moderada: ejercicios moderados. 3-5 d\xEDas a la semana.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "1.650");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Intensa: Programa de entrenamiento con intenso con pesas. / 4-5 d\xEDas a la semana.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "1.725");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Muy Activa: Ejercicios intensos. Deporte 6-7 d\xEDas a la semana.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "1.900");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Extra: Fuerte y prolongado ejercicio diario. Deporte + entrenamiento f\xEDsico.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 164);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Distribuci\xF3n de macronutrientes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ng_template_22_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r127);

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r126.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Importante: Dejar los valores de forma predeterminada para tener una dieta equilibrada. Si cambias de objetivo, simplemente con seleccionarlo, los valores de los macros se cambiar\xE1n de forma a autom\xE1tica.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Valores recomendados para dieta equilibrada:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Prote\xEDna: Poner 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Carbohidratos: (dejarlo autom\xE1tico)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Grasas: Poner 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Nota: Si quieres modificar alg\xFAn macronutriente a tu gusto puedes cambiarlo y los dem\xE1s se modificar\xE1n autom\xE1ticamente para compensar.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h5", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Apple");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Protein");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "150");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Carbs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Fat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "175");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var colors = {
      red: {
        primary: '#843B94',
        secondary: '#FAE3E3'
      }
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(apiSvc, modalSvc, store, formBuilder) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.apiSvc = apiSvc;
        this.modalSvc = modalSvc;
        this.store = store;
        this.formBuilder = formBuilder;
        this.title = 'angular-test';
        this.storeCustomerProductErrors = [];
        this.showSuccessMessage = false;
        this.blockStoreButton = false;
        this.onDateChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"](); // --------------------------

        this.showCalendar = false;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [{
          label: '<i class="fas fa-fw fa-pencil-alt"></i>',
          a11yLabel: 'Edit',
          onClick: function onClick(_ref) {
            var event = _ref.event;

            _this2.handleEvent('Edited', event);
          }
        }, {
          label: '<i class="fas fa-fw fa-trash-alt"></i>',
          a11yLabel: 'Delete',
          onClick: function onClick(_ref2) {
            var event = _ref2.event;
            _this2.events = _this2.events.filter(function (iEvent) {
              return iEvent !== event;
            });

            _this2.handleEvent('Deleted', event);
          }
        }];
        this.events = [];
        this.activeDayIsOpen = true;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_4__();
        this.userDataForm = this.formBuilder.group({
          gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          activityIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          bodyFat: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          goal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          proteinRatio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          carbsRatio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          fatRatio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        Object.keys(this.userDataForm.controls).forEach(function (formControlKey) {
          _this2.subscriptions.add(_this2.userDataForm.controls[formControlKey].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()).subscribe(function (value) {
            switch (formControlKey) {
              case 'age':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateAge"]({
                  value: value
                }));

                break;

              case 'gender':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateGender"]({
                  value: value
                }));

                break;

              case 'height':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateHeight"]({
                  value: value
                }));

                break;

              case 'weight':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateWeight"]({
                  value: value
                }));

                break;

              case 'activityIndex':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateActivityIndex"]({
                  value: value
                }));

                break;

              case 'bodyFat':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateBodyFatPercentage"]({
                  value: value
                }));

                break;

              case 'goal':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateGoal"]({
                  value: value
                }));

                break;

              case 'proteinRatio':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateProteinRatio"]({
                  value: value
                }));

                break;

              case 'carbsRatio':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateCarbsRatio"]({
                  value: value
                }));

                break;

              case 'fatRatio':
                _this2.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["updateFatRatio"]({
                  value: value
                }));

                break;
            }
          }));
        });
        this.bodyMassIndex$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectBodyMassIndex"]));
        this.leanBodyMass$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectLeanBodyMass"]));
        this.leanBodyMassIndex$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectLeanBodyMassIndex"]));
        this.goalCalories$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectGoalCalories"]));
        this.proteinKCal$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectGoalProteinKCal"]));
        this.fatKCal$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectGoalFatKCal"]));
        this.carbsKCal$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectGoalCarbsKCal"]));
        this.proteinGrams$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectGoalProteinGrams"]));
        this.fatGrams$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectGoalFatGrams"]));
        this.fiberGrams$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectGoalFiberGrams"]));
        this.carbsGrams$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectGoalCarbsGrams"]));
        this.remainingKCal$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_12__["selectDietRemainingCalories"]));
        this.remainingProteinGrams$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_12__["selectDietRemainingProteinGrams"]));
        this.remainingFatGrams$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_12__["selectDietRemainingFatGrams"]));
        this.remainingFiberGrams$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_12__["selectDietRemainingFiberGrams"]));
        this.remainingCarbsGrams$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_12__["selectDietRemainingCarbsGrams"]));
        this.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["getUserData"]());
        this.productFind$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
          // Runs on every search
          observer.next(_this2.currentSearch);
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (search) {
          return _this2.apiSvc.getProducts(search, 10);
        }));
      }

      _createClass(AppComponent, [{
        key: "keyValueTrackFunction",
        value: function keyValueTrackFunction(index, item) {
          if (!item) {
            return null;
          }

          return item.key;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.userData$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectUserData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (userData) {
            _this3.userDataForm.patchValue(userData, {
              emitEvent: false
            });
          }));
          this.diet$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_diet_diet_selectors__WEBPACK_IMPORTED_MODULE_14__["selectDiet"]));
          this.subscriptions.add(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_diet_diet_selectors__WEBPACK_IMPORTED_MODULE_14__["selectChangesPending"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (x) {
            return !!x;
          })).subscribe(function (x) {
            _this3.store.dispatch(_store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__["saveDiet"]({
              correlationId: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])()
            }));
          }));
          this.subscriptions.add(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_16__["selectChangesPending"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (x) {
            console.log(x);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (x) {
            return !!x;
          })).subscribe(function (x) {
            _this3.store.dispatch(_store_userData_userData_actions__WEBPACK_IMPORTED_MODULE_15__["saveUserData"]({
              correlationId: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])()
            }));
          }));
          this.subscriptions.add(this.onDateChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this.currentDate)).subscribe(function (date) {
            _this3.store.dispatch(_store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__["getDietForDay"]({
              date: date
            }));
          }));
          this.collapseCustomerDetails = '';
        }
      }, {
        key: "modifyDate",
        value: function modifyDate(amount) {
          this.currentDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.currentDate.add(amount, 'days'));
          this.onDateChanged$.next(this.currentDate);
        }
      }, {
        key: "nextDate",
        value: function nextDate() {
          this.modifyDate(+1);
        }
      }, {
        key: "previousDate",
        value: function previousDate() {
          this.modifyDate(-1);
        }
      }, {
        key: "addMeal",
        value: function addMeal(templateRef) {
          this.modalRef = this.modalSvc.show(templateRef, {
            "class": 'modal-dialog-centered'
          });
          this.addingMeal = true;
          this.toEditMeal = {
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])(),
            description: null,
            productLines: {},
            createdAt: null
          };
        }
      }, {
        key: "updateMealDescription",
        value: function updateMealDescription() {
          if (this.addingMeal) {
            this.addingMeal = false;
            this.store.dispatch(Object(_store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__["addMeal"])({
              id: this.toEditMeal.id,
              description: this.toEditMeal.description
            }));
          } else {
            this.store.dispatch(Object(_store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__["updateMealDescription"])({
              mealId: this.toEditMeal.id,
              description: this.toEditMeal.description
            }));
          }

          this.modalRef.hide();
        }
      }, {
        key: "editMeal",
        value: function editMeal($event, meal, diet, mealEditModal) {
          $event.stopPropagation();
          this.toEditMeal = Object.assign({}, meal);
          this.addingMeal = false;
          this.modalRef = this.modalSvc.show(mealEditModal);
        }
      }, {
        key: "deleteMeal",
        value: function deleteMeal() {
          this.store.dispatch(Object(_store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__["deleteMeal"])({
            mealId: this.toEditMeal.id
          }));
          this.modalRef.hide();
        }
      }, {
        key: "save",
        value: function save() {
          this.store.dispatch(_store_app_actions__WEBPACK_IMPORTED_MODULE_11__["requestSaveData"]());
        }
      }, {
        key: "addProduct",
        value: function addProduct($event, meal, diet, accordion) {
          $event.stopPropagation();

          if (!accordion.isOpen) {
            accordion.isOpen = true;
          }

          this.store.dispatch(Object(_store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__["addProductLine"])({
            mealId: meal.id
          }));
        }
      }, {
        key: "changeProductLine",
        value: function changeProductLine(productLine, meal) {
          var _this4 = this;

          var modalRef = this.modalSvc.show(_product_search_select_modal_product_search_select_modal_component__WEBPACK_IMPORTED_MODULE_10__["ProductSearchSelectModalComponent"], {
            initialState: {
              product: productLine.product
            }
          });

          modalRef.content.onProductSelected = function (product) {
            var _a, _b;

            if (product.id === ((_b = (_a = productLine) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.id)) {
              return;
            }

            _this4.store.dispatch(Object(_store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__["changeProductLineProduct"])({
              mealId: meal.id,
              productLineId: productLine.id,
              product: product
            }));
          };
        }
      }, {
        key: "getProductLineInfo",
        value: function getProductLineInfo(productLine, productKey) {
          return new _utils_calculator__WEBPACK_IMPORTED_MODULE_8__["Calculator"]().getProductLineInfo(productLine, productKey);
        }
      }, {
        key: "getDietInfo",
        value: function getDietInfo(diet, key) {
          return new _utils_calculator__WEBPACK_IMPORTED_MODULE_8__["Calculator"]().getDietInfo(diet, key);
        }
      }, {
        key: "getMealInfo",
        value: function getMealInfo(meal, key) {
          return new _utils_calculator__WEBPACK_IMPORTED_MODULE_8__["Calculator"]().getMealInfo(meal, key);
        }
      }, {
        key: "getMealEnergyInfo",
        value: function getMealEnergyInfo(meal, nutrient) {
          return new _utils_calculator__WEBPACK_IMPORTED_MODULE_8__["Calculator"]().getMealEnergyInfo(meal, nutrient);
        }
      }, {
        key: "getMealRecommendedIntakePercent",
        value: function getMealRecommendedIntakePercent(userData, meal, nutrient) {
          return new _utils_calculator__WEBPACK_IMPORTED_MODULE_8__["Calculator"]().getMealRecommendedIntakePercent(userData, meal, nutrient);
        }
      }, {
        key: "showInfoModal",
        value: function showInfoModal(templateRef) {
          this.modalRef = this.modalSvc.show(templateRef);
        }
      }, {
        key: "showProductInfoModal",
        value: function showProductInfoModal(product, qty) {
          this.modalSvc.show(_product_info_modal_product_info_modal_component__WEBPACK_IMPORTED_MODULE_9__["ProductInfoModalComponent"], {
            initialState: {
              product: product,
              qty: qty
            }
          });
        } // added button

      }, {
        key: "addCustomerProduct",
        value: function addCustomerProduct(templateRef) {
          this.blockStoreButton = false;
          this.showSuccessMessage = false;
          this.modalRef = this.modalSvc.show(templateRef, {
            "class": 'modal-dialog-centered'
          });
          this.addingCustomerProduct = true;
          this.toEditCustomerProduct = {
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])(),
            description: null,
            amount: 100,
            unit: 'gr',
            kCalories: null,
            protein: null,
            carbohydrates: null,
            fat: null,
            vitA: null,
            vitB1: null,
            vitB2: null,
            vitB3: null,
            vitB5: null,
            vitB6: null,
            vitB9: null,
            vitB12: null,
            vitC: null,
            vitD: null,
            vitE: null,
            vitK: null,
            choline: null,
            calcium: null,
            copper: null,
            iron: null,
            magnesium: null,
            manganese: null,
            phosphorus: null,
            potassium: null,
            selenium: null,
            sodium: null,
            zinc: null,
            water: null,
            fiber: null,
            cholesterol: null,
            saturatedFat: null,
            monoUnsaturatedFat: null,
            polyUnsaturatedFat: null,
            glycemicIndex: null,
            comments: null
          };
        }
      }, {
        key: "showCustomerProductDetails",
        value: function showCustomerProductDetails() {
          this.collapseCustomerDetails = this.collapseCustomerDetails == '' ? 'show' : '';
        }
      }, {
        key: "storeCustomerProduct",
        value: function storeCustomerProduct() {
          var _this5 = this;

          this.storeCustomerProductErrors = [];
          this.blockStoreButton = true;
          jquery__WEBPACK_IMPORTED_MODULE_17__["ajax"]({
            url: '/wp-json/cca/v1/customer_food',
            data: JSON.stringify({
              'item': this.toEditCustomerProduct
            }),
            headers: {
              'X-CSRF-TOKEN': jquery__WEBPACK_IMPORTED_MODULE_17__('meta[name="csrf-token"]').attr('content')
            },
            method: 'POST',
            dataType: 'JSON',
            processData: false,
            contentType: 'application/json',
            success: function success(response) {
              // console.log('response');
              // console.log(response);
              // console.log('response.errors');
              // console.log(response.errors);
              _this5.storeCustomerProductErrors = response.errors;

              if (_this5.storeCustomerProductErrors.length == 0) {
                _this5.showSuccessMessage = true; // to reload data

                _this5.save(); // candidate


                setTimeout(function () {
                  _this5.modalRef.hide();
                }, 4000);
              } else {
                // on errors found the button must be re-enabled
                _this5.blockStoreButton = false;
              }
            },
            error: function error(http, status, _error) {
              console.log('http', http);
              console.log('status', status);
              console.log('error', _error);
            }
          });
        }
      }, {
        key: "deleteProductLine",
        value: function deleteProductLine(productLine, meal) {
          this.store.dispatch(Object(_store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__["deleteProductLine"])({
            productLineId: productLine.id,
            mealId: meal.id
          }));
        }
      }, {
        key: "exportToPDF",
        value: function exportToPDF(diet) {
          this.store.dispatch(Object(_store_app_actions__WEBPACK_IMPORTED_MODULE_11__["requestGetPDF"])({
            date: diet.date
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "changeProductLineAmount",
        value: function changeProductLineAmount(meal, productLine, amount) {
          this.store.dispatch(Object(_store_diet_diet_actions__WEBPACK_IMPORTED_MODULE_13__["changeProductLineAmount"])({
            mealId: meal.id,
            productLineId: productLine.id,
            amount: +amount
          }));
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(action, event) {
          console.log(action, event, "handleEvent");
        }
      }, {
        key: "dayClicked",
        value: function dayClicked(_ref3) {
          var date = _ref3.date,
              events = _ref3.events;
          console.log(date, "date??????????????");
          console.log(moment__WEBPACK_IMPORTED_MODULE_4__(date));
          this.currentDate = moment__WEBPACK_IMPORTED_MODULE_4__(date);
          this.onDateChanged$.next(this.currentDate);

          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["isSameMonth"])(date, this.viewDate)) {
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
              this.activeDayIsOpen = false;
              console.log(false, "date??????????????");
            } else {
              this.activeDayIsOpen = true;
              console.log(true, "date??????????????");
            }

            this.viewDate = date;
          }
        }
      }, {
        key: "closeOpenMonthViewDay",
        value: function closeOpenMonthViewDay() {
          this.activeDayIsOpen = false;
          console.log(this.viewDate, "this.viewDate");
          var month = parseInt(moment__WEBPACK_IMPORTED_MODULE_4__(this.viewDate).format("M"));
          var year = parseInt(moment__WEBPACK_IMPORTED_MODULE_4__(this.viewDate).format("Y"));
          this.listEventsByMonth(month, year);
        }
      }, {
        key: "addEvent",
        value: function addEvent() {
          this.events = _toConsumableArray(this.events);
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(eventToDelete) {
          this.events = this.events.filter(function (event) {
            return event !== eventToDelete;
          });
        }
      }, {
        key: "setView",
        value: function setView(view) {
          this.view = view;
        }
      }, {
        key: "listEventsByMonth",
        value: function listEventsByMonth(month, year) {
          var _this6 = this;

          console.log(new Date(moment__WEBPACK_IMPORTED_MODULE_4__("2028-12-20").toISOString()));
          console.log(month, year);
          this.apiSvc.getDietsbyDate(month, year).subscribe(function (res) {
            console.log(res);
            _this6.events = [];

            for (var index = 0; index < res.length; index++) {
              var element = res[index];

              _this6.events.push({
                title: element.date,
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["startOfDay"])(new Date(moment__WEBPACK_IMPORTED_MODULE_4__(element.date).toISOString())),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["endOfDay"])(new Date(moment__WEBPACK_IMPORTED_MODULE_4__(element.date).toISOString())),
                color: colors.red,
                draggable: true,
                resizable: {
                  beforeStart: true,
                  afterEnd: true
                }
              });
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_20__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_bootstrap__WEBPACK_IMPORTED_MODULE_21__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 26,
      vars: 4,
      consts: [["id", "calorieCalculator", 1, "site-main"], [1, "logo-incrusted-update"], ["src", "/wp-content/uploads/2020/09/cropped-Logo-Nutrientrena.png", 2, "max-width", "400px", "margin", "0 auto", "width", "100%", "display", "block"], [1, "container-fluid"], [1, "row", "primary-bg", "pt-5", "pb-5"], [1, "col-md-12", "text-center"], [1, "font-weight-bold"], [1, "container", "without-lateral-padding"], ["class", "row", 4, "ngIf", "ngIfElse"], ["noUserData", ""], ["mealEditModal", ""], ["customerProductEditModal", ""], ["bodyFatPercentageModal", ""], ["activityLevelIndexModal", ""], ["macronutrientesModal", ""], ["class", "modal fade", "id", "productThreeModal"], [1, "row"], [3, "formGroup"], [1, "col-md-12", "col-lg-4"], [1, "card", "shadow"], [1, "card-header"], [1, "card-body"], [1, "card-title", "mb-3", "text-center", "font-weight-bold"], ["id", "userDataFields", 1, "table", "table-striped", "table-borderless"], ["id", "genderSection", 1, "form-group"], ["name", "gender", "formControlName", "gender", 1, "form-control"], [3, "value"], ["id", "ageSection", 1, "form-group"], ["type", "number", "min", "0", "step", "1", "name", "age", "formControlName", "age", 1, "form-control", "profile-input"], ["id", "weightSection", 1, "form-group"], ["type", "number", "min", "0", "step", "1", "name", "weight", "formControlName", "weight", 1, "form-control", "profile-input"], ["id", "heightSection", 1, "form-group"], ["type", "number", "min", "0", "step", "1", "name", "height", "formControlName", "height", 1, "form-control", "profile-input"], [1, "fas", "fa-info-circle", 3, "click"], ["id", "activityIndexSection", 1, "form-group"], ["name", "activityIndex", "formControlName", "activityIndex"], ["id", "bodyFatSection"], ["type", "number", "min", "0", "max", "100", "name", "bodyFat", "formControlName", "bodyFat", 1, "form-control", "profile-input"], [1, "card", "mt-3", "shadow"], ["id", "goalDataFields", 1, "card-body"], [1, "card-title", "mt-3", "mb-3", "text-center"], [1, "goalSection"], ["name", "goal", "formControlName", "goal"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "table", "table-striped", "table-borderless"], ["type", "number", "min", "0", "step", "0.01", "name", "proteinRatio", "formControlName", "proteinRatio", 2, "width", "6em"], ["type", "number", "min", "0", "step", "0.01", "name", "carbsRatio", "formControlName", "carbsRatio", 2, "width", "6em"], ["type", "number", "min", "0", "step", "0.01", "name", "fatRatio", "formControlName", "fatRatio", 2, "width", "6em"], [1, "col-md-12", "col-lg-8", "right-data-container"], ["class", "card shadow", 4, "ngIf"], [1, "btn-group", 2, "width", "auto", "margin", "0 0 20px"], ["type", "button", 1, "btn", "btn-primary", "px-5", "py-3", 2, "background-color", "#843B94", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", "width", "25", "height", "25"], ["fill", "#FFF", "d", "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"], [4, "ngIf"], [1, "card-header", "d-flex", "flex-column"], [1, "btn-group", 2, "margin", "1em auto"], [1, "m-auto"], [1, "text-white"], [1, "d-flex", "flex-row"], [2, "flex-grow", "1"], [1, "btn", "btn-outline-primary", 3, "click"], [2, "flex-grow", "1", "text-align", "center"], [2, "flex-grow", "1", "text-align", "right"], [1, "btn", "btn-outline-primary", "ml-1", 3, "click"], [1, "top-table", 2, "width", "100%"], [1, "card-body", "foods-card"], ["closeOthers", "true", 3, "isAnimated"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row", "text-center", "align-items-center"], [1, "col-md-6"], [1, "btn-group", "w-50"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 2, "background-color", "#843B94", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 2, "background-color", "#843B94", 3, "view", "viewDate", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked"], ["accordionGroup", ""], ["accordion-heading", "", 1, "accordion"], [1, "float-left"], [1, "action-tab"], [1, "fas", "fa-edit", "edit-meal", 3, "click"], [1, "table", "table-striped", "table-responsive", "table-borderless"], ["colspan", "4"], [1, "striped"], ["colspan", "5"], ["class", "fas fa-info-circle", 3, "click", 4, "ngIf"], ["nowrap", "nowrap", 1, "product"], [1, "form-group"], [1, "fas", "fa-edit", 2, "margin-right", "5px", 3, "click"], ["nowrap", "nowrap", 1, "amount"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "fa", "fa-trash"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "class", "btn btn-outline-danger float-left", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-danger", "float-left", 3, "click"], [1, "modal-content", "modal-customer-product"], [1, "form-row"], [1, "col"], ["type", "text", "placeholder", "Nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group"], ["type", "text", "placeholder", "Cantidad", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], ["type", "text", "placeholder", "Prote\xEDnas", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Carbohidratos", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Grasas", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Kilocalor\xEDas", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Comentarios", "rows", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "toggle-details", "data-toggle", "collapse", "data-target", "#collapseDetails", "aria-expanded", "false", "aria-controls", "collapseDetails", 1, "btn", "btn-outline-secondary", "btn-block", 3, "click"], ["id", "collapseDetails", 1, "collapse"], ["type", "text", "placeholder", "Vit A", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit B-1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit B-2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit B-3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit B-5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit B-6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit B-9", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit B-12", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit C", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit D", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit E", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vit K", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Colina", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Calcio", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Cobre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Hierro", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Magnesio", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Manganeso", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "F\xF3sforo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Potasio", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Selenio", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Sodio", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Zinc", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Agua", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Fibra", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Colesterol", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Grasas Sat.", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Grasas Mono Sat.", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Grasas Poli Sat.", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "\xCDndice Glic\xE9mico", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "row errors", "style", "flex-grow:1", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [2, "display", "flex", "width", "100%"], ["type", "button", 1, "btn", "btn-light", 2, "flex-grow", "1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 2, "flex-grow", "1", 3, "disabled", "click"], [1, "row", "errors", 2, "flex-grow", "1"], [1, "col", "col-xs-12"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-success"], ["id", "bodyFatPercentageTitle", 1, "modal-title"], ["src", "./assets/body-fat.png", "alt", "", 1, "img-fluid"], ["id", "activityLevelIndexTitle", 1, "modal-title"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "DIETARIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, AppComponent_div_10_Template, 138, 52, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, AppComponent_ng_template_12_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, AppComponent_ng_template_14_Template, 14, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, AppComponent_ng_template_16_Template, 136, 42, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, AppComponent_ng_template_18_Template, 9, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, AppComponent_ng_template_20_Template, 44, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, AppComponent_ng_template_22_Template, 21, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, AppComponent_ng_template_24_Template, 25, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "router-outlet");
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 2, ctx.userData$))("ngIfElse", _r8);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_21__["AccordionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], angular_calendar__WEBPACK_IMPORTED_MODULE_18__["??f"], angular_calendar__WEBPACK_IMPORTED_MODULE_18__["??h"], angular_calendar__WEBPACK_IMPORTED_MODULE_18__["??g"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitchCase"], angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarMonthViewComponent"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_21__["AccordionPanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DecimalPipe"], ngx_moment__WEBPACK_IMPORTED_MODULE_24__["DateFormatPipe"], _sort_by_pipe__WEBPACK_IMPORTED_MODULE_25__["KeyValueSortByPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["KeyValuePipe"], angular_calendar__WEBPACK_IMPORTED_MODULE_18__["??i"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["PercentPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_20__["ApiService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_21__["BsModalService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/locales/es */
    "./node_modules/@angular/common/locales/es.js");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var ngx_moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-moment */
    "./node_modules/ngx-moment/__ivy_ngcc__/fesm2015/ngx-moment.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _product_info_modal_product_info_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./product-info-modal/product-info-modal.component */
    "./src/app/product-info-modal/product-info-modal.component.ts");
    /* harmony import */


    var _product_search_select_modal_product_search_select_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./product-search-select-modal/product-search-select-modal.component */
    "./src/app/product-search-select-modal/product-search-select-modal.component.ts");
    /* harmony import */


    var _sort_by_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./sort-by.pipe */
    "./src/app/sort-by.pipe.ts");
    /* harmony import */


    var _store_app_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./store/app.effects */
    "./src/app/store/app.effects.ts");
    /* harmony import */


    var _store_diet_diet_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./store/diet/diet.effects */
    "./src/app/store/diet/diet.effects.ts");
    /* harmony import */


    var _store_diet_diet_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./store/diet/diet.reducer */
    "./src/app/store/diet/diet.reducer.ts");
    /* harmony import */


    var _store_userData_userData_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./store/userData/userData.effects */
    "./src/app/store/userData/userData.effects.ts");
    /* harmony import */


    var _store_userData_userData_reducer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./store/userData/userData.reducer */
    "./src/app/store/userData/userData.reducer.ts");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2___default.a, 'es');

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"],
        useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].baseHref
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],
        useValue: 'es'
      }, _api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TypeaheadModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_11__["MomentModule"].forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({
        userData: _store_userData_userData_reducer__WEBPACK_IMPORTED_MODULE_23__["reducer"],
        diet: _store_diet_diet_reducer__WEBPACK_IMPORTED_MODULE_21__["reducer"]
      }, {}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_app_effects__WEBPACK_IMPORTED_MODULE_19__["AppEffects"], _store_userData_userData_effects__WEBPACK_IMPORTED_MODULE_22__["UserDataEffects"], _store_diet_diet_effects__WEBPACK_IMPORTED_MODULE_20__["DietEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
        maxAge: 50,
        logOnly: false
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_24__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_25__["adapterFactory"]
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _product_search_select_modal_product_search_select_modal_component__WEBPACK_IMPORTED_MODULE_17__["ProductSearchSelectModalComponent"], _product_info_modal_product_info_modal_component__WEBPACK_IMPORTED_MODULE_16__["ProductInfoModalComponent"], _sort_by_pipe__WEBPACK_IMPORTED_MODULE_18__["KeyValueSortByPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AlertModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TypeaheadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_11__["MomentModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _product_search_select_modal_product_search_select_modal_component__WEBPACK_IMPORTED_MODULE_17__["ProductSearchSelectModalComponent"], _product_info_modal_product_info_modal_component__WEBPACK_IMPORTED_MODULE_16__["ProductInfoModalComponent"], _sort_by_pipe__WEBPACK_IMPORTED_MODULE_18__["KeyValueSortByPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TypeaheadModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_11__["MomentModule"].forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({
            userData: _store_userData_userData_reducer__WEBPACK_IMPORTED_MODULE_23__["reducer"],
            diet: _store_diet_diet_reducer__WEBPACK_IMPORTED_MODULE_21__["reducer"]
          }, {}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_app_effects__WEBPACK_IMPORTED_MODULE_19__["AppEffects"], _store_userData_userData_effects__WEBPACK_IMPORTED_MODULE_22__["UserDataEffects"], _store_diet_diet_effects__WEBPACK_IMPORTED_MODULE_20__["DietEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
            maxAge: 50,
            logOnly: false
          }), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_24__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_25__["adapterFactory"]
          })],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"],
            useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].baseHref
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],
            useValue: 'es'
          }, _api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-info-modal/product-info-modal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/product-info-modal/product-info-modal.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProductInfoModalComponent */

  /***/
  function srcAppProductInfoModalProductInfoModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductInfoModalComponent", function () {
      return ProductInfoModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductInfoModalComponent_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var infoItem_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](infoItem_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](5, 2, infoItem_r1.amount / 100 * ctx_r0.qty, "1.0-3"));
      }
    }

    var ProductInfoModalComponent =
    /*#__PURE__*/
    function () {
      function ProductInfoModalComponent(bsModalRef) {
        _classCallCheck(this, ProductInfoModalComponent);

        this.bsModalRef = bsModalRef;
        this.properties = {
          kCalories: 'kCal',
          protein: 'prote??nas',
          carbohydrates: 'carbohidratos',
          fat: 'grasas',
          vitA: 'Vitamina A',
          vitB1: 'Vitamina B1',
          vitB2: 'Vitamina B2',
          vitB3: 'Vitamina B3',
          vitB5: 'Vitamina B5',
          vitB6: 'Vitamina B6',
          vitB9: 'Vitamina B9',
          vitB12: 'Vitamina B12',
          vitC: 'Vitamina C',
          vitD: 'Vitamina D',
          vitE: 'Vitamina E',
          vitK: 'Vitamina K',
          choline: 'Colina',
          calcium: 'Calcio',
          copper: 'Cobre',
          iron: 'Hierro',
          magnesium: 'Magnesio',
          manganese: 'Manganeso',
          phosphorus: 'F??sforo',
          potassium: 'Potasio',
          selenium: 'Selenio',
          sodium: 'Sodio',
          zinc: 'Zinc',
          water: 'Agua',
          fiber: 'Fibra',
          cholesterol: 'Colesterol',
          saturatedFat: 'Grasas Saturadas',
          monoUnsaturatedFat: 'Grasas Monoinsaturadas',
          polyUnsaturatedFat: 'Grasas Poliinsaturadas',
          glycemicIndex: '??ndice Glicemico',
          comments: 'Informaci??n Adicional'
        };
      }

      _createClass(ProductInfoModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getProductInfo",
        value: function getProductInfo() {
          var _this7 = this;

          return Object.keys(this.properties).map(function (key) {
            return {
              description: _this7.properties[key],
              amount: _this7._product[key]
            };
          });
        }
      }, {
        key: "product",
        get: function get() {
          return this._product;
        },
        set: function set(value) {
          this._product = value;
          this.productInfo = this.getProductInfo();
        }
      }]);

      return ProductInfoModalComponent;
    }();

    ProductInfoModalComponent.??fac = function ProductInfoModalComponent_Factory(t) {
      return new (t || ProductInfoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]));
    };

    ProductInfoModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProductInfoModalComponent,
      selectors: [["app-product-info-modal"]],
      decls: 10,
      vars: 4,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "table", "table-striped", "table-borderless"], [4, "ngFor", "ngForOf"]],
      template: function ProductInfoModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductInfoModalComponent_Template_button_click_3_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ProductInfoModalComponent_tr_9_Template, 6, 5, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"]("", ctx.product.description, " | ", ctx.qty, " ", ctx.product.unit, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productInfo);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtaW5mby1tb2RhbC9wcm9kdWN0LWluZm8tbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductInfoModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-info-modal',
          templateUrl: './product-info-modal.component.html',
          styleUrls: ['./product-info-modal.component.css']
        }]
      }], function () {
        return [{
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-search-select-modal/product-search-select-modal.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/product-search-select-modal/product-search-select-modal.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ProductSearchSelectModalComponent */

  /***/
  function srcAppProductSearchSelectModalProductSearchSelectModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductSearchSelectModalComponent", function () {
      return ProductSearchSelectModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductSearchSelectModalComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.product.description);
      }
    }

    function ProductSearchSelectModalComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductSearchSelectModalComponent_li_15_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

          var iProduct_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r5.productSelected(iProduct_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var iProduct_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](iProduct_r4.description);
      }
    }

    var ProductSearchSelectModalComponent =
    /*#__PURE__*/
    function () {
      function ProductSearchSelectModalComponent(bsModalRef, apiSvc) {
        _classCallCheck(this, ProductSearchSelectModalComponent);

        this.bsModalRef = bsModalRef;
        this.apiSvc = apiSvc;
        this.searchTermChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(ProductSearchSelectModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.foundItems$ = this.searchTermChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (searchTerm) {
            if (!searchTerm) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            }

            return _this8.apiSvc.getProducts(searchTerm, 20);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (products) {
            if (_this8.product) {
              return products.filter(function (x) {
                return x.id !== _this8.product.id;
              });
            }

            return products;
          }));
        }
      }, {
        key: "onProductSearchChange",
        value: function onProductSearchChange($event) {
          this.searchTermChanged.next($event);
        }
      }, {
        key: "productSelected",
        value: function productSelected(iProduct) {
          this.bsModalRef.hide();
          this.onProductSelected(iProduct);
        }
      }]);

      return ProductSearchSelectModalComponent;
    }();

    ProductSearchSelectModalComponent.??fac = function ProductSearchSelectModalComponent_Factory(t) {
      return new (t || ProductSearchSelectModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
    };

    ProductSearchSelectModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProductSearchSelectModalComponent,
      selectors: [["app-product-search-select-modal"]],
      decls: 20,
      vars: 4,
      consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Buscar productos", "aria-label", "Buscar Productos", "name", "productSearch", "ngModel", "", 1, "form-control", 3, "ngModelChange"], [2, "overflow-y", "auto", "height", "30vh"], [1, "list-group"], ["class", "list-group-item active", 4, "ngIf"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "list-group-item", "active"], [1, "list-group-item", 3, "click"]],
      template: function ProductSearchSelectModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Elige un producto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductSearchSelectModalComponent_Template_button_click_3_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductSearchSelectModalComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.onProductSearchChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ProductSearchSelectModalComponent_li_14_Template, 2, 1, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ProductSearchSelectModalComponent_li_15_Template, 2, 1, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductSearchSelectModalComponent_Template_button_click_18_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Cancelar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.product);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 2, ctx.foundItems$));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qtc2VhcmNoLXNlbGVjdC1tb2RhbC9wcm9kdWN0LXNlYXJjaC1zZWxlY3QtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductSearchSelectModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-search-select-modal',
          templateUrl: './product-search-select-modal.component.html',
          styleUrls: ['./product-search-select-modal.component.css']
        }]
      }], function () {
        return [{
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sort-by.pipe.ts":
  /*!*********************************!*\
    !*** ./src/app/sort-by.pipe.ts ***!
    \*********************************/

  /*! exports provided: KeyValueSortByPipe */

  /***/
  function srcAppSortByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyValueSortByPipe", function () {
      return KeyValueSortByPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var KeyValueSortByPipe =
    /*#__PURE__*/
    function () {
      function KeyValueSortByPipe() {
        _classCallCheck(this, KeyValueSortByPipe);
      }

      _createClass(KeyValueSortByPipe, [{
        key: "transform",
        value: function transform(value) {
          var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var column = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

          if (!value || order === '' || !order) {
            return value;
          } // no array


          if (value.length <= 1) {
            return value;
          }

          if (!column) {
            return value.sort(function (a, b) {
              if (order === 'asc') {
                return ('' + a.key).localeCompare('' + b.key);
              }

              return ('' + b.key).localeCompare('' + a.key);
            });
          }

          return value.sort(function (a, b) {
            if (order === 'asc') {
              return ('' + a.value[column]).localeCompare('' + b.value[column]);
            }

            return ('' + b.value[column]).localeCompare('' + a.value[column]);
          });
        }
      }]);

      return KeyValueSortByPipe;
    }();

    KeyValueSortByPipe.??fac = function KeyValueSortByPipe_Factory(t) {
      return new (t || KeyValueSortByPipe)();
    };

    KeyValueSortByPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
      name: "keyValueSortBy",
      type: KeyValueSortByPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](KeyValueSortByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'keyValueSortBy'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/app.actions.ts":
  /*!**************************************!*\
    !*** ./src/app/store/app.actions.ts ***!
    \**************************************/

  /*! exports provided: requestGetPDF, getPDF, effectError, requestSaveData, saveData, saveDataSuccess, dietChanged, failedMiserably */

  /***/
  function srcAppStoreAppActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "requestGetPDF", function () {
      return requestGetPDF;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPDF", function () {
      return getPDF;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "effectError", function () {
      return effectError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "requestSaveData", function () {
      return requestSaveData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "saveData", function () {
      return saveData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "saveDataSuccess", function () {
      return saveDataSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dietChanged", function () {
      return dietChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "failedMiserably", function () {
      return failedMiserably;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var requestGetPDF = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REQUEST_GET_PDF', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getPDF = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_PDF', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var effectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SAVE_ERROR', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var requestSaveData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REQUEST_SAVE_DATA');
    var saveData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SAVE_DATA', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var saveDataSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SAVE_DATA_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var dietChanged = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('DIET_CHANGED');
    var failedMiserably = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FAILED_MISERABLY');
    /***/
  },

  /***/
  "./src/app/store/app.effects.ts":
  /*!**************************************!*\
    !*** ./src/app/store/app.effects.ts ***!
    \**************************************/

  /*! exports provided: AppEffects */

  /***/
  function srcAppStoreAppEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppEffects", function () {
      return AppEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _utils_filterCorrelated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils/filterCorrelated */
    "./src/utils/filterCorrelated.ts");
    /* harmony import */


    var _app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.actions */
    "./src/app/store/app.actions.ts");
    /* harmony import */


    var _diet_diet_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./diet/diet.actions */
    "./src/app/store/diet/diet.actions.ts");
    /* harmony import */


    var _userData_userData_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./userData/userData.actions */
    "./src/app/store/userData/userData.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _userData_userData_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./userData/userData.effects */
    "./src/app/store/userData/userData.effects.ts");
    /* harmony import */


    var _diet_diet_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./diet/diet.effects */
    "./src/app/store/diet/diet.effects.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");

    var AppEffects = function AppEffects(actions$, store$, userDataEffects, dietEffects, apiSvc) {
      var _this9 = this;

      _classCallCheck(this, AppEffects);

      this.actions$ = actions$;
      this.store$ = store$;
      this.userDataEffects = userDataEffects;
      this.dietEffects = dietEffects;
      this.apiSvc = apiSvc;
      this.requestSaveData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_6__["requestSaveData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return _app_actions__WEBPACK_IMPORTED_MODULE_6__["saveData"]({
            correlationId: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])()
          });
        }));
      });
      this.saveData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_6__["saveData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (action) {
          return [_userData_userData_actions__WEBPACK_IMPORTED_MODULE_8__["saveUserData"]({
            correlationId: action.correlationId
          }), _diet_diet_actions__WEBPACK_IMPORTED_MODULE_7__["saveDiet"]({
            correlationId: action.correlationId
          })];
        }));
      });
      this.saveDataSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_6__["saveData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(_this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_userData_userData_actions__WEBPACK_IMPORTED_MODULE_8__["saveUserDataSuccess"]), Object(_utils_filterCorrelated__WEBPACK_IMPORTED_MODULE_5__["filterCorrelatedId"])(action.correlationId)), _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_diet_diet_actions__WEBPACK_IMPORTED_MODULE_7__["saveDietSuccess"]), Object(_utils_filterCorrelated__WEBPACK_IMPORTED_MODULE_5__["filterCorrelatedId"])(action.correlationId))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pair) {
            return _app_actions__WEBPACK_IMPORTED_MODULE_6__["saveDataSuccess"]({
              correlationId: action.correlationId
            });
          }));
        }));
      });
      this.requestGetPDF$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_6__["requestGetPDF"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
          var correlationId = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
          return [_app_actions__WEBPACK_IMPORTED_MODULE_6__["getPDF"]({
            correlationId: correlationId,
            date: action.date
          }), _app_actions__WEBPACK_IMPORTED_MODULE_6__["saveData"]({
            correlationId: correlationId
          })];
        }));
      });
      this.getPDF$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_6__["requestGetPDF"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
          return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_6__["getPDF"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (getPDFAction) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(getPDFAction), _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_6__["saveDataSuccess"]), Object(_utils_filterCorrelated__WEBPACK_IMPORTED_MODULE_5__["filterCorrelatedId"])(getPDFAction.correlationId))]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this9.apiSvc.getPDF(action.date);
          }));
        }));
      });
      this.handleError$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_6__["effectError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
          alert(action.error);
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }));
      });
    };

    AppEffects.??fac = function AppEffects_Factory(t) {
      return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_userData_userData_effects__WEBPACK_IMPORTED_MODULE_10__["UserDataEffects"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_diet_diet_effects__WEBPACK_IMPORTED_MODULE_11__["DietEffects"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"]));
    };

    AppEffects.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AppEffects,
      factory: AppEffects.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
        }, {
          type: _userData_userData_effects__WEBPACK_IMPORTED_MODULE_10__["UserDataEffects"]
        }, {
          type: _diet_diet_effects__WEBPACK_IMPORTED_MODULE_11__["DietEffects"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/app.selectors.ts":
  /*!****************************************!*\
    !*** ./src/app/store/app.selectors.ts ***!
    \****************************************/

  /*! exports provided: selectPDFBlob, selectDietRemainingCalories, selectDietRemainingProteinGrams, selectDietRemainingFatGrams, selectDietRemainingFiberGrams, selectDietRemainingCarbsGrams */

  /***/
  function srcAppStoreAppSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectPDFBlob", function () {
      return selectPDFBlob;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDietRemainingCalories", function () {
      return selectDietRemainingCalories;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDietRemainingProteinGrams", function () {
      return selectDietRemainingProteinGrams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDietRemainingFatGrams", function () {
      return selectDietRemainingFatGrams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDietRemainingFiberGrams", function () {
      return selectDietRemainingFiberGrams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDietRemainingCarbsGrams", function () {
      return selectDietRemainingCarbsGrams;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _utils_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/calculator */
    "./src/utils/calculator.ts");
    /* harmony import */


    var _diet_diet_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./diet/diet.selectors */
    "./src/app/store/diet/diet.selectors.ts");
    /* harmony import */


    var _userData_userData_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userData/userData.selectors */
    "./src/app/store/userData/userData.selectors.ts");

    var selectPDFBlob = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(function (state) {
      return state.blobPDFRequest;
    }, function (blobState) {
      return blobState.pdfBlob;
    });
    var selectDietRemainingCalories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_3__["selectGoalCalories"], _diet_diet_selectors__WEBPACK_IMPORTED_MODULE_2__["selectDiet"], function (goalCalories, diet) {
      if (!goalCalories) {
        return 0;
      }

      return goalCalories - new _utils_calculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"]().getDietInfo(diet, 'kCalories');
    });
    var selectDietRemainingProteinGrams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_3__["selectGoalProteinGrams"], _diet_diet_selectors__WEBPACK_IMPORTED_MODULE_2__["selectDiet"], function (goalProteinGrams, diet) {
      if (!goalProteinGrams) {
        return 0;
      }

      return goalProteinGrams - new _utils_calculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"]().getDietInfo(diet, 'protein');
    });
    var selectDietRemainingFatGrams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_3__["selectGoalFatGrams"], _diet_diet_selectors__WEBPACK_IMPORTED_MODULE_2__["selectDiet"], function (goalProteinGrams, diet) {
      if (!goalProteinGrams) {
        return 0;
      }

      return goalProteinGrams - new _utils_calculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"]().getDietInfo(diet, 'fat');
    });
    var selectDietRemainingFiberGrams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_3__["selectGoalFatGrams"], _diet_diet_selectors__WEBPACK_IMPORTED_MODULE_2__["selectDiet"], function (goalFiberGrams, diet) {
      return 20 - new _utils_calculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"]().getDietInfo(diet, 'fiber'); // if ( !goalFiberGrams ) {
      //     return 0;
      // }
    });
    var selectDietRemainingCarbsGrams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_3__["selectGoalCarbsGrams"], _diet_diet_selectors__WEBPACK_IMPORTED_MODULE_2__["selectDiet"], function (goalProteinGrams, diet) {
      if (!goalProteinGrams) {
        return 0;
      }

      return goalProteinGrams - new _utils_calculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"]().getDietInfo(diet, 'carbohydrates');
    });
    /***/
  },

  /***/
  "./src/app/store/app.state.ts":
  /*!************************************!*\
    !*** ./src/app/store/app.state.ts ***!
    \************************************/

  /*! exports provided: initialState */

  /***/
  function srcAppStoreAppStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });

    var initialState = {
      blobPDFRequest: {
        pdfBlob: null
      },
      userData: {
        userName: null,
        gender: null,
        age: null,
        height: null,
        weight: null,
        activityIndex: null,
        bodyFat: null,
        goal: null,
        carbsRatio: null,
        fatRatio: null,
        fiberRatio: null,
        proteinRatio: null,
        pendingChanges: false
      },
      diet: {
        id: null,
        date: null,
        meals: {},
        pendingChanges: false
      }
    };
    /***/
  },

  /***/
  "./src/app/store/diet/diet.actions.ts":
  /*!********************************************!*\
    !*** ./src/app/store/diet/diet.actions.ts ***!
    \********************************************/

  /*! exports provided: getDietForDay, getDietForDayLoadSuccess, saveDiet, saveDietSuccess, addMeal, updateMealDescription, deleteMeal, addProductLine, deleteProductLine, changeProductLineAmount, changeProductLineProduct */

  /***/
  function srcAppStoreDietDietActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDietForDay", function () {
      return getDietForDay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDietForDayLoadSuccess", function () {
      return getDietForDayLoadSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "saveDiet", function () {
      return saveDiet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "saveDietSuccess", function () {
      return saveDietSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addMeal", function () {
      return addMeal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateMealDescription", function () {
      return updateMealDescription;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteMeal", function () {
      return deleteMeal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addProductLine", function () {
      return addProductLine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteProductLine", function () {
      return deleteProductLine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "changeProductLineAmount", function () {
      return changeProductLineAmount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "changeProductLineProduct", function () {
      return changeProductLineProduct;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var getDietForDay = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_DIET_FOR_DAY', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getDietForDayLoadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_DIET_FOR_DAY_LOAD_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var saveDiet = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SAVE_DIET', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var saveDietSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SAVE_DIET_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addMeal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_MEAL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateMealDescription = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_MEAL_DESCRIPTION', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteMeal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('DELETE_MEAL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addProductLine = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_PRODUCT_LINE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()); // tslint:disable-next-line:max-line-length

    var deleteProductLine = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('PRODUCT_LINE_DELETED', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()); // tslint:disable-next-line:max-line-length

    var changeProductLineAmount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('CHANGE_PRODUCT_LINE_AMOUNT', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()); // tslint:disable-next-line:max-line-length

    var changeProductLineProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('CHANGE_PRODUCT_LINE_PRODUCT', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/diet/diet.effects.ts":
  /*!********************************************!*\
    !*** ./src/app/store/diet/diet.effects.ts ***!
    \********************************************/

  /*! exports provided: DietEffects */

  /***/
  function srcAppStoreDietDietEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DietEffects", function () {
      return DietEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var uuid_v4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! uuid/v4 */
    "./node_modules/uuid/v4.js");
    /* harmony import */


    var uuid_v4__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _app_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app.actions */
    "./src/app/store/app.actions.ts");
    /* harmony import */


    var _diet_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./diet.actions */
    "./src/app/store/diet/diet.actions.ts");
    /* harmony import */


    var _diet_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./diet.selectors */
    "./src/app/store/diet/diet.selectors.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var DietEffects = function DietEffects(actions$, apiSvc, store$) {
      var _this10 = this;

      _classCallCheck(this, DietEffects);

      this.actions$ = actions$;
      this.apiSvc = apiSvc;
      this.store$ = store$;
      this.loadDiet$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this10.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_diet_actions__WEBPACK_IMPORTED_MODULE_8__["getDietForDay"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) {
          return _this10.apiSvc.getDiet(action.date).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (diet) {
            if (!diet) {
              var newDiet = {
                id: null,
                date: action.date.format('YYYY-MM-DD'),
                meals: {}
              };
              var comidas = ['DESAYUNO', 'COMIDA', 'CENA', 'MERIENDA'];
              var nowMoment = moment__WEBPACK_IMPORTED_MODULE_3__();
              newDiet.meals = comidas.reduce(function (acc, currentValue, index) {
                var id = uuid_v4__WEBPACK_IMPORTED_MODULE_6__();
                acc[id] = {
                  id: id,
                  createdAt: nowMoment.add(index, 'seconds').format('YYYY-MM-DD HH:mm:ss'),
                  description: currentValue,
                  productLines: {}
                };
                return acc;
              }, {});
              diet = newDiet;
            }

            return _diet_actions__WEBPACK_IMPORTED_MODULE_8__["getDietForDayLoadSuccess"]({
              diet: diet
            });
          }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_app_actions__WEBPACK_IMPORTED_MODULE_7__["effectError"])({
            error: "Error al cargar dieta: ".concat(e.message)
          }));
        }));
      });
      this.saveDiet$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this10.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_diet_actions__WEBPACK_IMPORTED_MODULE_8__["saveDiet"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(_this10.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_diet_selectors__WEBPACK_IMPORTED_MODULE_9__["selectDiet"]))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              action = _ref5[0],
              diet = _ref5[1];

          return _this10.apiSvc.saveDiet(diet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            return _diet_actions__WEBPACK_IMPORTED_MODULE_8__["saveDietSuccess"]({
              dietId: response.dietId,
              correlationId: action.correlationId
            });
          }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_app_actions__WEBPACK_IMPORTED_MODULE_7__["effectError"])({
            error: "Error al salvar datos de usuario: ".concat(e.message)
          }));
        }));
      });
    };

    DietEffects.??fac = function DietEffects_Factory(t) {
      return new (t || DietEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    DietEffects.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: DietEffects,
      factory: DietEffects.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DietEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/diet/diet.reducer.ts":
  /*!********************************************!*\
    !*** ./src/app/store/diet/diet.reducer.ts ***!
    \********************************************/

  /*! exports provided: reducer, deleteFromEntityState */

  /***/
  function srcAppStoreDietDietReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteFromEntityState", function () {
      return deleteFromEntityState;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.state */
    "./src/app/store/app.state.ts");
    /* harmony import */


    var _diet_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./diet.actions */
    "./src/app/store/diet/diet.actions.ts");

    var dietReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_app_state__WEBPACK_IMPORTED_MODULE_3__["initialState"].diet, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_diet_actions__WEBPACK_IMPORTED_MODULE_4__["getDietForDayLoadSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), action.diet);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_diet_actions__WEBPACK_IMPORTED_MODULE_4__["saveDietSuccess"], function (state, action) {
      var newState = Object.assign(Object.assign({}, state), {
        pendingChanges: false
      });

      if (state.id !== action.dietId) {
        return Object.assign(Object.assign({}, newState), {
          id: action.dietId
        });
      }

      return newState;
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_diet_actions__WEBPACK_IMPORTED_MODULE_4__["addMeal"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        meals: Object.assign(Object.assign({}, state.meals), _defineProperty({}, action.id, {
          id: action.id,
          description: action.description,
          productLines: {},
          createdAt: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss')
        })),
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_diet_actions__WEBPACK_IMPORTED_MODULE_4__["updateMealDescription"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        meals: updateItemInDictionary(state.meals, action.mealId, function (mealToUpdate) {
          return Object.assign(Object.assign({}, mealToUpdate), {
            description: action.description
          });
        }),
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_diet_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMeal"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        meals: deleteFromEntityState(state.meals, action.mealId),
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_diet_actions__WEBPACK_IMPORTED_MODULE_4__["addProductLine"], function (state, action) {
      var newID = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
      return Object.assign(Object.assign({}, state), {
        meals: updateItemInDictionary(state.meals, action.mealId, function (mealToUpdate) {
          return Object.assign(Object.assign({}, mealToUpdate), {
            productLines: Object.assign(Object.assign({}, mealToUpdate.productLines), _defineProperty({}, newID, {
              id: newID,
              product: null,
              amount: 0,
              createdAt: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss')
            }))
          });
        }),
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_diet_actions__WEBPACK_IMPORTED_MODULE_4__["deleteProductLine"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        meals: Object.assign(Object.assign({}, state.meals), _defineProperty({}, action.mealId, Object.assign(Object.assign({}, state.meals[action.mealId]), {
          productLines: deleteFromEntityState(state.meals[action.mealId].productLines, action.productLineId)
        }))),
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_diet_actions__WEBPACK_IMPORTED_MODULE_4__["changeProductLineAmount"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        meals: Object.assign(Object.assign({}, state.meals), _defineProperty({}, action.mealId, Object.assign(Object.assign({}, state.meals[action.mealId]), {
          productLines: Object.assign(Object.assign({}, state.meals[action.mealId].productLines), _defineProperty({}, action.productLineId, Object.assign(Object.assign({}, state.meals[action.mealId].productLines[action.productLineId]), {
            amount: action.amount
          })))
        }))),
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_diet_actions__WEBPACK_IMPORTED_MODULE_4__["changeProductLineProduct"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        meals: Object.assign(Object.assign({}, state.meals), _defineProperty({}, action.mealId, Object.assign(Object.assign({}, state.meals[action.mealId]), {
          productLines: Object.assign(Object.assign({}, state.meals[action.mealId].productLines), _defineProperty({}, action.productLineId, Object.assign(Object.assign({}, state.meals[action.mealId].productLines[action.productLineId]), {
            product: action.product
          })))
        }))),
        pendingChanges: true
      });
    }));

    function reducer(state, action) {
      return dietReducer(state, action);
    }

    function deleteFromEntityState(entityState, id) {
      return Object.keys(entityState).reduce(function (acc, key) {
        // tslint:disable-next-line:triple-equals
        if (key != id) {
          acc[key] = entityState[key];
        }

        return acc;
      }, {});
    }

    function updateItemInDictionary(dictionary, itemId, updateItemCallback) {
      return Object.assign(Object.assign({}, dictionary), _defineProperty({}, itemId, updateItemCallback(dictionary[itemId])));
    }
    /***/

  },

  /***/
  "./src/app/store/diet/diet.selectors.ts":
  /*!**********************************************!*\
    !*** ./src/app/store/diet/diet.selectors.ts ***!
    \**********************************************/

  /*! exports provided: selectDiet, selectChangesPending */

  /***/
  function srcAppStoreDietDietSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDiet", function () {
      return selectDiet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectChangesPending", function () {
      return selectChangesPending;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var selectDiet = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(function (state) {
      return state.diet;
    }, rxjs__WEBPACK_IMPORTED_MODULE_1__["identity"]);
    var selectChangesPending = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectDiet, function (diet) {
      return diet.pendingChanges;
    });
    /***/
  },

  /***/
  "./src/app/store/userData/userData.actions.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/userData/userData.actions.ts ***!
    \****************************************************/

  /*! exports provided: updateAge, updateHeight, updateWeight, updateActivityIndex, updateBodyFatPercentage, updateGoal, updateProteinRatio, updateCarbsRatio, updateFatRatio, updateGender, getUserData, userDataLoadSuccess, saveUserData, saveUserDataSuccess */

  /***/
  function srcAppStoreUserDataUserDataActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateAge", function () {
      return updateAge;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateHeight", function () {
      return updateHeight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateWeight", function () {
      return updateWeight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateActivityIndex", function () {
      return updateActivityIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateBodyFatPercentage", function () {
      return updateBodyFatPercentage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateGoal", function () {
      return updateGoal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateProteinRatio", function () {
      return updateProteinRatio;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateCarbsRatio", function () {
      return updateCarbsRatio;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateFatRatio", function () {
      return updateFatRatio;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateGender", function () {
      return updateGender;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUserData", function () {
      return getUserData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userDataLoadSuccess", function () {
      return userDataLoadSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "saveUserData", function () {
      return saveUserData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "saveUserDataSuccess", function () {
      return saveUserDataSuccess;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var updateAge = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_AGE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateHeight = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_HEIGHT', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateWeight = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_WEIGHT', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateActivityIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_ACTIVITY_INDEX', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateBodyFatPercentage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_BODY_FAT_PERCENTAGE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateGoal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_GOAL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateProteinRatio = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PROTEIN_RATIO', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateCarbsRatio = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_CARBS_RATIO', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateFatRatio = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_FAT_RATIO', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateGender = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_GENDER', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getUserData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_USER_DATA');
    var userDataLoadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('USER_DATA_LOAD_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var saveUserData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SAVE_USER_DATA', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var saveUserDataSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SAVE_USER_DATA_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/userData/userData.effects.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/userData/userData.effects.ts ***!
    \****************************************************/

  /*! exports provided: UserDataEffects */

  /***/
  function srcAppStoreUserDataUserDataEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataEffects", function () {
      return UserDataEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app.actions */
    "./src/app/store/app.actions.ts");
    /* harmony import */


    var _userData_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./userData.actions */
    "./src/app/store/userData/userData.actions.ts");
    /* harmony import */


    var _userData_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./userData.selectors */
    "./src/app/store/userData/userData.selectors.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var UserDataEffects = function UserDataEffects(actions$, apiSvc, store$) {
      var _this11 = this;

      _classCallCheck(this, UserDataEffects);

      this.actions$ = actions$;
      this.apiSvc = apiSvc;
      this.store$ = store$;
      this.loadUserData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this11.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_userData_actions__WEBPACK_IMPORTED_MODULE_6__["getUserData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
          return _this11.apiSvc.getUserData();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userData) {
          return Object(_userData_actions__WEBPACK_IMPORTED_MODULE_6__["userDataLoadSuccess"])({
            userData: userData
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_app_actions__WEBPACK_IMPORTED_MODULE_5__["effectError"])({
            error: "Error al cargar datos de usuario: ".concat(e.message)
          }));
        }));
      });
      this.saveUserData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this11.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_userData_actions__WEBPACK_IMPORTED_MODULE_6__["saveUserData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(_this11.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_userData_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUserData"]))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              action = _ref7[0],
              userData = _ref7[1];

          return _this11.apiSvc.saveUserData(userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return Object(_userData_actions__WEBPACK_IMPORTED_MODULE_6__["saveUserDataSuccess"])({
              correlationId: action.correlationId
            });
          }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_app_actions__WEBPACK_IMPORTED_MODULE_5__["effectError"])({
            error: "Error al salvar datos de usuario: ".concat(e.message)
          }));
        }));
      });
    };

    UserDataEffects.??fac = function UserDataEffects_Factory(t) {
      return new (t || UserDataEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    UserDataEffects.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: UserDataEffects,
      factory: UserDataEffects.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserDataEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/userData/userData.reducer.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/userData/userData.reducer.ts ***!
    \****************************************************/

  /*! exports provided: reducer */

  /***/
  function srcAppStoreUserDataUserDataReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _utils_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../utils/calculator */
    "./src/utils/calculator.ts");
    /* harmony import */


    var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.state */
    "./src/app/store/app.state.ts");
    /* harmony import */


    var _userData_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userData.actions */
    "./src/app/store/userData/userData.actions.ts");
    /* harmony import */


    var _userData_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./userData.selectors */
    "./src/app/store/userData/userData.selectors.ts");

    var userDataReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_app_state__WEBPACK_IMPORTED_MODULE_2__["initialState"].userData, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateHeight"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        height: action.value,
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateWeight"], function (state, action) {
      var updatedState = Object.assign(Object.assign({}, state), {
        weight: action.value
      });
      var fakeParentState = {
        userData: updatedState,
        diet: null,
        pdfBlob: null
      };
      var goalCalories = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalCalories"])(fakeParentState);
      var proteinKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalProteinKCal"])(fakeParentState);
      var fatKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalFatKCal"])(fakeParentState);
      var leanBodyMass = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLeanBodyMass"])(fakeParentState);
      var carbsRatio = Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["getRatioByWeightAndAmount"])(leanBodyMass, Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["carbsKCalToGrams"])(goalCalories - proteinKCal - fatKCal));
      return Object.assign(Object.assign({}, state), {
        weight: action.value,
        carbsRatio: carbsRatio,
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateActivityIndex"], function (state, action) {
      var updatedState = Object.assign(Object.assign({}, state), {
        activityIndex: action.value
      });
      var fakeParentState = {
        userData: updatedState,
        diet: null,
        pdfBlob: null
      };
      var goalCalories = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalCalories"])(fakeParentState);
      var proteinKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalProteinKCal"])(fakeParentState);
      var fatKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalFatKCal"])(fakeParentState);
      var leanBodyMass = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLeanBodyMass"])(fakeParentState);
      var carbsRatio = Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["getRatioByWeightAndAmount"])(leanBodyMass, Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["carbsKCalToGrams"])(goalCalories - proteinKCal - fatKCal));
      return Object.assign(Object.assign({}, state), {
        activityIndex: action.value,
        carbsRatio: carbsRatio,
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateBodyFatPercentage"], function (state, action) {
      var updatedState = Object.assign(Object.assign({}, state), {
        bodyFat: action.value
      });
      var fakeParentState = {
        userData: updatedState,
        diet: null,
        pdfBlob: null
      };
      var goalCalories = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalCalories"])(fakeParentState);
      var proteinKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalProteinKCal"])(fakeParentState);
      var fatKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalFatKCal"])(fakeParentState);
      var leanBodyMass = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLeanBodyMass"])(fakeParentState);
      var carbsRatio = Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["getRatioByWeightAndAmount"])(leanBodyMass, Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["carbsKCalToGrams"])(goalCalories - proteinKCal - fatKCal));
      return Object.assign(Object.assign({}, state), {
        bodyFat: action.value,
        carbsRatio: carbsRatio,
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateAge"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        age: action.value,
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateGoal"], function (state, action) {
      var updatedState = Object.assign(Object.assign({}, state), {
        goal: action.value
      });
      var fakeParentState = {
        userData: updatedState,
        diet: null,
        pdfBlob: null
      };
      var goalCalories = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalCalories"])(fakeParentState);
      var proteinKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalProteinKCal"])(fakeParentState);
      var fatKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalFatKCal"])(fakeParentState);
      var leanBodyMass = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLeanBodyMass"])(fakeParentState);
      var carbsRatio = Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["getRatioByWeightAndAmount"])(leanBodyMass, Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["carbsKCalToGrams"])(goalCalories - proteinKCal - fatKCal));
      return Object.assign(Object.assign({}, state), {
        goal: action.value,
        carbsRatio: carbsRatio,
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateProteinRatio"], function (state, action) {
      var updatedState = Object.assign(Object.assign({}, state), {
        proteinRatio: action.value
      });
      var fakeParentState = {
        userData: updatedState,
        diet: null,
        pdfBlob: null
      };
      var goalCalories = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalCalories"])(fakeParentState);
      var proteinKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalProteinKCal"])(fakeParentState);
      var fatKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalFatKCal"])(fakeParentState);
      var leanBodyMass = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLeanBodyMass"])(fakeParentState);
      var carbsRatio = Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["getRatioByWeightAndAmount"])(leanBodyMass, Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["carbsKCalToGrams"])(goalCalories - proteinKCal - fatKCal));
      return Object.assign(Object.assign({}, state), {
        proteinRatio: action.value,
        carbsRatio: carbsRatio
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateCarbsRatio"], function (state, action) {
      var updatedState = Object.assign(Object.assign({}, state), {
        carbsRatio: action.value
      });
      var fakeParentState = {
        userData: updatedState,
        diet: null,
        pdfBlob: null
      };
      var goalCalories = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalCalories"])(fakeParentState);
      var proteinKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalProteinKCal"])(fakeParentState);
      var carbsKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalCarbsKCal"])(fakeParentState);
      var leanBodyMass = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLeanBodyMass"])(fakeParentState);
      var fatRatio = Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["getRatioByWeightAndAmount"])(leanBodyMass, Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["fatKCalToGrams"])(goalCalories - proteinKCal - carbsKCal));
      return Object.assign(Object.assign({}, state), {
        carbsRatio: action.value,
        fatRatio: fatRatio,
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateFatRatio"], function (state, action) {
      var updatedState = Object.assign(Object.assign({}, state), {
        fatRatio: action.value
      });
      var fakeParentState = {
        userData: updatedState,
        diet: null,
        pdfBlob: null
      };
      var goalCalories = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalCalories"])(fakeParentState);
      var proteinKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalProteinKCal"])(fakeParentState);
      var fatKCal = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectGoalFatKCal"])(fakeParentState);
      var leanBodyMass = Object(_userData_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLeanBodyMass"])(fakeParentState);
      var carbsRatio = +Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["getRatioByWeightAndAmount"])(leanBodyMass, Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_1__["carbsKCalToGrams"])(goalCalories - proteinKCal - fatKCal)).toFixed(2);
      return Object.assign(Object.assign({}, state), {
        fatRatio: action.value,
        carbsRatio: carbsRatio,
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["userDataLoadSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), action.userData);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["updateGender"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        gender: action.value,
        pendingChanges: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_userData_actions__WEBPACK_IMPORTED_MODULE_3__["saveUserDataSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        pendingChanges: false
      });
    }));

    function reducer(state, action) {
      return userDataReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/userData/userData.selectors.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/userData/userData.selectors.ts ***!
    \******************************************************/

  /*! exports provided: selectUserData, selectBodyMassIndex, selectLeanBodyMass, selectLeanBodyMassIndex, selectBasalCalories, selectGoalCalories, selectGoalProteinGrams, selectGoalProteinKCal, selectGoalFatGrams, selectGoalFiberGrams, selectGoalFatKCal, selectGoalCarbsGrams, selectGoalCarbsKCal, selectChangesPending */

  /***/
  function srcAppStoreUserDataUserDataSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUserData", function () {
      return selectUserData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectBodyMassIndex", function () {
      return selectBodyMassIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectLeanBodyMass", function () {
      return selectLeanBodyMass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectLeanBodyMassIndex", function () {
      return selectLeanBodyMassIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectBasalCalories", function () {
      return selectBasalCalories;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGoalCalories", function () {
      return selectGoalCalories;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGoalProteinGrams", function () {
      return selectGoalProteinGrams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGoalProteinKCal", function () {
      return selectGoalProteinKCal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGoalFatGrams", function () {
      return selectGoalFatGrams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGoalFiberGrams", function () {
      return selectGoalFiberGrams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGoalFatKCal", function () {
      return selectGoalFatKCal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGoalCarbsGrams", function () {
      return selectGoalCarbsGrams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGoalCarbsKCal", function () {
      return selectGoalCarbsKCal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectChangesPending", function () {
      return selectChangesPending;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var selectUserData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(function (state) {
      return state.userData;
    }, function (userData) {
      return userData;
    });
    var selectBodyMassIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserData, function (userData) {
      if (!userData) {
        return null;
      }

      if (!userData.weight || !userData.height) {
        return null;
      }

      return 10000 * userData.weight / (userData.height * userData.height);
    });
    var selectLeanBodyMass = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserData, function (userData) {
      if (!userData) {
        return null;
      }

      if (!userData.bodyFat || !userData.weight) {
        return null;
      }

      return (100 - userData.bodyFat) * userData.weight / 100;
    });
    var selectLeanBodyMassIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserData, selectLeanBodyMass, function (userData, leanBodyMass) {
      if (!userData.bodyFat || !userData.weight || !userData.height) {
        return null;
      }

      return 10000 * leanBodyMass / (userData.height * userData.height);
    });
    var selectBasalCalories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLeanBodyMass, function (leanBodyMass) {
      return 370 + 21.6 * leanBodyMass;
    });
    var selectGoalCalories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserData, selectBasalCalories, function (userData, basalCalories) {
      if (!userData.bodyFat || !userData.weight || !userData.activityIndex || !userData.goal) {
        return null;
      }

      var maintenanceCalories = userData.activityIndex * basalCalories;
      var multiplier;
      var goal = +userData.goal;

      switch (goal) {
        case 1:
          multiplier = 1;
          break;

        case 2:
          multiplier = 1 - 0.15;
          break;

        case 3:
          multiplier = 1 + 0.10;
      }

      return maintenanceCalories * multiplier;
    });
    var selectGoalProteinGrams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserData, selectLeanBodyMass, function (userData, leanBodyMass) {
      return leanBodyMass * userData.proteinRatio;
    });
    var selectGoalProteinKCal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGoalProteinGrams, function (proteinGrams) {
      return proteinGrams * 4;
    });
    var selectGoalFatGrams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserData, selectLeanBodyMass, function (userData, leanBodyMass) {
      return leanBodyMass * userData.fatRatio;
    });
    var selectGoalFiberGrams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserData, function (fiberGrams) {
      return 20;
    });
    var selectGoalFatKCal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGoalFatGrams, function (fatGrams) {
      return fatGrams * 9;
    });
    var selectGoalCarbsGrams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserData, selectLeanBodyMass, function (userData, leanBodyMass) {
      return leanBodyMass * userData.carbsRatio;
    });
    var selectGoalCarbsKCal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGoalCarbsGrams, function (carbsGrams) {
      return carbsGrams * 4;
    });
    var selectChangesPending = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserData, function (userData) {
      return userData.pendingChanges;
    });
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
      production: true,
      baseHref: '/wp-content/plugins/calculadora-caloria-plugin/angular'
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
  "./src/utils/calculator.ts":
  /*!*********************************!*\
    !*** ./src/utils/calculator.ts ***!
    \*********************************/

  /*! exports provided: Calculator, getNutrientByWeightRatio, getRatioByWeightAndAmount, proteinGramsToKCal, carbsGramsToKCal, fatGramsToKCal, proteinKCalToGrams, carbsKCalToGrams, fatKCalToGrams */

  /***/
  function srcUtilsCalculatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Calculator", function () {
      return Calculator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNutrientByWeightRatio", function () {
      return getNutrientByWeightRatio;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRatioByWeightAndAmount", function () {
      return getRatioByWeightAndAmount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "proteinGramsToKCal", function () {
      return proteinGramsToKCal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "carbsGramsToKCal", function () {
      return carbsGramsToKCal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fatGramsToKCal", function () {
      return fatGramsToKCal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "proteinKCalToGrams", function () {
      return proteinKCalToGrams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "carbsKCalToGrams", function () {
      return carbsKCalToGrams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fatKCalToGrams", function () {
      return fatKCalToGrams;
    });
    /* harmony import */


    var _app_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../app/store/userData/userData.selectors */
    "./src/app/store/userData/userData.selectors.ts");

    var Calculator =
    /*#__PURE__*/
    function () {
      function Calculator() {
        _classCallCheck(this, Calculator);
      }

      _createClass(Calculator, [{
        key: "getDietInfo",
        value: function getDietInfo(diet, key) {
          var _this12 = this;

          return Object.values(diet.meals).reduce(function (acc, meal) {
            return acc + _this12.getMealInfo(meal, key);
          }, 0);
        }
      }, {
        key: "getMealEnergyInfo",
        value: function getMealEnergyInfo(meal, nutrient) {
          var protein = this.getMealInfo(meal, 'protein');
          var carbohydrates = this.getMealInfo(meal, 'carbohydrates');
          var fat = this.getMealInfo(meal, 'fat');
          var fiber = this.getMealInfo(meal, 'fiber');

          if (fat + carbohydrates + protein === 0) {
            return 0;
          }

          var numerator;

          switch (nutrient) {
            case 'fat':
              numerator = fat * 9;
              break;

            case 'protein':
              numerator = protein * 4;
              break;

            case 'carbohydrates':
              numerator = carbohydrates * 4;
              break;

            case 'fiber':
              numerator = fiber * 0;
              break;
          }

          return numerator / (protein * 4 + carbohydrates * 4 + fat * 9);
        }
      }, {
        key: "getMealRecommendedIntakePercent",
        value: function getMealRecommendedIntakePercent(userData, meal, nutrient) {
          switch (nutrient) {
            case 'kCalories':
              var totalCalories = Object(_app_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_0__["selectGoalCalories"])({
                userData: userData,
                diet: null
              });
              return this.getMealInfo(meal, nutrient) / totalCalories;

            case 'protein':
              var proteinGrams = Object(_app_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_0__["selectGoalProteinGrams"])({
                userData: userData,
                diet: null
              });
              return this.getMealInfo(meal, nutrient) / proteinGrams;

            case 'carbohydrates':
              var carbohydrates = Object(_app_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_0__["selectGoalCarbsGrams"])({
                userData: userData,
                diet: null
              });
              return this.getMealInfo(meal, nutrient) / carbohydrates;

            case 'fat':
              var fat = Object(_app_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_0__["selectGoalFatGrams"])({
                userData: userData,
                diet: null
              });
              return this.getMealInfo(meal, nutrient) / fat;

            case 'fiber':
              var fiber = Object(_app_store_userData_userData_selectors__WEBPACK_IMPORTED_MODULE_0__["selectGoalFatGrams"])({
                userData: userData,
                diet: null
              });
              return this.getMealInfo(meal, nutrient) / fiber;
          }
        }
      }, {
        key: "getProductLineInfo",
        value: function getProductLineInfo(productLine, productKey) {
          if (!productLine.product) {
            return null;
          }

          return productLine.product[productKey] / productLine.product.amount * productLine.amount;
        }
      }, {
        key: "getMealInfo",
        value: function getMealInfo(meal, key) {
          var _this13 = this;

          return Object.values(meal.productLines).reduce(function (acc, pl) {
            acc += _this13.getProductLineInfo(pl, key);
            return acc;
          }, 0);
        }
      }]);

      return Calculator;
    }();

    var getNutrientByWeightRatio = function getNutrientByWeightRatio(weight, ratio) {
      return weight * 2.2 * ratio;
    };

    var getRatioByWeightAndAmount = function getRatioByWeightAndAmount(leanBodyMass, amount) {
      return +(amount / leanBodyMass).toFixed(2);
    };

    var proteinGramsToKCal = function proteinGramsToKCal(x) {
      return x * 4;
    };

    var carbsGramsToKCal = function carbsGramsToKCal(x) {
      return x * 4;
    };

    var fatGramsToKCal = function fatGramsToKCal(x) {
      return x * 9;
    };

    var proteinKCalToGrams = function proteinKCalToGrams(x) {
      return x / 4;
    };

    var carbsKCalToGrams = function carbsKCalToGrams(x) {
      return x / 4;
    };

    var fatKCalToGrams = function fatKCalToGrams(x) {
      return x / 9;
    };
    /***/

  },

  /***/
  "./src/utils/diacriticRegex.ts":
  /*!*************************************!*\
    !*** ./src/utils/diacriticRegex.ts ***!
    \*************************************/

  /*! exports provided: mappings, mergeMappings, replacer, toRegex, toString */

  /***/
  function srcUtilsDiacriticRegexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mappings", function () {
      return mappings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeMappings", function () {
      return mergeMappings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "replacer", function () {
      return replacer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toRegex", function () {
      return toRegex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toString", function () {
      return toString;
    });

    var mappings = {
      a: String.fromCharCode(65, 97, 192, 224, 193, 225, 194, 226, 195, 227, 196, 228, 229, 258, 259),
      e: String.fromCharCode(69, 101, 200, 232, 201, 233, 202, 234, 203, 235),
      i: String.fromCharCode(73, 105, 204, 236, 205, 237, 206, 238, 207, 239),
      o: String.fromCharCode(79, 111, 210, 242, 211, 243, 212, 244, 213, 245, 214, 246),
      n: String.fromCharCode(78, 110, 209, 241),
      u: String.fromCharCode(85, 117, 217, 249, 218, 250, 219, 251, 220, 252),
      c: String.fromCharCode(67, 99, 199, 231),
      y: String.fromCharCode(89, 121, 221, 253, 159, 255)
    };

    function mergeMappings(innerMappings) {
      var base = {};
      Object.keys(mappings).forEach(function (mapping) {
        base[mapping] = mappings[mapping];
      });

      if (innerMappings) {
        Object.keys(innerMappings).forEach(function (mapping) {
          base[mapping] = innerMappings[mapping];
        });
      }

      return base;
    }

    function replacer(input, givenMappings) {
      return input.split('').map(function (letter) {
        Object.keys(givenMappings).forEach(function (mapping) {
          if (mapping && mapping !== givenMappings[mapping] && (mapping === letter || givenMappings[mapping].indexOf(letter) !== -1)) {
            letter = Array.isArray(givenMappings[mapping]) ? givenMappings[mapping].join('') : '[' + givenMappings[mapping] + ']';
            return letter;
          }
        });
        return letter;
      }).join('');
    }
    /** Generate a function that returns a RegExp, that can be reused with the same options */


    function toRegex(options) {
      if (options === void 0) {
        options = {};
      }

      var innerMappings = mergeMappings(typeof options.mappings === 'object' ? options.mappings : null);
      return function (input) {
        return new RegExp(replacer(input, innerMappings), typeof options.flags === 'string' ? options.flags : 'i');
      };
    }
    /** Generate a function that returns a string, that can be reused with the same options */


    function toString(options) {
      if (options === void 0) {
        options = {};
      }

      var innerMappings = mergeMappings(typeof options.mappings === 'object' ? options.mappings : null);
      return function (input) {
        return replacer(input, innerMappings);
      };
    }
    /***/

  },

  /***/
  "./src/utils/filterCorrelated.ts":
  /*!***************************************!*\
    !*** ./src/utils/filterCorrelated.ts ***!
    \***************************************/

  /*! exports provided: filterCorrelatedId */

  /***/
  function srcUtilsFilterCorrelatedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filterCorrelatedId", function () {
      return filterCorrelatedId;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function filterCorrelatedId(correlatedId) {
      return function (source) {
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (x) {
          return x;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (x) {
          return x.correlationId === correlatedId;
        }));
      };
    }
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
    /*! C:\wamp64\www\nutrientrena-plugin-calculadora\academiaangular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
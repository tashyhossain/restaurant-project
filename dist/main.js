/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LoversQuarrel-Regular.ttf */ "./src/components/fonts/LoversQuarrel-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Raleway-Bold.ttf */ "./src/components/fonts/Raleway-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Raleway-Medium.ttf */ "./src/components/fonts/Raleway-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Raleway-MediumItalic.ttf */ "./src/components/fonts/Raleway-MediumItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Lovers Quarrel';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Raleway';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Raleway';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Raleway';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('ttf');\n  font-weight: 400;\n  font-style: italic;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\na {\n  appearance: none;\n  color: #111111;\n  font-family: 'Raleway';\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-decoration: none;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n}\n\nmain {\n  width: 100%;\n}\n\nnav {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 99;\n  height: 100px;\n  padding: 40px;\n}\n\nnav a {\n  padding: 20px 40px;\n}\n\n.active {\n  border-bottom: 2px solid #1F1F1F;\n}\n\n.section { \n  position: relative;\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n#main {\n  top: 0;\n  background-color: #FFFFFF;\n}\n\n.accent {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 200px;\n}\n\n#accent1 {\n  background-color: #efefef;\n}\n\n.photo {\n  position: absolute;\n}\n\n#photo1 {\n  left: 200px;\n  bottom: 160px;\n}\n\n#photo1 img {\n  width: 700px;\n}\n\n.photo:hover .credit { opacity: 1 }\n\n.credit {\n  opacity: 0;\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  z-index: 9;\n  font-size: 8px;\n  padding: 10px;\n  background-color: #efefef;\n  transition: opacity 0.3s ease;\n}\n\n#title {\n  position: absolute; \n  top: 200px;\n  left: 140px;\n  height: 90px;\n  padding: 10px 20px;\n  background-color: #1F1F1F;\n}\n\n#title h1 {\n  color: #FFFFFF;\n  font-family: 'Lovers Quarrel';\n  font-size: 80px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n\n#info {\n  position: absolute;\n  top: 300px;\n  left: 950px;\n  width: 500px;\n}\n\nh2 {\n  padding: 0;\n  color: #111111;\n  font-family: 'Raleway';\n  font-size: 40px; \n  font-weight: 700;\n}\n\n#info p {\n  font-family: 'Raleway';\n  font-weight: 400;\n  font-style: italic;\n}\n\n#info a {\n  font-style: normal;\n}\n\n#menu {\n  background-color: #efefef;\n}\n\n#accent2 {\n  height: 175px;\n  background-color: #ffffff;\n}\n\n#photo2 {\n  top: 125px;\n  right: 0px;\n}\n\n#photo2 img {\n  width: 400px;\n  filter: grayscale(100%);\n}\n\n#photo3 {\n  top: 275px;\n  right: 320px;\n  z-index: 9;\n}\n\n#photo3 img {\n  width: 500px;\n}\n\n#items {\n  position: absolute;\n  top: 50px;\n  left: 100px;\n}\n\n.grid {\n  display: grid;\n  flex-flow: column wrap;\n  width: 930px;\n}\n\n.top {\n  display: flex;\n}\n\n.short {\n  width: 200px;\n}\n\n.long {\n  width: 300px;\n}\n\n.wide {\n  width: 550px;\n}\n\n.left, .right {\n  flex-flow: column wrap;\n}\n\n.cell {\n  margin: 20px;\n  font-family: 'Raleway';\n  font-weight: 700;\n  font-size: 10px;\n  letter-spacing: 1px;\n}\n\nh3 {\n  margin: 0 0 10px 0;\n  font-family: 'Lovers Quarrel';\n  font-size: 35px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.cell div {\n  display: flex;\n}\n\n.cell p {\n  margin: 0 0 10px 0;\n}\n\n.cell .subtitle {\n  text-transform: uppercase;\n  font-size: 8px;\n  font-weight: 400;\n}\n\n.cell .name {\n  width: 60px;\n}\n\n.cell .entree {\n  width: 150px;\n}\n\n.cell .cost {\n  width: 40px;\n}\n\n#drinks {\n  grid-area: 'bev';\n}\n\n#starter {\n  grid-area: 'bre'; \n}\n\n#sweets {\n  grid-area: 'des';\n}\n\n#meals {\n  grid-area: 'ent';\n}\n\n#about {\n  background-color: #ffffff;\n}\n\n#accent3 {\n  background-color: #ceafaf;\n}\n\n#photo4 {\n  position: absolute;\n  top: 80px;\n  left: 300px;\n}\n\n#photo4 img {\n  width: 400px;\n  filter: grayscale(100);\n}\n\n#photo5 {\n  top: 140px;\n  left: 150px;\n  z-index: 9;\n}\n\n#photo5 img {\n  width: 300px;\n}\n\n#hours {\n  position: absolute;\n  top: 200px;\n  left: 800px;\n  font-family: 'Raleway';\n  letter-spacing: 1px;\n}\n\n.date {\n  font-size: 10px;\n  font-weight: 700;\n}\n\n.place {\n  font-size: 12px;\n}\n\n#store {\n  position: absolute;\n  top: 200px;\n  left: 1100px;\n  width: 240px;\n  font-family: 'Raleway';\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\nh4 {\n  font-family: 'Raleway';\n  font-size: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\nfooter {\n  position: absolute;\n  right: 240px;\n  bottom: 90px;\n  font-family: 'Raleway';\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\nfooter b {\n  margin: 0 20px;\n  font-size: 11px;\n  text-transform: uppercase;\n}", "",{"version":3,"sources":["webpack://./src/components/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Lovers Quarrel';\n  src: url('./fonts/LoversQuarrel-Regular.ttf') format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Raleway';\n  src: url('./fonts/Raleway-Bold.ttf') format('ttf');\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Raleway';\n  src: url('./fonts/Raleway-Medium.ttf') format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Raleway';\n  src: url('./fonts/Raleway-MediumItalic.ttf') format('ttf');\n  font-weight: 400;\n  font-style: italic;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\na {\n  appearance: none;\n  color: #111111;\n  font-family: 'Raleway';\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-decoration: none;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n}\n\nmain {\n  width: 100%;\n}\n\nnav {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 99;\n  height: 100px;\n  padding: 40px;\n}\n\nnav a {\n  padding: 20px 40px;\n}\n\n.active {\n  border-bottom: 2px solid #1F1F1F;\n}\n\n.section { \n  position: relative;\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n#main {\n  top: 0;\n  background-color: #FFFFFF;\n}\n\n.accent {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 200px;\n}\n\n#accent1 {\n  background-color: #efefef;\n}\n\n.photo {\n  position: absolute;\n}\n\n#photo1 {\n  left: 200px;\n  bottom: 160px;\n}\n\n#photo1 img {\n  width: 700px;\n}\n\n.photo:hover .credit { opacity: 1 }\n\n.credit {\n  opacity: 0;\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  z-index: 9;\n  font-size: 8px;\n  padding: 10px;\n  background-color: #efefef;\n  transition: opacity 0.3s ease;\n}\n\n#title {\n  position: absolute; \n  top: 200px;\n  left: 140px;\n  height: 90px;\n  padding: 10px 20px;\n  background-color: #1F1F1F;\n}\n\n#title h1 {\n  color: #FFFFFF;\n  font-family: 'Lovers Quarrel';\n  font-size: 80px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n\n#info {\n  position: absolute;\n  top: 300px;\n  left: 950px;\n  width: 500px;\n}\n\nh2 {\n  padding: 0;\n  color: #111111;\n  font-family: 'Raleway';\n  font-size: 40px; \n  font-weight: 700;\n}\n\n#info p {\n  font-family: 'Raleway';\n  font-weight: 400;\n  font-style: italic;\n}\n\n#info a {\n  font-style: normal;\n}\n\n#menu {\n  background-color: #efefef;\n}\n\n#accent2 {\n  height: 175px;\n  background-color: #ffffff;\n}\n\n#photo2 {\n  top: 125px;\n  right: 0px;\n}\n\n#photo2 img {\n  width: 400px;\n  filter: grayscale(100%);\n}\n\n#photo3 {\n  top: 275px;\n  right: 320px;\n  z-index: 9;\n}\n\n#photo3 img {\n  width: 500px;\n}\n\n#items {\n  position: absolute;\n  top: 50px;\n  left: 100px;\n}\n\n.grid {\n  display: grid;\n  flex-flow: column wrap;\n  width: 930px;\n}\n\n.top {\n  display: flex;\n}\n\n.short {\n  width: 200px;\n}\n\n.long {\n  width: 300px;\n}\n\n.wide {\n  width: 550px;\n}\n\n.left, .right {\n  flex-flow: column wrap;\n}\n\n.cell {\n  margin: 20px;\n  font-family: 'Raleway';\n  font-weight: 700;\n  font-size: 10px;\n  letter-spacing: 1px;\n}\n\nh3 {\n  margin: 0 0 10px 0;\n  font-family: 'Lovers Quarrel';\n  font-size: 35px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.cell div {\n  display: flex;\n}\n\n.cell p {\n  margin: 0 0 10px 0;\n}\n\n.cell .subtitle {\n  text-transform: uppercase;\n  font-size: 8px;\n  font-weight: 400;\n}\n\n.cell .name {\n  width: 60px;\n}\n\n.cell .entree {\n  width: 150px;\n}\n\n.cell .cost {\n  width: 40px;\n}\n\n#drinks {\n  grid-area: 'bev';\n}\n\n#starter {\n  grid-area: 'bre'; \n}\n\n#sweets {\n  grid-area: 'des';\n}\n\n#meals {\n  grid-area: 'ent';\n}\n\n#about {\n  background-color: #ffffff;\n}\n\n#accent3 {\n  background-color: #ceafaf;\n}\n\n#photo4 {\n  position: absolute;\n  top: 80px;\n  left: 300px;\n}\n\n#photo4 img {\n  width: 400px;\n  filter: grayscale(100);\n}\n\n#photo5 {\n  top: 140px;\n  left: 150px;\n  z-index: 9;\n}\n\n#photo5 img {\n  width: 300px;\n}\n\n#hours {\n  position: absolute;\n  top: 200px;\n  left: 800px;\n  font-family: 'Raleway';\n  letter-spacing: 1px;\n}\n\n.date {\n  font-size: 10px;\n  font-weight: 700;\n}\n\n.place {\n  font-size: 12px;\n}\n\n#store {\n  position: absolute;\n  top: 200px;\n  left: 1100px;\n  width: 240px;\n  font-family: 'Raleway';\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\nh4 {\n  font-family: 'Raleway';\n  font-size: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\nfooter {\n  position: absolute;\n  right: 240px;\n  bottom: 90px;\n  font-family: 'Raleway';\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\nfooter b {\n  margin: 0 20px;\n  font-size: 11px;\n  text-transform: uppercase;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/style.css":
/*!**********************************!*\
  !*** ./src/components/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/create.js":
/*!**********************************!*\
  !*** ./src/components/create.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function create(type, attributes, ...children) {
  let element = document.createElement(type);
  for (let key of Object.keys(attributes)) {
    element.setAttribute(key, attributes[key]);
  }
  for (let child of children) {
    if (typeof child != 'string') element.appendChild(child);
    else element.appendChild(document.createTextNode(child));
  }
  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);

/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNav)
/* harmony export */ });
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ "./src/components/create.js");


function createNav() {
  return (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('nav', {}, (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('a', { 'href': '#main' }, 'Home'));
}



/***/ }),

/***/ "./src/components/fonts/LoversQuarrel-Regular.ttf":
/*!********************************************************!*\
  !*** ./src/components/fonts/LoversQuarrel-Regular.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e84821f0c4d23b96a95.ttf";

/***/ }),

/***/ "./src/components/fonts/Raleway-Bold.ttf":
/*!***********************************************!*\
  !*** ./src/components/fonts/Raleway-Bold.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "200bda59aa55097c55fa.ttf";

/***/ }),

/***/ "./src/components/fonts/Raleway-Medium.ttf":
/*!*************************************************!*\
  !*** ./src/components/fonts/Raleway-Medium.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38f070284704ae3dc586.ttf";

/***/ }),

/***/ "./src/components/fonts/Raleway-MediumItalic.ttf":
/*!*******************************************************!*\
  !*** ./src/components/fonts/Raleway-MediumItalic.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fa74aa2906a676a0461.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/style.css */ "./src/components/style.css");
/* harmony import */ var _components_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/create */ "./src/components/create.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ "./src/components/nav.js");




const main = document.querySelector('#content');
main.appendChild((0,_components_nav__WEBPACK_IMPORTED_MODULE_2__.default)());

let title = (0,_components_create__WEBPACK_IMPORTED_MODULE_1__.default)('h1', {}, 'Test');
main.appendChild(title);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
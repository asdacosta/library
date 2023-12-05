/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/library-bg.jpg */ "./src/imgs/library-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  letter-spacing: 1.2px;
  box-sizing: border-box;
  /* border: 2px solid teal; */
}

body {
  display: flex;
  flex-direction: column;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  font-family: 'Raleway', sans-serif;
}

dialog section {
  width: 400px;
  padding: 20px;
  background-color: rgb(194, 146, 79);
}

div {
  display: flex;
  flex-direction: column;
}

input {
  flex: 1 1 auto;
  font-size: 1rem;
  padding-left: 5px;
}

form {
  margin: 100px;
}

fieldset {
  display: flex;
  justify-content: center;
  padding: 50px;
  border: 2px solid rgb(163, 163, 163);
}

li {
  list-style-type: none;
}

.hideForm,
body > button,
.cancelForm {
  font-size: 1rem;
  margin: 30px 0;
  padding: 0.4rem;
  color: black;
  background-color: rgb(212, 190, 160);
  border-radius: 0.7rem;
  cursor: pointer;
}

.cancelForm {
  background-color: rgb(255, 255, 255);
}

.formButtons {
  flex-direction: row;
  justify-content: space-between;
}

.hideForm:hover,
body > button:hover,
.cancelForm:hover {
  color: rgb(66, 66, 66);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.4);
}

body > button {
  margin: 30px auto;
}

dialog {
  margin: auto;
  border: none;
  background-color: rgba(209, 234, 250, 0);
}

dialog + section {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  margin: auto;
  padding: 1.4rem;
  flex-wrap: wrap;
  gap: 1rem;
  width: 700px;
  height: 700px;
  background-color: rgb(212, 190, 160);
  border: 5px solid rgb(194, 146, 79);
  border-radius: 2rem;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
}

.last-sec > div {
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 200px;
  height: 200px;
  padding: 0 5px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(194, 146, 79);
  cursor: context-menu;
  transition: transform 0.2s ease-in-out;
}

.last-sec > div:hover {
  transform: scale(1.1);
  z-index: 1;
}

h1 {
  margin: 20px auto;
  font-size: 2rem;
  color: white;
  cursor: context-menu;
}

section + p {
  margin: 20px auto;
  padding: 10px;
  background-color: rgb(194, 146, 79);
}

fieldset {
  border: 2px solid rgba(0, 0, 0, 0.4);
}

.last-sec button {
  width: 50px;
  /* margin: auto; */
  font-size: 0.8rem;
  padding: 2px;
  color: black;
  background-color: rgb(212, 190, 160);
  cursor: pointer;
}

.last-sec > div > div {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mDAAsC;EACtC,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;;EAGE,eAAe;EACf,cAAc;EACd,eAAe;EACf,YAAY;EACZ,oCAAoC;EACpC,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;;;EAGE,sBAAsB;EACtB,8CAA8C;AAChD;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,SAAS;EACT,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,mCAAmC;EACnC,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,0CAA0C;EAC1C,mCAAmC;EACnC,oBAAoB;EACpB,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  font-size: 1.1rem;\n  letter-spacing: 1.2px;\n  box-sizing: border-box;\n  /* border: 2px solid teal; */\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background: url(./imgs/library-bg.jpg);\n  background-size: cover;\n  font-family: 'Raleway', sans-serif;\n}\n\ndialog section {\n  width: 400px;\n  padding: 20px;\n  background-color: rgb(194, 146, 79);\n}\n\ndiv {\n  display: flex;\n  flex-direction: column;\n}\n\ninput {\n  flex: 1 1 auto;\n  font-size: 1rem;\n  padding-left: 5px;\n}\n\nform {\n  margin: 100px;\n}\n\nfieldset {\n  display: flex;\n  justify-content: center;\n  padding: 50px;\n  border: 2px solid rgb(163, 163, 163);\n}\n\nli {\n  list-style-type: none;\n}\n\n.hideForm,\nbody > button,\n.cancelForm {\n  font-size: 1rem;\n  margin: 30px 0;\n  padding: 0.4rem;\n  color: black;\n  background-color: rgb(212, 190, 160);\n  border-radius: 0.7rem;\n  cursor: pointer;\n}\n\n.cancelForm {\n  background-color: rgb(255, 255, 255);\n}\n\n.formButtons {\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.hideForm:hover,\nbody > button:hover,\n.cancelForm:hover {\n  color: rgb(66, 66, 66);\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.4);\n}\n\nbody > button {\n  margin: 30px auto;\n}\n\ndialog {\n  margin: auto;\n  border: none;\n  background-color: rgba(209, 234, 250, 0);\n}\n\ndialog + section {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-content: flex-start;\n  margin: auto;\n  padding: 1.4rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n  width: 700px;\n  height: 700px;\n  background-color: rgb(212, 190, 160);\n  border: 5px solid rgb(194, 146, 79);\n  border-radius: 2rem;\n  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);\n}\n\n.last-sec > div {\n  display: flex;\n  justify-content: space-around;\n  text-align: center;\n  width: 200px;\n  height: 200px;\n  padding: 0 5px;\n  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);\n  background-color: rgb(194, 146, 79);\n  cursor: context-menu;\n  transition: transform 0.2s ease-in-out;\n}\n\n.last-sec > div:hover {\n  transform: scale(1.1);\n  z-index: 1;\n}\n\nh1 {\n  margin: 20px auto;\n  font-size: 2rem;\n  color: white;\n  cursor: context-menu;\n}\n\nsection + p {\n  margin: 20px auto;\n  padding: 10px;\n  background-color: rgb(194, 146, 79);\n}\n\nfieldset {\n  border: 2px solid rgba(0, 0, 0, 0.4);\n}\n\n.last-sec button {\n  width: 50px;\n  /* margin: auto; */\n  font-size: 0.8rem;\n  padding: 2px;\n  color: black;\n  background-color: rgb(212, 190, 160);\n  cursor: pointer;\n}\n\n.last-sec > div > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/imgs sync \\.(png%7Cjpe?g%7Csvg)$":
/*!************************************************************!*\
  !*** ./src/imgs/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./library-bg.jpg": "./src/imgs/library-bg.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
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
webpackContext.id = "./src/imgs sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/imgs/library-bg.jpg":
/*!*********************************!*\
  !*** ./src/imgs/library-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "imgs/library-bg.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const importAllImages = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imgs = importAll(__webpack_require__("./src/imgs sync \\.(png%7Cjpe?g%7Csvg)$"));
})();

const selectElements = (function () {
  const displayFormButton = document.querySelector('.displayForm');
  const dialog = document.querySelector('dialog');
  const hideFormButton = document.querySelector('.hideForm');
  const cardSection = document.querySelector('dialog + section');
  const output = document.createElement('p');

  // Inputs
  const authorInput = document.querySelector('#author');
  const titleInput = document.querySelector('#title');
  const pagesInput = document.querySelector('#num');
  const readOption = document.querySelector('#read');
  const notReadOption = document.querySelector('#not-read');

  return {
    displayFormButton,
    dialog,
    hideFormButton,
    readOption,
    notReadOption,
    cardSection,
    output,
    authorInput,
    titleInput,
    pagesInput,
  };
})();

const defineIndexesAndToggles = (function () {
  let starter = 0;
  let cards = 0;
  let emptyInput = false;
  let lostCard = false;

  return { starter, emptyInput, cards, lostCard };
})();

const addEmptyBooksToLibrary = (function () {
  const myLibrary = [];
  class Book {
    constructor(author, title, pages, read) {
      this.author = author;
      this.title = title;
      this.pages = pages;
      this.read = read;
    }
  }

  for (let n = 0; n < 11; n++) {
    const book = new Book();
    myLibrary.push(book);
  }

  return { myLibrary };
})();

const displayForm = (function () {
  selectElements.displayFormButton.addEventListener('click', () => {
    selectElements.dialog.showModal();
  });
})();

function addBookToLibrary() {
  const authorValue = selectElements.authorInput.value;
  const titleValue = selectElements.titleInput.value;
  const pagesValue = selectElements.pagesInput.value;
  let readValue = '';

  if (selectElements.readOption.checked) {
    readValue = selectElements.readOption.value;
  } else if (selectElements.notReadOption.checked) {
    readValue = selectElements.notReadOption.value;
  }

  if (authorValue === '' || titleValue === '' || pagesValue === '' || readValue === '') {
    if (!defineIndexesAndToggles.emptyInput) {
      defineIndexesAndToggles.emptyInput = true;
    } else {
      --defineIndexesAndToggles.starter;
    }
    // selectElements.output.textContent = 'Kindly input all details of the book.';
    // selectElements.output.style.backgroundColor = 'rgb(194, 146, 79)';
    // selectElements.cardSection.insertAdjacentElement('afterend', selectElements.output);

    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].author =
      authorValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].title = titleValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].pages = pagesValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].read = readValue;
    defineIndexesAndToggles.starter += 1;

    if (defineIndexesAndToggles.cards === 9) {
      selectElements.output.textContent = 'The Library is full!';
    }
    return;
  } else {
    selectElements.output.innerHTML = '';
    selectElements.output.style.backgroundColor = 'inherit';
  }

  if (defineIndexesAndToggles.cards === 9) {
    selectElements.output.textContent = 'The Library is full!';
    selectElements.output.style.backgroundColor = 'rgb(194, 146, 79)';
    return;
  } else {
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].author =
      authorValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].title = titleValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].pages = pagesValue;
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter].read = readValue;
    defineIndexesAndToggles.starter += 1;
  }
}

function displayLibrary() {
  let index = defineIndexesAndToggles.starter - 1;

  if (
    addEmptyBooksToLibrary.myLibrary[index].author === '' ||
    addEmptyBooksToLibrary.myLibrary[index].title === '' ||
    addEmptyBooksToLibrary.myLibrary[index].pages === '' ||
    addEmptyBooksToLibrary.myLibrary[index].read === ''
  ) {
    return;
  }

  if (defineIndexesAndToggles.cards === 9) {
    if (defineIndexesAndToggles.lostCard) {
      --defineIndexesAndToggles.starter;
    }
    selectElements.output.textContent = 'The Library is full!';
    selectElements.output.style.backgroundColor = 'rgb(194, 146, 79)';
    selectElements.cardSection.insertAdjacentElement('afterend', selectElements.output);
    return;
  } else {
    defineIndexesAndToggles.cards += 1;
  }
  const div = document.createElement('div');
  const subDiv = document.createElement('div');
  const hideCard = document.createElement('button');
  const toggleRead = document.createElement('button');
  toggleRead.textContent = 'Flip';
  hideCard.textContent = 'Clear';

  hideCard.addEventListener('click', () => {
    if (!defineIndexesAndToggles.lostCard) {
      defineIndexesAndToggles.starter--; // Account for last missing card when starter hits 10 and an element(s) is removed after
    }
    defineIndexesAndToggles.lostCard = true;
    div.remove();
    if (defineIndexesAndToggles.starter > 0) {
      defineIndexesAndToggles.starter--;
    }
    --defineIndexesAndToggles.cards;
    selectElements.output.innerHTML = '';
    selectElements.output.style.backgroundColor = 'inherit';
  });

  // At index 1 is when text is entered for the index 0, so we want to always ref the prev text entered with (n-1)
  div.innerHTML = `<p>The book ${
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter - 1].title
  } by ${
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter - 1].author
  } has ${
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter - 1].pages
  } pages and <span>${
    addEmptyBooksToLibrary.myLibrary[defineIndexesAndToggles.starter - 1].read
  }.</span></p>`;

  subDiv.appendChild(toggleRead);
  subDiv.appendChild(hideCard);
  div.appendChild(subDiv);
  selectElements.cardSection.appendChild(div);

  toggleRead.addEventListener('click', () => {
    if (addEmptyBooksToLibrary.myLibrary[index].read === 'is read') {
      addEmptyBooksToLibrary.myLibrary[index].read = 'is not read';
      div.innerHTML = `<p>The book ${addEmptyBooksToLibrary.myLibrary[index].title} by ${addEmptyBooksToLibrary.myLibrary[index].author} has ${addEmptyBooksToLibrary.myLibrary[index].pages} pages and <span>${addEmptyBooksToLibrary.myLibrary[index].read}.</span></p>`;
    } else if (addEmptyBooksToLibrary.myLibrary[index].read === 'is not read') {
      addEmptyBooksToLibrary.myLibrary[index].read = 'is read';
      div.innerHTML = `<p>The book ${addEmptyBooksToLibrary.myLibrary[index].title} by ${addEmptyBooksToLibrary.myLibrary[index].author} has ${addEmptyBooksToLibrary.myLibrary[index].pages} pages and <span>${addEmptyBooksToLibrary.myLibrary[index].read}.</span></p>`;
    }
    subDiv.appendChild(toggleRead);
    subDiv.appendChild(hideCard);
    div.appendChild(subDiv);
  });
}

function throwError() {
  if (selectElements.authorInput.validity.valueMissing) {
    selectElements.authorInput.setCustomValidity("Author field can't be empty");
    selectElements.authorInput.addEventListener('input', () => {
      selectElements.authorInput.setCustomValidity('');
    });
  }

  if (selectElements.titleInput.validity.valueMissing) {
    selectElements.titleInput.setCustomValidity("Title field can't be empty.");
    selectElements.titleInput.addEventListener('input', () => {
      selectElements.titleInput.setCustomValidity('');
    });
  }

  if (selectElements.pagesInput.validity.valueMissing) {
    selectElements.pagesInput.setCustomValidity('Kindly enter a valid number of pages.');
    selectElements.pagesInput.addEventListener('input', () => {
      selectElements.pagesInput.setCustomValidity('');
    });
  }

  if (!selectElements.readOption.checked && !selectElements.notReadOption.checked) {
    selectElements.readOption.setCustomValidity('You need to check one');
  }
}

const closeForm = (function () {
  selectElements.hideFormButton.addEventListener('click', (event) => {
    if (
      selectElements.authorInput.validity.valid &&
      selectElements.titleInput.validity.valid &&
      selectElements.pagesInput.validity.valid &&
      (selectElements.readOption.validity.valid ||
        selectElements.notReadOption.validity.valid)
    ) {
      event.preventDefault();
      addBookToLibrary();
      displayLibrary();
      selectElements.dialog.close();
    }

    throwError();
  });
})();

const exitDialog = (function () {
  const cancelDialog = document.querySelector('.cancelForm');

  cancelDialog.addEventListener('click', (event) => {
    event.preventDefault();
    selectElements.dialog.close();
    selectElements.output.innerHTML = '';
    selectElements.output.style.backgroundColor = 'inherit';
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsK0NBQStDLEtBQUssZ0RBQWdELE1BQU0sK0NBQStDLGtCQUFrQiw2Q0FBNkM7QUFDN1AsTUFBTTtBQUNOO0FBQ0EscUNBQXFDLCtDQUErQyxLQUFLLGdEQUFnRCxNQUFNLCtDQUErQyxrQkFBa0IsNkNBQTZDO0FBQzdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3kvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2ltZ3MvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvbGlicmFyeS1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7ICovXG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cbmRpYWxvZyBzZWN0aW9uIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxNDYsIDc5KTtcbn1cblxuZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW5wdXQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbjogMTAwcHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjMsIDE2MywgMTYzKTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5oaWRlRm9ybSxcbmJvZHkgPiBidXR0b24sXG4uY2FuY2VsRm9ybSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAxOTAsIDE2MCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FuY2VsRm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmZvcm1CdXR0b25zIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGlkZUZvcm06aG92ZXIsXG5ib2R5ID4gYnV0dG9uOmhvdmVyLFxuLmNhbmNlbEZvcm06aG92ZXIge1xuICBjb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ib2R5ID4gYnV0dG9uIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbmRpYWxvZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjM0LCAyNTAsIDApO1xufVxuXG5kaWFsb2cgKyBzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxLjRyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogNzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDE5MCwgMTYwKTtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDE5NCwgMTQ2LCA3OSk7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGJveC1zaGFkb3c6IDRweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmxhc3Qtc2VjID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxNDYsIDc5KTtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubGFzdC1zZWMgPiBkaXY6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHotaW5kZXg6IDE7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IGNvbnRleHQtbWVudTtcbn1cblxuc2VjdGlvbiArIHAge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTQ2LCA3OSk7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubGFzdC1zZWMgYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAxOTAsIDE2MCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhc3Qtc2VjID4gZGl2ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbURBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgdGVhbDsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHVybCguL2ltZ3MvbGlicmFyeS1iZy5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmRpYWxvZyBzZWN0aW9uIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxNDYsIDc5KTtcXG59XFxuXFxuZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbjogMTAwcHg7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYzLCAxNjMsIDE2Myk7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmhpZGVGb3JtLFxcbmJvZHkgPiBidXR0b24sXFxuLmNhbmNlbEZvcm0ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAxOTAsIDE2MCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWxGb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLmZvcm1CdXR0b25zIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oaWRlRm9ybTpob3ZlcixcXG5ib2R5ID4gYnV0dG9uOmhvdmVyLFxcbi5jYW5jZWxGb3JtOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uIHtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDksIDIzNCwgMjUwLCAwKTtcXG59XFxuXFxuZGlhbG9nICsgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMS40cmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgaGVpZ2h0OiA3MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDE5MCwgMTYwKTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxOTQsIDE0NiwgNzkpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLmxhc3Qtc2VjID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE0NiwgNzkpO1xcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmxhc3Qtc2VjID4gZGl2OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XFxufVxcblxcbnNlY3Rpb24gKyBwIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE0NiwgNzkpO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5sYXN0LXNlYyBidXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDE5MCwgMTYwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxhc3Qtc2VjID4gZGl2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2xpYnJhcnktYmcuanBnXCI6IFwiLi9zcmMvaW1ncy9saWJyYXJ5LWJnLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWdzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGltcG9ydEFsbEltYWdlcyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gICAgcmV0dXJuIHIua2V5cygpLm1hcChyKTtcbiAgfVxuXG4gIGNvbnN0IGltZ3MgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2ltZ3MnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG59KSgpO1xuXG5jb25zdCBzZWxlY3RFbGVtZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRpc3BsYXlGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXlGb3JtJyk7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xuICBjb25zdCBoaWRlRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRlRm9ybScpO1xuICBjb25zdCBjYXJkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZyArIHNlY3Rpb24nKTtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIC8vIElucHV0c1xuICBjb25zdCBhdXRob3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRob3InKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICBjb25zdCBwYWdlc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bScpO1xuICBjb25zdCByZWFkT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWQnKTtcbiAgY29uc3Qgbm90UmVhZE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3QtcmVhZCcpO1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheUZvcm1CdXR0b24sXG4gICAgZGlhbG9nLFxuICAgIGhpZGVGb3JtQnV0dG9uLFxuICAgIHJlYWRPcHRpb24sXG4gICAgbm90UmVhZE9wdGlvbixcbiAgICBjYXJkU2VjdGlvbixcbiAgICBvdXRwdXQsXG4gICAgYXV0aG9ySW5wdXQsXG4gICAgdGl0bGVJbnB1dCxcbiAgICBwYWdlc0lucHV0LFxuICB9O1xufSkoKTtcblxuY29uc3QgZGVmaW5lSW5kZXhlc0FuZFRvZ2dsZXMgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgc3RhcnRlciA9IDA7XG4gIGxldCBjYXJkcyA9IDA7XG4gIGxldCBlbXB0eUlucHV0ID0gZmFsc2U7XG4gIGxldCBsb3N0Q2FyZCA9IGZhbHNlO1xuXG4gIHJldHVybiB7IHN0YXJ0ZXIsIGVtcHR5SW5wdXQsIGNhcmRzLCBsb3N0Q2FyZCB9O1xufSkoKTtcblxuY29uc3QgYWRkRW1wdHlCb29rc1RvTGlicmFyeSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG15TGlicmFyeSA9IFtdO1xuICBjbGFzcyBCb29rIHtcbiAgICBjb25zdHJ1Y3RvcihhdXRob3IsIHRpdGxlLCBwYWdlcywgcmVhZCkge1xuICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XG4gICAgICB0aGlzLnJlYWQgPSByZWFkO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgMTE7IG4rKykge1xuICAgIGNvbnN0IGJvb2sgPSBuZXcgQm9vaygpO1xuICAgIG15TGlicmFyeS5wdXNoKGJvb2spO1xuICB9XG5cbiAgcmV0dXJuIHsgbXlMaWJyYXJ5IH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5Rm9ybSA9IChmdW5jdGlvbiAoKSB7XG4gIHNlbGVjdEVsZW1lbnRzLmRpc3BsYXlGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNlbGVjdEVsZW1lbnRzLmRpYWxvZy5zaG93TW9kYWwoKTtcbiAgfSk7XG59KSgpO1xuXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KCkge1xuICBjb25zdCBhdXRob3JWYWx1ZSA9IHNlbGVjdEVsZW1lbnRzLmF1dGhvcklucHV0LnZhbHVlO1xuICBjb25zdCB0aXRsZVZhbHVlID0gc2VsZWN0RWxlbWVudHMudGl0bGVJbnB1dC52YWx1ZTtcbiAgY29uc3QgcGFnZXNWYWx1ZSA9IHNlbGVjdEVsZW1lbnRzLnBhZ2VzSW5wdXQudmFsdWU7XG4gIGxldCByZWFkVmFsdWUgPSAnJztcblxuICBpZiAoc2VsZWN0RWxlbWVudHMucmVhZE9wdGlvbi5jaGVja2VkKSB7XG4gICAgcmVhZFZhbHVlID0gc2VsZWN0RWxlbWVudHMucmVhZE9wdGlvbi52YWx1ZTtcbiAgfSBlbHNlIGlmIChzZWxlY3RFbGVtZW50cy5ub3RSZWFkT3B0aW9uLmNoZWNrZWQpIHtcbiAgICByZWFkVmFsdWUgPSBzZWxlY3RFbGVtZW50cy5ub3RSZWFkT3B0aW9uLnZhbHVlO1xuICB9XG5cbiAgaWYgKGF1dGhvclZhbHVlID09PSAnJyB8fCB0aXRsZVZhbHVlID09PSAnJyB8fCBwYWdlc1ZhbHVlID09PSAnJyB8fCByZWFkVmFsdWUgPT09ICcnKSB7XG4gICAgaWYgKCFkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5lbXB0eUlucHV0KSB7XG4gICAgICBkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5lbXB0eUlucHV0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLS1kZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5zdGFydGVyO1xuICAgIH1cbiAgICAvLyBzZWxlY3RFbGVtZW50cy5vdXRwdXQudGV4dENvbnRlbnQgPSAnS2luZGx5IGlucHV0IGFsbCBkZXRhaWxzIG9mIHRoZSBib29rLic7XG4gICAgLy8gc2VsZWN0RWxlbWVudHMub3V0cHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMTk0LCAxNDYsIDc5KSc7XG4gICAgLy8gc2VsZWN0RWxlbWVudHMuY2FyZFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHNlbGVjdEVsZW1lbnRzLm91dHB1dCk7XG5cbiAgICBhZGRFbXB0eUJvb2tzVG9MaWJyYXJ5Lm15TGlicmFyeVtkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5zdGFydGVyXS5hdXRob3IgPVxuICAgICAgYXV0aG9yVmFsdWU7XG4gICAgYWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbZGVmaW5lSW5kZXhlc0FuZFRvZ2dsZXMuc3RhcnRlcl0udGl0bGUgPSB0aXRsZVZhbHVlO1xuICAgIGFkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2RlZmluZUluZGV4ZXNBbmRUb2dnbGVzLnN0YXJ0ZXJdLnBhZ2VzID0gcGFnZXNWYWx1ZTtcbiAgICBhZGRFbXB0eUJvb2tzVG9MaWJyYXJ5Lm15TGlicmFyeVtkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5zdGFydGVyXS5yZWFkID0gcmVhZFZhbHVlO1xuICAgIGRlZmluZUluZGV4ZXNBbmRUb2dnbGVzLnN0YXJ0ZXIgKz0gMTtcblxuICAgIGlmIChkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5jYXJkcyA9PT0gOSkge1xuICAgICAgc2VsZWN0RWxlbWVudHMub3V0cHV0LnRleHRDb250ZW50ID0gJ1RoZSBMaWJyYXJ5IGlzIGZ1bGwhJztcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdEVsZW1lbnRzLm91dHB1dC5pbm5lckhUTUwgPSAnJztcbiAgICBzZWxlY3RFbGVtZW50cy5vdXRwdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnO1xuICB9XG5cbiAgaWYgKGRlZmluZUluZGV4ZXNBbmRUb2dnbGVzLmNhcmRzID09PSA5KSB7XG4gICAgc2VsZWN0RWxlbWVudHMub3V0cHV0LnRleHRDb250ZW50ID0gJ1RoZSBMaWJyYXJ5IGlzIGZ1bGwhJztcbiAgICBzZWxlY3RFbGVtZW50cy5vdXRwdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxOTQsIDE0NiwgNzkpJztcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgYWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbZGVmaW5lSW5kZXhlc0FuZFRvZ2dsZXMuc3RhcnRlcl0uYXV0aG9yID1cbiAgICAgIGF1dGhvclZhbHVlO1xuICAgIGFkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2RlZmluZUluZGV4ZXNBbmRUb2dnbGVzLnN0YXJ0ZXJdLnRpdGxlID0gdGl0bGVWYWx1ZTtcbiAgICBhZGRFbXB0eUJvb2tzVG9MaWJyYXJ5Lm15TGlicmFyeVtkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5zdGFydGVyXS5wYWdlcyA9IHBhZ2VzVmFsdWU7XG4gICAgYWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbZGVmaW5lSW5kZXhlc0FuZFRvZ2dsZXMuc3RhcnRlcl0ucmVhZCA9IHJlYWRWYWx1ZTtcbiAgICBkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5zdGFydGVyICs9IDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUxpYnJhcnkoKSB7XG4gIGxldCBpbmRleCA9IGRlZmluZUluZGV4ZXNBbmRUb2dnbGVzLnN0YXJ0ZXIgLSAxO1xuXG4gIGlmIChcbiAgICBhZGRFbXB0eUJvb2tzVG9MaWJyYXJ5Lm15TGlicmFyeVtpbmRleF0uYXV0aG9yID09PSAnJyB8fFxuICAgIGFkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2luZGV4XS50aXRsZSA9PT0gJycgfHxcbiAgICBhZGRFbXB0eUJvb2tzVG9MaWJyYXJ5Lm15TGlicmFyeVtpbmRleF0ucGFnZXMgPT09ICcnIHx8XG4gICAgYWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbaW5kZXhdLnJlYWQgPT09ICcnXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5jYXJkcyA9PT0gOSkge1xuICAgIGlmIChkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5sb3N0Q2FyZCkge1xuICAgICAgLS1kZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5zdGFydGVyO1xuICAgIH1cbiAgICBzZWxlY3RFbGVtZW50cy5vdXRwdXQudGV4dENvbnRlbnQgPSAnVGhlIExpYnJhcnkgaXMgZnVsbCEnO1xuICAgIHNlbGVjdEVsZW1lbnRzLm91dHB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE5NCwgMTQ2LCA3OSknO1xuICAgIHNlbGVjdEVsZW1lbnRzLmNhcmRTZWN0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBzZWxlY3RFbGVtZW50cy5vdXRwdXQpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5jYXJkcyArPSAxO1xuICB9XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGlkZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgdG9nZ2xlUmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0b2dnbGVSZWFkLnRleHRDb250ZW50ID0gJ0ZsaXAnO1xuICBoaWRlQ2FyZC50ZXh0Q29udGVudCA9ICdDbGVhcic7XG5cbiAgaGlkZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5sb3N0Q2FyZCkge1xuICAgICAgZGVmaW5lSW5kZXhlc0FuZFRvZ2dsZXMuc3RhcnRlci0tOyAvLyBBY2NvdW50IGZvciBsYXN0IG1pc3NpbmcgY2FyZCB3aGVuIHN0YXJ0ZXIgaGl0cyAxMCBhbmQgYW4gZWxlbWVudChzKSBpcyByZW1vdmVkIGFmdGVyXG4gICAgfVxuICAgIGRlZmluZUluZGV4ZXNBbmRUb2dnbGVzLmxvc3RDYXJkID0gdHJ1ZTtcbiAgICBkaXYucmVtb3ZlKCk7XG4gICAgaWYgKGRlZmluZUluZGV4ZXNBbmRUb2dnbGVzLnN0YXJ0ZXIgPiAwKSB7XG4gICAgICBkZWZpbmVJbmRleGVzQW5kVG9nZ2xlcy5zdGFydGVyLS07XG4gICAgfVxuICAgIC0tZGVmaW5lSW5kZXhlc0FuZFRvZ2dsZXMuY2FyZHM7XG4gICAgc2VsZWN0RWxlbWVudHMub3V0cHV0LmlubmVySFRNTCA9ICcnO1xuICAgIHNlbGVjdEVsZW1lbnRzLm91dHB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XG4gIH0pO1xuXG4gIC8vIEF0IGluZGV4IDEgaXMgd2hlbiB0ZXh0IGlzIGVudGVyZWQgZm9yIHRoZSBpbmRleCAwLCBzbyB3ZSB3YW50IHRvIGFsd2F5cyByZWYgdGhlIHByZXYgdGV4dCBlbnRlcmVkIHdpdGggKG4tMSlcbiAgZGl2LmlubmVySFRNTCA9IGA8cD5UaGUgYm9vayAke1xuICAgIGFkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2RlZmluZUluZGV4ZXNBbmRUb2dnbGVzLnN0YXJ0ZXIgLSAxXS50aXRsZVxuICB9IGJ5ICR7XG4gICAgYWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbZGVmaW5lSW5kZXhlc0FuZFRvZ2dsZXMuc3RhcnRlciAtIDFdLmF1dGhvclxuICB9IGhhcyAke1xuICAgIGFkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2RlZmluZUluZGV4ZXNBbmRUb2dnbGVzLnN0YXJ0ZXIgLSAxXS5wYWdlc1xuICB9IHBhZ2VzIGFuZCA8c3Bhbj4ke1xuICAgIGFkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2RlZmluZUluZGV4ZXNBbmRUb2dnbGVzLnN0YXJ0ZXIgLSAxXS5yZWFkXG4gIH0uPC9zcGFuPjwvcD5gO1xuXG4gIHN1YkRpdi5hcHBlbmRDaGlsZCh0b2dnbGVSZWFkKTtcbiAgc3ViRGl2LmFwcGVuZENoaWxkKGhpZGVDYXJkKTtcbiAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gIHNlbGVjdEVsZW1lbnRzLmNhcmRTZWN0aW9uLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgdG9nZ2xlUmVhZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoYWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbaW5kZXhdLnJlYWQgPT09ICdpcyByZWFkJykge1xuICAgICAgYWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbaW5kZXhdLnJlYWQgPSAnaXMgbm90IHJlYWQnO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGA8cD5UaGUgYm9vayAke2FkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2luZGV4XS50aXRsZX0gYnkgJHthZGRFbXB0eUJvb2tzVG9MaWJyYXJ5Lm15TGlicmFyeVtpbmRleF0uYXV0aG9yfSBoYXMgJHthZGRFbXB0eUJvb2tzVG9MaWJyYXJ5Lm15TGlicmFyeVtpbmRleF0ucGFnZXN9IHBhZ2VzIGFuZCA8c3Bhbj4ke2FkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2luZGV4XS5yZWFkfS48L3NwYW4+PC9wPmA7XG4gICAgfSBlbHNlIGlmIChhZGRFbXB0eUJvb2tzVG9MaWJyYXJ5Lm15TGlicmFyeVtpbmRleF0ucmVhZCA9PT0gJ2lzIG5vdCByZWFkJykge1xuICAgICAgYWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbaW5kZXhdLnJlYWQgPSAnaXMgcmVhZCc7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gYDxwPlRoZSBib29rICR7YWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbaW5kZXhdLnRpdGxlfSBieSAke2FkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2luZGV4XS5hdXRob3J9IGhhcyAke2FkZEVtcHR5Qm9va3NUb0xpYnJhcnkubXlMaWJyYXJ5W2luZGV4XS5wYWdlc30gcGFnZXMgYW5kIDxzcGFuPiR7YWRkRW1wdHlCb29rc1RvTGlicmFyeS5teUxpYnJhcnlbaW5kZXhdLnJlYWR9Ljwvc3Bhbj48L3A+YDtcbiAgICB9XG4gICAgc3ViRGl2LmFwcGVuZENoaWxkKHRvZ2dsZVJlYWQpO1xuICAgIHN1YkRpdi5hcHBlbmRDaGlsZChoaWRlQ2FyZCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKCkge1xuICBpZiAoc2VsZWN0RWxlbWVudHMuYXV0aG9ySW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgc2VsZWN0RWxlbWVudHMuYXV0aG9ySW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJBdXRob3IgZmllbGQgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgc2VsZWN0RWxlbWVudHMuYXV0aG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBzZWxlY3RFbGVtZW50cy5hdXRob3JJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoc2VsZWN0RWxlbWVudHMudGl0bGVJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBzZWxlY3RFbGVtZW50cy50aXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiVGl0bGUgZmllbGQgY2FuJ3QgYmUgZW1wdHkuXCIpO1xuICAgIHNlbGVjdEVsZW1lbnRzLnRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBzZWxlY3RFbGVtZW50cy50aXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChzZWxlY3RFbGVtZW50cy5wYWdlc0lucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHNlbGVjdEVsZW1lbnRzLnBhZ2VzSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0tpbmRseSBlbnRlciBhIHZhbGlkIG51bWJlciBvZiBwYWdlcy4nKTtcbiAgICBzZWxlY3RFbGVtZW50cy5wYWdlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgc2VsZWN0RWxlbWVudHMucGFnZXNJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIXNlbGVjdEVsZW1lbnRzLnJlYWRPcHRpb24uY2hlY2tlZCAmJiAhc2VsZWN0RWxlbWVudHMubm90UmVhZE9wdGlvbi5jaGVja2VkKSB7XG4gICAgc2VsZWN0RWxlbWVudHMucmVhZE9wdGlvbi5zZXRDdXN0b21WYWxpZGl0eSgnWW91IG5lZWQgdG8gY2hlY2sgb25lJyk7XG4gIH1cbn1cblxuY29uc3QgY2xvc2VGb3JtID0gKGZ1bmN0aW9uICgpIHtcbiAgc2VsZWN0RWxlbWVudHMuaGlkZUZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBzZWxlY3RFbGVtZW50cy5hdXRob3JJbnB1dC52YWxpZGl0eS52YWxpZCAmJlxuICAgICAgc2VsZWN0RWxlbWVudHMudGl0bGVJbnB1dC52YWxpZGl0eS52YWxpZCAmJlxuICAgICAgc2VsZWN0RWxlbWVudHMucGFnZXNJbnB1dC52YWxpZGl0eS52YWxpZCAmJlxuICAgICAgKHNlbGVjdEVsZW1lbnRzLnJlYWRPcHRpb24udmFsaWRpdHkudmFsaWQgfHxcbiAgICAgICAgc2VsZWN0RWxlbWVudHMubm90UmVhZE9wdGlvbi52YWxpZGl0eS52YWxpZClcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhZGRCb29rVG9MaWJyYXJ5KCk7XG4gICAgICBkaXNwbGF5TGlicmFyeSgpO1xuICAgICAgc2VsZWN0RWxlbWVudHMuZGlhbG9nLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcigpO1xuICB9KTtcbn0pKCk7XG5cbmNvbnN0IGV4aXREaWFsb2cgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW5jZWxEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsRm9ybScpO1xuXG4gIGNhbmNlbERpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2VsZWN0RWxlbWVudHMuZGlhbG9nLmNsb3NlKCk7XG4gICAgc2VsZWN0RWxlbWVudHMub3V0cHV0LmlubmVySFRNTCA9ICcnO1xuICAgIHNlbGVjdEVsZW1lbnRzLm91dHB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
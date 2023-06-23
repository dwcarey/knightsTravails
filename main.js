/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./knight.svg */ "./src/knight.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: rgb(110, 167, 253);
}

#siteContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.square {
    width: 8vw;
    height: 7vw;
    font-size: min(7.5vw, 6.5vh);
    text-align: center;
    padding-top: 1px;
    color: #00258b;
    font-weight: 500;
    font-family: 'Courier New', Courier, monospace;
}

.black {
    background-color: black;
    color: aliceblue;
}

.white {
    background-color: aliceblue;
    color: black;
}

#gameboardContainer {
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    justify-content: center;
    border: 3px solid black;
    width: min-content;
}

#rowHolder {
    display: grid;
    grid-template-columns: repeat(8, 1fr);

}

.destination {
    background-color: rgb(255, 17, 0);
    color: #00227e;
}

.knight {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-position: bottom -2px center;

}

button {
    background-color: black;
    color: aliceblue;
    border: none;
    border-style: none;
    width: min(50vw, 40vh);
    height: 4vh;
}

#buttonContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 15vh;
    margin-bottom: 4vh;
    margin-top: 4vh;
}

.selected {
    background-color: #00227e;
}



@media (min-width: 768px) {
    .square {
        width: min(8vw, 7vh);
        height: min(8vw, 7vh);
        padding: 0;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,4BAA4B;IAC5B,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,8CAA8C;AAClD;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qCAAqC;;AAEzC;;AAEA;IACI,iCAAiC;IACjC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yDAAqC;IACrC,4BAA4B;IAC5B,uCAAuC;;AAE3C;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;;;AAIA;IACI;QACI,oBAAoB;QACpB,qBAAqB;QACrB,UAAU;IACd;;AAEJ","sourcesContent":["body {\n    background-color: rgb(110, 167, 253);\n}\n\n#siteContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.square {\n    width: 8vw;\n    height: 7vw;\n    font-size: min(7.5vw, 6.5vh);\n    text-align: center;\n    padding-top: 1px;\n    color: #00258b;\n    font-weight: 500;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.black {\n    background-color: black;\n    color: aliceblue;\n}\n\n.white {\n    background-color: aliceblue;\n    color: black;\n}\n\n#gameboardContainer {\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n    justify-content: center;\n    border: 3px solid black;\n    width: min-content;\n}\n\n#rowHolder {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n\n}\n\n.destination {\n    background-color: rgb(255, 17, 0);\n    color: #00227e;\n}\n\n.knight {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-image: url('./knight.svg');\n    background-repeat: no-repeat;\n    background-position: bottom -2px center;\n\n}\n\nbutton {\n    background-color: black;\n    color: aliceblue;\n    border: none;\n    border-style: none;\n    width: min(50vw, 40vh);\n    height: 4vh;\n}\n\n#buttonContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 15vh;\n    margin-bottom: 4vh;\n    margin-top: 4vh;\n}\n\n.selected {\n    background-color: #00227e;\n}\n\n\n\n@media (min-width: 768px) {\n    .square {\n        width: min(8vw, 7vh);\n        height: min(8vw, 7vh);\n        padding: 0;\n    }\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/DOMcontroller.js":
/*!******************************!*\
  !*** ./src/DOMcontroller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawPage: () => (/* binding */ drawPage)
/* harmony export */ });
function drawPage() {
    const siteContainer = document.createElement('div');
    siteContainer.id = 'siteContainer';
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer';
    const gameboardContainer = document.createElement('div');
    gameboardContainer.id = 'gameboardContainer';

    const placeKnightButton = document.createElement('button');
    placeKnightButton.id = 'placeKnightButton';
    placeKnightButton.type = 'button';
    placeKnightButton.textContent = 'Place Knight';

    const placeDestinationButton = document.createElement('button');
    placeDestinationButton.id = 'placeDestinationButton';
    placeDestinationButton.type = 'button';
    placeDestinationButton.textContent = 'Choose Destination';

    const calculateButton = document.createElement('button');
    calculateButton.id = 'calculateButton';
    calculateButton.type = 'button';
    calculateButton.textContent = 'Calculate Path';

    buttonContainer.appendChild(placeKnightButton);
    buttonContainer.appendChild(placeDestinationButton);
    buttonContainer.appendChild(calculateButton);
    siteContainer.appendChild(buttonContainer);
    siteContainer.appendChild(gameboardContainer);
    document.body.appendChild(siteContainer);
}



/***/ }),

/***/ "./src/eventHandlers.js":
/*!******************************!*\
  !*** ./src/eventHandlers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonEventListeners: () => (/* binding */ buttonEventListeners),
/* harmony export */   gameBoardEvents: () => (/* binding */ gameBoardEvents)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


let placeKnightActive = false;
let placeDestinationActive = false;

function buttonEventListeners() {
  const placeKnightButton = document.getElementById('placeKnightButton');
  const placeDestinationButton = document.getElementById('placeDestinationButton');
  const calculateButton = document.getElementById('calculateButton');

  placeKnightButton.addEventListener('click', () => {
    placeKnightActive = true;
    placeKnightButton.classList.add('selected');
    placeDestinationActive = false;
    placeDestinationButton.classList.remove('selected');
  });

  placeDestinationButton.addEventListener('click', () => {
    placeKnightActive = false;
    placeKnightButton.classList.remove('selected');
    placeDestinationActive = true;
    placeDestinationButton.classList.add('selected');
  });

  calculateButton.addEventListener('click', () => {
    const destination = ___WEBPACK_IMPORTED_MODULE_0__.mainGameboard.getDesintationLocation();
    const shortestPathArray = ___WEBPACK_IMPORTED_MODULE_0__.knight.findKnightPath(___WEBPACK_IMPORTED_MODULE_0__.knight, destination);
    console.log(shortestPathArray);

    for (let i = 1; i < shortestPathArray.length; i += 1) {
      const x = shortestPathArray[i][0];
      const y = shortestPathArray[i][1];
      ___WEBPACK_IMPORTED_MODULE_0__.mainGameboard.board[x][y].setPathPosition(i);
    }
    ___WEBPACK_IMPORTED_MODULE_0__.mainGameboard.drawGameboardDOM(___WEBPACK_IMPORTED_MODULE_0__.mainGameboard);
  });
}

function gameBoardEvents() {
  const gameboard = document.getElementById('gameboardContainer');

  gameboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('square')) {
      const x = parseInt(e.target.id.split('-')[0], 10);
      const y = parseInt(e.target.id.split('-')[1], 10);

      console.log(x);

      if (placeKnightActive === true) {
        console.log(`place knight ${x}-${y}`);
        ___WEBPACK_IMPORTED_MODULE_0__.knight.setRoot([x, y]);
        ___WEBPACK_IMPORTED_MODULE_0__.mainGameboard.setKnightLocation([x, y]);
        ___WEBPACK_IMPORTED_MODULE_0__.mainGameboard.drawGameboardDOM(___WEBPACK_IMPORTED_MODULE_0__.mainGameboard);
      }
      if (placeDestinationActive === true) {
        console.log(`place destination ${x}-${y}`);
        ___WEBPACK_IMPORTED_MODULE_0__.mainGameboard.setDestinationLocation([x, y]);
        ___WEBPACK_IMPORTED_MODULE_0__.mainGameboard.drawGameboardDOM(___WEBPACK_IMPORTED_MODULE_0__.mainGameboard);
      }
    }
  });
}




/***/ }),

/***/ "./src/gameboardData.js":
/*!******************************!*\
  !*** ./src/gameboardData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _squareClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./squareClass */ "./src/squareClass.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _knightMoveData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knightMoveData */ "./src/knightMoveData.js");




class Gameboard {
  constructor() {
    this.board = this.createGameBoard();
  }

  createGameBoard() {
    const m = 8;
    const n = 8;

    const chessboard = new Array(m);

    for (let i = 0; i < m; i += 1) {
      chessboard[i] = new Array(n);
    }
    return chessboard;
  }

  populateSquares() {
    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board[i].length; j += 1) {
        const square = new _squareClass__WEBPACK_IMPORTED_MODULE_0__.Square([i, j]);

        if (i % 2 === 0) {
          if (j % 2 === 0) {
            square.setColour('white');
          } else {
            square.setColour('black');
          }
        }

        if (i % 2 !== 0) {
          if (j % 2 !== 0) {
            square.setColour('white');
          } else {
            square.setColour('black');
          }
        }

        this.board[i][j] = square;
      }
    }
  }

  placeKnight() {
    const x = Math.floor(Math.random() * 7);
    const y = Math.floor(Math.random() * 7);
    const selectedSquare = this.board[x][y];
    selectedSquare.setHasKnight(true);
    return new _knightMoveData__WEBPACK_IMPORTED_MODULE_2__.KnightData([x, y]);
  }

  getKnightLocation() {
    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board[i].length; j += 1) {
        if (this.board[i][j].getHasKnight() === true) {
          return [i, j];
        }
      }
    }
    return null;
  }

  getDesintationLocation() {
    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board[i].length; j += 1) {
        if (this.board[i][j].getIsDestination() === true) {
          return [i, j];
        }
      }
    }
    return null;
  }

  setKnightLocation(location) {
    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board[i].length; j += 1) {
        if (this.board[i][j].getHasKnight() === true) {
          this.board[i][j].setHasKnight(false);
        }
      }
    }
    this.clearPath();
    return this.board[location[0]][location[1]].setHasKnight(true);
  }

  setDestinationLocation(location) {
    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board[i].length; j += 1) {
        if (this.board[i][j].getIsDestination() === true) {
          this.board[i][j].setIsDestination(false);
        }
      }
    }
    this.clearPath();
    return this.board[location[0]][location[1]].setIsDestination(true);
  }

  clearPath() {
    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board[i].length; j += 1) {
        if (this.board[i][j].getPathPosition() !== null) {
        this.board[i][j].setPathPosition(null);
        }
      }
    }

    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_1__.knight.movePath.length; i += 1) {
      ___WEBPACK_IMPORTED_MODULE_1__.knight.movePath.shift();
    }
  }


  drawGameboardDOM() {
    const gameboardContainer = document.getElementById('gameboardContainer');
    gameboardContainer.replaceChildren();

    for (let i = 0; i < this.board.length; i += 1) {
      const rowHolder = document.createElement('div');
      rowHolder.id = 'rowHolder';

      for (let j = 0; j < this.board[i].length; j += 1) {
        const currentSquare = this.board[i][j];
        const squareDOM = document.createElement('div');
        squareDOM.id = `${i}-${j}`;

        if (currentSquare.getColour() === 'black') {
          squareDOM.classList.add('black');
        } else {
          squareDOM.classList.add('white');
        }

        if (currentSquare.getHasKnight() === true) {
          squareDOM.classList.add('knight');
        }

        if (currentSquare.getIsDestination() === true) {
          squareDOM.classList.add('destination');
        }

        if (currentSquare.getPathPosition() !== null) {
          squareDOM.classList.add('path');
          squareDOM.textContent = `${currentSquare.getPathPosition()}`;
        }

        squareDOM.classList.add('square');

        rowHolder.appendChild(squareDOM);
      }
      gameboardContainer.appendChild(rowHolder);
    }
  }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   knight: () => (/* binding */ knight),
/* harmony export */   mainGameboard: () => (/* binding */ mainGameboard)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameboardData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardData */ "./src/gameboardData.js");
/* harmony import */ var _knightMoveData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knightMoveData */ "./src/knightMoveData.js");
/* harmony import */ var _DOMcontroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMcontroller */ "./src/DOMcontroller.js");
/* harmony import */ var _eventHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventHandlers */ "./src/eventHandlers.js");
/* harmony import */ var _knight_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./knight.svg */ "./src/knight.svg");







  const myIcon = new Image();
  myIcon.id = 'knightIcon';
  myIcon.src = _knight_svg__WEBPACK_IMPORTED_MODULE_5__;

const mainGameboard = new _gameboardData__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
console.log(mainGameboard);

mainGameboard.populateSquares(mainGameboard);
console.log(mainGameboard);

const knight = mainGameboard.placeKnight(mainGameboard);
console.log(mainGameboard);

(0,_DOMcontroller__WEBPACK_IMPORTED_MODULE_3__.drawPage)();
mainGameboard.setDestinationLocation([3, 3]);
mainGameboard.drawGameboardDOM(mainGameboard);
(0,_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.buttonEventListeners)();
(0,_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.gameBoardEvents)();





/***/ }),

/***/ "./src/knightMoveData.js":
/*!*******************************!*\
  !*** ./src/knightMoveData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnightData: () => (/* binding */ KnightData)
/* harmony export */ });
class KnightData {
  constructor(root) {
    this.root = root;
    this.movePath = [];
  }

  setRoot(newRoot) {
    this.root = newRoot;
  } 

  // get legal moves - mopve to knioght treee class
  // convert this to add nodes to above tree
  getLegalMoves(knightLocation) {
    const legalMovesArray = [
      [knightLocation[0] - 2, knightLocation[1] - 1],
      [knightLocation[0] - 2, knightLocation[1] + 1],
      [knightLocation[0] + 2, knightLocation[1] - 1],
      [knightLocation[0] + 2, knightLocation[1] + 1],
      [knightLocation[0] - 1, knightLocation[1] - 2],
      [knightLocation[0] - 1, knightLocation[1] + 2],
      [knightLocation[0] + 1, knightLocation[1] - 2],
      [knightLocation[0] + 1, knightLocation[1] + 2],
    ];

    const validMovesArray = legalMovesArray.filter((move) => (
      move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7
    ));

    return validMovesArray;
  }

  findKnightPath(root = null, destination = [3, 3]) {
    const queue = [];
    const visited = new Set(); // .add(move) .has(move)
    let resultFound = false;

    const startNode = root;
    visited.add(`${startNode.root[0]}-${startNode.root[1]}`);
    queue.push(startNode);

    console.log(`knight location: ${startNode.root}`);
    console.log(`destination: ${destination}`);

    if (startNode === null || startNode === undefined) {
      return null;
    }

    while (resultFound === false) {
      const currentItem = queue.shift();
      const movesArray = this.getLegalMoves(currentItem.root);

      if ((currentItem.root[0] === destination[0]) && (currentItem.root[1] === destination[1])) {
        currentItem.movePath.push(currentItem.root);
        resultFound = true;
        return currentItem.movePath;
      }

      for (let i = 0; i < movesArray.length; i += 1) {
        const knight = new KnightData(movesArray[i]);

        for (let j = 0; j < currentItem.movePath.length; j += 1) {
          knight.movePath.push(currentItem.movePath[j]);
        }
        knight.movePath.push(currentItem.root);

        if (!visited.has(`${knight.root[0]}-${knight.root[1]}`)) {
          visited.add(`${knight.root[0]}-${knight.root[1]}`);
          queue.push(knight);
        }
      }
    }
      return null; // shouldn't reach here,,,,

    // queue array and
    // visited "Set()"
    // startnode = new Knight & push to queue AND visited
    // then push all possible moves to queue if not in visited set
    // store each parent move? another node i guess
    // return tree of parent moves + most recent move

  }
}




/***/ }),

/***/ "./src/squareClass.js":
/*!****************************!*\
  !*** ./src/squareClass.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Square: () => (/* binding */ Square)
/* harmony export */ });
class Square {
  constructor(position) {
    this.position = position;
    this.colour = null;
    this.hasKnight = false;
    this.pathPosition = null;
    this.isDestination = false;
  }

  setColour(colour) {
    this.colour = colour;
  }

  getColour() {
    return this.colour;
  }

  setHasKnight(hasKnight) {
    this.hasKnight = hasKnight;
  }

  getHasKnight() {
    return this.hasKnight;
  }

  getPathPosition() {
    return this.pathPosition;
  }

  setPathPosition(pathPosition) {
    this.pathPosition = pathPosition;
  }

  getIsDestination() {
    return this.isDestination;
  }

  setIsDestination(destination) {
    this.isDestination = destination;
  }
}




/***/ }),

/***/ "./src/knight.svg":
/*!************************!*\
  !*** ./src/knight.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "384973f998055fe16fef.svg";

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkZ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL0RPTWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2V2ZW50SGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2dhbWVib2FyZERhdGEuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9rbmlnaHRNb3ZlRGF0YS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvc3F1YXJlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4va25pZ2h0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgMTY3LCAyNTMpO1xufVxuXG4jc2l0ZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zcXVhcmUge1xuICAgIHdpZHRoOiA4dnc7XG4gICAgaGVpZ2h0OiA3dnc7XG4gICAgZm9udC1zaXplOiBtaW4oNy41dncsIDYuNXZoKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDFweDtcbiAgICBjb2xvcjogIzAwMjU4YjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5ibGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLndoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jZ2FtZWJvYXJkQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4jcm93SG9sZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG5cbn1cblxuLmRlc3RpbmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNywgMCk7XG4gICAgY29sb3I6ICMwMDIyN2U7XG59XG5cbi5rbmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gLTJweCBjZW50ZXI7XG5cbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IG1pbig1MHZ3LCA0MHZoKTtcbiAgICBoZWlnaHQ6IDR2aDtcbn1cblxuI2J1dHRvbkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHZoO1xuICAgIG1hcmdpbi10b3A6IDR2aDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMjdlO1xufVxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNxdWFyZSB7XG4gICAgICAgIHdpZHRoOiBtaW4oOHZ3LCA3dmgpO1xuICAgICAgICBoZWlnaHQ6IG1pbig4dncsIDd2aCk7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDOztBQUV6Qzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseURBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1Qix1Q0FBdUM7O0FBRTNDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7Ozs7QUFJQTtJQUNJO1FBQ0ksb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixVQUFVO0lBQ2Q7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDE2NywgMjUzKTtcXG59XFxuXFxuI3NpdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIHdpZHRoOiA4dnc7XFxuICAgIGhlaWdodDogN3Z3O1xcbiAgICBmb250LXNpemU6IG1pbig3LjV2dywgNi41dmgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxcHg7XFxuICAgIGNvbG9yOiAjMDAyNThiO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uYmxhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLndoaXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNnYW1lYm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuI3Jvd0hvbGRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuXFxufVxcblxcbi5kZXN0aW5hdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE3LCAwKTtcXG4gICAgY29sb3I6ICMwMDIyN2U7XFxufVxcblxcbi5rbmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2tuaWdodC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIC0ycHggY2VudGVyO1xcblxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiBtaW4oNTB2dywgNDB2aCk7XFxuICAgIGhlaWdodDogNHZoO1xcbn1cXG5cXG4jYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDR2aDtcXG4gICAgbWFyZ2luLXRvcDogNHZoO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMjdlO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLnNxdWFyZSB7XFxuICAgICAgICB3aWR0aDogbWluKDh2dywgN3ZoKTtcXG4gICAgICAgIGhlaWdodDogbWluKDh2dywgN3ZoKTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBkcmF3UGFnZSgpIHtcbiAgICBjb25zdCBzaXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2l0ZUNvbnRhaW5lci5pZCA9ICdzaXRlQ29udGFpbmVyJztcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Db250YWluZXIuaWQgPSAnYnV0dG9uQ29udGFpbmVyJztcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuaWQgPSAnZ2FtZWJvYXJkQ29udGFpbmVyJztcblxuICAgIGNvbnN0IHBsYWNlS25pZ2h0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGxhY2VLbmlnaHRCdXR0b24uaWQgPSAncGxhY2VLbmlnaHRCdXR0b24nO1xuICAgIHBsYWNlS25pZ2h0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBwbGFjZUtuaWdodEJ1dHRvbi50ZXh0Q29udGVudCA9ICdQbGFjZSBLbmlnaHQnO1xuXG4gICAgY29uc3QgcGxhY2VEZXN0aW5hdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBsYWNlRGVzdGluYXRpb25CdXR0b24uaWQgPSAncGxhY2VEZXN0aW5hdGlvbkJ1dHRvbic7XG4gICAgcGxhY2VEZXN0aW5hdGlvbkJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgcGxhY2VEZXN0aW5hdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdDaG9vc2UgRGVzdGluYXRpb24nO1xuXG4gICAgY29uc3QgY2FsY3VsYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FsY3VsYXRlQnV0dG9uLmlkID0gJ2NhbGN1bGF0ZUJ1dHRvbic7XG4gICAgY2FsY3VsYXRlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYWxjdWxhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FsY3VsYXRlIFBhdGgnO1xuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYWNlS25pZ2h0QnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VEZXN0aW5hdGlvbkJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbGN1bGF0ZUJ1dHRvbik7XG4gICAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIHNpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpdGVDb250YWluZXIpO1xufVxuXG5leHBvcnQgeyBkcmF3UGFnZSB9OyIsImltcG9ydCB7IG1haW5HYW1lYm9hcmQsIGtuaWdodCB9IGZyb20gJy4nO1xuXG5sZXQgcGxhY2VLbmlnaHRBY3RpdmUgPSBmYWxzZTtcbmxldCBwbGFjZURlc3RpbmF0aW9uQWN0aXZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGJ1dHRvbkV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBwbGFjZUtuaWdodEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZUtuaWdodEJ1dHRvbicpO1xuICBjb25zdCBwbGFjZURlc3RpbmF0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlRGVzdGluYXRpb25CdXR0b24nKTtcbiAgY29uc3QgY2FsY3VsYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGN1bGF0ZUJ1dHRvbicpO1xuXG4gIHBsYWNlS25pZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBsYWNlS25pZ2h0QWN0aXZlID0gdHJ1ZTtcbiAgICBwbGFjZUtuaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHBsYWNlRGVzdGluYXRpb25BY3RpdmUgPSBmYWxzZTtcbiAgICBwbGFjZURlc3RpbmF0aW9uQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIH0pO1xuXG4gIHBsYWNlRGVzdGluYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGxhY2VLbmlnaHRBY3RpdmUgPSBmYWxzZTtcbiAgICBwbGFjZUtuaWdodEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIHBsYWNlRGVzdGluYXRpb25BY3RpdmUgPSB0cnVlO1xuICAgIHBsYWNlRGVzdGluYXRpb25CdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgfSk7XG5cbiAgY2FsY3VsYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gbWFpbkdhbWVib2FyZC5nZXREZXNpbnRhdGlvbkxvY2F0aW9uKCk7XG4gICAgY29uc3Qgc2hvcnRlc3RQYXRoQXJyYXkgPSBrbmlnaHQuZmluZEtuaWdodFBhdGgoa25pZ2h0LCBkZXN0aW5hdGlvbik7XG4gICAgY29uc29sZS5sb2coc2hvcnRlc3RQYXRoQXJyYXkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaG9ydGVzdFBhdGhBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgeCA9IHNob3J0ZXN0UGF0aEFycmF5W2ldWzBdO1xuICAgICAgY29uc3QgeSA9IHNob3J0ZXN0UGF0aEFycmF5W2ldWzFdO1xuICAgICAgbWFpbkdhbWVib2FyZC5ib2FyZFt4XVt5XS5zZXRQYXRoUG9zaXRpb24oaSk7XG4gICAgfVxuICAgIG1haW5HYW1lYm9hcmQuZHJhd0dhbWVib2FyZERPTShtYWluR2FtZWJvYXJkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZEV2ZW50cygpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZENvbnRhaW5lcicpO1xuXG4gIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpIHtcbiAgICAgIGNvbnN0IHggPSBwYXJzZUludChlLnRhcmdldC5pZC5zcGxpdCgnLScpWzBdLCAxMCk7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSwgMTApO1xuXG4gICAgICBjb25zb2xlLmxvZyh4KTtcblxuICAgICAgaWYgKHBsYWNlS25pZ2h0QWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBwbGFjZSBrbmlnaHQgJHt4fS0ke3l9YCk7XG4gICAgICAgIGtuaWdodC5zZXRSb290KFt4LCB5XSk7XG4gICAgICAgIG1haW5HYW1lYm9hcmQuc2V0S25pZ2h0TG9jYXRpb24oW3gsIHldKTtcbiAgICAgICAgbWFpbkdhbWVib2FyZC5kcmF3R2FtZWJvYXJkRE9NKG1haW5HYW1lYm9hcmQpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYWNlRGVzdGluYXRpb25BY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHBsYWNlIGRlc3RpbmF0aW9uICR7eH0tJHt5fWApO1xuICAgICAgICBtYWluR2FtZWJvYXJkLnNldERlc3RpbmF0aW9uTG9jYXRpb24oW3gsIHldKTtcbiAgICAgICAgbWFpbkdhbWVib2FyZC5kcmF3R2FtZWJvYXJkRE9NKG1haW5HYW1lYm9hcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGJ1dHRvbkV2ZW50TGlzdGVuZXJzLCBnYW1lQm9hcmRFdmVudHMgfTtcbiIsImltcG9ydCB7IFNxdWFyZSB9IGZyb20gJy4vc3F1YXJlQ2xhc3MnO1xuaW1wb3J0IHsga25pZ2h0IH0gZnJvbSAnLic7XG5pbXBvcnQgeyBLbmlnaHREYXRhIH0gZnJvbSAnLi9rbmlnaHRNb3ZlRGF0YSc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVCb2FyZCgpO1xuICB9XG5cbiAgY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IG0gPSA4O1xuICAgIGNvbnN0IG4gPSA4O1xuXG4gICAgY29uc3QgY2hlc3Nib2FyZCA9IG5ldyBBcnJheShtKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSArPSAxKSB7XG4gICAgICBjaGVzc2JvYXJkW2ldID0gbmV3IEFycmF5KG4pO1xuICAgIH1cbiAgICByZXR1cm4gY2hlc3Nib2FyZDtcbiAgfVxuXG4gIHBvcHVsYXRlU3F1YXJlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBuZXcgU3F1YXJlKFtpLCBqXSk7XG5cbiAgICAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICAgICAgaWYgKGogJSAyID09PSAwKSB7XG4gICAgICAgICAgICBzcXVhcmUuc2V0Q29sb3VyKCd3aGl0ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcXVhcmUuc2V0Q29sb3VyKCdibGFjaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpICUgMiAhPT0gMCkge1xuICAgICAgICAgIGlmIChqICUgMiAhPT0gMCkge1xuICAgICAgICAgICAgc3F1YXJlLnNldENvbG91cignd2hpdGUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3F1YXJlLnNldENvbG91cignYmxhY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gc3F1YXJlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlS25pZ2h0KCkge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmUgPSB0aGlzLmJvYXJkW3hdW3ldO1xuICAgIHNlbGVjdGVkU3F1YXJlLnNldEhhc0tuaWdodCh0cnVlKTtcbiAgICByZXR1cm4gbmV3IEtuaWdodERhdGEoW3gsIHldKTtcbiAgfVxuXG4gIGdldEtuaWdodExvY2F0aW9uKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLmdldEhhc0tuaWdodCgpID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIFtpLCBqXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldERlc2ludGF0aW9uTG9jYXRpb24oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0uZ2V0SXNEZXN0aW5hdGlvbigpID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIFtpLCBqXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldEtuaWdodExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0uZ2V0SGFzS25pZ2h0KCkgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnNldEhhc0tuaWdodChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbGVhclBhdGgoKTtcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtsb2NhdGlvblswXV1bbG9jYXRpb25bMV1dLnNldEhhc0tuaWdodCh0cnVlKTtcbiAgfVxuXG4gIHNldERlc3RpbmF0aW9uTG9jYXRpb24obG9jYXRpb24pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXS5nZXRJc0Rlc3RpbmF0aW9uKCkgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnNldElzRGVzdGluYXRpb24oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2xlYXJQYXRoKCk7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbbG9jYXRpb25bMF1dW2xvY2F0aW9uWzFdXS5zZXRJc0Rlc3RpbmF0aW9uKHRydWUpO1xuICB9XG5cbiAgY2xlYXJQYXRoKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLmdldFBhdGhQb3NpdGlvbigpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0uc2V0UGF0aFBvc2l0aW9uKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrbmlnaHQubW92ZVBhdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGtuaWdodC5tb3ZlUGF0aC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG5cbiAgZHJhd0dhbWVib2FyZERPTSgpIHtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCByb3dIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvd0hvbGRlci5pZCA9ICdyb3dIb2xkZXInO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNxdWFyZSA9IHRoaXMuYm9hcmRbaV1bal07XG4gICAgICAgIGNvbnN0IHNxdWFyZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmVET00uaWQgPSBgJHtpfS0ke2p9YDtcblxuICAgICAgICBpZiAoY3VycmVudFNxdWFyZS5nZXRDb2xvdXIoKSA9PT0gJ2JsYWNrJykge1xuICAgICAgICAgIHNxdWFyZURPTS5jbGFzc0xpc3QuYWRkKCdibGFjaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFyZURPTS5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTcXVhcmUuZ2V0SGFzS25pZ2h0KCkgPT09IHRydWUpIHtcbiAgICAgICAgICBzcXVhcmVET00uY2xhc3NMaXN0LmFkZCgna25pZ2h0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNxdWFyZS5nZXRJc0Rlc3RpbmF0aW9uKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBzcXVhcmVET00uY2xhc3NMaXN0LmFkZCgnZGVzdGluYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50U3F1YXJlLmdldFBhdGhQb3NpdGlvbigpICE9PSBudWxsKSB7XG4gICAgICAgICAgc3F1YXJlRE9NLmNsYXNzTGlzdC5hZGQoJ3BhdGgnKTtcbiAgICAgICAgICBzcXVhcmVET00udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50U3F1YXJlLmdldFBhdGhQb3NpdGlvbigpfWA7XG4gICAgICAgIH1cblxuICAgICAgICBzcXVhcmVET00uY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG5cbiAgICAgICAgcm93SG9sZGVyLmFwcGVuZENoaWxkKHNxdWFyZURPTSk7XG4gICAgICB9XG4gICAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93SG9sZGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkRGF0YSc7XG5pbXBvcnQgeyBLbmlnaHREYXRhIH0gZnJvbSAnLi9rbmlnaHRNb3ZlRGF0YSc7XG5pbXBvcnQgeyBkcmF3UGFnZSB9IGZyb20gJy4vRE9NY29udHJvbGxlcic7XG5pbXBvcnQgeyBidXR0b25FdmVudExpc3RlbmVycywgZ2FtZUJvYXJkRXZlbnRzIH0gZnJvbSAnLi9ldmVudEhhbmRsZXJzJztcbmltcG9ydCBJY29uIGZyb20gJy4va25pZ2h0LnN2Zyc7XG5cbiAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIG15SWNvbi5pZCA9ICdrbmlnaHRJY29uJztcbiAgbXlJY29uLnNyYyA9IEljb247XG5cbmNvbnN0IG1haW5HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5jb25zb2xlLmxvZyhtYWluR2FtZWJvYXJkKTtcblxubWFpbkdhbWVib2FyZC5wb3B1bGF0ZVNxdWFyZXMobWFpbkdhbWVib2FyZCk7XG5jb25zb2xlLmxvZyhtYWluR2FtZWJvYXJkKTtcblxuY29uc3Qga25pZ2h0ID0gbWFpbkdhbWVib2FyZC5wbGFjZUtuaWdodChtYWluR2FtZWJvYXJkKTtcbmNvbnNvbGUubG9nKG1haW5HYW1lYm9hcmQpO1xuXG5kcmF3UGFnZSgpO1xubWFpbkdhbWVib2FyZC5zZXREZXN0aW5hdGlvbkxvY2F0aW9uKFszLCAzXSk7XG5tYWluR2FtZWJvYXJkLmRyYXdHYW1lYm9hcmRET00obWFpbkdhbWVib2FyZCk7XG5idXR0b25FdmVudExpc3RlbmVycygpO1xuZ2FtZUJvYXJkRXZlbnRzKCk7XG5cbmV4cG9ydCB7IG1haW5HYW1lYm9hcmQsIGtuaWdodCB9O1xuXG4iLCJjbGFzcyBLbmlnaHREYXRhIHtcbiAgY29uc3RydWN0b3Iocm9vdCkge1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgdGhpcy5tb3ZlUGF0aCA9IFtdO1xuICB9XG5cbiAgc2V0Um9vdChuZXdSb290KSB7XG4gICAgdGhpcy5yb290ID0gbmV3Um9vdDtcbiAgfSBcblxuICAvLyBnZXQgbGVnYWwgbW92ZXMgLSBtb3B2ZSB0byBrbmlvZ2h0IHRyZWVlIGNsYXNzXG4gIC8vIGNvbnZlcnQgdGhpcyB0byBhZGQgbm9kZXMgdG8gYWJvdmUgdHJlZVxuICBnZXRMZWdhbE1vdmVzKGtuaWdodExvY2F0aW9uKSB7XG4gICAgY29uc3QgbGVnYWxNb3Zlc0FycmF5ID0gW1xuICAgICAgW2tuaWdodExvY2F0aW9uWzBdIC0gMiwga25pZ2h0TG9jYXRpb25bMV0gLSAxXSxcbiAgICAgIFtrbmlnaHRMb2NhdGlvblswXSAtIDIsIGtuaWdodExvY2F0aW9uWzFdICsgMV0sXG4gICAgICBba25pZ2h0TG9jYXRpb25bMF0gKyAyLCBrbmlnaHRMb2NhdGlvblsxXSAtIDFdLFxuICAgICAgW2tuaWdodExvY2F0aW9uWzBdICsgMiwga25pZ2h0TG9jYXRpb25bMV0gKyAxXSxcbiAgICAgIFtrbmlnaHRMb2NhdGlvblswXSAtIDEsIGtuaWdodExvY2F0aW9uWzFdIC0gMl0sXG4gICAgICBba25pZ2h0TG9jYXRpb25bMF0gLSAxLCBrbmlnaHRMb2NhdGlvblsxXSArIDJdLFxuICAgICAgW2tuaWdodExvY2F0aW9uWzBdICsgMSwga25pZ2h0TG9jYXRpb25bMV0gLSAyXSxcbiAgICAgIFtrbmlnaHRMb2NhdGlvblswXSArIDEsIGtuaWdodExvY2F0aW9uWzFdICsgMl0sXG4gICAgXTtcblxuICAgIGNvbnN0IHZhbGlkTW92ZXNBcnJheSA9IGxlZ2FsTW92ZXNBcnJheS5maWx0ZXIoKG1vdmUpID0+IChcbiAgICAgIG1vdmVbMF0gPj0gMCAmJiBtb3ZlWzBdIDw9IDcgJiYgbW92ZVsxXSA+PSAwICYmIG1vdmVbMV0gPD0gN1xuICAgICkpO1xuXG4gICAgcmV0dXJuIHZhbGlkTW92ZXNBcnJheTtcbiAgfVxuXG4gIGZpbmRLbmlnaHRQYXRoKHJvb3QgPSBudWxsLCBkZXN0aW5hdGlvbiA9IFszLCAzXSkge1xuICAgIGNvbnN0IHF1ZXVlID0gW107XG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTsgLy8gLmFkZChtb3ZlKSAuaGFzKG1vdmUpXG4gICAgbGV0IHJlc3VsdEZvdW5kID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGFydE5vZGUgPSByb290O1xuICAgIHZpc2l0ZWQuYWRkKGAke3N0YXJ0Tm9kZS5yb290WzBdfS0ke3N0YXJ0Tm9kZS5yb290WzFdfWApO1xuICAgIHF1ZXVlLnB1c2goc3RhcnROb2RlKTtcblxuICAgIGNvbnNvbGUubG9nKGBrbmlnaHQgbG9jYXRpb246ICR7c3RhcnROb2RlLnJvb3R9YCk7XG4gICAgY29uc29sZS5sb2coYGRlc3RpbmF0aW9uOiAke2Rlc3RpbmF0aW9ufWApO1xuXG4gICAgaWYgKHN0YXJ0Tm9kZSA9PT0gbnVsbCB8fCBzdGFydE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgd2hpbGUgKHJlc3VsdEZvdW5kID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgY29uc3QgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhjdXJyZW50SXRlbS5yb290KTtcblxuICAgICAgaWYgKChjdXJyZW50SXRlbS5yb290WzBdID09PSBkZXN0aW5hdGlvblswXSkgJiYgKGN1cnJlbnRJdGVtLnJvb3RbMV0gPT09IGRlc3RpbmF0aW9uWzFdKSkge1xuICAgICAgICBjdXJyZW50SXRlbS5tb3ZlUGF0aC5wdXNoKGN1cnJlbnRJdGVtLnJvb3QpO1xuICAgICAgICByZXN1bHRGb3VuZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBjdXJyZW50SXRlbS5tb3ZlUGF0aDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlc0FycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtuaWdodCA9IG5ldyBLbmlnaHREYXRhKG1vdmVzQXJyYXlbaV0pO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudEl0ZW0ubW92ZVBhdGgubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBrbmlnaHQubW92ZVBhdGgucHVzaChjdXJyZW50SXRlbS5tb3ZlUGF0aFtqXSk7XG4gICAgICAgIH1cbiAgICAgICAga25pZ2h0Lm1vdmVQYXRoLnB1c2goY3VycmVudEl0ZW0ucm9vdCk7XG5cbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhgJHtrbmlnaHQucm9vdFswXX0tJHtrbmlnaHQucm9vdFsxXX1gKSkge1xuICAgICAgICAgIHZpc2l0ZWQuYWRkKGAke2tuaWdodC5yb290WzBdfS0ke2tuaWdodC5yb290WzFdfWApO1xuICAgICAgICAgIHF1ZXVlLnB1c2goa25pZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAgIHJldHVybiBudWxsOyAvLyBzaG91bGRuJ3QgcmVhY2ggaGVyZSwsLCxcblxuICAgIC8vIHF1ZXVlIGFycmF5IGFuZFxuICAgIC8vIHZpc2l0ZWQgXCJTZXQoKVwiXG4gICAgLy8gc3RhcnRub2RlID0gbmV3IEtuaWdodCAmIHB1c2ggdG8gcXVldWUgQU5EIHZpc2l0ZWRcbiAgICAvLyB0aGVuIHB1c2ggYWxsIHBvc3NpYmxlIG1vdmVzIHRvIHF1ZXVlIGlmIG5vdCBpbiB2aXNpdGVkIHNldFxuICAgIC8vIHN0b3JlIGVhY2ggcGFyZW50IG1vdmU/IGFub3RoZXIgbm9kZSBpIGd1ZXNzXG4gICAgLy8gcmV0dXJuIHRyZWUgb2YgcGFyZW50IG1vdmVzICsgbW9zdCByZWNlbnQgbW92ZVxuXG4gIH1cbn1cblxuZXhwb3J0IHsgS25pZ2h0RGF0YSB9O1xuIiwiY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5jb2xvdXIgPSBudWxsO1xuICAgIHRoaXMuaGFzS25pZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5wYXRoUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMuaXNEZXN0aW5hdGlvbiA9IGZhbHNlO1xuICB9XG5cbiAgc2V0Q29sb3VyKGNvbG91cikge1xuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuXG4gIHNldEhhc0tuaWdodChoYXNLbmlnaHQpIHtcbiAgICB0aGlzLmhhc0tuaWdodCA9IGhhc0tuaWdodDtcbiAgfVxuXG4gIGdldEhhc0tuaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNLbmlnaHQ7XG4gIH1cblxuICBnZXRQYXRoUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aFBvc2l0aW9uO1xuICB9XG5cbiAgc2V0UGF0aFBvc2l0aW9uKHBhdGhQb3NpdGlvbikge1xuICAgIHRoaXMucGF0aFBvc2l0aW9uID0gcGF0aFBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0SXNEZXN0aW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rlc3RpbmF0aW9uO1xuICB9XG5cbiAgc2V0SXNEZXN0aW5hdGlvbihkZXN0aW5hdGlvbikge1xuICAgIHRoaXMuaXNEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICB9XG59XG5cbmV4cG9ydCB7IFNxdWFyZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
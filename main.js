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

}

.square {
    width: 8vw;
    height: 8vw;
    font-size: min(7.5vw, 6.5vh);
    color: #00258b;
    font-weight: 500;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    align-items: center;
    justify-content: center;
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
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,4BAA4B;IAC5B,cAAc;IACd,gBAAgB;IAChB,8CAA8C;IAC9C,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qCAAqC;;AAEzC;;AAEA;IACI,iCAAiC;IACjC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yDAAqC;IACrC,4BAA4B;IAC5B,uCAAuC;;AAE3C;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;;;AAIA;IACI;QACI,oBAAoB;QACpB,qBAAqB;IACzB;;AAEJ","sourcesContent":["body {\n    background-color: rgb(110, 167, 253);\n}\n\n#siteContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.square {\n    width: 8vw;\n    height: 8vw;\n    font-size: min(7.5vw, 6.5vh);\n    color: #00258b;\n    font-weight: 500;\n    font-family: 'Courier New', Courier, monospace;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.black {\n    background-color: black;\n    color: aliceblue;\n}\n\n.white {\n    background-color: aliceblue;\n    color: black;\n}\n\n#gameboardContainer {\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n    justify-content: center;\n    border: 3px solid black;\n    width: min-content;\n}\n\n#rowHolder {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n\n}\n\n.destination {\n    background-color: rgb(255, 17, 0);\n    color: #00227e;\n}\n\n.knight {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-image: url('./knight.svg');\n    background-repeat: no-repeat;\n    background-position: bottom -2px center;\n\n}\n\nbutton {\n    background-color: black;\n    color: aliceblue;\n    border: none;\n    border-style: none;\n    width: min(50vw, 40vh);\n    height: 4vh;\n}\n\n#buttonContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 15vh;\n    margin-bottom: 4vh;\n    margin-top: 4vh;\n}\n\n.selected {\n    background-color: #00227e;\n}\n\n\n\n@media (min-width: 768px) {\n    .square {\n        width: min(8vw, 7vh);\n        height: min(8vw, 7vh);\n    }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNuRnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ2xCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvRE9NY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvZXZlbnRIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvZ2FtZWJvYXJkRGF0YS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2tuaWdodE1vdmVEYXRhLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9zcXVhcmVDbGFzcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9rbmlnaHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEwLCAxNjcsIDI1Myk7XG59XG5cbiNzaXRlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uc3F1YXJlIHtcbiAgICB3aWR0aDogOHZ3O1xuICAgIGhlaWdodDogOHZ3O1xuICAgIGZvbnQtc2l6ZTogbWluKDcuNXZ3LCA2LjV2aCk7XG4gICAgY29sb3I6ICMwMDI1OGI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4ud2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNnYW1lYm9hcmRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbiNyb3dIb2xkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcblxufVxuXG4uZGVzdGluYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE3LCAwKTtcbiAgICBjb2xvcjogIzAwMjI3ZTtcbn1cblxuLmtuaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSAtMnB4IGNlbnRlcjtcblxufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogbWluKDUwdncsIDQwdmgpO1xuICAgIGhlaWdodDogNHZoO1xufVxuXG4jYnV0dG9uQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTV2aDtcbiAgICBtYXJnaW4tYm90dG9tOiA0dmg7XG4gICAgbWFyZ2luLXRvcDogNHZoO1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDIyN2U7XG59XG5cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuc3F1YXJlIHtcbiAgICAgICAgd2lkdGg6IG1pbig4dncsIDd2aCk7XG4gICAgICAgIGhlaWdodDogbWluKDh2dywgN3ZoKTtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDOztBQUV6Qzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseURBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1Qix1Q0FBdUM7O0FBRTNDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7Ozs7QUFJQTtJQUNJO1FBQ0ksb0JBQW9CO1FBQ3BCLHFCQUFxQjtJQUN6Qjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgMTY3LCAyNTMpO1xcbn1cXG5cXG4jc2l0ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5zcXVhcmUge1xcbiAgICB3aWR0aDogOHZ3O1xcbiAgICBoZWlnaHQ6IDh2dztcXG4gICAgZm9udC1zaXplOiBtaW4oNy41dncsIDYuNXZoKTtcXG4gICAgY29sb3I6ICMwMDI1OGI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmxhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLndoaXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNnYW1lYm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuI3Jvd0hvbGRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuXFxufVxcblxcbi5kZXN0aW5hdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE3LCAwKTtcXG4gICAgY29sb3I6ICMwMDIyN2U7XFxufVxcblxcbi5rbmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2tuaWdodC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIC0ycHggY2VudGVyO1xcblxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiBtaW4oNTB2dywgNDB2aCk7XFxuICAgIGhlaWdodDogNHZoO1xcbn1cXG5cXG4jYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDR2aDtcXG4gICAgbWFyZ2luLXRvcDogNHZoO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMjdlO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLnNxdWFyZSB7XFxuICAgICAgICB3aWR0aDogbWluKDh2dywgN3ZoKTtcXG4gICAgICAgIGhlaWdodDogbWluKDh2dywgN3ZoKTtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGRyYXdQYWdlKCkge1xuICAgIGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaXRlQ29udGFpbmVyLmlkID0gJ3NpdGVDb250YWluZXInO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5pZCA9ICdidXR0b25Db250YWluZXInO1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5pZCA9ICdnYW1lYm9hcmRDb250YWluZXInO1xuXG4gICAgY29uc3QgcGxhY2VLbmlnaHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwbGFjZUtuaWdodEJ1dHRvbi5pZCA9ICdwbGFjZUtuaWdodEJ1dHRvbic7XG4gICAgcGxhY2VLbmlnaHRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIHBsYWNlS25pZ2h0QnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYWNlIEtuaWdodCc7XG5cbiAgICBjb25zdCBwbGFjZURlc3RpbmF0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGxhY2VEZXN0aW5hdGlvbkJ1dHRvbi5pZCA9ICdwbGFjZURlc3RpbmF0aW9uQnV0dG9uJztcbiAgICBwbGFjZURlc3RpbmF0aW9uQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBwbGFjZURlc3RpbmF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nob29zZSBEZXN0aW5hdGlvbic7XG5cbiAgICBjb25zdCBjYWxjdWxhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYWxjdWxhdGVCdXR0b24uaWQgPSAnY2FsY3VsYXRlQnV0dG9uJztcbiAgICBjYWxjdWxhdGVCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbGN1bGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYWxjdWxhdGUgUGF0aCc7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VLbmlnaHRCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZURlc3RpbmF0aW9uQnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FsY3VsYXRlQnV0dG9uKTtcbiAgICBzaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lYm9hcmRDb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2l0ZUNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IGRyYXdQYWdlIH07IiwiaW1wb3J0IHsgbWFpbkdhbWVib2FyZCwga25pZ2h0IH0gZnJvbSAnLic7XG5cbmxldCBwbGFjZUtuaWdodEFjdGl2ZSA9IGZhbHNlO1xubGV0IHBsYWNlRGVzdGluYXRpb25BY3RpdmUgPSBmYWxzZTtcblxuZnVuY3Rpb24gYnV0dG9uRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IHBsYWNlS25pZ2h0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlS25pZ2h0QnV0dG9uJyk7XG4gIGNvbnN0IHBsYWNlRGVzdGluYXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VEZXN0aW5hdGlvbkJ1dHRvbicpO1xuICBjb25zdCBjYWxjdWxhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FsY3VsYXRlQnV0dG9uJyk7XG5cbiAgcGxhY2VLbmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGxhY2VLbmlnaHRBY3RpdmUgPSB0cnVlO1xuICAgIHBsYWNlS25pZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgcGxhY2VEZXN0aW5hdGlvbkFjdGl2ZSA9IGZhbHNlO1xuICAgIHBsYWNlRGVzdGluYXRpb25CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgfSk7XG5cbiAgcGxhY2VEZXN0aW5hdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwbGFjZUtuaWdodEFjdGl2ZSA9IGZhbHNlO1xuICAgIHBsYWNlS25pZ2h0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgcGxhY2VEZXN0aW5hdGlvbkFjdGl2ZSA9IHRydWU7XG4gICAgcGxhY2VEZXN0aW5hdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICB9KTtcblxuICBjYWxjdWxhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSBtYWluR2FtZWJvYXJkLmdldERlc2ludGF0aW9uTG9jYXRpb24oKTtcbiAgICBjb25zdCBzaG9ydGVzdFBhdGhBcnJheSA9IGtuaWdodC5maW5kS25pZ2h0UGF0aChrbmlnaHQsIGRlc3RpbmF0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhzaG9ydGVzdFBhdGhBcnJheSk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNob3J0ZXN0UGF0aEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB4ID0gc2hvcnRlc3RQYXRoQXJyYXlbaV1bMF07XG4gICAgICBjb25zdCB5ID0gc2hvcnRlc3RQYXRoQXJyYXlbaV1bMV07XG4gICAgICBtYWluR2FtZWJvYXJkLmJvYXJkW3hdW3ldLnNldFBhdGhQb3NpdGlvbihpKTtcbiAgICB9XG4gICAgbWFpbkdhbWVib2FyZC5kcmF3R2FtZWJvYXJkRE9NKG1haW5HYW1lYm9hcmQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2FtZUJvYXJkRXZlbnRzKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XG5cbiAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmUnKSkge1xuICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMF0sIDEwKTtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdLCAxMCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHgpO1xuXG4gICAgICBpZiAocGxhY2VLbmlnaHRBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHBsYWNlIGtuaWdodCAke3h9LSR7eX1gKTtcbiAgICAgICAga25pZ2h0LnNldFJvb3QoW3gsIHldKTtcbiAgICAgICAgbWFpbkdhbWVib2FyZC5zZXRLbmlnaHRMb2NhdGlvbihbeCwgeV0pO1xuICAgICAgICBtYWluR2FtZWJvYXJkLmRyYXdHYW1lYm9hcmRET00obWFpbkdhbWVib2FyZCk7XG4gICAgICB9XG4gICAgICBpZiAocGxhY2VEZXN0aW5hdGlvbkFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgcGxhY2UgZGVzdGluYXRpb24gJHt4fS0ke3l9YCk7XG4gICAgICAgIG1haW5HYW1lYm9hcmQuc2V0RGVzdGluYXRpb25Mb2NhdGlvbihbeCwgeV0pO1xuICAgICAgICBtYWluR2FtZWJvYXJkLmRyYXdHYW1lYm9hcmRET00obWFpbkdhbWVib2FyZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgYnV0dG9uRXZlbnRMaXN0ZW5lcnMsIGdhbWVCb2FyZEV2ZW50cyB9O1xuIiwiaW1wb3J0IHsgU3F1YXJlIH0gZnJvbSAnLi9zcXVhcmVDbGFzcyc7XG5pbXBvcnQgeyBrbmlnaHQgfSBmcm9tICcuJztcbmltcG9ydCB7IEtuaWdodERhdGEgfSBmcm9tICcuL2tuaWdodE1vdmVEYXRhJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlR2FtZUJvYXJkKCk7XG4gIH1cblxuICBjcmVhdGVHYW1lQm9hcmQoKSB7XG4gICAgY29uc3QgbSA9IDg7XG4gICAgY29uc3QgbiA9IDg7XG5cbiAgICBjb25zdCBjaGVzc2JvYXJkID0gbmV3IEFycmF5KG0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpICs9IDEpIHtcbiAgICAgIGNoZXNzYm9hcmRbaV0gPSBuZXcgQXJyYXkobik7XG4gICAgfVxuICAgIHJldHVybiBjaGVzc2JvYXJkO1xuICB9XG5cbiAgcG9wdWxhdGVTcXVhcmVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IG5ldyBTcXVhcmUoW2ksIGpdKTtcblxuICAgICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgICBpZiAoaiAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRDb2xvdXIoJ3doaXRlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRDb2xvdXIoJ2JsYWNrJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgJSAyICE9PSAwKSB7XG4gICAgICAgICAgaWYgKGogJSAyICE9PSAwKSB7XG4gICAgICAgICAgICBzcXVhcmUuc2V0Q29sb3VyKCd3aGl0ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcXVhcmUuc2V0Q29sb3VyKCdibGFjaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBzcXVhcmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VLbmlnaHQoKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICBjb25zdCBzZWxlY3RlZFNxdWFyZSA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgc2VsZWN0ZWRTcXVhcmUuc2V0SGFzS25pZ2h0KHRydWUpO1xuICAgIHJldHVybiBuZXcgS25pZ2h0RGF0YShbeCwgeV0pO1xuICB9XG5cbiAgZ2V0S25pZ2h0TG9jYXRpb24oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0uZ2V0SGFzS25pZ2h0KCkgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gW2ksIGpdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0RGVzaW50YXRpb25Mb2NhdGlvbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXS5nZXRJc0Rlc3RpbmF0aW9uKCkgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gW2ksIGpdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0S25pZ2h0TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXS5nZXRIYXNLbmlnaHQoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0uc2V0SGFzS25pZ2h0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNsZWFyUGF0aCgpO1xuICAgIHJldHVybiB0aGlzLmJvYXJkW2xvY2F0aW9uWzBdXVtsb2NhdGlvblsxXV0uc2V0SGFzS25pZ2h0KHRydWUpO1xuICB9XG5cbiAgc2V0RGVzdGluYXRpb25Mb2NhdGlvbihsb2NhdGlvbikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLmdldElzRGVzdGluYXRpb24oKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0uc2V0SXNEZXN0aW5hdGlvbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbGVhclBhdGgoKTtcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtsb2NhdGlvblswXV1bbG9jYXRpb25bMV1dLnNldElzRGVzdGluYXRpb24odHJ1ZSk7XG4gIH1cblxuICBjbGVhclBhdGgoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0uZ2V0UGF0aFBvc2l0aW9uKCkgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtqXS5zZXRQYXRoUG9zaXRpb24obnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtuaWdodC5tb3ZlUGF0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAga25pZ2h0Lm1vdmVQYXRoLnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cblxuICBkcmF3R2FtZWJvYXJkRE9NKCkge1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmRDb250YWluZXInKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvd0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93SG9sZGVyLmlkID0gJ3Jvd0hvbGRlcic7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjdXJyZW50U3F1YXJlID0gdGhpcy5ib2FyZFtpXVtqXTtcbiAgICAgICAgY29uc3Qgc3F1YXJlRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZURPTS5pZCA9IGAke2l9LSR7an1gO1xuXG4gICAgICAgIGlmIChjdXJyZW50U3F1YXJlLmdldENvbG91cigpID09PSAnYmxhY2snKSB7XG4gICAgICAgICAgc3F1YXJlRE9NLmNsYXNzTGlzdC5hZGQoJ2JsYWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXJlRE9NLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNxdWFyZS5nZXRIYXNLbmlnaHQoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNxdWFyZURPTS5jbGFzc0xpc3QuYWRkKCdrbmlnaHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50U3F1YXJlLmdldElzRGVzdGluYXRpb24oKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNxdWFyZURPTS5jbGFzc0xpc3QuYWRkKCdkZXN0aW5hdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTcXVhcmUuZ2V0UGF0aFBvc2l0aW9uKCkgIT09IG51bGwpIHtcbiAgICAgICAgICBzcXVhcmVET00uY2xhc3NMaXN0LmFkZCgncGF0aCcpO1xuICAgICAgICAgIHNxdWFyZURPTS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRTcXVhcmUuZ2V0UGF0aFBvc2l0aW9uKCl9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNxdWFyZURPTS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcblxuICAgICAgICByb3dIb2xkZXIuYXBwZW5kQ2hpbGQoc3F1YXJlRE9NKTtcbiAgICAgIH1cbiAgICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3dIb2xkZXIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmREYXRhJztcbmltcG9ydCB7IEtuaWdodERhdGEgfSBmcm9tICcuL2tuaWdodE1vdmVEYXRhJztcbmltcG9ydCB7IGRyYXdQYWdlIH0gZnJvbSAnLi9ET01jb250cm9sbGVyJztcbmltcG9ydCB7IGJ1dHRvbkV2ZW50TGlzdGVuZXJzLCBnYW1lQm9hcmRFdmVudHMgfSBmcm9tICcuL2V2ZW50SGFuZGxlcnMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9rbmlnaHQuc3ZnJztcblxuICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlJY29uLmlkID0gJ2tuaWdodEljb24nO1xuICBteUljb24uc3JjID0gSWNvbjtcblxuY29uc3QgbWFpbkdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnNvbGUubG9nKG1haW5HYW1lYm9hcmQpO1xuXG5tYWluR2FtZWJvYXJkLnBvcHVsYXRlU3F1YXJlcyhtYWluR2FtZWJvYXJkKTtcbmNvbnNvbGUubG9nKG1haW5HYW1lYm9hcmQpO1xuXG5jb25zdCBrbmlnaHQgPSBtYWluR2FtZWJvYXJkLnBsYWNlS25pZ2h0KG1haW5HYW1lYm9hcmQpO1xuY29uc29sZS5sb2cobWFpbkdhbWVib2FyZCk7XG5cbmRyYXdQYWdlKCk7XG5tYWluR2FtZWJvYXJkLnNldERlc3RpbmF0aW9uTG9jYXRpb24oWzMsIDNdKTtcbm1haW5HYW1lYm9hcmQuZHJhd0dhbWVib2FyZERPTShtYWluR2FtZWJvYXJkKTtcbmJ1dHRvbkV2ZW50TGlzdGVuZXJzKCk7XG5nYW1lQm9hcmRFdmVudHMoKTtcblxuZXhwb3J0IHsgbWFpbkdhbWVib2FyZCwga25pZ2h0IH07XG5cbiIsImNsYXNzIEtuaWdodERhdGEge1xuICBjb25zdHJ1Y3Rvcihyb290KSB7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLm1vdmVQYXRoID0gW107XG4gIH1cblxuICBzZXRSb290KG5ld1Jvb3QpIHtcbiAgICB0aGlzLnJvb3QgPSBuZXdSb290O1xuICB9IFxuXG4gIC8vIGdldCBsZWdhbCBtb3ZlcyAtIG1vcHZlIHRvIGtuaW9naHQgdHJlZWUgY2xhc3NcbiAgLy8gY29udmVydCB0aGlzIHRvIGFkZCBub2RlcyB0byBhYm92ZSB0cmVlXG4gIGdldExlZ2FsTW92ZXMoa25pZ2h0TG9jYXRpb24pIHtcbiAgICBjb25zdCBsZWdhbE1vdmVzQXJyYXkgPSBbXG4gICAgICBba25pZ2h0TG9jYXRpb25bMF0gLSAyLCBrbmlnaHRMb2NhdGlvblsxXSAtIDFdLFxuICAgICAgW2tuaWdodExvY2F0aW9uWzBdIC0gMiwga25pZ2h0TG9jYXRpb25bMV0gKyAxXSxcbiAgICAgIFtrbmlnaHRMb2NhdGlvblswXSArIDIsIGtuaWdodExvY2F0aW9uWzFdIC0gMV0sXG4gICAgICBba25pZ2h0TG9jYXRpb25bMF0gKyAyLCBrbmlnaHRMb2NhdGlvblsxXSArIDFdLFxuICAgICAgW2tuaWdodExvY2F0aW9uWzBdIC0gMSwga25pZ2h0TG9jYXRpb25bMV0gLSAyXSxcbiAgICAgIFtrbmlnaHRMb2NhdGlvblswXSAtIDEsIGtuaWdodExvY2F0aW9uWzFdICsgMl0sXG4gICAgICBba25pZ2h0TG9jYXRpb25bMF0gKyAxLCBrbmlnaHRMb2NhdGlvblsxXSAtIDJdLFxuICAgICAgW2tuaWdodExvY2F0aW9uWzBdICsgMSwga25pZ2h0TG9jYXRpb25bMV0gKyAyXSxcbiAgICBdO1xuXG4gICAgY29uc3QgdmFsaWRNb3Zlc0FycmF5ID0gbGVnYWxNb3Zlc0FycmF5LmZpbHRlcigobW92ZSkgPT4gKFxuICAgICAgbW92ZVswXSA+PSAwICYmIG1vdmVbMF0gPD0gNyAmJiBtb3ZlWzFdID49IDAgJiYgbW92ZVsxXSA8PSA3XG4gICAgKSk7XG5cbiAgICByZXR1cm4gdmFsaWRNb3Zlc0FycmF5O1xuICB9XG5cbiAgZmluZEtuaWdodFBhdGgocm9vdCA9IG51bGwsIGRlc3RpbmF0aW9uID0gWzMsIDNdKSB7XG4gICAgY29uc3QgcXVldWUgPSBbXTtcbiAgICBjb25zdCB2aXNpdGVkID0gbmV3IFNldCgpOyAvLyAuYWRkKG1vdmUpIC5oYXMobW92ZSlcbiAgICBsZXQgcmVzdWx0Rm91bmQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXJ0Tm9kZSA9IHJvb3Q7XG4gICAgdmlzaXRlZC5hZGQoYCR7c3RhcnROb2RlLnJvb3RbMF19LSR7c3RhcnROb2RlLnJvb3RbMV19YCk7XG4gICAgcXVldWUucHVzaChzdGFydE5vZGUpO1xuXG4gICAgY29uc29sZS5sb2coYGtuaWdodCBsb2NhdGlvbjogJHtzdGFydE5vZGUucm9vdH1gKTtcbiAgICBjb25zb2xlLmxvZyhgZGVzdGluYXRpb246ICR7ZGVzdGluYXRpb259YCk7XG5cbiAgICBpZiAoc3RhcnROb2RlID09PSBudWxsIHx8IHN0YXJ0Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB3aGlsZSAocmVzdWx0Rm91bmQgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBjb25zdCBtb3Zlc0FycmF5ID0gdGhpcy5nZXRMZWdhbE1vdmVzKGN1cnJlbnRJdGVtLnJvb3QpO1xuXG4gICAgICBpZiAoKGN1cnJlbnRJdGVtLnJvb3RbMF0gPT09IGRlc3RpbmF0aW9uWzBdKSAmJiAoY3VycmVudEl0ZW0ucm9vdFsxXSA9PT0gZGVzdGluYXRpb25bMV0pKSB7XG4gICAgICAgIGN1cnJlbnRJdGVtLm1vdmVQYXRoLnB1c2goY3VycmVudEl0ZW0ucm9vdCk7XG4gICAgICAgIHJlc3VsdEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtLm1vdmVQYXRoO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qga25pZ2h0ID0gbmV3IEtuaWdodERhdGEobW92ZXNBcnJheVtpXSk7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50SXRlbS5tb3ZlUGF0aC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGtuaWdodC5tb3ZlUGF0aC5wdXNoKGN1cnJlbnRJdGVtLm1vdmVQYXRoW2pdKTtcbiAgICAgICAgfVxuICAgICAgICBrbmlnaHQubW92ZVBhdGgucHVzaChjdXJyZW50SXRlbS5yb290KTtcblxuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGAke2tuaWdodC5yb290WzBdfS0ke2tuaWdodC5yb290WzFdfWApKSB7XG4gICAgICAgICAgdmlzaXRlZC5hZGQoYCR7a25pZ2h0LnJvb3RbMF19LSR7a25pZ2h0LnJvb3RbMV19YCk7XG4gICAgICAgICAgcXVldWUucHVzaChrbmlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICAgcmV0dXJuIG51bGw7IC8vIHNob3VsZG4ndCByZWFjaCBoZXJlLCwsLFxuXG4gICAgLy8gcXVldWUgYXJyYXkgYW5kXG4gICAgLy8gdmlzaXRlZCBcIlNldCgpXCJcbiAgICAvLyBzdGFydG5vZGUgPSBuZXcgS25pZ2h0ICYgcHVzaCB0byBxdWV1ZSBBTkQgdmlzaXRlZFxuICAgIC8vIHRoZW4gcHVzaCBhbGwgcG9zc2libGUgbW92ZXMgdG8gcXVldWUgaWYgbm90IGluIHZpc2l0ZWQgc2V0XG4gICAgLy8gc3RvcmUgZWFjaCBwYXJlbnQgbW92ZT8gYW5vdGhlciBub2RlIGkgZ3Vlc3NcbiAgICAvLyByZXR1cm4gdHJlZSBvZiBwYXJlbnQgbW92ZXMgKyBtb3N0IHJlY2VudCBtb3ZlXG5cbiAgfVxufVxuXG5leHBvcnQgeyBLbmlnaHREYXRhIH07XG4iLCJjbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmNvbG91ciA9IG51bGw7XG4gICAgdGhpcy5oYXNLbmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnBhdGhQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5pc0Rlc3RpbmF0aW9uID0gZmFsc2U7XG4gIH1cblxuICBzZXRDb2xvdXIoY29sb3VyKSB7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG5cbiAgc2V0SGFzS25pZ2h0KGhhc0tuaWdodCkge1xuICAgIHRoaXMuaGFzS25pZ2h0ID0gaGFzS25pZ2h0O1xuICB9XG5cbiAgZ2V0SGFzS25pZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhhc0tuaWdodDtcbiAgfVxuXG4gIGdldFBhdGhQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoUG9zaXRpb247XG4gIH1cblxuICBzZXRQYXRoUG9zaXRpb24ocGF0aFBvc2l0aW9uKSB7XG4gICAgdGhpcy5wYXRoUG9zaXRpb24gPSBwYXRoUG9zaXRpb247XG4gIH1cblxuICBnZXRJc0Rlc3RpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGVzdGluYXRpb247XG4gIH1cblxuICBzZXRJc0Rlc3RpbmF0aW9uKGRlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5pc0Rlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gIH1cbn1cblxuZXhwb3J0IHsgU3F1YXJlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
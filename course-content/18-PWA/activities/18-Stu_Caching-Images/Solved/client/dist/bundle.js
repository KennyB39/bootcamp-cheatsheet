/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/box.js":
/*!***********************!*\
  !*** ./src/js/box.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boxClick\": () => (/* binding */ boxClick)\n/* harmony export */ });\n/* harmony import */ var _images_one_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/one.png */ \"./src/images/one.png\");\n/* harmony import */ var _images_two_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/two.png */ \"./src/images/two.png\");\n/* harmony import */ var _images_three_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/three.png */ \"./src/images/three.png\");\n/* harmony import */ var _images_four_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/four.png */ \"./src/images/four.png\");\n\n\n\n\nvar boxClick = function boxClick() {\n  var box = document.getElementById('box');\n\n  if (box.src === _images_one_png__WEBPACK_IMPORTED_MODULE_0__) {\n    box.src = _images_two_png__WEBPACK_IMPORTED_MODULE_1__;\n  } else if (box.src === _images_two_png__WEBPACK_IMPORTED_MODULE_1__) {\n    box.src = _images_three_png__WEBPACK_IMPORTED_MODULE_2__;\n  } else if (box.src === _images_three_png__WEBPACK_IMPORTED_MODULE_2__) {\n    box.src = _images_four_png__WEBPACK_IMPORTED_MODULE_3__;\n  } else {\n    box.src = _images_one_png__WEBPACK_IMPORTED_MODULE_0__;\n  }\n};\n\n//# sourceURL=webpack://18-stu_caching-images-client-solved/./src/js/box.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerClick\": () => (/* binding */ headerClick)\n/* harmony export */ });\nvar headerClick = function headerClick() {\n  var header = document.getElementById('header');\n\n  if (header.style.color === 'blue') {\n    header.style.color = 'black';\n  } else {\n    header.style.color = 'blue';\n  }\n};\n\n//# sourceURL=webpack://18-stu_caching-images-client-solved/./src/js/header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box */ \"./src/js/box.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n/* harmony import */ var _register_sw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-sw */ \"./src/js/register-sw.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _images_one_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/one.png */ \"./src/images/one.png\");\n\n // Require registerSW method\n\n\n\n\ndocument.getElementById('boxBtn').addEventListener('click', _box__WEBPACK_IMPORTED_MODULE_0__.boxClick);\ndocument.getElementById('headerBtn').addEventListener('click', _header__WEBPACK_IMPORTED_MODULE_1__.headerClick);\ndocument.getElementById('box').src = _images_one_png__WEBPACK_IMPORTED_MODULE_4__; // Call registerSW method\n\n(0,_register_sw__WEBPACK_IMPORTED_MODULE_2__.registerSW)();\n\n//# sourceURL=webpack://18-stu_caching-images-client-solved/./src/js/index.js?");

/***/ }),

/***/ "./src/js/register-sw.js":
/*!*******************************!*\
  !*** ./src/js/register-sw.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerSW\": () => (/* binding */ registerSW)\n/* harmony export */ });\n// Service Worker registration code\nvar registerSW = function registerSW() {\n  // Check that service workers are supported\n  if ('serviceWorker' in navigator) {\n    // Use the window load event to keep the page load performant\n    window.addEventListener('load', function () {\n      navigator.serviceWorker.register('/service-worker.js');\n    });\n  }\n};\n\n//# sourceURL=webpack://18-stu_caching-images-client-solved/./src/js/register-sw.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://18-stu_caching-images-client-solved/./src/css/style.css?");

/***/ }),

/***/ "./src/images/four.png":
/*!*****************************!*\
  !*** ./src/images/four.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"80551ea7ee802057b7d8.png\";\n\n//# sourceURL=webpack://18-stu_caching-images-client-solved/./src/images/four.png?");

/***/ }),

/***/ "./src/images/one.png":
/*!****************************!*\
  !*** ./src/images/one.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13581ff0ca5761f6140d.png\";\n\n//# sourceURL=webpack://18-stu_caching-images-client-solved/./src/images/one.png?");

/***/ }),

/***/ "./src/images/three.png":
/*!******************************!*\
  !*** ./src/images/three.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc083abf258238e3b7f5.png\";\n\n//# sourceURL=webpack://18-stu_caching-images-client-solved/./src/images/three.png?");

/***/ }),

/***/ "./src/images/two.png":
/*!****************************!*\
  !*** ./src/images/two.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3545c379fc441a35598c.png\";\n\n//# sourceURL=webpack://18-stu_caching-images-client-solved/./src/images/two.png?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../config/node_modules/mini-css-extract-plugin/dist/loader.js):\\nTypeError: The 'compilation' argument must be an instance of Compilation\\n    at getCompilationHooks (/Users/sec/Documents/work/mini-css-extract/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:119:10)\\n    at /Users/sec/Documents/work/mini-css-extract/node_modules/webpack/lib/javascript/CommonJsChunkFormatPlugin.js:30:19\\n    at Hook.eval [as call] (eval at create (/Users/sec/Documents/work/mini-css-extract/packages/login/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at Hook.CALL_DELEGATE [as _call] (/Users/sec/Documents/work/mini-css-extract/packages/login/node_modules/tapable/lib/Hook.js:14:14)\\n    at Compiler.newCompilation (/Users/sec/Documents/work/mini-css-extract/packages/login/node_modules/webpack/lib/Compiler.js:992:30)\\n    at /Users/sec/Documents/work/mini-css-extract/packages/login/node_modules/webpack/lib/Compiler.js:1035:29\\n    at Hook.eval [as callAsync] (eval at create (/Users/sec/Documents/work/mini-css-extract/packages/login/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/sec/Documents/work/mini-css-extract/packages/login/node_modules/tapable/lib/Hook.js:18:14)\\n    at Compiler.compile (/Users/sec/Documents/work/mini-css-extract/packages/login/node_modules/webpack/lib/Compiler.js:1030:28)\\n    at Compiler.runAsChild (/Users/sec/Documents/work/mini-css-extract/packages/login/node_modules/webpack/lib/Compiler.js:497:8)\");\n\n//# sourceURL=webpack://login/./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.querySelector(\"button\").onclick = () => {\n    window.location.href = \"/admin\"\n}\n\n//# sourceURL=webpack://login/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
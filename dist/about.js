/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("about", [], factory);
	else if(typeof exports === 'object')
		exports["about"] = factory();
	else
		root["about"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about/index.js":
/*!****************************!*\
  !*** ./src/about/index.js ***!
  \****************************/
/***/ (() => {

eval("/**\r\n * This is the individual file for a webflow page.\r\n * For About page js\r\n * Add or delete these files as per needed\r\n */\r\n\r\nconsole.log('Hello from About folder')\r\n\n\n//# sourceURL=webpack://webflow-developer-starter-template/./src/about/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/about/index.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
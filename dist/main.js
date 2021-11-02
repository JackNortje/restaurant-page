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

/***/ "./src/app/pages/contactPage.js":
/*!**************************************!*\
  !*** ./src/app/pages/contactPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\n\nfunction contactPage() {\n    document.querySelector('.menuView').style.display = 'none'\n    document.querySelector('.contactView').style.display = 'flex'\n    document.querySelector('.homeView').style.display = 'none'\n };\n\n//# sourceURL=webpack://restaurant-page/./src/app/pages/contactPage.js?");

/***/ }),

/***/ "./src/app/pages/homePage.js":
/*!***********************************!*\
  !*** ./src/app/pages/homePage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n\n\nfunction homePage() {\n    document.querySelector('.menuView').style.display = 'none'\n    document.querySelector('.contactView').style.display = 'none'\n    document.querySelector('.homeView').style.display = 'flex'\n};\n\n//# sourceURL=webpack://restaurant-page/./src/app/pages/homePage.js?");

/***/ }),

/***/ "./src/app/pages/menuPage.js":
/*!***********************************!*\
  !*** ./src/app/pages/menuPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n\nfunction menuPage() {\n    document.querySelector('.menuView').style.display = 'flex'\n    document.querySelector('.contactView').style.display = 'none'\n    document.querySelector('.homeView').style.display = 'none'\n}\n\n//# sourceURL=webpack://restaurant-page/./src/app/pages/menuPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_pages_contactPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/pages/contactPage */ \"./src/app/pages/contactPage.js\");\n/* harmony import */ var _app_pages_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/pages/homePage */ \"./src/app/pages/homePage.js\");\n/* harmony import */ var _app_pages_menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/pages/menuPage */ \"./src/app/pages/menuPage.js\");\n\n\n\n\n\nfunction click() {\n  document.querySelector('.home').addEventListener('click', function() {\n    (0,_app_pages_homePage__WEBPACK_IMPORTED_MODULE_1__.homePage)()\n  });\n  document.querySelector('.menu').addEventListener('click', function() {\n    (0,_app_pages_menuPage__WEBPACK_IMPORTED_MODULE_2__.menuPage)()\n  });\n  document.querySelector('.contact').addEventListener('click', function() {\n    (0,_app_pages_contactPage__WEBPACK_IMPORTED_MODULE_0__.contactPage)()\n  })\n};\n\nclick();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// // let homeSection = document.querySelector('.homeView');\n\n\n// // // let menuBtn = document.querySelector('.home');\n\n// // // menuBtn.addEventListener('click', function() {\n// // //   menuPage()\n// // // })\n\n// // function buttonsClicked() {\n\n// //  if (document.querySelector('.menu').clicked == true) {\n// //     menuPage()\n// //   } else if (document.querySelector('.contact').clicked == true) {\n// //     contactPage()\n// //   } else ( homePage())\n  \n// // };\n\n// // buttonsClicked();\n\n// function allButtons() {\n  \n//   if (document.querySelector('.menu').addEventListener('click') == true) {\n//     menuPage()\n//   } else if (document.querySelector('.contact').addEventListener('click', contactPage())\n//   } else( document.querySelector('.home').addEventListener('click', homePage())\n\n// };\n\n// allButtons();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
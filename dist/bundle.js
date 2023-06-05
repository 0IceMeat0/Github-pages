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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://github-pages/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/swiper */ \"./src/js/swiper.js\");\n/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_swiper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_buttonseemore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/buttonseemore */ \"./src/js/buttonseemore.js\");\n/* harmony import */ var _js_buttonseemore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_buttonseemore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://github-pages/./src/index.js?");

/***/ }),

/***/ "./src/js/buttonseemore.js":
/*!*********************************!*\
  !*** ./src/js/buttonseemore.js ***!
  \*********************************/
/***/ (() => {

eval("const text = document.querySelector('.about__text');\r\nconst ButtonSeeMoreText = document.querySelector('.about-button');\r\nconst ButtonSeeMore1text = document.querySelector(\".about-button__text\");\r\nconst buttonSeeMoreAbout__img = document.querySelector('.about-button__img');\r\n\r\nButtonSeeMoreText.addEventListener('click', function () {\r\n  if(text.classList.contains('about123')) {\r\n    text.classList.remove('about123');\r\n    ButtonSeeMore1text.textContent = 'Читать далее';\r\n    buttonSeeMoreAbout__img.classList.remove('brands-button__img--rotate');\r\n  } else {\r\n    text.classList.add('about123');\r\n    ButtonSeeMore1text.textContent = 'Скрыть';\r\n    buttonSeeMoreAbout__img.classList.add('brands-button__img--rotate');\r\n  }\r\n});\r\n\r\nconst buttonSeeMoreRep = document.querySelector(\".brand-button--repair\");\r\nconst cardsRep = document.querySelector('.cards--repair');\r\nconst buttonSeeMoreRep__text = document.querySelector('.brand-button__text');\r\nconst buttonSeeMore__img1 = document.querySelector('.brand-button__img');\r\n\r\nbuttonSeeMoreRep.addEventListener('click', function () {\r\n  if (cardsRep.classList.contains('cards--height-content')) {\r\n    cardsRep.classList.remove('cards--height-content')\r\n    buttonSeeMoreRep__text.textContent = 'Показать все';\r\n    buttonSeeMore__img1.classList.remove('brands-button__img--rotate');\r\n  } else {\r\n    cardsRep.classList.add('cards--height-content')\r\n    buttonSeeMoreRep__text.textContent = 'Скрыть';\r\n    buttonSeeMore__img1.classList.add('brands-button__img--rotate');\r\n  }\r\n});\r\nconst buttonSeeMore = document.querySelector(\".brands-button\");\r\nconst cards = document.querySelector('.cards');\r\nconst buttonSeeMore__text = document.querySelector('.brands-button__text');\r\nconst buttonSeeMore__img = document.querySelector('.brands-button__img');\r\n\r\nbuttonSeeMore.addEventListener('click', function () {\r\n    if (cards.classList.contains('cards--height-content')) {\r\n      cards.classList.remove('cards--height-content')\r\n      buttonSeeMore__text.textContent = 'Показать все';\r\n      buttonSeeMore__img.classList.remove('brands-button__img--rotate');\r\n    } else {\r\n      cards.classList.add('cards--height-content')\r\n      buttonSeeMore__text.textContent = 'Скрыть';\r\n      buttonSeeMore__img.classList.add('brands-button__img--rotate');\r\n    }\r\n  });\r\n\n\n//# sourceURL=webpack://github-pages/./src/js/buttonseemore.js?");

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/***/ (() => {

eval("let newSwiper = new Swiper('.swiper', {\r\n  direction: 'horizontal',\r\n  spaceBetween: 15,\r\n  slidesPerView: 'auto',\r\n  breakpoints: {\r\n    768: {\r\n      enabled: false,\r\n    },\r\n  },\r\n  pagination: {\r\n    el: '.swiper-pagination',\r\n  },\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://github-pages/./src/js/swiper.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
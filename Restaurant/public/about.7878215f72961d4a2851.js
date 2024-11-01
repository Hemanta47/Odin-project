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

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/global.css?");

/***/ }),

/***/ "./src/pages/menu/menu.css":
/*!*********************************!*\
  !*** ./src/pages/menu/menu.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/pages/menu/menu.css?");

/***/ }),

/***/ "./src/pages/menu/food.js":
/*!********************************!*\
  !*** ./src/pages/menu/food.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const menuItems = [\r\n    {\r\n        imgSrc: __webpack_require__(/*! ../../assets/burger.jpg */ \"./src/assets/burger.jpg\"),\r\n        desc: \"A juicy beef patty nestled between soft buns, topped with crisp lettuce, tomatoes, cheese, and savory sauces, perfect for any craving.\",\r\n        original_price: \"Rs.199\",\r\n        offer_price: \"Rs.99\"\r\n    },\r\n    {\r\n        imgSrc: __webpack_require__(/*! ../../assets/fried_chicken.jpg */ \"./src/assets/fried_chicken.jpg\"),\r\n        desc: \"Crispy, golden-brown chicken fried to perfection with tender, juicy meat inside. Seasoned to be flavorful and deliciously addictive every bite.\",\r\n        original_price: \"Rs.249\",\r\n        offer_price: \"Rs.129\"\r\n    },\r\n    {\r\n        imgSrc: __webpack_require__(/*! ../../assets/fries.jpg */ \"./src/assets/fries.jpg\"),\r\n        desc: \"Golden, crunchy, and salted just right, fries are the ultimate side dish—perfectly pairing with ketchup, cheese, or dipping sauces.\",\r\n        original_price: \"Rs.99\",\r\n        offer_price: \"Rs.49\"\r\n    },\r\n    {\r\n        imgSrc: __webpack_require__(/*! ../../assets/hotdog.jpg */ \"./src/assets/hotdog.jpg\"),\r\n        desc: \"A grilled sausage in a soft bun, topped with mustard, ketchup, onions, and relish, delivering bold, satisfying flavors in every bite.\",\r\n        original_price: \"Rs.149\",\r\n        offer_price: \"Rs.79\"\r\n    },\r\n    {\r\n        imgSrc: __webpack_require__(/*! ../../assets/pasta.jpg */ \"./src/assets/pasta.jpg\"),\r\n        desc: \"Classic Italian comfort food, with noodles tossed in rich sauces like marinara or alfredo. It’s filling, versatile, and universally loved.\",\r\n        original_price: \"Rs.299\",\r\n        offer_price: \"Rs.149\"\r\n    },\r\n    {\r\n        imgSrc: __webpack_require__(/*! ../../assets/pizza.jpg */ \"./src/assets/pizza.jpg\"),\r\n        desc: \"A crispy crust topped with savory tomato sauce, melted cheese, and various toppings like pepperoni or veggies. Always a crowd-pleaser.\",\r\n        original_price: \"Rs.399\",\r\n        offer_price: \"Rs.199\"\r\n    },\r\n    {\r\n        imgSrc: __webpack_require__(/*! ../../assets/salad.jpg */ \"./src/assets/salad.jpg\"),\r\n        desc: \"Fresh, vibrant mix of greens, vegetables, and optional proteins. Light and nutritious, it’s ideal for a healthy, flavor-packed meal.\",\r\n        original_price: \"Rs.199\",\r\n        offer_price: \"Rs.99\"\r\n    },\r\n    {\r\n        imgSrc: __webpack_require__(/*! ../../assets/sandwich.jpg */ \"./src/assets/sandwich.jpg\"),\r\n        desc: \"Layers of meats, cheeses, and veggies between slices of bread. Customizable, portable, and always satisfying for any meal or snack.\",\r\n        original_price: \"Rs.149\",\r\n        offer_price: \"Rs.79\"\r\n    }\r\n];\r\n\r\nconst menus = document.querySelector('.menus');\r\n\r\nfunction renderMenu(items) {\r\n    items.forEach(food => {\r\n        menus.innerHTML += `\r\n            <div class=\"menu\">\r\n                <img src=\"${food.imgSrc}\" alt=\"Food item\" width=\"120px\">\r\n                <div class=\"food_detail\">\r\n                    <p class=\"desc\">${food.desc}</p>\r\n                    <div class=\"price\">\r\n                        <p class=\"offer_price\">${food.offer_price} <span class=\"original_price\">${food.original_price}</span></p>\r\n                        <button class=\"order-btn\">Order Now</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `;\r\n    });\r\n}\r\n\r\nrenderMenu(menuItems);\r\n\r\ndocument.querySelectorAll('.order-btn').forEach(button => {\r\n    button.addEventListener('click', () => {\r\n        alert('Button is still under construction');\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://restaurant/./src/pages/menu/food.js?");

/***/ }),

/***/ "./src/pages/menu/menu.js":
/*!********************************!*\
  !*** ./src/pages/menu/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global.css */ \"./src/global.css\");\n/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.css */ \"./src/pages/menu/menu.css\");\n/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food.js */ \"./src/pages/menu/food.js\");\n/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_food_js__WEBPACK_IMPORTED_MODULE_2__);\n \r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/pages/menu/menu.js?");

/***/ }),

/***/ "./src/assets/burger.jpg":
/*!*******************************!*\
  !*** ./src/assets/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/burger829ddebfacc845bc54c5.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/burger.jpg?");

/***/ }),

/***/ "./src/assets/fried_chicken.jpg":
/*!**************************************!*\
  !*** ./src/assets/fried_chicken.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/fried_chicken6ba4300e5668cde672d3.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/fried_chicken.jpg?");

/***/ }),

/***/ "./src/assets/fries.jpg":
/*!******************************!*\
  !*** ./src/assets/fries.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/fries9860a3e779d5cb4c9ea1.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/fries.jpg?");

/***/ }),

/***/ "./src/assets/hotdog.jpg":
/*!*******************************!*\
  !*** ./src/assets/hotdog.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/hotdog8cda332387dbd06d2b98.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/hotdog.jpg?");

/***/ }),

/***/ "./src/assets/pasta.jpg":
/*!******************************!*\
  !*** ./src/assets/pasta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/pasta2c1c24f0dd02fde42a5b.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/pasta.jpg?");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/pizza4941100f861b9cf14bc7.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/pizza.jpg?");

/***/ }),

/***/ "./src/assets/salad.jpg":
/*!******************************!*\
  !*** ./src/assets/salad.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/salad0723eb9afa5e7313530c.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/salad.jpg?");

/***/ }),

/***/ "./src/assets/sandwich.jpg":
/*!*********************************!*\
  !*** ./src/assets/sandwich.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/sandwichb612594e6aee7f54f011.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/sandwich.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/menu/menu.js");
/******/ 	
/******/ })()
;
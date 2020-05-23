/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n  constructor() {\n    const currentTime = new Date();\n\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n    // ensure our clock is always on the page and doesn't have to wait for \n    // the first tick\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(this.printTime(), clockElement);\n    // Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Now we'll return the string instead of printing it.\n    return timeString;\n  }\n\n  _tick() {\n    this._incrementSeconds();\n    // append our clock HTML\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(clock.printTime(), clockElement);\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\n// Grab onto the Element we want to use for the Clock.\nconst clockElement = document.getElementById('clock');\nconst clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs =\n{\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\"\n};\n\n\n\n// Creating the individual dogs links \nconst dogLinkCreator = (dogs) => {\n  const dogLinks = [];\n  const dogNames = Object.keys(dogs);\n\n  // go through each of our dogs\n  dogNames.forEach(dog => {\n\n    // We want each link to be wrapped in an li so we create both\n    const outerLi = document.createElement(\"li\");\n    const doglink = document.createElement(\"a\");\n\n    // set up our dog `a` tag with the name of the dog and the link \n    doglink.innerHTML = dog;\n    doglink.href = dogs[dog];\n\n    // add a class to the outer li so we can make it disappear\n    outerLi.classList = 'dog-link';\n\n    // put our `a` tag within our `li` tag\n    outerLi.appendChild(doglink);\n\n    // add the lis to an array which we'll use to append them each to the 'ul'\n    dogLinks.push(outerLi);\n  });\n  return dogLinks;\n};\n\n// Attaching the dogs\nconst attachDogLinks = () => {\n  const dropDownList = document.querySelector(\".drop-down-dog-list\");\n  const dogLinks = dogLinkCreator(dogs);\n  dogLinks.forEach(link => dropDownList.appendChild(link));\n};\n\nattachDogLinks();\n\n// add our open class\nconst handleLeave = () => {\n  const dogLinks = document.querySelectorAll(\".dog-link\");\n  dogLinks.forEach(child => child.classList.remove('open'));\n};\n\n// add our close class\nconst handleEnter = () => {\n  const dogLinks = document.querySelectorAll(\".dog-link\");\n  dogLinks.forEach(child => child.classList.add('open'));\n};\n\n// add the selector to the entire nav so that you can touch the dog links\n// and the dropdown won't close \nconst nav = document.querySelector(\".drop-down-dog-nav\");\nnav.addEventListener('mouseenter', handleEnter);\nnav.addEventListener('mouseleave', handleLeave);\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_weather__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150'\n\n\n//# sourceURL=webpack:///./src/search.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nconst sliderImages = document.querySelectorAll('.slide');\n\nfunction checkSlide(e) {\n  // loop over our images and see when we want each image to show\n  sliderImages.forEach(sliderImage => {\n    // half way through the image\n    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;\n    // bottom of the image\n    const imageBottom = sliderImage.offsetTop + sliderImage.height;\n    const isHalfShown = slideInAt > sliderImage.offsetTop;\n    // see if we have scrolled past yet\n    const isNotScrolledPast = window.scrollY < imageBottom;\n    if (isHalfShown && isNotScrolledPast) {\n      sliderImage.classList.add('active');\n    } else {\n      sliderImage.classList.remove('active');\n    }\n  });\n}\n\n// Use debounce to delay your scroll function and improve efficiency!\nwindow.addEventListener('scroll', debounce(checkSlide));\n\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const addTodos = document.querySelector('.add-todo-form');\nconst todoList = document.querySelector('.todos');\nconst todos = JSON.parse(localStorage.getItem('todos')) || [];\n\nconst addTodo = (e) => {\n  e.preventDefault();\n  const text = document.querySelector('[name=add-todo]').value;\n  const todo = {\n    text,\n    done: false\n  };\n\n  todos.push(todo);\n  populateList(todos, todoList);\n\n\n  localStorage.setItem('todos', JSON.stringify(todos));\n\n \n  e.currentTarget.reset();\n};\n\n\nconst populateList = (todos = [], todoList) => {\n\n  todoList.innerHTML = todos.map((todo, i) => {\n    return `\n        <li>\n          <input type=\"checkbox\" data-index=${i} ${todo.done ? 'checked' : ''} />\n          <label for=\"item${i}\">${todo.text}</label>\n        </li>\n      `;\n  }).join('');\n};\n\nfunction toggleDone(e) {\n  if (!e.target.matches('input')) return; \n  const el = e.target;\n  const index = el.dataset.index;\n  todos[index].done = !todos[index].done;\n  localStorage.setItem('todos', JSON.stringify(todos));\n  populateList(todos, todoList);\n}\n\naddTodos.addEventListener('submit', addTodo);\n\n\ntodoList.addEventListener('click', toggleDone);\n\npopulateList(todos, todoList);\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  if (htmlElement.children) {\n    Array.from(htmlElement.children).forEach((child) => htmlElement.removeChild(child));\n  }\n  const pTag = document.createElement(\"p\");\n  pTag.innerHTML = string;\n  htmlElement.appendChild(pTag);\n};\n\nhtmlGenerator('I <3 vanilla DOM Manipulation', partyHeader);\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });
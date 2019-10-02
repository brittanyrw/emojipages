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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Create a variable for the container to hold the emoji cards.\r\nconst emojiCardContainer = document.querySelector(\"#books\");\r\n\r\n// Create a variable for the emoji cards.\r\nlet emojiCard = \"\";\r\n\r\n// Run the random order function below on the data inside data.js. This will display the cards in a random order on the page every time the page is refreshed.\r\nshuffle(emojiItems);\r\n\r\n// Loop through the data from the data.js file and insert parts of the data into HTML. On each loop, we are appending a new card with the HTML below.\r\nfor (let i in emojiItems) {\r\n  emojiCard +=\r\n  \"<div class='emoji-card'><div class='emoji-card-wrapper'><div class='hint-container' tabindex='0'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>\" + emojiItems[i].year +\r\n  \"</span></p></div><div class='emoji-images' tabindex='0'>\" + emojiItems[i].emojiImgs +\r\n  \"</div><div class='emoji-card-title hide-card'>\";\r\n\r\n  emojiCard += \"<div class='title-content'><h3>\" + emojiItems[i].title +\r\n      \" (\" + emojiItems[i].year + \")\" + \"</h3><div class='author-container'><h4>\" + emojiItems[i].author + \"</h4></div>\";\r\n\r\n  emojiCard += \"</div></div></div></div>\";\r\n\r\n}\r\n\r\n// Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.\r\nemojiCardContainer.innerHTML = emojiCard;\r\n\r\n// Run Twemoji to change all emojis to Twitter emojis.\r\ntwemoji.parse(document.body);\r\n\r\n// Add the count of number of shows/movies to the footer.\r\ndocument.querySelector(\"footer span\").innerHTML = emojiItems.length;\r\n\r\n// Display movies and show in a random order, the random order will refresh on page reload. This function is used above before the cards are rendered on the page.\r\nfunction shuffle(array) {\r\n  let currentIndex = array.length,\r\n    temporaryValue,\r\n    randomIndex;\r\n\r\n  while (currentIndex !== 0) {\r\n    randomIndex = Math.floor(Math.random() * currentIndex);\r\n    currentIndex -= 1;\r\n    temporaryValue = array[currentIndex];\r\n    array[currentIndex] = array[randomIndex];\r\n    array[randomIndex] = temporaryValue;\r\n  }\r\n\r\n  return array;\r\n}\r\n\r\n// Expand the emoji card when clicked to reveal the song name, artist and music video link.\r\nconst toggleShowCard = elem => elem && elem.classList.toggle(\"hide-card\");\r\ndocument.querySelectorAll(\".emoji-images\").forEach(elem => {\r\n  elem.addEventListener(\"click\", function (e) {\r\n    toggleShowCard(e.target.closest(\".emoji-images\").nextElementSibling);\r\n  });\r\n});\r\n\r\nconst showHint = elem => elem && elem.classList.add(\"hint-reveal\");\r\nconst hideHint = elem => elem && elem.classList.remove(\"hint-reveal\");\r\ndocument.querySelectorAll(\".hint-container\").forEach(elem => {\r\n  // Display a hint (type ie tv, movie or musical) when hovering over the question mark.\r\n  elem.addEventListener(\"mousedown\", function (e) {\r\n    showHint(e.target.closest(\".hint-container\").querySelector(\".hint\"));\r\n  });\r\n  elem.addEventListener(\"keypress\", function (e) {\r\n    showHint(e.target.querySelector(\".hint\"));\r\n  });\r\n\r\n  // Hide hint (type ie tv, movie or musical) when the user stops hovering over the question mark.\r\n  elem.addEventListener(\"mouseleave\", function (e) {\r\n    hideHint(e.target.querySelector(\".hint\"));\r\n  });\r\n  elem.addEventListener(\"focusout\", function (e) {\r\n    hideHint(e.target.querySelector(\".hint\"));\r\n  });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ });
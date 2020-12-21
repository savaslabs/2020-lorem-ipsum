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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordList */ \"./src/js/wordList.js\");\n\n\n// Return random integer between a max and min value.\nconst random = (max, min) => Math.floor(Math.random() * (max - min) + min);\n\n// Pull a word at random from the word list.\nconst getRandomWord = () => _wordList__WEBPACK_IMPORTED_MODULE_0__[\"default\"][random(_wordList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length, 0)];\n\n// Generate words, sentences, and paragraphs.\nconst generate = (type, num) => {\n  // Array to return.\n  let arr = [];\n  let i = 0;\n\n  while (i < num) {\n    switch (type) {\n      case 'words':\n        while (i < num) {\n          const randomWord = getRandomWord();\n\n          // Don't generate same word twice in one batch.\n          if (!arr.includes(randomWord)) {\n            arr.push(randomWord);\n            i++;\n          } else {\n            // Set i to itself to repeat and find a new word.\n            i = i;\n          }\n        }\n        // Join all words adding to arr into string.\n        return arr.join(' ');\n\n      case 'sentences':\n        while (i < num) {\n          // Generate a sentence between 3 and 9 words.\n          let sentence = generate('words', random(9, 3));\n\n          if (i > 0) {\n            // Capitalize first letter in sentence.\n            sentence = `${sentence[0].charAt(0).toUpperCase()}${sentence.slice(\n              1\n            )}`;\n          }\n          arr.push(sentence);\n          i++;\n        }\n\n        // Join all sentences, with periods at end of each setence.\n        return arr.join('. ');\n\n      case 'paragraphs':\n        while (i < num) {\n          // Each paragraph wrapped in <p>.\n          const el = document.createElement('p');\n          // Generate paragraphs between 5-8 sentences.\n          el.innerText = generate('sentences', random(8, 5));\n          arr.push(el);\n          i++;\n        }\n\n        // Returning arr vs string here to append each <p> element.\n        return arr;\n    }\n  }\n};\n\nconst appendOutput = (output) => {\n  const outputContainer = document.querySelector('div#output');\n\n  // Output is an array in case of paragraphs.\n  if (Array.isArray(output)) {\n    output.forEach((el, index) => {\n      // Add Lorem ipsum to start of output.\n      if (index === 0) {\n        el.innerText = `Lorem ipsum ${el.innerText}.`;\n      } else {\n        // Capitalize first letter of each paragraph.\n        el.innerText = `${el.innerText\n          .charAt(0)\n          .toUpperCase()}${el.innerText.slice(1)}.`;\n      }\n      outputContainer.append(el);\n    });\n  } else {\n    const el = document.createElement('p');\n    el.innerText = `Lorem ipsum ${output}.`;\n    outputContainer.append(el);\n  }\n};\n\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  // Reset output container to be empty.\n  document.querySelector('div#output').innerHTML = '';\n\n  // Pull values from form.\n  const { type, number } = e.target.elements;\n\n  const output = generate(type.value, number.value);\n  appendOutput(output);\n};\n\n// Copy text in div#output.\nconst copyText = () => {\n  const output = document.querySelector('div#output');\n  const range = document.createRange();\n  range.selectNode(output);\n  window.getSelection().removeAllRanges();\n  window.getSelection().addRange(range);\n  document.execCommand('copy');\n  window.getSelection().removeAllRanges();\n  alert('data copied');\n};\n\n// Event Handlers.\nconst form = document.querySelector('form#generateForm');\nform.addEventListener('submit', handleSubmit);\n\nconst copyButton = document.querySelector('button#copy-button');\ncopyButton.addEventListener('click', copyText);\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/wordList.js":
/*!****************************!*\
  !*** ./src/js/wordList.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst wordList = [\n  \"dumpster fire\",\n  \"vaccine\",\n  \"social distancing\",\n  \"stay-at-home order\",\n  \"quarantine\",\n  \"hindsight\",\n  \"press conference\",\n  \"election\",\n  \"vote\",\n  \"ballot\",\n  \"mail-in vote\",\n  \"Zoom call\",\n  \"mask\",\n  \"monolith\",\n  \"sweatpants\",\n  \"self care\",\n  \"quaranteam\",\n  \"take out order\",\n  \"election\",\n  \"sanitizer\",\n  \"home school\",\n  \"home office\",\n  \"amazon prime\",\n  \"Dr. Fauci\",\n  \"Tiger King\",\n  \"contact tracing\",\n  \"pod\",\n  \"murder hornets\",\n  \"UFO\",\n  \"hurricane Greek alphabet\",\n  \"Chinese mystery seeds\",\n  \"TikTok\",\n  \"COVID-19\",\n  \"protests\",\n  \"no march madness\",\n  \"Netflix\",\n  \"into quarantine\",\n  \"about March 213th\",\n  \"at least 6 feet\",\n  \"social distance\",\n  \"vote\",\n  \"wash hands\",\n  \"flatten the curve\",\n  \"essential\",\n  \"home\",\n  \"this claim is disputed\",\n  \"time has no meaning\",\n  \"I don't know what day it is\",\n  \"you're on mute\",\n  \"we can't hear you\",\n  \"my camera is off\",\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (wordList);\n\n//# sourceURL=webpack:///./src/js/wordList.js?");

/***/ })

/******/ });
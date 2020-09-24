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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express();\n\nvar server = __webpack_require__(/*! http */ \"http\").Server(app);\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar ejs = __webpack_require__(/*! ejs */ \"ejs\");\n\nvar expressLayouts = __webpack_require__(/*! express-ejs-layouts */ \"express-ejs-layouts\");\n\napp.use(express[\"static\"](\"public\"));\napp.use(expressLayouts);\napp.set('view engine', 'ejs');\napp.set('views', './src/views');\nvar NAMESPACES = [{\n  id: \"xuver\",\n  name: \"xuver\",\n  template: \"Template_1\"\n}, {\n  id: \"summerwood\",\n  name: \"Summerwood\",\n  template: \"Template_2\"\n}, {\n  id: \"randomcompany\",\n  name: \"Random Inc.\",\n  template: \"Template_1\"\n}];\nvar LAYOUTS = [{\n  name: \"Template_1\",\n  url: \"./templates/template_1.ejs\"\n}, {\n  name: \"Template_2\",\n  url: \"./templates/template_2.ejs\"\n}];\napp.get(\"*\", /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var LAYOUT, URL, URL__ARR, USER, CURRENT__NAMESPACE;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!req.originalUrl.includes('favicon.ico')) {\n              LAYOUT = null;\n              URL = req.originalUrl;\n              URL__ARR = URL.split(\"/\");\n              USER = URL__ARR[1];\n\n              if (typeof USER !== \"undefined\" && USER != \"\") {\n                CURRENT__NAMESPACE = NAMESPACES.find(function (el) {\n                  return el.id === USER;\n                });\n\n                if (CURRENT__NAMESPACE && CURRENT__NAMESPACE.template) {\n                  LAYOUT = LAYOUTS.find(function (el) {\n                    return el.name === CURRENT__NAMESPACE.template;\n                  }).url;\n                } else {\n                  LAYOUT = LAYOUTS.find(function (el) {\n                    return el.name === \"Template_1\";\n                  }).url;\n                }\n              } else {\n                LAYOUT = LAYOUTS.find(function (el) {\n                  return el.name === \"Template_1\";\n                }).url;\n              }\n\n              console.log(LAYOUT);\n              res.render('index', {\n                layout: LAYOUT\n              });\n            }\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}()); // /* Connect databse */\n\n__webpack_require__(/*! ./startup/db */ \"./src/startup/db.js\")();\n\nvar port = process.env.PORT || 3007;\nserver.listen(port, function () {\n  return console.log(\"Listening on port \".concat(port, \"...\"));\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/startup/db.js":
/*!***************************!*\
  !*** ./src/startup/db.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nmodule.exports = function () {\n  console.log(\"Connecting to MongoDB...\");\n  mongoose.set('useCreateIndex', true);\n  mongoose.connect('mongodb://mongo:27017/xuver', {\n    useNewUrlParser: true,\n    useFindAndModify: false,\n    useUnifiedTopology: true\n  }).then(function () {\n    return console.log('Connected to MongoDB...');\n  })[\"catch\"](function (err) {\n    return console.error('Could not connect to MongoDB...');\n  });\n};\n\n//# sourceURL=webpack:///./src/startup/db.js?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-ejs-layouts":
/*!**************************************!*\
  !*** external "express-ejs-layouts" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-ejs-layouts\");\n\n//# sourceURL=webpack:///external_%22express-ejs-layouts%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });
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
/******/ 	__webpack_require__.p = "/public";
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

eval("var webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar config = __webpack_require__(/*! ../webpack.config.js */ \"./webpack.config.js\");\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express(),\n    compiler = webpack(config);\n\nvar server = __webpack_require__(/*! http */ \"http\").Server(app);\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar templater = __webpack_require__(/*! ./utilities/router */ \"./src/utilities/router.js\");\n\napp.use(webpackDevMiddleware(compiler, {\n  publicPath: config.output.publicPath\n}));\napp.use(webpackHotMiddleware(compiler));\napp.use(express[\"static\"](path.join(__dirname, 'public')));\napp.get([\"/:id\", \"/:id/:id\", \"*\"], function (req, res) {\n  templater(req, res);\n}); // /* Connect databse */\n// require('./startup/db')();\n\nvar port = process.env.PORT || 80;\nserver.listen(port, function () {\n  return console.log(\"Listening on port \".concat(port, \"...\"));\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/utilities/router.js":
/*!*********************************!*\
  !*** ./src/utilities/router.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar NAMESPACES = [{\n  id: \"xuver\",\n  name: \"xuver\",\n  template: \"Template_1\"\n}, {\n  id: \"summerwood\",\n  name: \"Summerwood\",\n  template: \"Template_2\"\n}, {\n  id: \"randomcompany\",\n  name: \"Random Inc.\",\n  template: \"Template_1\"\n}];\nvar LAYOUTS = [{\n  name: \"Template_1\",\n  url: \"/template__1.html\"\n}, {\n  name: \"Template_2\",\n  url: \"/template__2.html\"\n}];\n\nfunction templater(req, res) {\n  if (!req.originalUrl.includes('favicon.ico')) {\n    var LAYOUT = null;\n    var URL = req.originalUrl;\n    var URL__ARR = URL.split(\"/\");\n    var USER = URL__ARR[1];\n\n    if (typeof USER !== \"undefined\" && USER != \"\") {\n      var CURRENT__NAMESPACE = NAMESPACES.find(function (el) {\n        return el.id === USER;\n      });\n\n      if (CURRENT__NAMESPACE && CURRENT__NAMESPACE.template) {\n        LAYOUT = LAYOUTS.find(function (el) {\n          return el.name === CURRENT__NAMESPACE.template;\n        }).url;\n      } else {\n        LAYOUT = LAYOUTS.find(function (el) {\n          return el.name === \"Template_1\";\n        }).url;\n      }\n    } else {\n      LAYOUT = LAYOUTS.find(function (el) {\n        return el.name === \"Template_1\";\n      }).url;\n    }\n\n    res.sendFile(path.join(__dirname + LAYOUT));\n  }\n}\n\nmodule.exports = templater;\n\n//# sourceURL=webpack:///./src/utilities/router.js?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n/* (!) To run in docker localy uncomment host  */\n\n\nvar entryPath = './public/js/index.ts';\nvar htmlPageNames = [\"template__1\", 'template__2']; //tempaltes\n\nvar multipleHtmlPlugins = htmlPageNames.map(function (name) {\n  return new HtmlWebpackPlugin({\n    template: \"./src/public/\".concat(name, \".html\"),\n    filename: \"\".concat(name, \".html\"),\n    chunks: [\"main\"],\n    inject: true\n  });\n});\nmodule.exports = {\n  entry: ['babel-polyfill', entryPath],\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'js/bundle.js',\n    publicPath: '/dist/'\n  },\n  devtool: \"source-map\",\n  mode: \"development\",\n  devServer: {\n    contentBase: path.join(__dirname, \"dist\"),\n    // host: \"0.0.0.0\",\n    allowedHosts: [\"viewer.xu.local\"],\n    \"public\": \"viewer.xu.local\",\n    port: 443,\n    https: {\n      key: fs.readFileSync(\"https/key\"),\n      cert: fs.readFileSync(\"https/crt\")\n    },\n    historyApiFallback: true,\n    watchOptions: {\n      ignored: /node_modules/\n    }\n  },\n  plugins: [new HtmlWebpackPlugin({\n    template: \"./src/public/template__1.html\",\n    filename: \"template__1.html\",\n    chunks: [\"main\"],\n    inject: true\n  }), new webpack.HotModuleReplacementPlugin()].concat(multipleHtmlPlugins),\n  resolve: {\n    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', \"scss\"],\n    alias: {\n      \"@\": path.resolve(__dirname, \"public/\") // for IDE only, the main alias is in .babelrc\n\n    }\n  },\n  module: {\n    rules: [{\n      test: /\\.ejs$/,\n      loader: \"ejs-render-loader\"\n    }, {\n      test: /\\.(html)$/,\n      use: ['html-loader']\n    }, {\n      test: /\\.ts(x?)$/,\n      exclude: /node_modules/,\n      use: [{\n        loader: \"ts-loader\"\n      }]\n    }, {\n      test: /\\.js$/,\n      exclude: /(node_modules|bower_components)/,\n      use: [{\n        loader: \"babel-loader\",\n        options: {\n          cacheDirectory: \".cache/babel\"\n        }\n      }]\n    }, {\n      test: /\\.scss$/,\n      use: [{\n        loader: \"style-loader\"\n      }, {\n        loader: \"css-loader\"\n      }, {\n        loader: \"sass-loader\"\n      }]\n    }, {\n      test: /\\.woff2?(\\?v=[0-9]\\.[0-9]\\.[0-9])?$/,\n      loader: \"url-loader\"\n    }, {\n      test: /\\.(ttf|eot|svg)(\\?[\\s\\S]+)?$/,\n      loader: \"file-loader\"\n    }, {\n      test: /\\.(jpg|jpeg|png|gif|pdf|ico|mp4|obj)$/,\n      loader: \"file-loader\",\n      options: {\n        outputPath: \"img/\",\n        name: \"[name][hash].[ext]\"\n      }\n    }]\n  }\n};\n\n//# sourceURL=webpack:///./webpack.config.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_starfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/starfield */ "./utils/starfield.js");

var _jsxFileName = "C:\\Users\\creaw\\OneDrive\\Desktop\\Portfolio Website\\portfolio-website\\components\\Home.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n\n  *,\n  *:before,\n  *:after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n    overflow-x: hidden;\n    font-size: 1.6rem;\n    line-height: 2;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());

var Home = function Home() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTimeout(function () {
      Object(_utils_starfield__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }, 200);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
    id: "canvas",
    width: "100vw",
    height: "100vh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
var _jsxFileName = "C:\\Users\\creaw\\OneDrive\\Desktop\\Portfolio Website\\portfolio-website\\pages\\index.js";



var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/starfield.js":
/*!****************************!*\
  !*** ./utils/starfield.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return start; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);



function start() {
  //Helpers
  function lineToAngle(x1, y1, length, radians) {
    var x2 = x1 + length * Math.cos(radians),
        y2 = y1 + length * Math.sin(radians);
    return {
      x: x2,
      y: y2
    };
  }

  function randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  function degreesToRads(degrees) {
    return degrees / 180 * Math.PI;
  } //Particle


  var particle = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    radius: 0,
    create: function create(x, y, speed, direction) {
      var obj = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(this);

      obj.x = x;
      obj.y = y;
      obj.vx = Math.cos(direction) * speed;
      obj.vy = Math.sin(direction) * speed;
      return obj;
    },
    getSpeed: function getSpeed() {
      return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    },
    setSpeed: function setSpeed(speed) {
      var heading = this.getHeading();
      this.vx = Math.cos(heading) * speed;
      this.vy = Math.sin(heading) * speed;
    },
    getHeading: function getHeading() {
      return Math.atan2(this.vy, this.vx);
    },
    setHeading: function setHeading(heading) {
      var speed = this.getSpeed();
      this.vx = Math.cos(heading) * speed;
      this.vy = Math.sin(heading) * speed;
    },
    update: function update() {
      this.x += this.vx;
      this.y += this.vy;
    }
  }; //Canvas and settings

  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight,
      stars = [],
      shootingStars = [],
      layers = [{
    speed: 0.015,
    scale: 0.2,
    count: 320
  }, {
    speed: 0.03,
    scale: 0.5,
    count: 50
  }, {
    speed: 0.05,
    scale: 0.75,
    count: 30
  }],
      starsAngle = 145,
      shootingStarSpeed = {
    min: 15,
    max: 20
  },
      shootingStarOpacityDelta = 0.01,
      trailLengthDelta = 0.01,
      shootingStarEmittingInterval = 2000,
      shootingStarLifeTime = 500,
      maxTrailLength = 300,
      starBaseRadius = 2,
      shootingStarRadius = 3,
      paused = false; //Create all stars

  for (var j = 0; j < layers.length; j += 1) {
    var layer = layers[j];

    for (var i = 0; i < layer.count; i += 1) {
      var star = particle.create(randomRange(0, width), randomRange(0, height), 0, 0);
      star.radius = starBaseRadius * layer.scale;
      star.setSpeed(layer.speed);
      star.setHeading(degreesToRads(starsAngle));
      stars.push(star);
    }
  }

  function createShootingStar() {
    var shootingStar = particle.create(randomRange(width / 2, width), randomRange(0, height / 2), 0, 0);
    shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
    shootingStar.setHeading(degreesToRads(starsAngle));
    shootingStar.radius = shootingStarRadius;
    shootingStar.opacity = 0;
    shootingStar.trailLengthDelta = 0;
    shootingStar.isSpawning = true;
    shootingStar.isDying = false;
    shootingStars.push(shootingStar);
  }

  function killShootingStar(shootingStar) {
    setTimeout(function () {
      shootingStar.isDying = true;
    }, shootingStarLifeTime);
  }

  function update() {
    if (!paused) {
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#282a3a';
      context.fillRect(0, 0, width, height);
      context.fill();

      for (var i = 0; i < stars.length; i += 1) {
        var star = stars[i];
        star.update();
        drawStar(star);

        if (star.x > width) {
          star.x = 0;
        }

        if (star.x < 0) {
          star.x = width;
        }

        if (star.y > height) {
          star.y = 0;
        }

        if (star.y < 0) {
          star.y = height;
        }
      }

      for (i = 0; i < shootingStars.length; i += 1) {
        var shootingStar = shootingStars[i];

        if (shootingStar.isSpawning) {
          shootingStar.opacity += shootingStarOpacityDelta;

          if (shootingStar.opacity >= 1.0) {
            shootingStar.isSpawning = false;
            killShootingStar(shootingStar);
          }
        }

        if (shootingStar.isDying) {
          shootingStar.opacity -= shootingStarOpacityDelta;

          if (shootingStar.opacity <= 0.0) {
            shootingStar.isDying = false;
            shootingStar.isDead = true;
          }
        }

        shootingStar.trailLengthDelta += trailLengthDelta;
        shootingStar.update();

        if (shootingStar.opacity > 0.0) {
          drawShootingStar(shootingStar);
        }
      } //Delete dead shooting shootingStars


      for (i = shootingStars.length - 1; i >= 0; i--) {
        if (shootingStars[i].isDead) {
          shootingStars.splice(i, 1);
        }
      }
    }

    requestAnimationFrame(update);
  }

  function drawStar(star) {
    context.fillStyle = 'rgb(255, 221, 157)';
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
    context.fill();
  }

  function drawShootingStar(p) {
    var x = p.x,
        y = p.y,
        currentTrailLength = maxTrailLength * p.trailLengthDelta,
        pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());
    context.fillStyle = 'rgba(255, 255, 255, ' + p.opacity + ')'; // context.beginPath();
    // context.arc(x, y, p.radius, 0, Math.PI * 2, false);
    // context.fill();

    var starLength = 5;
    context.beginPath();
    context.moveTo(x - 1, y + 1);
    context.lineTo(x, y + starLength);
    context.lineTo(x + 1, y + 1);
    context.lineTo(x + starLength, y);
    context.lineTo(x + 1, y - 1);
    context.lineTo(x, y + 1);
    context.lineTo(x, y - starLength);
    context.lineTo(x - 1, y - 1);
    context.lineTo(x - starLength, y);
    context.lineTo(x - 1, y + 1);
    context.lineTo(x - starLength, y);
    context.closePath();
    context.fill(); //trail

    context.fillStyle = 'rgba(255, 221, 157, ' + p.opacity + ')';
    context.beginPath();
    context.moveTo(x - 1, y - 1);
    context.lineTo(pos.x, pos.y);
    context.lineTo(x + 1, y + 1);
    context.closePath();
    context.fill();
  } //Run


  update(); //Shooting stars

  setInterval(function () {
    if (paused) return;
    createShootingStar();
  }, shootingStarEmittingInterval);

  window.onfocus = function () {
    paused = false;
  };

  window.onblur = function () {
    paused = true;
  };
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\creaw\OneDrive\Desktop\Portfolio Website\portfolio-website\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
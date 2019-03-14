webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_starfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/starfield */ "./utils/starfield.js");
var _jsxFileName = "C:\\Users\\creaw\\OneDrive\\Desktop\\Portfolio Website\\portfolio-website\\components\\Home.js";



var Home = function Home() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('bho');
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    id: "canvas",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
 // window.onload = function() {
//   setTimeout(start, 200);
// };


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

/***/ })

})
//# sourceMappingURL=index.js.37e0fe22b4ca180e4ae5.hot-update.js.map
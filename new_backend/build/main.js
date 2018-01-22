require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_morgan__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(6);





__WEBPACK_IMPORTED_MODULE_2_dotenv___default.a.config();

const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
app.use(Object(__WEBPACK_IMPORTED_MODULE_3__router__["b" /* routes */])());

app.use(Object(__WEBPACK_IMPORTED_MODULE_3__router__["a" /* allowedMethods */])());

app.use(__WEBPACK_IMPORTED_MODULE_1_koa_morgan___default()('tiny')).listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-morgan");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = routes;
/* harmony export (immutable) */ __webpack_exports__["a"] = allowedMethods;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_body__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_body__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





const router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

router.use(__WEBPACK_IMPORTED_MODULE_3_koa_body___default()());
router.post('/register', (() => {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var user;
    return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log(ctx.request.body);
          _context.prev = 1;
          _context.next = 4;
          return __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* default */].create(ctx.request.body);

        case 4:
          user = _context.sent;

          console.log(user);
          ctx.body = user;
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](1);

          console.log(_context.t0);

        case 12:
        case 'end':
          return _context.stop();
      }
    }, _callee, _this, [[1, 9]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

function routes() {
  return router.routes();
}
function allowedMethods() {
  return router.allowedMethods();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcrypt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bcrypt__);
//import Joi from 'joi';
//import schema from './schema';





const User = __WEBPACK_IMPORTED_MODULE_1__db_js__["a" /* default */].define('users', {
  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(30),
  email: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(40),
    isEmail: true,
    notNull: true,
    notEmpty: true,
    unique: true
  },
  password: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(40)
});
// }, {
//   hooks:{
//     beforeCreate(user, options){
//       // return hashPassword(user.password).then(hashedPw => {
//       //   user.password = hashedPw;
//       // });
//       const salt = bcrypt.genSaltSync(10);
//       user.password = bcrypt.hashSync(user.password, salt);
//     }
//   }
// });

User.beforeCreate((user, options) => {
  const salt = __WEBPACK_IMPORTED_MODULE_2_bcrypt___default.a.genSaltSync(10);
  user.password = __WEBPACK_IMPORTED_MODULE_2_bcrypt___default.a.hashSync(user.password, salt);
});

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);


const db = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});

// db.authenticate().then(function(errors) { console.log(errors) });

db.sync().then(() => {
  console.log('DB synced');
});

/* harmony default export */ __webpack_exports__["a"] = (db);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("koa-body");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map
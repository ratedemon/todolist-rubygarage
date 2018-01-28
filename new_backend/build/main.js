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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_js__ = __webpack_require__(4);
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
    allowNull: false,
    notEmpty: true,
    unique: true
  },
  password: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(70)
});
/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);


const db = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});

// db.authenticate().then(function(errors) { console.log(errors) });

// db.sync()
//   .then(() => {
console.log('DB synced');
// });

/* harmony default export */ __webpack_exports__["a"] = (db);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_morgan__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa2_cors__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa2_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa2_cors__);






__WEBPACK_IMPORTED_MODULE_2_dotenv___default.a.config();

const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
app.use(__WEBPACK_IMPORTED_MODULE_4_koa2_cors___default()());
app.use(Object(__WEBPACK_IMPORTED_MODULE_3__router__["b" /* routes */])());

app.use(Object(__WEBPACK_IMPORTED_MODULE_3__router__["a" /* allowedMethods */])());

app.use(__WEBPACK_IMPORTED_MODULE_1_koa_morgan___default()('tiny')).listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa-morgan");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = routes;
/* harmony export (immutable) */ __webpack_exports__["a"] = allowedMethods;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_project_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_task_model__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_body__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dotenv__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controllers_project__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controllers_task__ = __webpack_require__(20);











__WEBPACK_IMPORTED_MODULE_5_dotenv___default.a.config();

const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.use(__WEBPACK_IMPORTED_MODULE_4_koa_body___default()());

router.post('/register', __WEBPACK_IMPORTED_MODULE_7__controllers_user__["a" /* default */].register);
router.post('/login', __WEBPACK_IMPORTED_MODULE_7__controllers_user__["a" /* default */].login);

router.get('/projects', __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__controllers_project__["a" /* default */].getProjectsWithTasks);
router.post('/project', __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__controllers_project__["a" /* default */].create);
router.put('/project', __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__controllers_project__["a" /* default */].update);
router.delete('/project/:id', __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__controllers_project__["a" /* default */].delete);

router.post('/task', __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__controllers_task__["a" /* default */].create);
router.put('/task', __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__controllers_task__["a" /* default */].updateName);
router.put('/task/status', __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__controllers_task__["a" /* default */].changeStatus);
router.put('/task/position', __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__controllers_task__["a" /* default */].changePosition);
router.delete('/project/:project_id/task/:task_id', __WEBPACK_IMPORTED_MODULE_6__middleware_authMiddleware__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__controllers_task__["a" /* default */].delete);

function routes() {
    return router.routes();
}
function allowedMethods() {
    return router.allowedMethods();
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_model__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_model__ = __webpack_require__(17);
//import Joi from 'joi';
//import schema from './schema';





const Project = __WEBPACK_IMPORTED_MODULE_1__db_js__["a" /* default */].define('projects', {
    id: {
        type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
        notNull: true
    },
    user_id: {
        type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
        references: {
            model: __WEBPACK_IMPORTED_MODULE_2__user_model__["a" /* default */],
            key: 'id',
            deferrable: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.Deferrable.INITIALLY_IMMEDIATE
        }
    }
});

Project.hasMany(__WEBPACK_IMPORTED_MODULE_3__task_model__["a" /* default */], { foreignKey: 'project_id', onDelete: 'cascade', as: 'ProjectTasks' });
// Project.belongsToMany(Task, {as: "tasks", through: "project_tasks", foreignKey: 'task_id', otherKey: "project_id"});

/* harmony default export */ __webpack_exports__["a"] = (Project);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("koa-body");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return verifyAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dotenv__);


let verifyAuth = (() => {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
        var authorization, token, encode;
        return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
                case 0:
                    authorization = ctx.headers.authorization;

                    if (!authorization || !authorization.match(/^Bearer\s/)) {
                        ctx.throw(403);
                    }
                    token = authorization.replace(/^Bearer\s/, '');
                    _context.prev = 3;
                    _context.next = 6;
                    return __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.verify(token, process.env.JWT_KEY);

                case 6:
                    encode = _context.sent;

                    ctx.request.body.id = encode.id;
                    ctx.request.body.email = encode.email;
                    _context.next = 11;
                    return next();

                case 11:
                    _context.next = 17;
                    break;

                case 13:
                    _context.prev = 13;
                    _context.t0 = _context['catch'](3);

                    console.log(_context.t0);
                    ctx.throw(403);

                case 17:
                case 'end':
                    return _context.stop();
            }
        }, _callee, this, [[3, 13]]);
    }));

    return function verifyAuth(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by rated on 27.01.2018.
 */



__WEBPACK_IMPORTED_MODULE_2_dotenv___default.a.config();



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_model__ = __webpack_require__(13);
//import Joi from 'joi';
//import schema from './schema';




const Task = __WEBPACK_IMPORTED_MODULE_1__db_js__["a" /* default */].define('tasks', {
    id: {
        type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
        notNull: true
    },
    status: {
        type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    position: {
        type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    project_id: {
        type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER,
        references: {
            model: __WEBPACK_IMPORTED_MODULE_2__project_model__["a" /* default */],
            key: 'id',
            deferrable: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.Deferrable.INITIALLY_IMMEDIATE
        }
    }
});

// Task.belongsToMany(Project, {as: "projects", through: "project_tasks", foreignKey: 'project_id', otherKey: "task_id"});
// Task.belongsTo(Project);

/* harmony default export */ __webpack_exports__["a"] = (Task);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcrypt__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by rated on 28.01.2018.
 */




class UserController {
    static login(ctx) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
            var user, compare, token;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* default */].findOne({
                            where: {
                                email: ctx.request.body.email
                            }
                        });

                    case 2:
                        user = _context.sent;

                        if (user) {
                            _context.next = 5;
                            break;
                        }

                        return _context.abrupt('return', ctx.throw(404));

                    case 5:
                        _context.prev = 5;
                        _context.next = 8;
                        return __WEBPACK_IMPORTED_MODULE_2_bcrypt___default.a.compare(ctx.request.body.password, user.password);

                    case 8:
                        compare = _context.sent;

                        if (!compare) {
                            _context.next = 16;
                            break;
                        }

                        _context.next = 12;
                        return __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a.sign({
                            id: user.id,
                            email: user.email
                        }, process.env.JWT_KEY, {
                            expiresIn: "3h"
                        });

                    case 12:
                        token = _context.sent;
                        return _context.abrupt('return', ctx.body = { token: token });

                    case 16:
                        return _context.abrupt('return', ctx.throw(409));

                    case 17:
                        _context.next = 23;
                        break;

                    case 19:
                        _context.prev = 19;
                        _context.t0 = _context['catch'](5);

                        console.log(_context.t0);
                        return _context.abrupt('return', ctx.throw(403));

                    case 23:
                    case 'end':
                        return _context.stop();
                }
            }, _callee, _this, [[5, 19]]);
        }))();
    }
    static register(ctx) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
            var hash, user;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return __WEBPACK_IMPORTED_MODULE_2_bcrypt___default.a.hash(ctx.request.body.password, 10);

                    case 3:
                        hash = _context2.sent;
                        _context2.next = 6;
                        return __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* default */].create({
                            name: ctx.request.body.name,
                            email: ctx.request.body.email,
                            password: hash
                        });

                    case 6:
                        user = _context2.sent;
                        return _context2.abrupt('return', ctx.status = 200);

                    case 10:
                        _context2.prev = 10;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0);
                        return _context2.abrupt('return', ctx.throw(500, {
                            error: _context2.t0
                        }));

                    case 14:
                    case 'end':
                        return _context2.stop();
                }
            }, _callee2, _this2, [[0, 10]]);
        }))();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UserController;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_task_model__ = __webpack_require__(17);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by rated on 28.01.2018.
 */



class ProjectController {
    static create(ctx) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
            var project;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                    case 0:
                        console.log(ctx.request.body);
                        _context.prev = 1;
                        _context.next = 4;
                        return __WEBPACK_IMPORTED_MODULE_1__models_project_model__["a" /* default */].create({
                            name: ctx.request.body.name,
                            user_id: ctx.request.body.id
                        });

                    case 4:
                        project = _context.sent;
                        return _context.abrupt('return', ctx.body = project);

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](1);

                        console.log(_context.t0);
                        return _context.abrupt('return', ctx.throw(400));

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }, _callee, _this, [[1, 8]]);
        }))();
    }
    static update(ctx) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
            var project;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log(ctx.request.body);
                        _context2.prev = 1;
                        _context2.next = 4;
                        return __WEBPACK_IMPORTED_MODULE_1__models_project_model__["a" /* default */].update({
                            name: ctx.request.body.name
                        }, {
                            where: {
                                user_id: ctx.request.body.id,
                                id: ctx.request.body.project_id
                            }
                        });

                    case 4:
                        project = _context2.sent;
                        return _context2.abrupt('return', ctx.body = project);

                    case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2['catch'](1);
                        return _context2.abrupt('return', ctx.throw(403));

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }, _callee2, _this2, [[1, 8]]);
        }))();
    }
    static delete(ctx) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
            var project;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                        console.log(ctx.params.id);
                        _context3.prev = 1;
                        _context3.next = 4;
                        return __WEBPACK_IMPORTED_MODULE_1__models_project_model__["a" /* default */].destroy({
                            where: {
                                id: ctx.params.id,
                                user_id: ctx.request.body.id
                            }
                        });

                    case 4:
                        project = _context3.sent;
                        return _context3.abrupt('return', ctx.body = project);

                    case 8:
                        _context3.prev = 8;
                        _context3.t0 = _context3['catch'](1);

                        console.log(_context3.t0);
                        return _context3.abrupt('return', ctx.throw(403));

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }, _callee3, _this3, [[1, 8]]);
        }))();
    }
    static getProjectsWithTasks(ctx) {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
            var projects;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_1__models_project_model__["a" /* default */].findAll({
                            where: {
                                user_id: ctx.request.body.id
                            },
                            include: [{
                                model: __WEBPACK_IMPORTED_MODULE_2__models_task_model__["a" /* default */],
                                as: 'ProjectTasks'
                            }],
                            order: [['id', 'DESC']]
                        });

                    case 2:
                        projects = _context4.sent;

                        console.log(projects);
                        ctx.body = projects;

                    case 5:
                    case 'end':
                        return _context4.stop();
                }
            }, _callee4, _this4);
        }))();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProjectController;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_task_model__ = __webpack_require__(17);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by rated on 28.01.2018.
 */



class TaskController {
    static create(ctx) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
            var task;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return __WEBPACK_IMPORTED_MODULE_2__models_task_model__["a" /* default */].create({
                            name: ctx.request.body.name,
                            project_id: ctx.request.body.project_id
                        });

                    case 3:
                        task = _context.sent;

                        ctx.body = task;
                        _context.next = 11;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);
                        ctx.throw(400);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }, _callee, _this, [[0, 7]]);
        }))();
    }
    static updateName(ctx) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
            var project, task;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return TaskController.verifyProject(ctx);

                    case 2:
                        project = _context2.sent;

                        if (project) {
                            _context2.next = 5;
                            break;
                        }

                        return _context2.abrupt('return', ctx.throw(403));

                    case 5:
                        _context2.prev = 5;
                        _context2.next = 8;
                        return __WEBPACK_IMPORTED_MODULE_2__models_task_model__["a" /* default */].create({
                            name: ctx.request.body.name,
                            project_id: ctx.request.body.project_id
                        });

                    case 8:
                        task = _context2.sent;

                        ctx.body = task;
                        _context2.next = 16;
                        break;

                    case 12:
                        _context2.prev = 12;
                        _context2.t0 = _context2['catch'](5);

                        console.log(_context2.t0);
                        ctx.throw(400);

                    case 16:
                    case 'end':
                        return _context2.stop();
                }
            }, _callee2, _this2, [[5, 12]]);
        }))();
    }
    static delete(ctx) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
            var project, task;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return TaskController.verifyProject(ctx);

                    case 2:
                        project = _context3.sent;

                        if (project) {
                            _context3.next = 5;
                            break;
                        }

                        return _context3.abrupt('return', ctx.throw(403));

                    case 5:
                        _context3.prev = 5;
                        _context3.next = 8;
                        return __WEBPACK_IMPORTED_MODULE_2__models_task_model__["a" /* default */].destroy({
                            where: {
                                id: ctx.params.task_id,
                                project_id: ctx.params.project_id
                            }
                        });

                    case 8:
                        task = _context3.sent;
                        return _context3.abrupt('return', ctx.body = task);

                    case 12:
                        _context3.prev = 12;
                        _context3.t0 = _context3['catch'](5);

                        console.log(_context3.t0);
                        ctx.throw(400);

                    case 16:
                    case 'end':
                        return _context3.stop();
                }
            }, _callee3, _this3, [[5, 12]]);
        }))();
    }
    static changePosition(ctx) {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
            var project, task;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return TaskController.verifyProject(ctx);

                    case 2:
                        project = _context4.sent;

                        if (project) {
                            _context4.next = 5;
                            break;
                        }

                        return _context4.abrupt('return', ctx.throw(403));

                    case 5:
                        _context4.prev = 5;
                        _context4.next = 8;
                        return __WEBPACK_IMPORTED_MODULE_2__models_task_model__["a" /* default */].update({
                            position: ctx.request.body.position
                        }, {
                            where: {
                                project_id: ctx.request.body.project_id,
                                id: ctx.request.body.task_id
                            }
                        });

                    case 8:
                        task = _context4.sent;

                        if (!task[0]) {
                            _context4.next = 13;
                            break;
                        }

                        return _context4.abrupt('return', ctx.body = task);

                    case 13:
                        return _context4.abrupt('return', ctx.throw(403));

                    case 14:
                        _context4.next = 20;
                        break;

                    case 16:
                        _context4.prev = 16;
                        _context4.t0 = _context4['catch'](5);

                        console.log(_context4.t0);
                        ctx.throw(400);

                    case 20:
                    case 'end':
                        return _context4.stop();
                }
            }, _callee4, _this4, [[5, 16]]);
        }))();
    }
    static changeStatus(ctx) {
        var _this5 = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5() {
            var project, task;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return TaskController.verifyProject(ctx);

                    case 2:
                        project = _context5.sent;

                        if (project) {
                            _context5.next = 5;
                            break;
                        }

                        return _context5.abrupt('return', ctx.throw(403));

                    case 5:
                        _context5.prev = 5;
                        _context5.next = 8;
                        return __WEBPACK_IMPORTED_MODULE_2__models_task_model__["a" /* default */].update({
                            status: ctx.request.body.status
                        }, {
                            where: {
                                project_id: ctx.request.body.project_id,
                                id: ctx.request.body.task_id
                            }
                        });

                    case 8:
                        task = _context5.sent;

                        if (!task[0]) {
                            _context5.next = 13;
                            break;
                        }

                        return _context5.abrupt('return', ctx.body = task);

                    case 13:
                        return _context5.abrupt('return', ctx.throw(403));

                    case 14:
                        _context5.next = 20;
                        break;

                    case 16:
                        _context5.prev = 16;
                        _context5.t0 = _context5['catch'](5);

                        console.log(_context5.t0);
                        ctx.throw(400);

                    case 20:
                    case 'end':
                        return _context5.stop();
                }
            }, _callee5, _this5, [[5, 16]]);
        }))();
    }
    static verifyProject(ctx) {
        var _this6 = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6() {
            var project;
            return __WEBPACK_IMPORTED_MODULE_0_D_My_Projects_Angular_2_Angular_Todo_new_backend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_1__models_project_model__["a" /* default */].findOne({
                            where: {
                                id: ctx.request.body.project_id,
                                user_id: ctx.request.body.id
                            }
                        });

                    case 2:
                        project = _context6.sent;
                        return _context6.abrupt('return', project);

                    case 4:
                    case 'end':
                        return _context6.stop();
                }
            }, _callee6, _this6);
        }))();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TaskController;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * CORS middleware for koa2
 *
 * @param {Object} [options]
 *  - {String|Function(ctx)} origin `Access-Control-Allow-Origin`, default is request Origin header
 *  - {Array} exposeHeaders `Access-Control-Expose-Headers`
 *  - {String|Number} maxAge `Access-Control-Max-Age` in seconds
 *  - {Boolean} credentials `Access-Control-Allow-Credentials`
 *  - {Array} allowMethods `Access-Control-Allow-Methods`, default is ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS']
 *  - {Array} allowHeaders `Access-Control-Allow-Headers`
 * @return {Function}
 * @api public
 */
module.exports = function crossOrigin(options = {}) {
  const defaultOptions = {
    allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
  };

  // set defaultOptions to options
  for (let key in defaultOptions) {
    if (!Object.prototype.hasOwnProperty.call(options, key)) {
      options[key] = defaultOptions[key];
    }
  }

  return async function (ctx, next) {
    let origin;
    if (typeof options.origin === 'function') {
      origin = options.origin(ctx);
    } else {
      origin = options.origin || ctx.get('Origin') || '*';
    }
    if (!origin) {
      return await next();
    }

    // Access-Control-Allow-Origin
    ctx.set('Access-Control-Allow-Origin', origin);

    if (ctx.method === 'OPTIONS') {
      // Preflight Request
      if (!ctx.get('Access-Control-Request-Method')) {
        return await next();
      }

      // Access-Control-Max-Age
      if (options.maxAge) {
        ctx.set('Access-Control-Max-Age', String(options.maxAge));
      }

      // Access-Control-Allow-Credentials
      if (options.credentials === true) {
        // When used as part of a response to a preflight request,
        // this indicates whether or not the actual request can be made using credentials.
        ctx.set('Access-Control-Allow-Credentials', 'true');
      }

      // Access-Control-Allow-Methods
      if (options.allowMethods) {
        ctx.set('Access-Control-Allow-Methods', options.allowMethods.join(','));
      }

      // Access-Control-Allow-Headers
      if (options.allowHeaders) {
        ctx.set('Access-Control-Allow-Headers', options.allowHeaders.join(','));
      } else {
        ctx.set('Access-Control-Allow-Headers', ctx.get('Access-Control-Request-Headers'));
      }

      ctx.status = 204; // No Content
    } else {
      // Request
      // Access-Control-Allow-Credentials
      if (options.credentials === true) {
        if (origin === '*') {
          // `credentials` can't be true when the `origin` is set to `*`
          ctx.remove('Access-Control-Allow-Credentials');
        } else {
          ctx.set('Access-Control-Allow-Credentials', 'true');
        }
      }

      // Access-Control-Expose-Headers
      if (options.exposeHeaders) {
        ctx.set('Access-Control-Expose-Headers', options.exposeHeaders.join(','));
      }

      try {
        await next();
      } catch (err) {
        throw err;
      }
    }
  };
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map
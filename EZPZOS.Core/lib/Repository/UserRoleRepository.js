"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRoleRepository = void 0;
var _mssql = require("mssql");
var _Constants = require("../Common/Constants");
var _BaseRepository2 = require("./BaseRepository");
var _RoleRepository = require("./RoleRepository");
var _Role = require("../Domain/Role");
var _UserRole = require("../Domain/UserRole");
var _PrepareStatementHandler = require("../Handler/PrepareStatementHandler");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var UserRoleRepository = exports.UserRoleRepository = /*#__PURE__*/function (_BaseRepository) {
  function UserRoleRepository() {
    _classCallCheck(this, UserRoleRepository);
    return _callSuper(this, UserRoleRepository, arguments);
  }
  _inherits(UserRoleRepository, _BaseRepository);
  return _createClass(UserRoleRepository, [{
    key: "Insert",
    value: //#region Implementation
    //TODO Update, Delete
    function () {
      var _Insert = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dataObject, callback) {
        var _this = this;
        var userRole, query;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.Logger.Log("Insert", "Inserting", _Constants.LogLevel.DEBUG);

              // Validate input dataobject
              if (dataObject instanceof _UserRole.UserRole) {
                userRole = dataObject; // Preparing insert query
                query = "Insert into [dbo].[UserRole] ([Id],[UserId],[RoleId],[IsDeleted],[CreatedTimestamp],[CreatedUserId],[UpdatedTimestamp],[UpdatedUserId])\n\t\t\t\t\t\tValues(@Id,@UserId,@RoleId,@IsDeleted,@CreatedTimestamp,@CreatedUserId,@UpdatedTimestamp,@UpdatedUserId)"; // Execute Query with parameters
                this.Execute(query, userRole, function (preparedStatement) {
                  // get role related parameters
                  return _PrepareStatementHandler.PreparedStatementHandler.UserRolePrepareStatementInput(preparedStatement);
                }, function (err, result) {
                  if (err) {
                    _this.Logger.Log("Insert", "Error Inserting UserRole Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                    callback(false);
                    return;
                  } else {
                    // If one row affect, meaning inserted one row
                    if ((result === null || result === void 0 ? void 0 : result.rowsAffected[0]) == 1) {
                      _this.Logger.Log("Insert", "UserRole Inserted.", _Constants.LogLevel.DEBUG);
                      callback(true);
                      return;
                    } else {
                      _this.Logger.Log("Insert", "Error Inserting UserRole Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                      callback(false);
                      return;
                    }
                  }
                });
              } else {
                this.Logger.Log("Insert", "Invalid UserRole Object: ".concat(JSON.stringify(dataObject)), _Constants.LogLevel.ERROR);
                callback(false);
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function Insert(_x, _x2) {
        return _Insert.apply(this, arguments);
      }
      return Insert;
    }()
  }, {
    key: "GetUserRolesByUserId",
    value: function () {
      var _GetUserRolesByUserId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id, callback) {
        var _this2 = this;
        var query;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.Logger.Log("GetUserRoleByUserId", "Getting UserRole By UserId", _Constants.LogLevel.DEBUG);

              // Validate input dataobject

              // Preparing insert query
              query = "Select * from [dbo].[UserRole] Where [UserId] = @Id"; // Execute Query with parameters
              _context3.next = 4;
              return this.Execute(query, {
                Id: id
              }, function (preparedStatement) {
                return preparedStatement.input("Id", _mssql.UniqueIdentifier);
              }, /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, result) {
                  var userRoles, _i, _arr, _yield$RoleRepository, userRole;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!err) {
                          _context2.next = 4;
                          break;
                        }
                        _this2.Logger.Log("GetUserRoleByUserId", "Error Getting UserRole By UserId: ".concat(id, "\n\t\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                        _context2.next = 32;
                        break;
                      case 4:
                        if (!(result !== null && result !== void 0 && result.rowsAffected[0] && (result === null || result === void 0 ? void 0 : result.rowsAffected[0]) > 0 && result.recordsets[0].length > 0)) {
                          _context2.next = 30;
                          break;
                        }
                        _this2.Logger.Log("GetUserRoleByUserId", "UserRole Found.", _Constants.LogLevel.DEBUG);
                        userRoles = [];
                        _i = 0, _arr = result.recordsets[0];
                      case 8:
                        if (!(_i < _arr.length)) {
                          _context2.next = 26;
                          break;
                        }
                        userRole = _arr[_i];
                        _context2.next = 12;
                        return new _RoleRepository.RoleRepository().GetRoleByRoleIdPromise(userRole.RoleId);
                      case 12:
                        _context2.t1 = _yield$RoleRepository = _context2.sent;
                        _context2.t0 = _context2.t1 !== null;
                        if (!_context2.t0) {
                          _context2.next = 16;
                          break;
                        }
                        _context2.t0 = _yield$RoleRepository !== void 0;
                      case 16:
                        if (!_context2.t0) {
                          _context2.next = 20;
                          break;
                        }
                        _context2.t2 = _yield$RoleRepository;
                        _context2.next = 21;
                        break;
                      case 20:
                        _context2.t2 = new _Role.Role();
                      case 21:
                        userRole.Role = _context2.t2;
                        userRoles.push(userRole);
                      case 23:
                        _i++;
                        _context2.next = 8;
                        break;
                      case 26:
                        _this2.Logger.Log("GetUserRoleByUserId", "UserRoles gotten: ".concat(JSON.stringify(userRoles)), _Constants.LogLevel.DEBUG);
                        callback(true, userRoles);
                        _context2.next = 32;
                        break;
                      case 30:
                        _this2.Logger.Log("GetUserRoleByUserId", "Error UserRole User By UserId: ".concat(id, ".\n\t\t\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                        callback(false, undefined);
                      case 32:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x5, _x6) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function GetUserRolesByUserId(_x3, _x4) {
        return _GetUserRolesByUserId.apply(this, arguments);
      }
      return GetUserRolesByUserId;
    }()
  }, {
    key: "GetUserRolesByUserIdPromise",
    value: function () {
      var _GetUserRolesByUserIdPromise = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
        var query, result, userRoles, _i2, _arr2, _yield$RoleRepository2, userRole;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.Logger.Log("GetUserRolesByUserIdPromise", "Getting UserRole By UserId", _Constants.LogLevel.DEBUG);

              // Validate input dataobject

              // Preparing insert query
              query = "Select * from [dbo].[UserRole] Where [UserId] = @Id";
              this.Logger.Log("GetUserRolesByUserIdPromise", "Execuring Query", _Constants.LogLevel.DEBUG);

              // Execute Query with parameters
              _context4.next = 5;
              return this.ExecutePromise(query, {
                Id: id
              }, function (preparedStatement) {
                return preparedStatement.input("Id", _mssql.UniqueIdentifier);
              });
            case 5:
              result = _context4.sent;
              if (!(result !== null && result !== void 0 && result.rowsAffected[0] && (result === null || result === void 0 ? void 0 : result.rowsAffected[0]) > 0 && result.recordsets[0].length > 0)) {
                _context4.next = 32;
                break;
              }
              this.Logger.Log("GetUserRoleByUserId", "UserRole Found.", _Constants.LogLevel.DEBUG);
              userRoles = [];
              _i2 = 0, _arr2 = result.recordsets[0];
            case 10:
              if (!(_i2 < _arr2.length)) {
                _context4.next = 28;
                break;
              }
              userRole = _arr2[_i2];
              _context4.next = 14;
              return new _RoleRepository.RoleRepository().GetRoleByRoleIdPromise(userRole.RoleId);
            case 14:
              _context4.t1 = _yield$RoleRepository2 = _context4.sent;
              _context4.t0 = _context4.t1 !== null;
              if (!_context4.t0) {
                _context4.next = 18;
                break;
              }
              _context4.t0 = _yield$RoleRepository2 !== void 0;
            case 18:
              if (!_context4.t0) {
                _context4.next = 22;
                break;
              }
              _context4.t2 = _yield$RoleRepository2;
              _context4.next = 23;
              break;
            case 22:
              _context4.t2 = new _Role.Role();
            case 23:
              userRole.Role = _context4.t2;
              userRoles.push(userRole);
            case 25:
              _i2++;
              _context4.next = 10;
              break;
            case 28:
              this.Logger.Log("GetUserRoleByUserId", "UserRoles gotten: ".concat(JSON.stringify(userRoles)), _Constants.LogLevel.DEBUG);
              return _context4.abrupt("return", userRoles);
            case 32:
              this.Logger.Log("GetUserRolesByUserIdPromise", "Error UserRole User By UserId: ".concat(id, ".\n\t\t\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
            case 33:
              return _context4.abrupt("return", undefined);
            case 34:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function GetUserRolesByUserIdPromise(_x7) {
        return _GetUserRolesByUserIdPromise.apply(this, arguments);
      }
      return GetUserRolesByUserIdPromise;
    }() //#endregion
  }]);
}(_BaseRepository2.BaseRepository);
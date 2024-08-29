"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;
var _Constants = require("../Common/Constants");
var _User = require("../Domain/User");
var _BaseRepository2 = require("./BaseRepository");
var _mssql = require("mssql");
var _UserRoleRepository = require("./UserRoleRepository");
var _PrepareStatementHandler = require("../Handler/PrepareStatementHandler");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var UserRepository = exports.UserRepository = /*#__PURE__*/function (_BaseRepository) {
  function UserRepository() {
    _classCallCheck(this, UserRepository);
    return _callSuper(this, UserRepository, arguments);
  }
  _inherits(UserRepository, _BaseRepository);
  return _createClass(UserRepository, [{
    key: "Insert",
    value: function () {
      var _Insert = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dataObject, callback) {
        var _this = this;
        var user, query;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.Logger.Log("Insert", "Inserting", _Constants.LogLevel.DEBUG);

              // Validate input dataobject
              if (dataObject instanceof _User.User) {
                user = dataObject; // Preparing insert query
                query = "Insert into [dbo].[User] ([Id],[Username],[Password],[Salt],[Email],[Mobile],[Avatar],[IsDeleted],[CreatedTimestamp],[CreatedUserId],[UpdatedTimestamp],[UpdatedUserId])\n\t\t\t\t\t\tValues(@Id,@Username,@Password,@Salt,@Email,@Mobile,cast(cast(@Avatar as varbinary(max)) as Image),@IsDeleted,@CreatedTimestamp,@CreatedUserId,@UpdatedTimestamp,@UpdatedUserId)"; // Execute Query with parameters
                this.Execute(query, user, function (preparedStatement) {
                  // get user related parameters
                  return _PrepareStatementHandler.PreparedStatementHandler.UserPrepareStatementInput(preparedStatement);
                }, function (err, result) {
                  if (err) {
                    _this.Logger.Log("Insert", "Error Inserting User Object: ".concat(JSON.stringify(dataObject), "\n                            Exception: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                    if (err.message.includes("duplicate key")) {
                      callback(false, 409, "Username, mobile, or email already exists.");
                    } else {
                      callback(false, 500, "Error inserting user into database.");
                    }
                  } else {
                    // If one row affect, meaning inserted one row
                    if ((result === null || result === void 0 ? void 0 : result.rowsAffected[0]) == 1) {
                      _this.Logger.Log("Insert", "User Inserted.", _Constants.LogLevel.DEBUG);
                      callback(true);
                      return;
                    } else {
                      _this.Logger.Log("Insert", "Error Inserting User Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                      callback(false, 500, "Unknown error occurred while inserting user.");
                    }
                  }
                });
              } else {
                this.Logger.Log("Insert", "Invalid User Object: ".concat(JSON.stringify(dataObject)), _Constants.LogLevel.ERROR);
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
    key: "Delete",
    value: function () {
      var _Delete = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dataObject, callback) {
        var _this2 = this;
        var user, query;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.Logger.Log("Delete", "Deleting", _Constants.LogLevel.DEBUG);

              // Validate input dataobject
              if (dataObject instanceof _User.User) {
                user = dataObject; // Preparing insert query
                query = "Delete from [dbo].[User]\n\t\t\tWhere [Id] = @Id"; // Execute Query with parameters
                this.Execute(query, user, function (preparedStatement) {
                  // get user related parameters
                  return _PrepareStatementHandler.PreparedStatementHandler.UserPrepareStatementInput(preparedStatement);
                }, function (err, result) {
                  if (err) {
                    _this2.Logger.Log("Delete", "Error Deleting User Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                  } else {
                    // If one row affect, meaning inserted one row
                    if ((result === null || result === void 0 ? void 0 : result.rowsAffected[0]) === 1) {
                      _this2.Logger.Log("Delete", "User Deleted.", _Constants.LogLevel.DEBUG);
                      callback(true);
                      return;
                    } else {
                      _this2.Logger.Log("Delete", "Error Deleting User Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                      callback(false);
                      return;
                    }
                  }
                });
              } else {
                this.Logger.Log("Delete", "Invalid User Object: ".concat(JSON.stringify(dataObject)), _Constants.LogLevel.ERROR);
              }
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function Delete(_x3, _x4) {
        return _Delete.apply(this, arguments);
      }
      return Delete;
    }()
  }, {
    key: "Update",
    value: function () {
      var _Update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dataObject, callback) {
        var _this3 = this;
        var user, query;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.Logger.Log("Update", "Updating", _Constants.LogLevel.DEBUG);

              // Validate input dataobject
              if (dataObject instanceof _User.User) {
                user = dataObject; // Preparing insert query
                query = "Update [dbo].[User]\n\t\t\tSet Username = @Username,\n\t\t\tPassword = @Password,\n\t\t\tSalt = @Salt,\n\t\t\tEmail = @Email,\n\t\t\tMobile = @Mobile,\n\t\t\tAvatar = cast(cast(@Avatar as varbinary(max)) as Image),\n\t\t\tIsDeleted = @IsDeleted,\n\t\t\tCreatedTimestamp = @CreatedTimestamp,\n\t\t\tCreatedUserId = @CreatedUserId,\n\t\t\tUpdatedTimestamp = @UpdatedTimestamp,\n\t\t\tUpdatedUserId = @UpdatedUserId\n\t\t\tWhere [Id] = @Id"; // Execute Query with parameters
                this.Execute(query, user, function (preparedStatement) {
                  // get user related parameters
                  return _PrepareStatementHandler.PreparedStatementHandler.UserPrepareStatementInput(preparedStatement);
                }, function (err, result) {
                  if (err) {
                    _this3.Logger.Log("Update", "Error Updating User Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                  } else {
                    // If one row affect, meaning inserted one row
                    if ((result === null || result === void 0 ? void 0 : result.rowsAffected[0]) === 1) {
                      _this3.Logger.Log("Update", "User Updated.", _Constants.LogLevel.DEBUG);
                      callback(true);
                      return;
                    } else {
                      _this3.Logger.Log("Update", "Error Updating User Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                      callback(false);
                      return;
                    }
                  }
                });
              } else {
                this.Logger.Log("Update", "Invalid User Object: ".concat(JSON.stringify(dataObject)), _Constants.LogLevel.ERROR);
              }
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function Update(_x5, _x6) {
        return _Update.apply(this, arguments);
      }
      return Update;
    }()
    /**
     * Get a single user record by Primary Key [Id]
     * @param id Id of the user to be queried
     * @param callback Result returned from the query. Parameter {result} indicating if the call successed or otherwise. Parameter {user} represents the IUser object or undefined if result is false.
     * @returns void
     */
  }, {
    key: "GetUserById",
    value: (function () {
      var _GetUserById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id, callback) {
        var _this4 = this;
        var query;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this.Logger.Log("GetUserById", "Getting User By Id", _Constants.LogLevel.DEBUG);

              // Preparing insert query
              query = "Select * from [dbo].[User] Where [Id] = @Id"; // Execute Query with parameters
              _context5.next = 4;
              return this.Execute(query, {
                Id: id
              }, function (preparedStatement) {
                return preparedStatement.input("Id", _mssql.UniqueIdentifier);
              }, /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, result) {
                  var user, _yield$UserRoleReposi;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!err) {
                          _context4.next = 4;
                          break;
                        }
                        _this4.Logger.Log("GetUserById", "Error Getting User By Id: ".concat(id, "\n\t\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                        _context4.next = 25;
                        break;
                      case 4:
                        if (!((result === null || result === void 0 ? void 0 : result.rowsAffected[0]) === 1 && result.recordsets[0].length > 0)) {
                          _context4.next = 23;
                          break;
                        }
                        _this4.Logger.Log("GetUserById", "User Found.", _Constants.LogLevel.DEBUG);
                        user = result.recordsets[0][0];
                        if (!(user !== undefined || user !== null)) {
                          _context4.next = 20;
                          break;
                        }
                        _context4.next = 10;
                        return new _UserRoleRepository.UserRoleRepository().GetUserRolesByUserIdPromise(user.Id);
                      case 10:
                        _context4.t1 = _yield$UserRoleReposi = _context4.sent;
                        _context4.t0 = _context4.t1 !== null;
                        if (!_context4.t0) {
                          _context4.next = 14;
                          break;
                        }
                        _context4.t0 = _yield$UserRoleReposi !== void 0;
                      case 14:
                        if (!_context4.t0) {
                          _context4.next = 18;
                          break;
                        }
                        _context4.t2 = _yield$UserRoleReposi;
                        _context4.next = 19;
                        break;
                      case 18:
                        _context4.t2 = [];
                      case 19:
                        user.UserRoles = _context4.t2;
                      case 20:
                        callback(true, user);
                        _context4.next = 25;
                        break;
                      case 23:
                        _this4.Logger.Log("GetUserById", "Error Getting User By Id: ".concat(id, ".\n\t\t\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                        callback(false, undefined);
                      case 25:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x9, _x10) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function GetUserById(_x7, _x8) {
        return _GetUserById.apply(this, arguments);
      }
      return GetUserById;
    }()
    /**
     * Get a single user record by Mobile number [Mobile]
     * @param mobile Mobile of the user to be queried
     * @param callback Result returned from the query. Parameter {result} indicating if the call succeed or otherwise. Parameter {user} represents the User object or undefined if result is false.
     * @returns void
     */
    )
  }, {
    key: "GetUserByMobile",
    value: (function () {
      var _GetUserByMobile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(mobile, callback) {
        var _this5 = this;
        var query;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              this.Logger.Log("GetUserByMobile", "Getting User By Mobile", _Constants.LogLevel.DEBUG);
              query = "SELECT * FROM [dbo].[User] WHERE [Mobile] = @Mobile";
              _context7.next = 4;
              return this.Execute(query, {
                Mobile: mobile
              }, function (preparedStatement) {
                return preparedStatement.input("Mobile", _mssql.NVarChar);
              }, /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(err, result) {
                  var user;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        if (err) {
                          _this5.Logger.Log("GetUserByMobile", "Error Getting User By Mobile: ".concat(mobile, "\n\t\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                        } else if ((result === null || result === void 0 ? void 0 : result.rowsAffected[0]) === 1 && result.recordsets[0].length > 0) {
                          _this5.Logger.Log("GetUserByMobile", "User found.", _Constants.LogLevel.DEBUG);
                          user = result.recordsets[0][0];
                          callback(true, user);
                        } else {
                          _this5.Logger.Log("GetUserByMobile", "User not found.", _Constants.LogLevel.WARN);
                          callback(false, null);
                        }
                      case 1:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function (_x13, _x14) {
                  return _ref2.apply(this, arguments);
                };
              }());
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function GetUserByMobile(_x11, _x12) {
        return _GetUserByMobile.apply(this, arguments);
      }
      return GetUserByMobile;
    }())
  }, {
    key: "OnSaving",
    value: function () {
      var _OnSaving = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(dataObject, userId, isUpdate, isDelete, callback) {
        var _this6 = this;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _superPropGet(UserRepository, "OnSaving", this, 3)([dataObject, userId, isUpdate, isDelete, function (result) {
                _this6.Logger.Log("OnSaving", "Parent OnSaving Result: ".concat(result), _Constants.LogLevel.INFO);
                var user = dataObject;
                if (!result) {
                  callback(false);
                  return;
                }
                if (!user.UserRoles || user.UserRoles.length == 0) {
                  _this6.Logger.Log("OnSaving", "User has no userRoles.", _Constants.LogLevel.ERROR);
                  callback(false);
                  return;
                } else {
                  var _iterator = _createForOfIteratorHelper(user.UserRoles),
                    _step;
                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var userRole = _step.value;
                      if (userRole.Role === undefined || userRole.Role === null || userRole.Role.Code === undefined || userRole.Role.Code === null || userRole.Role.Description === undefined || userRole.Role.Description === null) {
                        _this6.Logger.Log("OnSaving", "UserRole has no role.", _Constants.LogLevel.ERROR);
                        callback(false);
                        return;
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }
                callback(true);
                return;
              }]);
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function OnSaving(_x15, _x16, _x17, _x18, _x19) {
        return _OnSaving.apply(this, arguments);
      }
      return OnSaving;
    }()
  }, {
    key: "OnSaved",
    value: function () {
      var _OnSaved = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(dataObject, userId, isUpdate, isDelete, callback) {
        var _this7 = this;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _superPropGet(UserRepository, "OnSaved", this, 3)([dataObject, userId, isUpdate, isDelete, ( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(result) {
                  var userRoleRepository, finalResult, saveUserRolePromises;
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        _this7.Logger.Log("OnSaved", "Parent OnSaved Result: ".concat(result), _Constants.LogLevel.INFO);
                        if (result) {
                          _context9.next = 4;
                          break;
                        }
                        callback(false);
                        return _context9.abrupt("return");
                      case 4:
                        userRoleRepository = new _UserRoleRepository.UserRoleRepository();
                        finalResult = true; //save the userRole into database
                        saveUserRolePromises = dataObject.UserRoles.map(function (userRole) {
                          return new Promise(function (resolve, reject) {
                            userRoleRepository.Save(userRole, userId, isUpdate, isDelete, function (result) {
                              _this7.Logger.Log("Save", "Save userRole Result: ".concat(result, "."), _Constants.LogLevel.INFO);
                              if (!result) {
                                finalResult = false;
                                reject(new Error("Failed to save userRole"));
                                _this7.Logger.Log("Save", "Failed to save userRole", _Constants.LogLevel.INFO);
                              } else {
                                resolve(result);
                              }
                            });
                          });
                        });
                        _context9.next = 9;
                        return Promise.all(saveUserRolePromises);
                      case 9:
                        _this7.Logger.Log("Save", "All userRoles are saved", _Constants.LogLevel.INFO);
                        if (finalResult) {
                          _context9.next = 13;
                          break;
                        }
                        callback(false);
                        return _context9.abrupt("return");
                      case 13:
                        callback(true);
                        return _context9.abrupt("return");
                      case 15:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function (_x25) {
                  return _ref3.apply(this, arguments);
                };
              }())]);
            case 1:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function OnSaved(_x20, _x21, _x22, _x23, _x24) {
        return _OnSaved.apply(this, arguments);
      }
      return OnSaved;
    }()
  }]);
}(_BaseRepository2.BaseRepository);
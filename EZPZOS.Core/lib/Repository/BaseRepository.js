"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _mssql = require("mssql");
var dotenv = _interopRequireWildcard(require("dotenv-safe"));
var _Base2 = require("../Domain/Base");
var _Constants = require("../Common/Constants");
var _Event = require("../Domain/Event");
var _EventCode = require("../Enum/EventCode");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
dotenv.config();
var BaseRepository = exports.BaseRepository = /*#__PURE__*/function (_Base) {
  function BaseRepository() {
    var _process$env$DB_SERVE;
    var _this;
    _classCallCheck(this, BaseRepository);
    var loglevel = _Constants.DefaultTargetLogLevel;
    try {
      if (process.env.LOG_LEVEL) {
        loglevel = parseInt(process.env.LOG_LEVEL);
      }
    } catch (ex) {
      console.log("Cannot parse log level from env var, Exception: ".concat(ex));
    }
    _this = _callSuper(this, BaseRepository, [loglevel]);
    _superPropGet((_this, BaseRepository), "initLogger", _this, 3)([_this.constructor.name]);
    _this.ConnectionConfig = {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: (_process$env$DB_SERVE = process.env.DB_SERVER) !== null && _process$env$DB_SERVE !== void 0 ? _process$env$DB_SERVE : "",
      database: process.env.DB_NAME,
      options: {
        encrypt: false,
        trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === _Constants.BooleanTrueString // change to true for local dev / self-signed certs
      }
    };
    return _this;
  }
  _inherits(BaseRepository, _Base);
  return _createClass(BaseRepository, [{
    key: "Execute",
    value: function () {
      var _Execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sqlQuery, dataObject, prepareParam, callback) {
        var _this2 = this;
        var connnection, preparedStatement;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _mssql.connect)(this.ConnectionConfig);
            case 3:
              connnection = _context.sent;
              preparedStatement = new _mssql.PreparedStatement(connnection); // Prepare Parameters from callback
              preparedStatement = prepareParam(preparedStatement);

              // Prepare Query
              preparedStatement.prepare(sqlQuery, function (err) {
                if (err) {
                  _this2.Logger.Log("Execute", "Error preparing Statement, Exception: ".concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                } else {
                  // Execute Query with Data
                  preparedStatement.execute(dataObject, function (err, results) {
                    if (err) {
                      _this2.Logger.Log("Execute", "Error executing Statement, Exception: ".concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                    }
                    callback(err, results);
                    preparedStatement.unprepare();
                  });
                }
              });
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              this.Logger.Log("Execute", "Error Executing Statement: ".concat(JSON.stringify(_context.t0)), _Constants.LogLevel.ERROR);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 9]]);
      }));
      function Execute(_x, _x2, _x3, _x4) {
        return _Execute.apply(this, arguments);
      }
      return Execute;
    }()
  }, {
    key: "ExecutePromise",
    value: function () {
      var _ExecutePromise = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sqlQuery, dataObject, prepareParam) {
        var connnection, preparedStatement, results;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _mssql.connect)(this.ConnectionConfig);
            case 3:
              connnection = _context2.sent;
              preparedStatement = new _mssql.PreparedStatement(connnection);
              this.Logger.Log("Execute", "Preparing Statement", _Constants.LogLevel.DEBUG);
              // Prepare Parameters from callback
              preparedStatement = prepareParam(preparedStatement);

              // Prepare Query
              _context2.next = 9;
              return preparedStatement.prepare(sqlQuery);
            case 9:
              this.Logger.Log("Execute", "Executing Statement", _Constants.LogLevel.DEBUG);
              // Execute Query with Data
              _context2.next = 12;
              return preparedStatement.execute(dataObject);
            case 12:
              results = _context2.sent;
              _context2.next = 15;
              return preparedStatement.unprepare();
            case 15:
              return _context2.abrupt("return", results);
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              this.Logger.Log("ExecutePromise", "Error Executing Statement: ".concat(JSON.stringify(_context2.t0)), _Constants.LogLevel.ERROR);
            case 21:
              return _context2.abrupt("return", undefined);
            case 22:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 18]]);
      }));
      function ExecutePromise(_x5, _x6, _x7) {
        return _ExecutePromise.apply(this, arguments);
      }
      return ExecutePromise;
    }()
  }, {
    key: "Insert",
    value: function () {
      var _Insert = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dataObject, callback) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              throw new Error("Method not implemented.");
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function Insert(_x8, _x9) {
        return _Insert.apply(this, arguments);
      }
      return Insert;
    }()
  }, {
    key: "Update",
    value: function () {
      var _Update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dataObject, callback) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              throw new Error("Method not implemented.");
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function Update(_x10, _x11) {
        return _Update.apply(this, arguments);
      }
      return Update;
    }()
  }, {
    key: "Delete",
    value: function () {
      var _Delete = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dataObject, callback) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              throw new Error("Method not implemented.");
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function Delete(_x12, _x13) {
        return _Delete.apply(this, arguments);
      }
      return Delete;
    }()
  }, {
    key: "Save",
    value: function () {
      var _Save = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(dataObject, userId, isUpdate, isDelete, callback) {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this.Logger.Log("Save", "Saving dataobject: ".concat(JSON.stringify(dataObject), ", isUpdate: ").concat(isUpdate, ", isDelete: ").concat(isDelete), _Constants.LogLevel.TRACE);
              this.OnSaving(dataObject, userId, isUpdate, isDelete, function (result) {
                if (result) {
                  if (isUpdate) {
                    dataObject.UpdatedTimestamp = new Date();
                    dataObject.UpdatedUserId = userId;
                    _this3.Update(dataObject, function (result) {
                      if (result) {
                        _this3.Logger.Log("Update", "Updating Result: ".concat(result, "."), _Constants.LogLevel.DEBUG);
                        _this3.OnSaved(dataObject, userId, isUpdate, isDelete, function (result) {
                          _this3.Logger.Log("OnSaved", "Result: ".concat(result, "."), _Constants.LogLevel.DEBUG);
                          callback(result);
                          if (!result) {
                            // TODO Rollback Onsaving and Update
                          }
                        });
                      }
                    });
                  } else if (isDelete) {
                    //TODO to be determined if deletion is soft or hard
                  } else {
                    // insert

                    dataObject.CreatedTimestamp = new Date();
                    dataObject.CreatedUserId = userId;
                    _this3.Insert(dataObject, function (result, errorCode, errorMessage) {
                      if (result) {
                        _this3.Logger.Log("Insert", "Inserting Result: ".concat(result, "."), _Constants.LogLevel.DEBUG);
                        try {
                          _this3.OnSaved(dataObject, userId, isUpdate, isDelete, function (result) {
                            _this3.Logger.Log("OnSaved", "Result: ".concat(result, "."), _Constants.LogLevel.DEBUG);
                            if (!result) {
                              // TODO Rollback Onsaving and Insert
                            }
                            callback(result);
                          });
                        } catch (err) {
                          _this3.Logger.Log("OnSaved", "Exception: ".concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                          callback(false);
                          return;
                        }
                      } else {
                        callback(false, errorCode, errorMessage);
                        return;
                      }
                    });
                  }
                } else {
                  _this3.Logger.Log("OnSaving", "Failed to save dataobject. Failed on OnSaving()", _Constants.LogLevel.ERROR);
                }
              });
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function Save(_x14, _x15, _x16, _x17, _x18) {
        return _Save.apply(this, arguments);
      }
      return Save;
    }()
  }, {
    key: "OnSaving",
    value: function () {
      var _OnSaving = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(dataObject, userId, isUpdate, isDelete, callback) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              callback(true);
              return _context7.abrupt("return");
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function OnSaving(_x19, _x20, _x21, _x22, _x23) {
        return _OnSaving.apply(this, arguments);
      }
      return OnSaving;
    }()
  }, {
    key: "OnSaved",
    value: function () {
      var _OnSaved = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(dataObject, userId, isUpdate, isDelete, callback) {
        var _this4 = this;
        var eventRepositoryType, event;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(require("./EventRepository"));
              });
            case 2:
              eventRepositoryType = _context8.sent;
              if (!(!eventRepositoryType || eventRepositoryType === undefined || eventRepositoryType === null)) {
                _context8.next = 7;
                break;
              }
              this.Logger.Log("OnSaved", "Failed to import Event Repository dynamically :".concat(dataObject.Id, "."), _Constants.LogLevel.ERROR);
              callback(false);
              return _context8.abrupt("return");
            case 7:
              this.Logger.Log("OnSaved", "Save dataobject Events.", _Constants.LogLevel.DEBUG);
              event = new _Event.Event();
              event.EventTime = new Date();
              event.ParentId = dataObject.Id;
              event.ParentTable = dataObject.constructor.name;
              event.IsDeleted = false;
              if (!isUpdate && !isDelete) {
                // Adding Event 'ADD' when inserting
                event.EventCode = _EventCode.EventCode.ADD;
              } else if (isUpdate) {
                // Adding Event 'UPDATE' when inserting
                event.EventCode = _EventCode.EventCode.UPDATE;
              } else if (isDelete) {
                // Adding Event 'DELETE' when inserting
                event.EventCode = _EventCode.EventCode.DELETE;
              }

              // Saving Event
              _context8.prev = 14;
              new eventRepositoryType.EventRepository().Save(event, userId, false, false, function (result) {
                if (result) {
                  _this4.Logger.Log("OnSaved", "Event ".concat(_EventCode.EventCode[event.EventCode], " Saved for dataobject :").concat(dataObject.Id, "."), _Constants.LogLevel.DEBUG);
                  callback(true);
                  return;
                } else {
                  _this4.Logger.Log("OnSaved", "Failed save Event ".concat(_EventCode.EventCode[event.EventCode], " for dataobject :").concat(dataObject.Id, "."), _Constants.LogLevel.DEBUG);
                  callback(false);
                  return;
                }
              });
              _context8.next = 23;
              break;
            case 18:
              _context8.prev = 18;
              _context8.t0 = _context8["catch"](14);
              this.Logger.Log("OnSaved", "Failed save Event ".concat(_EventCode.EventCode[event.EventCode], " for dataobject :").concat(dataObject.Id, ". Exception: ").concat(JSON.stringify(_context8.t0)), _Constants.LogLevel.ERROR);
              callback(false);
              return _context8.abrupt("return");
            case 23:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[14, 18]]);
      }));
      function OnSaved(_x24, _x25, _x26, _x27, _x28) {
        return _OnSaved.apply(this, arguments);
      }
      return OnSaved;
    }()
  }]);
}(_Base2.Base);
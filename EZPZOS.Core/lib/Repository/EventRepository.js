"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventRepository = void 0;
var _mssql = require("mssql");
var _Constants = require("../Common/Constants");
var _BaseRepository2 = require("./BaseRepository");
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
var EventRepository = exports.EventRepository = /*#__PURE__*/function (_BaseRepository) {
  function EventRepository() {
    _classCallCheck(this, EventRepository);
    return _callSuper(this, EventRepository, arguments);
  }
  _inherits(EventRepository, _BaseRepository);
  return _createClass(EventRepository, [{
    key: "Update",
    value: function () {
      var _Update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dataObject, callback) {
        var _this = this;
        var sql;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.Logger.Log("Update", "Updating Event", _Constants.LogLevel.DEBUG);
              sql = "Update [dbo].[Event] \n\t\tset [EventCode]=@EventCode,\n\t\t\t[EventTime]=@EventTime,\n\t\t\t[ParentId]=@ParentId,\n\t\t\t[ParentTable]=@ParentTable,\n\t\t\t[CreatedTimestamp]=@CreatedTimestamp,\n\t\t\t[UpdatedTimestamp]=@UpdatedTimestamp,\n\t\t\t[IsDeleted]=@IsDeleted,\n\t\t\t[CreatedUserId]=@CreatedUserId,\n\t\t\t[UpdatedUserId]=@UpdatedUserId \n\t\twhere [Id]=@Id";
              this.Execute(sql, dataObject, function (preparedStatement) {
                return _PrepareStatementHandler.PreparedStatementHandler.EventPrepareStatementInput(preparedStatement);
              }, function (err, result) {
                if (err) {
                  _this.Logger.Log("Update", "Error Updating Event: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                  callback(false);
                  return;
                } else if ((result === null || result === void 0 ? void 0 : result.rowsAffected[0]) == 1) {
                  _this.Logger.Log("Update", "Event Updated.", _Constants.LogLevel.DEBUG);
                  callback(true);
                } else {
                  _this.Logger.Log("Update", "Error Updating Event Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                  callback(false);
                  return;
                }
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function Update(_x, _x2) {
        return _Update.apply(this, arguments);
      }
      return Update;
    }()
  }, {
    key: "Insert",
    value: function () {
      var _Insert = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dataObject, callback) {
        var _this2 = this;
        var sql;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.Logger.Log("Insert", "Inserting Event", _Constants.LogLevel.DEBUG);
              sql = "\n\t\tInsert into [dbo].[Event](\n\t\t\t[Id],\n\t\t\t[EventCode],\n\t\t\t[EventTime],\n\t\t\t[ParentId],\n\t\t\t[ParentTable],\n\t\t\t[CreatedTimestamp],\n\t\t\t[UpdatedTimestamp],\n\t\t\t[IsDeleted],\n\t\t\t[CreatedUserId],\n\t\t\t[UpdatedUserId])\n\t\tValues(\n\t\t\t@Id,\n\t\t\t@EventCode,\n\t\t\t@EventTime,\n\t\t\t@ParentId,\n\t\t\t@ParentTable,\n\t\t\t@CreatedTimestamp,\n\t\t\t@UpdatedTimestamp,\n\t\t\t@IsDeleted,\n\t\t\t@CreatedUserId,\n\t\t\t@UpdatedUserId)";
              this.Execute(sql, dataObject, function (preparedStatement) {
                return _PrepareStatementHandler.PreparedStatementHandler.EventPrepareStatementInput(preparedStatement);
              }, function (err, result) {
                if (err) {
                  _this2.Logger.Log("Insert", "Error Inserting Event: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                  callback(false);
                  return;
                } else if ((result === null || result === void 0 ? void 0 : result.rowsAffected[0]) == 1) {
                  _this2.Logger.Log("Insert", "Event Inserted.", _Constants.LogLevel.DEBUG);
                  callback(true);
                  return;
                } else {
                  _this2.Logger.Log("Insert", "Error Inserting Event Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                  callback(false);
                  return;
                }
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function Insert(_x3, _x4) {
        return _Insert.apply(this, arguments);
      }
      return Insert;
    }()
  }, {
    key: "Delete",
    value: function () {
      var _Delete = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dataObject, callback) {
        var _this3 = this;
        var sql;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.Logger.Log("Delete", "Deleting Event", _Constants.LogLevel.DEBUG);
              sql = "Delete from [dbo].[Event] where [Id]=@Id";
              this.Execute(sql, dataObject, function (preparedStatement) {
                return preparedStatement.input("Id", _mssql.UniqueIdentifier);
              }, function (err, result) {
                if (err) {
                  _this3.Logger.Log("Delete", "Error Deleting Event: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                  callback(false);
                  return;
                } else if ((result === null || result === void 0 ? void 0 : result.rowsAffected[0]) == 1) {
                  _this3.Logger.Log("Delete", "Event Deleted.", _Constants.LogLevel.DEBUG);
                  callback(true);
                  return;
                } else {
                  _this3.Logger.Log("Delete", "Error Deleting Event Object: ".concat(JSON.stringify(dataObject), "\n\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                  callback(false);
                  return;
                }
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function Delete(_x5, _x6) {
        return _Delete.apply(this, arguments);
      }
      return Delete;
    }()
  }, {
    key: "GetEventsByParentId",
    value: function () {
      var _GetEventsByParentId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id, callback) {
        var _this4 = this;
        var query;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this.Logger.Log("GetEventsByParentId", "Getting Events By Parent Id", _Constants.LogLevel.DEBUG);

              // Preparing insert query
              query = "Select * from [dbo].[Event] Where [ParentId] = @Id"; // Execute Query with parameters
              _context5.next = 4;
              return this.Execute(query, {
                Id: id
              }, function (preparedStatement) {
                return preparedStatement.input("Id", _mssql.UniqueIdentifier);
              }, /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, result) {
                  var events;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        if (err) {
                          _this4.Logger.Log("GetEventsByParentId", "Error Events By Parent Id: ".concat(id, "\n\t\t\t\t\t\t\tException: ").concat(JSON.stringify(err)), _Constants.LogLevel.ERROR);
                        } else {
                          if (result && result.rowsAffected[0] > 0 && result.recordsets[0].length > 0) {
                            _this4.Logger.Log("GetEventsByParentId", "Events Found.", _Constants.LogLevel.DEBUG);
                            events = result.recordsets[0];
                            callback(true, events);
                          } else {
                            _this4.Logger.Log("GetEventsByParentId", "Error Getting Events By Parent Id: ".concat(id, ".\n\t\t\t\t\t\t\t\tResult: ").concat(JSON.stringify(result)), _Constants.LogLevel.ERROR);
                            callback(false, undefined);
                          }
                        }
                      case 1:
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
      function GetEventsByParentId(_x7, _x8) {
        return _GetEventsByParentId.apply(this, arguments);
      }
      return GetEventsByParentId;
    }()
  }, {
    key: "OnSaved",
    value: function () {
      var _OnSaved = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(dataObject, userId, isUpdate, isDelete, callback) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              // Skip saving event for event thus don't call super
              callback(true);
              return _context6.abrupt("return");
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function OnSaved(_x11, _x12, _x13, _x14, _x15) {
        return _OnSaved.apply(this, arguments);
      }
      return OnSaved;
    }()
  }]);
}(_BaseRepository2.BaseRepository);
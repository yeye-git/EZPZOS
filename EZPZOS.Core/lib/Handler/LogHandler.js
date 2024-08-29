"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogHandler = void 0;
var _Constants = require("../Common/Constants");
var fs = _interopRequireWildcard(require("fs"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LogHandler = exports.LogHandler = /*#__PURE__*/function () {
  /**
   *
   * @param className Name of current class initating this constructor
   * @param logLevel LogLevel set to logging, null | undefined otherwise not set, default -> {@link DefaultTargetLogLevel}
   */
  function LogHandler(className) {
    var logLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, LogHandler);
    this.className = className;
    if (logLevel === null || logLevel === undefined) this.logLevel = _Constants.DefaultTargetLogLevel;else this.logLevel = logLevel;
    if (process.env.PLATFORM !== _Constants.Platform.Web) {
      if (!fs.existsSync(_Constants.LogFilePath)) {
        fs.mkdirSync(_Constants.LogFilePath);
      }
      if (!fs.existsSync(_Constants.LogFilePath + "\\" + _Constants.LogFileName)) {
        fs.openSync(_Constants.LogFilePath + "\\" + _Constants.LogFileName, "wx");
      }
    }
  }
  return _createClass(LogHandler, [{
    key: "Log",
    value:
    /**
     *
     * @param functionName Name of Current function that is calling the Log
     * @param message Any Message for the logging
     * @param loglevel Refer to {@link LogLevel}
     * @returns void
     */
    function Log(functionName, message, loglevel) {
      var _LogLevelToString$log;
      var log = "[".concat(new Date().toLocaleString("en-AU"), "]\r\n[").concat(this.className, ".").concat(functionName, "] [").concat((_LogLevelToString$log = _Constants.LogLevelToString[loglevel]) !== null && _LogLevelToString$log !== void 0 ? _LogLevelToString$log : "ERROR", "]: ").concat(message, "\r\n");
      if (loglevel >= this.logLevel) return;
      console.log(log);
      if (process.env.PLATFORM !== _Constants.Platform.Web) {
        try {
          fs.writeFileSync(_Constants.LogFilePath + "/" + _Constants.LogFileName, log + "\r\n", {
            flag: "a"
          });
        } catch (ex) {
          console.log("Error Logging to file path: ".concat(_Constants.LogFilePath + "/" + _Constants.LogFileName));
        }
      }
    }
  }]);
}();
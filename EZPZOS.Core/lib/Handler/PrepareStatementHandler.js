"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreparedStatementHandler = void 0;
var _mssql = require("mssql");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PreparedStatementHandler = exports.PreparedStatementHandler = /*#__PURE__*/function () {
  function PreparedStatementHandler() {
    _classCallCheck(this, PreparedStatementHandler);
  }
  return _createClass(PreparedStatementHandler, null, [{
    key: "DefaultPrepareStatementInput",
    value: function DefaultPrepareStatementInput(preparedStatement) {
      preparedStatement.input("Id", _mssql.UniqueIdentifier);
      preparedStatement.input("CreatedTimestamp", _mssql.DateTime);
      preparedStatement.input("UpdatedTimestamp", _mssql.DateTime);
      preparedStatement.input("CreatedUserId", _mssql.UniqueIdentifier);
      preparedStatement.input("UpdatedUserId", _mssql.UniqueIdentifier);
      preparedStatement.input("IsDeleted", _mssql.Bit);
      return preparedStatement;
    }
  }, {
    key: "UserPrepareStatementInput",
    value: function UserPrepareStatementInput(preparedStatement) {
      preparedStatement = this.DefaultPrepareStatementInput(preparedStatement);
      preparedStatement.input("Username", (0, _mssql.NVarChar)(255));
      preparedStatement.input("Password", (0, _mssql.NVarChar)(200));
      preparedStatement.input("Salt", (0, _mssql.NVarChar)(200));
      preparedStatement.input("Email", (0, _mssql.NVarChar)(255));
      preparedStatement.input("Mobile", (0, _mssql.NVarChar)(50));
      preparedStatement.input("Avatar", (0, _mssql.VarChar)(_mssql.MAX));
      return preparedStatement;
    }
  }, {
    key: "EventPrepareStatementInput",
    value: function EventPrepareStatementInput(preparedStatement) {
      preparedStatement = this.DefaultPrepareStatementInput(preparedStatement);
      preparedStatement.input("EventCode", _mssql.Int);
      preparedStatement.input("EventTime", _mssql.DateTime);
      preparedStatement.input("ParentId", _mssql.UniqueIdentifier);
      preparedStatement.input("ParentTable", (0, _mssql.NVarChar)(255));
      return preparedStatement;
    }
  }, {
    key: "UserRolePrepareStatementInput",
    value: function UserRolePrepareStatementInput(preparedStatement) {
      preparedStatement = this.DefaultPrepareStatementInput(preparedStatement);
      preparedStatement.input("UserId", _mssql.UniqueIdentifier);
      preparedStatement.input("RoleId", _mssql.UniqueIdentifier);
      return preparedStatement;
    }
  }]);
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = All;
exports.Any = Any;
exports.Count = Count;
exports.First = void 0;
exports.IndexOf = IndexOf;
exports.Max = Max;
exports.ToArray = ToArray;
exports.Where = Where;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var First = exports.First = function First(dic, callback) {
  for (var _name in dic) {
    if (dic.hasOwnProperty(_name)) {
      callback(dic[_name]);
      return dic[_name];
    }
  }
  return null;
};
function Where(obj, callback) {
  if (_typeof(obj) === "object") {
    var tempDic = {};
    for (var key in obj) {
      var tempObj = tempDic[key];
      if (!callback(tempObj)) {
        tempDic[key] = tempObj;
      }
    }
    return tempDic;
  } else {
    return null;
  }
}
function ToArray(dic) {
  var arr = [];
  if (_typeof(dic) === "object") {
    var tempDic = dic;
    for (var _name2 in tempDic) {
      if (tempDic.hasOwnProperty(_name2)) {
        arr.push(tempDic[_name2]);
      }
    }
  }
  return arr;
}
function Any(obj, callback) {
  if (_typeof(obj) === "object") {
    var tempDic = obj;
    for (var key in tempDic) {
      var tempObj = tempDic[key];
      if (callback(tempObj)) {
        return true;
      }
    }
  }
  return false;
}
function All(obj, callback) {
  if (_typeof(obj) === "object") {
    var tempDic = obj;
    for (var key in tempDic) {
      var tempObj = tempDic[key];
      if (!callback(tempObj)) {
        return false;
      }
    }
  }
  return true;
}
function Count(arr, callback) {
  var count = 0;
  var _iterator = _createForOfIteratorHelper(arr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tempObj = _step.value;
      if (callback(tempObj)) {
        count++;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return count;
}
function Max(dic) {
  var max = 0;
  var name = "";
  for (var key in dic) {
    var temp = dic[key];
    if (temp > max) {
      max = temp;
      name = key;
    }
  }
  return name;
}
function IndexOf(dic, name) {
  var index = 0;
  for (var key in dic) {
    if (key == name) {
      return index;
    }
    index++;
  }
  return -1;
}
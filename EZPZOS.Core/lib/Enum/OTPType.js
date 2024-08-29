"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OTPType = void 0;
var OTPType = exports.OTPType = /*#__PURE__*/function (OTPType) {
  OTPType[OTPType["SignupOTP"] = 0] = "SignupOTP";
  OTPType[OTPType["LoginOTP"] = 1] = "LoginOTP";
  OTPType[OTPType["ResetPasswordOTP"] = 2] = "ResetPasswordOTP";
  return OTPType;
}({});
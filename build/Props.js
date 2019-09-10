"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CredentialProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CredentialProps = _propTypes["default"].shape({
  token: _propTypes["default"].string.isRequired,
  phone: _propTypes["default"].shape({
    country: _propTypes["default"].string.isRequired,
    number: _propTypes["default"].string.isRequired
  }).isRequired,
  roles: _propTypes["default"].array
});

exports.CredentialProps = CredentialProps;
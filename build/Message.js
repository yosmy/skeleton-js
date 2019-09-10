"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectionErrorMessage = exports.InternalErrorMessage = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _simpleUi = require("@yosmy/simple-ui");

var _compoundUi = require("@yosmy/compound-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InternalErrorMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InternalErrorMessage, _React$Component);

  function InternalErrorMessage() {
    _classCallCheck(this, InternalErrorMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(InternalErrorMessage).apply(this, arguments));
  }

  _createClass(InternalErrorMessage, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(Message, {
        texts: ["Se ha producido un error interno", "Nuestro equipo trabajará para solucionarlo", "Por favor intenta más tarde"]
      });
    }
  }]);

  return InternalErrorMessage;
}(_react["default"].Component);

exports.InternalErrorMessage = InternalErrorMessage;

var ConnectionErrorMessage =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ConnectionErrorMessage, _React$Component2);

  function ConnectionErrorMessage() {
    _classCallCheck(this, ConnectionErrorMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConnectionErrorMessage).apply(this, arguments));
  }

  _createClass(ConnectionErrorMessage, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(Message, {
        texts: ["Se ha producido un problema con la red", "Por favor comprueba tu conexión a internet"]
      });
    }
  }]);

  return ConnectionErrorMessage;
}(_react["default"].Component);

exports.ConnectionErrorMessage = ConnectionErrorMessage;

var Message =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Message, _React$Component3);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _getPrototypeOf(Message).apply(this, arguments));
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          texts = _this$props.texts,
          margin = _this$props.margin;
      return _react["default"].createElement(_simpleUi.Container, {
        flow: "column",
        align: {
          justifyContent: "flex-start",
          alignItems: "center"
        },
        margin: margin
      }, texts.map(function (message, i) {
        return _react["default"].createElement(_compoundUi.Error, {
          key: i,
          margin: {
            top: i !== 0 ? 1 : undefined
          }
        }, message);
      }));
    }
  }]);

  return Message;
}(_react["default"].Component);

_defineProperty(Message, "propTypes", {
  texts: _propTypes["default"].array.isRequired
});
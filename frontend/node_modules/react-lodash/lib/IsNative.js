'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsNative;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isNative = require('lodash/isNative');

var _isNative2 = _interopRequireDefault(_isNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsNative(props) {
  var value = (0, _isNative2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsNative.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
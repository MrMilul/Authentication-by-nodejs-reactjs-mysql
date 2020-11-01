'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsInteger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isInteger = require('lodash/isInteger');

var _isInteger2 = _interopRequireDefault(_isInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsInteger(props) {
  var value = (0, _isInteger2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsInteger.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
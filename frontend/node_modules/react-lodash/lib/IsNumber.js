'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsNumber;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isNumber = require('lodash/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsNumber(props) {
  var value = (0, _isNumber2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsNumber.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsString;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsString(props) {
  var value = (0, _isString2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsString.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
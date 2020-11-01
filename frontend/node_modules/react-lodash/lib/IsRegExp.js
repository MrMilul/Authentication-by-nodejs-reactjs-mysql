'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsRegExp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isRegExp = require('lodash/isRegExp');

var _isRegExp2 = _interopRequireDefault(_isRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsRegExp(props) {
  var value = (0, _isRegExp2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsRegExp.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
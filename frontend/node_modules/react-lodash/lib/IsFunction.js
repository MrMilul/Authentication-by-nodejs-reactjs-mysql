'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsFunction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsFunction(props) {
  var value = (0, _isFunction2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsFunction.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
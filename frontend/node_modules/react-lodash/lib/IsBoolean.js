'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsBoolean;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isBoolean = require('lodash/isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsBoolean(props) {
  var value = (0, _isBoolean2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsBoolean.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsNaN;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isNaN = require('lodash/isNaN');

var _isNaN2 = _interopRequireDefault(_isNaN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsNaN(props) {
  var value = (0, _isNaN2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsNaN.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
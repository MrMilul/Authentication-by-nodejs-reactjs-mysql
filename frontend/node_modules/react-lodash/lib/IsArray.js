'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsArray;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsArray(props) {
  var value = (0, _isArray2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsArray.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
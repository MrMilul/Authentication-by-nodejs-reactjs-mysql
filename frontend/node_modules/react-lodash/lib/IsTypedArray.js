'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsTypedArray;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isTypedArray = require('lodash/isTypedArray');

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsTypedArray(props) {
  var value = (0, _isTypedArray2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsTypedArray.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsArrayBuffer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isArrayBuffer = require('lodash/isArrayBuffer');

var _isArrayBuffer2 = _interopRequireDefault(_isArrayBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsArrayBuffer(props) {
  var value = (0, _isArrayBuffer2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsArrayBuffer.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsBuffer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isBuffer = require('lodash/isBuffer');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsBuffer(props) {
  var value = (0, _isBuffer2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsBuffer.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
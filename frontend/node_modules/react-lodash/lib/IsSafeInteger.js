'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsSafeInteger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isSafeInteger = require('lodash/isSafeInteger');

var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsSafeInteger(props) {
  var value = (0, _isSafeInteger2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsSafeInteger.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsLength;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isLength = require('lodash/isLength');

var _isLength2 = _interopRequireDefault(_isLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsLength(props) {
  var value = (0, _isLength2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsLength.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
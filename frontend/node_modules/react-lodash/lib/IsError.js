'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsError;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isError = require('lodash/isError');

var _isError2 = _interopRequireDefault(_isError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsError(props) {
  var value = (0, _isError2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsError.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
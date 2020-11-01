'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StartsWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _startsWith = require('lodash/startsWith');

var _startsWith2 = _interopRequireDefault(_startsWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StartsWith(props) {
  var value = (0, _startsWith2.default)(props.string, props.target, props.position);
  return value ? props.yes() : props.no();
}

StartsWith.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
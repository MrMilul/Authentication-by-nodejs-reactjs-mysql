'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EndsWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _endsWith = require('lodash/endsWith');

var _endsWith2 = _interopRequireDefault(_endsWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EndsWith(props) {
  var value = (0, _endsWith2.default)(props.string, props.target, props.position);
  return value ? props.yes() : props.no();
}

EndsWith.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
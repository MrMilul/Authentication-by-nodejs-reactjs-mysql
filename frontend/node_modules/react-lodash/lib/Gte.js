'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Gte;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gte = require('lodash/gte');

var _gte2 = _interopRequireDefault(_gte);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Gte(props) {
  var value = (0, _gte2.default)(props.value, props.other);
  return value ? props.yes() : props.no();
}

Gte.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Gt;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gt = require('lodash/gt');

var _gt2 = _interopRequireDefault(_gt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Gt(props) {
  var value = (0, _gt2.default)(props.value, props.other);
  return value ? props.yes() : props.no();
}

Gt.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
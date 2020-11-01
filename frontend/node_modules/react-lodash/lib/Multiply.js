'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Multiply;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _multiply = require('lodash/multiply');

var _multiply2 = _interopRequireDefault(_multiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Multiply(props) {
  return props.children((0, _multiply2.default)(props.multiplier, props.multiplicand));
}

Multiply.defaultProps = {
  children: function children(value) {
    return value;
  }
};
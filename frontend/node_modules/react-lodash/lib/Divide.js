'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Divide;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _divide = require('lodash/divide');

var _divide2 = _interopRequireDefault(_divide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Divide(props) {
  return props.children((0, _divide2.default)(props.dividend, props.divisor));
}

Divide.defaultProps = {
  children: function children(value) {
    return value;
  }
};
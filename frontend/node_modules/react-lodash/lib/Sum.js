'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sum;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sum = require('lodash/sum');

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sum(props) {
  return props.children((0, _sum2.default)(props.array));
}

Sum.defaultProps = {
  children: function children(value) {
    return value;
  }
};
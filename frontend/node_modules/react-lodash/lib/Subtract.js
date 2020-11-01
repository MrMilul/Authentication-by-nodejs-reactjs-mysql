'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Subtract;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _subtract = require('lodash/subtract');

var _subtract2 = _interopRequireDefault(_subtract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Subtract(props) {
  return props.children((0, _subtract2.default)(props.minuend, props.subtrahend));
}

Subtract.defaultProps = {
  children: function children(value) {
    return value;
  }
};
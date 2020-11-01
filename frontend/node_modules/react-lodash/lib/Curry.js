'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Curry;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _curry = require('lodash/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Curry(props) {
  return props.children((0, _curry2.default)(props.func, props.arity));
}

Curry.defaultProps = {
  children: function children(value) {
    return value;
  }
};
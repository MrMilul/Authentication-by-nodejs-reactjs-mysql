'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Memoize;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _memoize = require('lodash/memoize');

var _memoize2 = _interopRequireDefault(_memoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Memoize(props) {
  return props.children((0, _memoize2.default)(props.func, props.resolver));
}

Memoize.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tap = require('lodash/tap');

var _tap2 = _interopRequireDefault(_tap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tap(props) {
  return props.children((0, _tap2.default)(props.value, props.interceptor));
}

Tap.defaultProps = {
  children: function children(value) {
    return value;
  }
};
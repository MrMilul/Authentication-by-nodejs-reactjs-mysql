'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Wrap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _wrap = require('lodash/wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Wrap(props) {
  return props.children((0, _wrap2.default)(props.value, props.wrapper));
}

Wrap.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ary;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ary = require('lodash/ary');

var _ary2 = _interopRequireDefault(_ary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Ary(props) {
  return props.children((0, _ary2.default)(props.func, props.n));
}

Ary.defaultProps = {
  children: function children(value) {
    return value;
  }
};
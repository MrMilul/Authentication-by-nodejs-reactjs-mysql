'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = XorWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xorWith = require('lodash/xorWith');

var _xorWith2 = _interopRequireDefault(_xorWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function XorWith(props) {
  return props.children((0, _xorWith2.default)(props.arrays, props.comparator));
}

XorWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = XorBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xorBy = require('lodash/xorBy');

var _xorBy2 = _interopRequireDefault(_xorBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function XorBy(props) {
  return props.children((0, _xorBy2.default)(props.arrays, props.iteratee));
}

XorBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
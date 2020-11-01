'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Slice;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slice = require('lodash/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Slice(props) {
  return props.children((0, _slice2.default)(props.array, props.start, props.end));
}

Slice.defaultProps = {
  children: function children(value) {
    return value;
  }
};
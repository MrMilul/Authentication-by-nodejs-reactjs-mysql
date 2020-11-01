'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlattenDepth;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flattenDepth = require('lodash/flattenDepth');

var _flattenDepth2 = _interopRequireDefault(_flattenDepth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlattenDepth(props) {
  return props.children((0, _flattenDepth2.default)(props.array, props.depth));
}

FlattenDepth.defaultProps = {
  children: function children(value) {
    return value;
  }
};
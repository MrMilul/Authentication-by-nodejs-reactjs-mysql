'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SortedIndexOf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sortedIndexOf = require('lodash/sortedIndexOf');

var _sortedIndexOf2 = _interopRequireDefault(_sortedIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortedIndexOf(props) {
  return props.children((0, _sortedIndexOf2.default)(props.array, props.value));
}

SortedIndexOf.defaultProps = {
  children: function children(value) {
    return value;
  }
};
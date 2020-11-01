'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SortedLastIndexOf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sortedLastIndexOf = require('lodash/sortedLastIndexOf');

var _sortedLastIndexOf2 = _interopRequireDefault(_sortedLastIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortedLastIndexOf(props) {
  return props.children((0, _sortedLastIndexOf2.default)(props.array, props.value));
}

SortedLastIndexOf.defaultProps = {
  children: function children(value) {
    return value;
  }
};
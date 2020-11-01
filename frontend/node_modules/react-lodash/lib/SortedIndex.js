'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SortedIndex;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sortedIndex = require('lodash/sortedIndex');

var _sortedIndex2 = _interopRequireDefault(_sortedIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortedIndex(props) {
  return props.children((0, _sortedIndex2.default)(props.array, props.value));
}

SortedIndex.defaultProps = {
  children: function children(value) {
    return value;
  }
};
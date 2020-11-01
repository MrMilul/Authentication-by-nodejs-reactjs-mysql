'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SortedLastIndex;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sortedLastIndex = require('lodash/sortedLastIndex');

var _sortedLastIndex2 = _interopRequireDefault(_sortedLastIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortedLastIndex(props) {
  return props.children((0, _sortedLastIndex2.default)(props.array, props.value));
}

SortedLastIndex.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SortedIndexBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sortedIndexBy = require('lodash/sortedIndexBy');

var _sortedIndexBy2 = _interopRequireDefault(_sortedIndexBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortedIndexBy(props) {
  return props.children((0, _sortedIndexBy2.default)(props.array, props.value, props.iteratee));
}

SortedIndexBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
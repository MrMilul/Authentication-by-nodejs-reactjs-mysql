'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SortedLastIndexBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sortedLastIndexBy = require('lodash/sortedLastIndexBy');

var _sortedLastIndexBy2 = _interopRequireDefault(_sortedLastIndexBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortedLastIndexBy(props) {
  return props.children((0, _sortedLastIndexBy2.default)(props.array, props.value, props.iteratee));
}

SortedLastIndexBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
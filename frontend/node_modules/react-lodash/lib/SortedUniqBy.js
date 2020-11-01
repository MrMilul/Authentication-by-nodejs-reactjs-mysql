'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SortedUniqBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sortedUniqBy = require('lodash/sortedUniqBy');

var _sortedUniqBy2 = _interopRequireDefault(_sortedUniqBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortedUniqBy(props) {
  return props.children((0, _sortedUniqBy2.default)(props.array, props.iteratee));
}

SortedUniqBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
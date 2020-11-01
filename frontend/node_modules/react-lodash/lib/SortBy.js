'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SortBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sortBy = require('lodash/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortBy(props) {
  return props.children((0, _sortBy2.default)(props.collection, props.iteratees));
}

SortBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
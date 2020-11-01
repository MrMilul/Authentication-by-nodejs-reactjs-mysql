'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SortedUniq;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sortedUniq = require('lodash/sortedUniq');

var _sortedUniq2 = _interopRequireDefault(_sortedUniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortedUniq(props) {
  return props.children((0, _sortedUniq2.default)(props.array));
}

SortedUniq.defaultProps = {
  children: function children(value) {
    return value;
  }
};
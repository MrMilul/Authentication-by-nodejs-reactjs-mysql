'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GroupBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _groupBy = require('lodash/groupBy');

var _groupBy2 = _interopRequireDefault(_groupBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GroupBy(props) {
  return props.children((0, _groupBy2.default)(props.collection, props.iteratee));
}

GroupBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
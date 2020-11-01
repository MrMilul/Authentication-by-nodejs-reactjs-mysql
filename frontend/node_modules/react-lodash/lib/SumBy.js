'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SumBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sumBy = require('lodash/sumBy');

var _sumBy2 = _interopRequireDefault(_sumBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SumBy(props) {
  return props.children((0, _sumBy2.default)(props.array, props.iteratee));
}

SumBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
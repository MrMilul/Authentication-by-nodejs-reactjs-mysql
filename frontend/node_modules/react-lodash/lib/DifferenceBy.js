'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DifferenceBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _differenceBy = require('lodash/differenceBy');

var _differenceBy2 = _interopRequireDefault(_differenceBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DifferenceBy(props) {
  return props.children((0, _differenceBy2.default)(props.array, props.values, props.iteratee));
}

DifferenceBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
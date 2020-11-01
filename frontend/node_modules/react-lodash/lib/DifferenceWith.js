'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DifferenceWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _differenceWith = require('lodash/differenceWith');

var _differenceWith2 = _interopRequireDefault(_differenceWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DifferenceWith(props) {
  return props.children((0, _differenceWith2.default)(props.array, props.values, props.comparator));
}

DifferenceWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IntersectionWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _intersectionWith = require('lodash/intersectionWith');

var _intersectionWith2 = _interopRequireDefault(_intersectionWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntersectionWith(props) {
  return props.children((0, _intersectionWith2.default)(props.arrays, props.comparator));
}

IntersectionWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
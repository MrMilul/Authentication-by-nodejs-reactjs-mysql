'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IntersectionBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _intersectionBy = require('lodash/intersectionBy');

var _intersectionBy2 = _interopRequireDefault(_intersectionBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntersectionBy(props) {
  return props.children((0, _intersectionBy2.default)(props.arrays, props.iteratee));
}

IntersectionBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
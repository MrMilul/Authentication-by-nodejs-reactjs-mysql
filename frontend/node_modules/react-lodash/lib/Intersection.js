'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Intersection;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Intersection(props) {
  return props.children((0, _intersection2.default)(props.arrays));
}

Intersection.defaultProps = {
  children: function children(value) {
    return value;
  }
};
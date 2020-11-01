'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Union;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _union = require('lodash/union');

var _union2 = _interopRequireDefault(_union);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Union(props) {
  return props.children((0, _union2.default)(props.arrays));
}

Union.defaultProps = {
  children: function children(value) {
    return value;
  }
};
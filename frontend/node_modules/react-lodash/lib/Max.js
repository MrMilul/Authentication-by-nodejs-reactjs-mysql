'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Max;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _max = require('lodash/max');

var _max2 = _interopRequireDefault(_max);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Max(props) {
  return props.children((0, _max2.default)(props.array));
}

Max.defaultProps = {
  children: function children(value) {
    return value;
  }
};
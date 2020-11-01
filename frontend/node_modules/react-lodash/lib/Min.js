'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Min;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _min = require('lodash/min');

var _min2 = _interopRequireDefault(_min);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Min(props) {
  return props.children((0, _min2.default)(props.array));
}

Min.defaultProps = {
  children: function children(value) {
    return value;
  }
};
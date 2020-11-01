'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reverse;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reverse = require('lodash/reverse');

var _reverse2 = _interopRequireDefault(_reverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Reverse(props) {
  return props.children((0, _reverse2.default)(props.array));
}

Reverse.defaultProps = {
  children: function children(value) {
    return value;
  }
};
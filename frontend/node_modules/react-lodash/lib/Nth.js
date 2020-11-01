'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nth;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nth = require('lodash/nth');

var _nth2 = _interopRequireDefault(_nth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Nth(props) {
  return props.children((0, _nth2.default)(props.array, props.n));
}

Nth.defaultProps = {
  children: function children(value) {
    return value;
  }
};
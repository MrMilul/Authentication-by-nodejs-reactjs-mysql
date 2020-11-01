'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Concat;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _concat = require('lodash/concat');

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Concat(props) {
  return props.children((0, _concat2.default)(props.array, props.values));
}

Concat.defaultProps = {
  children: function children(value) {
    return value;
  }
};
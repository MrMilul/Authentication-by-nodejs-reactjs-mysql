'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Unary;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unary = require('lodash/unary');

var _unary2 = _interopRequireDefault(_unary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Unary(props) {
  return props.children((0, _unary2.default)(props.func));
}

Unary.defaultProps = {
  children: function children(value) {
    return value;
  }
};
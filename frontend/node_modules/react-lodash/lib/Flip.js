'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Flip;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flip = require('lodash/flip');

var _flip2 = _interopRequireDefault(_flip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flip(props) {
  return props.children((0, _flip2.default)(props.func));
}

Flip.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pad;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pad = require('lodash/pad');

var _pad2 = _interopRequireDefault(_pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pad(props) {
  return props.children((0, _pad2.default)(props.string, props.length, props.chars));
}

Pad.defaultProps = {
  children: function children(value) {
    return value;
  }
};
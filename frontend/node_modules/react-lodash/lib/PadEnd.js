'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PadEnd;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _padEnd = require('lodash/padEnd');

var _padEnd2 = _interopRequireDefault(_padEnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PadEnd(props) {
  return props.children((0, _padEnd2.default)(props.string, props.length, props.chars));
}

PadEnd.defaultProps = {
  children: function children(value) {
    return value;
  }
};
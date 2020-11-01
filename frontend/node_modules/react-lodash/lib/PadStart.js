'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PadStart;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _padStart = require('lodash/padStart');

var _padStart2 = _interopRequireDefault(_padStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PadStart(props) {
  return props.children((0, _padStart2.default)(props.string, props.length, props.chars));
}

PadStart.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Repeat;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _repeat = require('lodash/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Repeat(props) {
  return props.children((0, _repeat2.default)(props.string, props.n));
}

Repeat.defaultProps = {
  children: function children(value) {
    return value;
  }
};
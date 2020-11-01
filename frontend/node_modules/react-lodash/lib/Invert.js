'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Invert;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invert = require('lodash/invert');

var _invert2 = _interopRequireDefault(_invert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Invert(props) {
  return props.children((0, _invert2.default)(props.object));
}

Invert.defaultProps = {
  children: function children(value) {
    return value;
  }
};
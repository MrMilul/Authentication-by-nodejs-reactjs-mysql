'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Unescape;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unescape = require('lodash/unescape');

var _unescape2 = _interopRequireDefault(_unescape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Unescape(props) {
  return props.children((0, _unescape2.default)(props.string));
}

Unescape.defaultProps = {
  children: function children(value) {
    return value;
  }
};
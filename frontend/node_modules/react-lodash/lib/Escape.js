'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Escape;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _escape = require('lodash/escape');

var _escape2 = _interopRequireDefault(_escape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Escape(props) {
  return props.children((0, _escape2.default)(props.string));
}

Escape.defaultProps = {
  children: function children(value) {
    return value;
  }
};
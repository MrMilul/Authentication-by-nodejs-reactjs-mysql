'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EscapeRegExp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _escapeRegExp = require('lodash/escapeRegExp');

var _escapeRegExp2 = _interopRequireDefault(_escapeRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EscapeRegExp(props) {
  return props.children((0, _escapeRegExp2.default)(props.string));
}

EscapeRegExp.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToFinite;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toFinite = require('lodash/toFinite');

var _toFinite2 = _interopRequireDefault(_toFinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToFinite(props) {
  return props.children((0, _toFinite2.default)(props.value));
}

ToFinite.defaultProps = {
  children: function children(value) {
    return value;
  }
};
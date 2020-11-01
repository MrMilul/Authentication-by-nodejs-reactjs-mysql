'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Debounce;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Debounce(props) {
  return props.children((0, _debounce2.default)(props.func, props.wait, props.options));
}

Debounce.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Defer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defer = require('lodash/defer');

var _defer2 = _interopRequireDefault(_defer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Defer(props) {
  return props.children((0, _defer2.default)(props.func, props.args));
}

Defer.defaultProps = {
  children: function children(value) {
    return value;
  }
};
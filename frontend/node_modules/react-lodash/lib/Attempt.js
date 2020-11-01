'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Attempt;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _attempt = require('lodash/attempt');

var _attempt2 = _interopRequireDefault(_attempt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Attempt(props) {
  return props.children((0, _attempt2.default)(props.func, props.args));
}

Attempt.defaultProps = {
  children: function children(value) {
    return value;
  }
};
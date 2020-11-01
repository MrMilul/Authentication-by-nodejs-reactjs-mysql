'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Invoke;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invoke = require('lodash/invoke');

var _invoke2 = _interopRequireDefault(_invoke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Invoke(props) {
  return props.children((0, _invoke2.default)(props.object, props.path, props.args));
}

Invoke.defaultProps = {
  children: function children(value) {
    return value;
  }
};
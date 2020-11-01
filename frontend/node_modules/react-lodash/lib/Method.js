'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Method;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _method = require('lodash/method');

var _method2 = _interopRequireDefault(_method);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Method(props) {
  return props.children((0, _method2.default)(props.path, props.args));
}

Method.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Bind;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('lodash/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bind(props) {
  return props.children((0, _bind2.default)(props.func, props.thisArg, props.partials));
}

Bind.defaultProps = {
  children: function children(value) {
    return value;
  }
};
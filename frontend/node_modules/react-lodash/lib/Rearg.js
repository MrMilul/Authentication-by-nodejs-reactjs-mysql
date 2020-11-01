'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Rearg;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rearg = require('lodash/rearg');

var _rearg2 = _interopRequireDefault(_rearg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Rearg(props) {
  return props.children((0, _rearg2.default)(props.func, props.indexes));
}

Rearg.defaultProps = {
  children: function children(value) {
    return value;
  }
};
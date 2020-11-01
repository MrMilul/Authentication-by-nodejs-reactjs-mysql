'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mixin;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixin = require('lodash/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Mixin(props) {
  return props.children((0, _mixin2.default)(props.object, props.source, props.options));
}

Mixin.defaultProps = {
  children: function children(value) {
    return value;
  }
};
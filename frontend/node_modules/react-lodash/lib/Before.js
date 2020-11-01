'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Before;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _before = require('lodash/before');

var _before2 = _interopRequireDefault(_before);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Before(props) {
  return props.children((0, _before2.default)(props.n, props.func));
}

Before.defaultProps = {
  children: function children(value) {
    return value;
  }
};
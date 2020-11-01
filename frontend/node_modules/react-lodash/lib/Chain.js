'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Chain;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chain = require('lodash/chain');

var _chain2 = _interopRequireDefault(_chain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Chain(props) {
  return props.children((0, _chain2.default)(props.value));
}

Chain.defaultProps = {
  children: function children(value) {
    return value;
  }
};
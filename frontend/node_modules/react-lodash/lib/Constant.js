'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Constant;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constant = require('lodash/constant');

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Constant(props) {
  return props.children((0, _constant2.default)(props.value));
}

Constant.defaultProps = {
  children: function children(value) {
    return value;
  }
};
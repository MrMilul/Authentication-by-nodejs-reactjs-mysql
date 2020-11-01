'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Xor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xor = require('lodash/xor');

var _xor2 = _interopRequireDefault(_xor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Xor(props) {
  return props.children((0, _xor2.default)(props.arrays));
}

Xor.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToNumber;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toNumber = require('lodash/toNumber');

var _toNumber2 = _interopRequireDefault(_toNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToNumber(props) {
  return props.children((0, _toNumber2.default)(props.value));
}

ToNumber.defaultProps = {
  children: function children(value) {
    return value;
  }
};
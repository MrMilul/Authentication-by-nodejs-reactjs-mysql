'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToInteger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toInteger = require('lodash/toInteger');

var _toInteger2 = _interopRequireDefault(_toInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToInteger(props) {
  return props.children((0, _toInteger2.default)(props.value));
}

ToInteger.defaultProps = {
  children: function children(value) {
    return value;
  }
};
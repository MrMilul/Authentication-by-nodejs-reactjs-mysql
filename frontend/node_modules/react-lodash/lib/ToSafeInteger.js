'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToSafeInteger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toSafeInteger = require('lodash/toSafeInteger');

var _toSafeInteger2 = _interopRequireDefault(_toSafeInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToSafeInteger(props) {
  return props.children((0, _toSafeInteger2.default)(props.value));
}

ToSafeInteger.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToLength;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toLength = require('lodash/toLength');

var _toLength2 = _interopRequireDefault(_toLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToLength(props) {
  return props.children((0, _toLength2.default)(props.value));
}

ToLength.defaultProps = {
  children: function children(value) {
    return value;
  }
};
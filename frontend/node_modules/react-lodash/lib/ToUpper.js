'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToUpper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toUpper = require('lodash/toUpper');

var _toUpper2 = _interopRequireDefault(_toUpper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToUpper(props) {
  return props.children((0, _toUpper2.default)(props.string));
}

ToUpper.defaultProps = {
  children: function children(value) {
    return value;
  }
};
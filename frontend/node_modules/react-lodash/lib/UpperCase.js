'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UpperCase;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _upperCase = require('lodash/upperCase');

var _upperCase2 = _interopRequireDefault(_upperCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpperCase(props) {
  return props.children((0, _upperCase2.default)(props.string));
}

UpperCase.defaultProps = {
  children: function children(value) {
    return value;
  }
};
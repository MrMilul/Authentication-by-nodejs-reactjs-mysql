'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LowerCase;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lowerCase = require('lodash/lowerCase');

var _lowerCase2 = _interopRequireDefault(_lowerCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LowerCase(props) {
  return props.children((0, _lowerCase2.default)(props.string));
}

LowerCase.defaultProps = {
  children: function children(value) {
    return value;
  }
};
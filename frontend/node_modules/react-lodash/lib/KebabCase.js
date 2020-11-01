'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KebabCase;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _kebabCase = require('lodash/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KebabCase(props) {
  return props.children((0, _kebabCase2.default)(props.string));
}

KebabCase.defaultProps = {
  children: function children(value) {
    return value;
  }
};
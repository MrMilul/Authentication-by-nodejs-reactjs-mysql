'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Capitalize;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _capitalize = require('lodash/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Capitalize(props) {
  return props.children((0, _capitalize2.default)(props.string));
}

Capitalize.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DefaultTo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaultTo = require('lodash/defaultTo');

var _defaultTo2 = _interopRequireDefault(_defaultTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DefaultTo(props) {
  return props.children((0, _defaultTo2.default)(props.value, props.defaultValue));
}

DefaultTo.defaultProps = {
  children: function children(value) {
    return value;
  }
};
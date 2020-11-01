'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Without;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _without = require('lodash/without');

var _without2 = _interopRequireDefault(_without);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Without(props) {
  return props.children((0, _without2.default)(props.array, props.values));
}

Without.defaultProps = {
  children: function children(value) {
    return value;
  }
};
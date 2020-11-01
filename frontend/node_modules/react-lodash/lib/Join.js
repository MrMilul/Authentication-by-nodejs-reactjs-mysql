'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Join;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _join = require('lodash/join');

var _join2 = _interopRequireDefault(_join);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Join(props) {
  return props.children((0, _join2.default)(props.array, props.separator));
}

Join.defaultProps = {
  children: function children(value) {
    return value;
  }
};
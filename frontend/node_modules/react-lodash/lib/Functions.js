'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Functions;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _functions = require('lodash/functions');

var _functions2 = _interopRequireDefault(_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Functions(props) {
  return props.children((0, _functions2.default)(props.object));
}

Functions.defaultProps = {
  children: function children(value) {
    return value;
  }
};
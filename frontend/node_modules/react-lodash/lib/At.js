'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = At;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _at = require('lodash/at');

var _at2 = _interopRequireDefault(_at);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function At(props) {
  return props.children((0, _at2.default)(props.object, props.paths));
}

At.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Trim;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trim = require('lodash/trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Trim(props) {
  return props.children((0, _trim2.default)(props.string, props.chars));
}

Trim.defaultProps = {
  children: function children(value) {
    return value;
  }
};
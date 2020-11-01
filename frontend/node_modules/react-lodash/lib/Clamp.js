'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Clamp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clamp = require('lodash/clamp');

var _clamp2 = _interopRequireDefault(_clamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Clamp(props) {
  return props.children((0, _clamp2.default)(props.number, props.lower, props.upper));
}

Clamp.defaultProps = {
  children: function children(value) {
    return value;
  }
};
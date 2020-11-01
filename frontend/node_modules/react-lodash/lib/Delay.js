'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Delay;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _delay = require('lodash/delay');

var _delay2 = _interopRequireDefault(_delay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Delay(props) {
  return props.children((0, _delay2.default)(props.func, props.wait, props.args));
}

Delay.defaultProps = {
  children: function children(value) {
    return value;
  }
};
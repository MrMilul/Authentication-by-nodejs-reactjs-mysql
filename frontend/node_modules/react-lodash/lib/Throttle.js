'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Throttle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Throttle(props) {
  return props.children((0, _throttle2.default)(props.func, props.wait, props.options));
}

Throttle.defaultProps = {
  children: function children(value) {
    return value;
  }
};
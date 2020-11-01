'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OverArgs;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _overArgs = require('lodash/overArgs');

var _overArgs2 = _interopRequireDefault(_overArgs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OverArgs(props) {
  return props.children((0, _overArgs2.default)(props.func, props.transforms));
}

OverArgs.defaultProps = {
  children: function children(value) {
    return value;
  }
};
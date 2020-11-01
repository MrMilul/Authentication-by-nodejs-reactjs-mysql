'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spread;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _spread = require('lodash/spread');

var _spread2 = _interopRequireDefault(_spread);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Spread(props) {
  return props.children((0, _spread2.default)(props.func, props.start));
}

Spread.defaultProps = {
  children: function children(value) {
    return value;
  }
};
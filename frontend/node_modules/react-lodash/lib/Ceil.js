'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ceil;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ceil = require('lodash/ceil');

var _ceil2 = _interopRequireDefault(_ceil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Ceil(props) {
  return props.children((0, _ceil2.default)(props.number, props.precision));
}

Ceil.defaultProps = {
  children: function children(value) {
    return value;
  }
};
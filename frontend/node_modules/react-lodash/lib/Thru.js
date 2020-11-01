'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Thru;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _thru = require('lodash/thru');

var _thru2 = _interopRequireDefault(_thru);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Thru(props) {
  return props.children((0, _thru2.default)(props.value, props.interceptor));
}

Thru.defaultProps = {
  children: function children(value) {
    return value;
  }
};
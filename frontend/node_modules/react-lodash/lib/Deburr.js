'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Deburr;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deburr = require('lodash/deburr');

var _deburr2 = _interopRequireDefault(_deburr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Deburr(props) {
  return props.children((0, _deburr2.default)(props.string));
}

Deburr.defaultProps = {
  children: function children(value) {
    return value;
  }
};
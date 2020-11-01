'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lte;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lte = require('lodash/lte');

var _lte2 = _interopRequireDefault(_lte);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lte(props) {
  var value = (0, _lte2.default)(props.value, props.other);
  return value ? props.yes() : props.no();
}

Lte.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsSymbol;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isSymbol = require('lodash/isSymbol');

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsSymbol(props) {
  var value = (0, _isSymbol2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsSymbol.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsNil;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isNil = require('lodash/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsNil(props) {
  var value = (0, _isNil2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsNil.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
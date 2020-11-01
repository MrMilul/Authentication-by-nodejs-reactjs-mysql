'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsUndefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isUndefined = require('lodash/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsUndefined(props) {
  var value = (0, _isUndefined2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsUndefined.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
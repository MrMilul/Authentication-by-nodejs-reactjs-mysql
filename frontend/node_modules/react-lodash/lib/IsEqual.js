'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsEqual;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsEqual(props) {
  var value = (0, _isEqual2.default)(props.value, props.other);
  return value ? props.yes() : props.no();
}

IsEqual.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
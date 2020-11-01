'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsDate;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isDate = require('lodash/isDate');

var _isDate2 = _interopRequireDefault(_isDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsDate(props) {
  var value = (0, _isDate2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsDate.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
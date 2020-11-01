'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsEmpty;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsEmpty(props) {
  var value = (0, _isEmpty2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsEmpty.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
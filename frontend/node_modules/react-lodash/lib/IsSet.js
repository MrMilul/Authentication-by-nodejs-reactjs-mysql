'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsSet;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isSet = require('lodash/isSet');

var _isSet2 = _interopRequireDefault(_isSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsSet(props) {
  var value = (0, _isSet2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsSet.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
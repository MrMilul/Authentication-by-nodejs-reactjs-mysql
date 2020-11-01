'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsNull;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isNull = require('lodash/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsNull(props) {
  var value = (0, _isNull2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsNull.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
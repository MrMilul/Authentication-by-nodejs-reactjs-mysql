'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsWeakMap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isWeakMap = require('lodash/isWeakMap');

var _isWeakMap2 = _interopRequireDefault(_isWeakMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsWeakMap(props) {
  var value = (0, _isWeakMap2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsWeakMap.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
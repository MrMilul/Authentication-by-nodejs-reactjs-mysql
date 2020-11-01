'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsWeakSet;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isWeakSet = require('lodash/isWeakSet');

var _isWeakSet2 = _interopRequireDefault(_isWeakSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsWeakSet(props) {
  var value = (0, _isWeakSet2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsWeakSet.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
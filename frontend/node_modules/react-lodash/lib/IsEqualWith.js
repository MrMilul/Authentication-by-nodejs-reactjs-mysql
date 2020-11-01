'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsEqualWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEqualWith = require('lodash/isEqualWith');

var _isEqualWith2 = _interopRequireDefault(_isEqualWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsEqualWith(props) {
  var value = (0, _isEqualWith2.default)(props.value, props.other, props.customizer);
  return value ? props.yes() : props.no();
}

IsEqualWith.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
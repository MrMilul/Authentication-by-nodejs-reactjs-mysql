'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsPlainObject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsPlainObject(props) {
  var value = (0, _isPlainObject2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsPlainObject.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
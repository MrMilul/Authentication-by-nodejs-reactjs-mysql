'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsObject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsObject(props) {
  var value = (0, _isObject2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsObject.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
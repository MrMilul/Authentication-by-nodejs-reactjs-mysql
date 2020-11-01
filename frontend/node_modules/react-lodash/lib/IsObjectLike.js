'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsObjectLike;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isObjectLike = require('lodash/isObjectLike');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsObjectLike(props) {
  var value = (0, _isObjectLike2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsObjectLike.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
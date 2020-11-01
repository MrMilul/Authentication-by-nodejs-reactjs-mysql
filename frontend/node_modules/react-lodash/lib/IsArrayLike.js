'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsArrayLike;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isArrayLike = require('lodash/isArrayLike');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsArrayLike(props) {
  var value = (0, _isArrayLike2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsArrayLike.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
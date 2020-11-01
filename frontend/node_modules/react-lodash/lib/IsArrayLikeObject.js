'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsArrayLikeObject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isArrayLikeObject = require('lodash/isArrayLikeObject');

var _isArrayLikeObject2 = _interopRequireDefault(_isArrayLikeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsArrayLikeObject(props) {
  var value = (0, _isArrayLikeObject2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsArrayLikeObject.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
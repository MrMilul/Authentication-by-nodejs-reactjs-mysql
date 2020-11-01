'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsElement;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isElement = require('lodash/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsElement(props) {
  var value = (0, _isElement2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsElement.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsArguments;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isArguments = require('lodash/isArguments');

var _isArguments2 = _interopRequireDefault(_isArguments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsArguments(props) {
  var value = (0, _isArguments2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsArguments.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
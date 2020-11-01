'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsMatch;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isMatch = require('lodash/isMatch');

var _isMatch2 = _interopRequireDefault(_isMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsMatch(props) {
  var value = (0, _isMatch2.default)(props.object, props.source);
  return value ? props.yes() : props.no();
}

IsMatch.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
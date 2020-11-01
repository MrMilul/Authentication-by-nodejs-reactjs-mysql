'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsFinite;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isFinite = require('lodash/isFinite');

var _isFinite2 = _interopRequireDefault(_isFinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsFinite(props) {
  var value = (0, _isFinite2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsFinite.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
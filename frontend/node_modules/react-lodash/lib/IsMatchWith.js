'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsMatchWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isMatchWith = require('lodash/isMatchWith');

var _isMatchWith2 = _interopRequireDefault(_isMatchWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsMatchWith(props) {
  var value = (0, _isMatchWith2.default)(props.object, props.source, props.customizer);
  return value ? props.yes() : props.no();
}

IsMatchWith.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
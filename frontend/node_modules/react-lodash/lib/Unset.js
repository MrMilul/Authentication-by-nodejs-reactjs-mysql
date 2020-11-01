'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Unset;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unset = require('lodash/unset');

var _unset2 = _interopRequireDefault(_unset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Unset(props) {
  var value = (0, _unset2.default)(props.object, props.path);
  return value ? props.yes() : props.no();
}

Unset.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
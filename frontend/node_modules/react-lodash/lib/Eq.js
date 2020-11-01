'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Eq;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _eq = require('lodash/eq');

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Eq(props) {
  var value = (0, _eq2.default)(props.value, props.other);
  return value ? props.yes() : props.no();
}

Eq.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
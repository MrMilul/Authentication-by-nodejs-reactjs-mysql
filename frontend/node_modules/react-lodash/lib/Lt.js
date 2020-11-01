'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lt;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lt = require('lodash/lt');

var _lt2 = _interopRequireDefault(_lt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lt(props) {
  var value = (0, _lt2.default)(props.value, props.other);
  return value ? props.yes() : props.no();
}

Lt.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Includes;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Includes(props) {
  var value = (0, _includes2.default)(props.collection, props.value, props.fromIndex);
  return value ? props.yes() : props.no();
}

Includes.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
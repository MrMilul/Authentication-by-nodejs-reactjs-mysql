'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StubTrue;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stubTrue = require('lodash/stubTrue');

var _stubTrue2 = _interopRequireDefault(_stubTrue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StubTrue(props) {
  var value = (0, _stubTrue2.default)();
  return value ? props.yes() : props.no();
}

StubTrue.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
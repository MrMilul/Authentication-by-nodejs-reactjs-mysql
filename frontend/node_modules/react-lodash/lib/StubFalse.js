'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StubFalse;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stubFalse = require('lodash/stubFalse');

var _stubFalse2 = _interopRequireDefault(_stubFalse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StubFalse(props) {
  var value = (0, _stubFalse2.default)();
  return value ? props.yes() : props.no();
}

StubFalse.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
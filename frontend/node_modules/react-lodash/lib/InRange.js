'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InRange;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inRange = require('lodash/inRange');

var _inRange2 = _interopRequireDefault(_inRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InRange(props) {
  var value = (0, _inRange2.default)(props.number, props.start, props.end);
  return value ? props.yes() : props.no();
}

InRange.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
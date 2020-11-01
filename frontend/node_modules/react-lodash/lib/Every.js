'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Every;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _every = require('lodash/every');

var _every2 = _interopRequireDefault(_every);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Every(props) {
  var value = (0, _every2.default)(props.collection, props.predicate);
  return value ? props.yes() : props.no();
}

Every.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HasIn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hasIn = require('lodash/hasIn');

var _hasIn2 = _interopRequireDefault(_hasIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HasIn(props) {
  var value = (0, _hasIn2.default)(props.object, props.path);
  return value ? props.yes() : props.no();
}

HasIn.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
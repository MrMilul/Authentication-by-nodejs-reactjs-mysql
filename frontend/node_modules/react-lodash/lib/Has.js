'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Has;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has = require('lodash/has');

var _has2 = _interopRequireDefault(_has);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Has(props) {
  var value = (0, _has2.default)(props.object, props.path);
  return value ? props.yes() : props.no();
}

Has.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
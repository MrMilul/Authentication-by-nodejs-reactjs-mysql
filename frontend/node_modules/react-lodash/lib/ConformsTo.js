'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ConformsTo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _conformsTo = require('lodash/conformsTo');

var _conformsTo2 = _interopRequireDefault(_conformsTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ConformsTo(props) {
  var value = (0, _conformsTo2.default)(props.object, props.source);
  return value ? props.yes() : props.no();
}

ConformsTo.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
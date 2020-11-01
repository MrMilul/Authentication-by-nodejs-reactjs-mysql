'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Some;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _some = require('lodash/some');

var _some2 = _interopRequireDefault(_some);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Some(props) {
  var value = (0, _some2.default)(props.collection, props.predicate);
  return value ? props.yes() : props.no();
}

Some.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MethodOf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _methodOf = require('lodash/methodOf');

var _methodOf2 = _interopRequireDefault(_methodOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MethodOf(props) {
  return props.children((0, _methodOf2.default)(props.object, props.args));
}

MethodOf.defaultProps = {
  children: function children(value) {
    return value;
  }
};
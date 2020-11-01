'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExtendWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extendWith = require('lodash/extendWith');

var _extendWith2 = _interopRequireDefault(_extendWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExtendWith(props) {
  return props.children((0, _extendWith2.default)(props.object, props.sources, props.customizer));
}

ExtendWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
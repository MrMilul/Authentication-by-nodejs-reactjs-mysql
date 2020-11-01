'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IndexOf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _indexOf = require('lodash/indexOf');

var _indexOf2 = _interopRequireDefault(_indexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IndexOf(props) {
  return props.children((0, _indexOf2.default)(props.array, props.value, props.fromIndex));
}

IndexOf.defaultProps = {
  children: function children(value) {
    return value;
  }
};
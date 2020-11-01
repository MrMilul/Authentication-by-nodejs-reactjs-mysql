'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Size;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _size = require('lodash/size');

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Size(props) {
  return props.children((0, _size2.default)(props.collection));
}

Size.defaultProps = {
  children: function children(value) {
    return value;
  }
};
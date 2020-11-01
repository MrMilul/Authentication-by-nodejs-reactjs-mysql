'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TrimStart;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trimStart = require('lodash/trimStart');

var _trimStart2 = _interopRequireDefault(_trimStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TrimStart(props) {
  return props.children((0, _trimStart2.default)(props.string, props.chars));
}

TrimStart.defaultProps = {
  children: function children(value) {
    return value;
  }
};
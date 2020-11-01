'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TrimEnd;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trimEnd = require('lodash/trimEnd');

var _trimEnd2 = _interopRequireDefault(_trimEnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TrimEnd(props) {
  return props.children((0, _trimEnd2.default)(props.string, props.chars));
}

TrimEnd.defaultProps = {
  children: function children(value) {
    return value;
  }
};
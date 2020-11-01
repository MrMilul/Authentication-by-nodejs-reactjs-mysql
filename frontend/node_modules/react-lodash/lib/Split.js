'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Split;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _split = require('lodash/split');

var _split2 = _interopRequireDefault(_split);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Split(props) {
  return props.children((0, _split2.default)(props.string, props.separator, props.limit));
}

Split.defaultProps = {
  children: function children(value) {
    return value;
  }
};
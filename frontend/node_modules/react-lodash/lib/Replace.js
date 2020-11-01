'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Replace;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _replace = require('lodash/replace');

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Replace(props) {
  return props.children((0, _replace2.default)(props.string, props.pattern, props.replacement));
}

Replace.defaultProps = {
  children: function children(value) {
    return value;
  }
};
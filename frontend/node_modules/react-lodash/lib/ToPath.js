'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToPath;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toPath = require('lodash/toPath');

var _toPath2 = _interopRequireDefault(_toPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToPath(props) {
  return props.children((0, _toPath2.default)(props.value));
}

ToPath.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LastIndexOf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lastIndexOf = require('lodash/lastIndexOf');

var _lastIndexOf2 = _interopRequireDefault(_lastIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LastIndexOf(props) {
  return props.children((0, _lastIndexOf2.default)(props.array, props.value, props.fromIndex));
}

LastIndexOf.defaultProps = {
  children: function children(value) {
    return value;
  }
};
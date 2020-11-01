'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToArray;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toArray = require('lodash/toArray');

var _toArray2 = _interopRequireDefault(_toArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToArray(props) {
  return props.children((0, _toArray2.default)(props.value));
}

ToArray.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LowerFirst;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lowerFirst = require('lodash/lowerFirst');

var _lowerFirst2 = _interopRequireDefault(_lowerFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LowerFirst(props) {
  return props.children((0, _lowerFirst2.default)(props.string));
}

LowerFirst.defaultProps = {
  children: function children(value) {
    return value;
  }
};
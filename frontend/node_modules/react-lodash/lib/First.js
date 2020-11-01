'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = First;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _first = require('lodash/first');

var _first2 = _interopRequireDefault(_first);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function First(props) {
  return props.children((0, _first2.default)(props.array));
}

First.defaultProps = {
  children: function children(value) {
    return value;
  }
};
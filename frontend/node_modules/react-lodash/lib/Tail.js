'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tail;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tail = require('lodash/tail');

var _tail2 = _interopRequireDefault(_tail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tail(props) {
  return props.children((0, _tail2.default)(props.array));
}

Tail.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SnakeCase;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _snakeCase = require('lodash/snakeCase');

var _snakeCase2 = _interopRequireDefault(_snakeCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SnakeCase(props) {
  return props.children((0, _snakeCase2.default)(props.string));
}

SnakeCase.defaultProps = {
  children: function children(value) {
    return value;
  }
};
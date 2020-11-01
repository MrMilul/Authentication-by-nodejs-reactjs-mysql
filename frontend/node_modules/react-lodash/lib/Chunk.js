'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Chunk;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chunk = require('lodash/chunk');

var _chunk2 = _interopRequireDefault(_chunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Chunk(props) {
  return props.children((0, _chunk2.default)(props.array, props.size));
}

Chunk.defaultProps = {
  children: function children(value) {
    return value;
  }
};
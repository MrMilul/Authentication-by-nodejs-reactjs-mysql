'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropWhile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dropWhile = require('lodash/dropWhile');

var _dropWhile2 = _interopRequireDefault(_dropWhile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropWhile(props) {
  return props.children((0, _dropWhile2.default)(props.array, props.predicate));
}

DropWhile.defaultProps = {
  children: function children(value) {
    return value;
  }
};
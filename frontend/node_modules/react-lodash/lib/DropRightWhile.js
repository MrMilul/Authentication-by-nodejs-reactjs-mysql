'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropRightWhile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dropRightWhile = require('lodash/dropRightWhile');

var _dropRightWhile2 = _interopRequireDefault(_dropRightWhile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropRightWhile(props) {
  return props.children((0, _dropRightWhile2.default)(props.array, props.predicate));
}

DropRightWhile.defaultProps = {
  children: function children(value) {
    return value;
  }
};
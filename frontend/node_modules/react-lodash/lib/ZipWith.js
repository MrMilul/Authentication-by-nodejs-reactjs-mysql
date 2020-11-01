'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ZipWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _zipWith = require('lodash/zipWith');

var _zipWith2 = _interopRequireDefault(_zipWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ZipWith(props) {
  return props.children((0, _zipWith2.default)(props.arrays, props.iteratee));
}

ZipWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
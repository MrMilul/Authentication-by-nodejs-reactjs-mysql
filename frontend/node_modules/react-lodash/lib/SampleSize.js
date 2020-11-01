'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SampleSize;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sampleSize = require('lodash/sampleSize');

var _sampleSize2 = _interopRequireDefault(_sampleSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SampleSize(props) {
  return props.children((0, _sampleSize2.default)(props.collection, props.n));
}

SampleSize.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReduceRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduceRight = require('lodash/reduceRight');

var _reduceRight2 = _interopRequireDefault(_reduceRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReduceRight(props) {
  return props.children((0, _reduceRight2.default)(props.collection, props.iteratee, props.accumulator));
}

ReduceRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
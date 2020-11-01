'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RangeRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rangeRight = require('lodash/rangeRight');

var _rangeRight2 = _interopRequireDefault(_rangeRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RangeRight(props) {
  return props.children((0, _rangeRight2.default)(props.start, props.end, props.step));
}

RangeRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reduce;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduce = require('lodash/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Reduce(props) {
  return props.children((0, _reduce2.default)(props.collection, props.iteratee, props.accumulator));
}

Reduce.defaultProps = {
  children: function children(value) {
    return value;
  }
};
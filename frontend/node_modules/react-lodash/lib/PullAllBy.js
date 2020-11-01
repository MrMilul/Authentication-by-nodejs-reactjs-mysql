'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PullAllBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pullAllBy = require('lodash/pullAllBy');

var _pullAllBy2 = _interopRequireDefault(_pullAllBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PullAllBy(props) {
  return props.children((0, _pullAllBy2.default)(props.array, props.values, props.iteratee));
}

PullAllBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
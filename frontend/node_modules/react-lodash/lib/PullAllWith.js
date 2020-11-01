'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PullAllWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pullAllWith = require('lodash/pullAllWith');

var _pullAllWith2 = _interopRequireDefault(_pullAllWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PullAllWith(props) {
  return props.children((0, _pullAllWith2.default)(props.array, props.values, props.comparator));
}

PullAllWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PullAt;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pullAt = require('lodash/pullAt');

var _pullAt2 = _interopRequireDefault(_pullAt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PullAt(props) {
  return props.children((0, _pullAt2.default)(props.array, props.indexes));
}

PullAt.defaultProps = {
  children: function children(value) {
    return value;
  }
};
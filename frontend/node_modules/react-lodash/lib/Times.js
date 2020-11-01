'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Times;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Times(props) {
  return props.children((0, _times2.default)(props.n, props.iteratee));
}

Times.defaultProps = {
  children: function children(value) {
    return value;
  }
};
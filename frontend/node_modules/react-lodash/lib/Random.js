'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Random;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _random = require('lodash/random');

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Random(props) {
  return props.children((0, _random2.default)(props.lower, props.upper, props.floating));
}

Random.defaultProps = {
  children: function children(value) {
    return value;
  }
};
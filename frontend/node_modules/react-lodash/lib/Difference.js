'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Difference;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _difference = require('lodash/difference');

var _difference2 = _interopRequireDefault(_difference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Difference(props) {
  return props.children((0, _difference2.default)(props.array, props.values));
}

Difference.defaultProps = {
  children: function children(value) {
    return value;
  }
};
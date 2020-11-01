'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Flatten;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flatten(props) {
  return props.children((0, _flatten2.default)(props.array));
}

Flatten.defaultProps = {
  children: function children(value) {
    return value;
  }
};
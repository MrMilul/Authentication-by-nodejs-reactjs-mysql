'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UpperFirst;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpperFirst(props) {
  return props.children((0, _upperFirst2.default)(props.string));
}

UpperFirst.defaultProps = {
  children: function children(value) {
    return value;
  }
};
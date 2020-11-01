'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Take;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _take = require('lodash/take');

var _take2 = _interopRequireDefault(_take);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Take(props) {
  return props.children((0, _take2.default)(props.array, props.n));
}

Take.defaultProps = {
  children: function children(value) {
    return value;
  }
};
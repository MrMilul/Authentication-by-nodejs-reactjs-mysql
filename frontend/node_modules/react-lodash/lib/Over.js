'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Over;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _over = require('lodash/over');

var _over2 = _interopRequireDefault(_over);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Over(props) {
  return props.children((0, _over2.default)(props.iteratees));
}

Over.defaultProps = {
  children: function children(value) {
    return value;
  }
};
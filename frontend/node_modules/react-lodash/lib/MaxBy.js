'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MaxBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _maxBy = require('lodash/maxBy');

var _maxBy2 = _interopRequireDefault(_maxBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MaxBy(props) {
  return props.children((0, _maxBy2.default)(props.array, props.iteratee));
}

MaxBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MinBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _minBy = require('lodash/minBy');

var _minBy2 = _interopRequireDefault(_minBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MinBy(props) {
  return props.children((0, _minBy2.default)(props.array, props.iteratee));
}

MinBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
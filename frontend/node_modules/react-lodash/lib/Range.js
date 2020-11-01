'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Range;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _range = require('lodash/range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Range(props) {
  return props.children((0, _range2.default)(props.start, props.end, props.step));
}

Range.defaultProps = {
  children: function children(value) {
    return value;
  }
};
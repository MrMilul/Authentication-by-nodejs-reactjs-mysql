'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Fill;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fill = require('lodash/fill');

var _fill2 = _interopRequireDefault(_fill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Fill(props) {
  return props.children((0, _fill2.default)(props.array, props.value, props.start, props.end));
}

Fill.defaultProps = {
  children: function children(value) {
    return value;
  }
};
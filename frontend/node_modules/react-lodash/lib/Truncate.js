'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Truncate;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _truncate = require('lodash/truncate');

var _truncate2 = _interopRequireDefault(_truncate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Truncate(props) {
  return props.children((0, _truncate2.default)(props.string, props.options));
}

Truncate.defaultProps = {
  children: function children(value) {
    return value;
  }
};
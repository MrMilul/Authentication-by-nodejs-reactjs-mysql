'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Partial;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partial = require('lodash/partial');

var _partial2 = _interopRequireDefault(_partial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Partial(props) {
  return props.children((0, _partial2.default)(props.func, props.partials));
}

Partial.defaultProps = {
  children: function children(value) {
    return value;
  }
};
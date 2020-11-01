'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Clone;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clone = require('lodash/clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Clone(props) {
  return props.children((0, _clone2.default)(props.value));
}

Clone.defaultProps = {
  children: function children(value) {
    return value;
  }
};
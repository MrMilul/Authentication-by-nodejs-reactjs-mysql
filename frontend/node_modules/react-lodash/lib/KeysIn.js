'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KeysIn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _keysIn = require('lodash/keysIn');

var _keysIn2 = _interopRequireDefault(_keysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KeysIn(props) {
  return props.children((0, _keysIn2.default)(props.object));
}

KeysIn.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = After;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _after = require('lodash/after');

var _after2 = _interopRequireDefault(_after);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function After(props) {
  return props.children((0, _after2.default)(props.n, props.func));
}

After.defaultProps = {
  children: function children(value) {
    return value;
  }
};
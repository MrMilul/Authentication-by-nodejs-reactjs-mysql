'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Once;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _once = require('lodash/once');

var _once2 = _interopRequireDefault(_once);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Once(props) {
  return props.children((0, _once2.default)(props.func));
}

Once.defaultProps = {
  children: function children(value) {
    return value;
  }
};
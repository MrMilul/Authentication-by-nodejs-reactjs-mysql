'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Rest;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rest = require('lodash/rest');

var _rest2 = _interopRequireDefault(_rest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Rest(props) {
  return props.children((0, _rest2.default)(props.func, props.start));
}

Rest.defaultProps = {
  children: function children(value) {
    return value;
  }
};
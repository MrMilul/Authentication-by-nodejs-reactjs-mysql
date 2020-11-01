'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Conforms;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _conforms = require('lodash/conforms');

var _conforms2 = _interopRequireDefault(_conforms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Conforms(props) {
  return props.children((0, _conforms2.default)(props.source));
}

Conforms.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Defaults;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaults = require('lodash/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Defaults(props) {
  return props.children((0, _defaults2.default)(props.object, props.sources));
}

Defaults.defaultProps = {
  children: function children(value) {
    return value;
  }
};
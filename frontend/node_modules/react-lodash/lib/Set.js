'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Set;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Set(props) {
  return props.children((0, _set2.default)(props.object, props.path, props.value));
}

Set.defaultProps = {
  children: function children(value) {
    return value;
  }
};
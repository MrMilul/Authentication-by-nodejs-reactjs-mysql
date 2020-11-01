'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SetWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _setWith = require('lodash/setWith');

var _setWith2 = _interopRequireDefault(_setWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SetWith(props) {
  return props.children((0, _setWith2.default)(props.object, props.path, props.value, props.customizer));
}

SetWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CloneWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cloneWith = require('lodash/cloneWith');

var _cloneWith2 = _interopRequireDefault(_cloneWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CloneWith(props) {
  return props.children((0, _cloneWith2.default)(props.value, props.customizer));
}

CloneWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
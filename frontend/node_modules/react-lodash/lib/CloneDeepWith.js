'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CloneDeepWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cloneDeepWith = require('lodash/cloneDeepWith');

var _cloneDeepWith2 = _interopRequireDefault(_cloneDeepWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CloneDeepWith(props) {
  return props.children((0, _cloneDeepWith2.default)(props.value, props.customizer));
}

CloneDeepWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
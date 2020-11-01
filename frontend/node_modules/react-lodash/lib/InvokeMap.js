'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InvokeMap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invokeMap = require('lodash/invokeMap');

var _invokeMap2 = _interopRequireDefault(_invokeMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InvokeMap(props) {
  return props.children((0, _invokeMap2.default)(props.collection, props.path, props.args));
}

InvokeMap.defaultProps = {
  children: function children(value) {
    return value;
  }
};
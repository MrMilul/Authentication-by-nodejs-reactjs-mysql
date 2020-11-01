'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BindKey;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bindKey = require('lodash/bindKey');

var _bindKey2 = _interopRequireDefault(_bindKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BindKey(props) {
  return props.children((0, _bindKey2.default)(props.object, props.key, props.partials));
}

BindKey.defaultProps = {
  children: function children(value) {
    return value;
  }
};
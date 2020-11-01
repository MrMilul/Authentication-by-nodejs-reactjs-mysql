'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Get;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Get(props) {
  return props.children((0, _get2.default)(props.object, props.path, props.defaultValue));
}

Get.defaultProps = {
  children: function children(value) {
    return value;
  }
};
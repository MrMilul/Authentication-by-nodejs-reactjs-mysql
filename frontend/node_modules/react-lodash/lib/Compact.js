'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Compact;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compact = require('lodash/compact');

var _compact2 = _interopRequireDefault(_compact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Compact(props) {
  return props.children((0, _compact2.default)(props.array));
}

Compact.defaultProps = {
  children: function children(value) {
    return value;
  }
};
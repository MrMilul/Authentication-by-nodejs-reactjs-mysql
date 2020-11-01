'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Merge;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Merge(props) {
  return props.children((0, _merge2.default)(props.object, props.sources));
}

Merge.defaultProps = {
  children: function children(value) {
    return value;
  }
};
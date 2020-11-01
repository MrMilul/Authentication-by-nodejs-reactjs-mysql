'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MergeWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mergeWith = require('lodash/mergeWith');

var _mergeWith2 = _interopRequireDefault(_mergeWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MergeWith(props) {
  return props.children((0, _mergeWith2.default)(props.object, props.sources, props.customizer));
}

MergeWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
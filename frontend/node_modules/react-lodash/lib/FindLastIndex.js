'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FindLastIndex;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findLastIndex = require('lodash/findLastIndex');

var _findLastIndex2 = _interopRequireDefault(_findLastIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FindLastIndex(props) {
  return props.children((0, _findLastIndex2.default)(props.array, props.predicate, props.fromIndex));
}

FindLastIndex.defaultProps = {
  children: function children(value) {
    return value;
  }
};
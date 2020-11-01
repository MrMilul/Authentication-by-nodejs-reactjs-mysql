'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FindIndex;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findIndex = require('lodash/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FindIndex(props) {
  return props.children((0, _findIndex2.default)(props.array, props.predicate, props.fromIndex));
}

FindIndex.defaultProps = {
  children: function children(value) {
    return value;
  }
};
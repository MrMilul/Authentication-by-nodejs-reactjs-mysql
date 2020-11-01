'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FindLast;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findLast = require('lodash/findLast');

var _findLast2 = _interopRequireDefault(_findLast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FindLast(props) {
  return props.children((0, _findLast2.default)(props.collection, props.predicate, props.fromIndex));
}

FindLast.defaultProps = {
  children: function children(value) {
    return value;
  }
};
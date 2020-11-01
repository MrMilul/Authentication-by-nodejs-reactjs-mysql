'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Partition;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partition = require('lodash/partition');

var _partition2 = _interopRequireDefault(_partition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Partition(props) {
  return props.children((0, _partition2.default)(props.collection, props.predicate));
}

Partition.defaultProps = {
  children: function children(value) {
    return value;
  }
};
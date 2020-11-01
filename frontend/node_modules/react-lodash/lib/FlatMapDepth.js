'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlatMapDepth;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flatMapDepth = require('lodash/flatMapDepth');

var _flatMapDepth2 = _interopRequireDefault(_flatMapDepth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlatMapDepth(props) {
  return props.children((0, _flatMapDepth2.default)(props.collection, props.iteratee, props.depth));
}

FlatMapDepth.defaultProps = {
  children: function children(value) {
    return value;
  }
};
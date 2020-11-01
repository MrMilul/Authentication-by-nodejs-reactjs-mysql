'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlatMap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flatMap = require('lodash/flatMap');

var _flatMap2 = _interopRequireDefault(_flatMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlatMap(props) {
  return props.children((0, _flatMap2.default)(props.collection, props.iteratee));
}

FlatMap.defaultProps = {
  children: function children(value) {
    return value;
  }
};
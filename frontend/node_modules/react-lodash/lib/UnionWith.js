'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UnionWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unionWith = require('lodash/unionWith');

var _unionWith2 = _interopRequireDefault(_unionWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UnionWith(props) {
  return props.children((0, _unionWith2.default)(props.arrays, props.comparator));
}

UnionWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
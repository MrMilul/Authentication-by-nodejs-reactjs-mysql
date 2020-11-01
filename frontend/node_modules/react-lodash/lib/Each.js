'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Each;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _each = require('lodash/each');

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Each(props) {
  return props.children((0, _each2.default)(props.collection, props.iteratee));
}

Each.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KeyBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _keyBy = require('lodash/keyBy');

var _keyBy2 = _interopRequireDefault(_keyBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KeyBy(props) {
  return props.children((0, _keyBy2.default)(props.collection, props.iteratee));
}

KeyBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
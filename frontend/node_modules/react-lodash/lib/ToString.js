'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToString;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toString = require('lodash/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToString(props) {
  return props.children((0, _toString2.default)(props.value));
}

ToString.defaultProps = {
  children: function children(value) {
    return value;
  }
};
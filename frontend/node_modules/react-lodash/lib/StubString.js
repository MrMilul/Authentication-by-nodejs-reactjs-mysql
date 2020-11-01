'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StubString;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stubString = require('lodash/stubString');

var _stubString2 = _interopRequireDefault(_stubString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StubString(props) {
  return props.children((0, _stubString2.default)());
}

StubString.defaultProps = {
  children: function children(value) {
    return value;
  }
};
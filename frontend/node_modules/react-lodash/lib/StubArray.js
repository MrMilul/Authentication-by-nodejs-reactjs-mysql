'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StubArray;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stubArray = require('lodash/stubArray');

var _stubArray2 = _interopRequireDefault(_stubArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StubArray(props) {
  return props.children((0, _stubArray2.default)());
}

StubArray.defaultProps = {
  children: function children(value) {
    return value;
  }
};
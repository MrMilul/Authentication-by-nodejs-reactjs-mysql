'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Words;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _words = require('lodash/words');

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Words(props) {
  return props.children((0, _words2.default)(props.string, props.pattern));
}

Words.defaultProps = {
  children: function children(value) {
    return value;
  }
};
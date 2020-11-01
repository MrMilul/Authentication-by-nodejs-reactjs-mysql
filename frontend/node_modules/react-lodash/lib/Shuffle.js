'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Shuffle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shuffle = require('lodash/shuffle');

var _shuffle2 = _interopRequireDefault(_shuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Shuffle(props) {
  return props.children((0, _shuffle2.default)(props.collection));
}

Shuffle.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Keys;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Keys(props) {
  return props.children((0, _keys2.default)(props.object));
}

Keys.defaultProps = {
  children: function children(value) {
    return value;
  }
};
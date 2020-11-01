'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Uniq;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniq = require('lodash/uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Uniq(props) {
  return props.children((0, _uniq2.default)(props.array));
}

Uniq.defaultProps = {
  children: function children(value) {
    return value;
  }
};
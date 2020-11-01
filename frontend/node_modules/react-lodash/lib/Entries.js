'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Entries;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _entries = require('lodash/entries');

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Entries(props) {
  return props.children((0, _entries2.default)(props.object));
}

Entries.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EntriesIn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _entriesIn = require('lodash/entriesIn');

var _entriesIn2 = _interopRequireDefault(_entriesIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EntriesIn(props) {
  return props.children((0, _entriesIn2.default)(props.object));
}

EntriesIn.defaultProps = {
  children: function children(value) {
    return value;
  }
};
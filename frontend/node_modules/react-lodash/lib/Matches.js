'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Matches;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _matches = require('lodash/matches');

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Matches(props) {
  return props.children((0, _matches2.default)(props.source));
}

Matches.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Round;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _round = require('lodash/round');

var _round2 = _interopRequireDefault(_round);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Round(props) {
  return props.children((0, _round2.default)(props.number, props.precision));
}

Round.defaultProps = {
  children: function children(value) {
    return value;
  }
};
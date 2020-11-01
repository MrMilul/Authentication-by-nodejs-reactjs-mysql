'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iteratee;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _iteratee = require('lodash/iteratee');

var _iteratee2 = _interopRequireDefault(_iteratee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iteratee(props) {
  return props.children((0, _iteratee2.default)(props.func));
}

Iteratee.defaultProps = {
  children: function children(value) {
    return value;
  }
};
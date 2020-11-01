'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cond;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cond = require('lodash/cond');

var _cond2 = _interopRequireDefault(_cond);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cond(props) {
  return props.children((0, _cond2.default)(props.pairs));
}

Cond.defaultProps = {
  children: function children(value) {
    return value;
  }
};
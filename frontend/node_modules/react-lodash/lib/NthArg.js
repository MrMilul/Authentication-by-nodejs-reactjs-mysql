'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NthArg;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nthArg = require('lodash/nthArg');

var _nthArg2 = _interopRequireDefault(_nthArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NthArg(props) {
  return props.children((0, _nthArg2.default)(props.n));
}

NthArg.defaultProps = {
  children: function children(value) {
    return value;
  }
};
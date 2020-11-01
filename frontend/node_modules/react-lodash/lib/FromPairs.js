'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FromPairs;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fromPairs = require('lodash/fromPairs');

var _fromPairs2 = _interopRequireDefault(_fromPairs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FromPairs(props) {
  return props.children((0, _fromPairs2.default)(props.pairs));
}

FromPairs.defaultProps = {
  children: function children(value) {
    return value;
  }
};
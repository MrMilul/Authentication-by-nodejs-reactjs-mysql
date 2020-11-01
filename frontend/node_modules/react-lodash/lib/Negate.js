'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Negate;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _negate = require('lodash/negate');

var _negate2 = _interopRequireDefault(_negate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Negate(props) {
  return props.children((0, _negate2.default)(props.predicate));
}

Negate.defaultProps = {
  children: function children(value) {
    return value;
  }
};
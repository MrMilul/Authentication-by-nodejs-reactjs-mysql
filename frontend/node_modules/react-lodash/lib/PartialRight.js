'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PartialRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialRight = require('lodash/partialRight');

var _partialRight2 = _interopRequireDefault(_partialRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PartialRight(props) {
  return props.children((0, _partialRight2.default)(props.func, props.partials));
}

PartialRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
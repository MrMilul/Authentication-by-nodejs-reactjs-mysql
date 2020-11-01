'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dropRight = require('lodash/dropRight');

var _dropRight2 = _interopRequireDefault(_dropRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropRight(props) {
  return props.children((0, _dropRight2.default)(props.array, props.n));
}

DropRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
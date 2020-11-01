'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlowRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flowRight = require('lodash/flowRight');

var _flowRight2 = _interopRequireDefault(_flowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlowRight(props) {
  return props.children((0, _flowRight2.default)(props.funcs));
}

FlowRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Flow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flow = require('lodash/flow');

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flow(props) {
  return props.children((0, _flow2.default)(props.funcs));
}

Flow.defaultProps = {
  children: function children(value) {
    return value;
  }
};
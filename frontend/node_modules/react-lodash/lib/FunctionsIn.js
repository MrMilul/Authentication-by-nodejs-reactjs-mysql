'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FunctionsIn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _functionsIn = require('lodash/functionsIn');

var _functionsIn2 = _interopRequireDefault(_functionsIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FunctionsIn(props) {
  return props.children((0, _functionsIn2.default)(props.object));
}

FunctionsIn.defaultProps = {
  children: function children(value) {
    return value;
  }
};
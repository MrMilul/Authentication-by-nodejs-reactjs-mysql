'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Result;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _result = require('lodash/result');

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Result(props) {
  return props.children((0, _result2.default)(props.object, props.path, props.defaultValue));
}

Result.defaultProps = {
  children: function children(value) {
    return value;
  }
};
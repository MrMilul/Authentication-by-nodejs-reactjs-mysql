'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sample;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sample = require('lodash/sample');

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sample(props) {
  return props.children((0, _sample2.default)(props.collection));
}

Sample.defaultProps = {
  children: function children(value) {
    return value;
  }
};
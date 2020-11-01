'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mean;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mean = require('lodash/mean');

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Mean(props) {
  return props.children((0, _mean2.default)(props.array));
}

Mean.defaultProps = {
  children: function children(value) {
    return value;
  }
};
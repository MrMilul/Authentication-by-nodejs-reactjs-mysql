'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PullAll;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pullAll = require('lodash/pullAll');

var _pullAll2 = _interopRequireDefault(_pullAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PullAll(props) {
  return props.children((0, _pullAll2.default)(props.array, props.values));
}

PullAll.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reject = require('lodash/reject');

var _reject2 = _interopRequireDefault(_reject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Reject(props) {
  return props.children((0, _reject2.default)(props.collection, props.predicate));
}

Reject.defaultProps = {
  children: function children(value) {
    return value;
  }
};
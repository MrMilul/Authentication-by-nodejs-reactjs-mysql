'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ForIn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _forIn = require('lodash/forIn');

var _forIn2 = _interopRequireDefault(_forIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ForIn(props) {
  return props.children((0, _forIn2.default)(props.object, props.iteratee));
}

ForIn.defaultProps = {
  children: function children(value) {
    return value;
  }
};
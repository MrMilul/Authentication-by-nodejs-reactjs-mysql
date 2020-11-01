'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Omit;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Omit(props) {
  return props.children((0, _omit2.default)(props.object, props.paths));
}

Omit.defaultProps = {
  children: function children(value) {
    return value;
  }
};
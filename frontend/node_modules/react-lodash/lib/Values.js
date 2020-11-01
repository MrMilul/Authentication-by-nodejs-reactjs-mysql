'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Values;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _values = require('lodash/values');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Values(props) {
  return props.children((0, _values2.default)(props.object));
}

Values.defaultProps = {
  children: function children(value) {
    return value;
  }
};
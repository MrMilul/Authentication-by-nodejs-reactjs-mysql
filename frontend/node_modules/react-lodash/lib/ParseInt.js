'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ParseInt;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _parseInt = require('lodash/parseInt');

var _parseInt2 = _interopRequireDefault(_parseInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParseInt(props) {
  return props.children((0, _parseInt2.default)(props.string, props.radix));
}

ParseInt.defaultProps = {
  children: function children(value) {
    return value;
  }
};
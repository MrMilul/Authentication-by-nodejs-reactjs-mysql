'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Initial;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _initial = require('lodash/initial');

var _initial2 = _interopRequireDefault(_initial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Initial(props) {
  return props.children((0, _initial2.default)(props.array));
}

Initial.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Add;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _add = require('lodash/add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Add(props) {
  return props.children((0, _add2.default)(props.augend, props.addend));
}

Add.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PropertyOf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propertyOf = require('lodash/propertyOf');

var _propertyOf2 = _interopRequireDefault(_propertyOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PropertyOf(props) {
  return props.children((0, _propertyOf2.default)(props.object));
}

PropertyOf.defaultProps = {
  children: function children(value) {
    return value;
  }
};
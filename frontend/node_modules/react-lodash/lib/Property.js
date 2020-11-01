'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Property;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _property = require('lodash/property');

var _property2 = _interopRequireDefault(_property);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Property(props) {
  return props.children((0, _property2.default)(props.path));
}

Property.defaultProps = {
  children: function children(value) {
    return value;
  }
};
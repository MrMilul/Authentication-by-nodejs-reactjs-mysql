'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ZipObjectDeep;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _zipObjectDeep = require('lodash/zipObjectDeep');

var _zipObjectDeep2 = _interopRequireDefault(_zipObjectDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ZipObjectDeep(props) {
  return props.children((0, _zipObjectDeep2.default)(props.props, props.values));
}

ZipObjectDeep.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DefaultsDeep;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaultsDeep = require('lodash/defaultsDeep');

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DefaultsDeep(props) {
  return props.children((0, _defaultsDeep2.default)(props.object, props.sources));
}

DefaultsDeep.defaultProps = {
  children: function children(value) {
    return value;
  }
};
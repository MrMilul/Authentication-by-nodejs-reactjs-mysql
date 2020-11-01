'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToLower;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toLower = require('lodash/toLower');

var _toLower2 = _interopRequireDefault(_toLower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToLower(props) {
  return props.children((0, _toLower2.default)(props.string));
}

ToLower.defaultProps = {
  children: function children(value) {
    return value;
  }
};
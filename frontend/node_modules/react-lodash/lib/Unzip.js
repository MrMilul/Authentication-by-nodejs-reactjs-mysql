'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Unzip;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unzip = require('lodash/unzip');

var _unzip2 = _interopRequireDefault(_unzip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Unzip(props) {
  return props.children((0, _unzip2.default)(props.array));
}

Unzip.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Zip;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _zip = require('lodash/zip');

var _zip2 = _interopRequireDefault(_zip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Zip(props) {
  return props.children((0, _zip2.default)(props.arrays));
}

Zip.defaultProps = {
  children: function children(value) {
    return value;
  }
};
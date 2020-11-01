'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Floor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _floor = require('lodash/floor');

var _floor2 = _interopRequireDefault(_floor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Floor(props) {
  return props.children((0, _floor2.default)(props.number, props.precision));
}

Floor.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MapValues;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mapValues = require('lodash/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MapValues(props) {
  return props.children((0, _mapValues2.default)(props.object, props.iteratee));
}

MapValues.defaultProps = {
  children: function children(value) {
    return value;
  }
};
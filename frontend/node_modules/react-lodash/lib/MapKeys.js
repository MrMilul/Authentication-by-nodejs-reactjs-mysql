'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MapKeys;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mapKeys = require('lodash/mapKeys');

var _mapKeys2 = _interopRequireDefault(_mapKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MapKeys(props) {
  return props.children((0, _mapKeys2.default)(props.object, props.iteratee));
}

MapKeys.defaultProps = {
  children: function children(value) {
    return value;
  }
};
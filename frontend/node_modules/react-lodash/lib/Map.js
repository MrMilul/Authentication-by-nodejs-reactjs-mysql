'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Map;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Map(props) {
  return props.children((0, _map2.default)(props.collection, props.iteratee));
}

Map.defaultProps = {
  children: function children(value) {
    return value;
  }
};
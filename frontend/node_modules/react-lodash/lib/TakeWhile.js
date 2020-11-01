'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TakeWhile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _takeWhile = require('lodash/takeWhile');

var _takeWhile2 = _interopRequireDefault(_takeWhile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TakeWhile(props) {
  return props.children((0, _takeWhile2.default)(props.array, props.predicate));
}

TakeWhile.defaultProps = {
  children: function children(value) {
    return value;
  }
};
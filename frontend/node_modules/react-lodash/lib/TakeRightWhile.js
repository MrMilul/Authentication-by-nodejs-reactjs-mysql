'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TakeRightWhile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _takeRightWhile = require('lodash/takeRightWhile');

var _takeRightWhile2 = _interopRequireDefault(_takeRightWhile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TakeRightWhile(props) {
  return props.children((0, _takeRightWhile2.default)(props.array, props.predicate));
}

TakeRightWhile.defaultProps = {
  children: function children(value) {
    return value;
  }
};
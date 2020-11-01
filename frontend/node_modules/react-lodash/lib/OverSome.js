'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OverSome;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _overSome = require('lodash/overSome');

var _overSome2 = _interopRequireDefault(_overSome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OverSome(props) {
  return props.children((0, _overSome2.default)(props.predicates));
}

OverSome.defaultProps = {
  children: function children(value) {
    return value;
  }
};
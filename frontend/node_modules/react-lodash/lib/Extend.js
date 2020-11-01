'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Extend;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extend = require('lodash/extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Extend(props) {
  return props.children((0, _extend2.default)(props.object, props.sources));
}

Extend.defaultProps = {
  children: function children(value) {
    return value;
  }
};
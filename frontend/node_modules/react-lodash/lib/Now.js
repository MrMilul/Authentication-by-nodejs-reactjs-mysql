'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Now;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _now = require('lodash/now');

var _now2 = _interopRequireDefault(_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Now(props) {
  return props.children((0, _now2.default)());
}

Now.defaultProps = {
  children: function children(value) {
    return value;
  }
};
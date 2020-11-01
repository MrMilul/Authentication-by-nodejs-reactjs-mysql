'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Noop;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Noop(props) {
  return props.children((0, _noop2.default)());
}

Noop.defaultProps = {
  children: function children(value) {
    return value;
  }
};
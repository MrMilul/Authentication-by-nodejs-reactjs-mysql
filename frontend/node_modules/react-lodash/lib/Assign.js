'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Assign;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Assign(props) {
  return props.children((0, _assign2.default)(props.object, props.sources));
}

Assign.defaultProps = {
  children: function children(value) {
    return value;
  }
};
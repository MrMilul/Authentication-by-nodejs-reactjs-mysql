'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Drop;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _drop = require('lodash/drop');

var _drop2 = _interopRequireDefault(_drop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Drop(props) {
  return props.children((0, _drop2.default)(props.array, props.n));
}

Drop.defaultProps = {
  children: function children(value) {
    return value;
  }
};
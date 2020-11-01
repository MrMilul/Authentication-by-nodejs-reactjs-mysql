'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CurryRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _curryRight = require('lodash/curryRight');

var _curryRight2 = _interopRequireDefault(_curryRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CurryRight(props) {
  return props.children((0, _curryRight2.default)(props.func, props.arity));
}

CurryRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
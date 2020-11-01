'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Last;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _last = require('lodash/last');

var _last2 = _interopRequireDefault(_last);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Last(props) {
  return props.children((0, _last2.default)(props.array));
}

Last.defaultProps = {
  children: function children(value) {
    return value;
  }
};
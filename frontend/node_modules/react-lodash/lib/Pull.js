'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pull;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pull = require('lodash/pull');

var _pull2 = _interopRequireDefault(_pull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pull(props) {
  return props.children((0, _pull2.default)(props.array, props.values));
}

Pull.defaultProps = {
  children: function children(value) {
    return value;
  }
};
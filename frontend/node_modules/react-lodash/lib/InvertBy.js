'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InvertBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invertBy = require('lodash/invertBy');

var _invertBy2 = _interopRequireDefault(_invertBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InvertBy(props) {
  return props.children((0, _invertBy2.default)(props.object, props.iteratee));
}

InvertBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
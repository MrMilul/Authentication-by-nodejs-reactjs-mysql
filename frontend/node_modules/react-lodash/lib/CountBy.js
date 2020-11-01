'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CountBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _countBy = require('lodash/countBy');

var _countBy2 = _interopRequireDefault(_countBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CountBy(props) {
  return props.children((0, _countBy2.default)(props.collection, props.iteratee));
}

CountBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
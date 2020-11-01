'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MeanBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _meanBy = require('lodash/meanBy');

var _meanBy2 = _interopRequireDefault(_meanBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MeanBy(props) {
  return props.children((0, _meanBy2.default)(props.array, props.iteratee));
}

MeanBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
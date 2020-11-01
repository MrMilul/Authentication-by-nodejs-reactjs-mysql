'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OrderBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _orderBy = require('lodash/orderBy');

var _orderBy2 = _interopRequireDefault(_orderBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OrderBy(props) {
  return props.children((0, _orderBy2.default)(props.collection, props.iteratees, props.orders));
}

OrderBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
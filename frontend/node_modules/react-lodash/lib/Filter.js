'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filter(props) {
  return props.children((0, _filter2.default)(props.collection, props.predicate));
}

Filter.defaultProps = {
  children: function children(value) {
    return value;
  }
};
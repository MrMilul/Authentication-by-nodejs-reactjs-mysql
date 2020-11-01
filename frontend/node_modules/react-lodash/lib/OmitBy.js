'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OmitBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _omitBy = require('lodash/omitBy');

var _omitBy2 = _interopRequireDefault(_omitBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OmitBy(props) {
  return props.children((0, _omitBy2.default)(props.object, props.predicate));
}

OmitBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
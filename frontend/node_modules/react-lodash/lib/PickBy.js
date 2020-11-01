'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PickBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pickBy = require('lodash/pickBy');

var _pickBy2 = _interopRequireDefault(_pickBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PickBy(props) {
  return props.children((0, _pickBy2.default)(props.object, props.predicate));
}

PickBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
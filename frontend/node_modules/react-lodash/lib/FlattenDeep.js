'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlattenDeep;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flattenDeep = require('lodash/flattenDeep');

var _flattenDeep2 = _interopRequireDefault(_flattenDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlattenDeep(props) {
  return props.children((0, _flattenDeep2.default)(props.array));
}

FlattenDeep.defaultProps = {
  children: function children(value) {
    return value;
  }
};
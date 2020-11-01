'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CloneDeep;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CloneDeep(props) {
  return props.children((0, _cloneDeep2.default)(props.value));
}

CloneDeep.defaultProps = {
  children: function children(value) {
    return value;
  }
};
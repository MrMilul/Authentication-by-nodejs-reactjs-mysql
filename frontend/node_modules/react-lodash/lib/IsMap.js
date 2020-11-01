'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsMap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isMap = require('lodash/isMap');

var _isMap2 = _interopRequireDefault(_isMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsMap(props) {
  var value = (0, _isMap2.default)(props.value);
  return value ? props.yes() : props.no();
}

IsMap.defaultProps = {
  yes: function yes() {},
  no: function no() {}
};
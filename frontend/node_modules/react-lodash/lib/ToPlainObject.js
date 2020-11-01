'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToPlainObject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toPlainObject = require('lodash/toPlainObject');

var _toPlainObject2 = _interopRequireDefault(_toPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToPlainObject(props) {
  return props.children((0, _toPlainObject2.default)(props.value));
}

ToPlainObject.defaultProps = {
  children: function children(value) {
    return value;
  }
};
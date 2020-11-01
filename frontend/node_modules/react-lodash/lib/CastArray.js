'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CastArray;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _castArray = require('lodash/castArray');

var _castArray2 = _interopRequireDefault(_castArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CastArray(props) {
  return props.children((0, _castArray2.default)(props.value));
}

CastArray.defaultProps = {
  children: function children(value) {
    return value;
  }
};
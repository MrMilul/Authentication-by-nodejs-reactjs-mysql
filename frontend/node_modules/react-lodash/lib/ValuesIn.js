'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ValuesIn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _valuesIn = require('lodash/valuesIn');

var _valuesIn2 = _interopRequireDefault(_valuesIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ValuesIn(props) {
  return props.children((0, _valuesIn2.default)(props.object));
}

ValuesIn.defaultProps = {
  children: function children(value) {
    return value;
  }
};
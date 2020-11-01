'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StartCase;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _startCase = require('lodash/startCase');

var _startCase2 = _interopRequireDefault(_startCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StartCase(props) {
  return props.children((0, _startCase2.default)(props.string));
}

StartCase.defaultProps = {
  children: function children(value) {
    return value;
  }
};
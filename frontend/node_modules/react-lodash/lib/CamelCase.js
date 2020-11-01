'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CamelCase;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _camelCase = require('lodash/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CamelCase(props) {
  return props.children((0, _camelCase2.default)(props.string));
}

CamelCase.defaultProps = {
  children: function children(value) {
    return value;
  }
};
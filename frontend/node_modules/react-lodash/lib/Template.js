'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Template;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _template = require('lodash/template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Template(props) {
  return props.children((0, _template2.default)(props.string, props.options));
}

Template.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Create;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _create = require('lodash/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Create(props) {
  return props.children((0, _create2.default)(props.prototype, props.properties));
}

Create.defaultProps = {
  children: function children(value) {
    return value;
  }
};
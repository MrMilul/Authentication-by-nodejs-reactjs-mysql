'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BindAll;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bindAll = require('lodash/bindAll');

var _bindAll2 = _interopRequireDefault(_bindAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BindAll(props) {
  return props.children((0, _bindAll2.default)(props.object, props.methodNames));
}

BindAll.defaultProps = {
  children: function children(value) {
    return value;
  }
};
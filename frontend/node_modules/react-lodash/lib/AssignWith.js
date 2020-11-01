'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AssignWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assignWith = require('lodash/assignWith');

var _assignWith2 = _interopRequireDefault(_assignWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AssignWith(props) {
  return props.children((0, _assignWith2.default)(props.object, props.sources, props.customizer));
}

AssignWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
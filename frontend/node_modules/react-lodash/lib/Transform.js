'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Transform;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transform = require('lodash/transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Transform(props) {
  return props.children((0, _transform2.default)(props.object, props.iteratee, props.accumulator));
}

Transform.defaultProps = {
  children: function children(value) {
    return value;
  }
};
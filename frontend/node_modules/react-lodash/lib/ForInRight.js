'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ForInRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _forInRight = require('lodash/forInRight');

var _forInRight2 = _interopRequireDefault(_forInRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ForInRight(props) {
  return props.children((0, _forInRight2.default)(props.object, props.iteratee));
}

ForInRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
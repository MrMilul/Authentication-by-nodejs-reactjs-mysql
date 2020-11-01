'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ForOwn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _forOwn = require('lodash/forOwn');

var _forOwn2 = _interopRequireDefault(_forOwn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ForOwn(props) {
  return props.children((0, _forOwn2.default)(props.object, props.iteratee));
}

ForOwn.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EachRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _eachRight = require('lodash/eachRight');

var _eachRight2 = _interopRequireDefault(_eachRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EachRight(props) {
  return props.children((0, _eachRight2.default)(props.collection, props.iteratee));
}

EachRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
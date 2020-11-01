'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TakeRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _takeRight = require('lodash/takeRight');

var _takeRight2 = _interopRequireDefault(_takeRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TakeRight(props) {
  return props.children((0, _takeRight2.default)(props.array, props.n));
}

TakeRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
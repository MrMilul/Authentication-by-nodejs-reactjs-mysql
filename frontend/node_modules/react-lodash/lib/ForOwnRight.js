'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ForOwnRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _forOwnRight = require('lodash/forOwnRight');

var _forOwnRight2 = _interopRequireDefault(_forOwnRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ForOwnRight(props) {
  return props.children((0, _forOwnRight2.default)(props.object, props.iteratee));
}

ForOwnRight.defaultProps = {
  children: function children(value) {
    return value;
  }
};
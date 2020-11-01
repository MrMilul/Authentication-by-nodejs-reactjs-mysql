'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OverEvery;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _overEvery = require('lodash/overEvery');

var _overEvery2 = _interopRequireDefault(_overEvery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OverEvery(props) {
  return props.children((0, _overEvery2.default)(props.predicates));
}

OverEvery.defaultProps = {
  children: function children(value) {
    return value;
  }
};
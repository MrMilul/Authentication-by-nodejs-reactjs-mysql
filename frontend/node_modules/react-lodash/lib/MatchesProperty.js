'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MatchesProperty;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _matchesProperty = require('lodash/matchesProperty');

var _matchesProperty2 = _interopRequireDefault(_matchesProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MatchesProperty(props) {
  return props.children((0, _matchesProperty2.default)(props.path, props.srcValue));
}

MatchesProperty.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Find;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Find(props) {
  return props.children((0, _find2.default)(props.collection, props.predicate, props.fromIndex));
}

Find.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Remove;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _remove = require('lodash/remove');

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Remove(props) {
  return props.children((0, _remove2.default)(props.array, props.predicate));
}

Remove.defaultProps = {
  children: function children(value) {
    return value;
  }
};
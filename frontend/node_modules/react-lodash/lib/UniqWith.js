'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UniqWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqWith = require('lodash/uniqWith');

var _uniqWith2 = _interopRequireDefault(_uniqWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UniqWith(props) {
  return props.children((0, _uniqWith2.default)(props.array, props.comparator));
}

UniqWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
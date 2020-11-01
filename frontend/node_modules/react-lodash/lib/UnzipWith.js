'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UnzipWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unzipWith = require('lodash/unzipWith');

var _unzipWith2 = _interopRequireDefault(_unzipWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UnzipWith(props) {
  return props.children((0, _unzipWith2.default)(props.array, props.iteratee));
}

UnzipWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
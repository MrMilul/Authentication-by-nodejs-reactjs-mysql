'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UniqBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqBy = require('lodash/uniqBy');

var _uniqBy2 = _interopRequireDefault(_uniqBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UniqBy(props) {
  return props.children((0, _uniqBy2.default)(props.array, props.iteratee));
}

UniqBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UnionBy;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unionBy = require('lodash/unionBy');

var _unionBy2 = _interopRequireDefault(_unionBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UnionBy(props) {
  return props.children((0, _unionBy2.default)(props.arrays, props.iteratee));
}

UnionBy.defaultProps = {
  children: function children(value) {
    return value;
  }
};
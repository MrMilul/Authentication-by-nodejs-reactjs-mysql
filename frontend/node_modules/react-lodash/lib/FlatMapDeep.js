'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlatMapDeep;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flatMapDeep = require('lodash/flatMapDeep');

var _flatMapDeep2 = _interopRequireDefault(_flatMapDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlatMapDeep(props) {
  return props.children((0, _flatMapDeep2.default)(props.collection, props.iteratee));
}

FlatMapDeep.defaultProps = {
  children: function children(value) {
    return value;
  }
};
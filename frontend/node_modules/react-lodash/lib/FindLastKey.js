'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FindLastKey;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findLastKey = require('lodash/findLastKey');

var _findLastKey2 = _interopRequireDefault(_findLastKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FindLastKey(props) {
  return props.children((0, _findLastKey2.default)(props.object, props.predicate));
}

FindLastKey.defaultProps = {
  children: function children(value) {
    return value;
  }
};
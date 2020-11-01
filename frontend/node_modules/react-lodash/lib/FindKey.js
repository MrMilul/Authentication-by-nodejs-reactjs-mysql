'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FindKey;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findKey = require('lodash/findKey');

var _findKey2 = _interopRequireDefault(_findKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FindKey(props) {
  return props.children((0, _findKey2.default)(props.object, props.predicate));
}

FindKey.defaultProps = {
  children: function children(value) {
    return value;
  }
};
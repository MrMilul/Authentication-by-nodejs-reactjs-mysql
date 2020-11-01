'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UniqueId;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UniqueId(props) {
  return props.children((0, _uniqueId2.default)(props.prefix));
}

UniqueId.defaultProps = {
  children: function children(value) {
    return value;
  }
};
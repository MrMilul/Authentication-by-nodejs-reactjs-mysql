'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pick;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pick(props) {
  return props.children((0, _pick2.default)(props.object, props.paths));
}

Pick.defaultProps = {
  children: function children(value) {
    return value;
  }
};
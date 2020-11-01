'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ZipObject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _zipObject = require('lodash/zipObject');

var _zipObject2 = _interopRequireDefault(_zipObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ZipObject(props) {
  return props.children((0, _zipObject2.default)(props.props, props.values));
}

ZipObject.defaultProps = {
  children: function children(value) {
    return value;
  }
};
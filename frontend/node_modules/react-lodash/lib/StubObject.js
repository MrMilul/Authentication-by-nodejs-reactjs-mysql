'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StubObject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stubObject = require('lodash/stubObject');

var _stubObject2 = _interopRequireDefault(_stubObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StubObject(props) {
  return props.children((0, _stubObject2.default)());
}

StubObject.defaultProps = {
  children: function children(value) {
    return value;
  }
};
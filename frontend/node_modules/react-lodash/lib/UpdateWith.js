'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UpdateWith;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _updateWith = require('lodash/updateWith');

var _updateWith2 = _interopRequireDefault(_updateWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateWith(props) {
  return props.children((0, _updateWith2.default)(props.object, props.path, props.updater, props.customizer));
}

UpdateWith.defaultProps = {
  children: function children(value) {
    return value;
  }
};
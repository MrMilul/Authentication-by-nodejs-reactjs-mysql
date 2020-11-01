'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Update;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _update = require('lodash/update');

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Update(props) {
  return props.children((0, _update2.default)(props.object, props.path, props.updater));
}

Update.defaultProps = {
  children: function children(value) {
    return value;
  }
};
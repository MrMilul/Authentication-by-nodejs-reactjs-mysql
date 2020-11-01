import React from 'react'
import bindKey from 'lodash/bindKey'

export default function BindKey(props) {
  return props.children(bindKey(props.object, props.key, props.partials))
}

BindKey.defaultProps = {
  children: value => value
}
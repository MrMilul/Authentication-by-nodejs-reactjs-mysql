import React from 'react'
import invoke from 'lodash/invoke'

export default function Invoke(props) {
  return props.children(invoke(props.object, props.path, props.args))
}

Invoke.defaultProps = {
  children: value => value
}
import React from 'react'
import defer from 'lodash/defer'

export default function Defer(props) {
  return props.children(defer(props.func, props.args))
}

Defer.defaultProps = {
  children: value => value
}
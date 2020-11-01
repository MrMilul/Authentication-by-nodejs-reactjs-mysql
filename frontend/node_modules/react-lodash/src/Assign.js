import React from 'react'
import assign from 'lodash/assign'

export default function Assign(props) {
  return props.children(assign(props.object, props.sources))
}

Assign.defaultProps = {
  children: value => value
}
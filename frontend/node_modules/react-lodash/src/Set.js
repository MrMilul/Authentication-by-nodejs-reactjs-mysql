import React from 'react'
import set from 'lodash/set'

export default function Set(props) {
  return props.children(set(props.object, props.path, props.value))
}

Set.defaultProps = {
  children: value => value
}
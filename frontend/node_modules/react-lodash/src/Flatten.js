import React from 'react'
import flatten from 'lodash/flatten'

export default function Flatten(props) {
  return props.children(flatten(props.array))
}

Flatten.defaultProps = {
  children: value => value
}
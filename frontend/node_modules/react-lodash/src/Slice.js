import React from 'react'
import slice from 'lodash/slice'

export default function Slice(props) {
  return props.children(slice(props.array, props.start, props.end))
}

Slice.defaultProps = {
  children: value => value
}
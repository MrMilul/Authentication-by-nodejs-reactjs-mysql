import React from 'react'
import flattenDepth from 'lodash/flattenDepth'

export default function FlattenDepth(props) {
  return props.children(flattenDepth(props.array, props.depth))
}

FlattenDepth.defaultProps = {
  children: value => value
}
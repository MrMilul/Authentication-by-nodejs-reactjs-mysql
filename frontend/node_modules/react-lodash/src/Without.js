import React from 'react'
import without from 'lodash/without'

export default function Without(props) {
  return props.children(without(props.array, props.values))
}

Without.defaultProps = {
  children: value => value
}
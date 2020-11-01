import React from 'react'
import max from 'lodash/max'

export default function Max(props) {
  return props.children(max(props.array))
}

Max.defaultProps = {
  children: value => value
}
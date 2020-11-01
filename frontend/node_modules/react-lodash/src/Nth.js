import React from 'react'
import nth from 'lodash/nth'

export default function Nth(props) {
  return props.children(nth(props.array, props.n))
}

Nth.defaultProps = {
  children: value => value
}
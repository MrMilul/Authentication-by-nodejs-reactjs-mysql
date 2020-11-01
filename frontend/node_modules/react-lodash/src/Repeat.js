import React from 'react'
import repeat from 'lodash/repeat'

export default function Repeat(props) {
  return props.children(repeat(props.string, props.n))
}

Repeat.defaultProps = {
  children: value => value
}
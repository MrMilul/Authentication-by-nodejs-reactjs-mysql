import React from 'react'
import tail from 'lodash/tail'

export default function Tail(props) {
  return props.children(tail(props.array))
}

Tail.defaultProps = {
  children: value => value
}
import React from 'react'
import noop from 'lodash/noop'

export default function Noop(props) {
  return props.children(noop())
}

Noop.defaultProps = {
  children: value => value
}
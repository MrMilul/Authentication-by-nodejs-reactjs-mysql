import React from 'react'
import invert from 'lodash/invert'

export default function Invert(props) {
  return props.children(invert(props.object))
}

Invert.defaultProps = {
  children: value => value
}
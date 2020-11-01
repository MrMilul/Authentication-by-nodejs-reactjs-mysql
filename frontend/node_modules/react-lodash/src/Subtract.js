import React from 'react'
import subtract from 'lodash/subtract'

export default function Subtract(props) {
  return props.children(subtract(props.minuend, props.subtrahend))
}

Subtract.defaultProps = {
  children: value => value
}
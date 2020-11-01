import React from 'react'
import clamp from 'lodash/clamp'

export default function Clamp(props) {
  return props.children(clamp(props.number, props.lower, props.upper))
}

Clamp.defaultProps = {
  children: value => value
}
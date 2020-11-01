import React from 'react'
import pad from 'lodash/pad'

export default function Pad(props) {
  return props.children(pad(props.string, props.length, props.chars))
}

Pad.defaultProps = {
  children: value => value
}
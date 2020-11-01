import React from 'react'
import padEnd from 'lodash/padEnd'

export default function PadEnd(props) {
  return props.children(padEnd(props.string, props.length, props.chars))
}

PadEnd.defaultProps = {
  children: value => value
}
import React from 'react'
import padStart from 'lodash/padStart'

export default function PadStart(props) {
  return props.children(padStart(props.string, props.length, props.chars))
}

PadStart.defaultProps = {
  children: value => value
}
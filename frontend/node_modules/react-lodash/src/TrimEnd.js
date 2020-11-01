import React from 'react'
import trimEnd from 'lodash/trimEnd'

export default function TrimEnd(props) {
  return props.children(trimEnd(props.string, props.chars))
}

TrimEnd.defaultProps = {
  children: value => value
}
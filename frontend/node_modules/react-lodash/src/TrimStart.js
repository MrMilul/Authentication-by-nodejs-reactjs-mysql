import React from 'react'
import trimStart from 'lodash/trimStart'

export default function TrimStart(props) {
  return props.children(trimStart(props.string, props.chars))
}

TrimStart.defaultProps = {
  children: value => value
}
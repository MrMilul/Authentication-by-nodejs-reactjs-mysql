import React from 'react'
import trim from 'lodash/trim'

export default function Trim(props) {
  return props.children(trim(props.string, props.chars))
}

Trim.defaultProps = {
  children: value => value
}
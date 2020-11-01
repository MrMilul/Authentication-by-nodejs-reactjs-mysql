import React from 'react'
import capitalize from 'lodash/capitalize'

export default function Capitalize(props) {
  return props.children(capitalize(props.string))
}

Capitalize.defaultProps = {
  children: value => value
}
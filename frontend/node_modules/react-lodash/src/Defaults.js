import React from 'react'
import defaults from 'lodash/defaults'

export default function Defaults(props) {
  return props.children(defaults(props.object, props.sources))
}

Defaults.defaultProps = {
  children: value => value
}
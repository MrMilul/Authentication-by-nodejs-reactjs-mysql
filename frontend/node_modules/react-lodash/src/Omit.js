import React from 'react'
import omit from 'lodash/omit'

export default function Omit(props) {
  return props.children(omit(props.object, props.paths))
}

Omit.defaultProps = {
  children: value => value
}
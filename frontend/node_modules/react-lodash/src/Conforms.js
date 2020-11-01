import React from 'react'
import conforms from 'lodash/conforms'

export default function Conforms(props) {
  return props.children(conforms(props.source))
}

Conforms.defaultProps = {
  children: value => value
}
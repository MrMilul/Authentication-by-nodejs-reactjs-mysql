import React from 'react'
import reverse from 'lodash/reverse'

export default function Reverse(props) {
  return props.children(reverse(props.array))
}

Reverse.defaultProps = {
  children: value => value
}
import React from 'react'
import flip from 'lodash/flip'

export default function Flip(props) {
  return props.children(flip(props.func))
}

Flip.defaultProps = {
  children: value => value
}
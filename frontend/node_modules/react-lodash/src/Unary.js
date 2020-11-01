import React from 'react'
import unary from 'lodash/unary'

export default function Unary(props) {
  return props.children(unary(props.func))
}

Unary.defaultProps = {
  children: value => value
}
import React from 'react'
import multiply from 'lodash/multiply'

export default function Multiply(props) {
  return props.children(multiply(props.multiplier, props.multiplicand))
}

Multiply.defaultProps = {
  children: value => value
}
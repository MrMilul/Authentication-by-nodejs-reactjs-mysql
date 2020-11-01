import React from 'react'
import divide from 'lodash/divide'

export default function Divide(props) {
  return props.children(divide(props.dividend, props.divisor))
}

Divide.defaultProps = {
  children: value => value
}
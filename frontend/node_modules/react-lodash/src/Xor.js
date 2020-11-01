import React from 'react'
import xor from 'lodash/xor'

export default function Xor(props) {
  return props.children(xor(props.arrays))
}

Xor.defaultProps = {
  children: value => value
}
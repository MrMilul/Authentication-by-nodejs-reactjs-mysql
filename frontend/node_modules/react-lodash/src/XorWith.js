import React from 'react'
import xorWith from 'lodash/xorWith'

export default function XorWith(props) {
  return props.children(xorWith(props.arrays, props.comparator))
}

XorWith.defaultProps = {
  children: value => value
}
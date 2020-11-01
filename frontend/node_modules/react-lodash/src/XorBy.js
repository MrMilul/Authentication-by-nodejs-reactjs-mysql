import React from 'react'
import xorBy from 'lodash/xorBy'

export default function XorBy(props) {
  return props.children(xorBy(props.arrays, props.iteratee))
}

XorBy.defaultProps = {
  children: value => value
}
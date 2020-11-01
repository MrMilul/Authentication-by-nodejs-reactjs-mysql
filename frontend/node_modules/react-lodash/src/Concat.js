import React from 'react'
import concat from 'lodash/concat'

export default function Concat(props) {
  return props.children(concat(props.array, props.values))
}

Concat.defaultProps = {
  children: value => value
}
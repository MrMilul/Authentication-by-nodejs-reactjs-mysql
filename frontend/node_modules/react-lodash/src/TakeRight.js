import React from 'react'
import takeRight from 'lodash/takeRight'

export default function TakeRight(props) {
  return props.children(takeRight(props.array, props.n))
}

TakeRight.defaultProps = {
  children: value => value
}
import React from 'react'
import overArgs from 'lodash/overArgs'

export default function OverArgs(props) {
  return props.children(overArgs(props.func, props.transforms))
}

OverArgs.defaultProps = {
  children: value => value
}
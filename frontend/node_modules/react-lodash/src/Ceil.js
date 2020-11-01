import React from 'react'
import ceil from 'lodash/ceil'

export default function Ceil(props) {
  return props.children(ceil(props.number, props.precision))
}

Ceil.defaultProps = {
  children: value => value
}
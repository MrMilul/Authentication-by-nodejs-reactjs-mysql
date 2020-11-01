import React from 'react'
import compact from 'lodash/compact'

export default function Compact(props) {
  return props.children(compact(props.array))
}

Compact.defaultProps = {
  children: value => value
}
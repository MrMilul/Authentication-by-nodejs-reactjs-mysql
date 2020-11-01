import React from 'react'
import difference from 'lodash/difference'

export default function Difference(props) {
  return props.children(difference(props.array, props.values))
}

Difference.defaultProps = {
  children: value => value
}
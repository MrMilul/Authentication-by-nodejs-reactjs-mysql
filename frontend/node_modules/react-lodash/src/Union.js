import React from 'react'
import union from 'lodash/union'

export default function Union(props) {
  return props.children(union(props.arrays))
}

Union.defaultProps = {
  children: value => value
}
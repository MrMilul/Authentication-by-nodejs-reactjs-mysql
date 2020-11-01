import React from 'react'
import merge from 'lodash/merge'

export default function Merge(props) {
  return props.children(merge(props.object, props.sources))
}

Merge.defaultProps = {
  children: value => value
}
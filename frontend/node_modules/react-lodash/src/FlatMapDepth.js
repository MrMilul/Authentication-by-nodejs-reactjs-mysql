import React from 'react'
import flatMapDepth from 'lodash/flatMapDepth'

export default function FlatMapDepth(props) {
  return props.children(flatMapDepth(props.collection, props.iteratee, props.depth))
}

FlatMapDepth.defaultProps = {
  children: value => value
}
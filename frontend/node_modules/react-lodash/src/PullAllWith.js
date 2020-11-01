import React from 'react'
import pullAllWith from 'lodash/pullAllWith'

export default function PullAllWith(props) {
  return props.children(pullAllWith(props.array, props.values, props.comparator))
}

PullAllWith.defaultProps = {
  children: value => value
}
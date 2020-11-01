import React from 'react'
import pullAllBy from 'lodash/pullAllBy'

export default function PullAllBy(props) {
  return props.children(pullAllBy(props.array, props.values, props.iteratee))
}

PullAllBy.defaultProps = {
  children: value => value
}
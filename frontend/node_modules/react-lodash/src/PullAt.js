import React from 'react'
import pullAt from 'lodash/pullAt'

export default function PullAt(props) {
  return props.children(pullAt(props.array, props.indexes))
}

PullAt.defaultProps = {
  children: value => value
}
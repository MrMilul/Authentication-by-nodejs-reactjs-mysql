import React from 'react'
import pullAll from 'lodash/pullAll'

export default function PullAll(props) {
  return props.children(pullAll(props.array, props.values))
}

PullAll.defaultProps = {
  children: value => value
}
import React from 'react'
import reduce from 'lodash/reduce'

export default function Reduce(props) {
  return props.children(reduce(props.collection, props.iteratee, props.accumulator))
}

Reduce.defaultProps = {
  children: value => value
}
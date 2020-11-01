import React from 'react'
import partition from 'lodash/partition'

export default function Partition(props) {
  return props.children(partition(props.collection, props.predicate))
}

Partition.defaultProps = {
  children: value => value
}
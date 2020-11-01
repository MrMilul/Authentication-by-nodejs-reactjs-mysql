import React from 'react'
import sortedIndex from 'lodash/sortedIndex'

export default function SortedIndex(props) {
  return props.children(sortedIndex(props.array, props.value))
}

SortedIndex.defaultProps = {
  children: value => value
}
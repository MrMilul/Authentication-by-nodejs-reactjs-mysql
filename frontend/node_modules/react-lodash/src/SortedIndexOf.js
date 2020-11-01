import React from 'react'
import sortedIndexOf from 'lodash/sortedIndexOf'

export default function SortedIndexOf(props) {
  return props.children(sortedIndexOf(props.array, props.value))
}

SortedIndexOf.defaultProps = {
  children: value => value
}
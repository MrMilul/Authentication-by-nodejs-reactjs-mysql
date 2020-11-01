import React from 'react'
import sortedLastIndexOf from 'lodash/sortedLastIndexOf'

export default function SortedLastIndexOf(props) {
  return props.children(sortedLastIndexOf(props.array, props.value))
}

SortedLastIndexOf.defaultProps = {
  children: value => value
}
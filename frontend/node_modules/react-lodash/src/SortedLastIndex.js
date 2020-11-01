import React from 'react'
import sortedLastIndex from 'lodash/sortedLastIndex'

export default function SortedLastIndex(props) {
  return props.children(sortedLastIndex(props.array, props.value))
}

SortedLastIndex.defaultProps = {
  children: value => value
}
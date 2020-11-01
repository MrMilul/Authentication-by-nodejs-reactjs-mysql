import React from 'react'
import sortedIndexBy from 'lodash/sortedIndexBy'

export default function SortedIndexBy(props) {
  return props.children(sortedIndexBy(props.array, props.value, props.iteratee))
}

SortedIndexBy.defaultProps = {
  children: value => value
}
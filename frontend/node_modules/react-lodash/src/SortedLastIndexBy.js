import React from 'react'
import sortedLastIndexBy from 'lodash/sortedLastIndexBy'

export default function SortedLastIndexBy(props) {
  return props.children(sortedLastIndexBy(props.array, props.value, props.iteratee))
}

SortedLastIndexBy.defaultProps = {
  children: value => value
}
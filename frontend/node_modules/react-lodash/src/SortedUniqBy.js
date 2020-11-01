import React from 'react'
import sortedUniqBy from 'lodash/sortedUniqBy'

export default function SortedUniqBy(props) {
  return props.children(sortedUniqBy(props.array, props.iteratee))
}

SortedUniqBy.defaultProps = {
  children: value => value
}
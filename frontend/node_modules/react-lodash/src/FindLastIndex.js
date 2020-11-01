import React from 'react'
import findLastIndex from 'lodash/findLastIndex'

export default function FindLastIndex(props) {
  return props.children(findLastIndex(props.array, props.predicate, props.fromIndex))
}

FindLastIndex.defaultProps = {
  children: value => value
}
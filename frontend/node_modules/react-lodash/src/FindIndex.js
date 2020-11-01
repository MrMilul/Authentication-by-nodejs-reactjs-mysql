import React from 'react'
import findIndex from 'lodash/findIndex'

export default function FindIndex(props) {
  return props.children(findIndex(props.array, props.predicate, props.fromIndex))
}

FindIndex.defaultProps = {
  children: value => value
}
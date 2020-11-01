import React from 'react'
import findLast from 'lodash/findLast'

export default function FindLast(props) {
  return props.children(findLast(props.collection, props.predicate, props.fromIndex))
}

FindLast.defaultProps = {
  children: value => value
}